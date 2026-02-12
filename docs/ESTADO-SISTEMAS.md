# ModulorIA - Estado de Sistemas

> Resumen ejecutivo de todos los sistemas implementados y pendientes
> Ultima actualizacion: 2026-02-07 (Optimizacion MCPs: 11 → 3 habilitados)

---

## Resumen Rapido

| Categoria | Implementado | Pendiente | Total |
|-----------|--------------|-----------|-------|
| Web/Frontend | 5 | 0 | 5 |
| APIs | 3 | 0 | 3 |
| Integraciones | 4 | 0 | 4 |
| Automatizaciones N8N | 2 | 1 | 3 |
| Blog SEO | 10 | 0 | 10 |
| MVPs/Productos | 0 | 2 | 2 |
| Redes Sociales | 1 | 0 | 1 |
| Claude MCPs | 3 | 10 (dormidos) | 13 |
| Claude Skills | 7 | 0 | 7 |
| **TOTAL** | **45** | **3** | **48** |

> **CHATBOT IA** - Operativo en produccion (GPT-4o-mini, streaming, edge runtime)
> **BLOG SEO** - 10/10 articulos publicados con imagenes optimizadas
> **SISTEMA NEWSLETTER 100% OPERATIVO** - Todos los componentes funcionando
> **BASE DE DATOS PROSPECTOS** - 100+ empresas en Espana segmentadas por ciudad
> **MVP SELECCIONADO** - #08 Tool Tracking QR (ROI 650%, especificacion tecnica completa)
> **EMAIL CLASSIFIER** - Especificacion completa, pendiente implementacion en N8N
> **REDES SOCIALES ACTIVAS** - LinkedIn, Facebook, Instagram con carruseles Gamma API
> **MCPs N8N** - n8n-mcp + 7 skills instalados (czlonkowski) para disenar workflows

---

## Sistemas IMPLEMENTADOS (Funcionando)

### 1. Website ModulorIA
| Sistema | URL | Estado |
|---------|-----|--------|
| Homepage | https://moduloria.com | ACTIVO |
| Pagina Auditoria | https://moduloria.com/auditoria | ACTIVO |
| Pagina Newsletter | https://moduloria.com/newsletter | ACTIVO |
| API Auditoria | https://moduloria.com/api/auditoria | ACTIVO |
| API Newsletter | https://moduloria.com/api/newsletter | ACTIVO |
| API Chatbot IA | https://moduloria.com/api/chat | ACTIVO |
| Chatbot Widget | Boton flotante en toda la web | ACTIVO |

### 2. Bases de Datos Notion
| Base de Datos | ID | Proposito | Estado |
|---------------|-----|-----------|--------|
| Leads - ModulorIA | `6c35249b61994f2cad00b8266ea0a85f` | Formulario auditoria | ACTIVO |
| Suscriptores Newsletter | `1bf2788f3a7f45608f437a9280e0b691` | Suscripciones newsletter | ACTIVO |
| Newsletter Content | `061483b8b89b48d0beece04cbefb2300` | Articulos recolectados por N8N | ACTIVO |
| Clientes Potenciales | `2dedd4a5-2f43-814e-a483-000bdd6f932e` | 100+ prospectos Espana | ACTIVO |

### 3. Emails Transaccionales (Resend)
| Email | Trigger | Estado |
|-------|---------|--------|
| Confirmacion Auditoria | Formulario auditoria enviado | ACTIVO |
| Notificacion Nuevo Lead | Formulario auditoria enviado | ACTIVO |
| Bienvenida Newsletter | Suscripcion newsletter | ACTIVO |

### 4. Analytics
| Sistema | ID | Estado |
|---------|-----|--------|
| Google Analytics 4 | `G-EK62LC6D3D` | ACTIVO |

### 5. Chatbot IA
| Parametro | Valor |
|-----------|-------|
| Modelo | GPT-4o-mini (OpenAI) |
| Runtime | Edge (Vercel) |
| API Key Name | `moduloria-chatbot-web` |
| Endpoint | /api/chat (POST, streaming) |
| Costo | ~$2 USD / 1000 conversaciones |
| Documentacion | `docs/SESION-2026-01-23-chatbot-ia.md` |

### 6. Automatizaciones N8N
| Workflow | Trigger | Estado |
|----------|---------|--------|
| Recolector Diario de Contenido | Diario 8:00 AM | ACTIVO |
| Envio Newsletter Semanal | Miercoles 9:00 AM | ACTIVO |

### 7. Blog SEO (Estrategia Contenido Organico)
| Articulo | Slug | KD | Estado | Fecha |
|----------|------|----|--------|-------|
| OCR Facturas Construccion ROI | ocr-facturas-construccion-roi | 5 | PUBLICADO | 22-ene |
| 10 Casos Exito IA Construccion | casos-exito-ia-construccion-espana | 5 | PUBLICADO | 23-ene |
| Chatbot WhatsApp Construccion | chatbot-whatsapp-construccion | 8 | PUBLICADO | 23-ene |
| IA Construccion Modular (PILLAR) | como-implementar-ia-construccion-modular | 18 | PUBLICADO | 27-ene |
| Reportes Obra con IA de Voz | reportes-voz-construccion-ia | 8 | PUBLICADO | 27-ene |
| 5 Tareas Automatizar Constructora | 5-tareas-automatizar-constructora-modular | 12 | PUBLICADO | 28-ene |
| Por Que Pierden Dinero Tareas Manuales | por-que-constructoras-modulares-pierden-dinero-tareas-manuales | 10 | PUBLICADO | 04-feb |
| OCR Facturas 15 Min a 30 Seg | ocr-facturas-constructora-15-minutos-30-segundos | 5 | PUBLICADO | 11-feb |
| Reportes Automaticos Obra | reportes-automaticos-obra-minutos-no-horas | 8 | PUBLICADO | 18-feb |
| Chatbots Construccion 24/7 | chatbot-construccion-modular-responder-24-7 | 8 | PUBLICADO | 25-feb |

**Indexacion Google Search Console (verificado 25-ene-2026):**
| URL | Estado |
|-----|--------|
| /blog/ocr-facturas-construccion-roi | INDEXADO |
| /blog/casos-exito-ia-construccion-espana | INDEXADO |
| /blog/chatbot-whatsapp-construccion | INDEXADO |
| /blog/como-implementar-ia-construccion-modular | INDEXADO |
| /blog/reportes-voz-construccion-ia | INDEXADO |
| /blog/5-tareas-automatizar-constructora-modular | INDEXADO |
| /blog/por-que-constructoras-modulares-pierden-dinero-tareas-manuales | INDEXADO |
| /blog/ocr-facturas-constructora-15-minutos-30-segundos | INDEXADO |
| /blog/reportes-automaticos-obra-minutos-no-horas | INDEXADO |
| /blog/chatbot-construccion-modular-responder-24-7 | INDEXADO |

> Todas las URLs del blog estan indexadas en Google Search Console al 25 de enero 2026.

**Infraestructura blog:**
- Directorio: `src/content/blog/` (markdown con frontmatter)
- Libreria: gray-matter + remark + remark-gfm + remark-html
- ISR: revalidate = 3600 (1 hora)
- Sitemap: dinamico, incluye posts automaticamente
- SEO: metadata, structured data JSON-LD, canonical URLs
- Pagina listado: `/recursos` (blog grid + newsletter + diagnostico CTA)

**Documentacion:**
- `docs/research/SEO-PLAN-EJECUCION-NICOLAS.md` - Plan completo 5 articulos
- `docs/research/keywords-master-list.md` - 50+ keywords
- `docs/SESION-2026-01-23-blog-deploy.md` - Registro deploy
- `docs/PLAN-SEMANAL-ENERO-FEBRERO-2026.md` - Planificacion detallada semanas 2-6

### 8. MVP Strategy (Documentado)

**MVP Seleccionado:** #08 Tool Tracking QR
| Parametro | Valor |
|-----------|-------|
| Problema | Herramientas perdidas/buscadas en obras |
| Ahorro mensual | €5,200-10,400 |
| ROI | 650% |
| Implementacion | 1-2 semanas |
| Costo operativo | €30/mes |
| Stack | QR + WhatsApp + N8N + Airtable |
| Documentacion | `docs/mvp/MVP-SELECCION-ESPECIFICACION.md` |

**Email Classifier (Add-on):**
| Parametro | Valor |
|-----------|-------|
| Problema | Tiempo perdido clasificando/respondiendo emails |
| Ahorro mensual | €600-1,200 |
| ROI | 1,000% |
| Implementacion | 3-5 dias |
| Stack | IMAP + N8N + OpenAI + Notion |
| Estado | Especificacion completa, pendiente construir en N8N |
| Documentacion | `docs/mvp/EMAIL-CLASSIFIER-SPEC.md` |

---

## Sistemas PENDIENTES

### Sistema de Redes Sociales

**Estado:** ACTIVO - Publicando en 3 plataformas

| Plataforma | Estado | Perfil |
|------------|--------|--------|
| LinkedIn | ✅ ACTIVO | ModulorIA + Nicolas personal |
| Facebook | ✅ ACTIVO | Pagina ModulorIA |
| Instagram | ✅ ACTIVO | @moduloria |

**Formatos por plataforma (IMPORTANTE):**

| Plataforma | Formato | Dimensiones | Parametro Gamma |
|------------|---------|-------------|-----------------|
| LinkedIn | 4:5 vertical | 1080x1350 | `"dimensions": "4x5"` |
| Facebook | 4:5 vertical | 1080x1350 | `"dimensions": "4x5"` |
| Instagram | 1:1 cuadrado | 1080x1080 | `"dimensions": "1x1"` |

> **LinkedIn y Facebook comparten el mismo archivo.**
> **Instagram SIEMPRE necesita version cuadrada separada.**

**Publicaciones realizadas:**
- 10 feb 2026: "Espana mercado clave construccion modular Europa" - Noticia/Industria (carrusel 6 slides, 3 redes)
- 9 feb 2026: "Stack 3 herramientas IA diarias" - Behind the scenes (carrusel 6 slides, 3 redes)
- 8 feb 2026: "70% del software no se usa" - Autoridad (carrusel 6 slides, 3 redes)
- 6 feb 2026: Claude Opus 4.6 - Thought leadership (carrusel 5 slides, LinkedIn personal)
- 6 feb 2026: 3 senales de que necesitas automatizar (carrusel 5 slides, 3 redes)
- 4 feb 2026: Investigar sector con IA (carrusel 8 slides)
- 3 feb 2026: Dato edificacion industrializada 2%
- 2 feb 2026: Historia personal IA (2 anos, 1 portatil)
- Posts anteriores: OCR Facturas, 11 de la noche, IA no reemplaza equipo

**Cadencia actual:** DIARIA (desde 8 feb 2026) - Plan semanal en docs/contenido/PLAN-DIARIO-SEMANA-09-15-FEB.md

**Documentacion disponible:**
- `docs/contenido/2026-02-08-post-domingo.md` - Ultimo post
- `docs/estrategia/pilares-contenido.md` - Pilares de contenido
- `docs/templates/carrusel-*.md` - 4 templates de carrusel
- `docs/workflows/sesion-batching-contenido.md` - Checklist batching

**Stack completo:**
- Gamma API (carruseles automatizados) - Tema ModulorIA ID: `s33hkd4f2v6eeow`
- FreePik API (imagenes IA)
- Claude (estrategia, redaccion, analisis)

**Filosofia:** "Crear 1 vez, distribuir en 3 plataformas" - Gamma genera ambos formatos

---

## Arquitectura del Sistema Newsletter Completo

```
                    RECOLECCION (Diario 8:00 AM)
                    ===========================

[RSS Feeds] ─────────────────────────────────────────┐
  - Autodesk Construction                            │
  - Construction Dive                                │
  - Offsite Hub                                      ├──> [N8N Workflow 1]
  - Modular Building Institute                       │         │
  - BuiltWorlds                                      │         v
  - Procore Blog                                     │    [AI Filtra]
                                                     │         │
                                                     │         v
                                                     └──> [Notion: Newsletter Content]

                    SUSCRIPCION (Tiempo Real)
                    =========================

[Usuario] ──> [moduloria.com/newsletter] ──> [API Newsletter]
                                                    │
                                                    ├──> [Notion: Suscriptores]
                                                    │
                                                    └──> [Email Bienvenida]

                    ENVIO (Miercoles 9:00 AM) - ACTIVO
                    ====================================

[N8N Workflow 2] ──> [Leer Contenido] + [Leer Suscriptores]
        │                    │
        v                    v
   [Merge: Append] <─────────┘
        │
        v
   [Preparar Datos] ──> Separa articulos y suscriptores
        │
        v
   [AI Genera Newsletter] ──> GPT-4o genera contenido personalizado
        │
        v
   [Aplicar Template HTML]
        │
        v
   [Enviar via Resend] ──> Loop por cada suscriptor
        │
        v
   [Obtener IDs] ──> Extrae IDs de articulos
        │
        v
   [Marcar como Usado] ──> HTTP Request a Notion API
```

---

## Variables de Entorno

### Vercel (Produccion)
| Variable | Configurada |
|----------|-------------|
| `NOTION_API_KEY` | SI |
| `NOTION_DATABASE_ID` | SI |
| `NOTION_NEWSLETTER_DB_ID` | SI |
| `RESEND_API_KEY` | SI |
| `NEXT_PUBLIC_GA_ID` | SI |

### N8N (Credenciales)
| Credencial | Tipo | Configurada |
|------------|------|-------------|
| ModulorIA N8N | Notion API | SI |
| OpenAI | OpenAI API | SI |
| Resend API Key | Header Auth | SI |
| Notion API Key | Header Auth | SI (para HTTP Request) |

### Claude Code MCPs (Optimizado 7-feb-2026)

> Se redujo de 11 MCPs a 3 habilitados para bajar consumo de tokens (~78K a ~20-25K).
> Herramientas nativas de Claude Code reemplazan los MCPs deshabilitados.
> Backup y rollback documentados en memoria persistente de Claude Code.

**Habilitados (3 a nivel proyecto):**
| MCP | Funcion | Estado |
|-----|---------|--------|
| github | Operaciones GitHub (PRs, issues, code) | ACTIVO |
| context7 | Documentacion librerias (Next.js, Tailwind, React) | ACTIVO |
| playwright | Automatizacion browser y testing web | ACTIVO |

**Deshabilitados (reactivables si se necesitan):**
| MCP | Razon de desactivacion | Reemplazo |
|-----|------------------------|-----------|
| filesystem | Redundante | Read/Write/Glob/Edit nativos |
| memory | Redundante | Auto-memory de Claude Code |
| notion | Duplicado | claude_ai_Notion built-in |
| brave-search | Redundante | WebSearch nativo |
| fetch | Redundante | WebFetch nativo |
| markitdown | Nunca usado | - |
| task-master-ai | Dormido (0 in-progress) | CLI `task-master` disponible |
| n8n-mcp | Bajo uso actual | Reactivar al disenar workflows |
| n8n-server | Bajo uso actual | Reactivar al disenar workflows |
| sequential-thinking | Bajo impacto | Razonamiento nativo de Claude |

**Como reactivar un MCP:**
1. Editar `~/.claude/settings.local.json`
2. Mover nombre de `disabledMcpjsonServers` a `enabledMcpjsonServers`
3. Reiniciar Claude Code

### Claude Code Skills (Instalados en ~/.claude/skills/)
| Skill | Funcion | Estado |
|-------|---------|--------|
| n8n-expression-syntax | Patrones `{{}}`, variables `$json/$node` | ACTIVO |
| n8n-mcp-tools-expert | Seleccion correcta de herramientas MCP | ACTIVO |
| n8n-workflow-patterns | 5 patrones arquitectonicos, 2,653+ ejemplos | ACTIVO |
| n8n-validation-expert | Interpretar y arreglar errores N8N | ACTIVO |
| n8n-node-configuration | Configuracion por operacion | ACTIVO |
| n8n-code-javascript | Funciones `$helpers`, 10 patrones produccion | ACTIVO |
| n8n-code-python | Referencia Python con limitaciones | ACTIVO |

> **Instalacion 25-ene-2026:** n8n-mcp + n8n-skills (czlonkowski) + n8n-server (leonardsellem)
> **Repositorios:**
> - github.com/czlonkowski/n8n-mcp (documentacion nodos)
> - github.com/czlonkowski/n8n-skills (skills para Claude)
> - github.com/leonardsellem/n8n-mcp-server (conexion directa API)

---

## Flujos de Usuario Activos

### Flujo 1: Solicitud de Auditoria
```
Usuario visita /auditoria
    ↓
Completa formulario (7 campos)
    ↓
POST /api/auditoria
    ↓
Guarda en Notion (Leads)
    ↓
Envia email confirmacion al usuario
    ↓
Envia notificacion al equipo
```

### Flujo 2: Suscripcion Newsletter
```
Usuario visita /newsletter o seccion Recursos
    ↓
Ingresa email (nombre opcional)
    ↓
POST /api/newsletter
    ↓
Guarda en Notion (Suscriptores)
    ↓
Envia email de bienvenida
```

### Flujo 3: Recoleccion de Contenido (Automatico)
```
Trigger diario 8:00 AM
    ↓
Lee 6 fuentes RSS
    ↓
AI filtra por relevancia (construccion modular)
    ↓
Guarda max 4 articulos en Notion (Newsletter Content)
```

### Flujo 4: Envio Newsletter (ACTIVO)
```
Trigger miercoles 9:00 AM
    ↓
Lee articulos no usados de Notion (Usado = false)
    ↓
Lee suscriptores activos (Activo = true)
    ↓
Merge: Append (mantiene items separados)
    ↓
Preparar Datos (separa por tipo de item)
    ↓
AI genera contenido personalizado (GPT-4o)
    ↓
Aplica template HTML con branding ModulorIA
    ↓
Envia email a cada suscriptor via Resend
    ↓
Marca articulos como usados (HTTP Request a Notion)
```

---

## Historial de Sesiones

| Fecha | Tema | Documentacion |
|-------|------|---------------|
| 2026-01-19 | Setup inicial | `docs/SESION-2026-01-19.md` |
| 2026-01-21 | Sistema Newsletter (Web) | `docs/SESION-2026-01-21-newsletter.md` |
| 2026-01-22 AM | Workflows N8N (Workflow 1) | `docs/SESION-2026-01-22-n8n-workflows.md` |
| 2026-01-22 PM | Workflow 2 completado | `docs/SESION-2026-01-22-n8n-workflows.md` |
| 2026-01-22 PM | Sistema Redes Sociales | `docs/SESION-2026-01-22-redes-sociales.md` |
| 2026-01-22 PM | Estrategia Blog SEO | `docs/SESION-2026-01-22-blog-seo.md` |
| 2026-01-23 AM | Blog deploy + /recursos overhaul | `docs/SESION-2026-01-23-blog-deploy.md` |
| 2026-01-23 PM | Chatbot IA implementado | `docs/SESION-2026-01-23-chatbot-ia.md` |
| 2026-01-23 PM | MVP Selection completado | `docs/mvp/MVP-SELECCION-ESPECIFICACION.md` |
| 2026-01-23 PM | Email Classifier especificado | `docs/mvp/EMAIL-CLASSIFIER-SPEC.md` |
| 2026-01-25 | Reflexion proyecto + MCPs N8N | `docs/SESION-2026-01-25-reflexion-proyecto.md` |

---

## Proximas Tareas

### Semana 2 (27 ene - 2 feb) - Blog SEO
1. **Escribir** Articulo 4: PILLAR "IA Construccion Modular" (4,500 palabras, reescribir filler)
2. **Escribir** Articulo 5: "Reportes Obra con IA de Voz" (2,100 palabras)
3. **Submit** articulos 1-3 a Google Search Console (Request Indexing)
4. **Monitorear** newsletter miercoles (incluir articulos nuevos)

### Semana 3 (3-9 feb) - Consolidacion + Redes
5. **Actualizar** internal links en PILLAR (enlazar a todos los cluster articles)
6. **Crear** imagenes hero para los 5 articulos (Canva)
7. **Configurar** Metricool + LinkedIn
8. **Repurposing**: 3 articulos blog -> 5-6 posts LinkedIn

### Semana 4 (10-16 feb) - Expansion
9. **Revisar** metricas GSC (impresiones, clics, posiciones)
10. **Planificar** articulos 6-10 (siguientes keywords del plan)
11. **Crear** primer lead magnet PDF (Checklist OCR o ROI Calculator)
12. **Primera** sesion batching contenido LinkedIn

---

## Contacto y Recursos

- **Sitio Web**: https://moduloria.com
- **GitHub**: https://github.com/nicolasfarchica/moduloria-web
- **Vercel**: https://vercel.com/nicolasfarchicas-projects/web
- **N8N**: [Tu instancia de N8N]
