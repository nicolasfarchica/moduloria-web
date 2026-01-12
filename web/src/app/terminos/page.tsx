export const metadata = {
    title: 'Términos de Uso | ModulorIA',
    description: 'Términos y condiciones de uso de los servicios de ModulorIA. Garantía de ROI y condiciones transparentes.',
    alternates: {
        canonical: 'https://moduloria.com/terminos',
    },
};

export default function TerminosPage() {
    return (
        <main className="min-h-screen bg-background-start">
            <div className="container-custom section-padding">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 font-heading">
                        Términos de Uso
                    </h1>

                    <div className="prose prose-invert max-w-none">
                        <div className="glass-card mb-8">
                            <h2 className="text-2xl font-bold text-white mb-4">1. Aceptación de Términos</h2>
                            <p className="text-slate-300 leading-relaxed">
                                Al acceder y utilizar los servicios de ModulorIA, aceptas estar sujeto a estos términos
                                de uso. Si no estás de acuerdo con alguno de estos términos, no debes utilizar nuestros
                                servicios.
                            </p>
                        </div>

                        <div className="glass-card mb-8">
                            <h2 className="text-2xl font-bold text-white mb-4">2. Servicios Ofrecidos</h2>
                            <p className="text-slate-300 leading-relaxed mb-4">
                                ModulorIA proporciona servicios de automatización con inteligencia artificial para la
                                industria de la construcción modular, incluyendo:
                            </p>
                            <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                                <li>Diagnóstico estratégico de procesos</li>
                                <li>Implementación de automatizaciones con IA</li>
                                <li>Capacitación y soporte técnico</li>
                                <li>Consultoría en transformación digital</li>
                            </ul>
                        </div>

                        <div className="glass-card mb-8">
                            <h2 className="text-2xl font-bold text-white mb-4">3. Uso Apropiado</h2>
                            <p className="text-slate-300 leading-relaxed mb-4">
                                Te comprometes a:
                            </p>
                            <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                                <li>Utilizar nuestros servicios de manera legal y apropiada</li>
                                <li>No interferir con el funcionamiento de nuestros servicios</li>
                                <li>Proporcionar información veraz y actualizada</li>
                                <li>Mantener la confidencialidad de tus credenciales de acceso</li>
                            </ul>
                        </div>

                        <div className="glass-card mb-8">
                            <h2 className="text-2xl font-bold text-white mb-4">4. Propiedad Intelectual</h2>
                            <p className="text-slate-300 leading-relaxed">
                                Todo el contenido, software, y materiales proporcionados por ModulorIA son propiedad de
                                ModulorIA o sus licenciantes. Las automatizaciones desarrolladas específicamente para tu
                                empresa son de tu propiedad una vez completado el pago.
                            </p>
                        </div>

                        <div className="glass-card mb-8">
                            <h2 className="text-2xl font-bold text-white mb-4">5. Limitación de Responsabilidad</h2>
                            <p className="text-slate-300 leading-relaxed">
                                ModulorIA no será responsable de daños indirectos, incidentales o consecuentes que
                                surjan del uso de nuestros servicios. Nuestra responsabilidad máxima se limita al monto
                                pagado por los servicios.
                            </p>
                        </div>

                        <div className="glass-card mb-8">
                            <h2 className="text-2xl font-bold text-white mb-4">6. Garantía de ROI</h2>
                            <p className="text-slate-300 leading-relaxed">
                                Ofrecemos una garantía de ROI como se describe en nuestros paquetes de servicio.
                                Si no alcanzas el ROI proyectado en 3 meses, realizaremos sesiones de optimización
                                adicionales sin costo, sujeto a los términos específicos del servicio contratado.
                            </p>
                        </div>

                        <div className="glass-card mb-8">
                            <h2 className="text-2xl font-bold text-white mb-4">7. Modificaciones</h2>
                            <p className="text-slate-300 leading-relaxed">
                                Nos reservamos el derecho de modificar estos términos en cualquier momento. Las
                                modificaciones entrarán en vigor inmediatamente después de su publicación en nuestro
                                sitio web.
                            </p>
                        </div>

                        <div className="glass-card">
                            <h2 className="text-2xl font-bold text-white mb-4">8. Contacto</h2>
                            <p className="text-slate-300 leading-relaxed">
                                Para preguntas sobre estos términos, contáctanos en:
                            </p>
                            <p className="text-accent-copper mt-2">
                                contacto@moduloria.com
                            </p>
                        </div>

                        <div className="mt-8 text-center text-slate-500 text-sm">
                            <p>Última actualización: Diciembre 2024</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
