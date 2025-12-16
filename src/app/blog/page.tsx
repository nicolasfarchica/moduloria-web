import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';

export const metadata = {
  title: 'Blog | ModulorIA - IA y Automatización en Construcción Modular',
  description: 'Artículos, guías y recursos sobre Inteligencia Artificial y automatización para la industria de la construcción modular.',
  keywords: 'blog IA construcción, automatización construcción modular, guías IA, recursos construcción',
  alternates: {
    canonical: 'https://moduloria.com/blog',
  },
  openGraph: {
    title: 'Blog | ModulorIA',
    description: 'Guías y recursos sobre IA en construcción modular.',
    url: 'https://moduloria.com/blog',
    siteName: 'ModulorIA',
    type: 'website',
  },
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <main className="min-h-screen bg-background-start">
      <div className="container-custom section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
            Blog de <span className="text-accent-copper">ModulorIA</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Artículos, guías y recursos sobre IA y automatización en construcción modular.
          </p>
        </div>

        {/* Posts Grid */}
        {posts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-slate-400 text-lg">
              Próximamente publicaremos artículos sobre IA en construcción modular.
            </p>
            <Link
              href="/"
              className="btn-primary mt-8 inline-block"
            >
              Volver al Inicio
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group glass-card hover:border-accent-copper/50 transition-all duration-300"
              >
                {/* Image */}
                {post.image && (
                  <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

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
                <h2 className="text-xl font-bold text-white mb-3 group-hover:text-accent-copper transition-colors">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-white/5">
                  <span>{post.author}</span>
                  <span>{new Date(post.date).toLocaleDateString('es-ES', {
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

        {/* CTA */}
        <div className="text-center mt-16 pt-16 border-t border-white/10">
          <h3 className="text-2xl font-bold text-white mb-4">
            ¿Quieres implementar IA en tu constructora?
          </h3>
          <p className="text-slate-300 mb-6">
            Agenda un diagnóstico estratégico y descubre cómo ahorrar tiempo y dinero.
          </p>
          <Link
            href="/auditoria"
            className="btn-primary px-8 py-4 inline-block"
          >
            📞 Agendar Diagnóstico Estratégico
          </Link>
        </div>
      </div>
    </main>
  );
}
