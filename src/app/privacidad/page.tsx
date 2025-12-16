export const metadata = {
    title: 'Política de Privacidad | ModulorIA',
    description: 'Política de privacidad y protección de datos de ModulorIA. Cumplimiento GDPR y transparencia total en el manejo de información.',
    alternates: {
        canonical: 'https://moduloria.com/privacidad',
    },
};

export default function PrivacidadPage() {
    return (
        <main className="min-h-screen bg-background-start">
            <div className="container-custom section-padding">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 font-heading">
                        Política de Privacidad
                    </h1>

                    <div className="prose prose-invert max-w-none">
                        <div className="glass-card mb-8">
                            <h2 className="text-2xl font-bold text-white mb-4">1. Información que Recopilamos</h2>
                            <p className="text-slate-300 leading-relaxed mb-4">
                                En ModulorIA recopilamos información que nos proporcionas directamente cuando:
                            </p>
                            <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                                <li>Solicitas un diagnóstico estratégico</li>
                                <li>Te pones en contacto con nosotros</li>
                                <li>Te suscribes a nuestro boletín</li>
                                <li>Utilizas nuestros servicios</li>
                            </ul>
                        </div>

                        <div className="glass-card mb-8">
                            <h2 className="text-2xl font-bold text-white mb-4">2. Uso de la Información</h2>
                            <p className="text-slate-300 leading-relaxed mb-4">
                                Utilizamos la información recopilada para:
                            </p>
                            <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                                <li>Proporcionar y mejorar nuestros servicios</li>
                                <li>Responder a tus consultas y solicitudes</li>
                                <li>Enviarte información relevante sobre nuestros servicios</li>
                                <li>Cumplir con obligaciones legales</li>
                            </ul>
                        </div>

                        <div className="glass-card mb-8">
                            <h2 className="text-2xl font-bold text-white mb-4">3. Protección de Datos</h2>
                            <p className="text-slate-300 leading-relaxed">
                                Implementamos medidas de seguridad apropiadas para proteger tu información personal
                                contra acceso no autorizado, alteración, divulgación o destrucción. Cumplimos con el
                                Reglamento General de Protección de Datos (GDPR) de la Unión Europea.
                            </p>
                        </div>

                        <div className="glass-card mb-8">
                            <h2 className="text-2xl font-bold text-white mb-4">4. Tus Derechos</h2>
                            <p className="text-slate-300 leading-relaxed mb-4">
                                Tienes derecho a:
                            </p>
                            <ul className="list-disc list-inside text-slate-300 space-y-2 ml-4">
                                <li>Acceder a tus datos personales</li>
                                <li>Rectificar datos inexactos</li>
                                <li>Solicitar la eliminación de tus datos</li>
                                <li>Oponerte al procesamiento de tus datos</li>
                                <li>Solicitar la portabilidad de tus datos</li>
                            </ul>
                        </div>

                        <div className="glass-card mb-8">
                            <h2 className="text-2xl font-bold text-white mb-4">5. Cookies</h2>
                            <p className="text-slate-300 leading-relaxed">
                                Utilizamos cookies para mejorar tu experiencia en nuestro sitio web. Puedes configurar
                                tu navegador para rechazar cookies, aunque esto puede afectar la funcionalidad del sitio.
                            </p>
                        </div>

                        <div className="glass-card">
                            <h2 className="text-2xl font-bold text-white mb-4">6. Contacto</h2>
                            <p className="text-slate-300 leading-relaxed">
                                Si tienes preguntas sobre esta política de privacidad, contáctanos en:
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
