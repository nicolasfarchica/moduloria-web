'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface Servicio {
    id: string;
    icon: string;
    title: string;
    subtitle: string;
    description: string;
    benefits: string[];
    useCase: string;
    timeline: string;
    image: string;
}

const SERVICIOS: Servicio[] = [
    {
        id: 'presupuestos',
        icon: '📊',
        title: 'Generación Automática de Presupuestos',
        subtitle: 'De 3 días a 2 horas',
        description: 'IA que analiza planos, especificaciones y bases de datos de costes para generar presupuestos detallados automáticamente.',
        benefits: [
            'Extracción automática de mediciones desde planos PDF/DWG',
            'Integración con tu base de datos de precios',
            'Formato personalizado según cliente',
            'Historial y versionado automático',
        ],
        useCase: 'Empresa de módulos prefabricados redujo tiempo de presupuesto de 3 días a 2 horas.',
        timeline: '2-3 semanas',
        image: '/images/budget-problem.png'
    },
    {
        id: 'planificacion',
        icon: '🗓️',
        title: 'Planificación Inteligente de Producción',
        subtitle: 'Optimización de fábrica',
        description: 'Algoritmos que optimizan la secuencia de producción, asignación de recursos y logística de entrega.',
        benefits: [
            'Secuenciación óptima de módulos en fábrica',
            'Balanceo de carga de trabajo por estación',
            'Alertas predictivas de cuellos de botella',
            'Integración con ERP existente',
        ],
        useCase: 'Planta de paneles CLT aumentó throughput un 23% sin inversión adicional.',
        timeline: '3-4 semanas',
        image: '/images/production-problem.png'
    },
    {
        id: 'documentacion',
        icon: '📄',
        title: 'Automatización de Documentación',
        subtitle: 'Adiós al papeleo manual',
        description: 'Generación automática de fichas técnicas, certificaciones, informes de calidad y documentación de proyecto.',
        benefits: [
            'Plantillas dinámicas que se rellenan solas',
            'Cumplimiento normativo automático (CTE, Eurocódigos)',
            'Exportación multi-formato (PDF, Excel, BIM)',
            'Trazabilidad completa de cambios',
        ],
        useCase: 'Constructora eliminó 15h/semana de trabajo administrativo.',
        timeline: '1-2 semanas',
        image: '/images/docs-problem.png'
    },
    {
        id: 'chatbot',
        icon: '💬',
        title: 'Asistente IA para Equipos',
        subtitle: 'Soporte técnico 24/7',
        description: 'Chatbot interno entrenado con tu documentación técnica, procedimientos y normativas.',
        benefits: [
            'Respuestas instantáneas sobre especificaciones',
            'Acceso a manuales y normativas desde WhatsApp',
            'Onboarding acelerado de nuevos empleados',
            'Multilingüe para equipos internacionales',
        ],
        useCase: 'Equipo de obra resuelve dudas técnicas en segundos en vez de llamar a oficina.',
        timeline: '3-5 días',
        image: '/images/team-problem.png'
    },
    {
        id: 'calidad',
        icon: '✅',
        title: 'Control de Calidad Visual con IA',
        subtitle: 'Detección automática de defectos',
        description: 'Visión artificial que analiza fotos de producción para detectar defectos, desviaciones y no conformidades.',
        benefits: [
            'Análisis de fotos desde móvil',
            'Detección de grietas, desalineaciones, acabados',
            'Reportes automáticos con ubicación del defecto',
            'Histórico para análisis de tendencias',
        ],
        useCase: 'Fábrica de módulos 3D redujo reclamaciones post-entrega un 40%.',
        timeline: '2-3 semanas',
        image: '/images/quality-problem.png'
    },
    {
        id: 'comercial',
        icon: '🎯',
        title: 'Automatización Comercial',
        subtitle: 'Más ventas, menos admin',
        description: 'Flujos automáticos de seguimiento de leads, propuestas personalizadas y nurturing de clientes.',
        benefits: [
            'CRM automatizado con seguimiento inteligente',
            'Propuestas generadas en minutos',
            'Secuencias de email personalizadas',
            'Dashboard de pipeline en tiempo real',
        ],
        useCase: 'Comercial pasó de gestionar 20 a 60 leads/mes sin contratar.',
        timeline: '1-2 semanas',
        image: '/images/sales-problem.png'
    },
];

export default function ServiciosSection() {
    return (
        <section id="servicios" className="section-padding bg-background-start relative overflow-hidden">
            {/* Background Pattern - Blueprint Grid */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="blueprint-grid" width="50" height="50" patternUnits="userSpaceOnUse">
                            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#C67A52" strokeWidth="0.5" />
                            <circle cx="0" cy="0" r="1" fill="#C67A52" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#blueprint-grid)" />
                </svg>
            </div>

            {/* Glow Effects */}
            <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-primary-steel/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-accent-copper/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container-custom relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-2 bg-accent-copper/10 border border-accent-copper/30 rounded-full text-accent-copper text-sm font-semibold mb-6">
                        🔧 SOLUCIONES CONCRETAS
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        ¿Qué puede hacer la <span className="text-accent-copper">IA</span> por tu empresa?
                    </h2>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto font-light">
                        No vendemos humo. Estas son las automatizaciones reales que implementamos en empresas de construcción modular.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {SERVICIOS.map((servicio, index) => (
                        <motion.div
                            key={servicio.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative"
                        >
                            <div className="glass-card h-full border border-white/5 hover:border-accent-copper/30 transition-all duration-300 hover:shadow-copper-glow flex flex-col p-0 overflow-hidden">
                                {/* Image Header */}
                                <div className="h-48 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10" />
                                    <img
                                        src={servicio.image}
                                        alt={servicio.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 right-4 z-20 w-10 h-10 rounded-lg bg-accent-copper/90 backdrop-blur-sm border border-white/20 flex items-center justify-center text-xl shadow-lg">
                                        {servicio.icon}
                                    </div>
                                </div>

                                <div className="p-8 flex-1 flex flex-col">
                                    {/* Title */}
                                    <div className="mb-4">
                                        <h3 className="text-xl font-bold text-white group-hover:text-accent-copper transition-colors mb-2">
                                            {servicio.title}
                                        </h3>
                                        <p className="text-accent-copper text-sm font-medium">{servicio.subtitle}</p>
                                    </div>

                                    {/* Description */}
                                    <p className="text-slate-400 mb-6 leading-relaxed text-sm flex-1">
                                        {servicio.description}
                                    </p>

                                    {/* Benefits */}
                                    <ul className="space-y-2 mb-6">
                                        {servicio.benefits.slice(0, 3).map((benefit, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-xs">
                                                <svg className="w-4 h-4 text-accent-copper flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                <span className="text-slate-300">{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Stats Row */}
                                    <div className="flex items-center justify-center pt-4 border-t border-white/5 mt-auto">
                                        <div className="text-center">
                                            <p className="text-[10px] text-slate-500 uppercase tracking-wider">Implementación</p>
                                            <p className="text-white font-semibold text-sm">{servicio.timeline}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Section - How it works summary */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-slate-900/80 via-primary-dark/50 to-slate-900/80 border border-white/10 rounded-2xl p-8 md:p-12"
                >
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                ¿No ves tu caso? <span className="text-accent-copper">Creamos soluciones a medida.</span>
                            </h3>
                            <p className="text-slate-300 mb-6">
                                Cada empresa de construcción modular tiene procesos únicos. Si tienes un cuello de botella específico,
                                analizamos tu situación y diseñamos una automatización personalizada.
                            </p>
                            <ul className="space-y-3 mb-6">
                                {[
                                    'Integración con cualquier software (ERP, CAD, BIM, Excel…)',
                                    'Automatizaciones multi-departamento',
                                    'Escalable según crecimiento',
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-slate-300">
                                        <svg className="w-5 h-5 text-accent-copper" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="text-center md:text-right">
                            <div className="inline-block bg-slate-800/50 border border-white/10 rounded-xl p-6 mb-6">
                                <p className="text-slate-400 text-sm mb-2">Resultados comprobados</p>
                                <p className="text-4xl md:text-5xl font-bold text-accent-copper">ROI Garantizado</p>
                                <p className="text-slate-500 text-sm mt-2">Ahorro medible en semanas</p>
                            </div>
                            <div>
                                <Link
                                    href="/auditoria"
                                    className="btn-primary px-8 py-4 text-lg inline-block shadow-copper-glow hover:scale-105 transition-transform"
                                >
                                    📞 Cuéntanos tu caso
                                </Link>
                                <p className="text-slate-500 text-sm mt-3">
                                    Diagnóstico Estratégico (reembolsable)
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
