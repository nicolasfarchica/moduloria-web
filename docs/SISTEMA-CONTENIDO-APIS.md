# Sistema de Contenido ModulorIA - Configuración de APIs

> **IMPORTANTE**: Este archivo contiene credenciales sensibles. No compartir públicamente.
> Fecha de configuración: 27 de enero 2026

---

## APIs Conectadas

### 1. Gamma API (Carruseles y Presentaciones)

| Campo | Valor |
|-------|-------|
| **API Key** | `sk-gamma-50NBokixacqakK7fKia2YnAzoWtMbirdfsBOZCe44o` |
| **Tema ModulorIA ID** | `s33hkd4f2v6eeow` |
| **Documentación** | https://developers.gamma.app/docs/getting-started |
| **Endpoint principal** | `POST https://public-api.gamma.app/v1.0/generations` |

#### Ejemplo de uso:
```bash
curl -X POST 'https://public-api.gamma.app/v1.0/generations' \
  -H 'X-API-KEY: sk-gamma-50NBokixacqakK7fKia2YnAzoWtMbirdfsBOZCe44o' \
  -H 'Content-Type: application/json' \
  -d '{
    "inputText": "# Título\nContenido...",
    "textMode": "preserve",
    "format": "social",
    "themeId": "s33hkd4f2v6eeow",
    "cardSplit": "inputTextBreaks",
    "cardOptions": {
      "dimensions": "4x5"
    }
  }'
```

---

### 2. Freepik API (Generación de Imágenes con IA)

| Campo | Valor |
|-------|-------|
| **API Key** | `FPSXed11dd01a2f1110bab3ffffc54c34b2a` |
| **Plan** | Premium (cuenta paga) |
| **Documentación** | https://docs.freepik.com/api-reference/mystic/post-mystic |
| **Endpoint principal** | `POST https://api.freepik.com/v1/ai/text-to-image` |

#### Modelos disponibles:
- `realism` - Imágenes fotorealistas
- `super_real` - Máximo realismo
- `flux-realism` - Alta calidad
- `mystic` - Creativo

#### Ejemplo de uso:
```bash
curl -X POST 'https://api.freepik.com/v1/ai/text-to-image' \
  -H 'x-freepik-api-key: FPSXed11dd01a2f1110bab3ffffc54c34b2a' \
  -H 'Content-Type: application/json' \
  -d '{
    "prompt": "modern modular construction factory, dark blue and copper gold tones",
    "num_images": 1,
    "image": {
      "size": "square"
    }
  }'
```

---

## Tema ModulorIA (Gamma)

### Colores oficiales:
| Elemento | HEX |
|----------|-----|
| Background Primary | `#1a1f36` |
| Background Secondary | `#252b45` |
| Accent (dorado/cobre) | `#d4a574` |
| Text on Dark | `#FFFFFF` |
| Heading Color | `#FFFFFF` |

### Logo:
- Archivo: `moduloria-logo-circular.png`
- Incluido en el tema de Gamma

---

## Flujo de Trabajo Automatizado

```
┌─────────────────────────────────────────────────────────────┐
│            SISTEMA MODULORIA CONTENT                        │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ENTRADA: "Necesito post sobre [tema]"                      │
│                                                             │
│  PROCESO:                                                   │
│    1. Claude genera contenido estructurado                  │
│    2. Freepik API genera imágenes de fondo                  │
│    3. Gamma API crea carrusel con tema ModulorIA            │
│                                                             │
│  SALIDA: Link a carrusel listo para exportar                │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Archivos Relacionados

```
ModulorIA/
├── docs/
│   └── SISTEMA-CONTENIDO-APIS.md  (este archivo)
├── web/public/images/social/
│   ├── CALENDARIO-EDITORIAL.md
│   ├── GUIA-MARCA-REDES.md
│   └── posts/
│       └── post-01-presentacion/
│           ├── README.md
│           ├── COPY-INSTAGRAM.md
│           ├── COPY-FACEBOOK.md
│           └── COPY-LINKEDIN.md
```

---

## Carruseles Generados

| Fecha | Post | Tema | URL Gamma |
|-------|------|------|-----------|
| 2026-01-27 | Post 01 Presentación (v1 - sin tema) | default | https://gamma.app/docs/hbsb4eca4gqxscu |
| 2026-01-27 | Post 01 Presentación (v2 - Aurum) | aurum | https://gamma.app/docs/0niceld8qda1ikd |
| 2026-01-27 | Post 01 Presentación (v3 - ModulorIA) | ModulorIA | https://gamma.app/docs/rfoee3b6rwvodvf |

---

## Notas Importantes

1. **Gamma**: Los créditos se descuentan por generación (~35-45 créditos por carrusel)
2. **Freepik**: Los créditos de generación de imágenes están incluidos en el plan Premium
3. **Tema ModulorIA**: Ya está guardado en Gamma con ID `s33hkd4f2v6eeow`
4. **Logo**: Está incluido en el tema, aparece automáticamente

---

## Contacto y Soporte

- **Gamma**: https://gamma.app
- **Freepik**: https://freepik.com
- **Documentación Gamma API**: https://developers.gamma.app
- **Documentación Freepik API**: https://docs.freepik.com
