# ModulorIA

> Consultoria de IA Aplicada a Construccion Modular e Industrializada

---

## Identificadores del Proyecto

| Recurso | Valor |
|---------|-------|
| **Repositorio** | `nicolasfarchica/moduloria-web` |
| **Proyecto Vercel** | `web` en `nicolasfarchicas-projects` |
| **Dominio** | https://moduloria.com |
| **Google Analytics** | `G-EK62LC6D3D` |

---

## Inicio Rapido

```bash
# Clonar repositorio
git clone https://github.com/nicolasfarchica/moduloria-web.git
cd moduloria-web

# Ir al directorio web
cd web

# Instalar dependencias
npm install

# Desarrollo local
npm run dev

# Abrir: http://localhost:3000
```

---

## Estructura del Proyecto

```
ModulorIA/
├── web/                    # Aplicacion Next.js (desplegada en Vercel)
│   ├── src/app/           # Paginas
│   ├── src/components/    # Componentes React
│   ├── src/lib/           # Servicios (Notion, Resend)
│   └── public/images/     # Assets
├── docs/                   # Documentacion
│   ├── ESTRUCTURA-PROYECTO.md   # Arquitectura completa
│   ├── estrategia/        # Estrategia de negocio
│   ├── puntos-de-dolor/   # 25 oportunidades catalogadas
│   └── diseno-web/        # Especificaciones de diseno
├── content_repository/     # Contenido LinkedIn
├── .taskmaster/            # Task Master AI
└── CLAUDE.md              # Instrucciones para Claude Code
```

---

## Stack Tecnologico

| Categoria | Tecnologia |
|-----------|------------|
| Framework | Next.js 14 (App Router) |
| Lenguaje | TypeScript |
| Estilos | Tailwind CSS |
| Hosting | Vercel |
| CRM | Notion |
| Email | Resend |
| Analytics | Google Analytics 4 |

---

## Despliegue

### Automatico (cada push a main)
```bash
git add .
git commit -m "descripcion"
git push origin main
# Vercel despliega automaticamente
```

### Manual
```bash
cd web
npx vercel --prod
```

---

## Comandos Utiles

### Desarrollo
```bash
cd web
npm run dev      # Servidor desarrollo
npm run build    # Build produccion
npm run lint     # Verificar codigo
```

### Task Master
```bash
task-master list                              # Ver tareas
task-master next                              # Siguiente tarea
task-master set-status --id=X --status=done   # Completar
```

---

## Documentacion

| Documento | Descripcion |
|-----------|-------------|
| `CLAUDE.md` | Instrucciones para Claude Code |
| `docs/ESTRUCTURA-PROYECTO.md` | Arquitectura y configuracion completa |
| `docs/puntos-de-dolor/` | 25 oportunidades de automatizacion |
| `docs/estrategia/` | Propuesta de valor, arquetipos, roadmap |

---

## Contacto

**Nicolas Farchica** - Fundador

- Web: https://moduloria.com
- LinkedIn: https://linkedin.com/in/nicolasfarchica
- Email: nicolas@moduloria.com

---

Privado - ModulorIA 2026
