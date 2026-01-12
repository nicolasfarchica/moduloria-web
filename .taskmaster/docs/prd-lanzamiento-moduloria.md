# PRD: Lanzamiento ModulorIA - Consultoría IA para Construcción Modular

**Fecha Creación**: 3 de diciembre de 2025
**Autor**: Nicolás Farchica
**Objetivo**: Lanzar ModulorIA como consultoría de IA especializada en construcción modular con presencia digital, MVP funcional y primeros clientes

---

## 🎯 OBJETIVO GENERAL

Lanzar ModulorIA al mercado en 90 días con:
- Identidad de marca sólida y storytelling definido
- Presencia digital completa (web + redes sociales)
- 1 MVP funcional validado con cliente piloto
- Pipeline de 5-10 clientes potenciales identificados
- Sistema operativo montado (CRM, email, herramientas)

---

## 📖 FASE 1: IDENTIDAD Y STORYTELLING (Semana 1-2)

### 1.1 Definición de Storytelling de Marca

**Objetivo**: Crear narrativa emocional y diferenciadora para ModulorIA

**Requisitos**:
- Historia de origen (por qué existe ModulorIA)
- Propuesta de valor única (qué resuelve diferente)
- Personaje héroe (el cliente ideal)
- Enemigo común (el problema que combatimos)
- Misión y visión claras
- Tono de voz y personalidad de marca

**Entregables**:
- Documento "Brand Story - ModulorIA.md" (2-3 páginas)
- Elevator pitch (30 seg, 1 min, 3 min)
- Tagline/eslogan principal
- 3 pilares de comunicación
- Arquetipos de cliente (3 perfiles detallados)

**Criterios de éxito**:
- Historia resonante que conecta emocionalmente
- Diferenciación clara vs competencia genérica
- Mensajes consistentes para todos los canales

---

### 1.2 Investigación de Mercado y Competencia

**Objetivo**: Entender el landscape competitivo y posicionamiento óptimo

**Requisitos**:
- Análisis 10-15 competidores directos (consultorías IA construcción)
- Análisis 5-10 competidores indirectos (automatización general)
- Análisis de gaps (qué no está haciendo nadie)
- Benchmarking de precios (auditorías, implementaciones)
- Tendencias del sector (reports, estudios)

**Entregables**:
- Matriz competitiva (Excel/Notion)
- Análisis FODA ModulorIA
- Mapa de posicionamiento
- Oportunidades de diferenciación (top 5)
- Documento consolidado "Análisis Competitivo.md"

**Fuentes a revisar**:
- LinkedIn: consultorías IA España/LATAM
- Google: "automatización construcción", "IA PYMES construcción"
- Directorios: Clutch, Goodfirms
- Reports: McKinsey Construction, Deloitte
- Reddit: r/Construction, r/automation

---

### 1.3 Logo y Identidad Visual

**Objetivo**: Definir logo final y paleta de colores de marca

**Requisitos**:
- Colaboración con Gaby (diseñador)
- 3 opciones de logo para evaluar
- Paleta de colores (primarios, secundarios, acentos)
- Tipografías (heading, body, mono)
- Guía de uso (mínimo, fondos, variaciones)

**Entregables**:
- Logo vectorial (.svg, .ai)
- Logo en formatos (.png 300dpi, .jpg)
- Favicon (.ico, .png)
- Brand guidelines básico (PDF 5-8 páginas)
- Assets para redes sociales (banners, profile pics)

**Coordinación**:
- 2 sesiones con Gaby (briefing + revisión)
- Feedback iterativo hasta aprobación final

---

## 🌐 FASE 2: PRESENCIA DIGITAL (Semana 2-4)

### 2.1 Desarrollo Sitio Web

**Objetivo**: Sitio web profesional, optimizado SEO, con calculadora ROI

**Requisitos técnicos**:
- Stack: Next.js + TailwindCSS + Vercel (sugerido)
- Responsive (mobile-first)
- Velocidad: <3seg carga
- SEO on-page optimizado
- Analytics: Google Analytics 4
- Forms: integración con email/CRM

**Estructura del sitio**:

**Página Principal (/)**
- Hero: Propuesta de valor + CTA principal
- Sección: Problemas que resolvemos (grid 9-12 problemas top)
- Sección: Cómo funciona (3 pasos)
- Sección: Casos de éxito (cuando existan)
- Sección: Calculadora ROI (embed)
- Sección: Testimonios (placeholder inicialmente)
- Footer: Links, contacto, redes

**Página Problemas (/problemas)**
- Grid 25 problemas
- Filtros: por categoría, por ROI, por complejidad
- Cada card: título, ahorro €, CTA "Ver solución"

**Páginas Problema Individual (/problemas/[slug])**
- Hero: Problema cuantificado
- Sección: Impacto detallado
- Sección: Solución técnica
- Sección: Caso de uso
- Sección: Calculadora ROI específica
- CTA: "Agenda auditoría"

**Página Servicios (/servicios)**
- 3 paquetes: Auditoría, Implementación, Retainer
- Tabla comparativa
- FAQ servicios
- CTA: Contacto

**Página Sobre Nosotros (/sobre-nosotros)**
- Story de ModulorIA
- Equipo (Nicolás + futuro)
- Filosofía y enfoque
- CTA: Conocer problemas

**Página Contacto (/contacto)**
- Formulario integrado
- Calendario Calendly (embed)
- Email, LinkedIn, WhatsApp

**Blog (/blog)** (estructura, sin contenido inicial)
- Lista artículos
- Categorías
- Búsqueda

**Entregables**:
- Sitio desplegado en dominio principal
- Código fuente en GitHub
- Documentación setup
- SSL certificado
- Sitemap XML
- Robots.txt

**Contenido necesario**:
- Copywriting de cada página (usar docs existentes)
- Imágenes (stock o custom)
- Iconos (Heroicons, Lucide)

---

### 2.2 SEO y Indexación

**Objetivo**: Sitio indexado en Google y preparado para rankear

**Requisitos**:
- Google Search Console configurado
- Sitemap.xml enviado
- Meta tags optimizados (title, description, OG)
- Schema markup (Organization, Service)
- Internal linking estratégico
- Alt text imágenes

**Palabras clave objetivo** (Top 15):
1. automatización construcción modular
2. IA construcción PYMES
3. consultoría IA construcción España
4. automatizar procesos construcción
5. software automatización obra
6. n8n construcción
7. digitalización PYMES construcción
8. gestión automática albaranes construcción
9. control materiales construcción IA
10. [+ 5 adicionales basadas en research]

**Entregables**:
- Search Console activo y verificado
- Keyword research completo (Excel)
- Plan contenido SEO (calendario 90 días)
- Primeras 3 páginas optimizadas
- Informe baseline (posición día 0)

---

### 2.3 Email Corporativo y Configuración

**Objetivo**: Email profesional moduloria.com operativo

**Requisitos**:
- Dominio: moduloria.com
- Provider: Google Workspace o alternativa
- Cuentas: contacto@, hola@, nicolas@
- Firma email profesional
- Auto-responder configurado
- Integración con CRM

**Entregables**:
- Emails activos y testeados
- Firma HTML para cada email
- Plantillas email comunes (respuesta inicial, propuesta, seguimiento)
- Guía uso email corporativo

---

### 2.4 Redes Sociales

**Objetivo**: Perfiles optimizados en LinkedIn, Instagram, Facebook

**Tareas por red**:

**LinkedIn (Prioridad ALTA)**
- Perfil personal Nicolás optimizado
- Página empresa ModulorIA creada
- Banner personalizado
- Sobre nosotros completo
- Sección servicios configurada
- Primera publicación (anuncio lanzamiento)
- Calendario 12 semanas posts

**Instagram (Prioridad MEDIA)**
- Cuenta @moduloria
- Bio optimizada + link
- Highlights: Servicios, Problemas, Casos
- Grid estético (plantilla Canva)
- Primeros 9 posts preparados
- Reels: ideas primeros 5

**Facebook (Prioridad BAJA)**
- Página empresa
- Info completa
- Vinculada con Instagram
- Publicación anuncio

**Herramientas de gestión**:
- Evaluar: Buffer, Hootsuite, Later
- Configurar scheduling
- Dashboard unificado

**Entregables**:
- 3 redes activas y optimizadas
- Calendario contenido 30 días
- Herramienta scheduling configurada
- Guía tono de voz por red

---

## 🗂️ FASE 3: SISTEMA OPERATIVO (Semana 3-5)

### 3.1 Organización Notion

**Objetivo**: Notion como hub central de gestión proyecto

**Requisitos**:
- Workspace ModulorIA
- Integración con Task Master
- Bases de datos estructuradas

**Estructura Notion**:

**Dashboard Principal**
- Métricas clave
- Tareas hoy
- Pipeline clientes
- Calendario

**Base Datos: Problemas (25)**
- Campos: Título, Categoría, Tier, ROI, Status desarrollo, Link archivo
- Vistas: Por tier, Por ROI, Por status

**Base Datos: Clientes**
- Campos: Nombre, Empresa, Sector, Contacto, Status, Problema interés, Valor deal
- Vistas: Pipeline, Por status, Por valor

**Base Datos: Contenido**
- Campos: Título, Tipo, Canal, Status, Fecha publicación
- Vistas: Calendario, Por canal, Por status

**Base Datos: Tareas**
- Sincronizada con Task Master
- Kanban board

**Docs y Wiki**
- Brand guidelines
- Playbooks (ventas, implementación)
- Templates (propuestas, contratos)

**Entregables**:
- Workspace configurado
- 4 bases de datos operativas
- Dashboard funcional
- Guía uso Notion para equipo futuro

---

### 3.2 CRM y Gestión de Leads

**Objetivo**: Sistema para trackear leads y pipeline

**Opciones evaluadas**:
- Notion (gratis, ya tienes)
- Airtable (visual, automatizaciones)
- HubSpot Free (robusto, email marketing)
- Pipedrive (especializado ventas)

**Recomendación**: Empezar con Notion, migrar a HubSpot cuando >20 leads

**Campos requeridos**:
- Información contacto
- Empresa y sector
- Fuente del lead
- Problemas que enfrenta
- Notas conversaciones
- Status pipeline (Lead → Calificado → Propuesta → Negociación → Cerrado)
- Valor estimado deal
- Próxima acción

**Automatizaciones básicas**:
- Email confirmación contacto
- Tarea seguimiento +24h
- Notificaciones próximas acciones

**Entregables**:
- CRM configurado
- Formulario web → CRM
- Pipeline visual
- Reportes básicos

---

### 3.3 Herramientas y Stack Técnico

**Objetivo**: Montar infraestructura para implementaciones

**N8N**
- Instalación: self-hosted o N8N Cloud
- Primeros workflows:
  * Formulario web → Email/CRM
  * WhatsApp bot FAQ básico
  * OCR factura demo
- Templates base exportados

**APIs Configuradas**
- OpenAI (GPT-4o-mini): key activa, créditos
- Whisper API: key activa
- Google Vision OCR: cuenta configurada
- WhatsApp Business API: evaluar providers (Twilio, Wati)

**Otras herramientas**
- Airtable: cuenta + 2 bases demo
- Google Sheets: templates
- Calendly: calendario auditorías
- Loom: grabación demos

**Entregables**:
- N8N operativo con 3 workflows demo
- APIs testeadas y funcionando
- Documento "Stack Setup Guide.md"
- Presupuesto mensual herramientas

---

## 🚀 FASE 4: MVP Y VALIDACIÓN (Semana 4-8)

### 4.1 Definición MVP

**Objetivo**: Identificar el problema + solución para MVP

**Criterios selección**:
- Problema con mayor demanda validada
- Solución técnicamente viable en 2 semanas
- ROI demostrable en <30 días
- Replicable para otros clientes

**Candidatos** (de los 3 ya documentados):
1. **#08 - Tracking Herramientas QR** (ahorro €5.2K-10.4K/mes)
2. **#01 - Clasificación Emails** (ahorro €1.5K-3K/mes)
3. **#12 - Órdenes de Cambio** (ahorro €18K-33K/mes)

**Proceso decisión**:
- Revisar validación con empresas contactadas
- Evaluar complejidad técnica real
- Elegir 1 problema para MVP

**Entregables**:
- Problema MVP seleccionado y justificado
- Spec técnico detallado MVP
- Alcance mínimo viable definido

---

### 4.2 Desarrollo MVP Interno

**Objetivo**: Crear versión funcional del MVP para demos

**Requisitos**:
- Workflow N8N completo
- Integración WhatsApp (Twilio sandbox o real)
- Base de datos (Airtable o Sheets)
- Dashboard resultados
- Documentación uso

**Fases desarrollo**:
1. **Setup básico** (2-3 días)
   - Conectores configurados
   - Flujo básico funcionando
   - Testing con datos mock

2. **Funcionalidades core** (4-5 días)
   - Lógica completa implementada
   - Manejo de errores
   - Notificaciones

3. **Pulido y docs** (2-3 días)
   - UI/UX mejorado
   - Dashboard visual
   - Guía usuario
   - Video demo

**Entregables**:
- MVP funcional 100%
- Workflow N8N exportado (.json)
- Video demo 3-5 min
- Guía implementación para clientes
- Documento "Manual Usuario MVP.pdf"

---

### 4.3 MVP para Tipo de Empresa Específico

**Objetivo**: Adaptar MVP a arquetipo cliente ideal

**Arquetipos a considerar**:
1. **Emprendedor/Startup Construcción Modular** (1-5 empleados)
   - Presupuesto limitado
   - Necesita quick wins
   - Adoption rápida

2. **PYME Establecida** (10-50 empleados)
   - Procesos existentes
   - Resistencia al cambio
   - Budget moderado

3. **Mediana Empresa** (50-200 empleados)
   - Sistemas legacy
   - Múltiples stakeholders
   - Budget mayor

**Seleccionar 1 arquetipo** y adaptar:
- Messaging y comunicación
- Precio y modelo comercial
- Nivel soporte requerido
- Métricas de éxito

**Entregables**:
- Arquetipo ICP (Ideal Customer Profile) definido
- MVP adaptado a ese perfil
- Caso de uso específico documentado
- Propuesta comercial template

---

### 4.4 Piloto con Cliente Real

**Objetivo**: Implementar MVP con 1 cliente piloto y validar

**Proceso**:
1. **Identificación cliente** (de lista prospección)
   - Match con arquetipo ICP
   - Dispuesto a beta test
   - Acceso a datos/sistemas

2. **Propuesta piloto**
   - Descuento 70% vs precio final
   - Duración: 30 días
   - Compromiso: feedback semanal + testimonio
   - Métricas a trackear acordadas

3. **Implementación** (1-2 semanas)
   - Setup técnico
   - Onboarding cliente
   - Testing intensivo
   - Ajustes sobre la marcha

4. **Medición** (30 días)
   - KPIs diarios/semanales
   - Problemas y resoluciones
   - Feedback cualitativo
   - Cálculo ROI real

5. **Documentación caso éxito**
   - Antes/después con números
   - Testimonio video
   - Screenshots/datos
   - Publicación LinkedIn

**Entregables**:
- MVP implementado en cliente real
- Caso de éxito documentado
- Video testimonio cliente
- Lecciones aprendidas
- MVP v2 mejorado según feedback

---

## 👥 FASE 5: PROSPECCIÓN Y VENTAS (Semana 5-12)

### 5.1 Identificación y Lista de Prospectos

**Objetivo**: Lista de 50-100 empresas objetivo para prospección

**Criterios segmentación**:
- Sector: Construcción modular, industrializada, prefabricada
- Tamaño: 5-200 empleados
- Geografía: España (Madrid, Barcelona, Valencia) + LATAM (México, Colombia, Chile)
- Madurez digital: Baja-Media (tienen el problema)

**Fuentes**:
- LinkedIn Sales Navigator (trial)
- Google Maps: "construcción modular [ciudad]"
- Directorios: SEOPAN, cámaras comercio
- Eventos: asistentes construcción/BIM
- Competencia: clientes de otras consultorías

**Campos por prospecto**:
- Empresa
- Contacto (nombre, cargo, LinkedIn)
- Email (verificado)
- Teléfono/WhatsApp
- Tamaño estimado
- Problemas potenciales (inferidos)
- Prioridad (A/B/C)

**Entregables**:
- Base datos 50-100 prospectos (Notion/Airtable)
- Segmentación por prioridad
- Secuencia outreach por segmento

---

### 5.2 Estrategia de Outreach

**Objetivo**: Sistema replicable para contactar y calificar leads

**Canales outreach**:
1. **LinkedIn (Principal)**
   - Connection request personalizado
   - Secuencia 3-4 mensajes
   - Soft pitch: valor antes de venta

2. **Email frío (Secundario)**
   - Email verificado (Hunter.io)
   - Asunto relevante al problema
   - Secuencia 3 emails (valor → caso éxito → CTA)

3. **Contenido inbound (Pasivo)**
   - Posts LinkedIn semanales
   - Artículos blog
   - Lead magnets (calculadora, guía)

**Templates necesarios**:
- LinkedIn connection message
- LinkedIn follow-up (3 versiones)
- Email frío (3 secuencias)
- Respuesta objeciones comunes

**Métricas trackear**:
- Tasa aceptación LinkedIn
- Tasa respuesta email
- Leads calificados/semana
- Conversion lead → reunión

**Entregables**:
- Playbook outreach completo
- 10 templates probados
- Herramienta tracking (Notion/Sheets)
- Dashboard métricas

---

### 5.3 Propuesta Comercial y Precios

**Objetivo**: Estructura de precios y propuesta estándar

**Modelo pricing** (basado en research):

**Auditoría**
- Precio: €1,500 - €3,000
- Duración: 1-2 semanas
- Entregables:
  * Diagnóstico procesos
  * 5-10 quick wins priorizados
  * Roadmap 90 días
  * Estimación ROI

**Implementación Quick Wins**
- Starter: €3,000-€5,000 (1-2 automatizaciones)
- Pro: €8,000-€12,000 (3-4 automatizaciones + KPIs)
- Enterprise: €15,000-€25,000 (integración completa)
- Duración: 4-8 semanas

**Retainer Mensual**
- Mantenimiento: €500-€1,500/mes
- Incluye:
  * Monitoreo KPIs
  * Optimizaciones
  * Soporte (SLA)
  * 1-2 nuevas automatizaciones/trimestre

**Template propuesta**:
- Portada personalizada
- Problema cliente (específico)
- Solución propuesta
- Alcance y entregables
- Timeline
- Inversión y ROI proyectado
- Términos
- Próximos pasos

**Entregables**:
- Tabla de precios definida
- Template propuesta (PDF editable)
- Calculadora ROI por propuesta
- Guía negociación y descuentos

---

### 5.4 Pipeline y Forecast

**Objetivo**: Sistema para proyectar ingresos y priorizar esfuerzos

**Stages pipeline**:
1. Lead (sin contactar)
2. Contactado
3. Calificado (fit ICP)
4. Reunión agendada
5. Propuesta enviada
6. Negociación
7. Cerrado (Ganado/Perdido)

**Forecast básico**:
- Probabilidad por stage (ej: Propuesta enviada = 40%)
- Valor deal promedio
- Velocidad stage (días)
- Proyección mensual

**Métricas clave**:
- Leads generados/semana
- Conversion rate por stage
- Valor pipeline total
- MRR (Monthly Recurring Revenue)
- Forecast 30/60/90 días

**Entregables**:
- Dashboard pipeline visual
- Forecast sheet (Excel/Sheets)
- Reporte semanal automatizado

---

## 🤝 FASE 6: EQUIPO Y COLABORACIÓN (Semana 8+)

### 6.1 Colaboración con Subagentes/Freelancers

**Objetivo**: Sistema para trabajar con colaboradores externos

**Roles a considerar**:
1. **Desarrollador/Automatizador N8N** (freelance)
   - Para implementaciones complejas
   - Pago por proyecto o hourly
   - Portfolio requerido

2. **Diseñador Gráfico** (Gaby + otros)
   - Assets marketing
   - Presentations
   - Social media content

3. **Copywriter/Content Creator**
   - Artículos blog
   - Posts redes
   - Caso éxitos

4. **Asistente Virtual**
   - Research
   - Data entry
   - Scheduling

**Plataformas sourcing**:
- Upwork, Fiverr, Freelancer
- LinkedIn (búsqueda directa)
- Comunidades N8N, Make
- Referencias

**Sistema colaboración**:
- Onboarding doc para cada rol
- Accesos necesarios
- Comunicación (Slack/Notion)
- Sistema pago
- Gestión proyectos (Notion)

**Entregables**:
- Job descriptions por rol
- Onboarding checklist
- Contratos/acuerdos template
- Sistema evaluación performance

---

### 6.2 Procesos y Playbooks

**Objetivo**: Documentar todo para escalar sin ti

**Playbooks a crear**:

1. **Playbook: Auditoría Cliente**
   - Preparación pre-reunión
   - Agenda reunión
   - Preguntas clave
   - Análisis post-reunión
   - Entrega informe

2. **Playbook: Implementación Quick Win**
   - Kickoff cliente
   - Setup técnico
   - Testing
   - Deploy
   - Onboarding cliente
   - Handoff

3. **Playbook: Creación Contenido**
   - Ideación temas
   - Research
   - Redacción
   - Diseño
   - Publicación
   - Distribución

4. **Playbook: Gestión Lead**
   - Calificación
   - Primera reunión
   - Follow-up
   - Propuesta
   - Cierre

**Formato playbooks**:
- Notion pages con checklists
- Templates embebidos
- Screenshots/videos
- FAQs por proceso

**Entregables**:
- 4 playbooks completos
- Video walkthroughs
- Templates asociados

---

## 📊 MÉTRICAS Y KPIS

### KPIs Fase 1-3 (Preparación)
- ✅ Brand story definido
- ✅ Sitio web live
- ✅ 3 redes sociales activas
- ✅ Email corporativo configurado
- ✅ N8N + APIs operativos
- ✅ Notion workspace completo

### KPIs Fase 4 (MVP)
- ✅ MVP funcional
- ✅ 1 cliente piloto implementado
- ✅ ROI real medido y documentado
- ✅ 1 caso de éxito publicado

### KPIs Fase 5-6 (Ventas y Escala)
- 50-100 prospectos identificados
- 10-20 leads calificados
- 5-10 reuniones realizadas
- 2-3 propuestas enviadas
- 1-2 clientes cerrados (€5K-€15K)
- 1-2 colaboradores onboarded

---

## 🚨 RIESGOS Y MITIGACIONES

### Riesgo 1: Validación insuficiente
**Mitigación**: Forzar conversaciones con 5-7 empresas ANTES de desarrollo MVP

### Riesgo 2: MVP demasiado complejo
**Mitigación**: Timebox desarrollo a 2 semanas máximo, reducir scope si necesario

### Riesgo 3: Parálisis por perfección
**Mitigación**: Regla 80/20 - publicar cuando esté 80% listo, iterar después

### Riesgo 4: Falta de tiempo/recursos
**Mitigación**: Priorizar despiadadamente, usar subagentes para tareas no-core

### Riesgo 5: Problema elegido no resuena
**Mitigación**: Tener plan B (segundo problema) identificado desde inicio

---

## ✅ CRITERIOS DE ÉXITO (90 DÍAS)

**Mínimo viable**:
- ✅ Presencia digital completa y profesional
- ✅ 1 MVP implementado con cliente real
- ✅ 1 caso de éxito documentado
- ✅ Pipeline 10+ leads calificados
- ✅ 1 cliente pagando (piloto o completo)

**Óptimo**:
- Todo lo anterior +
- 3 MVPs diferentes validados
- 3 casos de éxito
- 2-3 clientes activos
- €10K-€25K facturado
- 1-2 colaboradores trabajando

**Extraordinario**:
- Todo lo anterior +
- 5+ clientes activos
- €40K-€60K facturado
- Presencia LinkedIn sólida (1K+ followers)
- Retainer mensual establecido (€2K-€5K MRR)

---

## 📅 CRONOGRAMA MAESTRO

| Semana | Fase | Hitos Clave |
|--------|------|-------------|
| 1 | Identidad | Story, competencia, logo brief Gaby |
| 2 | Identidad | Logo final, guidelines |
| 3 | Digital | Sitio web desarrollo |
| 4 | Digital | Sitio live, redes configuradas |
| 5 | Sistema | Notion, CRM, N8N setup |
| 6 | MVP | MVP interno desarrollo |
| 7 | MVP | MVP interno completo + demos |
| 8 | Validación | Cliente piloto implementación |
| 9-10 | Validación | Piloto running, medición |
| 11 | Ventas | Prospección masiva, outreach |
| 12 | Ventas | Propuestas, cierres |

---

## 🔄 ITERACIONES Y REVIEWS

**Review semanal** (Viernes):
- ¿Qué se completó?
- ¿Qué bloqueó?
- ¿Qué aprendimos?
- Prioridades próxima semana

**Review mensual**:
- Progreso vs objetivos 90 días
- Ajustes roadmap
- Decisiones go/no-go

---

## 📝 NOTAS FINALES

Este PRD es un **documento vivo**. Se espera que:
- Se actualice semanalmente según aprendizajes
- Prioridades cambien basadas en validación
- Algunos bloques se expandan/contraigan
- Fechas se ajusten a realidad

**Principio rector**: **Validación > Perfección**

Mejor un sitio web "suficientemente bueno" live en 2 semanas que uno "perfecto" en 3 meses. Mejor 1 MVP funcionando con 1 cliente que 3 MVPs perfectos sin nadie usándolos.

**¡A ejecutar!** 🚀

---

**Fin del PRD**
