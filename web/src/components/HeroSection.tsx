'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section
      aria-label="Hero principal"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="container-custom relative z-10 py-32">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 mb-8"
          >
            <span className="text-accent-copper font-bold text-sm">✨ Especializado en Construcción Modular</span>
          </motion.div>

          {/* Main Headline - H1 Optimizado para SEO */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight font-heading"
          >
            IA en Construcción Modular
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-copper to-primary-light">
              que Reduce Costos y Acelera Entregas
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-secondary-beige max-w-3xl mx-auto mb-12 font-light leading-relaxed"
          >
            Implementamos <span className="text-white font-medium">soluciones de IA para construcción modular</span>.
            <br />
            <span className="text-accent-copper font-bold">Ahorra tiempo y reduce errores</span> eliminando tareas manuales repetitivas.
            <br />
            <span className="text-primary-light text-lg">ROI medible en semanas. Sin proyectos eternos.</span>
          </motion.p>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center items-center gap-8 mb-12 text-primary-steel"
          >
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-accent-copper" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">ROI en 2-3 semanas</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-accent-copper" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Sin contratos eternos</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-accent-copper" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">100% especializado</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link
              href="/auditoria"
              className="btn-primary text-lg px-8 py-4 shadow-glow hover:shadow-copper-lg w-full sm:w-auto"
              aria-label="Agendar diagnóstico estratégico"
            >
              📞 Agendar Diagnóstico Estratégico
            </Link>
            <Link
              href="/#problemas"
              className="btn-secondary text-lg px-8 py-4 w-full sm:w-auto"
              aria-label="Ver los problemas que resolvemos con IA"
            >
              Ver Problemas que Resolvemos
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            role="region"
            aria-label="Indicadores de confianza"
          >
            <div className="glass-card text-center p-6">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-accent-copper to-white mb-2 font-heading">
                15-20h
              </div>
              <div className="text-secondary-beige text-sm">Ahorradas por semana</div>
            </div>
            <div className="glass-card text-center p-6">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-accent-copper to-white mb-2 font-heading">
                2-3 sem.
              </div>
              <div className="text-secondary-beige text-sm">ROI típico certificado</div>
            </div>
            <div className="glass-card text-center p-6">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-accent-copper to-white mb-2 font-heading">
                Ahorro
              </div>
              <div className="text-secondary-beige text-sm">Significativo y medible</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-slate-400">
          <span className="text-sm font-medium tracking-wide">Descubre cómo</span>
          <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
