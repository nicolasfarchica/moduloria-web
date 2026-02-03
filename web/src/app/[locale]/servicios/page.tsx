import { setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import ProblemasSection from '@/components/ProblemasSection';
import ServiciosSection from '@/components/ServiciosSection';

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
      ? 'Servicios de IA para Construcción Modular | ModulorIA'
      : 'AI Services for Modular Construction | ModulorIA',
    description: isSpanish
      ? 'Soluciones completas de IA para la construcción modular. Desde automatización de presupuestos hasta control de calidad visual. Resolvemos 25 problemas documentados con ROI garantizado.'
      : 'Complete AI solutions for modular construction. From budget automation to visual quality control. We solve 25 documented problems with guaranteed ROI.',
    keywords: isSpanish
      ? 'servicios IA construcción modular, automatización construcción, soluciones construcción modular, IA para constructoras, problemas construcción, presupuestos automatizados'
      : 'AI services modular construction, construction automation, modular construction solutions, AI for builders, construction problems, automated budgets',
    alternates: {
      canonical: `${baseUrl}/${locale}/${isSpanish ? 'servicios' : 'services'}`,
      languages: {
        es: `${baseUrl}/es/servicios`,
        en: `${baseUrl}/en/services`,
      },
    },
    openGraph: {
      title: isSpanish
        ? 'Servicios de IA para Construcción Modular | ModulorIA'
        : 'AI Services for Modular Construction | ModulorIA',
      description: isSpanish
        ? '25 problemas resueltos + 6 soluciones de automatización. ROI garantizado en 2-3 semanas.'
        : '25 problems solved + 6 automation solutions. Guaranteed ROI in 2-3 weeks.',
      url: `${baseUrl}/${locale}/${isSpanish ? 'servicios' : 'services'}`,
      siteName: 'ModulorIA',
      images: [
        {
          url: `${baseUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: isSpanish
            ? 'ModulorIA - Servicios de IA para Construcción Modular'
            : 'ModulorIA - AI Services for Modular Construction',
        },
      ],
      locale: isSpanish ? 'es_ES' : 'en_US',
      type: 'website',
    },
  };
}

export default async function ServiciosPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const isSpanish = locale === 'es';

  return (
    <main className="min-h-screen bg-background-start overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-copper/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="section-padding pt-32 pb-16 text-center">
          <div className="container-custom">
            <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-6 py-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-accent-copper animate-pulse" />
              <span className="text-secondary-beige text-sm font-medium uppercase tracking-widest">
                {isSpanish ? 'Catálogo Completo' : 'Complete Catalog'}
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-heading">
              {isSpanish ? (
                <>Servicios de <span className="text-accent-copper">IA en Construcción Modular</span></>
              ) : (
                <>AI Services for <span className="text-accent-copper">Modular Construction</span></>
              )}
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-8 font-light leading-relaxed">
              {isSpanish ? (
                <>
                  Problemas reales de la industria + Soluciones concretas de automatización.
                  <br />
                  <strong className="text-white">Todo con ROI calculado y garantizado.</strong>
                </>
              ) : (
                <>
                  Real industry problems + Concrete automation solutions.
                  <br />
                  <strong className="text-white">All with calculated and guaranteed ROI.</strong>
                </>
              )}
            </p>

            <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
              <div className="bg-white/5 border border-white/10 rounded-xl px-6 py-4">
                <div className="text-3xl font-bold text-accent-copper mb-1">
                  {isSpanish ? 'Alto Ahorro' : 'High Savings'}
                </div>
                <div className="text-sm text-slate-400">
                  {isSpanish ? 'Medible y Garantizado' : 'Measurable & Guaranteed'}
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl px-6 py-4">
                <div className="text-3xl font-bold text-accent-copper mb-1">6+</div>
                <div className="text-sm text-slate-400">
                  {isSpanish ? 'Soluciones Concretas' : 'Concrete Solutions'}
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl px-6 py-4">
                <div className="text-3xl font-bold text-accent-copper mb-1">2-3 {isSpanish ? 'sem' : 'wks'}</div>
                <div className="text-sm text-slate-400">
                  {isSpanish ? 'ROI Promedio' : 'Average ROI'}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problemas Section */}
        <ProblemasSection />

        {/* Servicios/Soluciones Section */}
        <ServiciosSection />
      </div>
    </main>
  );
}
