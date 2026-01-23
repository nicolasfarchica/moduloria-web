# Plan Semanal: Enero - Febrero 2026

> **Creado:** 23 enero 2026
> **Objetivo:** Completar blog SEO (5 articulos) + Activar redes sociales + Primer lead magnet
> **Prioridad:** SEO primero, redes despues

---

## Estado Actual (23 enero 2026)

| Area | Progreso | Notas |
|------|----------|-------|
| Blog SEO | 3/5 articulos publicados | KD bajos primero, funciona |
| Newsletter | 100% operativo | Workflow N8N activo |
| Redes Sociales | 0% implementado | Documentado, pendiente Metricool |
| Lead Magnets | 0% | Planificar con articulos existentes |
| Google Search Console | Pendiente submit | 3 articulos listos para indexar |

---

## SEMANA 2: 27 enero - 2 febrero

### Prioridad: Completar Blog SEO

| # | Tarea | Tipo | Tiempo Est. | Dependencia |
|---|-------|------|-------------|-------------|
| 2.1 | Escribir Articulo 4: PILLAR "IA Construccion Modular" | Contenido | Sesion larga | Ninguna |
| 2.2 | Publicar Articulo 4 (commit + deploy) | Deploy | - | 2.1 |
| 2.3 | Escribir Articulo 5: "Reportes Obra con IA de Voz" | Contenido | Sesion media | Ninguna |
| 2.4 | Publicar Articulo 5 (commit + deploy) | Deploy | - | 2.3 |
| 2.5 | Submit articulos 1-3 a Google Search Console | SEO | Rapido | Ninguna |
| 2.6 | Verificar indexacion despues de 48h | SEO | Rapido | 2.5 |

### Detalles Articulo 4 (PILLAR - Reescritura)

- **Archivo actual:** `src/content/blog/como-implementar-ia-construccion-modular.md`
- **Keyword:** "ia construccion modular" (KD 18, 120 busquedas/mes)
- **Longitud objetivo:** 4,500 palabras (actualmente es filler/placeholder)
- **Estructura:** Guia definitiva con links a TODOS los cluster articles
- **Formato:** Tutorial largo con tabla de contenidos, casos, herramientas, ROI
- **Internal linking:** Enlazar a articulos 1, 2, 3 y 5 como cluster
- **CTA:** Diagnostico estrategico + newsletter

### Detalles Articulo 5 (Nuevo)

- **Slug:** `reportes-voz-construccion-ia`
- **Keyword:** "reportes voz construccion" (KD 8, 35 busquedas/mes)
- **Longitud objetivo:** 2,100 palabras
- **Estructura:** Problema -> Solucion -> Caso real -> Herramientas -> Implementacion
- **Internal linking:** Link a PILLAR + Casos Exito
- **CTA:** Diagnostico + link a articulo pillar

### Google Search Console

- URL: search.google.com/search-console
- Accion: "Inspeccionar URL" para cada articulo
- Solicitar indexacion de:
  - `moduloria.com/blog/ocr-facturas-construccion-roi`
  - `moduloria.com/blog/casos-exito-ia-construccion-espana`
  - `moduloria.com/blog/chatbot-whatsapp-construccion`

---

## SEMANA 3: 3 - 9 febrero

### Prioridad: Consolidacion + Inicio Redes

| # | Tarea | Tipo | Tiempo Est. | Dependencia |
|---|-------|------|-------------|-------------|
| 3.1 | Actualizar internal links en PILLAR (Art. 4) | SEO | Rapido | Art. 4 publicado |
| 3.2 | Crear 5 imagenes hero para blog posts | Visual | Sesion Canva | Ninguna |
| 3.3 | Pagar Metricool Plan Start (~13 EUR/mes) | Admin | 5 min | Ninguna |
| 3.4 | Configurar Metricool + conectar LinkedIn personal | Config | 30 min | 3.3 |
| 3.5 | Repurposing: Art. 1 (OCR) -> 2 posts LinkedIn | Contenido | 45 min | 3.4 |
| 3.6 | Repurposing: Art. 2 (Casos) -> 2 posts LinkedIn | Contenido | 45 min | 3.4 |
| 3.7 | Repurposing: Art. 3 (Chatbot) -> 2 posts LinkedIn | Contenido | 45 min | 3.4 |
| 3.8 | Programar 6 posts en Metricool (2 semanas) | Programacion | 30 min | 3.5-3.7 |
| 3.9 | Submit articulos 4-5 a GSC | SEO | 10 min | Art. 4-5 publicados |

### Imagenes Blog (Tarea 3.2)

Cada articulo necesita hero image (1200x630px para OG):
- Art. 1: OCR/facturas con icono AI
- Art. 2: Collage 10 empresas/graficos ROI
- Art. 3: WhatsApp + construccion
- Art. 4: IA + construccion modular (hero principal)
- Art. 5: Microfono + obra + reporte

Formato: `/public/images/blog/hero-[slug].webp`
Actualizar frontmatter `image:` de cada articulo

### Repurposing Blog -> LinkedIn

Metodologia por articulo:
1. **Post 1 - Dato impactante:** Extraer el ROI/dato mas llamativo como hook
2. **Post 2 - Mini-guia:** Resumir los 3-5 pasos clave del articulo

Formatos sugeridos:
- Carrusel Gamma (dato + 5 slides + CTA)
- Post texto corto (hook + 3 bullets + CTA blog)

---

## SEMANA 4: 10 - 16 febrero

### Prioridad: Metricas + Lead Magnet + LinkedIn

| # | Tarea | Tipo | Tiempo Est. | Dependencia |
|---|-------|------|-------------|-------------|
| 4.1 | Revisar metricas GSC (impresiones, clics, posiciones) | Analytics | 20 min | Semana 2-3 |
| 4.2 | Crear lead magnet PDF: "Checklist OCR Facturas" | Contenido | 1.5h | Art. 1 existente |
| 4.3 | Implementar descarga lead magnet en web | Dev | Sesion | 4.2 |
| 4.4 | Primera sesion batching LinkedIn (6-8 posts) | Contenido | 4h | Metricool activo |
| 4.5 | Planificar articulos 6-10 (siguientes keywords) | Estrategia | 1h | Metricas GSC |
| 4.6 | Verificar newsletter incluye links a blog | Revision | 15 min | Ninguna |

### Lead Magnet: Checklist OCR Facturas

- **Formato:** PDF 1-2 paginas (Canva)
- **Contenido:** 10 pasos para implementar OCR en tu constructora
- **Capture:** Formulario email en articulo 1 (o popup)
- **Entrega:** Email automatico con link descarga
- **Objetivo:** Capturar leads MOFU interesados en OCR

### Sesion Batching LinkedIn (4 horas)

Siguiendo flujo documentado en `docs/estrategia/SISTEMA-REDES-SOCIALES.md`:

```
Bloque 1 (30 min): AI genera 10-15 ideas
Bloque 2 (1.5h): Redaccion con AI + revision personal
Bloque 3 (1h): Carruseles en Gamma
Bloque 4 (1h): Programar todo en Metricool
```

Resultado: 6-8 posts programados para 2 semanas

---

## SEMANA 5: 17 - 23 febrero

### Prioridad: Expansion SEO + Optimizacion

| # | Tarea | Tipo | Tiempo Est. | Dependencia |
|---|-------|------|-------------|-------------|
| 5.1 | Escribir Articulo 6 (siguiente keyword plan) | Contenido | Sesion | Plan articulos 6-10 |
| 5.2 | Optimizar articulos existentes segun datos GSC | SEO | 1h | Datos GSC semana 4 |
| 5.3 | Revisar analytics LinkedIn (engagement rate) | Analytics | 20 min | Posts semana 3-4 |
| 5.4 | Crear 2do lead magnet: "ROI Calculator IA" | Contenido | 2h | Ninguna |
| 5.5 | A/B test CTAs en articulos blog | Dev | 1h | Trafico existente |
| 5.6 | Evaluar resultados newsletter (open rate, clicks) | Analytics | 30 min | N8N data |

---

## SEMANA 6: 24 febrero - 2 marzo

### Prioridad: Escalar lo que funciona

| # | Tarea | Tipo | Tiempo Est. | Dependencia |
|---|-------|------|-------------|-------------|
| 6.1 | Escribir Articulo 7 | Contenido | Sesion | - |
| 6.2 | Segunda sesion batching LinkedIn | Contenido | 4h | - |
| 6.3 | Revisar keyword rankings (posiciones top 20) | Analytics | 30 min | GSC data |
| 6.4 | Actualizar PILLAR con nuevos cluster links | SEO | 20 min | Art. 6-7 publicados |
| 6.5 | Planificar siguiente trimestre (Marzo-Mayo) | Estrategia | 1h | Datos acumulados |

---

## KPIs a Medir

### SEO (Revisar semanalmente desde semana 4)

| Metrica | Target Semana 4 | Target Mes 2 | Target Mes 3 |
|---------|-----------------|--------------|--------------|
| Impresiones GSC | >100 | >500 | >2,000 |
| Clics GSC | >5 | >50 | >200 |
| Keywords posicionando | >5 | >20 | >50 |
| Posicion promedio | <50 | <30 | <20 |
| Paginas indexadas | 12+ | 15+ | 20+ |

### LinkedIn (Revisar cada 2 semanas desde semana 4)

| Metrica | Target Mes 1 | Target Mes 2 |
|---------|-------------|--------------|
| Posts publicados | 6 | 12 |
| Impresiones/post | >200 | >500 |
| Engagement rate | >3% | >5% |
| Seguidores nuevos | +20 | +50 |
| Clicks a web | >5/semana | >15/semana |

### Newsletter (Semanal, ya activo)

| Metrica | Actual | Target |
|---------|--------|--------|
| Open rate | Pendiente datos | >35% |
| Click rate | Pendiente datos | >6% |
| Suscriptores | Pendiente datos | +10/semana |

---

## Dependencias Criticas

```
Art. 4 PILLAR ─────> Internal links completos ─────> Topic cluster cerrado
    │                                                        │
    v                                                        v
Art. 5 ────────────> 5 articulos publicados ───────> GSC indexacion completa
                                                             │
                                                             v
Metricool activo ──> Repurposing blog->LinkedIn ──> Sesion batching
    │                                                        │
    v                                                        v
6 posts programados ──> Analytics LinkedIn ──> Ajustar estrategia
```

---

## Notas Importantes

1. **No apurar articulo PILLAR**: Es el mas importante del sitio, invertir tiempo en calidad
2. **GSC tarda 2-4 semanas**: No esperar resultados inmediatos de SEO
3. **LinkedIn > otras redes**: Foco 100% en LinkedIn personal primero
4. **Medir antes de escalar**: Semana 4-5 es critica para evaluar que funciona
5. **Newsletter como distribucion**: Incluir links a blog posts nuevos en cada envio
6. **Imagenes son SEO**: Hero images mejoran engagement y reducen bounce rate

---

## Checklist Rapido por Sesion

### Antes de escribir un articulo
- [ ] Revisar keyword research del plan SEO
- [ ] Leer estructura H2 recomendada
- [ ] Verificar internal links disponibles
- [ ] Preparar datos/casos reales

### Antes de hacer deploy
- [ ] Frontmatter completo (title, date, excerpt, tags, category)
- [ ] Internal links funcionando
- [ ] Meta description < 160 chars
- [ ] Tablas renderizan correctamente (remark-gfm)

### Despues de deploy
- [ ] Verificar en produccion (Vercel URL directa si CDN cache)
- [ ] Submit a GSC (Request Indexing)
- [ ] Actualizar ESTADO-SISTEMAS.md
- [ ] Actualizar links en otros articulos si aplica
