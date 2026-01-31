import ComparisonServiceSection from '@/components/ComparisonServiceSection';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function TestServiciosPage() {
    return (
        <main className="min-h-screen bg-background-start overflow-hidden">
            <Navigation />

            {/* Spacer for navigation */}
            <div className="pt-20" />

            <div className="py-20 text-center container-custom">
                <h1 className="text-2xl font-bold text-white mb-4">Página de Prueba: Nuevo Componente de Servicios</h1>
                <p className="text-slate-400">Este es un entorno seguro para previsualizar el diseño antes de implementarlo oficialmente.</p>
            </div>

            <ComparisonServiceSection />

            <Footer />
        </main>
    );
}
