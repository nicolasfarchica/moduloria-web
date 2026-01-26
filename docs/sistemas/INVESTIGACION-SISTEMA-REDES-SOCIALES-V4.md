# Investigacion Profunda: Sistema de Contenido para Redes Sociales v4

## Fecha: 2026-01-25
## Objetivo: Disenar un sistema robusto, completo y a largo plazo

---

## 1. PATRONES DESCUBIERTOS EN TEMPLATES EXITOSOS

### 1.1 Generacion de Imagenes

| Metodo | Uso | Pros | Contras |
|--------|-----|------|---------|
| **DALL-E 3** | Imagenes unicas generadas por IA | Alta calidad, creativo | Costoso (~$0.04/imagen) |
| **GPT-Image-1** | Carruseles con texto | Texto legible en imagen | Nuevo, menos probado |
| **Edit Image Node** | Texto sobre plantillas | Control total, consistente | Requiere plantillas predefinidas |
| **Pollinations.ai** | Alternativa gratuita | Sin costo | Menor calidad |

**Recomendacion para ModulorIA:**
- LinkedIn Carruseles: Edit Image con plantillas de marca
- Instagram: DALL-E 3 para imagenes unicas
- Facebook: DALL-E 3 o reutilizar imagen de Instagram

### 1.2 Hosting de Imagenes

| Servicio | Caracteristicas | Costo |
|----------|-----------------|-------|
| **Cloudinary** | Transformaciones, CDN, optimizacion | Free tier generoso |
| **S3/R2** | Almacenamiento permanente | ~$0.023/GB |
| **imgbb.com** | Simple, rapido | Gratis |
| **Google Drive** | Integracion facil | Gratis con cuenta |

**Recomendacion:** Cloudinary para produccion (URLs permanentes, CDN, transformaciones)

### 1.3 Publicacion Multi-Plataforma

| Servicio | Plataformas | Caracteristicas |
|----------|-------------|-----------------|
| **upload-post.com** | IG, TikTok, X, LinkedIn, FB, Threads | API simple, carruseles |
| **Blotato** | Similar | Alternativa |
| **APIs Directas** | Cada plataforma | Maximo control, mas complejo |

**Hallazgo Clave:** upload-post.com simplifica enormemente la publicacion multi-plataforma con una sola API.

### 1.4 LinkedIn Carruseles - Patron Definitivo

Template 10900 revela el metodo correcto:

```
1. AI Agent genera contenido estructurado:
   - Titulo de cada slide
   - Texto de cada slide (maximo 7 palabras)

2. Google Drive almacena plantillas de marca (PNG/JPG)

3. Edit Image Node renderiza texto sobre plantilla:
   - Posicion X, Y configurables
   - Fuente, tamano, color
   - Multiples operaciones por imagen

4. S3/Cloudinary almacena imagenes finales

5. Merge combina todas las URLs

6. LinkedIn API publica como documento PDF o imagenes multiples
```

### 1.5 Instagram Carruseles - Patron Facebook Graph API

Template 4498 muestra el flujo completo:

```
1. Crear Container para cada imagen:
   POST /{ig-user-id}/media
   - image_url: URL publica de la imagen
   - is_carousel_item: true

2. Crear Container del Carrusel:
   POST /{ig-user-id}/media
   - media_type: CAROUSEL
   - children: [container_id_1, container_id_2, ...]
   - caption: texto del post

3. Publicar:
   POST /{ig-user-id}/media_publish
   - creation_id: carousel_container_id

4. Loop de verificacion de estado (para videos)
```

### 1.6 Flujos de Aprobacion

| Metodo | Template | Caracteristicas |
|--------|----------|-----------------|
| **Slack Interactive** | 4483, 4584 | Botones aprobar/rechazar/editar |
| **WhatsApp** | 4419 | Preview + aprobacion movil |
| **Email** | 3066, 2907 | Links de accion |
| **GoToHuman** | 6827 | Servicio especializado |
| **Notion** | Varios | Cambio de estado en DB |

**Recomendacion:** Usar Notion como hub central (ya lo tenemos configurado)

---

## 2. ARQUITECTURA PROPUESTA v4

### 2.1 Vision General

```
┌─────────────────────────────────────────────────────────────────┐
│                    SISTEMA MODULAR v4                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────────┐    ┌──────────────┐    ┌──────────────┐      │
│  │   TRIGGER    │───▶│ ORQUESTADOR  │───▶│  RESEARCH    │      │
│  │   (Notion)   │    │   CENTRAL    │    │  (Perplexity)│      │
│  └──────────────┘    └──────────────┘    └──────────────┘      │
│                              │                                  │
│                              ▼                                  │
│  ┌──────────────────────────────────────────────────────┐      │
│  │              GENERACION DE CONTENIDO                 │      │
│  │  ┌────────────┐ ┌────────────┐ ┌────────────┐       │      │
│  │  │ LinkedIn   │ │ Instagram  │ │  Facebook  │       │      │
│  │  │   Agent    │ │   Agent    │ │   Agent    │       │      │
│  │  └────────────┘ └────────────┘ └────────────┘       │      │
│  └──────────────────────────────────────────────────────┘      │
│                              │                                  │
│                              ▼                                  │
│  ┌──────────────────────────────────────────────────────┐      │
│  │              GENERACION DE IMAGENES                  │      │
│  │  ┌────────────┐ ┌────────────┐ ┌────────────┐       │      │
│  │  │ Carrusel   │ │  DALL-E    │ │  DALL-E    │       │      │
│  │  │ LinkedIn   │ │ Instagram  │ │  Facebook  │       │      │
│  │  │(Edit Image)│ │            │ │            │       │      │
│  │  └────────────┘ └────────────┘ └────────────┘       │      │
│  └──────────────────────────────────────────────────────┘      │
│                              │                                  │
│                              ▼                                  │
│  ┌──────────────────────────────────────────────────────┐      │
│  │              ALMACENAMIENTO                          │      │
│  │  ┌────────────┐ ┌────────────┐                      │      │
│  │  │ Cloudinary │ │   Notion   │                      │      │
│  │  │  (Images)  │ │  (Posts)   │                      │      │
│  │  └────────────┘ └────────────┘                      │      │
│  └──────────────────────────────────────────────────────┘      │
│                              │                                  │
│                              ▼                                  │
│  ┌──────────────────────────────────────────────────────┐      │
│  │              APROBACION (Notion)                     │      │
│  │         Estado: Borrador → Aprobado                  │      │
│  └──────────────────────────────────────────────────────┘      │
│                              │                                  │
│                              ▼                                  │
│  ┌──────────────────────────────────────────────────────┐      │
│  │              PUBLICACION                             │      │
│  │  ┌────────────┐ ┌────────────┐ ┌────────────┐       │      │
│  │  │ LinkedIn   │ │ Instagram  │ │  Facebook  │       │      │
│  │  │   API      │ │ Graph API  │ │ Graph API  │       │      │
│  │  └────────────┘ └────────────┘ └────────────┘       │      │
│  └──────────────────────────────────────────────────────┘      │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 2.2 Bases de Datos Notion Requeridas

#### BD 1: Fuentes de Contenido (Existente)
```
ID: 018b5945-2eea-488c-ae35-0bc91acee98c
- Titulo (title)
- Tipo (select): Noticia, Tendencia, Caso, Educativo
- Resumen (rich_text)
- Fuente URL (url)
- Relevancia (select): Alta, Media, Baja
- Estado (select): Nuevo, Usado, Descartado
```

#### BD 2: Posts Redes Sociales (Existente - Actualizar)
```
ID: b9a8420c-f289-4ca1-ab49-25271e21e71a
- Titulo (title)
- Tipo Contenido (select)
- Tono (select)
- Post LinkedIn (rich_text)
- Post Facebook (rich_text)
- Post Instagram (rich_text)
- Hashtags Instagram (rich_text)
- Imagen LinkedIn URL (url) - NUEVO
- Imagen Instagram URL (url) - NUEVO
- Imagen Facebook URL (url) - NUEVO
- Carrusel LinkedIn URLs (rich_text) - NUEVO: JSON array
- Estado (select): Borrador, Aprobado, Publicado, Rechazado
- Fecha Programada (date)
- Red Principal (select)
- Source Page ID (rich_text)
```

#### BD 3: Plantillas Carrusel (NUEVA)
```
- Nombre (title)
- Tipo (select): Slide 1 (Cover), Slide Contenido, Slide Final (CTA)
- Imagen Template URL (url)
- Posicion Titulo X (number)
- Posicion Titulo Y (number)
- Posicion Texto X (number)
- Posicion Texto Y (number)
- Color Texto (rich_text)
- Fuente (select)
- Activo (checkbox)
```

### 2.3 Flujos de Trabajo (Workflows)

#### WORKFLOW 1: Generador de Contenido Principal
```
Trigger: Schedule (diario) o Manual
Pasos:
1. Leer Fuentes Nuevas de Notion
2. Preparar datos + asignar tono segun dia
3. IF necesita investigacion → Perplexity
4. Orquestador decide tipo de contenido
5. Agentes especializados generan posts
6. Generar imagenes (DALL-E + Edit Image)
7. Subir a Cloudinary
8. Guardar en Notion como Borrador
9. Marcar fuente como usada
```

#### WORKFLOW 2: Generador de Carruseles LinkedIn
```
Trigger: Llamado desde Workflow 1 o Manual
Pasos:
1. Recibir tema/fuente
2. AI genera estructura carrusel:
   - Slide 1: Titulo gancho
   - Slides 2-7: Contenido (1 idea por slide)
   - Slide 8: CTA
3. Leer plantillas de Notion
4. Para cada slide:
   a. Descargar plantilla
   b. Renderizar titulo + texto
   c. Subir a Cloudinary
5. Combinar URLs
6. Guardar en Notion
```

#### WORKFLOW 3: Publicador Automatico
```
Trigger: Notion Trigger (Estado = Aprobado)
Pasos:
1. Leer post aprobado
2. Switch por Red Principal:
   - LinkedIn: API directa o upload-post
   - Instagram: Facebook Graph API (carrusel si aplica)
   - Facebook: Facebook Graph API
3. Actualizar estado a Publicado
4. Registrar fecha/hora de publicacion
```

### 2.4 Especificaciones por Plataforma

#### LinkedIn
```
Tipo: Post con imagen O Carrusel (documento)
Caracteres: Max 3,000 (recomendado <1,300)
Imagen: 1200x1200 o 1200x627
Carrusel: PDF de 1-10 paginas (1080x1080 cada una)
Hashtags: 3-5 al final
Horarios optimos: 7-8am, 12pm, 5-6pm (L-V)
```

#### Instagram
```
Tipo: Imagen unica O Carrusel (2-10 imagenes)
Caracteres: Max 2,200 (primeros 125 visibles)
Imagen: 1080x1080 (cuadrado) o 1080x1350 (vertical)
Hashtags: 5-15 en comentario o final
Horarios optimos: 11am-1pm, 7-9pm
```

#### Facebook
```
Tipo: Post con imagen
Caracteres: Max 63,206 (recomendado <500)
Imagen: 1200x630
Hashtags: 1-2 (menos importante)
Horarios optimos: 1-4pm (L-V)
```

---

## 3. PROMPTS OPTIMIZADOS POR AGENTE

### 3.1 Agente LinkedIn (Thought Leadership)

```
Eres un experto en LinkedIn B2B para el sector de construccion modular.

AUDIENCIA:
- Directores y gerentes de PYMES de construccion en Espana
- Profesionales tecnicos que buscan soluciones practicas
- Tomadores de decision que valoran datos sobre promesas

VOZ DE MARCA:
- Profesional pero accesible
- Nicolas, fundador de ModulorIA, 32 anos
- Humilde: nunca exagera ni promete de mas
- Honesto: solo datos reales, nunca inventa casos
- Directo: va al grano sin rodeos

ESTRUCTURA DEL POST:
1. HOOK (primera linea): Pregunta provocadora O Dato impactante O Afirmacion contraintuitiva
2. PROBLEMA/CONTEXTO (2-3 lineas): Situacion que la audiencia reconoce
3. INSIGHT/SOLUCION (3-5 lineas): Tu perspectiva unica o solucion
4. EJEMPLO CONCRETO (2-3 lineas): Caso real o dato especifico
5. REFLEXION/CTA (1-2 lineas): Pregunta para engagement o llamada a accion sutil

REGLAS:
- Maximo 1,300 caracteres
- Parrafos cortos (1-2 oraciones)
- Usar saltos de linea para legibilidad
- 3-5 hashtags relevantes al final
- Maximo 2 emojis (estrategicos, no decorativos)
- NUNCA usar: "No vendemos humo", "Somos los mejores", "Empresa lider"
- NUNCA prometer resultados especificos sin datos

TONOS DISPONIBLES:
- Formal-Tecnico: Datos duros, estadisticas, analisis
- Cercano-Profesional: Experiencias, aprendizajes, reflexiones
- Datos Duros: Numeros, comparativas, ROI
- Reflexivo: Tendencias, futuro del sector, opiniones

Responde SOLO con JSON:
{
  "hook": "primera linea del post",
  "cuerpo": "resto del post formateado",
  "hashtags": ["hashtag1", "hashtag2", ...],
  "tipo": "thought_leadership|caso_estudio|tendencia|educativo"
}
```

### 3.2 Agente Instagram

```
Eres un creador de contenido visual para Instagram B2B en construccion modular.

CARACTERISTICAS INSTAGRAM:
- Visual first: la imagen es lo principal
- Texto secundario pero importante
- Formato mas casual que LinkedIn
- Audiencia mas amplia (no solo decision makers)

ESTRUCTURA:
1. Frase de impacto (max 125 caracteres visibles sin "ver mas")
2. Contexto breve
3. Valor o insight
4. CTA (pregunta o invitacion)
5. Hashtags separados (5-15)

REGLAS:
- Maximo 300 caracteres para el caption principal
- Hashtags en bloque separado
- 2-4 emojis estrategicos
- Tono mas cercano que LinkedIn
- Enfoque visual: describir imagen ideal

Responde con JSON:
{
  "caption": "texto del post",
  "hashtags": "#hashtag1 #hashtag2 ...",
  "imagenPrompt": "descripcion detallada para DALL-E",
  "imagenEstilo": "minimalista|industrial|tecnologico|humano"
}
```

### 3.3 Agente Carrusel LinkedIn

```
Eres un disenador de carruseles educativos para LinkedIn.

ESTRUCTURA CARRUSEL (8 slides):
1. SLIDE 1 (Cover): Titulo gancho que genere curiosidad
2. SLIDE 2: Contexto del problema
3. SLIDES 3-6: 1 punto clave por slide (regla 7x7: max 7 palabras)
4. SLIDE 7: Resumen o conclusion
5. SLIDE 8: CTA + branding

REGLAS POR SLIDE:
- Titulo: Max 10 palabras, impactante
- Texto: Max 25 palabras
- 1 idea = 1 slide
- Lenguaje simple y directo
- Sin jerga innecesaria

ESTILOS VISUALES:
- Fondo: Oscuro (#1a1a2e) o claro (#f5f5f5)
- Colores accent: Naranja (#ff6b35) o azul (#4361ee)
- Tipografia: Sans-serif, bold para titulos

Responde con JSON:
{
  "titulo_carrusel": "titulo general",
  "slides": [
    {"numero": 1, "tipo": "cover", "titulo": "...", "subtitulo": "..."},
    {"numero": 2, "tipo": "problema", "titulo": "...", "texto": "..."},
    ...
    {"numero": 8, "tipo": "cta", "titulo": "...", "texto": "...", "cta": "..."}
  ],
  "estilo": "oscuro|claro"
}
```

---

## 4. CONFIGURACION TECNICA

### 4.1 Credenciales Requeridas

| Servicio | Tipo | Uso |
|----------|------|-----|
| Notion | OAuth/API Key | BD de contenido |
| OpenAI | API Key | GPT-4o, DALL-E 3 |
| Perplexity | API Key | Investigacion |
| Cloudinary | API Key + Secret | Hosting imagenes |
| LinkedIn | OAuth 2.0 | Publicacion |
| Facebook/Instagram | Graph API | Publicacion |

### 4.2 Variables de Entorno

```
NOTION_API_KEY=secret_xxx
NOTION_DB_FUENTES=018b5945-2eea-488c-ae35-0bc91acee98c
NOTION_DB_POSTS=b9a8420c-f289-4ca1-ab49-25271e21e71a
NOTION_DB_TEMPLATES=xxx (crear)

OPENAI_API_KEY=sk-xxx
PERPLEXITY_API_KEY=pplx-xxx

CLOUDINARY_CLOUD_NAME=xxx
CLOUDINARY_API_KEY=xxx
CLOUDINARY_API_SECRET=xxx

LINKEDIN_ACCESS_TOKEN=xxx
LINKEDIN_ORGANIZATION_ID=xxx

FACEBOOK_PAGE_ID=xxx
FACEBOOK_ACCESS_TOKEN=xxx
INSTAGRAM_BUSINESS_ACCOUNT_ID=xxx
```

### 4.3 Costos Estimados (Mensual)

| Servicio | Uso Estimado | Costo |
|----------|--------------|-------|
| OpenAI GPT-4o | ~100 posts | ~$5 |
| OpenAI DALL-E 3 | ~100 imagenes | ~$4 |
| Perplexity | ~50 consultas | ~$2 |
| Cloudinary | Free tier | $0 |
| **TOTAL** | | **~$11/mes** |

---

## 5. PLAN DE IMPLEMENTACION

### Fase 1: Infraestructura (Dia 1-2)
- [ ] Crear BD Plantillas Carrusel en Notion
- [ ] Actualizar BD Posts con nuevos campos
- [ ] Configurar Cloudinary
- [ ] Crear plantillas de carrusel (8 templates)
- [ ] Probar credenciales APIs

### Fase 2: Workflow Principal (Dia 3-4)
- [ ] Crear workflow generador principal
- [ ] Implementar agentes LinkedIn, Instagram, Facebook
- [ ] Integrar generacion DALL-E
- [ ] Conectar Cloudinary upload
- [ ] Probar flujo completo

### Fase 3: Carruseles LinkedIn (Dia 5)
- [ ] Crear sub-workflow carruseles
- [ ] Implementar Edit Image con plantillas
- [ ] Probar renderizado de texto
- [ ] Integrar con workflow principal

### Fase 4: Publicacion (Dia 6-7)
- [ ] Crear workflow publicador
- [ ] Configurar LinkedIn API
- [ ] Configurar Facebook Graph API
- [ ] Configurar Instagram Graph API
- [ ] Probar publicacion en cada plataforma

### Fase 5: Testing y Refinamiento (Dia 8-10)
- [ ] Test end-to-end completo
- [ ] Ajustar prompts segun resultados
- [ ] Documentar proceso
- [ ] Crear guia de uso

---

## 6. NOTAS IMPORTANTES

### 6.1 Limitaciones Conocidas

1. **LinkedIn API**:
   - No permite publicar carruseles directamente como imagenes multiples
   - Solucion: Crear PDF y subir como documento
   - Alternativa: Usar upload-post.com

2. **Instagram Graph API**:
   - Requiere Business Account conectado a Facebook Page
   - Carruseles requieren URLs publicas de imagenes
   - Videos requieren espera para procesamiento

3. **Rate Limits**:
   - OpenAI: 10,000 tokens/min (tier gratuito)
   - LinkedIn: 100 posts/dia
   - Facebook: 200 posts/dia por pagina

### 6.2 Mejores Practicas

1. **Calidad sobre Cantidad**:
   - Mejor 1 post excelente que 3 mediocres
   - Revisar manualmente antes de aprobar

2. **Consistencia Visual**:
   - Usar siempre las mismas plantillas
   - Colores y tipografia consistentes
   - Estilo fotografico definido

3. **Engagement**:
   - Responder comentarios dentro de 1 hora
   - Hacer preguntas en los posts
   - Etiquetar personas relevantes (con permiso)

4. **Analisis**:
   - Revisar metricas semanalmente
   - Ajustar horarios segun engagement
   - Iterar en formatos que funcionan

---

## 7. PROXIMOS PASOS

1. **Validar arquitectura** con Nicolas
2. **Crear plantillas visuales** para carruseles
3. **Configurar todas las credenciales**
4. **Implementar Workflow 1** (generacion)
5. **Implementar Workflow 2** (carruseles)
6. **Implementar Workflow 3** (publicacion)
7. **Testing completo**
8. **Documentacion final**

---

*Documento generado: 2026-01-25*
*Version: 4.0*
*Autor: Claude Code para ModulorIA*
