import RecursosSection from '@/components/RecursosSection';

export const metadata = {
  title: 'Recursos Gratuitos de IA en Construcción Modular | ModulorIA',
  description: 'Guías, calculadoras y templates gratuitos para implementar automatización con IA en construcción modular. 25 procesos automatizables, checklist de preparación, casos de éxito reales.',
  keywords: 'recursos IA construcción, guías automatización construcción modular, calculadora ROI construcción, templates IA construcción, casos éxito automatización',
  openGraph: {
    title: 'Recursos Gratuitos de IA en Construcción | ModulorIA',
    description: 'Descarga guías, calculadoras y templates para automatizar tu empresa de construcción modular con IA.',
    url: 'https://moduloria.com/recursos',
    siteName: 'ModulorIA',
    locale: 'es_ES',
    type: 'website',
  },
};

export default function RecursosPage() {
  return (
    <main className="min-h-screen bg-background-start overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-copper/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-primary/5 rounded-full blur-[100px]" />
      </div>
      <div className="relative z-10">
        <RecursosSection />
      </div>
    </main>
  );
}
