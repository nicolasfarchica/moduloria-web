import { setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import RecursosSection from '@/components/RecursosSection';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const isSpanish = locale === 'es';
  const baseUrl = 'https://moduloria.com';

  return {
    title: isSpanish
      ? 'Newsletter | ModulorIA - IA en Construcción Modular'
      : 'Newsletter | ModulorIA - AI in Modular Construction',
    description: isSpanish
      ? 'Suscríbete al newsletter de ModulorIA. Recibe cada semana 1 automatización práctica para tu constructora modular con ROI estimado.'
      : 'Subscribe to ModulorIA newsletter. Receive one practical automation for your modular construction company every week with estimated ROI.',
    alternates: {
      canonical: `${baseUrl}/${locale}/newsletter`,
      languages: {
        es: `${baseUrl}/es/newsletter`,
        en: `${baseUrl}/en/newsletter`,
      },
    },
    openGraph: {
      title: isSpanish
        ? 'Newsletter | ModulorIA'
        : 'Newsletter | ModulorIA',
      description: isSpanish
        ? 'Automatización práctica para construcción modular, cada semana.'
        : 'Practical automation for modular construction, every week.',
      url: `${baseUrl}/${locale}/newsletter`,
      siteName: 'ModulorIA',
      locale: isSpanish ? 'es_ES' : 'en_US',
      type: 'website',
    },
  };
}

export default async function NewsletterPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="min-h-screen bg-background-start overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-copper/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-primary/5 rounded-full blur-[100px]" />
      </div>
      <div className="relative z-10 pt-20">
        <RecursosSection />
      </div>
    </main>
  );
}
