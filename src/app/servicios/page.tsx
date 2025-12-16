import ProblemasSection from '@/components/ProblemasSection';
import ServiciosSection from '@/components/ServiciosSection';

export const metadata = {
  title: 'Servicios de IA para Construcción Modular | ModulorIA',
  description: 'Soluciones completas de IA para la construcción modular. Desde automatización de presupuestos hasta control de calidad visual. Resolvemos 25 problemas documentados con ROI garantizado.',
  keywords: 'servicios IA construcción modular, automatización construcción, soluciones construcción modular, IA para constructoras, problemas construcción, presupuestos automatizados',
  alternates: {
    canonical: 'https://moduloria.com/servicios',
  },
  openGraph: {
    title: 'Servicios de IA para Construcción Modular | ModulorIA',
    description: '25 problemas resueltos + 6 soluciones de automatización. ROI garantizado en 2-3 semanas.',
    url: 'https://moduloria.com/servicios',
    siteName: 'ModulorIA',
    images: [
      {
        url: 'https://moduloria.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ModulorIA - Servicios de IA para Construcción Modular',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Servicios de IA para Construcción Modular | ModulorIA',
    description: '25 problemas resueltos + 6 soluciones de automatización. ROI garantizado en 2-3 semanas.',
    images: ['https://moduloria.com/og-image.jpg'],
  },
};

export default function ServiciosPage() {
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
              <span className="text-secondary-beige text-sm font-medium uppercase tracking-widest">Catálogo Completo</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-heading">
              Servicios de <span className="text-accent-copper">IA en Construcción Modular</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-8 font-light leading-relaxed">
              Problemas reales de la industria + Soluciones concretas de automatización.
              <br />
              <strong className="text-white">Todo con ROI calculado y garantizado.</strong>
            </p>

            <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
              <div className="bg-white/5 border border-white/10 rounded-xl px-6 py-4">
                <div className="text-3xl font-bold text-accent-copper mb-1">Alto Ahorro</div>
                <div className="text-sm text-slate-400">Medible y Garantizado</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl px-6 py-4">
                <div className="text-3xl font-bold text-accent-copper mb-1">6+</div>
                <div className="text-sm text-slate-400">Soluciones Concretas</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl px-6 py-4">
                <div className="text-3xl font-bold text-accent-copper mb-1">2-3 sem</div>
                <div className="text-sm text-slate-400">ROI Promedio</div>
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
