# ModulorIA - Estructura del Proyecto

> Documentacion oficial de la arquitectura, configuracion y despliegue.
> Ultima actualizacion: 2026-01-23

---

## Identificadores Oficiales

| Recurso | Nombre/ID | URL |
|---------|-----------|-----|
| **Repositorio GitHub** | `nicolasfarchica/moduloria-web` | https://github.com/nicolasfarchica/moduloria-web |
| **Proyecto Vercel** | `web` | https://vercel.com/nicolasfarchicas-projects/web |
| **Vercel Project ID** | `prj_Q6EjRW39v4sj4FDVdgCnjGE30mPF` | - |
| **Vercel Team ID** | `team_DzMhXwqm1422mKnvBvbPz4I6` | - |
| **Dominio Produccion** | `moduloria.com` | https://moduloria.com |
| **Google Analytics** | `G-EK62LC6D3D` | https://analytics.google.com |
| **Notion - Leads** | `6c35249b61994f2cad00b8266ea0a85f` | Leads - ModulorIA |
| **Notion - Newsletter** | `1bf2788f3a7f45608f437a9280e0b691` | Suscriptores Newsletter |
| **Notion - Content** | `061483b8b89b48d0beece04cbefb2300` | Newsletter Content |

---

## Estructura de Directorios

```
/Users/nicolasfarchica/Desktop/ModulorIA/
│
├── web/                              # APLICACION NEXT.JS
│   ├── src/
│   │   ├── app/                      # Paginas (App Router Next.js 14)
│   │   │   ├── api/auditoria/        # API formulario auditoria → Leads
│   │   │   ├── api/newsletter/       # API suscripcion → Suscriptores Newsletter
│   │   │   ├── auditoria/            # Pagina de auditoria gratuita
│   │   │   ├── newsletter/           # Pagina de suscripcion newsletter
│   │   │   ├── layout.tsx            # Layout global + Analytics
│   │   │   └── page.tsx              # Homepage
│   │   ├── components/               # Componentes React
│   │   │   ├── Hero.tsx              # Seccion hero con video
│   │   │   ├── Header.tsx            # Navegacion
│   │   │   └── ...
│   │   └── lib/                      # Servicios y utilidades
│   │       ├── notion.ts             # Integracion Notion API
│   │       └── resend.ts             # Envio de emails
│   ├── src/content/blog/             # Articulos blog (Markdown)
│   │   ├── como-implementar-ia-construccion-modular.md  # PILLAR
│   │   ├── ocr-facturas-construccion-roi.md             # Cluster 1
│   │   ├── casos-exito-ia-construccion-espana.md        # Cluster 2
│   │   ├── chatbot-whatsapp-construccion.md             # Cluster 3
│   │   └── reportes-voz-construccion-ia.md              # Cluster 4
│   ├── public/images/blog/           # Hero images blog (JPEG optimizados)
│   ├── public/images/                # Assets estaticos
│   ├── .vercel/                      # Config Vercel (NO MODIFICAR)
│   ├── next.config.ts                # Configuracion Next.js
│   ├── tailwind.config.ts            # Configuracion Tailwind CSS
│   └── package.json                  # Dependencias
│
├── docs/                             # DOCUMENTACION
│   ├── ESTRUCTURA-PROYECTO.md        # Este archivo
│   ├── puntos-de-dolor/              # 37 problemas documentados (y creciendo)
│   │   ├── 00-INDICE-MAESTRO.md      # Indice principal con tiers
│   │   ├── 01-25 + 26,27,29,31,38,41,44-49  # Archivos individuales
│   │   └── README.md                 # Guia de uso
│   ├── investigacion/                # Fuentes de investigacion
│   │   ├── Investigacion Puntos de dolor VENTAS...
│   │   ├── Diagnóstico Operativo Integral...
│   │   └── [Informes consolidados y analisis]
│   ├── estrategia/                   # Estrategia de negocio
│   ├── diseno-web/                   # Wireframes y diseno
│   └── SESION-*.md                   # Notas de sesiones
│
├── content_repository/               # CONTENIDO LINKEDIN
│
├── .taskmaster/                      # TASK MASTER AI
│   ├── tasks/tasks.json              # Base de datos de tareas
│   └── docs/prd.txt                  # PRD del proyecto
│
├── n8n-workflows/                    # WORKFLOWS N8N
│   ├── 01-daily-content-collector.json  # Recolector diario RSS → Notion
│   └── 02-weekly-newsletter-sender.json # Envio semanal newsletter
│
├── CLAUDE.md                         # Instrucciones para Claude Code
└── .mcp.json                         # Configuracion MCP servers
```

---

## Stack Tecnologico

| Categoria | Tecnologia |
|-----------|------------|
| Framework | Next.js 14 (App Router) |
| Lenguaje | TypeScript |
| Estilos | Tailwind CSS |
| Hosting | Vercel |
| Formularios | Notion API |
| Emails | Resend |
| Analytics | Google Analytics 4 |

---

## SEO Tecnico (Implementado 23 ene 2026)

### Structured Data (JSON-LD)
| Schema | Pagina | Datos |
|--------|--------|-------|
| Organization | Homepage | Nombre, logo, contacto, redes sociales |
| Service | Homepage | Tipo servicio, area (Espana), ofertas |
| FAQPage | Homepage | 11 preguntas/respuestas |
| Article | Blog posts | headline, dates, author, publisher, mainEntityOfPage |
| FAQPage | Blog posts | Auto-extraido de seccion "Preguntas Frecuentes" |
| BreadcrumbList | Blog posts | Inicio > Blog > Titulo articulo |

### Optimizaciones por Pagina
| Elemento | Implementacion |
|----------|---------------|
| Canonical URLs | Todas las 15 paginas |
| OG/Twitter Cards | URLs absolutas en todas las paginas |
| Meta keywords | En todas las paginas |
| Next.js Image | Hero images blog (WebP, responsive, lazy) |
| Breadcrumbs visuales | Blog posts (nav + schema) |
| ISR | revalidate=3600 en blog |
| Sitemap dinamico | 15 URLs, prioridades configuradas |
| Robots.txt | Allow all, sitemap referenciado |

### Google Search Console
- **Propiedad:** https://moduloria.com/
- **Verificacion:** Meta tag (cd787c1f8c691567)
- **Paginas indexadas:** 15/15 (todas)
- **Sitemap:** Enviado y procesado

---

## Variables de Entorno (Vercel Dashboard)

Estas variables estan configuradas en: https://vercel.com/nicolasfarchicas-projects/web/settings/environment-variables

| Variable | Proposito |
|----------|-----------|
| `NOTION_API_KEY` | Token de integracion Notion |
| `NOTION_DATABASE_ID` | ID base de datos Leads - Auditoria |
| `NOTION_NEWSLETTER_DB_ID` | ID base de datos Suscriptores Newsletter |
| `RESEND_API_KEY` | Token para envio de emails |
| `NEXT_PUBLIC_GA_ID` | ID de Google Analytics (G-EK62LC6D3D) |

---

## Integraciones

### 1. Formulario de Auditoria → Notion (Leads)
- **Pagina**: `src/app/auditoria/page.tsx`
- **API**: `src/app/api/auditoria/route.ts`
- **Servicio**: `src/lib/notion.ts` → `createNotionLead()`
- **Base de datos**: Leads - ModulorIA
- **Campos**: Nombre, Email, Empresa, Telefono, Empleados, Proyectos Activos (opcional), Mayor Problema (opcional)

### 2. Formulario Newsletter → Notion (Suscriptores)
- **Pagina**: `src/app/newsletter/page.tsx`
- **API**: `src/app/api/newsletter/route.ts`
- **Servicio**: `src/lib/notion.ts` → `createNewsletterSubscription()`
- **Base de datos**: Suscriptores Newsletter
- **Campos**: Email (title), Nombre (opcional), Fecha Suscripcion, Activo, Source
- **Formulario alternativo**: Seccion Recursos en homepage (`RecursosSection.tsx`)

### 3. Emails Transaccionales → Resend
- **Servicio**: `src/lib/email.ts`
- **Funciones**:
  - `sendConfirmacionAuditoria()` - Email confirmacion auditoria
  - `sendNotificacionNuevoLead()` - Notificacion al equipo
  - `sendNewsletterWelcome()` - Bienvenida newsletter

### 4. Analytics → Google Analytics 4
- **Archivo**: `src/app/layout.tsx`
- **ID**: `G-EK62LC6D3D`

### 5. N8N Workflows

| Workflow | Archivo | Estado | Trigger |
|----------|---------|--------|---------|
| **Recolector Diario** | `01-daily-content-collector.json` | ACTIVO | Diario 8:00 AM |
| **Envio Newsletter** | `02-weekly-newsletter-sender.json` | PENDIENTE | Miercoles 9:00 AM |

**Workflow 1 - Recolector Diario (ACTIVO):**
- Fuentes RSS: Autodesk, Construction Dive, Offsite Hub, Modular Building Institute, BuiltWorlds, Procore
- AI filtra contenido relevante para construccion modular
- Guarda en Notion: Newsletter Content

**Workflow 2 - Envio Newsletter (PENDIENTE):**
- Lee contenido de Newsletter Content + Suscriptores activos
- AI genera contenido del newsletter
- Envia via Resend API
- Falta: Configurar credenciales Notion, OpenAI y Resend

---

## Flujo de Despliegue

### Opcion 1: Automatico via Git (Recomendado)
```bash
cd /Users/nicolasfarchica/Desktop/ModulorIA/web   # Directorio de trabajo
git add <archivos>
git commit -m "descripcion del cambio"
git push origin main
# Vercel despliega automaticamente en ~60 segundos
# Verificar: curl -sI https://moduloria.com | head -5
```

**Como funciona:**
1. El push llega a GitHub (`nicolasfarchica/moduloria-web`)
2. Vercel detecta el push y clona el repo
3. Vercel usa Root Directory = `web` para encontrar el Next.js app
4. Build: `npm run build` dentro de `web/`
5. Deployment automatico asignado a `moduloria.com`

### Opcion 2: Manual con CLI (desde raiz del repo)
```bash
# IMPORTANTE: Ejecutar desde la RAIZ del repo, NO desde web/
cd /Users/nicolasfarchica/Desktop/ModulorIA
npx vercel --prod
```

**Por que NO funciona desde `web/`:**
El proyecto Vercel tiene Root Directory = `web`. Si ejecutas `vercel --prod` desde dentro de `web/`, intenta buscar `web/web/` que no existe.

### Opcion 3: Forzar alias manual (si el dominio no apunta al deploy)
```bash
cd /Users/nicolasfarchica/Desktop/ModulorIA/web
# Ver deployments recientes
npx vercel ls
# Asignar el mas reciente al dominio
npx vercel alias <URL-DEL-DEPLOYMENT> moduloria.com
npx vercel alias <URL-DEL-DEPLOYMENT> www.moduloria.com
```

### Dominios Configurados
| Dominio | Tipo | Estado |
|---------|------|--------|
| `moduloria.com` | Principal | Activo (NS Vercel) |
| `www.moduloria.com` | Redirect | Activo (NS Vercel) |
| `web-khaki-eight-97.vercel.app` | Vercel default | Activo |

**Si los dominios se desvinculan del proyecto:**
```bash
cd /Users/nicolasfarchica/Desktop/ModulorIA/web
npx vercel domains add moduloria.com
npx vercel domains add www.moduloria.com
# Luego asignar alias al deployment mas reciente
```

---

## Solucion de Problemas

### Sitio redirige a pagina de login de Vercel
1. Ir a: https://vercel.com/nicolasfarchicas-projects/web/settings/deployment-protection
2. Desactivar "Vercel Authentication"
3. Ejecutar: `npx vercel alias moduloria.com`

### Cambios no se despliegan automaticamente
1. Ir a: https://vercel.com/nicolasfarchicas-projects/web/settings/git
2. Conectar repositorio: `nicolasfarchica/moduloria-web`
3. Production Branch: `main`

### Formulario Auditoria no guarda datos
1. Verificar `NOTION_API_KEY` en Vercel Dashboard
2. Verificar `NOTION_DATABASE_ID` en Vercel Dashboard
3. Revisar logs: https://vercel.com/nicolasfarchicas-projects/web/logs

### Newsletter va a base de datos incorrecta
1. Verificar `NOTION_NEWSLETTER_DB_ID` en Vercel Dashboard
2. Valor correcto: `1bf2788f3a7f45608f437a9280e0b691`
3. Verificar que la integracion Notion tenga acceso a "Suscriptores Newsletter"

### Dominio no muestra cambios recientes
El dominio `moduloria.com` puede quedar apuntando a un deployment viejo. Esto pasa cuando:
- El dominio se desvincula del proyecto
- Vercel no asigna automaticamente el alias

**Diagnostico:**
```bash
cd /Users/nicolasfarchica/Desktop/ModulorIA/web
# Verificar que el dominio esta asignado al proyecto
npx vercel domains ls
# Ver deployments recientes
npx vercel ls
# Inspeccionar aliases del deployment
npx vercel inspect <URL-DEL-DEPLOYMENT>
```

**Solucion rapida:**
```bash
npx vercel alias <URL-DEL-DEPLOYMENT> moduloria.com
npx vercel alias <URL-DEL-DEPLOYMENT> www.moduloria.com
```

**Solucion definitiva (re-agregar dominio al proyecto):**
```bash
npx vercel domains add moduloria.com
npx vercel domains add www.moduloria.com
# Los proximos deploys asignaran automaticamente
```

### Build local falla con "Missing API key" (Resend)
Esto es NORMAL al construir localmente. La API route `/api/auditoria` necesita `RESEND_API_KEY` que solo existe en Vercel. El build en Vercel funciona correctamente con las env vars configuradas.

---

## Reglas para Evitar Confusiones

1. **UN solo repositorio**: `nicolasfarchica/moduloria-web`
2. **UN solo proyecto Vercel**: `web` en `nicolasfarchicas-projects`
3. **UN solo dominio de produccion**: `moduloria.com`
4. **NO modificar manualmente**: `.vercel/project.json`
5. **NO crear repositorios adicionales** para el mismo proyecto
6. **SIEMPRE trabajar desde**: `/Users/nicolasfarchica/Desktop/ModulorIA/web/`

---

## Enlaces Rapidos

- **Sitio Web**: https://moduloria.com
- **GitHub**: https://github.com/nicolasfarchica/moduloria-web
- **Vercel Dashboard**: https://vercel.com/nicolasfarchicas-projects/web
- **Vercel Deployments**: https://vercel.com/nicolasfarchicas-projects/web/deployments
- **Vercel Settings**: https://vercel.com/nicolasfarchicas-projects/web/settings
- **Vercel Env Vars**: https://vercel.com/nicolasfarchicas-projects/web/settings/environment-variables
