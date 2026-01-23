import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllPostSlugs, getPostBySlug } from '@/lib/blog';

export const revalidate = 3600;

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Post no encontrado | ModulorIA',
    };
  }

  return {
    title: `${post.title} | ModulorIA Blog`,
    description: post.excerpt,
    keywords: post.tags.join(', '),
    alternates: {
      canonical: `https://moduloria.com/blog/${params.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://moduloria.com/blog/${params.slug}`,
      siteName: 'ModulorIA',
      images: post.image ? [{ url: post.image }] : [],
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: post.image ? [post.image] : [],
    },
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  // Article structured data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'ModulorIA',
      logo: {
        '@type': 'ImageObject',
        url: 'https://moduloria.com/images/moduloria-logo-v2.png',
      },
    },
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main className="min-h-screen bg-background-start">
        <article className="container-custom section-padding max-w-4xl mx-auto">
          {/* Back Link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-accent-copper hover:text-accent-copper/80 transition-colors mb-8"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver al Blog
          </Link>

          {/* Header */}
          <header className="mb-12">
            {/* Category & Reading Time */}
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-accent-copper/20 text-accent-copper px-4 py-1 rounded-full text-sm font-semibold">
                {post.category}
              </span>
              <span className="text-slate-400 text-sm">
                {post.readingTime}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading leading-tight">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex items-center gap-6 text-slate-400 text-sm">
              <div className="flex items-center gap-2">
                <span className="font-semibold">Por {post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('es-ES', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>
            </div>

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm text-slate-400 bg-slate-800/50 px-3 py-1 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* Featured Image */}
          {post.image && (
            <div className="relative h-96 mb-12 overflow-hidden rounded-2xl">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Content */}
          <div
            className="blog-content prose prose-invert prose-lg max-w-none
              prose-headings:text-white prose-headings:font-heading
              prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:pb-4
              prose-h3:text-xl prose-h3:mt-10 prose-h3:mb-4
              prose-h4:text-lg prose-h4:mt-8 prose-h4:mb-3
              prose-p:text-slate-300 prose-p:leading-relaxed prose-p:mb-5
              prose-a:text-accent-copper prose-a:no-underline hover:prose-a:underline
              prose-strong:text-white prose-strong:font-semibold
              prose-ul:text-slate-300 prose-ol:text-slate-300
              prose-ul:my-6 prose-ol:my-6
              prose-li:marker:text-accent-copper prose-li:my-2
              prose-code:text-accent-copper prose-code:bg-slate-800/50 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
              prose-pre:bg-slate-900/80 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-xl prose-pre:my-8
              prose-blockquote:border-l-accent-copper prose-blockquote:text-slate-300 prose-blockquote:not-italic prose-blockquote:my-8
              prose-img:rounded-xl prose-img:shadow-lg
              prose-table:border-collapse prose-table:w-full
              prose-thead:border-b-2 prose-thead:border-accent-copper/30
              prose-th:text-white prose-th:text-left prose-th:p-3 prose-th:text-sm prose-th:font-semibold prose-th:bg-slate-800/30
              prose-td:p-3 prose-td:text-sm prose-td:border-b prose-td:border-white/5
              prose-tr:border-b prose-tr:border-white/5
              prose-hr:border-white/10 prose-hr:my-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA */}
          <div className="mt-16 p-8 bg-gradient-to-r from-slate-900/80 to-primary-dark/50 border border-white/10 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Quieres implementar esto en tu empresa?
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Agenda un diagnóstico estratégico y te mostramos cómo automatizar tus procesos con IA.
            </p>
            <Link
              href="/auditoria"
              className="btn-primary px-8 py-4 inline-block shadow-copper-glow"
            >
              📞 Agendar Diagnóstico Estratégico
            </Link>
          </div>
        </article>
      </main>
    </>
  );
}
