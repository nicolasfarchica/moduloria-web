# ModulorIA 🏗️🤖

[![Estado](https://img.shields.io/badge/estado-activo-brightgreen)](https://github.com/moduloria)
[![Stack](https://img.shields.io/badge/stack-Next.js%2014-blue)](https://nextjs.org/)
[![AI Models](https://img.shields.io/badge/AI-Claude%20%7C%20GPT--5.2%20%7C%20Gemini-purple)](https://claude.ai)
[![Task Master](https://img.shields.io/badge/task--master-0.40.1-orange)](https://github.com/anthropics/task-master)

> **Consultoría de IA Aplicada a Construcción Modular e Industrializada**
> Automatización práctica con ROI en 2-3 semanas para PYMEs del sector

**[Demo Live](https://moduloria.vercel.app)** • **[Casos de Éxito](#casos-de-éxito)** • **[Documentación](#documentación)**

---

## 🎯 ¿Qué es ModulorIA?

**ModulorIA** es una consultoría especializada que ayuda a empresas de construcción modular e industrializada (10-200 empleados) a:

✅ **Identificar** puntos de dolor reales en operaciones diarias
✅ **Diseñar** soluciones de IA simples y prácticas
✅ **Implementar** automatizaciones accesibles (N8N, APIs, No-Code)

### Propuesta de Valor

**NO somos:** Computer vision compleja, drones, robótica
**SÍ somos:** Automatización práctica, bots inteligentes, flujos que ahorran tiempo y dinero

**ROI típico:** 2-3 semanas
**Inversión:** €1.5K-€3K por Quick Win
**Ahorro anual:** €806K-€1.87M (combinando múltiples soluciones)

---

## 🚀 Inicio Rápido

### Para Desarrollo Web

```bash
# Navegar a la carpeta web
cd web

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Abrir en navegador: http://localhost:3000
```

**Stack Web:**
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS 3.4.17
- Framer Motion 12.23.25

### Para Gestión de Tareas (Task Master)

```bash
# Ver todas las tareas
task-master list

# Obtener siguiente tarea
task-master next

# Ver detalles de tarea
task-master show <id>

# Marcar como completada
task-master set-status --id=<id> --status=done
```

### Para Trabajar con Agentes IA

```bash
# Usar orquestador para coordinar agentes
# Delegar tareas específicas a agentes especializados
# Ver: .claude/agents/orchestrator.md
```

---

## 📊 Estado del Proyecto

| Área | Progreso | Estado |
|------|----------|--------|
| **Investigación de mercado** | 100% | ✅ Completado (21 docs, 700KB) |
| **Catálogo de oportunidades** | 100% | ✅ 25 puntos de dolor identificados |
| **Estrategia de marca** | 100% | ✅ UVP, arquetipos, competencia |
| **Aplicación web** | 100% | ✅ Next.js funcional + deployed |
| **Contenido educativo** | 30% | 🟡 2 posts LinkedIn creados |
| **Clientes beta** | 0% | 🔴 Pendiente |
| **Casos de éxito** | 0% | 🔴 Pendiente |

**Próximos hitos:**
- 🎯 3 auditorías completadas (Semana 2-3)
- 🎯 1 Quick Win implementado propio (Semana 1)
- 🎯 Primer cliente de pago (Semana 4)

---

## 🗂️ Estructura del Proyecto

```
ModulorIA/
│
├── 📱 web/                                    # Aplicación Next.js + TypeScript
│   ├── src/app/                              # Páginas (App Router)
│   ├── src/components/                       # Componentes React
│   └── public/                               # Assets estáticos
│
├── 📚 docs/                                   # Documentación completa
│   ├── estrategia/                           # UVP, arquetipos, roadmap (101 tareas)
│   ├── investigacion/                        # 21 archivos de análisis (704KB)
│   ├── puntos-de-dolor/                      # 25 problemas catalogados (300KB)
│   ├── diseno-web/                           # Specs de diseño y copywriting
│   ├── contenido-linkedin/                   # Posts y estrategia social
│   └── PLAN-MEJORA-INFRAESTRUCTURA.md        # Guía de mejora continua
│
├── 📦 assets/                                 # Recursos visuales
│   └── imagenes/                             # Imágenes del proyecto
│
├── 🎯 .taskmaster/                            # Task Master AI
│   ├── tasks/tasks.json                      # Base de datos de tareas
│   ├── config.json                           # Config modelos IA
│   └── docs/prd-lanzamiento-moduloria.md     # PRD completo (101 tareas)
│
└── 🤖 .claude/                                # Claude Code + Agentes
    ├── agents/                               # 11 agentes especializados
    └── settings.local.json                   # Config MCP servers
```

---

## 🤖 Sistema Multi-Agente

ModulorIA opera con **11 agentes especializados** coordinados por un **orquestador central**:

### Equipo Web (4 agentes)
- 🔷 **alex-frontend-developer** → Features Next.js, performance
- 🔵 **david-seo-specialist** → SEO técnico, keywords
- 🟦 **carolina-ux-designer** → UI/UX, wireframes
- 💙 **marco-copywriter-b2b** → Copy, blog posts

### Equipo Contenido & Marketing (3 agentes)
- 🟢 **tomas-content-strategist** → Calendario 90 días
- 💚 **isabella-social-media** → LinkedIn, posts
- 🟩 **andrea-email-marketing** → Sequences, automation

### Equipo Técnico (2 agentes)
- 🟠 **sofia-n8n-automation** → Workflows N8N, chatbots
- 🧡 **javier-backend-developer** → APIs, PostgreSQL

### Gestión (1 agente)
- 🔴 **laura-project-manager** → Sprints, coordinación

### Coordinador Central
- 👑 **orchestrator** → Delega, coordina, sintetiza

---

## 🎁 Los 25 Puntos de Dolor

### TIER 1: Quick Wins (ROI 2-3 semanas | €800-€2.5K)
1. Clasificar emails/WhatsApp automáticamente
2. Bot FAQ para consultas recurrentes
3. OCR de facturas y albaranes
4. Reportes diarios voz-a-texto
5. Alertas automáticas de stock bajo
6. Control de asistencia digital (selfie + GPS)
7. Registro rápido de incidentes
8. Seguimiento de herramientas con QR
9. Recordatorios automáticos
10. Formularios digitales móvil

### TIER 2: Alto Impacto (ROI 1-2 meses | €2K-€8K)
Gestión docs subcontratistas, órdenes cambio, seguimiento entregas, presupuestos IA, onboarding, RAG docs, permisos, calidad, solicitudes rápidas, aprobaciones urgentes

### TIER 3: Transformacional (ROI 2-4 meses | €5K-€12K)
Certificaciones mensuales, sistema post-venta, knowledge base, planificación equipos IA, inventarios rápidos

**📈 Impacto Total:** €9K-€16K inversión → €806K-€1.87M ahorro anual

Ver detalles: [`docs/puntos-de-dolor/00-INDICE-MAESTRO.md`](docs/puntos-de-dolor/00-INDICE-MAESTRO.md)

---

## 🛠️ Stack Tecnológico

### Frontend
- **Next.js 14** (App Router, Server Components)
- **TypeScript** (Type safety)
- **Tailwind CSS** (Utility-first styling)
- **Framer Motion** (Animaciones fluidas)
- **Lucide React** (Iconos)

### Automatización & IA
- **N8N Cloud** (Workflows no-code)
- **OpenAI API** (GPT-4o-mini: €0.15/1M tokens)
- **Claude API** (Haiku/Sonnet: €0.25-€3/1M tokens)
- **Whisper API** (Transcripción: €0.006/min)
- **OCR APIs** (Klippa, Azure, Google Vision)

### Almacenamiento & DB
- **Airtable** (Base de datos visual, gratis hasta 1.200 registros)
- **Google Sheets** (Gratis)
- **PostgreSQL/SQLite** (Self-hosted, gratis)

### Gestión & Deploy
- **Task Master AI 0.40.1** (Gestión tareas con IA)
- **Notion** (Documentación y planificación)
- **Vercel** (Deploy Next.js)
- **GitHub** (Control de versiones)

### Modelos IA Configurados
- **Main:** GPT-5.2 (Codex-CLI) - 80% SWE Score - **GRATIS**
- **Research:** Claude Sonnet 4.5 (Claude-Code) - 72.7% SWE - **GRATIS**
- **Fallback:** Claude Opus (Claude-Code) - 72.5% SWE - **GRATIS**

---

## 📚 Documentación

### Para Desarrolladores
- **[Plan de Mejora Infraestructura](docs/PLAN-MEJORA-INFRAESTRUCTURA.md)** - Guía completa de documentación y workflows
- **[Estructura de Carpetas](docs/PLAN-MEJORA-INFRAESTRUCTURA.md#estructura-de-carpetas-propuesta)** - Organización del proyecto
- **[Sistema de Commits](docs/PLAN-MEJORA-INFRAESTRUCTURA.md#sistema-de-commits-convencional)** - Convenciones Git

### Para Negocio
- **[Propuesta de Valor](docs/estrategia/Propuesta-Valor-Elevator-Pitch.md)** - UVP + elevator pitches
- **[Arquetipos de Cliente](docs/estrategia/Arquetipos-Cliente.md)** - 3 perfiles ICP detallados
- **[Roadmap 90 Días](docs/estrategia/TAREAS-LANZAMIENTO.md)** - 101 tareas en 6 fases

### Para Marketing
- **[Tono de Voz](docs/estrategia/Tono-de-Voz-Personalidad-Marca.md)** - Guía de comunicación
- **[Posts LinkedIn](docs/contenido-linkedin/)** - Contenido social media
- **[Copywriting Web](docs/diseno-web/Copywriting-Homepage.md)** - Textos para cada sección

---

## 📋 Roadmap (Próximos 90 Días)

### Fase 1: Identidad y Storytelling (Semana 1-2)
- ✅ Definir propuesta de valor
- ✅ Crear arquetipos de cliente
- ✅ Diseñar identidad visual

### Fase 2: Presencia Digital (Semana 3-5)
- ✅ Sitio web completo
- ✅ LinkedIn optimizado
- 🟡 Contenido educativo (2/30 posts)

### Fase 3: Sistema Operativo (Semana 6-7)
- 🟡 Implementación técnica (Task Master configurado)
- ⬜ Workflows y templates
- ⬜ Sistemas de seguimiento

### Fase 4: MVP y Validación (Semana 8-11)
- ⬜ 3 Quick Wins implementados
- ⬜ Primeros clientes beta
- ⬜ Casos de éxito documentados

### Fase 5: Sistema de Ventas (Semana 12-14)
- ⬜ Pipeline comercial
- ⬜ Material de ventas
- ⬜ Estrategia de precios

### Fase 6: Equipo y Escalabilidad (Continuo)
- ⬜ Procesos documentados
- ⬜ Estructura de equipo
- ⬜ Plan de crecimiento

**Total: 101 tareas | 10% completado**

Ver plan completo: [`docs/estrategia/TAREAS-LANZAMIENTO.md`](docs/estrategia/TAREAS-LANZAMIENTO.md)

---

## 🏆 Casos de Éxito

*Próximamente - En búsqueda de clientes beta*

### Objetivo Q1 2026:
- 5-8 auditorías realizadas
- 2-3 casos de éxito documentados
- 10-15 Quick Wins catalogados y validados
- 1-2 clientes en retainer mensual

---

## 🤝 Contribuir

Este es un proyecto privado, pero seguimos convenciones profesionales:

### Sistema de Commits
```bash
feat(scope): descripción imperativo
fix(agents): corregir error orchestrator
docs(readme): actualizar estructura
content(linkedin): agregar posts enero
```

### Workflow Git
1. Feature branches: `feat/nombre-feature`
2. Commits frecuentes y descriptivos
3. PRs con contexto claro

Ver guía completa: [`docs/PLAN-MEJORA-INFRAESTRUCTURA.md`](docs/PLAN-MEJORA-INFRAESTRUCTURA.md)

---

## 📞 Contacto

**Nicolás Farchica**
Fundador & CEO - ModulorIA

- 🌐 Web: [moduloria.com](https://moduloria.com)
- 💼 LinkedIn: [Nicolás Farchica](https://linkedin.com/in/nicolasfarchica)
- 📧 Email: hola@moduloria.com

---

## 📄 Licencia

Privado - ModulorIA © 2026

---

## 🔧 Comandos Útiles

### Web
```bash
cd web
npm run dev       # Desarrollo
npm run build     # Build producción
npm run lint      # Verificar código
```

### Task Master
```bash
task-master list                           # Ver tareas
task-master next                           # Siguiente tarea
task-master show <id>                      # Detalles
task-master set-status --id=<id> --status=done  # Completar
```

### Modelos IA
```bash
task-master models                         # Ver config actual
task-master models --set-main <model>      # Cambiar main
task-master models --set-research <model>  # Cambiar research
```

---

**Creado con ❤️ para transformar la construcción modular con IA**
*Última actualización: 8 Enero 2026*
