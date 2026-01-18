# Sesion 2026-01-18: Video Background en Hero Section

## Resumen

Se implemento un video de fondo en la seccion hero de la pagina principal de ModulorIA, reemplazando el fondo animado con gradientes por un video de construccion modular.

## Cambios Realizados

### 1. Video Background en Hero
- **Archivo modificado:** `web/src/components/HeroSection.tsx`
- **Cambio:** Se reemplazo el fondo con gradientes animados por un video MP4
- **Video:** `/videos/hero-video.mp4` (11MB, 1080p, H.264)
- **Overlay:** Se agrego un overlay oscuro (60% opacidad) para legibilidad del texto

### 2. Compresion del Video
- **Video original:** 83MB, 4K (3840x2160), 24 FPS
- **Video comprimido:** 11MB, 1080p (1920x1080), 30 FPS
- **Herramienta usada:** HandBrake con preset "Fast 1080p30"
- **Optimizaciones:** Web Optimized, H.264 codec

### 3. Archivos Nuevos
- `web/public/videos/hero-video.mp4` - Video comprimido para web

## Backup y Seguridad

Se creo un tag de backup antes de los cambios:
```bash
git tag: backup-before-hero-video
```

Para restaurar el estado anterior si es necesario:
```bash
git checkout backup-before-hero-video
```

## Commit

```
Commit: 81d4d90
Mensaje: feat(hero): add background video to hero section
```

## Deploy

- **Plataforma:** Vercel
- **URL:** https://web-khaki-eight-97.vercel.app
- **Estado:** Exitoso

## Verificacion

El video se reproduce correctamente en produccion:
- Autoplay funcional
- Loop continuo
- Sin audio (muted)
- Texto legible sobre el video
- Responsive en diferentes pantallas

## Notas Tecnicas

### Codigo del Video en HeroSection.tsx
```tsx
<video
  autoPlay
  loop
  muted
  playsInline
  className="absolute inset-0 w-full h-full object-cover"
>
  <source src="/videos/hero-video.mp4" type="video/mp4" />
</video>

<div className="absolute inset-0 bg-black/60" />
```

### Consideraciones de Performance
- Video optimizado a 11MB para carga rapida
- Formato H.264 para maxima compatibilidad
- Web Optimized flag para streaming progresivo

## Herramientas Instaladas

Se instalo **HandBrake** para compresion de video:
- Ubicacion: `/Applications/HandBrake.app`
- Util para futuras compresiones de video/media

---

## Problema Detectado: Dominio moduloria.com

### Descripcion del Problema
El video funcionaba correctamente en `web-khaki-eight-97.vercel.app` pero NO en `moduloria.com`.

### Causa Raiz
Existian **dos proyectos separados** en Vercel:
1. **`web`** - Proyecto correcto con el video implementado
2. **`moduloria-web`** - Proyecto antiguo sin el video

El dominio `moduloria.com` estaba apuntando al proyecto incorrecto (`moduloria-web`).

### Solucion Aplicada

1. **Redireccion del dominio:**
```bash
npx vercel alias set web-obdrk1y93-nicolasfarchicas-projects.vercel.app moduloria.com
```

2. **Eliminacion del proyecto duplicado:**
```bash
npx vercel rm moduloria-web --yes
```

### Resultado
- El dominio `moduloria.com` ahora apunta correctamente al proyecto `web`
- Solo existe un proyecto en Vercel, evitando confusiones futuras
- Video funcionando correctamente en produccion

---

## Verificacion Completa del Sistema

### 1. Video Hero
- ✅ Video reproduciendose en moduloria.com
- ✅ Autoplay, loop, muted funcionando
- ✅ Overlay oscuro para legibilidad

### 2. Formulario de Auditoria
- ✅ Formulario accesible en /auditoria
- ✅ Validacion de campos funcionando
- ✅ Envio exitoso a Notion (pageId retornado)
- ✅ Mensaje de confirmacion personalizado
- ✅ Emails de confirmacion configurados

### 3. Integracion Notion
- ✅ API conectada correctamente
- ✅ Leads guardados en base de datos
- ✅ Campos mapeados correctamente

### 4. Configuracion Vercel
- ✅ Un solo proyecto (`web`)
- ✅ Dominio moduloria.com configurado
- ✅ Variables de entorno activas (NOTION_API_KEY, RESEND_API_KEY, etc.)

---

## Leccion Aprendida

**Problema:** Tener multiples proyectos Vercel apuntando al mismo repositorio puede causar confusion cuando los dominios se configuran incorrectamente.

**Solucion:** Mantener un unico proyecto Vercel por repositorio y verificar siempre que el dominio personalizado apunte al proyecto correcto.

**Prevencion futura:**
- Antes de cualquier deploy, verificar en que proyecto se esta trabajando
- Eliminar proyectos duplicados innecesarios
- Documentar la configuracion de dominios

---

*Documentado: 2026-01-18*
*Actualizado: 2026-01-18 (Fix dominio + verificacion)*
