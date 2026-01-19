# ModulorIA - Sitio Web

Sitio web oficial de ModulorIA construido con Next.js 14.

---

## Identificadores

| Recurso | Valor |
|---------|-------|
| Repositorio | `nicolasfarchica/moduloria-web` |
| Proyecto Vercel | `web` |
| Dominio | https://moduloria.com |

---

## Desarrollo

```bash
# Instalar dependencias
npm install

# Servidor desarrollo
npm run dev

# Build produccion
npm run build

# Verificar codigo
npm run lint
```

---

## Despliegue

### Automatico
```bash
git add .
git commit -m "descripcion"
git push origin main
```
Vercel despliega automaticamente cada push a main.

### Manual
```bash
npx vercel --prod
```

---

## Estructura

```
web/
├── src/
│   ├── app/              # Paginas (App Router)
│   │   ├── api/          # API Routes
│   │   ├── auditoria/    # Pagina formulario
│   │   └── page.tsx      # Homepage
│   ├── components/       # Componentes React
│   └── lib/              # Servicios (Notion, Resend)
├── public/images/        # Assets estaticos
└── tailwind.config.ts    # Configuracion Tailwind
```

---

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Vercel (hosting)
- Notion (CRM)
- Resend (emails)
- Google Analytics 4

---

## Variables de Entorno

Configuradas en Vercel Dashboard:

- `NOTION_API_KEY`
- `NOTION_DATABASE_ID`
- `RESEND_API_KEY`
- `NEXT_PUBLIC_GA_ID`

---

## Contacto

- Web: https://moduloria.com
- Email: nicolas@moduloria.com
