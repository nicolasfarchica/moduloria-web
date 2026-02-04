# Tareas Organizadas - ModulorIA Lanzamiento

**Fecha:** 2026-01-04
**Basado en:** PRD Lanzamiento + Análisis Completo del Proyecto
**Prioridad:** Fase 2 (Presencia Digital) + Fase 3 (Sistema Operativo)

---

## 🎯 SEMANA 1: Setup + Quick Wins (Días 1-7)

### Día 1-2: Auditoría y Setup Base

**✅ COMPLETADO:**
- [x] Plan maestro creado
- [x] Estructura de 15 agentes definida
- [x] Diagnóstico completo del proyecto

**🔄 HOY (Prioridad ALTA):**
1. [ ] **Auditar web live:** https://moduloria-web.vercel.app
   - Ver páginas implementadas vs pendientes
   - Verificar formularios funcionando
   - Identificar contenido faltante
   - Performance check (Lighthouse)

2. [ ] **Clonar repo localmente:**
   ```bash
   git clone https://github.com/nicolasfarchica/moduloria-web.git
   cd moduloria-web
   npm install
   npm run dev
   ```

3. [ ] **Crear workspace Notion:**
   - Crear workspace "ModulorIA"
   - 4 bases de datos: Problemas, Clientes, Contenido, Tareas
   - Dashboard principal

### Día 3-4: Web - Gaps Críticos

**Frontend (según auditoría):**
1. [ ] Completar backend formulario auditoría (si falta)
2. [ ] Crear página `/contacto` (si falta)
3. [ ] Verificar 25 landing pages `/problemas/[slug]`
4. [ ] Setup Google Analytics 4

**Contenido:**
5. [ ] Revisar copywriting actual
6. [ ] Identificar secciones con placeholders
7. [ ] Lista de imágenes faltantes

### Día 5-7: MVP Chatbot WhatsApp

**Implementación:**
1. [ ] Elegir plataforma: ManyChat vs Botpress vs Wati
2. [ ] Crear cuenta WhatsApp Business
3. [ ] Configurar 20 FAQs base
4. [ ] Workflow: FAQ → Captura lead → Notificación
5. [ ] Testing con 10 preguntas reales
6. [ ] Integrar con Notion/Airtable (leads)

**Métricas objetivo:**
- Tasa respuesta: >70%
- Captura leads: Setup funcional
- Tiempo respuesta: <30 seg

---

## 🎯 SEMANA 2: MVPs + Contenido (Días 8-14)

### Día 8-10: OCR Facturas

**Stack técnico:**
- Google Cloud Vision API
- N8N Cloud o self-hosted
- Airtable para data
- WhatsApp como input

**Tareas:**
1. [ ] Setup Google Cloud Vision API
2. [ ] Crear cuenta N8N Cloud (€24/mes trial)
3. [ ] Workflow: WhatsApp foto → OCR → Airtable
4. [ ] Template validación facturas
5. [ ] Testing con 20 facturas reales
6. [ ] Dashboard Airtable resultados

**Métrica objetivo:**
- Precisión: >80%
- Tiempo proceso: <30 seg/factura

### Día 11-12: Reportes Voz

**Stack técnico:**
- OpenAI Whisper API
- N8N
- WhatsApp audio
- Airtable

**Tareas:**
1. [ ] Setup Whisper API (OpenAI)
2. [ ] Workflow: WhatsApp audio → Whisper → GPT resumen → Airtable
3. [ ] Template reporte (estructura)
4. [ ] Testing con 10 audios
5. [ ] Dashboard gerencia

**Métrica objetivo:**
- Precisión transcripción: >85%
- Tiempo: Audio 3min → reporte <1min

### Día 13-14: Contenido Blog

**Artículos prioritarios:**
1. [ ] "IA en Construcción Modular: Guía 2026"
2. [ ] "ROI Real: 3 Casos de Éxito Chatbot WhatsApp"
3. [ ] "OCR Facturas: Cómo Eliminar Errores Admin"
4. [ ] "Reportes Diarios en 2 Minutos (Voz-Texto)"
5. [ ] "Top 10 Quick Wins IA para PYMES Construcción"

**Formato:** 800-1200 palabras, SEO optimized

---

## 🎯 SEMANA 3-4: Presencia Digital (Días 15-28)

### LinkedIn Strategy

**Perfil Personal (Nicolás):**
1. [ ] Optimizar headline: "Consultor IA | Construcción Modular"
2. [ ] Actualizar About con brand story
3. [ ] Featured: Calculadora ROI + Casos éxito
4. [ ] Banner personalizado

**Página Empresa:**
5. [ ] Crear página ModulorIA
6. [ ] Descripción completa
7. [ ] Servicios configurados
8. [ ] Post anuncio lanzamiento

**Contenido (12 posts - 4 semanas):**
9. [ ] Preparar calendario posts
10. [ ] Escribir 12 posts (3/semana)
11. [ ] Diseño visual posts (Canva)
12. [ ] Programar con Buffer/Hootsuite

### SEO Web

**On-page:**
1. [ ] Completar 15 keywords objetivo
2. [ ] Meta descriptions todas las páginas
3. [ ] Schema markup (Organization, Service, FAQPage)
4. [ ] Internal linking plan
5. [ ] Alt text imágenes

**Technical:**
6. [ ] Google Search Console setup
7. [ ] Sitemap XML submit
8. [ ] Robots.txt verificar
9. [ ] Core Web Vitals optimization

### Landing Pages Problemas

**TIER 1 (10 páginas):**
1. [ ] Crear template dinámico `/problemas/[slug]`
2. [ ] Implementar 10 landing pages:
   - Clasificación emails
   - Chatbot FAQ
   - OCR facturas
   - Reportes voz
   - Alertas stock
   - Asistencia GPS
   - Registro seguridad
   - Tracking herramientas
   - Recordatorios
   - Formularios digitales

**Contenido por página:**
- Hero con problema cuantificado
- Impacto €/mes
- Solución técnica
- Caso de éxito
- Calculadora ROI
- CTA auditoría

---

## 📊 MÉTRICAS DE ÉXITO (30 Días)

**Web:**
- [ ] Lighthouse score: >90
- [ ] 25 landing pages live
- [ ] 5 blog posts publicados
- [ ] 10+ leads capturados

**MVPs:**
- [ ] Chatbot WhatsApp: Funcional 24/7
- [ ] OCR Facturas: >80% precisión
- [ ] Reportes Voz: >85% precisión

**Contenido:**
- [ ] LinkedIn: 12 posts publicados
- [ ] Email: Secuencia bienvenida (7 emails)
- [ ] Lead magnet: Guía "5 Quick Wins"

**Sistema:**
- [ ] Notion: 4 bases datos operativas
- [ ] CRM: Pipeline visual
- [ ] Analytics: GA4 + Search Console

---

## 🎓 ESTRUCTURA DE AGENTES (15 Roles)

### Equipo Web (4)
1. **SEO Specialist** - Keywords, on-page, blog strategy
2. **Copywriter** - Contenido web, blog posts, emails
3. **UI/UX Designer** - Componentes, assets, mobile
4. **Frontend Developer** - Features, backend, performance

### Equipo Contenido (3)
5. **Content Strategist** - Calendario, ideación, repurposing
6. **Social Media Manager** - LinkedIn, Instagram, community
7. **Email Marketing** - Sequences, newsletter, lead magnets

### Equipo Técnico (3)
8. **N8N Specialist** - Workflows MVPs, APIs, testing
9. **Backend Developer** - APIs, database, integraciones
10. **QA & Testing** - Testing MVPs, bugs, performance

### Equipo Estrategia (2)
11. **Market Research** - Validación, competencia, tendencias
12. **Business Strategist** - Pricing, GTM, partnerships

### Equipo Gestión (2)
13. **Project Manager** - Task Master, sprints, roadmap
14. **Documentation** - Playbooks, knowledge base, onboarding

### Dirección (1)
15. **Director Proyecto** - Coordinación, decisiones, reporting

---

## 📋 DECISIONES PENDIENTES

**Técnicas:**
1. [ ] Backend formularios: N8N webhook vs Vercel Postgres
2. [ ] CRM inicial: Notion vs Airtable vs HubSpot
3. [ ] N8N hosting: Cloud vs self-hosted

**Contenido:**
4. [ ] Calendario publicación blog: ¿Lunes o Miércoles?
5. [ ] Formato posts LinkedIn: ¿Carrusel vs texto?

**MVPs:**
6. [ ] Chatbot platform: ManyChat vs Botpress
7. [ ] Orden implementación: ¿Chatbot → OCR → Voz?

---

## 🚀 PRÓXIMA ACCIÓN INMEDIATA

**HOY (próximas 2 horas):**

1. **Auditar web live** (30 min)
   - Abrir https://moduloria-web.vercel.app
   - Probar todas las páginas
   - Listar qué falta

2. **Clonar repo** (15 min)
   - Git clone
   - npm install
   - Verificar local

3. **Crear Notion base** (45 min)
   - Workspace ModulorIA
   - 4 bases de datos
   - Dashboard

4. **Documento agentes** (30 min)
   - Detallar los 15 roles
   - Responsabilidades
   - Tareas asignadas

---

**ESTADO:** Lista ejecutiva lista. Siguiente: Auditar web.
