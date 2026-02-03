import { setRequestLocale, getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { Link } from '@/i18n/routing';
import { getAllPosts } from '@/lib/blog';

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
      ? 'Blog | ModulorIA - IA y Automatización en Construcción Modular'
      : 'Blog | ModulorIA - AI and Automation in Modular Construction',
    description: isSpanish
      ? 'Artículos, guías y recursos sobre Inteligencia Artificial y automatización para la industria de la construcción modular.'
      : 'Articles, guides, and resources on Artificial Intelligence and automation for the modular construction industry.',
    keywords: isSpanish
      ? 'blog IA construcción, automatización construcción modular, guías IA, recursos construcción'
      : 'AI construction blog, modular construction automation, AI guides, construction resources',
    alternates: {
      canonical: `${baseUrl}/${locale}/blog`,
      languages: {
        es: `${baseUrl}/es/blog`,
        en: `${baseUrl}/en/blog`,
      },
    },
    openGraph: {
      title: isSpanish ? 'Blog | ModulorIA' : 'Blog | ModulorIA',
      description: isSpanish
        ? 'Guías y recursos sobre IA en construcción modular.'
        : 'Guides and resources on AI in modular construction.',
      url: `${baseUrl}/${locale}/blog`,
      siteName: 'ModulorIA',
      type: 'website',
    },
  };
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const posts = await getAllPosts();
  const t = await getTranslations('blog');

  return (
    <main className="min-h-screen bg-background-start">
      <div className="container-custom section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
            {t('page.title')} <span className="text-accent-copper">{t('page.titleHighlight')}</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            {t('page.subtitle')}
          </p>
        </div>

        {/* Posts Grid */}
        {posts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-slate-400 text-lg">
              {t('page.emptyMessage')}
            </p>
            <Link
              href="/"
              className="btn-primary mt-8 inline-block"
            >
              {t('page.backToHome')}
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}` as '/blog/[slug]'}
                className="group glass-card !p-0 border-white/5 hover:border-accent-copper/30 transition-all duration-500 overflow-hidden flex flex-col"
              >
                {/* Image */}
                {post.image && (
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background-start/80 to-transparent opacity-60" />
                  </div>
                )}

                <div className="p-8 flex-grow flex flex-col">
                  {/* Category Badge */}
                  <div className="flex items-center gap-3 mb-6">
                    <span className="bg-accent-copper/10 text-accent-copper border border-accent-copper/20 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                      {post.category}
                    </span>
                    <span className="text-slate-500 text-xs">
                      {post.readingTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-accent-copper transition-colors leading-tight font-heading">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-slate-400 text-sm mb-6 line-clamp-3 font-light leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-accent-copper/20 flex items-center justify-center text-[10px] text-accent-copper font-bold uppercase">
                        {post.author.charAt(0)}
                      </div>
                      <span className="text-xs text-slate-300 font-medium">{post.author}</span>
                    </div>
                    <time className="text-xs text-slate-500">
                      {new Date(post.date).toLocaleDateString(locale === 'es' ? 'es-ES' : 'en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </time>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-16 pt-16 border-t border-white/10">
          <h3 className="text-2xl font-bold text-white mb-4">
            {t('cta.title')}
          </h3>
          <p className="text-slate-300 mb-6">
            {t('cta.description')}
          </p>
          <Link
            href="/auditoria"
            className="btn-primary px-8 py-4 inline-block"
          >
            {t('cta.button')}
          </Link>
        </div>
      </div>
    </main>
  );
}
