'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface Resource {
  icon: string;
  title: string;
  description: string;
  format: string;
  downloadTime: string;
  ctaText: string;
  ctaLink: string;
  featured?: boolean;
}

const RESOURCES: Resource[] = [
  {
    icon: '📊',
    title: '25 Procesos Automatizables en Construcción Modular',
    description: 'Guía completa con los 25 procesos que más tiempo consumen en tu empresa constructora y cómo automatizarlos con IA. Incluye ROI estimado por proceso.',
    format: 'PDF - 45 páginas',
    downloadTime: '5 min',
    ctaText: 'Descargar Gratis',
    ctaLink: '/recursos/25-procesos-automatizables',
    featured: true,
  },
  {
    icon: '🧮',
    title: 'Calculadora Excel: ¿Cuánto Pierdes en Tareas Manuales?',
    description: 'Template Excel interactivo para calcular exactamente cuántas horas y euros pierdes mensualmente en tareas repetitivas. Descubre tu potencial de ahorro.',
    format: 'Excel (.xlsx)',
    downloadTime: '2 min',
    ctaText: 'Descargar Template',
    ctaLink: '/recursos/calculadora-tareas-manuales',
  },
  {
    icon: '📋',
    title: 'Checklist: ¿Tu Empresa Está Lista para IA?',
    description: 'Evaluación de 20 puntos para determinar si tu constructora está preparada para implementar automatización con IA. Incluye recomendaciones por puntuación.',
    format: 'PDF - 8 páginas',
    downloadTime: '3 min',
    ctaText: 'Descargar Checklist',
    ctaLink: '/recursos/checklist-ia-construccion',
  },
  {
    icon: '🎥',
    title: 'Video: Cómo Implementar IA en Construcción Modular (Paso a Paso)',
    description: 'Tutorial en video mostrando casos reales de automatización en empresas constructoras. Aprende qué funciona y qué evitar.',
    format: 'Video - 15 min',
    downloadTime: 'Streaming',
    ctaText: 'Ver Video',
    ctaLink: '/recursos/video-implementar-ia',
  },
  {
    icon: '💡',
    title: 'Casos de Éxito: ROI Real en 3 Empresas',
    description: 'Documentación completa de 3 implementaciones reales: procesos automatizados, inversión exacta, ahorro medido y lecciones aprendidas.',
    format: 'PDF - 25 páginas',
    downloadTime: '4 min',
    ctaText: 'Leer Casos',
    ctaLink: '/recursos/casos-exito-ia',
  },
  {
    icon: '📖',
    title: 'Glosario: Términos de IA para Constructoras',
    description: 'Diccionario de términos técnicos traducidos a lenguaje simple. OCR, RAG, N8N, Automatización, APIs... todo explicado sin tecnicismos.',
    format: 'PDF - 12 páginas',
    downloadTime: '2 min',
    ctaText: 'Descargar Glosario',
    ctaLink: '/recursos/glosario-ia-construccion',
  },
];

export default function RecursosSection() {
  return (
    <section id="recursos" className="section-padding bg-gradient-to-b from-background-end to-background-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary-medium/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-accent-copper/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
            Recursos Gratuitos sobre{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-copper to-primary-light">
              IA en Construcción
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
            Guías, calculadoras y templates para implementar{' '}
            <span className="text-white font-medium">automatización en construcción modular</span>.
            <br />
            <span className="text-primary-light text-lg">Todo descargable, sin pedir email (por ahora).</span>
          </p>
        </motion.div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {RESOURCES.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`glass-card p-8 hover:border-accent-copper/50 transition-all duration-300 flex flex-col ${
                resource.featured ? 'md:col-span-2 lg:col-span-3 md:flex-row md:items-center' : ''
              }`}
            >
              {/* Icon */}
              <div className={`text-6xl mb-4 ${resource.featured ? 'md:mb-0 md:mr-8' : ''}`}>
                {resource.icon}
              </div>

              {/* Content */}
              <div className="flex-1">
                {/* Badge */}
                {resource.featured && (
                  <div className="inline-flex items-center gap-2 bg-accent-copper/10 border border-accent-copper/30 rounded-full px-4 py-1 mb-3">
                    <span className="text-accent-copper font-medium text-sm">⭐ Más Descargado</span>
                  </div>
                )}

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 font-heading">
                  {resource.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 mb-4 leading-relaxed">
                  {resource.description}
                </p>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-2 text-primary-light">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                    </svg>
                    <span>{resource.format}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span>{resource.downloadTime} lectura</span>
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href={resource.ctaLink}
                  className={`inline-block px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    resource.featured
                      ? 'bg-accent-copper text-white hover:shadow-copper-glow hover:scale-105'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {resource.ctaText} →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Resources Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 max-w-5xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Blog/Articles */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 font-heading flex items-center gap-3">
                <span>📝</span>
                <span>Blog & Artículos</span>
              </h3>
              <p className="text-slate-300 mb-4 leading-relaxed">
                Publicamos semanalmente sobre <strong className="text-white">cómo implementar IA práctica en construcción modular</strong>.
                Sin teoría abstracta, solo casos reales y tutoriales paso a paso.
              </p>
              <Link
                href="/blog"
                className="text-accent-copper hover:underline font-medium inline-flex items-center gap-2"
              >
                Ver todos los artículos
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 font-heading flex items-center gap-3">
                <span>📬</span>
                <span>Newsletter Semanal</span>
              </h3>
              <p className="text-slate-300 mb-4 leading-relaxed">
                Recibe cada semana <strong className="text-white">1 automatización práctica</strong> para tu constructora.
                Explicado simple, con ROI estimado y sin spam.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-accent-copper transition-colors"
                />
                <button className="px-6 py-2 bg-accent-copper text-white rounded-lg font-medium hover:shadow-copper-glow transition-all duration-300">
                  Suscribir
                </button>
              </div>
              <p className="text-xs text-slate-400 mt-2">
                🔒 Cancelar cuando quieras. Sin vender tu email.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-slate-300 mb-6 text-lg">
            ¿Quieres ayuda personalizada implementando IA en tu constructora?
          </p>
          <Link
            href="/auditoria"
            className="btn-primary text-lg px-10 py-4 inline-block shadow-glow hover:shadow-copper-lg"
          >
            📞 Agendar Diagnóstico Estratégico
          </Link>
          <p className="text-slate-400 text-sm mt-4">
            Incluye roadmap personalizado + ROI calculado | 100% reembolsable
          </p>
        </motion.div>
      </div>
    </section>
  );
}
