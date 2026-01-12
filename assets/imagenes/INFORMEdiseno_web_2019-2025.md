# INFORME FINAL 2019–2025: Estado del Arte en Diseño Web, UX e Ingeniería Frontend

**Síntesis de análisis:** ChatGPT, Claude/Sonnet y Gemini  
**Fecha:** Noviembre 2025  
**Versión:** 1.0

---

## 0. Metodología y fuentes

Este informe final consolida y depura la información procedente de tres documentos previos:

- Informe consolidado de diseño web 2019–2025 (ChatGPT).
- Informe consolidado de diseño web 2019–2025 (Claude/Sonnet).
- Meta-informe consolidado 2019–2025 sobre diseño web, UX e ingeniería frontend (Gemini).

El objetivo de esta versión es:

1. Eliminar redundancias entre documentos.  
2. Unificar criterios, terminología y métricas.  
3. Completar lagunas y reorganizar contenidos en una estructura única, accionable y lista para implementación.

---

## 1. Resumen Ejecutivo

Entre 2019 y 2025 el diseño web ha pasado de ser una disciplina principalmente visual a ser **ingeniería de productos digitales**, donde UX, rendimiento, accesibilidad y sistemas de diseño se consideran un mismo problema.

### 1.1 Hallazgos clave consolidados

1. **Core Web Vitals redefinidos y centrados en el usuario**  
   - INP reemplaza a FID en marzo de 2024 como métrica de interactividad.  
   - Umbrales de referencia 2025:  
     - **LCP ≤ 2.5 s** (carga percibida)  
     - **INP ≤ 200 ms** (interactividad)  
     - **CLS < 0.1** (estabilidad visual)  
   - Sitios que cumplen estos umbrales muestran mejoras claras en SEO y conversión.

2. **Accesibilidad como requisito legal, no opcional**  
   - **WCAG 2.2 AA** y la **European Accessibility Act (EAA 2025)** convierten la accesibilidad en condición para operar en muchos mercados.  
   - Nuevos criterios como *Focus Appearance*, *Dragging Movements* y *Target Size* obligan a rediseñar patrones de interacción, especialmente en móvil.

3. **Design Systems y Design Tokens como infraestructura**  
   - Los **Design Tokens** (especificación DTCG) se consolidan como formato estándar para conectar Figma/Sketch/Framer con código (CSS, iOS, Android).  
   - Reducen inconsistencias visuales, el time-to-market y el coste de mantenimiento en productos multi-plataforma.

4. **Mobile-first y mobile-only como norma de facto**  
   - El tráfico móvil supera el 60–63 % del total.  
   - Google ha completado la transición a **Mobile-Only Indexing**.  
   - El mayor cuello de botella competitivo está en la experiencia móvil: el ~75 % de sitios móviles fallan en al menos una métrica vital.

5. **La IA pasa de “gadget” a copiloto del proceso de diseño**  
   - IA generativa para: wireframes, copy, variantes de UI, componentes, patrones de navegación y documentación.  
   - El rol del diseñador evoluciona a **“curador de sistemas”**: define constraints, revisa y orquesta resultados generados, en lugar de diseñar todo píxel a píxel.

6. **Medición continua con datos reales (RUM)**  
   - Los equipos maduros ya no se basan solo en Lighthouse o tests de laboratorio.  
   - Se implantan soluciones de **Real User Monitoring** (RUM) para tomar decisiones con datos de usuarios reales (p75/p90).

### 1.2 Acciones inmediatas (Next Business Day)

Acciones que pueden iniciarse en 1–2 días y tienen alto impacto:

1. **Auditar Core Web Vitals con foco en INP**  
   - Revisar rutas críticas en Chrome DevTools/Pagespeed + datos de campo.  
   - Localizar interacciones con latencia > 200 ms y asociarlas a “Long Tasks” de JavaScript.

2. **Adoptar HTML semántico como estándar obligatorio**  
   - Reestructurar las plantillas base con `<header>`, `<nav>`, `<main>`, `<article>`, `<aside>`, `<footer>`.  
   - Esto mejora accesibilidad, SEO y mantenimiento.

3. **Aplicar un checklist mínimo de WCAG 2.2 AA**  
   - Verificar foco visible, tamaño mínimo de objetivos táctiles (24×24 px), navegación por teclado y contraste de color.

4. **Optimizar imágenes y fuentes de forma agresiva**  
   - Formatos AVIF/WebP; `srcset` + `sizes`; `loading="lazy"`; `fetchpriority="high"` en la imagen principal.  
   - `font-display: swap` y reducir el número de variantes de fuente.

5. **Definir y documentar un set inicial de Design Tokens**  
   - Empezar por: color, tipografía, espaciado, radios de borde y sombras.  
   - Publicar estos tokens como única fuente de verdad en el repositorio y en la herramienta de diseño.

---

## 2. Landscape 2019–2025

### 2.1 Evolución por período

| Aspecto           | 2019–2021                                      | 2022–2023                                                   | 2024–2025                                                                 |
|------------------|-----------------------------------------------|------------------------------------------------------------|----------------------------------------------------------------------------|
| **CSS**          | Flexbox dominante, adopción progresiva de Grid | CSS Grid masivo, Subgrid, primeras Container Queries       | `:has()`, Container Queries maduras, View Transitions API, CSS Nesting    |
| **Métricas**     | PageSpeed genérico, TTFB                      | Core Web Vitals (LCP, FID, CLS)                           | INP reemplaza FID, foco en datos de campo y Edge Rendering                 |
| **Arquitectura** | SPAs pesadas (CSR)                            | Jamstack, SSG, SSR híbrido                                | ISR, Server Components (RSC), streaming y render híbrido server/client    |
| **UI Trends**    | Flat 2.0, neumorfismo experimental            | Glassmorphism, dark mode, micro-interacciones más cuidadas | Bento Grids, spatial design, UI generativa asistida por IA                |
| **Design Systems** | Guías de estilo estáticas y catálogos PDF   | Atomic Design, bibliotecas de componentes en Figma         | Design Tokens estandarizados, sincronización bidireccional diseño–código  |

### 2.2 Hitos principales

| Año  | Hito clave                                       | Impacto en la industria                                      |
|------|--------------------------------------------------|--------------------------------------------------------------|
| 2019 | HTML5 consolidado; Atomic Design mainstream      | Componentización, diseño modular y escalabilidad             |
| 2020 | Anuncio de Core Web Vitals                       | La performance se convierte en factor explícito de ranking   |
| 2021 | Mobile-first / mobile-only indexing completado   | La experiencia móvil pasa a ser criterio prioritario         |
| 2023 | Publicación de WCAG 2.2                          | Nuevos requisitos para foco, gestos y tamaño de objetivos    |
| 2024 | INP reemplaza a FID en CWV                       | Medición de interactividad más representativa                |
| 2025 | Design Tokens Spec v2025.x (DTCG)                | Interoperabilidad real entre herramientas y plataformas      |

---

## 3. Mejores prácticas 2025 por pilar

### 3.1 UX/UI y arquitectura de información

- **Navegación clara y predecible**  
  - Máximo recomendado de 7±2 ítems en la navegación principal.  
  - En móvil, evitar esconder todo tras un menú hamburguesa sin pistas: mostrar al menos accesos directos clave.

- **Bento Grids y modularidad**  
  - Bloques bien delimitados que permiten mezclar contenido editorial, fichas de producto y CTAs en layouts coherentes.  
  - Facilita la lectura escaneable y el reuso de componentes.

- **Container Queries**  
  - Los componentes se adaptan a su contenedor (tarjeta, sidebar, layout) y no solo al viewport.  
  - Esto hace posible construir librerías de componentes verdaderamente reutilizables.

- **Micro-interacciones y feedback inmediato**  
  - Respuesta visual ideal: < 100 ms (hover, focus, pressed, loading).  
  - Indicadores de progreso claros para acciones que > 500 ms.

- **Scroll y narrativa (scrollytelling)**  
  - Útil para páginas de marketing, producto y storytelling.  
  - Combinar secciones horizontales, animaciones suaves y anclajes en el contenido para mantener contexto.

- **View Transitions API**  
  - Transiciones suaves entre vistas evitando “flash” de recarga.  
  - Especialmente interesante en aplicaciones SPA/MPA modernas.

### 3.2 Accesibilidad (WCAG 2.2 AA + EAA)

#### Criterios nuevos y reforzados

- **2.4.11 Focus Not Obscured / 2.4.13 Focus Appearance**  
  - El foco debe ser claramente visible, no puede quedar tapado por headers fijos.  
  - Se recomienda `outline` de al menos 2 px, contraste ≥ 3:1 y `scroll-padding-top` para evitar que el elemento con foco quede oculto.

- **2.5.7 Dragging Movements**  
  - Toda funcionalidad basada en arrastrar (sliders, mapas, drag & drop) debe tener una alternativa con simples clics o toques.

- **2.5.8 Target Size (Mínimo 24×24 px)**  
  - Objetivos táctiles suficientemente grandes; ideal 44×44 px.  
  - Se suele resolver aumentando el `padding` sin cambiar el diseño visual.

- **3.2.6 Consistent Help y 3.3.7 Redundant Entry**  
  - Los canales de ayuda (chat, teléfono, documentación) deben estar siempre en lugares consistentes.  
  - No se debe pedir la misma información varias veces en un mismo flujo si ya se conoce.

#### Checklist mínimo de accesibilidad

- [ ] Todo contenido no decorativo tiene texto alternativo adecuado.  
- [ ] Contraste mínimo 4.5:1 para texto normal, 3:1 para texto grande.  
- [ ] La web se puede usar **solo con teclado** (sin ratón).  
- [ ] Existen enlaces de “saltar al contenido principal” (`skip links`).  
- [ ] Formularios con `<label>` correctamente asociado y mensajes de error claros.  
- [ ] ARIA se usa solo cuando el HTML estándar no es suficiente.  
- [ ] El idioma del documento está definido (`<html lang="es">`, etc.).

### 3.3 Performance (Core Web Vitals)

#### Umbrales recomendados 2025

| Métrica | Excelente          | Necesita mejora      | Pobre        |
|--------|--------------------|----------------------|--------------|
| LCP    | ≤ 2.5 s            | 2.5–4 s              | > 4 s        |
| INP    | ≤ 200 ms           | 200–500 ms           | > 500 ms     |
| CLS    | < 0.1              | 0.1–0.25             | > 0.25       |

#### Estrategias por métrica

**LCP (Largest Contentful Paint)**  
- Optimizar la imagen o bloque principal de la página (hero).  
- Usar `fetchpriority="high"` y `preconnect` a CDNs críticos.  
- Inyectar CSS crítico en línea y diferir el resto.  
- Usar AVIF/WebP + compresión adecuada.  
- Limitar scripts de terceros en el “above the fold”.

**INP (Interaction to Next Paint)**  
- Detectar y dividir **Long Tasks** (> 50 ms) en el hilo principal.  
- Mover cálculos pesados a Web Workers.  
- Hacer **code splitting** y cargar solo el JavaScript necesario por vista.  
- Huir de hidrata­ciones masivas en el cliente cuando SSR/ISR sea viable.  
- Diferir scripts de terceros (`defer`, `async`) o cargarlos bajo demanda.

**CLS (Cumulative Layout Shift)**  
- Definir `width`/`height` o `aspect-ratio` en imágenes y video.  
- Reservar espacio para anuncios, iframes y embeds mediante contenedores con altura fija o mínima.  
- Usar `font-display: swap` con fuentes fallback que tengan métricas similares.  
- Evitar inyectar banners y consentimientos que empujen el contenido sin animación controlada.

### 3.4 SEO on-page y semántica

#### Estructura HTML recomendada

```html
<header>
  <nav>...</nav>
</header>

<main>
  <article>
    <h1>Título principal</h1>
    <section>...</section>
  </article>
  <aside>Contenido relacionado</aside>
</main>

<footer>...</footer>
```

#### Factores clave on-page en 2025

- **Title tag**: ≤ 60 caracteres, keyword principal al inicio.  
- **Meta description**: ≤ 155 caracteres, orientada a clic (incluye beneficios + CTA).  
- **H1 único** por página, alineado con la intención de búsqueda.  
- **Estructura de headings (H2–H3)** lógica y jerárquica.  
- **Internal linking** con textos de enlace descriptivos (no “haz clic aquí”).  
- **Datos estructurados (JSON-LD)**: `Article`, `Product`, `FAQPage`, `BreadcrumbList`, `HowTo`, según el tipo de contenido.  
- **URLs limpias y descriptivas** (sin parámetros innecesarios ni IDs opacos).  
- Uso correcto de **`rel="canonical"`** para evitar duplicidades.

### 3.5 Sistemas de diseño y Design Tokens

#### De guías de estilo a infraestructura de producto

- Un **Design System** maduro incluye: fundamentos (color, tipo, espacio), patrones de UI, componentes, directrices de contenido, accesibilidad y documentación viva.  
- Los **Design Tokens** representan las decisiones básicas de diseño en formato agnóstico (generalmente JSON) que luego se transforman a variables CSS, estilos nativos, etc.

#### Modelo de tokenización multinivel

```text
Primitivos → Semánticos → De componente

Ejemplo:
blue-500 → color-action-primary → button.primary.background
```

- **Primitivos**: valores brutos (paleta, espaciales, tipográficos).  
- **Semánticos**: intención de uso (acción primaria, fondo, éxito, error).  
- **De componente**: cómo se aplican los tokens semánticos a un patrón concreto.

#### Gobernanza

- Equipo central de Design System que **valida y publica tokens y componentes**.  
- Contribución federada: equipos de producto pueden proponer cambios mediante PRs o solicitudes formales.  
- Métricas de adopción: porcentaje de pantallas/componentes que usan el sistema, número de overrides, tiempo de desarrollo ahorrado.

### 3.6 IA en diseño, contenido y front

- Generación de **wireframes** y variantes de UI en segundos para exploración rápida.  
- Propuestas de copy inicial (titulares, microcopy, errores, mensajes vacíos).  
- Sugerencias de estructura de información y orden de secciones según intención de usuario.  
- Refactor de código frontend, sugerencias de optimización CWV y patrones accesibles.  
- Generación de documentación y ejemplos de uso de componentes.

La clave no es sustituir al equipo humano, sino **acelerar su trabajo** manteniendo criterio y control sobre calidad, accesibilidad y coherencia de marca.

---

## 4. Comparativos técnicos y trade-offs

### 4.1 Frameworks CSS y metodologías

| Enfoque                 | Pros                                                  | Contras                                         | Mejor para                                      |
|-------------------------|-------------------------------------------------------|-------------------------------------------------|-------------------------------------------------|
| **Tailwind (utility-first)** | Prototipado muy rápido; tamaño final reducido tras “purge”; sistema de diseño implícito | HTML más verboso; curva de aprendizaje; posible abuso de clases | Startups, MVPs, equipos pequeños, productos iterativos |
| **Design Tokens + CSS** | Theming potente y escalable; fuerte coherencia visual; fácil mantener múltiples marcas/productos | Configuración inicial más compleja; requiere disciplina | Entornos enterprise, multi-producto, Design Systems maduros |
| **CSS Modules**         | Scope local; evita colisiones; facilita estilos acoplados al componente | Cierta sobrecarga en runtime y tooling; menos declarativo para sistemas globales | Apps React/Next.js de complejidad media/alta |

**Recomendación general**:  
- Equipos pequeños → Tailwind o utility-first bien gobernado.  
- Equipos grandes / multi-producto → Design Tokens + capa de utilidades/patrones.  
- Apps legacy React con mucha lógica por componente → CSS Modules puede ser una transición razonable.

### 4.2 Arquitecturas frontend (muy resumido)

- **CSR (Client-Side Rendering)**: máxima flexibilidad en el cliente pero peor TTFB y SEO si no se complementa.  
- **SSR (Server-Side Rendering)**: mejor rendimiento inicial, HTML entregado “listo” para indexación.  
- **SSG/Jamstack**: ideal para contenido relativamente estático, muy rápido y sencillo de cachear.  
- **ISR / híbridos**: equilibrio entre contenido siempre fresco y rendimiento.  
- **React Server Components (RSC)**: mueve lógica de UI al servidor, reduce JavaScript enviado al cliente.

La elección debe alinearse con:

- Frecuencia de cambio de contenido.  
- Necesidades de SEO y compartición.  
- Complejidad de la lógica de cliente.  
- Capacidad del equipo para operar infraestructura más sofisticada.

---

## 5. Anti-patrones críticos y cómo evitarlos

| # | Anti-patrón                       | Riesgo principal                          | Mitigación recomendada                                         |
|---|-----------------------------------|-------------------------------------------|-----------------------------------------------------------------|
| 1 | Imágenes sin dimensiones          | CLS alto                                  | Definir `width`/`height` o `aspect-ratio`                      |
| 2 | `font-display: block` o similar   | LCP degradado                             | Usar `font-display: swap` y ajustar métricas de fallback       |
| 3 | Scripts de terceros síncronos     | INP pobre, bloqueo de carga               | Cargar con `defer`/`async`, usar “facade pattern”              |
| 4 | Carruseles auto-play sin control  | Problemas de accesibilidad y foco         | Evitarlo o añadir pausa, controles accesibles y roles ARIA     |
| 5 | Modales intrusivos al cargar      | Mala UX, penalización en SEO móvil        | Lanzarlos tras interacción significativa o intención de salida |
| 6 | “Divs” actuando como botones      | Semántica rota, teclado inservible        | Usar `<button>` o `<a>` con roles correctos                    |
| 7 | Mega-menús activados solo al hover| Difícil en táctil y con teclado           | Activación por clic, soportar teclado y lectores de pantalla   |
| 8 | Imágenes > 200 KB en móvil        | LCP destruido                             | Optimizar tamaño, usar `srcset`, AVIF/WebP                     |
| 9 | Eliminar el `outline` de foco     | Sitio inusable para usuarios de teclado   | Reemplazar por un estilo de foco visible personalizado         |
| 10 | Tokens hardcodeados en CSS       | Inconsistencia, difícil mantener          | Centralizar todas las decisiones visuales en Design Tokens     |

---

## 6. Roadmap 90 días

### Mes 1 – Fundamentos y salud (Clean-up)

**Semana 1–2**

- Auditoría con Lighthouse, WebPageTest, herramientas de accesibilidad (axe) y rastreadores SEO.  
- Identificación de páginas/rutas críticas por tráfico y negocio.  
- Configuración de RUM para medir LCP, INP y CLS reales.

**Semana 3–4**

- Implementar “quick wins” de performance:  
  - Optimizar y comprimir imágenes, activar lazy-load y formatos modernos.  
  - Minificar y eliminar CSS/JS no usados.  
- Corregir errores de accesibilidad **bloqueantes** (foco, teclado, contrastes extremos).

> **Meta Mes 1:** Lighthouse ≥ 90 en las secciones clave y eliminación de errores críticos AA.

### Mes 2 – Sistematización (Structure)

**Semana 5–6**

- Definir **Design Tokens básicos** (color, tipo, espacio, radios, sombras).  
- Refactorizar componentes core (botones, inputs, formularios, tarjetas) para consumir tokens.

**Semana 7–8**

- Revisar y corregir la estructura HTML semántica de las páginas principales.  
- Implementar datos estructurados esenciales (Breadcrumbs, Article, Product/FAQ).  
- Empezar a documentar el sistema de diseño en un espacio central (Storybook, Zeroheight, Notion, etc.).

> **Meta Mes 2:** reducción de la deuda CSS en al menos un 20 % y sistema de diseño básico operativo.

### Mes 3 – Optimización avanzada (Enhance)

**Semana 9–10**

- Optimizar **INP**:  
  - Code splitting avanzado por rutas.  
  - Web Workers para tareas pesadas.  
  - Revisión/optimización de dependencias de terceros.  

- Explorar View Transitions e interacciones avanzadas si aportan valor real.

**Semana 11–12**

- Pruebas A/B con nuevos patrones de UX y layouts (por ejemplo, reorganización de la Home o fichas de producto).  
- Cierre de documentación del Design System (componentes, tokens, guidelines).  
- Retrospectiva y definición de objetivos para el siguiente trimestre.

> **Meta Mes 3:** LCP ≤ 2.5 s e INP ≤ 200 ms en el p75 de usuarios reales en las rutas de negocio clave.

---

## 7. Checklist de lanzamiento

### 7.1 Performance

- [ ] LCP ≤ 2.5 s en móvil (red 3G/4G simulada).  
- [ ] INP ≤ 200 ms en interacciones críticas (click en CTA, abrir menú, enviar formulario).  
- [ ] CLS < 0.1 en todo el flujo principal.  
- [ ] Imágenes optimizadas, con dimensiones definidas y lazy-load donde corresponda.  
- [ ] Fuentes web con `font-display: swap`.  
- [ ] CSS y JS minificados y sin recursos no utilizados.

### 7.2 Accesibilidad

- [ ] 0 errores críticos en auditoría automatizada (axe, Lighthouse).  
- [ ] Navegación completa posible solo con teclado.  
- [ ] Foco visible en todos los elementos interactivos.  
- [ ] Texto con contraste ≥ 4.5:1 (normal) y ≥ 3:1 (texto grande).  
- [ ] Formularios etiquetados, con mensajes de error claros y asociados a los campos.  
- [ ] Nombre, rol y valor accesibles para todos los componentes interactivos.  
- [ ] Idioma del documento definido correctamente.

### 7.3 SEO

- [ ] `title` y `meta description` únicos y significativos por URL.  
- [ ] Arquitectura de headings H1–H3 coherente y alineada con la intención de búsqueda.  
- [ ] `rel="canonical"` configurado cuando hay contenido similar/duplicado.  
- [ ] Datos estructurados validados (Rich Results Test).  
- [ ] Sitio verificado en Search Console y sin errores graves de indexación.  
- [ ] Core Web Vitals en estado “Good” en Search Console.

### 7.4 Seguridad

- [ ] HTTPS forzado en todo el sitio.  
- [ ] Cabeceras de seguridad configuradas (CSP, X-Frame-Options, X-Content-Type-Options, etc.).  
- [ ] Sin contenido mixto (mixed content).  
- [ ] Gestión básica de cookies y consentimiento conforme a normativa aplicable.

---

## 8. Casos de estudio (síntesis)

### Caso 1 – E-commerce Retail (optimización CWV)

- **Situación inicial**: LCP ~ 4.2 s, CLS ~ 0.25, tasa de rebote móvil ~ 65 %.  
- **Intervenciones clave**:  
  - Migración de imágenes pesadas a AVIF/WebP.  
  - Lazy-loading nativo en galería de productos.  
  - Reserva de espacio para imágenes y banners.  
- **Resultados**:  
  - LCP ~ 1.8 s, CLS ~ 0.05.  
  - +18 % conversión en móvil, –12 % tasa de rebote.

### Caso 2 – SaaS B2B (accesibilidad y contratos B2G)

- **Situación inicial**: decenas de incumplimientos WCAG AA (foco, teclado, formularios).  
- **Intervenciones clave**:  
  - Auditoría completa con herramientas automáticas y testing con usuarios.  
  - Refactor de gestión de foco, componentes interactivos y mensajes de error.  
- **Resultados**:  
  - 0 errores WCAG 2.2 AA en flujos críticos.  
  - Acceso a licitaciones públicas antes vetadas y mejora de satisfacción de usuarios.

### Caso 3 – Medio de comunicación (Design System)

- **Situación inicial**: más de 40 variantes de botones y patrones de UI inconsistentes.  
- **Intervenciones clave**:  
  - Creación de Design System basado en Atomic Design + Design Tokens.  
  - Sincronización de tokens a iOS, Android y Web.  
- **Resultados**:  
  - Consolidación de los botones en 3 variantes principales.  
  - Reducción del tiempo de desarrollo frontend en ~35 %.

---

## 9. Glosario esencial

- **Core Web Vitals (CWV)**: conjunto de métricas de experiencia de usuario definido por Google (LCP, INP, CLS).  
- **LCP (Largest Contentful Paint)**: tiempo que tarda en aparecer el elemento de mayor tamaño visible en el viewport.  
- **INP (Interaction to Next Paint)**: mide la latencia de las interacciones del usuario; sustituye a FID.  
- **CLS (Cumulative Layout Shift)**: índice de estabilidad visual; mide cuánto se mueve el contenido de manera inesperada.  
- **WCAG (Web Content Accessibility Guidelines)**: estándar internacional de accesibilidad web.  
- **EAA (European Accessibility Act)**: directiva europea que convierte la accesibilidad en obligación legal para ciertos servicios y productos.  
- **Design Tokens**: representación en formato de datos (normalmente JSON) de decisiones de diseño (colores, tipografía, espaciado, etc.).  
- **DTCG (Design Tokens Community Group)**: grupo del W3C que define la especificación de Design Tokens.  
- **RUM (Real User Monitoring)**: monitorización de métricas en base a usuarios reales, no simulados.  
- **RICE**: marco de priorización basado en Reach, Impact, Confidence, Effort.  
- **Hydration**: proceso por el que el JavaScript del cliente “activa” el HTML generado en el servidor para añadir interactividad.

---

## 10. Conclusión y próximos pasos

El estado del arte en diseño web 2019–2025 se puede resumir en cuatro ideas clave:

1. **Performance, accesibilidad y UX están profundamente entrelazados.** No es posible tener una buena experiencia de usuario ignorando CWV o WCAG.  
2. **Los Design Systems y los Design Tokens son la infraestructura base de cualquier producto digital escalable.**  
3. **La IA acelera, pero no sustituye el criterio.** Los equipos de diseño y front siguen siendo responsables últimos de la calidad.  
4. **La diferencia competitiva está en cómo se ejecuta el día a día.** Auditorías constantes, medición con RUM, refactors periódicos y una cultura de mejora continua.

Se recomienda revisar este informe cada 3–6 meses para incorporar:

- Cambios en especificaciones (WCAG, DTCG, nuevas APIs de navegador).  
- Evolución del ecosistema de frameworks y herramientas.  
- Nuevos datos de rendimiento y experiencia recogidos en producción.

*Fin del Informe Final 2019–2025.*