'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function SolucionesPage() {
  return (
    <main className="min-h-screen bg-background-start text-white">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 mix-blend-overlay"
            style={{ backgroundImage: "url('/images/hero-2.png')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background-start via-background-start/90 to-background-start" />
        </div>

        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-copper/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-primary/20 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
      </div>

      {/* Hero Section */}
      <section className="relative py-24 z-10">
        <div className="container-custom max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Nuestras <span className="text-accent-copper">Soluciones</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-slate-300 mb-8 font-light"
          >
            Tres niveles de automatización adaptados a tu madurez digital y presupuesto.
            <br className="hidden md:block" />
            Empieza gratis, valida con Quick Win, escala con High Impact.
          </motion.p>
        </div>
      </section>

      {/* Introducción: El camino recomendado */}
      <section className="section-padding z-10 relative">
        <div className="container-custom max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel border-2 border-accent-copper/50 p-8 rounded-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-accent-copper/5 pointer-events-none" />

            <h2 className="text-3xl font-bold text-white mb-4 text-center">
              💡 El camino recomendado
            </h2>
            <p className="text-slate-300 text-center mb-10">
              No vendemos "transformación digital" de golpe. Nuestro enfoque es iterativo y de bajo riesgo:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
              <div className="bg-slate-900/60 rounded-xl p-6 text-center border border-white/10 hover:border-accent-copper/30 transition-colors">
                <div className="text-4xl mb-4">1️⃣</div>
                <h3 className="font-bold text-white mb-2">Auditoría Gratis</h3>
                <p className="text-sm text-slate-400">Descubre qué automatizar y cuánto ahorrar</p>
              </div>

              <div className="bg-slate-900/60 rounded-xl p-6 text-center border border-white/10 hover:border-accent-copper/30 transition-colors relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent-copper text-xs px-2 py-0.5 rounded font-bold text-white">Recomendado</div>
                <div className="text-4xl mb-4">2️⃣</div>
                <h3 className="font-bold text-white mb-2">Quick Win</h3>
                <p className="text-sm text-slate-400">Valida con 1 automatización en &lt; 1 semana</p>
              </div>

              <div className="bg-slate-900/60 rounded-xl p-6 text-center border border-white/10 hover:border-accent-copper/30 transition-colors">
                <div className="text-4xl mb-4">3️⃣</div>
                <h3 className="font-bold text-white mb-2">High Impact</h3>
                <p className="text-sm text-slate-400">Escala a transformación completa</p>
              </div>
            </div>

            <p className="text-sm text-slate-400 text-center mt-8 italic bg-white/5 p-4 rounded-lg">
              📌 <strong>Nota:</strong> Si contratas High Impact después de un Quick Win exitoso, te descontamos el 100%
              del Quick Win del precio final. Es decir, el Quick Win te sale gratis si decides escalar.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solución 1: Auditoría Gratis */}
      <section id="auditoria" className="section-padding relative z-10">
        <div className="container-custom max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block border border-accent-copper text-accent-copper rounded-full px-4 py-1 text-sm font-semibold mb-4 tracking-wider uppercase">Paso 1: Descubrimiento</span>
              <h2 className="text-4xl font-bold text-white mb-6">
                Auditoría Gratis <span className="text-accent-copper">30 Minutos</span>
              </h2>
              <p className="text-xl text-slate-300 mb-8 font-light">
                Descubre exactamente cuánto puedes ahorrar automatizando tus procesos. Sin compromiso, sin ventas agresivas.
              </p>

              <div className="space-y-6 mb-8">
                {[
                  { title: "Diagnóstico de 3-5 oportunidades", desc: "Identificamos los procesos más ineficientes de TU empresa específicamente" },
                  { title: "ROI calculado con tus números", desc: "Ahorro anual exacto basado en tu volumen de facturas, proyectos y personal" },
                  { title: "Propuesta de Quick Win", desc: "Un proyecto piloto de bajo riesgo para validar resultados" },
                  { title: "Informe PDF detallado", desc: "Documento con todas las oportunidades y plan de acción sugerido" }
                ].map((item, idx) => (
                  <div className="flex items-start gap-4" key={idx}>
                    <div className="w-8 h-8 rounded-full bg-accent-copper/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-accent-copper" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="glass-card p-6 border border-white/20 hover:border-accent-copper/50 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-4xl font-bold text-accent-copper">Gratis</div>
                    <div className="text-sm text-slate-400">30 minutos | Sin compromiso</div>
                  </div>
                </div>
                <Link href="/auditoria" className="btn-primary w-full text-center py-4 text-lg">
                  📞 Agendar auditoría gratis
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-8 rounded-2xl relative"
            >
              <h3 className="text-2xl font-bold mb-6 text-white">¿Para quién es la auditoría?</h3>

              <div className="space-y-6">
                {[
                  { emoji: "✅", title: "Empresas del sector construcción", desc: "Desde startups hasta corporativos. 100% especializado en el sector." },
                  { emoji: "✅", title: "Equipos ahogados en tareas manuales", desc: "Si pierdes horas en facturas, emails, reportes... esta auditoría es para ti." },
                  { emoji: "✅", title: "Empresas sin equipo técnico", desc: "No necesitas programadores. Implementamos todo nosotros." },
                  { emoji: "✅", title: "Empresarios escépticos", desc: "No vendemos PowerPoints. Implementamos y mostramos resultados." }
                ].map((item, idx) => (
                  <div className="flex items-start gap-4" key={idx}>
                    <span className="text-2xl pt-1">{item.emoji}</span>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-white/5 rounded-lg p-4 border border-white/10">
                <p className="text-sm text-slate-300">
                  <strong className="text-white">Promesa:</strong> Si después de la auditoría determinamos que tu caso
                  NO es para automatización, te lo diremos honestamente. Sin ventas forzadas.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solución 2: Quick Win */}
      <section id="quick-win" className="section-padding bg-background-end/50 relative z-10 border-y border-white/5">
        <div className="container-custom max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 glass-card border-none bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent-copper/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />

              <h3 className="text-2xl font-bold text-white mb-6">Ejemplos de Quick Wins:</h3>

              <div className="space-y-6">
                {[
                  { icon: "📄", title: "OCR Facturas Automatizado", prob: "15 min/factura procesando manualmente", sol: "Extracción automática de datos PDF", res: "De 15 min → 30 seg | Ahorro €8K-€18K/año" },
                  { icon: "📧", title: "Clasificación Emails", prob: "Emails críticos perdidos entre 200 diarios", sol: "Clasificación automática urgente vs. informativo", res: "0 emails críticos perdidos | Ahorro €6K-€12K/año" },
                  { icon: "⚠️", title: "Alertas Retrasos", prob: "Detectas retrasos cuando ya es tarde", sol: "Notificaciones automáticas de desviaciones", res: "Prevención temprana | Ahorro €12K-€25K/año" }
                ].map((item, idx) => (
                  <div className="bg-white/5 p-4 rounded-xl border border-white/5" key={idx}>
                    <h4 className="font-semibold text-white mb-2 flex items-center gap-2"><span>{item.icon}</span> {item.title}</h4>
                    <div className="text-sm text-slate-400 space-y-1 pl-7">
                      <p><span className="text-slate-500">Problema:</span> {item.prob}</p>
                      <p><span className="text-slate-500">Solución:</span> {item.sol}</p>
                      <p><span className="text-accent-copper">Resultado:</span> {item.res}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <Link href="/problemas" className="text-accent-copper hover:text-white transition-colors text-sm font-semibold inline-flex items-center gap-1">
                  Ver catálogo completo de 25 problemas <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <span className="inline-block border border-accent-copper text-accent-copper rounded-full px-4 py-1 text-sm font-semibold mb-4 tracking-wider uppercase bg-accent-copper/10">Paso 2: Validación</span>
              <h2 className="text-4xl font-bold text-white mb-6">
                Quick Win: <span className="text-accent-copper">Valida Rápido</span>
              </h2>
              <p className="text-xl text-slate-300 mb-8 font-light">
                Automatiza 1 proceso crítico en menos de 1 semana. Bajo riesgo, alto aprendizaje, ROI inmediato.
              </p>

              <div className="space-y-5 mb-8">
                {[
                  { icon: "🎯", title: "1 automatización específica", desc: "Elegida estratégicamente en la auditoría gratis" },
                  { icon: "⚡", title: "Implementación en 3-7 días", desc: "Sin interrumpir tus operaciones actuales" },
                  { icon: "💰", title: "ROI en 1-3 semanas", desc: "Empiezas a ahorrar casi de inmediato" },
                  { icon: "📚", title: "Capacitación completa equipo", desc: "Videos + documentación + sesión en vivo" },
                  { icon: "🛠️", title: "1 mes de soporte incluido", desc: "WhatsApp directo para dudas y ajustes" }
                ].map((item, idx) => (
                  <div className="flex items-start gap-4" key={idx}>
                    <div className="text-2xl pt-1 bg-white/5 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">{item.icon}</div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="glass-panel p-6 rounded-xl border border-accent-copper/40 relative overflow-hidden group hover:border-accent-copper/70 transition-colors">
                <div className="absolute inset-0 bg-accent-copper/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <div className="flex items-center justify-between mb-4 relative z-10">
                  <div>
                    <div className="text-4xl font-bold text-accent-copper">€3K - €8K</div>
                    <div className="text-sm text-slate-400">Proyecto único | Empieza rápido</div>
                  </div>
                </div>
                <Link href="/auditoria" className="btn-primary w-full text-center py-4 relative z-10 shadow-lg shadow-accent-copper/20">
                  🚀 Solicitar Quick Win
                </Link>
                <p className="text-xs text-slate-400 text-center mt-3 relative z-10">
                  💡 Si escalas a High Impact, este Quick Win te sale <strong className="text-white">GRATIS</strong>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solución 3: High Impact */}
      <section id="high-impact" className="section-padding relative z-10">
        <div className="container-custom max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block border border-blue-400 text-blue-400 rounded-full px-4 py-1 text-sm font-semibold mb-4 tracking-wider uppercase bg-blue-400/10">Paso 3: Transformación</span>
              <h2 className="text-4xl font-bold text-white mb-6">
                High Impact: <span className="text-accent-copper">Transformación</span>
              </h2>
              <p className="text-xl text-slate-300 mb-8 font-light">
                Automatiza 3-5 procesos integrados. Dashboard unificado, visibilidad 360°, operación escalable.
              </p>

              <div className="space-y-5 mb-8">
                {[
                  { icon: "🔗", title: "3-5 automatizaciones integradas", desc: "No silos aislados, sino sistema completo interconectado" },
                  { icon: "📊", title: "Dashboard personalizado", desc: "KPIs actualizados sin reuniones ni reportes manuales" },
                  { icon: "⏱️", title: "Implementación 2-4 semanas", desc: "Metodología ágil con entregables semanales" },
                  { icon: "👥", title: "Capacitación profunda", desc: "Sesiones en vivo + documentación exhaustiva" },
                  { icon: "🛡️", title: "3 meses de soporte", desc: "2 sesiones de optimización mensuales + soporte prioritario" }
                ].map((item, idx) => (
                  <div className="flex items-start gap-4" key={idx}>
                    <div className="text-2xl pt-1 bg-white/5 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">{item.icon}</div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="glass-panel p-6 rounded-xl border border-white/20 relative overflow-hidden group hover:border-blue-400/50 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-4xl font-bold text-white">€12K - €25K</div>
                    <div className="text-sm text-slate-400">ROI 4-8 semanas | Ahorro €35K-€156K/año</div>
                  </div>
                </div>
                <Link href="/auditoria" className="btn-secondary w-full text-center py-4 hover:bg-white/10">
                  💎 Solicitar High Impact
                </Link>
                <p className="text-xs text-slate-400 text-center mt-3">
                  💡 Si ya hiciste un Quick Win, te descontamos el 100% del precio
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl border-none relative overflow-hidden"
            >
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-primary/20 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/2" />

              <h3 className="text-2xl font-bold text-white mb-6">Ejemplos de High Impact:</h3>

              <div className="space-y-8">
                {[
                  { title: "Dashboard Multimódulo Completo", items: ["Visibilidad 360° de todos los proyectos activos", "KPIs actualizados en tiempo real", "Alertas proactivas de desviaciones"], savings: "€35K-€67K/año" },
                  { title: "Sistema Gestión Proyectos", items: ["Reportes automáticos de avance", "Gestión inteligente de proveedores", "Control de calidad digital"], savings: "€80K-€150K/año" },
                  { title: "Optimización Producción Off-Site", items: ["Planificación logística optimizada", "Tracking materiales en tiempo real", "Predicción de costos con IA"], savings: "€100K-€200K/año" }
                ].map((item, idx) => (
                  <div key={idx}>
                    <h4 className="font-semibold text-white mb-2 text-lg">{item.title}</h4>
                    <ul className="text-sm text-slate-400 space-y-1 mb-2 pl-2 border-l-2 border-accent-copper/30">
                      {item.items.map((sub, i) => <li key={i}>• {sub}</li>)}
                    </ul>
                    <p className="text-accent-copper font-medium text-sm pl-2"><strong>Ahorro est:</strong> {item.savings}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-white/5 rounded-lg p-4 border border-white/5">
                <p className="text-sm text-slate-300">
                  <strong className="text-white">Garantía de ROI:</strong> Si después de 3 meses no ahorras mínimo
                  el doble de la inversión, hacemos 2 sesiones de optimización gratis.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tabla Comparativa */}
      <section className="section-padding bg-background-end relative z-10 border-t border-white/5">
        <div className="container-custom max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-12 text-center"
          >
            Compara las <span className="text-accent-copper">soluciones</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-x-auto rounded-xl border border-white/10"
          >
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-900/80 text-white border-b border-white/10">
                  <th className="p-5 text-left text-lg">Característica</th>
                  <th className="p-5 text-center text-lg">Auditoría</th>
                  <th className="p-5 text-center text-lg bg-accent-copper/20 text-accent-copper border-x border-accent-copper/20">Quick Win ⭐</th>
                  <th className="p-5 text-center text-lg">High Impact</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="p-5 font-semibold text-white">Precio</td>
                  <td className="p-5 text-center text-accent-copper font-bold">Gratis</td>
                  <td className="p-5 text-center font-bold bg-white/5 border-x border-white/5">€3K - €8K</td>
                  <td className="p-5 text-center font-bold">€12K - €25K</td>
                </tr>
                <tr className="border-b border-white/5 bg-white/5 hover:bg-white/10 transition-colors">
                  <td className="p-5 font-semibold text-white">Implementación</td>
                  <td className="p-5 text-center">30 min call</td>
                  <td className="p-5 text-center bg-white/5 border-x border-white/5">3-7 días</td>
                  <td className="p-5 text-center">2-4 semanas</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="p-5 font-semibold text-white">ROI esperado</td>
                  <td className="p-5 text-center opacity-50">N/A</td>
                  <td className="p-5 text-center bg-white/5 border-x border-white/5">1-3 semanas</td>
                  <td className="p-5 text-center">4-8 semanas</td>
                </tr>
                <tr className="border-b border-white/5 bg-white/5 hover:bg-white/10 transition-colors">
                  <td className="p-5 font-semibold text-white">Automatizaciones</td>
                  <td className="p-5 text-center opacity-50">0 (análisis)</td>
                  <td className="p-5 text-center bg-white/5 border-x border-white/5">1 específica</td>
                  <td className="p-5 text-center">3-5 integradas</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="p-5 font-semibold text-white">Dashboard</td>
                  <td className="p-5 text-center opacity-30">❌</td>
                  <td className="p-5 text-center opacity-30 bg-white/5 border-x border-white/5">❌</td>
                  <td className="p-5 text-center text-accent-copper font-bold">✅ Personalizado</td>
                </tr>
                <tr className="border-b border-white/5 bg-white/5 hover:bg-white/10 transition-colors">
                  <td className="p-5 font-semibold text-white">Soporte incluido</td>
                  <td className="p-5 text-center opacity-50">N/A</td>
                  <td className="p-5 text-center bg-white/5 border-x border-white/5">1 mes</td>
                  <td className="p-5 text-center">3 meses</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-5 font-semibold text-white">Ideal para</td>
                  <td className="p-5 text-center text-sm">Descubrir potencial</td>
                  <td className="p-5 text-center text-sm font-semibold text-white bg-white/5 border-x border-white/5">Validar con bajo riesgo</td>
                  <td className="p-5 text-center text-sm">Transformación total</td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark to-transparent opacity-80" />
        <div className="container-custom max-w-4xl mx-auto text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-6 text-white"
          >
            ¿Listo para empezar?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-300 mb-12"
          >
            Todas las soluciones empiezan con una auditoría gratis de 30 minutos.
            <br />
            Descubre qué automatizar y cuánto ahorrar. Sin compromiso.
          </motion.p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/auditoria" className="btn-primary px-12 py-5 text-lg shadow-lg shadow-accent-copper/20">
              📞 Agendar auditoría gratis
            </Link>
            <Link href="/problemas" className="btn-outline px-12 py-5 text-lg border-white/20 hover:bg-white/10">
              📋 Ver 25 problemas que resolvemos
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
