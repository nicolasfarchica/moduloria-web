'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function RecursosClient() {
  // ROI Calculator State
  const [empleados, setEmpleados] = useState<number>(10);
  const [horasManualSemanales, setHorasManualSemanales] = useState<number>(20);
  const [salarioPromedioHora, setSalarioPromedioHora] = useState<number>(25);
  const [proyectosActivos, setProyectosActivos] = useState<number>(5);

  // Calculations
  const costoAnualManual =
    empleados * horasManualSemanales * salarioPromedioHora * 52;
  const ahorroConAutomatizacion = costoAnualManual * 0.65; // 65% ahorro promedio
  const costoImplementacion = 15000; // Promedio entre Quick Win y High Impact
  const roiMeses = Math.ceil(costoImplementacion / (ahorroConAutomatizacion / 12));
  const gananciaAnual1 = ahorroConAutomatizacion - costoImplementacion;
  const gananciaAnual2 = ahorroConAutomatizacion;
  const gananciaAnual3 = ahorroConAutomatizacion;
  const gananciaTotal3Anos =
    gananciaAnual1 + gananciaAnual2 + gananciaAnual3;

  return (
    <main className="min-h-screen bg-background-start text-white overflow-hidden relative">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 mix-blend-overlay"
            style={{ backgroundImage: "url('/images/hero-1.png')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background-start via-background-start/90 to-background-start" />
        </div>

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent-copper/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary-medium/20 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      </div>

      {/* Hero Section */}
      <section className="relative py-24 z-10">
        <div className="container-custom max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-8 font-heading leading-tight"
          >
            Recursos Gratuitos para <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-copper to-white">Automatizar tu Empresa</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-primary-steel mb-10 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Guías, plantillas y herramientas gratuitas para empresas de
            construcción modular/industrializada que quieren descubrir su
            potencial de automatización.
          </motion.p>
        </div>
      </section>

      {/* Calculadora ROI Standalone */}
      <section className="relative py-16 z-10">
        <div className="container-custom max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-panel p-8 lg:p-12 border border-accent-copper/30 rounded-3xl relative overflow-hidden bg-background-dark/80 backdrop-blur-xl shadow-copper-glow"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent-copper/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />

            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center font-heading">
              📊 Calculadora ROI: <span className="text-accent-copper">¿Cuánto Puedo Ahorrar?</span>
            </h2>
            <p className="text-center text-primary-steel mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Introduce los datos de tu empresa para descubrir cuánto dinero estás
              perdiendo cada año en tareas manuales automatizables.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Input Section */}
              <div className="space-y-8 bg-background-dark p-8 rounded-2xl border border-white/5 shadow-inner">
                {[
                  { label: "Número de empleados totales", value: empleados, setter: setEmpleados, min: 5, max: 100, unit: "empleados" },
                  { label: "Horas/semana tareas manuales (por empleado)", value: horasManualSemanales, setter: setHorasManualSemanales, min: 5, max: 40, unit: "h/semana" },
                  { label: "Salario promedio por hora (€)", value: salarioPromedioHora, setter: setSalarioPromedioHora, min: 15, max: 50, unit: "€/hora" },
                  { label: "Proyectos activos simultáneos", value: proyectosActivos, setter: setProyectosActivos, min: 1, max: 20, unit: "proyectos" }
                ].map((item, idx) => (
                  <div key={idx}>
                    <label className="block text-sm font-bold text-white mb-3 flex justify-between items-center">
                      {item.label}
                      <span className="text-accent-copper bg-accent-copper/10 px-3 py-1 rounded-full text-xs uppercase tracking-wider">{item.value} {item.unit}</span>
                    </label>
                    <input
                      type="range"
                      min={item.min}
                      max={item.max}
                      value={item.value}
                      onChange={(e) => item.setter(Number(e.target.value))}
                      className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-accent-copper"
                    />
                    <div className="flex justify-between text-xs text-slate-500 mt-2 font-mono">
                      <span>{item.min}</span>
                      <span>{item.max}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Results Section */}
              <div className="bg-gradient-to-br from-primary-dark to-background-end rounded-2xl p-10 text-white space-y-8 border border-white/10 shadow-2xl relative overflow-hidden flex flex-col justify-center">
                <div className="absolute inset-0 bg-accent-copper/5 pointer-events-none" />

                <h3 className="text-2xl font-bold mb-4 border-b border-white/10 pb-4 font-heading">
                  Tu Potencial de Ahorro
                </h3>

                <div>
                  <p className="text-sm text-primary-steel mb-2 uppercase tracking-widest font-bold">
                    Costo anual en tareas manuales
                  </p>
                  <p className="text-3xl font-bold text-white/40 font-heading">
                    €{costoAnualManual.toLocaleString()}
                  </p>
                </div>

                <div className="bg-accent-copper/10 rounded-xl p-6 border border-accent-copper/30 relative overflow-hidden">
                  <div className="absolute inset-0 bg-accent-copper/5 animate-pulse-slow"></div>
                  <p className="text-sm text-accent-copper mb-2 font-bold uppercase tracking-widest relative z-10">
                    Ahorro potencial con automatización (65%)
                  </p>
                  <p className="text-5xl font-bold text-white relative z-10 font-heading">
                    €{ahorroConAutomatizacion.toLocaleString()}<span className="text-lg text-white/60">/año</span>
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-primary-steel mb-1">ROI estimado</p>
                    <p className="text-2xl font-bold text-white font-heading">
                      {roiMeses} {roiMeses === 1 ? 'mes' : 'meses'}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-primary-steel mb-1">Ganancia neta (3 años)</p>
                    <p className="text-2xl font-bold text-accent-copper font-heading">
                      €{gananciaTotal3Anos.toLocaleString()}
                    </p>
                  </div>
                </div>

                <Link
                  href="/auditoria"
                  className="block w-full btn-primary text-center py-5 mt-4 shadow-lg shadow-accent-copper/20 text-lg"
                >
                  Solicitar Auditoría Gratis
                </Link>
                <p className="text-xs text-center text-primary-steel mt-2">
                  *Estimación basada en inversión promedio.
                </p>
              </div>
            </div>

            <div className="mt-10 bg-white/5 rounded-xl p-6 text-center border border-white/5">
              <p className="text-sm text-gray-400">
                <span className="font-bold text-white">
                  Nota metodológica:
                </span>{' '}
                Esta calculadora asume un 65% de reducción en tiempo dedicado a tareas
                manuales, basado en casos reales de empresas modulares que hemos
                automatizado. Los resultados son estimaciones y pueden variar según
                tu contexto específico.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Guías Descargables */}
      <section className="relative py-16 z-10">
        <div className="container-custom max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center font-heading"
          >
            📚 Guías Descargables Gratuitas
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center text-primary-steel mb-12 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Recursos prácticos para empezar a automatizar tu empresa modular sin
            necesidad de contratar a nadie.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "📋", title: "Checklist: 25 Procesos Automatizables", desc: "Lista completa de tareas manuales con estimación de ahorro.", items: ["25 procesos específicos", "ROI estimado por proceso", "Complejidad implementación", "Casos de uso reales"], cta: "Descargar PDF (1.2 MB)", border: "border-accent-copper" },
              { icon: "🎯", title: "Guía: Cómo Priorizar Automatizaciones", desc: "Framework sencillo para decidir qué automatizar primero.", items: ["Matriz impacto/facilidad", "Calculadora de prioridad", "Ejemplos reales", "Template roadmap 90 días"], cta: "Descargar PDF (980 KB)", border: "border-primary-medium" },
              { icon: "🤖", title: "Introducción: IA para Empresas Modulares", desc: "Todo lo que necesitas saber sobre IA aplicada al sector.", items: ["Conceptos básicos", "Casos de uso específicos", "Cuándo SÍ/NO usar IA", "ROI realista"], cta: "Descargar PDF (1.5 MB)", border: "border-accent-copper" },
              { icon: "📊", title: "Template: Auditoría DIY", desc: "Plantilla Excel + instrucciones para hacer tu propia auditoría.", items: ["Plantilla Excel lista", "Instrucciones paso a paso", "Fórmulas ROI incluidas", "Video tutorial 15 min"], cta: "Descargar ZIP (2.3 MB)", border: "border-primary-medium" },
              { icon: "💰", title: "Case Study: ROI en 6 Semanas", desc: "Caso real de empresa de 50 empleados que automatizó 8 procesos.", items: ["Timeline detallado", "Procesos automatizados", "Obstáculos y soluciones", "ROI real a 6/12/18 meses"], cta: "Descargar PDF (1.8 MB)", border: "border-accent-copper" },
              { icon: "🔧", title: "Toolkit: Herramientas No-Code", desc: "Lista curada de herramientas para automatizar sin programar.", items: ["15 herramientas top", "Pros/contras", "Casos de uso", "Tutoriales setup rápido"], cta: "Descargar PDF (1.1 MB)", border: "border-primary-medium" }
            ].map((resource, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className={`glass-card p-8 border-t-4 ${resource.border} hover:bg-white/5 transition-all duration-300 flex flex-col group`}
              >
                <div className="text-4xl mb-6 bg-white/5 w-16 h-16 rounded-xl flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">{resource.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 font-heading leading-tight">
                  {resource.title}
                </h3>
                <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                  {resource.desc}
                </p>
                <div className="space-y-3 text-sm text-gray-500 mb-8 flex-grow">
                  {resource.items.map((item, i) => <p key={i} className="flex items-center gap-2"><span className="text-accent-copper">✓</span> {item}</p>)}
                </div>
                <button className="w-full btn-outline py-3 text-sm hover:bg-white/10 border-white/20 text-white group-hover:border-accent-copper group-hover:text-accent-copper transition-colors">
                  {resource.cta}
                </button>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-16 glass-panel border border-accent-copper/30 p-10 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-accent-copper/5 pointer-events-none" />
            <h3 className="text-3xl font-bold text-white mb-4 font-heading relative z-10">
              ¿Quieres las 6 guías + bonus exclusivos?
            </h3>
            <p className="mb-8 max-w-2xl mx-auto text-gray-300 leading-relaxed relative z-10">
              Descarga el pack completo de recursos + 3 plantillas bonus + acceso a
              webinars mensuales gratuitos sobre automatización en construcción
              modular.
            </p>
            <button className="btn-primary px-10 py-5 text-lg relative z-10 shadow-glow">
              Descargar Pack Completo Gratis
            </button>
            <p className="text-xs mt-4 text-gray-500 relative z-10">
              Sin spam. Solo recursos útiles cada 2 semanas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Recursos */}
      <section className="relative py-20 z-10 bg-background-end/30">
        <div className="container-custom max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white mb-10 text-center font-heading"
          >
            Preguntas Frecuentes
          </motion.h2>

          <div className="space-y-4">
            {[
              { q: "¿Los recursos son realmente gratuitos?", a: "Sí, 100% gratuitos. No necesitas tarjeta de crédito ni contratar nada. Solo pedimos tu email para enviarte el material." },
              { q: "¿Son aplicables si no soy de construcción modular?", a: "Están optimizados para el sector modular, pero muchos procesos administrativos (facturas, emails) son universales y te servirán igual." },
              { q: "¿Necesito conocimientos técnicos?", a: "No. Todo está explicado en lenguaje sencillo. Si manejas Excel básico, puedes aprovechar las plantillas." },
              { q: "¿La calculadora ROI es precisa?", a: "Es una estimación basada en promedios del sector. Tu caso específico puede variar. La auditoría gratuita te da el número exacto." }
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="glass-card p-8 border border-white/5 hover:border-white/10 transition-colors"
              >
                <h3 className="font-bold text-white mb-2 font-heading text-lg">
                  {faq.q}
                </h3>
                <p className="text-gray-400 text-sm font-light leading-relaxed">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative py-24 z-10 text-center">
        <div className="container-custom max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-panel border border-accent-copper/20 p-16 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-accent-copper/5 pointer-events-none" />

            <h2 className="text-4xl font-bold text-white mb-6 relative z-10 font-heading">
              ¿Prefieres que lo hagamos por ti?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto relative z-10 font-light leading-relaxed">
              Si no tienes tiempo o prefieres resultados garantizados en semanas,
              solicita una auditoría gratuita y te mostramos el camino.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
              <Link
                href="/auditoria"
                className="btn-primary px-10 py-5 text-lg shadow-copper-glow"
              >
                Solicitar Auditoría Gratis
              </Link>
              <Link
                href="/problemas"
                className="btn-outline px-10 py-5 text-lg"
              >
                Ver 25 Problemas que Resolvemos
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
