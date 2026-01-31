import Link from 'next/link';
import Image from 'next/image';
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

  const baseUrl = 'https://moduloria.com';
  const imageUrl = post.image
    ? post.image.startsWith('http') ? post.image : `${baseUrl}${post.image}`
    : `${baseUrl}/og-image.jpg`;

  return {
    title: `${post.title} | ModulorIA Blog`,
    description: post.excerpt,
    keywords: post.tags.join(', '),
    alternates: {
      canonical: `${baseUrl}/blog/${params.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${baseUrl}/blog/${params.slug}`,
      siteName: 'ModulorIA',
      images: [{ url: imageUrl, width: 1200, height: 630, alt: post.title }],
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [imageUrl],
    },
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const baseUrl = 'https://moduloria.com';
  const imageUrl = post.image
    ? post.image.startsWith('http') ? post.image : `${baseUrl}${post.image}`
    : undefined;

  // Article structured data (improved)
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: imageUrl,
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}/blog/${params.slug}`,
    },
    author: {
      '@type': 'Organization',
      name: post.author,
      url: baseUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'ModulorIA',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/images/moduloria-logo-v2.png`,
      },
    },
  };

  // BreadcrumbList structured data
  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: baseUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: `${baseUrl}/blog`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `${baseUrl}/blog/${params.slug}`,
      },
    ],
  };

  // FAQ structured data (if article has FAQs)
  const faqData = post.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  } : null;

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      {faqData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
        />
      )}

      <main className="min-h-screen bg-background-start">
        <article className="container-custom section-padding max-w-4xl mx-auto">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-slate-400">
              <li>
                <Link href="/" className="hover:text-accent-copper transition-colors">
                  Inicio
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <Link href="/blog" className="hover:text-accent-copper transition-colors">
                  Blog
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-slate-500 truncate max-w-[200px] md:max-w-none">
                  {post.title}
                </span>
              </li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-20 text-center max-w-3xl mx-auto">
            {/* Category & Reading Time */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="bg-accent-copper/10 text-accent-copper border border-accent-copper/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                {post.category}
              </span>
              <span className="text-slate-500 text-sm font-medium flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {post.readingTime}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-10 font-heading leading-[1.1] tracking-tight">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex items-center justify-center gap-8 text-slate-400 text-sm border-t border-white/5 pt-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-copper to-accent-glow flex items-center justify-center text-white font-bold">
                  {post.author.charAt(0)}
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold">{post.author}</div>
                  <div className="text-xs text-slate-500">Expert en IA Modular</div>
                </div>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div className="flex flex-col items-start">
                <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Publicado el</div>
                <time dateTime={post.date} className="text-white font-medium">
                  {new Date(post.date).toLocaleDateString('es-ES', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>
            </div>
          </header>

          {/* Featured Image - Ultra Premium */}
          {post.image && (
            <div className="relative h-[300px] md:h-[500px] mb-24 overflow-hidden rounded-[2rem] group">
              <Image
                src={post.image}
                alt={`${post.title} - ModulorIA Blog`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-start via-transparent to-transparent opacity-60" />
            </div>
          )}

          {/* Content - The "Magazine" Experience */}
          <div
            className="blog-content max-w-[800px] mx-auto"
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
              Agendar Diagnóstico Estratégico
            </Link>
          </div>
        </article>
      </main>
    </>
  );
}
