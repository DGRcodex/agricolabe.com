// app/layout.tsx
import type { Metadata } from "next";
import type { Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = { themeColor: "#234b3f" };

export const metadata: Metadata = {
  metadataBase: new URL("https://agricolabe.com"),
  title: { default: "Agrícola BE — Desde la Tierra", template: "%s | Agrícola BE" },
  description: "Productos frescos y colaboraciones agrícolas. Desde la Tierra.",
  applicationName: "Agrícola BE",
  authors: [{ name: "dgrcodex", url: "https://dgrcodex.me" }],
  creator: "dgrcodex",
  publisher: "Sambalab",
  alternates: { canonical: "/" },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "Agrícola BE — Desde la Tierra",
    description: "Productos frescos y colaboraciones agrícolas.",
    url: "https://agricolabe.com",
    siteName: "Agrícola BE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agrícola BE — Desde la Tierra",
    description: "Productos frescos y colaboraciones agrícolas.",
    creator: "@dgrcodex",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className="display-playfair">
      <body className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}>
        {/* WRAPPER EXTERNO: controla altura/scroll general */}
        <div id="site-scale" className="min-h-dvh flex flex-col">
          {/* WRAPPER INTERNO: es el ÚNICO que se escala (no controla altura) */}
          <div className="scale-viewport flex-1 flex flex-col">
            <main className="flex-1 min-h-0">{children}</main>
            {/* Si el Footer se renderiza por página, no lo dupliques aquí */}
          </div>
          <SeoJsonLd />
        </div>
      </body>
    </html>
  );
}

/** JSON-LD */
function SeoJsonLd() {
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Agrícola BE",
    url: "https://agricolabe.com",
    slogan: "Desde la Tierra",
    logo: "https://agricolabe.com/favicon-512.png",
    sameAs: ["https://github.com/dgrcodex", "https://sambalab.pro", "https://dgrcodex.me"],
  };
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Agrícola BE",
    url: "https://agricolabe.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://agricolabe.com/search?q={query}",
      "query-input": "required name=query",
    },
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
    </>
  );
}
