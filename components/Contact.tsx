// components/Contact.tsx
"use client";

/**
 * Contact form component for Agrícola BE
 * - Sends POST to /api/contact (expects backend ready to send email to contacto@agricolabe.com)
 * - Includes client validation, success/error states
 * - Includes floating WhatsApp button for direct chat: +56 9 9871 7363
 *
 * Comments in English.
 */

import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  company?: string;
  requirementType?: string; // e.g., "Pedido", "Consulta", "Colaboración"
  message: string;
};

const INITIAL: FormState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  requirementType: "Pedido",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | { ok: boolean; msg: string }>(null);

  function update<K extends keyof FormState>(k: K, v: FormState[K]) {
    setForm((s) => ({ ...s, [k]: v }));
  }

  function validate() {
    // Simple validation
    if (!form.name.trim()) return "Por favor indica tu nombre.";
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) return "Correo inválido.";
    if (!form.phone.trim()) return "Por favor indica un teléfono de contacto.";
    if (!form.message.trim() || form.message.trim().length < 10) return "Mensaje muy corto (mínimo 10 caracteres).";
    return null;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus(null);
    const err = validate();
    if (err) {
      setStatus({ ok: false, msg: err });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          to: "contacto@agricolabe.com",
        }),
      });

      const data = await res.json();
      if (res.ok && data?.success) {
        setStatus({ ok: true, msg: "Mensaje enviado — te contestamos pronto." });
        setForm(INITIAL);
      } else {
        const msg = data?.message ?? "Error al enviar. Intenta de nuevo más tarde.";
        setStatus({ ok: false, msg });
      }
    } catch (error) {
      setStatus({ ok: false, msg: "Error de red. Revisa tu conexión." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <section id="contacto" className="relative py-16 px-6 md:px-20 bg-agricola-white text-agricola-green">
        <div className="mx-auto max-w-4xl">
          <h3 className="font-serif text-3xl md:text-4xl font-semibold mb-2">Contacto & Requerimientos</h3>
          <p className="text-sm text-gray-700 mb-6">
            Cuéntanos tus volúmenes, frecuencia, y necesidades especiales. También puedes escribirnos a{" "}
            <a href="mailto:contacto@agricolabe.com" className="underline text-agricola-green">contacto@agricolabe.com</a>.
          </p>

          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <label className="flex flex-col">
                <span className="text-sm font-medium">Nombre</span>
                <input
                  className="mt-1 rounded-md border px-3 py-2"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  placeholder="Nombre completo"
                  required
                />
              </label>

              <label className="flex flex-col">
                <span className="text-sm font-medium">Correo</span>
                <input
                  type="email"
                  className="mt-1 rounded-md border px-3 py-2"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  placeholder="tucorreo@ejemplo.com"
                  required
                />
              </label>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <label className="flex flex-col">
                <span className="text-sm font-medium">Teléfono</span>
                <input
                  className="mt-1 rounded-md border px-3 py-2"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  placeholder="+56 9 9XXXXXXX"
                  required
                />
              </label>

              <label className="flex flex-col">
                <span className="text-sm font-medium">Empresa (opcional)</span>
                <input
                  className="mt-1 rounded-md border px-3 py-2"
                  value={form.company}
                  onChange={(e) => update("company", e.target.value)}
                  placeholder="Restaurante / Distribuidor"
                />
              </label>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 items-end">
              <label className="flex flex-col">
                <span className="text-sm font-medium">Tipo de requerimiento</span>
                <select
                  className="mt-1 rounded-md border px-3 py-2"
                  value={form.requirementType}
                  onChange={(e) => update("requirementType", e.target.value)}
                >
                  <option>Pedido</option>
                  <option>Consulta</option>
                  <option>Colaboración</option>
                  <option>Otro</option>
                </select>
              </label>

              <div className="text-sm text-gray-600">
                <div className="font-medium">Contacto preferente</div>
                <div className="mt-1">Email: <span className="text-agricola-green">contacto@agricolabe.com</span></div>
                <div>WhatsApp: <a className="text-agricola-green underline" href="https://wa.me/56998717363">+56 9 9871 7363</a></div>
              </div>
            </div>

            <label className="flex flex-col">
              <span className="text-sm font-medium">Mensaje / Requerimiento</span>
              <textarea
                className="mt-1 rounded-md border px-3 py-2 min-h-[120px]"
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                placeholder="Describe volúmenes, frecuencias, empaques, fechas requeridas, etc."
                required
              />
            </label>

            <div className="flex items-center gap-3">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-md px-5 py-3 bg-agricola-green text-agricola-white font-medium hover:opacity-95 transition disabled:opacity-60"
                disabled={loading}
                aria-disabled={loading}
              >
                {loading ? "Enviando..." : "Enviar requerimiento"}
              </button>

              <button
                type="button"
                onClick={() => {
                  setForm(INITIAL);
                  setStatus(null);
                }}
                className="inline-flex items-center gap-2 rounded-md px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50 transition"
              >
                Limpiar
              </button>

              <a
                href="https://wa.me/56998717363?text=Hola%20Agrícola%20BE%2C%20quiero%20consultar%20sobre%20..."
                target="_blank"
                rel="noreferrer"
                className="ml-auto inline-flex items-center gap-2 rounded-md px-4 py-2 border border-agricola-green text-agricola-green hover:bg-agricola-green hover:text-agricola-white transition"
              >
                Abrir WhatsApp
              </a>
            </div>

            {status && (
              <div
                role="status"
                className={`mt-4 rounded-md px-4 py-3 text-sm ${status.ok ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}
              >
                {status.msg}
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Floating WhatsApp button */}
      <a
        href="https://wa.me/56998717363"
        target="_blank"
        rel="noreferrer"
        aria-label="Abrir chat WhatsApp"
        className="fixed right-5 bottom-5 z-50 inline-flex items-center justify-center w-14 h-14 rounded-full shadow-lg bg-[#25D366] text-white"
      >
        {/* Simple SVG whatsapp icon */}
        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M21 15.5a5.5 5.5 0 0 1-5 5.4l-1 .2a11 11 0 0 1-10-10l.2-1A5.5 5.5 0 0 1 8.5 3h.1a5.5 5.5 0 0 1 5.4 5.1" />
          <path strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M17 14.5c-.2-.1-1.2-.6-1.4-.6-.3 0-.6 0-.9.6-.3.6-1 .9-1.8.9s-1.6-.4-2.2-1.2c-.6-.8-1-2-1-3.2 0-1.2.9-2.2 2-2.2.5 0 .9 0 1.3.3.4.3.4.4.7.3.3-.1.6-.2 1-.2.4 0 .9.1 1.3.6.4.5.4 1.1.2 1.5-.2.4-.5.8-1.1 1.1-.6.3-1 .4-1.4.5z" />
        </svg>
      </a>
    </>
  );
}
