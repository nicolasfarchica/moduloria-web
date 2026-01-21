'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NewsletterPage() {
  const [formData, setFormData] = useState({
    email: '',
    nombre: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error al suscribirse');
      }

      setSubmitted(true);
    } catch (err) {
      console.error('Error submitting form:', err);
      setError(err instanceof Error ? err.message : 'Error al suscribirse. Por favor, intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-background-start flex items-center justify-center p-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="max-w-2xl mx-auto text-center text-white relative z-10 glass-panel p-12 border border-accent-copper/20 shadow-copper-glow">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="text-8xl mb-8 inline-block"
          >
            📬
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6 font-heading"
          >
            ¡Bienvenido al Newsletter!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-primary-steel mb-8 font-light"
          >
            {formData.nombre ? `Gracias ${formData.nombre}. ` : ''}Ya estas suscrito a las novedades de IA + Construccion Modular.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-6 rounded-xl mb-8 border border-white/10 bg-white/5"
          >
            <p className="text-lg text-gray-300 mb-4">
              📧 Revisa tu email: <strong className="text-white">{formData.email}</strong>
            </p>
            <p className="text-sm text-gray-400">
              Te enviamos un email de bienvenida con lo que puedes esperar.
              <br />
              Recibiras contenido cada <strong className="text-accent-copper">miercoles</strong>.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/" className="btn-secondary px-8 py-4 w-full sm:w-auto text-center">
              Volver al inicio
            </Link>
            <Link href="/auditoria" className="btn-primary px-8 py-4 w-full sm:w-auto text-center">
              Solicitar Auditoria Gratis
            </Link>
          </motion.div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background-start text-white overflow-hidden relative">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-copper/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-medium/20 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      </div>

      {/* Hero Section */}
      <section className="relative py-24 z-10">
        <div className="container-custom max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-6xl mb-6"
          >
            📰
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6 font-heading leading-tight"
          >
            Newsletter <span className="text-accent-copper">ModulorIA</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-primary-steel mb-4 font-light max-w-2xl mx-auto"
          >
            IA + Construccion Modular cada semana.
            <br />
            <span className="text-white font-medium">Sin spam. Solo contenido de valor.</span>
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 relative z-10">
        <div className="container-custom max-w-5xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column: Que recibiras */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-white mb-10 font-heading">
                ¿Que recibiras cada miercoles?
              </h2>

              <div className="space-y-6">
                {[
                  {
                    icon: '🤖',
                    title: 'Novedades de IA aplicada',
                    text: 'Las ultimas herramientas y tecnicas de IA que puedes usar hoy en tu empresa constructora.'
                  },
                  {
                    icon: '🏗️',
                    title: 'Casos reales de construccion',
                    text: 'Ejemplos practicos de como otras empresas estan automatizando procesos y ahorrando tiempo.'
                  },
                  {
                    icon: '💡',
                    title: 'Tips de automatizacion',
                    text: 'Consejos concretos que puedes implementar sin necesidad de ser experto en tecnologia.'
                  },
                  {
                    icon: '📊',
                    title: 'Tendencias del sector',
                    text: 'Analisis de hacia donde va la industria de la construccion modular y como prepararte.'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-4 glass-card p-5 border-white/5 hover:border-white/10 transition-colors"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-background-dark border border-white/10 flex items-center justify-center text-2xl shadow-lg">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1 font-heading">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed font-light text-sm">
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mt-10 glass-panel p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent"
              >
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-accent-copper">1x</div>
                    <div className="text-xs text-gray-400">Por semana</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent-copper">5 min</div>
                    <div className="text-xs text-gray-400">De lectura</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent-copper">0</div>
                    <div className="text-xs text-gray-400">Spam</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column: Formulario */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-panel p-8 md:p-10 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent shadow-xl h-fit lg:sticky lg:top-24"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 font-heading">
                Suscribete Gratis
              </h2>
              <p className="text-gray-400 mb-8">
                Unete a profesionales de la construccion que ya reciben nuestro contenido.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-background-dark border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-copper focus:border-transparent transition-all text-lg"
                    placeholder="tu@email.com"
                  />
                </div>

                {/* Nombre (opcional) */}
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-300 mb-2">
                    Nombre <span className="text-gray-500">(opcional)</span>
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-background-dark border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-copper focus:border-transparent transition-all"
                    placeholder="Tu nombre"
                  />
                </div>

                {/* Error message */}
                {error && (
                  <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
                    {error}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary py-4 text-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] transition-transform"
                >
                  {isSubmitting ? 'Suscribiendo...' : 'Suscribirme al Newsletter'}
                </button>

                {/* Privacy Note */}
                <p className="text-xs text-gray-500 text-center">
                  Al suscribirte aceptas nuestra{' '}
                  <Link href="/privacidad" className="text-accent-copper hover:underline">
                    politica de privacidad
                  </Link>
                  . Puedes darte de baja en cualquier momento.
                </p>
              </form>

              {/* Trust indicators */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex items-center justify-center gap-6 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <span className="text-green-500">✓</span> Gratis
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="text-green-500">✓</span> Sin spam
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="text-green-500">✓</span> Cancela cuando quieras
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative z-10">
        <div className="container-custom max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="glass-panel p-10 rounded-2xl border border-accent-copper/20"
          >
            <h3 className="text-2xl font-bold text-white mb-4 font-heading">
              ¿Prefieres hablar directamente?
            </h3>
            <p className="text-gray-400 mb-6">
              Si tienes un proyecto en mente o quieres saber como la IA puede ayudar a tu empresa, agenda una auditoria gratuita.
            </p>
            <Link href="/auditoria" className="btn-primary px-8 py-4 inline-block">
              Solicitar Auditoria Gratis
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
