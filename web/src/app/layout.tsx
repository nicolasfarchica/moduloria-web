import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "ModulorIA | IA y Automatización para la Industria de la Construcción",
  description: "Transformamos empresas de construcción con Inteligencia Artificial. Ahorra €67K-€156K/año automatizando procesos operativos.",
  keywords: "industria de la construcción, inteligencia artificial construcción, automatización obras, software construcción",
  metadataBase: new URL('https://moduloria.com'),
  alternates: {
    canonical: 'https://moduloria.com',
  },
  verification: {
    google: 'cd787c1f8c691567',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${manrope.variable}`}>
      <body className="antialiased font-sans">
        {/* Skip to main content (accesibilidad) */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-accent-copper focus:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-copper"
        >
          Saltar al contenido principal
        </a>

        {/* Navigation */}
        <Navigation />

        {/* Main Content */}
        <div id="main-content">
          {children}
        </div>

        {/* Footer */}
        <Footer />

        {/* Scroll to Top Button */}
        <ScrollToTop />

        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  );
}
