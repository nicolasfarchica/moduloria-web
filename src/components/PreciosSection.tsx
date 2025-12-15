'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PricingTier {
  name: string;
  tagline: string;
  price: string;
  duration: string;
  roi: string;
  bestFor: string;
  features: string[];
  examples: string[];
  cta: string;
  ctaLink: string;
  highlighted?: boolean;
}

const PRICING_TIERS: PricingTier[] = [
  {
    name: 'Diagnóstico Estratégico',
    tagline: 'Tu hoja de ruta digital',
    price: '€299',
    duration: 'Sesión 45 min + Informe',
    roi: 'Inmediato',
    bestFor: 'Empresas que necesitan claridad sobre dónde empezar y cuánto pueden ahorrar',
    features: [
      'Análisis profundo de procesos actuales',
      'Roadmap de implementación detallado',
      'Cálculo de ROI exacto garantizado',
      '100% Reembolsable al contratar',
    ],
    examples: ['Paso previo recomendado'],
    cta: '📞 Agendar Diagnóstico',
    ctaLink: '/auditoria',
  },
  {
    name: 'Quick Win',
    tagline: 'ROI en 1-3 semanas',
    price: '€3K - €8K',
    duration: 'Proyecto único',
    roi: '1-3 semanas',
    bestFor: 'Empresas de construcción modular que quieren validar automatización con IA con bajo riesgo antes de comprometerse',
    features: [
      'Implementación en 3-7 días',
      '1 automatización específica',
      'Setup técnico completo',
      'Capacitación del equipo',
      '1 mes de soporte incluido',
    ],
    examples: ['OCR Facturas', 'Clasificación Emails', 'Alertas de Retrasos'],
    cta: '🚀 Solicitar Quick Win',
    ctaLink: '/auditoria?plan=quick-win',
  },
  {
    name: 'High Impact',
    tagline: 'Transformación operativa',
    price: '€12K - €25K',
    duration: 'Implementación 2-4 semanas',
    roi: '4-8 semanas',
    bestFor: 'Empresas con múltiples proyectos activos que necesitan visibilidad y automatización avanzada',
    features: [
      'Implementación en 2-4 semanas',
      '3-5 automatizaciones integradas',
      'Dashboard personalizado en tiempo real',
      'Capacitación completa del equipo',
      '3 meses de soporte incluido',
      '2 sesiones de optimización mensuales',
    ],
    examples: ['Dashboard Multimódulo', 'Reportes Automáticos', 'Gestión Proveedores'],
    cta: '💎 Solicitar High Impact',
    ctaLink: '/auditoria?plan=high-impact',
    highlighted: true,
  },
];

const PRICING_FAQS = [
  {
    q: "¿Por qué hay rangos de precio (€3K-€8K) y no precios fijos?",
    a: "Cada empresa es diferente. Procesar 20 facturas/semana no es lo mismo que 200. Los rangos reflejan complejidad. En el Diagnóstico Estratégico te damos un precio exacto basado en tu caso específico."
  },
  {
    q: "¿Hay costos ocultos o recurrentes obligatorios?",
    a: "No. El precio incluye todo (implementación + capacitación + soporte inicial). Después del período de soporte incluido, puedes contratar mantenimiento opcional (€500-€1.5K/mes) o gestionar tú mismo las automatizaciones (te entregamos todo documentado)."
  },
  {
    q: "¿Qué pasa si después de pagar no funciona como esperaba?",
    a: "Garantía de ROI: Si después de 3 meses no ahorras mínimo el doble de la inversión, hacemos 2 sesiones de optimización gratis hasta que funcione. Si el problema es técnico nuestro (bug, error de implementación), lo arreglamos sin costo adicional. Si simplemente no funciona para tu caso, lo discutimos honestamente y buscamos solución o reembolso parcial según el caso."
  },
  {
    q: "¿Puedo empezar con Quick Win y luego escalar a High Impact?",
    a: "Absolutamente. Es el camino recomendado para implementar IA en construcción modular. Validas con bajo riesgo (Quick Win €3K-€8K), ves resultados reales en tu empresa, y luego decides si escalas. Bonus: Si contratas High Impact después de un Quick Win exitoso, te descontamos el 100% del Quick Win del precio final."
  },
  {
    q: "¿Los precios incluyen las licencias de herramientas (n8n, Make, etc.)?",
    a: "Depende de la solución. Quick Win: Usamos herramientas con planes gratuitos o de bajo costo (€0-€50/mes). Ese costo recurrente mínimo corre por tu cuenta. High Impact: Si necesitas herramientas premium, te asesoramos sobre las opciones más cost-effective. Licencias corren por tu cuenta, pero te ayudamos a optimizar costos."
  },
  {
    q: "¿Ofrecen descuentos por volumen o contratos anuales?",
    a: "No hacemos contratos anuales (va contra nuestra filosofía de flexibilidad). Pero sí ofrecemos descuentos en estos casos: 1) Múltiples proyectos: Si contratas 2+ Quick Wins simultáneos, 10% descuento. 2) Escalado: 100% descuento del Quick Win al pasar a High Impact."
  },
  {
    q: "¿El Diagnóstico de €299 es reembolsable?",
    a: "Sí, al 100%. Si decides contratar cualquier solución (Quick Win o High Impact) dentro de los 30 días siguientes, descontamos los €299 del precio final. Cobramos el diagnóstico porque entregamos un plan de trabajo real y accionable, no es una simple llamada de ventas."
  }
];

export default function PreciosSection() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section id="precios" className="section-padding bg-background-start relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary-dark/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent-copper/10 rounded-full blur-[100px] -z-10" />

      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6">
            Precios de <span className="text-accent-copper">IA en Construcción Modular</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
            Implementamos <strong className="text-white">automatización en construcción modular</strong> con precios transparentes.
            <br />
            Sin letra pequeña. Sin contratos eternos. Pagas por resultados, no por horas.
          </p>
          <p className="text-lg text-accent-copper font-semibold">
            💡 Empieza con un Diagnóstico → Valida con Quick Win → Escala con High Impact
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {PRICING_TIERS.map((tier, index) => {
            const tierId = index === 0 ? 'diagnostico' : index === 1 ? 'quick-win' : 'high-impact';
            return (
              <div
                key={tier.name}
                id={tierId}
                className={`relative rounded-2xl p-8 transition-all duration-300 scroll-mt-24 ${tier.highlighted
                  ? 'bg-gradient-to-br from-white/10 to-white/5 border border-accent-copper shadow-copper-glow transform md:-translate-y-4'
                  : 'bg-white/5 border border-white/10 hover:border-accent-copper/50 hover:bg-white/10'
                  }`}
              >
                {/* Highlighted Badge */}
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-full text-center">
                    <span className="bg-accent-copper text-white text-sm font-bold px-4 py-1 rounded-full shadow-lg">
                      ⭐ Más popular
                    </span>
                  </div>
                )}

                {/* Header */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold font-heading text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-400 mb-4">{tier.tagline}</p>

                  <div className="mb-4">
                    <div className={`text-4xl font-bold font-heading ${tier.highlighted ? 'text-accent-copper' : 'text-white'}`}>
                      {tier.price}
                    </div>
                    <div className="text-sm text-gray-400 mt-1">{tier.duration}</div>
                  </div>

                  <div className="bg-accent-copper/20 border border-accent-copper/30 rounded-lg px-4 py-2 inline-block">
                    <span className="text-sm font-semibold text-accent-copper">
                      ⏱️ ROI: {tier.roi}
                    </span>
                  </div>
                </div>

                {/* Best For */}
                <div className="mb-6">
                  <p className="text-sm font-semibold text-white mb-2">✅ Ideal para:</p>
                  <p className="text-gray-300 text-sm">{tier.bestFor}</p>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <p className="text-sm font-semibold text-white mb-3">📦 Incluye:</p>
                  <ul className="space-y-2">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                        <svg className="w-5 h-5 text-accent-copper flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Examples */}
                <div className="mb-6">
                  <p className="text-sm font-semibold text-white mb-2">💡 Ejemplos:</p>
                  <div className="space-y-1">
                    {tier.examples.map((example, idx) => (
                      <p key={idx} className="text-sm text-gray-400">• {example}</p>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href={tier.ctaLink}
                  className={`block text-center py-4 rounded-lg font-semibold transition-all duration-300 ${tier.highlighted
                    ? 'bg-accent-copper text-white hover:shadow-copper-glow hover:scale-[1.02]'
                    : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                >
                  {tier.cta}
                </Link>
              </div>
            );
          })}
        </div>

        {/* Pricing FAQ (Accordion) */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold font-heading text-white text-center mb-8">
            💬 Preguntas frecuentes sobre precios
          </h3>

          <div className="space-y-4">
            {PRICING_FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <motion.div
                  key={index}
                  className={`border rounded-xl overflow-hidden transition-all duration-300 ${isOpen
                    ? 'border-accent-copper/50 bg-white/5 shadow-lg'
                    : 'border-white/10 bg-white/5 hover:bg-white/10'
                    }`}
                  initial={false}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-6 text-left transition-colors focus:outline-none"
                  >
                    <span className={`text-lg font-semibold pr-4 transition-colors ${isOpen ? 'text-accent-copper' : 'text-white'}`}>
                      {faq.q}
                    </span>
                    <svg
                      className={`w-6 h-6 text-accent-copper flex-shrink-0 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 pt-0 bg-transparent">
                          <p className="text-gray-300 leading-relaxed border-t border-white/10 pt-4 text-sm">
                            {faq.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Trust Bar */}
        <div className="mt-12 text-center bg-gradient-to-r from-primary-medium/20 to-primary-dark/40 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold font-heading mb-4">
            💰 Inversión vs. Ahorro: <span className="text-accent-copper">Haz los números</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div>
              <div className="text-4xl font-bold text-accent-copper mb-2">€3K-€25K</div>
              <div className="text-secondary-beige text-sm">Inversión única</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent-copper mb-2">€67K-€156K</div>
              <div className="text-secondary-beige text-sm">Ahorro anual promedio</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent-copper mb-2">2-3 semanas</div>
              <div className="text-secondary-beige text-sm">ROI típico</div>
            </div>
          </div>
          <p className="text-secondary-beige mt-6 text-sm">
            ⭐ Datos basados en empresas piloto reales | ✅ Sin contratos anuales | 🔒 Sin vendor lock-in
          </p>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-12">
          <Link
            href="/auditoria"
            className="btn-primary text-xl px-12 py-6 inline-flex items-center shadow-copper-glow hover:scale-105 transition-transform"
          >
            📞 Agendar Diagnóstico Estratégico
          </Link>
          <p className="text-gray-400 text-sm mt-4">
            Incluye Roadmap + ROI Calculado | 100% Reembolsable al contratar
          </p>
        </div>
      </div>
    </section>
  );
}
