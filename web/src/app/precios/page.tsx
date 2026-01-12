import PreciosSection from '@/components/PreciosSection';

export const metadata = {
  title: 'Planes y Opciones de IA en Construcción Modular | ModulorIA',
  description: 'Opciones flexibles de automatización en construcción modular con IA. Desde diagnóstico estratégico hasta implementación completa. ROI en 2-8 semanas. Sin contratos eternos.',
  keywords: 'planes IA construcción modular, automatización construcción opciones, soluciones IA construcción, inversión automatización construcción modular',
  alternates: {
    canonical: 'https://moduloria.com/precios',
  },
  openGraph: {
    title: 'Planes y Opciones de IA en Construcción Modular | ModulorIA',
    description: 'Implementa automatización en construcción modular con planes flexibles. Precios transparentes adaptados a tu empresa, sin letra pequeña, ROI garantizado.',
    url: 'https://moduloria.com/precios',
    siteName: 'ModulorIA',
    images: [
      {
        url: 'https://moduloria.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ModulorIA - Planes de IA para Construcción Modular',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Planes y Opciones de IA en Construcción Modular | ModulorIA',
    description: 'Implementa automatización en construcción modular con planes flexibles adaptados a tu empresa. ROI garantizado.',
    images: ['https://moduloria.com/og-image.jpg'],
  },
};

export default function PreciosPage() {
  return (
    <main className="min-h-screen bg-background-start overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-copper/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-primary/5 rounded-full blur-[100px]" />
      </div>
      <div className="relative z-10">
        <PreciosSection />
      </div>
    </main>
  );
}
