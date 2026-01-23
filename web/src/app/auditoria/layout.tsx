export const metadata = {
  title: 'Diagnóstico Estratégico IA para Construcción Modular | ModulorIA',
  description: 'Agenda tu diagnóstico estratégico gratuito. Analizamos tus procesos de construcción modular y calculamos el ROI exacto de implementar IA. 30 minutos, sin compromiso.',
  keywords: 'diagnóstico IA construcción, auditoría automatización construcción modular, consultoría IA constructoras, ROI automatización',
  alternates: {
    canonical: 'https://moduloria.com/auditoria',
  },
  openGraph: {
    title: 'Diagnóstico Estratégico IA para Construcción | ModulorIA',
    description: 'Descubre cuánto puedes ahorrar automatizando tu constructora con IA. Diagnóstico gratuito, 30 minutos, ROI calculado.',
    url: 'https://moduloria.com/auditoria',
    siteName: 'ModulorIA',
    images: [
      {
        url: 'https://moduloria.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ModulorIA - Diagnóstico Estratégico IA Construcción',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diagnóstico Estratégico IA Construcción | ModulorIA',
    description: 'Agenda gratis. Calculamos tu ROI exacto con automatización IA.',
  },
};

export default function AuditoriaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
