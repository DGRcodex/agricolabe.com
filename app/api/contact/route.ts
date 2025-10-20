// /app/api/contact/route.ts
export const runtime = "nodejs"; // Ejecuta en Node (no edge)

import { NextResponse } from "next/server";

/** Lee una env var y la convierte en array (por comas) */
function envList(key: string, fallback?: string[]): string[] {
  const v = process.env[key];
  if (!v || !v.trim()) return fallback ?? [];
  return v.split(",").map(s => s.trim()).filter(Boolean);
}

/** Destinos controlados por .env.local */
const CONTACT_TO = envList("CONTACT_TO", ["contacto@agricolabe.com"]);
const CONTACT_BCC = envList("CONTACT_BCC"); // opcional

/** Mientras NO verifiques el dominio en Resend, usa este remitente.
 *  Cuando verifiques agricolabe.com, cambia a:
 *  const FROM_ADDRESS = "Agrícola BE <no-reply@agricolabe.com>";
 */
const FROM_ADDRESS = "Agrícola BE <contacto@agricolabe.com>";

type Payload = {
  name: string;
  email: string;
  phone: string;
  company?: string;
  requirementType?: string; // "Pedido" | "Consulta" | "Colaboración" | "Otro"
  message: string;
  _hp?: string; // honeypot anti-bot (opcional)
};

function isEmail(x: string) { return /^\S+@\S+\.\S+$/.test(x); }
function esc(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

/** Envío por API HTTP de Resend (sin SDK) */
async function sendResendEmail(params: {
  to: string[];
  subject: string;
  html?: string;
  text?: string;
  replyTo?: string;
  bcc?: string[];
}) {
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  if (!RESEND_API_KEY) throw new Error("RESEND_API_KEY no configurado");

  const payload: Record<string, any> = {
    from: FROM_ADDRESS,
    to: params.to,
    subject: params.subject,
  };
  if (params.html) payload.html = params.html;
  if (params.text) payload.text = params.text;
  if (params.replyTo) payload.reply_to = params.replyTo;
  if (params.bcc && params.bcc.length) payload.bcc = params.bcc;

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

    // Honeypot: si llega con contenido, ignoramos (probable bot)
    if (body._hp) return NextResponse.json({ success: true });

    // Validación mínima
    if (!body.name?.trim()) throw new Error("Falta nombre.");
    if (!isEmail(body.email)) throw new Error("Correo inválido.");
    if (!body.phone?.trim()) throw new Error("Falta teléfono.");
    if (!body.message || body.message.trim().length < 10)
      throw new Error("Mensaje muy corto.");

    const requirementType = body.requirementType || "Pedido";

    // HTML del correo interno
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

    // 1) Envío a todos los TO y BCC definidos
    await sendResendEmail({
      to: CONTACT_TO,
      bcc: CONTACT_BCC.length ? CONTACT_BCC : undefined,
      subject: `Nuevo contacto: ${requirementType} — ${body.name}`,
      html,
      replyTo: body.email,
    });

    // 2) Autorespuesta al cliente (opcional)
    await sendResendEmail({
      to: [body.email],
      subject: "Recibimos tu mensaje — Agrícola BE",
      text: `Hola ${body.name},

Gracias por escribirnos. Ya recibimos tu mensaje y te contactaremos pronto.
Si necesitas algo urgente, WhatsApp: +56 9 9871 7363.

Resumen:
- Tipo: ${requirementType}
- Teléfono: ${body.phone}
- Empresa: ${body.company || "-"}

Mensaje:
${body.message}

Desde la Tierra,
Agrícola BE`,
    });

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("CONTACT_ERROR", err);
    return NextResponse.json(
      { success: false, message: String(err?.message || err) },
      { status: 400 }
    );
  }
}
