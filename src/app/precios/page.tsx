import PreciosSection from '@/components/PreciosSection';

export const metadata = {
  title: 'Precios de IA en Construcción Modular | ModulorIA',
  description: 'Precios transparentes para automatización en construcción modular con IA. Desde €299 diagnóstico hasta €25K implementación completa. ROI en 2-8 semanas. Sin contratos eternos.',
  keywords: 'precios IA construcción modular, automatización construcción precios, costos IA construcción, inversión automatización construcción modular',
  openGraph: {
    title: 'Precios de IA en Construcción Modular | ModulorIA',
    description: 'Implementa automatización en construcción modular desde €3K. Precios transparentes, sin letra pequeña, ROI garantizado.',
    url: 'https://moduloria.com/precios',
    siteName: 'ModulorIA',
    locale: 'es_ES',
    type: 'website',
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
