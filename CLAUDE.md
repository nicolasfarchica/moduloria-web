# CLAUDE.md - ModulorIA

## Identificadores del Proyecto

| Recurso | Valor |
|---------|-------|
| Repositorio | `nicolasfarchica/moduloria-web` |
| Proyecto Vercel | `web` en `nicolasfarchicas-projects` |
| Dominio | `moduloria.com` |
| Directorio local | `/Users/nicolasfarchica/Desktop/ModulorIA/web/` |

---

## Comandos de Desarrollo

```bash
# Directorio de trabajo
cd /Users/nicolasfarchica/Desktop/ModulorIA/web

# Desarrollo local
npm run dev          # localhost:3000

# Deploy a produccion (git push triggers Vercel auto-deploy)
git add <archivos> && git commit -m "mensaje" && git push origin main

# Deploy manual (DESDE LA RAIZ del repo, NO desde web/)
cd /Users/nicolasfarchica/Desktop/ModulorIA && npx vercel --prod

# Si el dominio no apunta al deployment correcto:
npx vercel ls                                          # Ver deployments
npx vercel alias <URL-DEPLOYMENT> moduloria.com        # Asignar dominio
```

---

## Estructura

```
ModulorIA/
├── web/                    # Aplicacion Next.js (se despliega)
│   ├── src/app/           # Paginas
│   ├── src/components/    # Componentes
│   ├── src/lib/           # Servicios (Notion, Resend)
│   └── public/images/     # Assets
├── docs/                   # Documentacion
└── .taskmaster/            # Task Master AI
```

Ver documentacion completa: `docs/ESTRUCTURA-PROYECTO.md`

---

## Archivos Clave

| Archivo | Funcion |
|---------|---------|
| `src/app/page.tsx` | Homepage |
| `src/app/layout.tsx` | Layout + Analytics |
| `src/app/api/auditoria/route.ts` | API formulario |
| `src/lib/notion.ts` | Integracion Notion |
| `src/components/Hero.tsx` | Hero con video |

---

## Variables de Entorno (Vercel)

- `NOTION_API_KEY` - Integracion Notion
- `NOTION_DATABASE_ID` - Base de datos leads
- `RESEND_API_KEY` - Envio emails
- `NEXT_PUBLIC_GA_ID` - Google Analytics (G-EK62LC6D3D)

---

## Reglas

1. **UN repositorio**: `nicolasfarchica/moduloria-web`
2. **UN proyecto Vercel**: `web` (Root Directory = `web`)
3. **UN dominio**: `moduloria.com` + `www.moduloria.com`
4. **NO modificar**: `.vercel/project.json`
5. **SIEMPRE trabajar desde**: `ModulorIA/web/`
6. **Git root es ModulorIA/**, no web/ - el .git esta en la raiz
7. **Deploy manual** requiere ejecutar desde `ModulorIA/` (raiz), NO desde `web/`

---

## Task Master AI

```bash
task-master list                              # Ver tareas
task-master next                              # Siguiente tarea
task-master set-status --id=X --status=done   # Completar tarea
```

---

## Enlaces

- Web: https://moduloria.com
- GitHub: https://github.com/nicolasfarchica/moduloria-web
- Vercel: https://vercel.com/nicolasfarchicas-projects/web
