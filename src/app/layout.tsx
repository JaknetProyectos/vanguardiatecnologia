import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Vanguardia Tecnológica | Tecnología a tu medida",
    template: "%s | Vanguardia Tecnológica",
  },
  description: "Potencia tu productividad con soluciones tecnológicas integrales. Especialistas en hardware de alto rendimiento, software original y soporte técnico profesional.",
  keywords: ["tecnología", "laptops", "software original", "soporte técnico", "hardware gaming", "Vanguardia Tecnológica"],
  authors: [{ name: "Vanguardia Tecnológica" }],
  creator: "Vanguardia Tecnológica",

  // Configuración para Redes Sociales (Facebook, LinkedIn, etc.)
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://vanguardiatecnologica.com.mx", // Reemplaza con tu URL real
    title: "Vanguardia Tecnológica | Equipos y Soporte Especializado",
    description: "Despega con nuestras soluciones de tecnología y software original diseñadas para impulsar tu negocio.",
    siteName: "Vanguardia Tecnológica",
    images: [
      {
        url: "/og-image.jpg", // Asegúrate de tener una imagen en la carpeta public
        width: 1200,
        height: 630,
        alt: "Vanguardia Tecnológica - Terminal de Carga",
      },
    ],
  },

  // Configuración para Twitter/X
  twitter: {
    card: "summary_large_image",
    title: "Vanguardia Tecnológica | Tecnología a tu medida",
    description: "Soluciones de tecnología, software original y soporte especializado.",
    images: ["/og-image.jpg"],
  },

  // Robots y Favicons
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
