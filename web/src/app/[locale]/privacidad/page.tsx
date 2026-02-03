import { setRequestLocale, getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';

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
      ? 'Política de Privacidad | ModulorIA'
      : 'Privacy Policy | ModulorIA',
    description: isSpanish
      ? 'Política de privacidad y protección de datos de ModulorIA. Cumplimiento GDPR y transparencia total en el manejo de información.'
      : "ModulorIA's privacy and data protection policy. GDPR compliance and full transparency in information handling.",
    alternates: {
      canonical: `${baseUrl}/${locale}/${isSpanish ? 'privacidad' : 'privacy'}`,
      languages: {
        es: `${baseUrl}/es/privacidad`,
        en: `${baseUrl}/en/privacy`,
      },
    },
  };
}

export default async function PrivacidadPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('legal.privacy');

  // Sections with items: 0 (Información), 1 (Uso), 3 (Derechos)
  const sectionsWithItems = [0, 1, 3];
  const sectionCount = 6;

  return (
    <main className="min-h-screen bg-background-start">
      <div className="container-custom section-padding">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 font-heading">
            {t('title')}
          </h1>

          <div className="prose prose-invert max-w-none">
            {Array.from({ length: sectionCount }).map((_, index) => {
              const sectionTitle = t(`sections.${index}.title`);
              const sectionText = t(`sections.${index}.text`);

              // Get items only for sections that have them
              const items: string[] = [];
              if (sectionsWithItems.includes(index)) {
                for (let i = 0; i < 5; i++) {
                  const itemKey = `sections.${index}.items.${i}`;
                  if (t.has(itemKey)) {
                    items.push(t(itemKey));
                  }
                }
              }

              return (
                <div key={index} className="glass-card mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4">{sectionTitle}</h2>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    {sectionText}
                  </p>
                  {items.length > 0 && (
                    <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                      {items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                  {index === sectionCount - 1 && (
                    <p className="text-accent-copper mt-2">
                      contacto@moduloria.com
                    </p>
                  )}
                </div>
              );
            })}

            <div className="mt-8 text-center text-slate-500 text-sm">
              <p>{t('lastUpdated')}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
