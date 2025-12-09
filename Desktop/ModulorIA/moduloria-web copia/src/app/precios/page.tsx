'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function PreciosPage() {
  return (
    <main className="min-h-screen bg-background-start text-white">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{ backgroundImage: "url('/images/hero-tech-1.png')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background-start via-background-start/90 to-background-start" />
        </div>

        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 z-0" />
        <div className="container-custom max-w-5xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Precios <span className="text-accent-copper">Transparentes</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-slate-300 mb-8"
          >
            Sin letra pequeña. Sin contratos eternos. Pagas por resultados, no por horas.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block glass-panel px-6 py-4 rounded-lg border border-white/10"
          >
            <p className="text-lg text-slate-300">
              💡 <strong className="text-white">Filosofía de precios:</strong> Inversión única + Soporte incluido + ROI garantizado
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding bg-background-start relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-copper/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
            {/* Auditoría */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card border border-white/10 flex flex-col"
            >
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">Auditoría</h3>
                <p className="text-slate-400 mb-4">Descubre tu potencial</p>
                <div className="text-5xl font-bold text-accent-copper mb-2">Gratis</div>
                <div className="text-sm text-slate-500">30 minutos | Sin compromiso</div>
              </div>

              <div className="mb-6 flex-grow">
                <h4 className="font-semibold text-white mb-3">✅ Incluye:</h4>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-copper mt-1">•</span>
                    <span>Diagnóstico de 3-5 oportunidades concretas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-copper mt-1">•</span>
                    <span>ROI estimado con números de tu empresa</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-copper mt-1">•</span>
                    <span>Propuesta de Quick Win implementable</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-copper mt-1">•</span>
                    <span>Informe PDF detallado</span>
                  </li>
                </ul>
              </div>

              <Link href="/auditoria" className="btn-outline w-full text-center py-3">
                📞 Agendar auditoría
              </Link>
            </motion.div>

            {/* Quick Win */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-panel border-2 border-accent-copper/50 relative flex flex-col bg-slate-900/80"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-full text-center">
                <span className="bg-accent-copper text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg shadow-accent-copper/20">
                  ⭐ Más popular
                </span>
              </div>

              <div className="text-center mb-6 mt-4">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold text-white mb-2">Quick Win</h3>
                <p className="text-slate-400 mb-4">Valida rápido, bajo riesgo</p>
                <div className="text-5xl font-bold text-accent-copper mb-2">€3K - €8K</div>
                <div className="text-sm text-slate-500">Proyecto único | ROI 1-3 semanas</div>
              </div>

              <div className="mb-6 flex-grow">
                <h4 className="font-semibold text-white mb-3">✅ Incluye:</h4>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-copper mt-1">•</span>
                    <span>1 automatización específica implementada</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-copper mt-1">•</span>
                    <span>Setup técnico completo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-copper mt-1">•</span>
                    <span>Implementación en 3-7 días</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-copper mt-1">•</span>
                    <span>Capacitación del equipo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-copper mt-1">•</span>
                    <span>Documentación técnica + videos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-copper mt-1">•</span>
                    <span><strong>1 mes de soporte</strong> incluido</span>
                  </li>
                </ul>
              </div>

              <div className="bg-accent-copper/10 border border-accent-copper/20 rounded-lg p-3 mb-6 text-xs transform hover:scale-105 transition-transform duration-300">
                <p className="text-accent-copper font-medium text-center">
                  💡 <strong>Si escalas a High Impact:</strong> Te descontamos el 100% de este Quick Win
                </p>
              </div>

              <Link href="/auditoria" className="btn-primary w-full text-center py-3 shadow-lg shadow-accent-copper/20">
                🚀 Solicitar Quick Win
              </Link>
            </motion.div>

            {/* High Impact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card border border-primary-medium/30 flex flex-col"
            >
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">💎</div>
                <h3 className="text-2xl font-bold text-white mb-2">High Impact</h3>
                <p className="text-slate-400 mb-4">Transformación completa</p>
                <div className="text-5xl font-bold text-accent-copper mb-2">€12K - €25K</div>
                <div className="text-sm text-slate-500">ROI 4-8 semanas | Ahorro €35K-€156K/año</div>
              </div>

              <div className="mb-6 flex-grow">
                <h4 className="font-semibold text-white mb-3">✅ Incluye:</h4>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-copper mt-1">•</span>
                    <span>3-5 automatizaciones integradas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-copper mt-1">•</span>
                    <span>Dashboard personalizado tiempo real</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-copper mt-1">•</span>
                    <span>Implementación en 2-4 semanas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-copper mt-1">•</span>
                    <span>Capacitación completa del equipo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-copper mt-1">•</span>
                    <span>Documentación exhaustiva</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-copper mt-1">•</span>
                    <span><strong>3 meses de soporte</strong> incluido</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-copper mt-1">•</span>
                    <span>2 sesiones optimización/mes</span>
                  </li>
                </ul>
              </div>

              <Link href="/auditoria" className="btn-secondary w-full text-center py-3 hover:bg-slate-700">
                💎 Solicitar High Impact
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Desglose de precios */}
      <section className="section-padding bg-background-end relative">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="container-custom max-w-4xl mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-12 text-center"
          >
            ¿Qué determina el <span className="text-accent-copper">precio exacto</span>?
          </motion.h2>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card border border-white/10"
            >
              <h3 className="text-xl font-bold text-white mb-6">📊 Factores de precio:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-accent-copper mb-4">Para Quick Win (€3K-€8K):</h4>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li>• Volumen de datos (ej: 20 vs 200 facturas/semana)</li>
                    <li>• Complejidad de integración (API nativa vs custom)</li>
                    <li>• Número de fuentes de datos</li>
                    <li>• Reglas de negocio específicas</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-accent-copper mb-4">Para High Impact (€12K-€25K):</h4>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li>• Número de automatizaciones (3-5)</li>
                    <li>• Complejidad del dashboard</li>
                    <li>• Número de integraciones necesarias</li>
                    <li>• Tamaño del equipo a capacitar</li>
                    <li>• Requisitos de personalización</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-panel border-l-4 border-l-accent-copper p-6"
            >
              <h3 className="text-xl font-bold text-white mb-2">💡 Precio exacto en la auditoría gratis</h3>
              <p className="text-slate-300">
                En la auditoría de 30 minutos analizamos tu caso específico y te damos un precio exacto, no un rango.
                Transparencia total desde el minuto uno.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Opciones de pago */}
      <section className="section-padding bg-background-start relative">
        <div className="container-custom max-w-4xl mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-12 text-center"
          >
            Opciones de <span className="text-accent-copper">pago</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card border border-white/10"
            >
              <div className="text-3xl mb-4">💳</div>
              <h3 className="text-xl font-bold text-white mb-3">Pago único (Quick Win)</h3>
              <p className="text-slate-400 mb-4">
                Proyecto €3K-€8K pagadero en 1 cuota al inicio. Simple y directo.
              </p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-accent-copper">✓</span>
                  <span>Pago único al inicio del proyecto</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-copper">✓</span>
                  <span>1 mes de soporte incluido</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-copper">✓</span>
                  <span>Sin costos recurrentes obligatorios</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card border border-accent-copper/40"
            >
              <div className="text-3xl mb-4">📅</div>
              <h3 className="text-xl font-bold text-white mb-3">Pago en cuotas (High Impact)</h3>
              <p className="text-slate-400 mb-4">
                Proyecto €12K-€25K dividido en 3 cuotas sin interés.
              </p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-accent-copper">✓</span>
                  <span><strong>33% al inicio</strong> (firma contrato)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-copper">✓</span>
                  <span><strong>33% a mitad</strong> (entregables semanales)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-copper">✓</span>
                  <span><strong>33% al final</strong> (go-live completo)</span>
                </li>
                <li className="flex items-start gap-2 mt-3">
                  <span className="text-accent-copper">💰</span>
                  <span className="font-semibold text-white">Sin interés, sin costos ocultos</span>
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8 glass-panel p-6 rounded-lg text-center"
          >
            <h3 className="text-xl font-bold text-white mb-3">💼 ¿Financiamiento bancario?</h3>
            <p className="text-slate-300">
              Si tu empresa prefiere financiamiento bancario, podemos trabajar con tu banco. Emitimos factura
              y documentación necesaria para gestión interna.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Costos recurrentes (mantenimiento opcional) */}
      <section className="section-padding bg-background-end relative">
        <div className="container-custom max-w-4xl mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-12 text-center"
          >
            ¿Hay costos <span className="text-accent-copper">recurrentes</span>?
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card border border-white/10"
          >
            <p className="text-lg text-slate-300 mb-8 font-light">
              <strong className="text-white font-bold">Respuesta corta: No obligatorios.</strong> Después del período
              de soporte incluido (1-3 meses), puedes:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-slate-800/50 rounded-lg p-6 border border-white/10">
                <h4 className="font-bold text-white mb-3 text-lg">Opción 1: Gestión propia (€0/mes)</h4>
                <p className="text-sm text-slate-400 mb-4 h-12">
                  Las automatizaciones siguen funcionando. Tú las gestionas con la documentación entregada.
                </p>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li>✓ Automatizaciones 100% funcionales</li>
                  <li>✓ Documentación completa incluida</li>
                  <li>✓ Accesos admin a todas las herramientas</li>
                  <li>✓ Sin vendor lock-in</li>
                </ul>
              </div>

              <div className="bg-accent-copper/5 rounded-lg p-6 border border-accent-copper/20">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-white mb-1 text-lg">Opción 2: Mantenimiento</h4>
                  <span className="text-xs font-bold text-accent-copper uppercase border border-accent-copper/30 px-2 py-0.5 rounded">Opcional</span>
                </div>

                <div className="text-2xl font-bold text-accent-copper mb-4">€500 - €1.5K/mes</div>
                <p className="text-sm text-slate-400 mb-4 h-12">
                  Soporte continuo + optimizaciones + ajustes según tus necesidades.
                </p>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li>✓ Soporte técnico ilimitado (WhatsApp)</li>
                  <li>✓ 1 sesión optimización mensual</li>
                  <li>✓ Ajustes y mejoras incluidas</li>
                  <li>✓ Monitoreo proactivo de errores</li>
                  <li>✓ <strong>Cancelable mensualmente</strong></li>
                </ul>
              </div>
            </div>

            <div className="bg-white/5 rounded-lg p-4 text-center">
              <p className="text-sm text-slate-300">
                <strong className="text-white">Sin contratos eternos:</strong> Si contratas mantenimiento opcional,
                puedes cancelar cuando quieras sin penalizaciones. Sin letra pequeña.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ de precios (extendido) */}
      <section className="section-padding bg-background-start relative">
        <div className="container-custom max-w-4xl mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-12 text-center"
          >
            Preguntas frecuentes sobre <span className="text-accent-copper">precios</span>
          </motion.h2>

          <div className="space-y-4">
            {[
              {
                q: "¿Por qué hay rangos de precio (€3K-€8K) y no precios fijos?",
                a: "Cada empresa es diferente. Procesar 20 facturas/semana no es lo mismo que 200. Los rangos reflejan complejidad (volumen de datos, número de integraciones, personalización necesaria). En la auditoría gratis te damos un precio exacto basado en tu caso específico."
              },
              {
                q: "¿Qué pasa si después de pagar no funciona como esperaba?",
                a: "Garantía de ROI: Si después de 3 meses no ahorras mínimo el doble de la inversión, hacemos 2 sesiones de optimización gratis hasta que funcione. Si el problema es técnico nuestro (bug, error de implementación), lo arreglamos sin costo adicional. Si simplemente no funciona para tu caso, lo discutimos honestamente y buscamos solución o reembolso parcial según el caso."
              },
              {
                q: "¿Puedo empezar con Quick Win y luego escalar a High Impact?",
                a: "Absolutamente. Es el camino recomendado. Validas con bajo riesgo (Quick Win €3K-€8K), ves resultados reales, y luego decides si escalas. Bonus: Si contratas High Impact después de un Quick Win exitoso, te descontamos el 100% del Quick Win del precio final. Es decir, el Quick Win te sale gratis si decides escalar."
              },
              {
                q: "¿Los precios incluyen las licencias de herramientas (n8n, Make, etc.)?",
                a: "Depende de la solución. Quick Win: Usamos herramientas con planes gratuitos o de bajo costo (€0-€50/mes). Ese costo recurrente mínimo corre por tu cuenta. High Impact: Si necesitas herramientas premium, te asesoramos sobre las opciones más cost-effective. Licencias corren por tu cuenta, pero te ayudamos a optimizar costos. Transparencia total: En la auditoría te decimos exactamente qué herramientas necesitas y sus costos mensuales estimados."
              },
              {
                q: "¿Ofrecen descuentos por volumen o contratos anuales?",
                a: "No hacemos contratos anuales (va contra nuestra filosofía de flexibilidad). Pero sí ofrecemos descuentos en estos casos: Múltiples proyectos: Si contratas 2+ Quick Wins simultáneos, 10% descuento. Quick Win → High Impact: 100% descuento del Quick Win al escalar. Referidos: Si recomiendas ModulorIA y cierran contrato, €500 de crédito para ti."
              },
              {
                q: "¿Cuál es el costo real de NO automatizar?",
                a: "La pregunta correcta no es '¿cuánto cuesta automatizar?' sino '¿cuánto me cuesta NO automatizar?'. Ejemplos reales: Empresa A perdió €18K/año en facturas. Inversión €5K. ROI 3 meses. Empresa B perdió €67K/año en reportes. Inversión €18K. ROI 4 meses. Cada mes de espera es dinero perdido."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="glass-card p-6 border border-white/5 hover:border-accent-copper/30 transition-colors duration-300"
              >
                <h4 className="font-semibold text-white mb-2">
                  {faq.q}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculadora ROI CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-30" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

        <div className="container-custom max-w-5xl mx-auto text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            ¿Cuánto ahorrarías TÚ específicamente?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-300 mb-12"
          >
            Usa nuestra calculadora ROI o agenda una auditoría gratis para descubrir tu ahorro exacto.
          </motion.p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <Link href="/#calculadora" className="btn-primary px-10 py-5 text-lg shadow-lg shadow-accent-copper/20 hover:shadow-accent-copper/40 transform hover:-translate-y-1 transition-all duration-300">
              🧮 Calcular mi ahorro
            </Link>
            <Link href="/auditoria" className="btn-outline px-10 py-5 text-lg border-white/20 hover:bg-white/10 hover:border-white/40">
              📞 Auditoría gratis 30 min
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-accent-copper mb-2">€67K-€156K</div>
              <div className="text-sm text-slate-400">Ahorro anual promedio</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-accent-copper mb-2">2-8 semanas</div>
              <div className="text-sm text-slate-400">ROI típico</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-accent-copper mb-2">15-20h</div>
              <div className="text-sm text-slate-400">Horas/semana recuperadas</div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
