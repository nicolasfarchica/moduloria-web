# Plantillas y Checklists Blog ModulorIA

**Fecha**: 2026-01-22
**Uso**: Templates reutilizables para publicación blog

---

## PLANTILLA 1: ARTÍCULO TOFU (EDUCATIVO)

### Metadata Template

```typescript
export const metadata = {
  title: "[Beneficio/Acción] | [Keyword Principal] | Guía 2025",
  // Ejemplo: "Automatizar Procesos Construcción | IA Práctica | Guía 2025"

  description: "[Beneficio 1] + [Beneficio 2] + [Métrica]. [Casos reales/Recurso gratis]. [CTA]",
  // Ejemplo: "Automatiza facturas + reportes + cotizaciones en construcción. ROI 800%. Casos PYMES España + checklist gratis."

  keywords: [
    "keyword principal",
    "keyword secundaria 1",
    "keyword secundaria 2",
    "long-tail keyword 1",
    "long-tail keyword 2"
  ],

  openGraph: {
    title: "...",
    description: "...",
    type: "article",
    images: [{
      url: "https://moduloria.com/images/blog/[slug]-og.jpg",
      width: 1200,
      height: 630,
      alt: "..."
    }]
  }
};
```

---

### Estructura Artículo TOFU (1,800-2,200 palabras)

```markdown
# [H1: Título principal con keyword] - Guía Completa 2025
*Última actualización: [Fecha]*
*Lectura: 8 min*

> **TL;DR**: [Resumen 2-3 frases con beneficios principales y CTA sutil]

---

## Introducción (150-200 palabras)

**Hook:** [Problema específico que enfrenta el lector]

Ejemplo:
"¿Pierdes 6 horas semanales procesando facturas manualmente en tu constructora? No estás solo. El 73% de empresas construcción en España aún usan procesos manuales, perdiendo €12,000/año en tiempo administrativo."

**Qué aprenderás:**
- [Beneficio 1]
- [Beneficio 2]
- [Beneficio 3]
- [Bonus: recurso gratis al final]

**[CTA suave]**: Descarga nuestro [checklist/guía PDF] gratis al final del artículo.

---

## [H2] ¿Qué es [Concepto Principal]?

**Definición clara** en 1-2 párrafos (sin jerga)

**¿Por qué importa?**
- Dato/estadística 1
- Dato/estadística 2
- Impacto en construcción modular

**Tabla comparativa:**

| Método Tradicional | Con [Solución] | Ahorro |
|-------------------|----------------|--------|
| 6h/semana manual  | 30 min/semana  | 91%    |
| €800/mes costo    | €200/mes       | 75%    |

---

## [H2] ¿Cómo Funciona [Concepto]? (Explicación técnica simple)

### [H3] Paso 1: [Nombre paso]
**Qué es:** [Explicación]
**Por qué funciona:** [Razón técnica simple]
**Ejemplo real:** [Caso constructora X]

### [H3] Paso 2: [Nombre paso]
[Repetir estructura]

### [H3] Paso 3: [Nombre paso]
[Repetir estructura]

**[Screenshot/Diagrama]**: Flujo visual del proceso

---

## [H2] Beneficios de [Concepto] en Construcción Modular

**Lista numerada:**

1. **[Beneficio 1 con métrica]**
   - Detalle específico
   - Ejemplo: "Constructora ABC ahorró €15,000/año"

2. **[Beneficio 2 con métrica]**
   - Detalle específico
   - Dato industria

3. **[Beneficio 3 con métrica]**
   - Detalle específico
   - Internal link a caso de éxito

**[CTA contextual]**: ¿Quieres saber cuánto podrías ahorrar? [Solicita auditoría gratis](#cta)

---

## [H2] Cómo Implementar [Concepto] en 5 Pasos

### [H3] Paso 1: Auditar Procesos Actuales
**Acción:** [Checklist específica]
**Herramientas:** [Tools recomendadas - incluir ModulorIA + alternativas]
**Tiempo:** [Estimación realista]

### [H3] Paso 2-5: [Repetir estructura]

**[Bonus]**: Descarga nuestro [Checklist implementación] con 15 puntos de verificación.

---

## [H2] Casos de Éxito Reales

### Caso 1: [Empresa/Industria]
**Problema:** [Situación inicial]
**Solución:** [Qué implementaron]
**Resultados:**
- Métrica 1: [Dato específico]
- Métrica 2: [Dato específico]
- ROI: [Porcentaje]

**[Quote testimonial]**: *"[Frase impactante del cliente]"* - [Nombre, Cargo]

**[Internal link]**: Lee el [caso completo aquí](#link-bofu-article)

---

## [H2] Errores Comunes a Evitar

**Lista viñetas:**

- ❌ **Error 1**: [Descripción]
  - Por qué es malo: [Razón]
  - Alternativa: [Qué hacer en su lugar]

- ❌ **Error 2**: [Descripción]
  - [...]

- ❌ **Error 3**: [Descripción]
  - [...]

---

## [H2] FAQ - Preguntas Frecuentes

**[H3] ¿[Pregunta común 1]?**
[Respuesta concisa 2-3 líneas + internal link si aplica]

**[H3] ¿[Pregunta común 2]?**
[Respuesta]

**[H3] ¿[Pregunta común 3]?**
[Respuesta]

**[Schema FAQ]**: Implementar JSON-LD para featured snippets

---

## Conclusión y Próximos Pasos

**Resumen:** [Recap 3 puntos clave del artículo]

**Acción inmediata:** [1 cosa que pueden hacer HOY]

**Recursos adicionales:**
- [Internal link] Artículo relacionado 1
- [Internal link] Artículo relacionado 2
- [Download] Checklist/Guía PDF

**[CTA fuerte final]**:
> ¿Listo para automatizar [proceso]? Solicita una [auditoría gratis](#) y descubre cuánto podrías ahorrar en 3 semanas.
>
> [Botón CTA]: Solicitar Auditoría Gratis

---

### Sobre el Autor

**[Nombre Autor]** - [Cargo en ModulorIA]
[Bio 2-3 líneas + link a perfil/LinkedIn]

---

### Lecturas Relacionadas

- [Internal link] [Título artículo relacionado 1]
- [Internal link] [Título artículo relacionado 2]
- [Internal link] [Título artículo relacionado 3]

---

**Tags:** [tag1], [tag2], [tag3]
**Categoría:** [Automatización / IA / Construcción Modular]
**Fecha publicación:** [YYYY-MM-DD]
**Última actualización:** [YYYY-MM-DD]
```

---

## PLANTILLA 2: ARTÍCULO BOFU (CONVERSIÓN)

### Estructura Case Study (1,200-1,600 palabras)

```markdown
# [Empresa/Industria] Logra [Métrica ROI]% con [Solución ModulorIA]

> **Resultado destacado**: [Métrica impactante en 1 frase]

---

## Contexto de la Empresa

**Industria:** [Construcción modular / Constructora / etc]
**Tamaño:** [Empleados, facturación anual]
**Ubicación:** [Ciudad, España]
**Desafío principal:** [Problema específico]

---

## El Desafío

**Situación inicial:**
- Problema 1: [Descripción + dato cuantificable]
- Problema 2: [Descripción + dato cuantificable]
- Problema 3: [Descripción + dato cuantificable]

**Impacto en el negocio:**
- Costo mensual: €[cantidad]
- Horas perdidas: [número]/semana
- Oportunidades perdidas: [número] leads/mes

**[Quote cliente]**: *"[Descripción problema en sus palabras]"* - [Nombre, Cargo]

---

## La Solución: [Servicio ModulorIA]

**Qué implementamos:**

### Fase 1: Auditoría y Planificación (Semana 1)
- [Acción específica 1]
- [Acción específica 2]
- [Acción específica 3]

### Fase 2: Implementación (Semanas 2-3)
- [Tech stack usado]
- [Integraciones realizadas]
- [Capacitación equipo]

### Fase 3: Optimización (Semana 4+)
- [Ajustes realizados]
- [Métricas monitoreadas]

**[Screenshot/Diagram]**: Antes vs Después del proceso

---

## Resultados Medibles

**Métricas a 3 semanas:**

| Métrica | Antes | Después | Mejora |
|---------|-------|---------|--------|
| Tiempo proceso X | 6h/semana | 30 min/semana | 91% ↓ |
| Costo mensual | €800 | €200 | 75% ↓ |
| Leads generados | 12/mes | 28/mes | 133% ↑ |
| Tasa conversión | 8% | 18% | 125% ↑ |

**ROI calculado:**
- Inversión inicial: €[cantidad]
- Ahorro mensual: €[cantidad]
- ROI 6 meses: [porcentaje]%
- Payback period: [número] semanas

**[Gráfico]**: Evolución métricas clave (primeros 3 meses)

---

## Testimonial Cliente

**[Quote extenso 3-4 líneas]**:
*"[Testimonial detallado con beneficios específicos y recomendación]"*

— **[Nombre Completo]**, [Cargo], [Empresa]

**[Foto cliente + logo empresa]** (con permiso)

---

## Lecciones Aprendidas

**¿Qué funcionó mejor de lo esperado?**
- [Insight 1]
- [Insight 2]

**¿Qué ajustamos durante implementación?**
- [Ajuste 1 + razón]
- [Ajuste 2 + razón]

**Consejo para otras empresas:**
> [Recomendación del cliente para peers en la industria]

---

## ¿Tu Empresa Enfrenta Desafíos Similares?

**Checklist de señales:**
- [ ] [Problema común 1]
- [ ] [Problema común 2]
- [ ] [Problema común 3]
- [ ] [Problema común 4]

**Si marcaste 2+ items**, probablemente [Solución ModulorIA] puede ayudarte.

**[CTA fuerte]**:
> Agenda una auditoría gratis de 30 minutos. Analizaremos tu caso específico y te mostraremos el ROI estimado.
>
> [Botón]: Agendar Auditoría Gratis

---

## Recursos Relacionados

- [Internal link] Guía: Cómo implementar [solución]
- [Internal link] Comparativa: [Solución] vs alternativas
- [Download] Checklist: ¿Estás listo para [solución]?

---

**Categoría:** Casos de Éxito
**Industria:** [Tag]
**Solución:** [Tag]
```

---

## CHECKLIST PRE-PUBLICACIÓN

### SEO On-Page

```markdown
- [ ] **Title tag** (50-60 caracteres, keyword principal)
- [ ] **Meta description** (150-160 caracteres, CTA)
- [ ] **H1** único con keyword principal
- [ ] **H2-H3** estructura lógica (5-7 H2, 12-18 H3)
- [ ] **Keywords**:
  - [ ] Keyword principal en H1
  - [ ] Keywords secundarias en 3+ H2
  - [ ] Long-tail en H3
  - [ ] Densidad 1-1.5% (natural, sin stuffing)
- [ ] **URL slug** descriptiva (/blog/keyword-principal)
- [ ] **Canonical URL** definida
- [ ] **Alt text** en todas las imágenes (descriptivo + keyword si aplica)
- [ ] **Internal links**:
  - [ ] 3-5 links a contenido relacionado
  - [ ] 1 link a pillar page
  - [ ] 1 link a página conversión (BOFU/servicio)
  - [ ] Anchor text descriptivo (NO "click aquí")
- [ ] **External links** (1-3 a fuentes autorizadas)
- [ ] **Schema markup**:
  - [ ] BlogPosting JSON-LD
  - [ ] Breadcrumbs
  - [ ] FAQ (si aplica)
  - [ ] HowTo (si aplica)
```

---

### Contenido y Estructura

```markdown
- [ ] **Longitud**: 1,800-2,500 palabras (TOFU/MOFU) o 1,200-1,600 (BOFU)
- [ ] **Introducción** (150-200 palabras):
  - [ ] Hook con problema específico
  - [ ] Promesa de valor clara
  - [ ] Preview de qué aprenderán
- [ ] **TL;DR** al inicio (opcional pero recomendado)
- [ ] **Secciones visuales**:
  - [ ] 1 imagen cada 150-200 palabras
  - [ ] Mínimo 1 tabla comparativa
  - [ ] Screenshots/diagramas donde aplique
  - [ ] Gráficos para estadísticas
- [ ] **Elementos engagement**:
  - [ ] Listas numeradas (pasos, beneficios)
  - [ ] Listas viñetas (puntos clave)
  - [ ] Quotes destacados (testimonios, datos)
  - [ ] Ejemplos reales con nombres (si posible)
- [ ] **CTAs**:
  - [ ] 1 CTA suave en intro
  - [ ] 1-2 CTAs contextuales mid-article
  - [ ] 1 CTA fuerte en conclusión
  - [ ] CTAs variados (no todos "demo")
- [ ] **FAQ section** (3-5 preguntas)
- [ ] **Conclusión** con recap + próximos pasos
- [ ] **Internal links relacionados** (3 artículos mínimo)
```

---

### Performance y Técnico

```markdown
- [ ] **Imágenes optimizadas**:
  - [ ] Formato WebP o AVIF
  - [ ] Comprimidas <100KB
  - [ ] Dimensiones correctas (1200x630 OG image)
  - [ ] Lazy loading (excepto above-fold)
  - [ ] Width/height definidos (evitar CLS)
- [ ] **Core Web Vitals check**:
  - [ ] LCP <2.5s
  - [ ] FID <100ms
  - [ ] CLS <0.1
  - [ ] INP <200ms
- [ ] **Mobile responsive**: Probar en móvil/tablet
- [ ] **Fonts preload**: Next/font configurado
- [ ] **Código limpio**: Sin console.logs, comentarios innecesarios
```

---

### Social y Distribución

```markdown
- [ ] **Open Graph tags**:
  - [ ] og:title
  - [ ] og:description
  - [ ] og:image (1200x630px)
  - [ ] og:type="article"
  - [ ] article:published_time
  - [ ] article:author
- [ ] **Twitter Card** (si aplica)
- [ ] **LinkedIn post** preparado para compartir:
  - [ ] Hook primeras 2 líneas
  - [ ] 3-5 bullets key takeaways
  - [ ] Link a artículo
  - [ ] Hashtags relevantes (3-5)
- [ ] **Newsletter** snippet (si se envía):
  - [ ] Subject line A/B test ideas
  - [ ] Preview text atractivo
  - [ ] Segmentación audiencia
```

---

### Legal y Calidad

```markdown
- [ ] **Fact-checking**: Todas las estadísticas verificadas
- [ ] **Fuentes citadas**: Links a estudios originales
- [ ] **Gramática**: Revisión Grammarly/corrector
- [ ] **Readability**: Hemingway score <10
- [ ] **Tone**: Profesional pero accesible (evitar jerga excesiva)
- [ ] **GDPR compliance** (si hay formularios embebidos)
- [ ] **Copyright**: Imágenes con licencia o propias
```

---

### Post-Publicación (Primeras 48h)

```markdown
- [ ] **Google Search Console**: Submit URL for indexing
- [ ] **Sitemap.xml** actualizado automáticamente (verificar)
- [ ] **Social share** en LinkedIn, Twitter (si aplica)
- [ ] **Newsletter** enviado (si corresponde)
- [ ] **Monitorear**:
  - [ ] Indexación Google (site:moduloria.com/blog/slug)
  - [ ] Errores 404/500
  - [ ] Core Web Vitals en PageSpeed Insights
  - [ ] Primeras impresiones/clicks (Search Console día 2-3)
```

---

## CHECKLIST KEYWORD RESEARCH (Por Artículo)

### Antes de Escribir

```markdown
1. [ ] **Keyword principal identificada**:
   - [ ] Volumen búsqueda: >50/mes (ideal >100)
   - [ ] Keyword Difficulty: <25 (ideal <20)
   - [ ] Intención búsqueda: Informacional/Comercial/Transaccional
   - [ ] SERP analysis: ¿Qué rankea actualmente?

2. [ ] **Keywords secundarias** (4-6):
   - [ ] Relacionadas semánticamente
   - [ ] Variaciones long-tail
   - [ ] Preguntas PAA (People Also Ask)

3. [ ] **Competitor analysis**:
   - [ ] Top 3 artículos ranking revisados
   - [ ] Longitud promedio: [número] palabras
   - [ ] Elementos comunes (tablas, videos, etc)
   - [ ] Content gaps identificados (qué podemos mejorar)

4. [ ] **Internal linking opportunities**:
   - [ ] Artículos existentes que pueden linkear aquí
   - [ ] Artículos a los que este puede linkear
   - [ ] Pillar page relacionada

5. [ ] **Search intent match**:
   - [ ] Artículo responde la intención 100%
   - [ ] Formato adecuado (guía/lista/comparativa/case study)
   - [ ] Profundidad correcta (básico/intermedio/avanzado)
```

---

## PLANTILLA BRIEF CONTENIDO

### Para entregar a escritor/freelancer

```markdown
# Brief: [Título Artículo]

**Keyword principal:** [keyword]
**Keywords secundarias:** [keyword1], [keyword2], [keyword3]
**Tipo contenido:** TOFU / MOFU / BOFU
**Longitud target:** [número] palabras
**Deadline:** [fecha]

---

## Objetivo del Artículo

**¿Qué problema resuelve?**
[Descripción 2-3 líneas]

**Target audience:**
- Rol: [Ej: Gerente Constructora, Director Operaciones]
- Pain point: [Problema específico]
- Nivel conocimiento: Básico / Intermedio / Avanzado

**Acción deseada del lector:**
[ ] Descargar recurso
[ ] Solicitar auditoría
[ ] Agendar demo
[ ] Leer artículo relacionado

---

## Estructura Requerida

### H1: [Título exacto]

### Introducción (150-200 palabras)
- Hook: [Dato impactante o pregunta]
- Promesa: Qué aprenderán
- CTA suave: [Ej: "Descarga checklist"]

### H2: [Sección 1 - Nombre]
**Incluir:**
- [Elemento específico: tabla/lista/ejemplo]
- Keywords: [keywords a incluir]

### H2: [Sección 2 - Nombre]
**Incluir:**
- [...]

[Repetir para cada sección]

### Conclusión
- Recap 3 puntos clave
- Próximos pasos
- CTA fuerte: [Especificar cuál]

---

## Referencias y Fuentes

**Estudios/datos a incluir:**
- [Link fuente 1]
- [Link fuente 2]

**Competidores a analizar:**
- [URL artículo competitor 1]
- [URL artículo competitor 2]

**Artículos ModulorIA relacionados:**
- [Internal link 1]
- [Internal link 2]

---

## Elementos Visuales Requeridos

- [ ] Imagen destacada (hero)
- [ ] [Número] screenshots/diagramas
- [ ] [Número] tablas comparativas
- [ ] [Opcional] Infografía

**Notas diseño:**
[Instrucciones específicas para diseñador]

---

## Tone & Style

- **Tone:** Profesional pero accesible
- **Perspectiva:** 2da persona ("tú"/"tu empresa")
- **Evitar:** Jerga excesiva, tecnicismos sin explicar
- **Preferir:** Ejemplos concretos, datos específicos, listas

**Ejemplo buen párrafo:**
[Paste ejemplo de tono deseado]

---

## Checklist Entrega

Escritor debe entregar:
- [ ] Google Doc con artículo
- [ ] Lista keywords usadas (con ubicación H1/H2/H3)
- [ ] Sugerencias imágenes/screenshots
- [ ] Meta title + description propuestos
- [ ] 3 ideas LinkedIn posts para promoción

---

**Contacto PM:** [Email]
**Preguntas:** [Canal Slack/Email]
```

---

## CALENDARIO EDITORIAL - PLANTILLA

### Mes 1-3 (Foundation)

```markdown
| Semana | Tipo | Título Working | Keyword | Palabras | Estado | Deadline |
|--------|------|----------------|---------|----------|--------|----------|
| 1 | PILLAR | IA Construcción Modular Guía | ia construcción modular | 4200 | Planning | 2025-02-07 |
| 3 | TOFU | Chatbot WhatsApp Construcción | chatbot construcción | 2100 | Outline | 2025-02-21 |
| 5 | MOFU | OCR Facturas ROI | ocr facturas construcción | 2300 | - | 2025-03-07 |
| 7 | BOFU | Caso Éxito Constructora | caso éxito ia construcción | 1400 | - | 2025-03-21 |
| 9 | TOFU | Reportes Voz Obra | reportes voz construcción | 1900 | - | 2025-04-04 |
| 11 | CLUSTER | Automatizar Cotizaciones | automatizar cotizaciones | 2000 | - | 2025-04-18 |
```

---

## PLANTILLA TRACKING RESULTADOS

### Por Artículo (Google Sheets)

```markdown
| Artículo | Fecha Pub | Keywords Target | Ranking D7 | D30 | D90 | Tráfico M1 | M3 | M6 | Leads | Backlinks | Acción |
|----------|-----------|-----------------|------------|-----|-----|------------|-----|-----|-------|-----------|--------|
| IA Construcción Guía | 2025-02-07 | ia construcción modular | #45 | #18 | #8 | 120 | 450 | 980 | 3 | 5 | Actualizar Q2 |
| Chatbot WhatsApp | 2025-02-21 | chatbot construcción | - | #22 | #12 | 80 | 280 | 620 | 2 | 2 | Promocionar más |
```

**Métricas monitoreadas:**
- Ranking keywords (día 7, 30, 90)
- Tráfico mensual (M1, M3, M6)
- Leads generados
- Backlinks adquiridos
- Shares sociales
- Tiempo en página
- Bounce rate

---

## CONCLUSIÓN

Estas plantillas están diseñadas para:
1. Acelerar producción contenido
2. Garantizar consistencia SEO
3. Maximizar conversión
4. Facilitar delegación a freelancers
5. Trackear resultados sistemáticamente

**Próximo paso**: Adaptar plantillas a primer artículo pillar y ejecutar.
