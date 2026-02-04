# SEO e Indexacion - Estado y Documentacion

**Ultima actualizacion:** 4 de Febrero 2026
**Autor:** Claude Code (asistencia a Nicolas)

---

## Resumen Ejecutivo

El sitio moduloria.com tiene un **problema de indexacion** debido a:
1. Migracion reciente a URLs con prefijo de idioma (`/es/`, `/en/`)
2. Redirecciones temporales (307) en lugar de permanentes (301)
3. Google mantiene indexadas las URLs antiguas sin prefijo

---

## Estado Actual de Indexacion (Google Search Console)

### Paginas Indexadas: 17

Todas con URLs **ANTIGUAS** (sin prefijo `/es/`):

| URL Indexada (antigua) | URL Nueva (correcta) | Estado |
|------------------------|---------------------|--------|
| `moduloria.com/` | `moduloria.com/es` | Redirige 307 |
| `moduloria.com/servicios` | `moduloria.com/es/servicios` | Redirige 307 |
| `moduloria.com/precios` | `moduloria.com/es/precios` | Redirige 307 |
| `moduloria.com/auditoria` | `moduloria.com/es/auditoria` | Redirige 307 |
| `moduloria.com/recursos` | `moduloria.com/es/recursos` | Redirige 307 |
| `moduloria.com/sobre-moduloria` | `moduloria.com/es/sobre-moduloria` | Redirige 307 |
| `moduloria.com/blog` | `moduloria.com/es/blog` | Redirige 307 |
| `moduloria.com/blog/*` (10 posts) | `moduloria.com/es/blog/*` | Redirigen 307 |

### Paginas No Indexadas: 5

| Motivo | Cantidad | Detalles |
|--------|----------|----------|
| No se ha encontrado (404) | 1 | URL antigua que ya no existe |
| Descubierta: actualmente sin indexar | 3 | Google las conoce pero no las indexo |
| Rastreada: actualmente sin indexar | 1 | Google las rasteo pero no las indexo |

### Paginas en Ingles: No Indexadas

| URL | Estado en Google |
|-----|-----------------|
| `/en` (homepage) | INDEXADA |
| `/en/services` | NO indexada |
| `/en/pricing` | NO indexada |
| `/en/audit` | NO indexada |
| `/en/resources` | NO indexada |

---

## Problema Principal: Redirecciones 307

### Que esta pasando

```
Usuario visita: moduloria.com/servicios
Servidor responde: HTTP 307 (Temporary Redirect) -> /es/servicios
```

### Por que es un problema

- **307 = Redireccion Temporal**: Google interpreta que la URL antigua sigue siendo valida
- **301 = Redireccion Permanente**: Google transferiria todo el SEO a la nueva URL

### Verificacion de Redirecciones (4 Feb 2026)

```bash
# Todas retornan 307 en lugar de 301:
curl -I https://moduloria.com/servicios  -> 307 -> /es/servicios
curl -I https://moduloria.com/precios    -> 307 -> /es/precios
curl -I https://moduloria.com/auditoria  -> 307 -> /es/auditoria
curl -I https://moduloria.com/recursos   -> 307 -> /es/recursos
curl -I https://moduloria.com/           -> 307 -> /es
curl -I https://www.moduloria.com/       -> 307 -> /es
```

---

## Problema Secundario: Canonical Duplicado

Google Search Console muestra para `/es`:
> "La pagina no esta indexada: Duplicada: Google ha elegido una version canonica diferente a la del usuario"

- **Declarada por usuario:** `https://moduloria.com/es`
- **Elegida por Google:** `https://www.moduloria.com/`

Esto indica que Google ve `www.moduloria.com` y `moduloria.com` como sitios diferentes.

---

## Configuracion Actual

### Archivos de Internacionalizacion

```
web/src/i18n/
├── config.ts          # Configuracion de locales y rutas
├── routing.ts         # Definicion del routing
└── request.ts         # Configuracion de next-intl
```

### Configuracion de Rutas (`config.ts`)

```typescript
export const locales = ['es', 'en'] as const;
export const defaultLocale: Locale = 'es';
export const localePrefix: LocalePrefix<typeof locales> = 'always';

// Mapeo de rutas:
// /servicios -> { es: '/servicios', en: '/services' }
// /precios -> { es: '/precios', en: '/pricing' }
// etc.
```

### Middleware (`middleware.ts`)

```typescript
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);
```

El middleware de `next-intl` usa 307 por defecto para permitir que el navegador recuerde la preferencia de idioma del usuario.

---

## Sitemap Actual

El sitemap (`/sitemap.xml`) esta **CORRECTO** con:
- 40 URLs totales (20 en espanol + 20 en ingles)
- Todos con prefijo `/es/` o `/en/`
- Hreflang correctamente configurados
- Canonical URLs correctas

Ejemplo:
```xml
<url>
  <loc>https://moduloria.com/es/servicios</loc>
  <xhtml:link rel="alternate" hreflang="es" href="https://moduloria.com/es/servicios" />
  <xhtml:link rel="alternate" hreflang="en" href="https://moduloria.com/en/services" />
</url>
```

---

## Solucion Recomendada

### Opcion 1: Agregar Redirecciones 301 en `next.config.js`

```javascript
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Consolidar www a non-www
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.moduloria.com' }],
        destination: 'https://moduloria.com/:path*',
        permanent: true, // 301
      },
      // Redirecciones de URLs antiguas a nuevas
      {
        source: '/servicios',
        destination: '/es/servicios',
        permanent: true, // 301
      },
      {
        source: '/precios',
        destination: '/es/precios',
        permanent: true,
      },
      {
        source: '/auditoria',
        destination: '/es/auditoria',
        permanent: true,
      },
      {
        source: '/recursos',
        destination: '/es/recursos',
        permanent: true,
      },
      {
        source: '/sobre-moduloria',
        destination: '/es/sobre-moduloria',
        permanent: true,
      },
      {
        source: '/blog',
        destination: '/es/blog',
        permanent: true,
      },
      {
        source: '/blog/:slug',
        destination: '/es/blog/:slug',
        permanent: true,
      },
    ];
  },
};
```

### Opcion 2: Crear `vercel.json` con redirecciones

```json
{
  "redirects": [
    {
      "source": "/servicios",
      "destination": "/es/servicios",
      "permanent": true
    },
    {
      "source": "/precios",
      "destination": "/es/precios",
      "permanent": true
    }
    // ... etc
  ]
}
```

---

## Pasos de Accion

### Inmediato (Prioridad Alta)

1. [ ] Implementar redirecciones 301 en `next.config.js`
2. [ ] Verificar que www.moduloria.com redirige 301 a moduloria.com
3. [ ] Re-deployar a produccion
4. [ ] Verificar redirecciones con `curl -I`

### Corto Plazo (1-2 dias)

5. [ ] Re-enviar sitemap en Google Search Console
6. [ ] Solicitar indexacion de nuevas URLs en ingles:
   - `/en/services`
   - `/en/pricing`
   - `/en/audit`
   - `/en/resources`
7. [ ] Solicitar indexacion de URLs espanol con prefijo:
   - `/es` (homepage)
   - `/es/servicios`
   - `/es/precios`
   - `/es/auditoria`
   - `/es/recursos`

### Mediano Plazo (1-2 semanas)

8. [ ] Monitorear en GSC que Google reindexe las nuevas URLs
9. [ ] Verificar que las URLs antiguas se marquen como "Redireccionada"
10. [ ] Revisar metricas de indexacion

---

## Comandos Utiles

### Verificar Redirecciones

```bash
# Ver tipo de redireccion
curl -I https://moduloria.com/servicios

# Seguir redirecciones y ver cadena completa
curl -I -L https://moduloria.com/servicios

# Verificar canonical en la pagina
curl -s https://moduloria.com/es/servicios | grep -i canonical
```

### Verificar Sitemap

```bash
curl -s https://moduloria.com/sitemap.xml | head -50
```

---

## Historial de Cambios

| Fecha | Cambio | Resultado |
|-------|--------|-----------|
| Ene 2026 | Implementacion de i18n con next-intl | Nuevas URLs con /es/ y /en/ |
| 4 Feb 2026 | Diagnostico de indexacion | Identificados problemas de 307 |
| Pendiente | Implementar 301 redirects | - |

---

## Referencias

- [Google: Redirecciones y SEO](https://developers.google.com/search/docs/crawling-indexing/301-redirects)
- [next-intl Middleware](https://next-intl-docs.vercel.app/docs/routing/middleware)
- [Vercel Redirects](https://vercel.com/docs/edge-network/redirects)

---

## Contacto

Para dudas sobre este documento o la configuracion SEO:
- Repositorio: `nicolasfarchica/moduloria-web`
- Proyecto Vercel: `web` en `nicolasfarchicas-projects`
