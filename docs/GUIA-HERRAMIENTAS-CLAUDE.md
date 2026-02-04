# Guia Completa de Herramientas - ModulorIA + Claude Code

Esta guia documenta todas las herramientas disponibles en el proyecto ModulorIA para maximizar productividad con Claude Code.

---

## 1. Comandos Personalizados de ModulorIA

Comandos creados especificamente para este proyecto. Ejecutar con `/nombre`.

### `/inicio` - Resumen Diario
**Uso:** Al empezar cada sesion de trabajo

Muestra:
- Estado de git (commits pendientes, sincronizacion)
- Tareas pendientes de Task Master
- Errores de TypeScript
- Recomendacion del dia

```
/inicio
```

### `/blog` - Crear Articulo SEO
**Uso:** Los martes, para crear contenido semanal

Flujo:
1. Propone 3 temas basados en keywords SEO
2. Crea estructura del articulo
3. Escribe el articulo (600-900 palabras)
4. Entrega formato listo para publicar

```
/blog
```

### `/metricas` - Dashboard de Rendimiento
**Uso:** Para revisar estado del negocio

Muestra:
- Leads de Notion (estados, fuentes, ultimos)
- Solicita datos de GA/GSC (hasta que se conecten)
- Analisis y recomendaciones

```
/metricas
```

---

## 2. Agentes Especializados (Task Tool)

Claude puede lanzar agentes especializados para tareas complejas. Se invocan automaticamente o podes pedirlos.

### Agentes de Contenido

| Agente | Funcion | Cuando usarlo |
|--------|---------|---------------|
| `copywriting-expert-moduloria` | Posts LinkedIn <1300 chars | "Crea un post para LinkedIn" |
| `content-strategist-moduloria` | Calendarios 30-90 dias | "Planifica contenido Q1" |
| `carousel-creator-moduloria` | Carruseles 8 slides | "Crea un carrusel sobre..." |
| `linkedin-master-moduloria` | Todo LinkedIn | "Necesito ayuda con LinkedIn" |
| `outbound-sequencer-moduloria` | Secuencias DM | "Crea secuencia de outreach" |

### Agentes Tecnicos

| Agente | Funcion | Cuando usarlo |
|--------|---------|---------------|
| `alex-frontend-developer` | Next.js, TypeScript, Tailwind | "Implementa este feature" |
| `javier-backend-developer` | Node.js, PostgreSQL, APIs | "Crea esta API" |
| `sofia-n8n-automation` | Workflows n8n, automatizacion | "Automatiza este proceso" |
| `carolina-ux-designer` | UI/UX, wireframes, Figma | "Disena esta pantalla" |

### Agentes de Marketing

| Agente | Funcion | Cuando usarlo |
|--------|---------|---------------|
| `andrea-email-marketing` | Sequences, newsletters | "Crea secuencia de emails" |
| `david-seo-specialist` | Auditorias SEO, keywords | "Audita el SEO de..." |
| `marco-copywriter-b2b` | Copy web, emails, casos | "Escribe copy para..." |
| `tomas-content-strategist` | Estrategia multicanal | "Define estrategia de contenido" |

### Agentes de Gestion

| Agente | Funcion | Cuando usarlo |
|--------|---------|---------------|
| `laura-project-manager` | Sprints, coordinacion | "Coordina este proyecto" |
| `orchestrator` | Coordinar multiples agentes | "Necesito varios agentes" |

### Agentes de Exploracion

| Agente | Funcion | Cuando usarlo |
|--------|---------|---------------|
| `Explore` | Buscar en codebase | "Donde esta X en el codigo?" |
| `Plan` | Planificar implementacion | "Planifica como hacer X" |

---

## 3. MCP Servers (Integraciones Externas)

Conexiones directas a servicios externos. Claude los usa automaticamente.

### Notion
Acceso directo a bases de datos de Notion.

```
"Muestrame los leads de Notion"
"Agrega un lead nuevo: Empresa X, email@..."
"Busca en Notion articulos de construccion"
```

### GitHub
Operaciones en repositorios.

```
"Crea un PR con estos cambios"
"Muestrame los issues abiertos"
"Busca codigo que contenga X"
```

### Playwright
Automatizacion de navegador.

```
"Abre la pagina X y toma screenshot"
"Rellena el formulario de prueba"
"Navega a moduloria.com y verifica el hero"
```

### n8n
Gestion de workflows.

```
"Lista mis workflows de n8n"
"Busca nodos de Notion"
"Valida este workflow"
```

### Brave Search
Busquedas web actualizadas.

```
"Busca tendencias de IA en construccion 2026"
"Que dicen sobre construccion modular en España"
```

### Context7
Documentacion actualizada de librerias.

```
"Dame la documentacion de Next.js 15"
"Como usar Resend en 2026"
```

### Memory
Persistencia de contexto entre sesiones.

```
"Recorda que el cliente X prefiere..."
"Que habiamos acordado sobre..."
```

### Sequential Thinking
Razonamiento paso a paso para problemas complejos.

```
"Analiza este problema complejo paso a paso"
```

---

## 4. Skills (133 instalados)

Skills son instrucciones especializadas que Claude carga automaticamente. Se invocan con `/skill-name` o Claude los detecta segun el contexto.

### Marketing y SEO

| Skill | Invocacion | Funcion |
|-------|------------|---------|
| SEO Audit | `/seo-audit` | Auditoria completa de SEO |
| SEO Meta | `/seo-meta` | Optimizar meta tags |
| Schema Markup | `/schema-markup` | Structured data para Google |
| Copywriting | `/copywriting` | Copy persuasivo |
| Email Sequence | `/email-sequence` | Secuencias de nurturing |
| Marketing Psychology | `/marketing-psychology` | Principios de persuasion |
| Content Strategy | `/content-strategy` | Planificacion de contenido |
| Social Content | `/social-content` | Posts para redes |

### Conversion (CRO)

| Skill | Invocacion | Funcion |
|-------|------------|---------|
| Page CRO | `/page-cro` | Optimizar paginas para conversion |
| Form CRO | `/form-cro` | Mejorar formularios |
| Signup Flow CRO | `/signup-flow-cro` | Optimizar registro |
| A/B Test Setup | `/ab-test-setup` | Configurar tests |

### Desarrollo Next.js

| Skill | Invocacion | Funcion |
|-------|------------|---------|
| Next Best Practices | `/next-best-practices` | Mejores practicas Next.js |
| Next Cache Components | `/next-cache-components` | Optimizar cache |
| Next Upgrade | `/next-upgrade` | Actualizar version |
| Tailwind Patterns | `/tailwind-patterns` | Patrones CSS |
| Accessibility | `/accessibility` | Accesibilidad web |

### Emails

| Skill | Invocacion | Funcion |
|-------|------------|---------|
| React Email | `/react-email` | Templates con React |
| Email Gateway | `/email-gateway` | Integracion envios |

### n8n

| Skill | Invocacion | Funcion |
|-------|------------|---------|
| n8n Code JavaScript | Automatico | Codigo en nodos |
| n8n Expression Syntax | Automatico | Sintaxis expresiones |
| n8n Workflow Patterns | Automatico | Patrones de workflows |
| n8n Validation Expert | Automatico | Validar workflows |

---

## 5. Task Master (Gestion de Tareas)

Sistema de gestion de tareas integrado.

### Comandos Principales

```bash
# Ver tareas
task-master list

# Siguiente tarea
task-master next

# Ver detalle
task-master show 1.2

# Marcar como completada
task-master set-status --id=1 --status=done

# Agregar tarea
task-master add-task --prompt="Descripcion de la tarea"

# Expandir tarea en subtareas
task-master expand --id=1
```

### Skills de Task Master

Tambien disponibles como skills:

| Skill | Funcion |
|-------|---------|
| `/tm:list:list-tasks` | Listar tareas |
| `/tm:next:next-task` | Siguiente tarea |
| `/tm:show:show-task` | Ver detalle |
| `/tm:set-status:to-done` | Marcar completada |
| `/tm:add-task:add-task` | Agregar tarea |

---

## 6. Flujos de Trabajo Recomendados

### Inicio del Dia
```
/inicio
```
Esto te da el resumen completo y que hacer hoy.

### Crear Contenido LinkedIn
```
"Crea un post de LinkedIn sobre automatizacion en construccion"
```
Claude invoca automaticamente al agente `copywriting-expert-moduloria`.

### Auditar SEO
```
/seo-audit para moduloria.com
```
O simplemente:
```
"Audita el SEO de la landing page"
```

### Crear Articulo de Blog (Martes)
```
/blog
```
Flujo guiado para crear articulo SEO-optimizado.

### Revisar Metricas
```
/metricas
```
Dashboard de leads y solicitud de datos de analytics.

### Automatizar con n8n
```
"Crea un workflow en n8n para..."
```
Claude usa los skills de n8n automaticamente.

### Crear Emails
```
/email-sequence para leads post-auditoria
```
O:
```
/react-email template de bienvenida
```

### Desarrollo Web
```
"Agrega un nuevo componente de testimonios"
```
Claude invoca al agente `alex-frontend-developer` si es complejo.

---

## 7. Tips de Productividad

### 1. Se Especifico
En lugar de: "Mejora el SEO"
Mejor: "Audita el SEO de /es/servicios y sugiere mejoras en meta tags y schema"

### 2. Usa Comandos para Rutinas
- `/inicio` al empezar
- `/blog` los martes
- `/metricas` los viernes

### 3. Deja que Claude Elija el Agente
No necesitas especificar el agente. Di que queres y Claude elige el mejor.

### 4. Combina Herramientas
"Usa Notion para obtener los ultimos leads y crea un reporte con graficos"

### 5. Pedi Paralelismo
"Crea 3 versiones de este post en paralelo"
Claude lanzara multiples agentes simultaneamente.

---

## 8. Resolucion de Problemas

### "No encuentro X en el codigo"
```
"Explora el codebase y encuentra donde se maneja X"
```
Claude usa el agente `Explore`.

### "No se como implementar X"
```
"Planifica como implementar X"
```
Claude usa el agente `Plan`.

### "El skill no se ejecuta"
Intenta invocarlo directamente:
```
/nombre-del-skill
```

### "El MCP no responde"
Verifica la configuracion en `~/.mcp.json` y reinicia Claude Code.

---

## 9. Listado Completo de Skills

### Por Categoria

**SEO y Marketing (25):**
seo-audit, seo-meta, schema-markup, copywriting, copy-editing, email-sequence, marketing-psychology, content-strategy, social-content, analytics-tracking, ab-test-setup, competitor-alternatives, form-cro, free-tool-strategy, launch-strategy, marketing-ideas, onboarding-cro, page-cro, paid-ads, paywall-upgrade-cro, popup-cro, pricing-strategy, product-marketing-context, programmatic-seo, referral-program, signup-flow-cro

**Desarrollo (50+):**
next-best-practices, next-cache-components, next-upgrade, nextjs, tailwind-patterns, tailwind-v4-shadcn, accessibility, react-email, react-hook-form-zod, tanstack-query, tanstack-router, tanstack-table, zustand-state-management, testing-patterns, typescript-mcp, fastapi, flask, django-cloud-sql-postgres, hono-routing, electron-base, responsive-images, favicon-gen, icon-design, color-palette, image-gen, motion, auto-animate

**n8n (6):**
n8n-code-javascript, n8n-code-python, n8n-expression-syntax, n8n-mcp-tools-expert, n8n-node-configuration, n8n-validation-expert, n8n-workflow-patterns

**Cloudflare (17):**
cloudflare-agents, cloudflare-browser-rendering, cloudflare-d1, cloudflare-durable-objects, cloudflare-hyperdrive, cloudflare-images, cloudflare-kv, cloudflare-mcp-server, cloudflare-python-workers, cloudflare-queues, cloudflare-r2, cloudflare-turnstile, cloudflare-vectorize, cloudflare-worker-base, cloudflare-workers-ai, cloudflare-workflows

**IA y APIs (15):**
ai-sdk-core, ai-sdk-ui, claude-agent-sdk, claude-api, openai-agents, openai-api, openai-apps-mcp, openai-assistants, openai-responses, google-gemini-api, google-gemini-embeddings, google-gemini-file-search, elevenlabs-agents, fastmcp

**Autenticacion (5):**
clerk-auth, better-auth, firebase-auth, azure-auth, oauth-integrations

**Bases de Datos (5):**
firebase-firestore, firebase-storage, drizzle-orm-d1, neon-vercel-postgres, vercel-kv, vercel-blob

**Task Master (30+):**
tm:list, tm:next, tm:show, tm:add-task, tm:set-status, tm:expand, tm:update, etc.

---

*Ultima actualizacion: 4 Febrero 2026*
