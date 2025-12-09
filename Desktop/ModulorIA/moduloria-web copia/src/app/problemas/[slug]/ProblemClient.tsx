'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Problem, ProblemTier } from '../../../lib/problems';


export default function ProblemClient({ problem }: { problem: Problem }) {
    const tierColors: Record<ProblemTier, string> = {
        'quick-wins': 'border-accent-copper text-accent-copper bg-accent-copper/10',
        'high-impact': 'border-primary-light text-primary-light bg-primary-light/10',
        transformacional: 'border-primary-steel text-primary-steel bg-primary-steel/10',
    };

    const tierLabels: Record<ProblemTier, string> = {
        'quick-wins': 'Quick Win',
        'high-impact': 'High Impact',
        transformacional: 'Transformacional',
    };

    // Helper for border color only
    const getBorderColor = (tier: ProblemTier) => {
        if (tier === 'quick-wins') return 'border-accent-copper';
        if (tier === 'high-impact') return 'border-primary-light';
        return 'border-primary-steel';
    }

    // Helper for text color
    const getTextColor = (tier: ProblemTier) => {
        if (tier === 'quick-wins') return 'text-accent-copper';
        if (tier === 'high-impact') return 'text-primary-light';
        return 'text-primary-steel';
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
            <section className="relative z-10 py-24 lg:py-32">
                <div className="container-custom max-w-7xl mx-auto">
                    <Link
                        href="/problemas"
                        className="inline-flex items-center text-primary-steel hover:text-white transition-colors mb-10 group font-medium"
                    >
                        <span className="group-hover:-translate-x-1 transition-transform inline-block mr-2">←</span> Volver a todos los problemas
                    </Link>

                    <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-8xl bg-white/5 p-10 rounded-3xl border border-white/10 shadow-glow"
                        >
                            {problem.icon}
                        </motion.div>

                        <div className="flex-1">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`inline-block px-4 py-2 rounded-full text-sm font-bold mb-6 border uppercase tracking-wider ${tierColors[problem.tier]}`}
                            >
                                {tierLabels[problem.tier]}
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight font-heading"
                            >
                                {problem.title}
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-xl md:text-2xl text-primary-steel mb-10 font-light max-w-3xl leading-relaxed"
                            >
                                {problem.subtitle}
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="grid grid-cols-1 sm:grid-cols-3 gap-6"
                            >
                                <div className={`glass-card p-6 border-l-4 ${getBorderColor(problem.tier)} bg-background-dark/50`}>
                                    <p className="text-xs uppercase tracking-widest text-primary-steel mb-2 font-bold opacity-70">Ahorro Anual</p>
                                    <p className={`text-3xl font-bold ${getTextColor(problem.tier)} font-heading`}>
                                        {problem.savings}
                                    </p>
                                </div>
                                <div className="glass-card p-6 border-l-4 border-primary-steel/50 bg-background-dark/50">
                                    <p className="text-xs uppercase tracking-widest text-primary-steel mb-2 font-bold opacity-70">ROI Estimado</p>
                                    <p className="text-3xl font-bold text-white font-heading">
                                        {problem.roi}
                                    </p>
                                </div>
                                <div className="glass-card p-6 border-l-4 border-primary-steel/50 bg-background-dark/50">
                                    <p className="text-xs uppercase tracking-widest text-primary-steel mb-2 font-bold opacity-70">
                                        Implementación
                                    </p>
                                    <p className="text-3xl font-bold text-white font-heading">
                                        {problem.implementation}
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content Grid */}
            <section className="relative z-10 pb-20">
                <div className="container-custom max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Left Column: Context & Problems */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* Long Description */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="glass-panel p-10 bg-background-dark/60"
                        >
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 font-heading">
                                🤔 El Contexto
                            </h2>
                            <p className="text-gray-300 text-lg leading-relaxed font-light">
                                {problem.longDescription}
                            </p>
                        </motion.div>

                        {/* Symptoms */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="glass-panel p-10 border border-red-500/20 relative overflow-hidden bg-background-dark/60"
                        >
                            <div className="absolute top-0 left-0 w-1 h-full bg-red-500/50" />
                            <h2 className="text-2xl font-bold text-white mb-8 font-heading">
                                ⚠️ Síntomas comunes
                            </h2>
                            <ul className="space-y-6">
                                {problem.symptoms.map((symptom, index) => (
                                    <li key={index} className="flex items-start gap-4">
                                        <div className="p-1 rounded bg-red-500/10 text-red-400 mt-1">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-300 text-lg">{symptom}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Consequences */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="glass-panel p-10 border border-amber-500/20 relative overflow-hidden bg-background-dark/60"
                        >
                            <div className="absolute top-0 left-0 w-1 h-full bg-amber-500/50" />
                            <h2 className="text-2xl font-bold text-white mb-8 font-heading">
                                💸 Consecuencias de no actuar
                            </h2>
                            <ul className="space-y-6">
                                {problem.consequences.map((consequence, index) => (
                                    <li key={index} className="flex items-start gap-4">
                                        <div className="p-1 rounded bg-amber-500/10 text-amber-500 mt-1">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-300 text-lg">{consequence}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* API/Technology */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="glass-panel p-10"
                        >
                            <h3 className="font-bold text-white mb-6 font-heading text-xl">
                                🛠️ Stack Tecnológico
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {problem.technology.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="bg-primary-dark border border-white/5 text-primary-steel px-4 py-2 rounded-lg text-sm font-mono tracking-wide"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                    </div>

                    {/* Right Column: Solution & Case Study */}
                    <div className="space-y-12">

                        {/* Solution Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className={`glass-card p-8 border-t-4 ${getBorderColor(problem.tier)} bg-gradient-to-br from-primary-dark via-background-dark to-background-end`}
                        >
                            <h2 className={`text-2xl font-bold ${getTextColor(problem.tier)} mb-6 flex items-center gap-2 font-heading`}>
                                ✅ Nuestra Solución
                            </h2>
                            <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                                {problem.solution}
                            </p>

                            <Link
                                href="/auditoria"
                                className={`block w-full text-center py-5 rounded-xl font-bold text-white transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 ${problem.tier === 'quick-wins' ? 'bg-accent-copper hover:bg-accent-copper/90 shadow-accent-copper/20' :
                                    problem.tier === 'high-impact' ? 'bg-primary-medium hover:bg-primary-medium/90 shadow-primary-medium/20' :
                                        'bg-primary-dark border border-white/10 hover:bg-primary-dark/80'
                                    }`}
                            >
                                Implementar Solución
                            </Link>
                            <p className="text-xs text-center mt-4 text-primary-steel flex items-center justify-center gap-1">
                                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                Agenda disponible esta semana
                            </p>
                        </motion.div>

                        {/* Case Study */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="glass-panel p-8 border border-white/10 bg-white/5"
                        >
                            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider flex items-center gap-2 font-heading">
                                📊 Caso Real
                            </h3>

                            <div className="mb-6 pb-6 border-b border-white/5">
                                <p className="text-xs text-primary-steel uppercase tracking-widest font-bold mb-1">Empresa</p>
                                <p className="font-heading font-medium text-white text-lg">{problem.caseStudy.company}</p>
                            </div>

                            <div className="space-y-5 mb-8">
                                <div className="bg-red-500/10 p-4 rounded-xl border border-red-500/20">
                                    <p className="text-xs font-bold text-red-400 mb-2 uppercase tracking-wide">ANTES</p>
                                    <p className="text-sm text-gray-300">{problem.caseStudy.before}</p>
                                </div>
                                <div className="bg-green-500/10 p-4 rounded-xl border border-green-500/20">
                                    <p className="text-xs font-bold text-green-400 mb-2 uppercase tracking-wide">DESPUÉS</p>
                                    <p className="text-sm text-gray-300">{problem.caseStudy.after}</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 text-center">
                                <div className="bg-background-dark p-4 rounded-xl border border-white/5">
                                    <p className="text-xs text-primary-steel mb-2 uppercase tracking-wider font-bold">Ahorro</p>
                                    <p className="font-bold text-white text-lg">{problem.caseStudy.roi}</p>
                                </div>
                                <div className="bg-background-dark p-4 rounded-xl border border-white/5">
                                    <p className="text-xs text-primary-steel mb-2 uppercase tracking-wider font-bold">Tiempo</p>
                                    <p className="font-bold text-white text-lg">{problem.caseStudy.timeToValue}</p>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="relative z-10 py-24 bg-background-end/30 border-t border-white/5">
                <div className="container-custom max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-white mb-12 text-center font-heading"
                    >
                        Preguntas Frecuentes
                    </motion.h2>
                    <div className="space-y-6">
                        {problem.faq.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-card p-8 border border-white/5 hover:border-white/10 transition-colors"
                            >
                                <h3 className="font-semibold text-white mb-3 text-lg font-heading">
                                    {item.question}
                                </h3>
                                <p className="text-gray-400 leading-relaxed font-light">{item.answer}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="relative z-10 py-32">
                <div className="container-custom max-w-5xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="glass-panel p-16 text-center relative overflow-hidden border border-accent-copper/20"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-accent-copper/10 to-transparent pointer-events-none" />

                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 relative z-10 font-heading">
                            ¿Quieres resolver este problema?
                        </h2>
                        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto relative z-10 font-light leading-relaxed">
                            Solicita una auditoría gratuita y te mostramos exactamente cómo
                            automatizar este proceso en tu empresa, con <span className="text-white font-medium">números reales y ROI garantizado.</span>
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
                            <Link
                                href="/auditoria"
                                className="btn-primary px-10 py-5 text-lg shadow-glow hover:shadow-copper-lg"
                            >
                                Solicitar Auditoría Gratis
                            </Link>
                            <Link
                                href="/problemas"
                                className="btn-outline px-10 py-5 text-lg"
                            >
                                Ver Todos los Problemas
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
