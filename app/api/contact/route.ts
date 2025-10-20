// /app/api/contact/route.ts
export const runtime = "nodejs"; // asegura Node

import { NextResponse } from "next/server";

/** Convierte una env var separada por comas en array */
function envList(key: string, fallback?: string[]): string[] {
  const v = process.env[key];
  if (!v || !v.trim()) return fallback ?? [];
  return v.split(",").map((s) => s.trim()).filter(Boolean);
}

/** DESTINOS (pueden ser varios, en .env.local) */
const CONTACT_TO = envList("CONTACT_TO", ["contacto@agricolabe.com"]);
const CONTACT_BCC = envList("CONTACT_BCC"); // opcional

/** REMITENTE (dominio ya verificado) */
const FROM_ADDRESS = "Agrícola BE <daniela.apablaza@agricolabe.com>";

type Payload = {
  name: string;
  email: string;
  phone: string;
  company?: string;
  requirementType?: string; // "Pedido" | "Consulta" | "Colaboración" | "Otro"
  message: string;
  _hp?: string; // honeypot anti-bot
};

function isEmail(x: string): x is string {
  return /^\S+@\S+\.\S+$/.test(x);
}
function esc(s: string): string {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

/** Tipo exacto del payload que acepta la API de Resend para /emails */
interface ResendEmailPayload {
  from: string;
  to: string[];
  subject: string;
  html?: string;
  text?: string;
  reply_to?: string;
  bcc?: string[];
}

/** Envío por API HTTP de Resend (sin SDK) */
async function sendResendEmail(params: {
  to: string[];
  subject: string;
  html?: string;
  text?: string;
  replyTo?: string;
  bcc?: string[];
}): Promise<void> {
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  if (!RESEND_API_KEY) throw new Error("RESEND_API_KEY no configurado");

  const payload: ResendEmailPayload = {
    from: FROM_ADDRESS,
    to: params.to,
    subject: params.subject,
    ...(params.html ? { html: params.html } : {}),
    ...(params.text ? { text: params.text } : {}),
    ...(params.replyTo ? { reply_to: params.replyTo } : {}),
    ...(params.bcc && params.bcc.length ? { bcc: params.bcc } : {}),
  };

  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!r.ok) {
    const errText = await r.text().catch(() => "");
    throw new Error(`Resend error ${r.status}: ${errText}`);
  }
}

export async function POST(req: Request) {
  try {
    if (!CONTACT_TO.length) throw new Error("CONTACT_TO no configurado");

    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "-";
    const ua = req.headers.get("user-agent") || "-";

    const body = (await req.json()) as Payload;

    // Honeypot: si viene relleno, ignoramos (posible bot)
    if (body._hp) return NextResponse.json({ success: true });

    // Validación mínima
    if (!body.name?.trim()) throw new Error("Falta nombre.");
    if (!isEmail(body.email)) throw new Error("Correo inválido.");
    if (!body.phone?.trim()) throw new Error("Falta teléfono.");
    if (!body.message || body.message.trim().length < 10)
      throw new Error("Mensaje muy corto.");

    const requirementType = body.requirementType || "Pedido";

    // Email interno (a ustedes)
    const html = `
      <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif">
        <h2 style="margin:0 0 8px">Nuevo contacto (${esc(requirementType)})</h2>
        <p><b>Nombre:</b> ${esc(body.name)}</p>
        <p><b>Email:</b> ${esc(body.email)}</p>
        <p><b>Teléfono:</b> ${esc(body.phone)}</p>
        ${body.company ? `<p><b>Empresa:</b> ${esc(body.company)}</p>` : ""}
        <p><b>Mensaje:</b></p>
        <pre style="white-space:pre-wrap">${esc(body.message)}</pre>
        <hr/>
        <p style="font-size:12px;color:#666">IP: ${esc(ip)} · UA: ${esc(ua)}</p>
      </div>
    `;

    // 1) Llega a los TO/BCC definidos
    await sendResendEmail({
      to: CONTACT_TO,
      bcc: CONTACT_BCC.length ? CONTACT_BCC : undefined,
      subject: `Nuevo contacto: ${requirementType} — ${body.name}`,
      html,
      // Responder al aviso interno contesta al cliente:
      replyTo: body.email,
    });

    // 2) Autorespuesta (opcional)
    await sendResendEmail({
      to: [body.email],
      subject: "Recibimos tu mensaje — Agrícola BE",
      text: `Hola ${body.name},

Gracias por escribirnos. Ya recibimos tu mensaje y te contactaremos pronto.
Si necesitas algo urgente, WhatsApp: +56 9 9871 7363.

Desde la Tierra,
Agrícola BE`,
      // Si el cliente responde, vuelve a la bandeja compartida:
      replyTo: "contacto@agricolabe.com",
    });

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    // sin `any`: manejamos error como `unknown`
    const message =
      err instanceof Error ? err.message : typeof err === "string" ? err : "Error desconocido";
    console.error("CONTACT_ERROR", message);
    return NextResponse.json({ success: false, message }, { status: 400 });
  }
}
