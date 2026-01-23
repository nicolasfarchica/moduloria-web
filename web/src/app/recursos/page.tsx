import Link from 'next/link';
import RecursosSection from '@/components/RecursosSection';
import { getAllPosts } from '@/lib/blog';

export const revalidate = 3600;

export const metadata = {
  title: 'Recursos: Guias y Casos de Exito IA en Construccion Modular | ModulorIA',
  description: 'Articulos practicos sobre automatizacion con IA en construccion modular. Casos de exito reales, ROI calculado, guias paso a paso para PYMEs constructoras.',
  keywords: 'recursos ia construccion, guias automatizacion construccion modular, casos exito ia construccion, roi ia construccion pymes',
  alternates: {
    canonical: 'https://moduloria.com/recursos',
  },
  openGraph: {
    title: 'Recursos sobre IA en Construccion Modular | ModulorIA',
    description: 'Articulos, guias y casos de exito para implementar automatizacion con IA en tu empresa de construccion modular.',
    url: 'https://moduloria.com/recursos',
    siteName: 'ModulorIA',
    locale: 'es_ES',
    type: 'website',
  },
};

export default async function RecursosPage() {
  const posts = await getAllPosts();

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
              Blog: <span className="text-accent-copper">Articulos y Guias</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Guias practicas y casos de exito sobre automatizacion con IA en construccion modular
            </p>
          </div>

          {posts.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-slate-400">
                Proximamente publicaremos articulos sobre IA en construccion modular.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
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

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <p className="text-slate-300 mb-6 text-lg">
              Publicamos semanalmente. Cada articulo incluye datos reales y ROI calculado.
            </p>
            <Link
              href="/auditoria"
              className="btn-primary text-lg px-10 py-4 inline-block shadow-glow hover:shadow-copper-lg"
            >
              Agendar Diagnostico Estrategico
            </Link>
            <p className="text-slate-400 text-sm mt-4">
              Incluye roadmap personalizado + ROI calculado para tu empresa
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
