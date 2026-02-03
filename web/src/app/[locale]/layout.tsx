import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import "../globals.css";
import dynamic from "next/dynamic";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Chatbot = dynamic(() => import("@/components/Chatbot"), { ssr: false });

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

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = "https://moduloria.com";

  const titles: Record<string, string> = {
    es: "ModulorIA | IA y Automatización para la Industria de la Construcción",
    en: "ModulorIA | AI & Automation for the Construction Industry",
  };

  const descriptions: Record<string, string> = {
    es: "Transformamos empresas de construcción con Inteligencia Artificial. Ahorra €67K-€156K/año automatizando procesos operativos.",
    en: "We transform construction companies with Artificial Intelligence. Save €67K-€156K/year by automating operational processes.",
  };

  return {
    title: titles[locale] || titles.es,
    description: descriptions[locale] || descriptions.es,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        es: `${baseUrl}/es`,
        en: `${baseUrl}/en`,
      },
    },
    verification: {
      google: "cd787c1f8c691567",
    },
    openGraph: {
      locale: locale === "es" ? "es_ES" : "en_US",
      alternateLocale: locale === "es" ? "en_US" : "es_ES",
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  // Validate that the incoming locale is valid
  if (!routing.locales.includes(locale as typeof routing.locales[number])) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Get messages for the current locale
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${inter.variable} ${manrope.variable}`}>
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-EK62LC6D3D"
        />
        <script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-EK62LC6D3D');
            `,
          }}
        />
      </head>
      <body className="antialiased font-sans">
        <NextIntlClientProvider messages={messages} locale={locale}>
          {/* Skip to main content (accessibility) */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-accent-copper focus:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-copper"
          >
            {locale === "es" ? "Saltar al contenido principal" : "Skip to main content"}
          </a>

          {/* Navigation */}
          <Navigation />

          {/* Main Content */}
          <div id="main-content">{children}</div>

          {/* Footer */}
          <Footer />

          {/* Scroll to Top Button */}
          <ScrollToTop />

          {/* Chatbot */}
          <Chatbot />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
