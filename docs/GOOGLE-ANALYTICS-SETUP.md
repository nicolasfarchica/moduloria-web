# 📊 Configuración de Google Analytics 4 y Search Console

> **Fecha:** 2026-01-15
> **Estado:** Código implementado ✅ | Configuración en Google pendiente ⏳

---

## ✅ Lo que ya está listo

El código técnico ya está implementado:
- ✅ `@next/third-parties` instalado
- ✅ GoogleAnalytics component en `layout.tsx`
- ✅ Variables de entorno configuradas en `.env.local`
- ✅ Utilidades de tracking personalizadas en `src/lib/analytics.ts`
- ✅ Google Search Console meta tag en layout (verificación: `cd787c1f8c691567`)

---

## 🎯 Paso 1: Crear Propiedad de Google Analytics 4

### 1.1 Acceder a Google Analytics
1. Ve a [analytics.google.com](https://analytics.google.com)
2. Inicia sesión con tu cuenta de Google
3. Click en "Admin" (⚙️) en la esquina inferior izquierda

### 1.2 Crear Cuenta (si no existe)
1. En la columna "Cuenta", click en "Crear cuenta"
2. Nombre de cuenta: **ModulorIA**
3. Configura las opciones de compartición de datos (recomendado: todas activadas)
4. Click "Siguiente"

### 1.3 Crear Propiedad
1. Nombre de la propiedad: **ModulorIA Website**
2. Zona horaria: **Europe/Madrid (GMT+1)**
3. Moneda: **Euro (EUR)**
4. Click "Siguiente"
5. Selecciona categoría: **Technology/Software**
6. Tamaño empresa: **Small (1-10 employees)**
7. Uso: **Generate leads**
8. Click "Crear"
9. Acepta los términos de servicio

### 1.4 Configurar Flujo de Datos Web
1. Selecciona plataforma: **Web**
2. URL del sitio web: `https://moduloria.com`
3. Nombre del stream: **ModulorIA Production**
4. Click "Crear stream"
5. **¡IMPORTANTE!** Copia el **Measurement ID** (formato: `G-XXXXXXXXXX`)

### 1.5 Actualizar Variable de Entorno
Edita el archivo `web/.env.local` y reemplaza:

```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

Con tu ID real. Ejemplo:
```bash
NEXT_PUBLIC_GA_ID=G-4YHW8K2P9L
```

### 1.6 Actualizar en Producción (Vercel)
1. Ve a tu proyecto en [vercel.com](https://vercel.com)
2. Settings → Environment Variables
3. Agrega nueva variable:
   - **Name:** `NEXT_PUBLIC_GA_ID`
   - **Value:** `G-XXXXXXXXXX` (tu ID real)
   - **Environments:** Production, Preview
4. Click "Save"
5. Redeploy el sitio para aplicar cambios

---

## 🔍 Paso 2: Configurar Google Search Console

### 2.1 Acceder a Search Console
1. Ve a [search.google.com/search-console](https://search.google.com/search-console)
2. Inicia sesión con tu cuenta de Google

### 2.2 Agregar Propiedad
1. Click "Agregar propiedad"
2. Selecciona **Dominio** (recomendado)
3. Escribe: `moduloria.com`
4. Click "Continuar"

### 2.3 Verificar Propiedad

**Opción A - Verificación por DNS (Recomendado)**
1. Copia el registro TXT que te proporciona Google
2. Ve a tu proveedor de DNS (probablemente Vercel o tu registrador de dominio)
3. Agrega un registro TXT:
   - **Name/Host:** `@` o deja en blanco
   - **Value:** (el código que copiaste)
   - **TTL:** 3600
4. Espera 5-10 minutos para propagación
5. Vuelve a Search Console y click "Verificar"

**Opción B - Verificación por meta tag (Ya configurado)**
El meta tag ya está en tu `layout.tsx` (línea 29):
```typescript
verification: {
  google: 'cd787c1f8c691567',
}
```
Solo click en "Verificar" en Search Console.

### 2.4 Enviar Sitemap
1. Una vez verificado, en el menú izquierdo: **Sitemaps**
2. Agrega nueva sitemap: `https://moduloria.com/sitemap.xml`
3. Click "Enviar"
4. Espera 24-48 horas para que Google crawlee el sitio

### 2.5 Solicitar Indexación de Páginas Clave
1. Menú izquierdo: **Inspección de URLs**
2. Ingresa y solicita indexación para cada página:
   - `https://moduloria.com/`
   - `https://moduloria.com/servicios`
   - `https://moduloria.com/precios`
   - `https://moduloria.com/auditoria`
   - `https://moduloria.com/sobre-moduloria`
3. Para cada una: Click "Solicitar indexación"

### 2.6 Configurar Alertas por Email
1. Settings → **Users and permissions**
2. Verifica que tu email esté configurado
3. En "Email notifications", activa:
   - Critical issues
   - New issues
   - Improvement opportunities

---

## 📈 Paso 3: Configurar Conversiones en GA4

### 3.1 Crear Eventos de Conversión
1. En GA4, ve a **Admin → Events**
2. Click "Create event"
3. Crea los siguientes eventos marcados como conversión:

#### Evento 1: Form Submit
- Event name: `form_submit`
- Matching conditions:
  - Parameter: `event_name`
  - Operator: `equals`
  - Value: `form_submit`
- Marcar como "Conversión"

#### Evento 2: Calendly Click
- Event name: `calendly_click`
- Marcar como "Conversión"

#### Evento 3: WhatsApp Click
- Event name: `whatsapp_click`
- Marcar como "Conversión"

### 3.2 Configurar Objetivos Personalizados
1. Ve a **Admin → Custom Definitions → Custom metrics**
2. Crea métrica: "Lead Quality Score" (0-100)
3. Scope: Event
4. Parameter: `lead_score`

---

## 🧪 Paso 4: Verificar Instalación

### 4.1 Test en Modo Desarrollo
```bash
cd web
npm run dev
```

Abre tu navegador en `http://localhost:3000` y:
1. Abre DevTools (F12)
2. Tab "Network"
3. Filtra por "google-analytics" o "gtag"
4. Navega por el sitio
5. Deberías ver peticiones a `google-analytics.com/g/collect`

### 4.2 Test con GA4 DebugView
1. En GA4: **Admin → DebugView**
2. Abre tu sitio en modo incógnito
3. Agrega `?debug_mode=true` a la URL: `https://moduloria.com/?debug_mode=true`
4. Navega por el sitio
5. En DebugView deberías ver eventos en tiempo real:
   - `page_view`
   - `session_start`
   - Tus eventos personalizados (cuando los actives)

### 4.3 Verificar eventos personalizados
Prueba los siguientes eventos en tu sitio:

**Test 1: Form Submit**
```typescript
// En tu componente de formulario
import { trackFormSubmit } from '@/lib/analytics';

const handleSubmit = (e) => {
  e.preventDefault();
  // ... tu lógica
  trackFormSubmit('contact_form');
};
```

**Test 2: Calendly Click**
```typescript
// En el botón de Calendly
import { trackCalendlyClick } from '@/lib/analytics';

<button onClick={() => trackCalendlyClick('hero_section')}>
  Agendar Auditoría
</button>
```

**Test 3: WhatsApp Click**
```typescript
// En el link de WhatsApp
import { trackWhatsAppClick } from '@/lib/analytics';

<a
  href="https://wa.me/4552801394"
  onClick={() => trackWhatsAppClick('footer')}
>
  Contactar por WhatsApp
</a>
```

---

## 📊 Paso 5: Auditoría SEO Baseline

### 5.1 Core Web Vitals
1. Ve a [PageSpeed Insights](https://pagespeed.web.dev/)
2. Analiza: `https://moduloria.com`
3. Documenta scores (objetivo: >90):
   - **Performance:** ___ / 100
   - **Accessibility:** ___ / 100
   - **Best Practices:** ___ / 100
   - **SEO:** ___ / 100
4. Métricas clave:
   - **LCP** (Largest Contentful Paint): ___ s (objetivo: <2.5s)
   - **FID** (First Input Delay): ___ ms (objetivo: <100ms)
   - **CLS** (Cumulative Layout Shift): ___ (objetivo: <0.1)

### 5.2 Indexación Actual
En Search Console (después de 48h):
- Páginas indexadas: ___
- Páginas válidas: ___
- Páginas con errores: ___
- Páginas excluidas: ___

### 5.3 Keywords Baseline
Usa [Ubersuggest](https://neilpatel.com/ubersuggest/) (free tier):
1. Analiza: `moduloria.com`
2. Documenta:
   - Keywords posicionadas: ___
   - Posición promedio: ___
   - Tráfico orgánico estimado: ___ visitas/mes
3. Top 5 keywords:
   - 1. _______________ (posición: ___)
   - 2. _______________ (posición: ___)
   - 3. _______________ (posición: ___)
   - 4. _______________ (posición: ___)
   - 5. _______________ (posición: ___)

### 5.4 Competencia
Analiza con [SimilarWeb](https://www.similarweb.com/) (free):
- Competitor 1: _______________ (tráfico: ___ /mes)
- Competitor 2: _______________ (tráfico: ___ /mes)
- Competitor 3: _______________ (tráfico: ___ /mes)

---

## 📋 Checklist Final

### Configuración Técnica
- [ ] ID de GA4 configurado en `.env.local`
- [ ] ID de GA4 configurado en Vercel
- [ ] Sitio redeployado en producción
- [ ] Verificación en GA4 DebugView exitosa

### Google Search Console
- [ ] Propiedad verificada
- [ ] Sitemap enviado y aceptado
- [ ] Páginas principales indexadas solicitadas
- [ ] Alertas por email configuradas

### Google Analytics 4
- [ ] Propiedad creada
- [ ] Flujo de datos web configurado
- [ ] Eventos de conversión creados:
  - [ ] form_submit
  - [ ] calendly_click
  - [ ] whatsapp_click
- [ ] Test de eventos exitoso

### Auditoría SEO
- [ ] PageSpeed Insights ejecutado y documentado
- [ ] Core Web Vitals baselines registrados
- [ ] Keywords baseline documentado
- [ ] Competidores analizados

---

## 🚀 Próximos Pasos (después de configuración)

### Semana 1-2: Monitoreo Inicial
- Revisar GA4 diariamente para confirmar tracking correcto
- Verificar que no haya errores 404 en Search Console
- Confirmar que todas las páginas se indexen

### Mes 1: Optimización
- Analizar páginas con más tráfico
- Identificar páginas con alto bounce rate
- Optimizar meta descriptions basadas en CTR en Search Console

### Mensual: Reporte
Crea template de reporte con:
- Tráfico total (usuarios, sesiones, pageviews)
- Top 5 páginas por tráfico
- Top 5 fuentes de tráfico
- Conversiones (formularios, Calendly, WhatsApp)
- Posiciones de keywords principales
- Nuevas páginas indexadas

---

## 🆘 Troubleshooting

### No veo datos en GA4
- Espera 24-48 horas para datos iniciales
- Verifica que `NEXT_PUBLIC_GA_ID` esté correcto (formato `G-XXXXXXXXXX`)
- Confirma que el sitio esté desplegado con la nueva variable
- Usa DebugView para ver eventos en tiempo real

### Sitemap no aparece en Search Console
- Verifica que `https://moduloria.com/sitemap.xml` cargue correctamente
- Puede tomar 24-48 horas para que Google lo procese
- Revisa errores en Search Console → Sitemaps

### Páginas no se indexan
- Solicita indexación manualmente (límite: 10/día)
- Verifica que no haya archivo `robots.txt` bloqueando
- Confirma que las páginas no tengan `noindex` meta tag
- Espera 1-2 semanas para indexación orgánica

---

## 📚 Recursos Útiles

- [GA4 Setup Guide](https://support.google.com/analytics/answer/9304153)
- [Search Console Help](https://support.google.com/webmasters/)
- [Next.js Analytics Docs](https://nextjs.org/docs/app/building-your-application/optimizing/analytics)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Schema.org Generator](https://technicalseo.com/tools/schema-markup-generator/)

---

**Última actualización:** 2026-01-15
**Por:** Claude Code
**Estado:** ✅ Código implementado | ⏳ Configuración en Google pendiente
