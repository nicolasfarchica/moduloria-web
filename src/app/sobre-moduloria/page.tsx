import NosotrosSection from '@/components/NosotrosSection';

export const metadata = {
  title: 'Sobre ModulorIA - Especialistas en IA para Construcción Modular',
  description: 'Somos especialistas en implementar IA práctica para empresas de construcción modular. No somos una consultora genérica. 100% enfocados en el sector construcción. ROI garantizado.',
  keywords: 'sobre ModulorIA, quiénes somos, especialistas IA construcción modular, consultoría IA construcción, automatización construcción especializada',
  openGraph: {
    title: 'Sobre ModulorIA - Especialistas en IA para Construcción',
    description: 'Consultoría 100% enfocada en implementar IA práctica en empresas de construcción modular e industrializada.',
    url: 'https://moduloria.com/sobre-moduloria',
    siteName: 'ModulorIA',
    locale: 'es_ES',
    type: 'website',
  },
};

export default function SobreModuloriaPage() {
  return (
    <main className="min-h-screen bg-background-start overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-copper/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-primary/5 rounded-full blur-[100px]" />
      </div>
      <div className="relative z-10">
        <NosotrosSection />
      </div>
    </main>
  );
}
