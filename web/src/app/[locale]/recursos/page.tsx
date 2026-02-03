import { setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { Link } from '@/i18n/routing';
import RecursosSection from '@/components/RecursosSection';
import { getAllPosts } from '@/lib/blog';

export const revalidate = 3600;

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
      ? 'Recursos: Guías y Casos de Éxito IA en Construcción Modular | ModulorIA'
      : 'Resources: AI Guides and Success Stories in Modular Construction | ModulorIA',
    description: isSpanish
      ? 'Artículos prácticos sobre automatización con IA en construcción modular. Casos de éxito reales, ROI calculado, guías paso a paso para PYMEs constructoras.'
      : 'Practical articles on AI automation in modular construction. Real success stories, calculated ROI, step-by-step guides for construction SMEs.',
    keywords: isSpanish
      ? 'recursos ia construcción, guías automatización construcción modular, casos éxito ia construcción, roi ia construcción pymes'
      : 'ai construction resources, modular construction automation guides, ai construction success stories, ai construction sme roi',
    alternates: {
      canonical: `${baseUrl}/${locale}/${isSpanish ? 'recursos' : 'resources'}`,
      languages: {
        es: `${baseUrl}/es/recursos`,
        en: `${baseUrl}/en/resources`,
      },
    },
    openGraph: {
      title: isSpanish
        ? 'Recursos sobre IA en Construcción Modular | ModulorIA'
        : 'AI Resources for Modular Construction | ModulorIA',
      description: isSpanish
        ? 'Artículos, guías y casos de éxito para implementar automatización con IA en tu empresa de construcción modular.'
        : 'Articles, guides, and success stories for implementing AI automation in your modular construction company.',
      url: `${baseUrl}/${locale}/${isSpanish ? 'recursos' : 'resources'}`,
      siteName: 'ModulorIA',
      locale: isSpanish ? 'es_ES' : 'en_US',
      type: 'website',
    },
  };
}

export default async function RecursosPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const posts = await getAllPosts();
  const isSpanish = locale === 'es';

  return (
    <main className="min-h-screen bg-background-start overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-copper/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-primary/5 rounded-full blur-[100px]" />
      </div>
      <div className="relative z-10">
        <RecursosSection />

        {/* Blog Section */}
        <section className="container-custom section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
              Blog: <span className="text-accent-copper">
                {isSpanish ? 'Artículos y Guías' : 'Articles and Guides'}
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              {isSpanish
                ? 'Guías prácticas y casos de éxito sobre automatización con IA en construcción modular'
                : 'Practical guides and success stories on AI automation in modular construction'}
            </p>
          </div>

          {posts.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-slate-400">
                {isSpanish
                  ? 'Próximamente publicaremos artículos sobre IA en construcción modular.'
                  : 'We will soon publish articles about AI in modular construction.'}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}` as '/blog/[slug]'}
                  className="group glass-card p-6 hover:border-accent-copper/50 transition-all duration-300"
                >
                  {/* Category Badge */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-accent-copper/20 text-accent-copper px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                    <span className="text-slate-500 text-xs">
                      {post.readingTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-copper transition-colors">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-white/5">
                    <span>{post.author}</span>
                    <span>{new Date(post.date).toLocaleDateString(isSpanish ? 'es-ES' : 'en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}</span>
                  </div>

                  {/* Tags */}
                  {post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs text-slate-400 bg-slate-800/50 px-2 py-1 rounded"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </Link>
              ))}
            </div>
          )}

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <p className="text-slate-300 mb-6 text-lg">
              {isSpanish
                ? 'Publicamos semanalmente. Cada artículo incluye datos reales y ROI calculado.'
                : 'We publish weekly. Each article includes real data and calculated ROI.'}
            </p>
            <Link
              href="/auditoria"
              className="btn-primary text-lg px-10 py-4 inline-block shadow-glow hover:shadow-copper-lg"
            >
              {isSpanish ? 'Agendar Diagnóstico Estratégico' : 'Schedule Strategic Assessment'}
            </Link>
            <p className="text-slate-400 text-sm mt-4">
              {isSpanish
                ? 'Incluye roadmap personalizado + ROI calculado para tu empresa'
                : 'Includes personalized roadmap + calculated ROI for your company'}
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
