# ModulorIA - Estructura del Proyecto

> Documentacion oficial de la arquitectura, configuracion y despliegue.
> Ultima actualizacion: 2026-01-19

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
| **Notion Database** | `6c35249b61994f2cad00b8266ea0a85f` | Notion interno |

---

## Estructura de Directorios

```
/Users/nicolasfarchica/Desktop/ModulorIA/
│
├── web/                              # APLICACION NEXT.JS
│   ├── src/
│   │   ├── app/                      # Paginas (App Router Next.js 14)
│   │   │   ├── api/auditoria/        # API del formulario
│   │   │   ├── auditoria/            # Pagina de auditoria gratuita
│   │   │   ├── layout.tsx            # Layout global + Analytics
│   │   │   └── page.tsx              # Homepage
│   │   ├── components/               # Componentes React
│   │   │   ├── Hero.tsx              # Seccion hero con video
│   │   │   ├── Header.tsx            # Navegacion
│   │   │   └── ...
│   │   └── lib/                      # Servicios y utilidades
│   │       ├── notion.ts             # Integracion Notion API
│   │       └── resend.ts             # Envio de emails
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

## Variables de Entorno (Vercel Dashboard)

Estas variables estan configuradas en: https://vercel.com/nicolasfarchicas-projects/web/settings/environment-variables

| Variable | Proposito |
|----------|-----------|
| `NOTION_API_KEY` | Token de integracion Notion |
| `NOTION_DATABASE_ID` | ID de la base de datos de leads |
| `RESEND_API_KEY` | Token para envio de emails |
| `NEXT_PUBLIC_GA_ID` | ID de Google Analytics (G-EK62LC6D3D) |

---

## Integraciones

### 1. Formulario de Auditoria → Notion
- **Ruta**: `src/app/api/auditoria/route.ts`
- **Servicio**: `src/lib/notion.ts`
- **Funcion**: Guarda los datos del formulario en Notion

### 2. Email de Confirmacion → Resend
- **Ruta**: `src/app/api/auditoria/route.ts`
- **Servicio**: `src/lib/resend.ts`
- **Funcion**: Envia email de confirmacion al usuario

### 3. Analytics → Google Analytics 4
- **Archivo**: `src/app/layout.tsx`
- **ID**: `G-EK62LC6D3D`

---

## Flujo de Despliegue

### Opcion 1: Automatico (Recomendado)
```
1. git add .
2. git commit -m "descripcion del cambio"
3. git push origin main
4. Vercel despliega automaticamente
5. Verificar en https://moduloria.com (2-3 minutos)
```

### Opcion 2: Manual
```bash
cd /Users/nicolasfarchica/Desktop/ModulorIA/web
npx vercel --prod
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

### Formulario no guarda datos
1. Verificar `NOTION_API_KEY` en Vercel Dashboard
2. Verificar `NOTION_DATABASE_ID` en Vercel Dashboard
3. Revisar logs: https://vercel.com/nicolasfarchicas-projects/web/logs

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
