import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white relative z-50">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <Image
                src="/logo-moduloria.png"
                alt="ModulorIA Logo"
                width={48}
                height={48}
              />
              <span className="text-2xl font-bold">
                Modulor<span className="text-accent-copper">IA</span>
              </span>
            </Link>
            <p className="text-secondary-beige text-lg mb-6 max-w-md">
              Automatización IA para construcción modular. Ahorra tiempo y dinero sin programar.
            </p>
            {/* Datos de contacto destacados */}
            <div className="space-y-3">
              <a
                href="mailto:contacto@moduloria.com"
                className="flex items-center space-x-3 text-secondary-beige hover:text-accent-copper transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>contacto@moduloria.com</span>
              </a>
              <a
                href="https://wa.me/4552801394"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-secondary-beige hover:text-accent-copper transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>+45 5280 1394</span>
              </a>
            </div>
          </div>

          {/* Problemas Column */}
          <div>
            <h3 className="font-semibold text-xl mb-6">Problemas</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/problemas#quick-wins"
                  className="text-secondary-beige hover:text-accent-copper transition-colors duration-300"
                >
                  Quick Wins
                </Link>
              </li>
              <li>
                <Link
                  href="/problemas#high-impact"
                  className="text-secondary-beige hover:text-accent-copper transition-colors duration-300"
                >
                  High Impact
                </Link>
              </li>
              <li>
                <Link
                  href="/problemas"
                  className="text-secondary-beige hover:text-accent-copper transition-colors duration-300"
                >
                  Ver todos (25)
                </Link>
              </li>
            </ul>
          </div>

          {/* Soluciones Column */}
          <div>
            <h3 className="font-semibold text-xl mb-6">Soluciones</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/soluciones#auditoria"
                  className="text-secondary-beige hover:text-accent-copper transition-colors duration-300"
                >
                  Auditoría
                </Link>
              </li>
              <li>
                <Link
                  href="/soluciones#quick-win"
                  className="text-secondary-beige hover:text-accent-copper transition-colors duration-300"
                >
                  Quick Win
                </Link>
              </li>
              <li>
                <Link
                  href="/soluciones#high-impact"
                  className="text-secondary-beige hover:text-accent-copper transition-colors duration-300"
                >
                  High Impact
                </Link>
              </li>
              <li>
                <Link
                  href="/precios"
                  className="text-secondary-beige hover:text-accent-copper transition-colors duration-300"
                >
                  Precios
                </Link>
              </li>
            </ul>
          </div>

          {/* Recursos Column */}
          <div>
            <h3 className="font-semibold text-xl mb-6">Recursos</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/recursos#guias"
                  className="text-secondary-beige hover:text-accent-copper transition-colors duration-300"
                >
                  Guías
                </Link>
              </li>
              <li>
                <Link
                  href="/recursos#calculadora"
                  className="text-secondary-beige hover:text-accent-copper transition-colors duration-300"
                >
                  Calculadora ROI
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre-nicolas"
                  className="text-secondary-beige hover:text-accent-copper transition-colors duration-300"
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="/auditoria"
                  className="text-secondary-beige hover:text-accent-copper transition-colors duration-300"
                >
                  Auditoría Gratis
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-secondary-beige text-sm">
            © 2025 ModulorIA. Todos los derechos reservados.
          </p>
          <div className="flex items-center space-x-6">
            <Link
              href="/privacidad"
              className="text-secondary-beige text-sm hover:text-accent-copper transition-colors duration-300"
            >
              Privacidad
            </Link>
            <Link
              href="/terminos"
              className="text-secondary-beige text-sm hover:text-accent-copper transition-colors duration-300"
            >
              Términos
            </Link>
            <Link
              href="/cookies"
              className="text-secondary-beige text-sm hover:text-accent-copper transition-colors duration-300"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
