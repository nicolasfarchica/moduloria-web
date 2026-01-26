# Sistema de Contenido para Redes Sociales - ModulorIA

> Sistema automatizado de generacion de contenido para LinkedIn, Facebook e Instagram
> Fecha creacion: 25 enero 2026
> Ultima actualizacion: 26 enero 2026
> Estado: v4.1 - Sistema Definitivo con Replicate Flux

---

## Resumen Ejecutivo

| Aspecto | Valor |
|---------|-------|
| **Objetivo** | Posicionar ModulorIA como autoridad en construccion modular + IA |
| **Redes** | LinkedIn, Facebook, Instagram (todas de ModulorIA empresa) |
| **Frecuencia** | 1 post diario (primeros 2 meses) |
| **Herramientas** | Notion + N8N + OpenAI + Metricool |

---

## Arquitectura del Sistema

```
                    ENTRADA DE CONTENIDO
                    ====================

[RSS Sector]  +  [Ideas Manuales]  +  [Telegram Bot]
      |                |                    |
      v                v                    v
      └────────────────┼────────────────────┘
                       |
                       v
              [Notion: Fuentes de Contenido]
                       |
                       v
                    GENERACION
                    ==========
                       |
              [N8N: Generador de Posts]
                       |
         ┌─────────────┼─────────────┐
         |             |             |
         v             v             v
    [LinkedIn]   [Facebook]   [Instagram]
         |             |             |
         v             v             v
              [Notion: Posts Redes Sociales]
                       |
                       v
                  PUBLICACION
                  ===========
                       |
              [Metricool / Manual]
                       |
                       v
              [Redes Sociales]
```

---

## Bases de Datos Notion

### 1. Fuentes de Contenido

**Database ID:** `018b5945-2eea-488c-ae35-0bc91acee98c`
**URL:** https://www.notion.so/018b59452eea488cae350bc91acee98c

| Propiedad | Tipo | Opciones |
|-----------|------|----------|
| Titulo | Title | - |
| Tipo | Select | Noticia, Dato, Idea propia, Regulacion, Caso de uso IA, Tendencia |
| Fuente URL | URL | - |
| Resumen | Text | - |
| Relevancia | Select | Alta, Media, Baja |
| Estado | Select | Nuevo, Usado, Descartado |
| Fecha | Date | - |

**Vistas:**
- Tabla (ordenada por fecha descendente)
- Kanban por Estado

---

### 2. Posts Redes Sociales

**Database ID:** `b9a8420c-f289-4ca1-ab49-25271e21e71a`
**URL:** https://www.notion.so/b9a8420cf2894ca1ab4925271e21e71a

| Propiedad | Tipo | Opciones |
|-----------|------|----------|
| Titulo | Title | - |
| Tipo Contenido | Select | Dato sector, Noticia, Caso IA, Opinion, Tendencia |
| Tono | Select | Formal-Tecnico, Cercano-Profesional, Datos Duros, Reflexivo |
| Post LinkedIn | Text | - |
| Post Facebook | Text | - |
| Post Instagram | Text | - |
| Imagen Sugerida | Text | - |
| Estado | Select | Borrador, Aprobado, Programado, Publicado |
| Fecha Programada | Date | - |
| Red Principal | Select | LinkedIn, Facebook, Instagram, Todas |
| Fuente Original | Relation | -> Fuentes de Contenido |

**Vistas:**
- Tabla (ordenada por fecha programada ascendente)
- Kanban por Estado
- Calendario por Fecha Programada

---

## Personalidad de Contenido ModulorIA

### Voz y Tono

| Aspecto | Definicion |
|---------|------------|
| **Estilo** | Corto, directo, profesional |
| **Valores** | Humilde, honesto, discreto |
| **Audiencia** | B2B: Directores y gerentes de constructoras |
| **Objetivo** | Demostrar autoridad, no buscar likes |

### Frases PROHIBIDAS (nunca usar)

- "No vendemos humo"
- "Somos los mejores"
- "Somos la empresa mas grande"
- Exageraciones innecesarias
- Casos falsos o inventados
- Marketing agresivo

### Sistema de Tonos Rotativos

| Dia | Tono | Tipo de Contenido |
|-----|------|-------------------|
| Lunes | Formal-Tecnico | Dato duro del sector |
| Martes | Cercano-Profesional | Opinion/reflexion |
| Miercoles | Datos Duros | Estadistica impactante |
| Jueves | Cercano-Profesional | Caso de uso IA |
| Viernes | Formal-Tecnico | Tendencia/noticia |
| Sabado | Reflexivo | Aprendizaje de la semana |
| Domingo | - | Descanso o contenido ligero |

---

## Tipos de Contenido

### 1. Dato del Sector
- Estadisticas de crecimiento
- Datos de mercado
- Comparativas regionales
- Ejemplo: "La construccion modular crecera 15% en UK por crisis de vivienda"

### 2. Noticia
- Nuevas regulaciones
- Eventos del sector
- Noticias de empresas referentes
- Ejemplo: "Nueva normativa CTE para construccion industrializada"

### 3. Caso de Uso IA
- Automatizaciones especificas
- Ejemplos de ahorro
- Problemas resueltos con tecnologia
- Ejemplo: "Como reducir 80% el tiempo de clasificacion de emails"

### 4. Opinion
- Punto de vista sobre tendencias
- Reflexiones del sector
- Sin exageraciones, con datos
- Ejemplo: "Por que las PYMES tardaran en adoptar IA (y como cambiarlo)"

### 5. Tendencia
- Hacia donde va el sector
- Predicciones basadas en datos
- Tecnologias emergentes
- Ejemplo: "3 tecnologias que transformaran la construccion en 2026"

---

## Workflow N8N: Sistema Multi-Agente v2

### Arquitectura de 6 Agentes Especializados

```
┌─────────────────────────────────────────────────────────────────────┐
│                    SISTEMA MULTI-AGENTE MODULORIA                    │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  [Trigger Manual/Semanal]                                           │
│           │                                                          │
│           v                                                          │
│  [Notion: Fuentes de Contenido] ──> Filtro: Nuevo + Alta/Media      │
│           │                                                          │
│           v                                                          │
│  [Preparar Datos + Sistema Tonos]                                   │
│           │                                                          │
│           v                                                          │
│     ┌─────┴─────┐                                                    │
│     │ Necesita  │                                                    │
│     │ Research? │                                                    │
│     └─────┬─────┘                                                    │
│       SI  │  NO                                                      │
│       │   └──────────┐                                               │
│       v              │                                               │
│  [Perplexity API]    │                                               │
│       │              │                                               │
│       └──────┬───────┘                                               │
│              v                                                       │
│  ┌───────────────────────────────────────────────────────┐          │
│  │          🎭 ORQUESTADOR (GPT-4o)                      │          │
│  │   Director de Contenido - Analiza y crea estrategia   │          │
│  └───────────────────────┬───────────────────────────────┘          │
│                          │                                           │
│          ┌───────────────┼───────────────┬───────────────┐          │
│          v               v               v               v          │
│    ┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐       │
│    │ LinkedIn │   │ Facebook │   │Instagram │   │ Imagenes │       │
│    │ GPT-4o-m │   │ GPT-4o-m │   │ GPT-4o-m │   │ GPT-4o-m │       │
│    │ 1300char │   │ 500 char │   │ 300 char │   │ Prompts  │       │
│    └────┬─────┘   └────┬─────┘   └────┬─────┘   └────┬─────┘       │
│         │              │              │              │              │
│         └──────────────┴──────┬───────┴──────────────┘              │
│                               v                                      │
│                   [Consolidar Contenido]                            │
│                               │                                      │
│                               v                                      │
│                   ┌───────────────────────┐                         │
│                   │  ✅ CONTROL CALIDAD   │                         │
│                   │  Revision automatica   │                         │
│                   │  Correccion si needed  │                         │
│                   └───────────┬───────────┘                         │
│                               │                                      │
│                               v                                      │
│                   [Guardar en Notion]                               │
│                               │                                      │
│                               v                                      │
│                   [Marcar Fuente Usada]                             │
│                               │                                      │
│                               v                                      │
│                   [Notificar Telegram]                              │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Agentes del Sistema

| Agente | Modelo | Funcion | Output |
|--------|--------|---------|--------|
| **Orquestador** | GPT-4o | Director de Contenido, define estrategia | JSON con angulo, audiencia, instrucciones |
| **LinkedIn** | GPT-4o-mini | Especialista B2B profesional | Post max 1,300 chars |
| **Facebook** | GPT-4o-mini | Community manager conversacional | Post max 500 chars |
| **Instagram** | GPT-4o-mini | Content creator visual | Caption max 300 chars + hashtags |
| **Imagenes** | GPT-4o-mini | Director de arte | 3 prompts (LI, FB, IG) |
| **Calidad** | GPT-4o-mini | Editor senior | Puntuacion + correcciones |

### Trigger
- **Manual**: Boton para ejecucion inmediata
- **Programado**: Domingos 8:00 AM (genera contenido para la semana)

### Investigacion con Perplexity
Para fuentes con Relevancia="Alta" o Tipo="Tendencia"/"Regulacion":
- Modelo: `llama-3.1-sonar-large-128k-online`
- Busqueda en tiempo real de datos actuales
- Enriquecimiento con estadisticas y contexto

### Archivo del Workflow
- `n8n-workflows/generador-posts-multiagente-v2.json`

---

## System Prompts: Arquitectura Multi-Agente

### Prompt del Orquestador (GPT-4o)

El Orquestador actua como Director de Contenido y analiza cada fuente para crear una estrategia personalizada. Sus responsabilidades:

1. **Analizar la fuente** y determinar el angulo principal
2. **Identificar audiencia prioritaria**: Carlos (Director), Laura (Marketing), o Javier (Operaciones)
3. **Definir conexion con ModulorIA**: Como el tema se relaciona con automatizacion/IA
4. **Extraer datos clave** para destacar en los posts
5. **Crear instrucciones especificas** para cada agente de plataforma

El Orquestador conoce profundamente:
- Los 9 pilares de comunicacion de ModulorIA
- El vocabulario aprobado y prohibido
- La voz de marca (70% Sabio Pragmatico / 30% Heroe)
- Los ejemplos de copywriting exitosos

### Prompts de Agentes Especializados

Cada agente tiene un prompt extenso (1,500+ palabras) que incluye:

**LinkedIn Specialist:**
- Reglas de formato (max 1,300 chars)
- 5 tipos de hooks efectivos con ejemplos
- CTAs probados para engagement
- 2 ejemplos completos de posts exitosos

**Facebook Specialist:**
- Tono conversacional tipo "colegas del sector"
- Estructura: gancho → contexto → invitacion
- Tipos de posts que funcionan
- Ejemplos de posts cortos y efectivos

**Instagram Specialist:**
- Caption ultra corto (max 300 chars)
- Hashtags separados en bloque
- Tipos de contenido visual-first
- Biblioteca de hashtags aprobados

**Generador de Imagenes:**
- Paleta de colores ModulorIA
- Estilo fotografico definido
- Elementos visuales recurrentes
- Formato de prompt optimizado para Midjourney/DALL-E

**Control de Calidad:**
- Checklist automatico de voz de marca
- Verificacion de formato por plataforma
- Deteccion de errores comunes
- Capacidad de correccion automatica

### Vocabulario de Marca

**APROBADO:**
- "Automatizacion practica"
- "Resultados medibles"
- "Ahorro de X horas/semana"
- "Caso real de [sector]"
- "En nuestra experiencia..."
- "Los datos muestran que..."

**PROHIBIDO:**
- "No vendemos humo"
- "Somos los mejores/lideres"
- "Revolucionario/disruptivo"
- "Inteligencia artificial magica"
- "Sin esfuerzo/automatico al 100%"

---

## Credenciales Requeridas v4.1

| Servicio | Tipo | Uso | Costo Estimado |
|----------|------|-----|----------------|
| **Notion** | API Integration | Leer fuentes, guardar posts | Gratis |
| **OpenAI** | API Key | GPT-4o (orquestador), GPT-4o-mini (agentes) | ~$0.05/post |
| **Replicate** | API Token | Flux-schnell para imagenes | ~$0.003/imagen |
| **Perplexity** | HTTP Header Auth | Investigacion en tiempo real | ~$0.005/query |
| **Cloudinary** | API Key + Secret | Hosting imagenes permanente | Gratis (25GB) |
| **LinkedIn** | OAuth 2.0 | Publicacion de posts | Gratis |
| **Facebook** | Graph API | Instagram + Facebook publishing | Gratis |

### Guia de Configuracion de Credenciales

#### 1. Replicate API (Generacion de Imagenes)

```bash
# 1. Crear cuenta en https://replicate.com
# 2. Ir a Account Settings → API Tokens
# 3. Crear nuevo token
```

**Configurar en N8N:**
- Tipo: HTTP Header Auth
- Nombre: `Replicate API`
- Header Name: `Authorization`
- Header Value: `Token YOUR_REPLICATE_API_TOKEN`

**Modelo utilizado:** `black-forest-labs/flux-schnell`
- Costo: ~$0.003/imagen
- Tiempo: 2-5 segundos
- Calidad: Alta (comparable a DALL-E 3)

#### 2. Notion API

```bash
# 1. Ir a https://www.notion.so/my-integrations
# 2. Crear nueva integracion "ModulorIA Content System"
# 3. Copiar Internal Integration Token
# 4. Compartir las 2 bases de datos con la integracion
```

**Bases de datos a conectar:**
- Fuentes de Contenido: `018b5945-2eea-488c-ae35-0bc91acee98c`
- Posts Redes Sociales: `b9a8420c-f289-4ca1-ab49-25271e21e71a`

#### 3. OpenAI API

```bash
# 1. Ir a https://platform.openai.com/api-keys
# 2. Crear nueva API Key
# 3. Asegurar acceso a: gpt-4o, gpt-4o-mini
```

**Configurar en N8N:**
- Tipo: OpenAI API
- API Key: `sk-...`

#### 4. Perplexity API

```bash
# 1. Ir a https://www.perplexity.ai/settings/api
# 2. Generar API Key
```

**Configurar en N8N:**
- Tipo: HTTP Header Auth
- Nombre: `Perplexity API`
- Header Name: `Authorization`
- Header Value: `Bearer YOUR_PERPLEXITY_API_KEY`

#### 5. Cloudinary

```bash
# 1. Crear cuenta en https://cloudinary.com
# 2. Dashboard → Copiar Cloud Name, API Key, API Secret
# 3. Settings → Upload → Crear Upload Preset "moduloria_posts" (unsigned)
```

**Configurar en N8N:**
- Tipo: HTTP Basic Auth
- Username: `API_KEY`
- Password: `API_SECRET`

**Actualizar en workflow:**
- Reemplazar `YOUR_CLOUD_NAME` con tu Cloud Name real

#### 6. LinkedIn OAuth (para publicador)

```bash
# 1. Ir a https://www.linkedin.com/developers/apps
# 2. Crear nueva app
# 3. Solicitar permisos: w_member_social, r_liteprofile
# 4. Configurar OAuth 2.0 redirect URI
```

#### 7. Facebook Graph API (para Instagram/Facebook)

```bash
# 1. Ir a https://developers.facebook.com
# 2. Crear app tipo Business
# 3. Agregar productos: Instagram Graph API, Pages API
# 4. Generar access token con permisos necesarios
```

---

### Variables de Entorno (.env)

```env
# Replicate (Imagenes)
REPLICATE_API_TOKEN=r8_xxxxxxxxxxxx

# Notion
NOTION_API_KEY=secret_xxxxxxxxxxxx
NOTION_FUENTES_DB=018b5945-2eea-488c-ae35-0bc91acee98c
NOTION_POSTS_DB=b9a8420c-f289-4ca1-ab49-25271e21e71a

# OpenAI (Agentes)
OPENAI_API_KEY=sk-xxxxxxxxxxxx

# Perplexity (Investigacion)
PERPLEXITY_API_KEY=pplx-xxxxxxxxxxxx

# Cloudinary (Hosting Imagenes)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=xxxxxxxxxxxx
CLOUDINARY_API_SECRET=xxxxxxxxxxxx

# LinkedIn (Publicacion)
LINKEDIN_CLIENT_ID=xxxxxxxxxxxx
LINKEDIN_CLIENT_SECRET=xxxxxxxxxxxx
LINKEDIN_ACCESS_TOKEN=xxxxxxxxxxxx

# Facebook/Instagram (Publicacion)
FACEBOOK_APP_ID=xxxxxxxxxxxx
FACEBOOK_APP_SECRET=xxxxxxxxxxxx
FACEBOOK_ACCESS_TOKEN=xxxxxxxxxxxx
INSTAGRAM_BUSINESS_ACCOUNT_ID=xxxxxxxxxxxx
```

---

## Flujo de Trabajo Semanal

### Domingo (automatico + 20 min revision)

1. N8N genera 7 posts desde fuentes acumuladas
2. Posts llegan a Notion con estado "Borrador"
3. Nicolas revisa y ajusta voz
4. Marca como "Aprobado"

### Lunes (10 min)

1. Programar posts aprobados en Metricool
2. O publicar manualmente el del dia

### Durante la semana

1. Metricool publica segun calendario
2. RSS sigue alimentando fuentes
3. Nicolas agrega ideas cuando surgen

---

## Integracion con Sistemas Existentes

### Newsletter Content (ya existente)
- Base de datos: `061483b8b89b48d0beece04cbefb2300`
- Workflow RSS ya alimenta esta base
- **Accion:** Conectar para que tambien alimente "Fuentes de Contenido"

### Bot Telegram (futuro)
- Permite agregar ideas rapidas
- Mensaje -> Notion "Fuentes de Contenido"
- Tipo automatico: "Idea propia"

---

## Metricas de Exito

### Mes 1
- [ ] Publicar 1 post diario consistentemente
- [ ] Sistema funcionando sin fricciones
- [ ] Tiempo de revision < 30 min/semana

### Mes 3
- [ ] Crecimiento seguidores +20%
- [ ] Engagement rate > 2% en LinkedIn
- [ ] 1-2 leads desde redes

### Mes 6
- [ ] Sistema en piloto automatico
- [ ] Autoridad establecida en el nicho
- [ ] Leads consistentes desde redes

---

## Versiones del Workflow

### v1 - Generador Simple (Deprecado)
- Archivo: `n8n-workflows/generador-posts-redes-sociales.json`
- Un solo nodo GPT-4o para las 3 redes
- Sin investigacion adicional
- Sin control de calidad automatico

### v2 - Sistema Multi-Agente (Deprecado)
- Archivo: `n8n-workflows/generador-posts-multiagente-v2.json`
- 6 agentes especializados
- Investigacion con Perplexity API
- Control de calidad automatico
- Generacion de prompts para imagenes
- Notificaciones via Telegram

### v3 - Con Imagenes DALL-E (Deprecado)
- Archivo: `n8n-workflows/generador-posts-multiagente-v3-completo.json`
- Incluye generacion real de imagenes con DALL-E 3
- Upload a Cloudinary para URLs permanentes
- Problema: No soporta carruseles LinkedIn

### v4 - Sistema Definitivo (Deprecado)
- Archivo: `n8n-workflows/generador-posts-multiagente-v4-definitivo.json` (actualizado a v4.1)
- Archivo: `n8n-workflows/publicador-automatico-redes-sociales.json`
- Documentacion: `docs/sistemas/INVESTIGACION-SISTEMA-REDES-SOCIALES-V4.md`

### v4.1 - Con Replicate Flux (ACTUAL)
- Archivo: `n8n-workflows/generador-posts-multiagente-v4-definitivo.json`
- Fecha: 26 enero 2026

**Cambios v4 → v4.1:**
- **Generacion de imagenes**: DALL-E 3 → Replicate Flux (flux-schnell)
- **Costo por imagen**: $0.08 → $0.003 (ahorro 96%)
- **Error handling**: Agregado Error Trigger + procesamiento de errores
- **Formato imagen**: webp optimizado (mejor compresion)

**Caracteristicas v4.1:**
- Arquitectura modular: Generacion + Publicacion separados
- Orquestador GPT-4o define estrategia por post
- 3 Agentes especializados (LinkedIn, Instagram, Facebook)
- **Replicate Flux** para generacion de imagenes (modelo flux-schnell)
- Upload Cloudinary para URLs permanentes
- Notion como hub central (Fuentes -> Posts -> Aprobacion)
- Workflow de publicacion automatica (activado por cambio de estado)
- Investigacion Perplexity para contenido de alta relevancia
- Sistema de tonos rotativos por dia de semana
- Error handling con captura y notificacion

**Proxima implementacion:**
- Integracion con LinkedIn Documents API para publicacion automatica de carruseles
- Carruseles Instagram via Facebook Graph API
- Notificacion de errores via Telegram/Email

---

## Workflow: Generador de Carruseles LinkedIn

**Archivo:** `n8n-workflows/carrusel-linkedin-workflow.json`

### Arquitectura del Workflow

```
┌─────────────────────────────────────────────────────────────┐
│              GENERADOR CARRUSELES LINKEDIN                   │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  [Trigger Manual]                                            │
│        │                                                     │
│        v                                                     │
│  [Notion: Leer Posts tipo Carrusel]                         │
│        │                                                     │
│        v                                                     │
│  [GPT-4o: Generar contenido 8 slides]                       │
│        │                                                     │
│        v                                                     │
│  [Loop: Para cada slide]                                     │
│        │                                                     │
│        ├──> [Replicate Flux: Generar imagen slide]          │
│        │           │                                         │
│        │           v                                         │
│        │    [Cloudinary: Upload slide]                       │
│        │                                                     │
│        v                                                     │
│  [Consolidar todos los slides]                              │
│        │                                                     │
│        v                                                     │
│  [Cloudinary: Crear PDF desde imagenes]                     │
│        │                                                     │
│        v                                                     │
│  [Notion: Actualizar post con URLs]                         │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Formato de Slides

| Slide | Tipo | Contenido |
|-------|------|-----------|
| 1 | Hook | Pregunta o dato impactante |
| 2-7 | Contenido | 1 idea por slide, valor educativo |
| 8 | CTA | Resumen + invitacion a seguir |

### Especificaciones Tecnicas

- **Formato:** 1080x1350px (4:5 portrait)
- **Modelo imagen:** Replicate Flux-schnell
- **Costo por carrusel:** ~$0.024 (8 slides x $0.003)
- **Output:** PDF listo para subir a LinkedIn

### Estados Notion para Carruseles

| Estado | Descripcion |
|--------|-------------|
| Pendiente Carrusel | Post marcado para generar carrusel |
| Carrusel Generado | Slides generados, PDF listo |
| Publicado | Carrusel publicado en LinkedIn |

### Propiedades Notion Adicionales

Para usar el workflow de carruseles, agregar estas propiedades a la BD Posts:

- `Tema Carrusel` (Text): Tema especifico para el carrusel
- `Carrusel PDF URL` (URL): URL del PDF generado
- `Slides Generados` (Number): Cantidad de slides creados

### Limitaciones Actuales

1. **Generacion PDF:** El metodo de Cloudinary para crear PDF puede requerir configuracion adicional. Alternativas: API2PDF, PDFShift, jsPDF.

2. **Publicacion LinkedIn:** Los carruseles se suben como Documents via LinkedIn API, requiere flujo separado de autenticacion.

3. **Sin texto en imagenes:** Flux-schnell no genera texto legible. Los titulos deben agregarse manualmente o via servicio de overlay.

---

## Proximos Pasos

1. [x] Crear workflow N8N v1 "Generador de Posts"
2. [x] Crear workflow N8N v2 "Sistema Multi-Agente"
3. [ ] Configurar credenciales en N8N:
   - [ ] Notion API (conectar a ambas bases de datos)
   - [ ] OpenAI API Key
   - [ ] Perplexity API Key (HTTP Header Auth)
   - [ ] Telegram Bot Token
4. [ ] Probar con 3-5 fuentes de prueba
5. [ ] Ajustar prompts segun resultados
6. [ ] Conectar RSS existente con "Fuentes de Contenido"
7. [ ] Configurar Metricool para publicacion automatica
8. [ ] Primera semana de publicacion real

---

## Archivos Relacionados

### Workflows N8N
- `n8n-workflows/generador-posts-multiagente-v4-definitivo.json` - **Sistema Definitivo v4.1 con Replicate Flux (ACTUAL)**
- `n8n-workflows/publicador-automatico-redes-sociales.json` - **Publicador Automatico v4 (ACTUAL)**
- `n8n-workflows/carrusel-linkedin-workflow.json` - **Generador Carruseles LinkedIn (NUEVO)**
- `n8n-workflows/generador-posts-multiagente-v3-completo.json` - Con DALL-E (deprecado)
- `n8n-workflows/generador-posts-multiagente-v2.json` - Sistema Multi-Agente (deprecado)
- `n8n-workflows/generador-posts-redes-sociales.json` - Generador Simple v1 (deprecado)

### Documentacion
- `docs/sistemas/INVESTIGACION-SISTEMA-REDES-SOCIALES-V4.md` - **Investigacion profunda y arquitectura v4**
- `docs/estrategia/SISTEMA-REDES-SOCIALES.md` - Plan estrategico original
- `docs/estrategia/pilares-contenido.md` - Pilares de contenido
- `docs/templates/carrusel-*.md` - Templates de carrusel
- `docs/workflows/sesion-batching-contenido.md` - Checklist batching

### Notion Databases
- **Fuentes de Contenido**: `018b5945-2eea-488c-ae35-0bc91acee98c`
- **Posts Redes Sociales**: `b9a8420c-f289-4ca1-ab49-25271e21e71a`
- **Plantillas Carrusel**: (Por crear - para templates de carruseles LinkedIn)

### Credenciales Requeridas v4
| Servicio | Tipo | Uso |
|----------|------|-----|
| Notion | OAuth/API Key | BD de contenido |
| OpenAI | API Key | GPT-4o, GPT-4o-mini, DALL-E 3 |
| Perplexity | HTTP Header Auth | Investigacion tiempo real |
| Cloudinary | API Key + Secret | Hosting imagenes permanente |
| LinkedIn | OAuth 2.0 | Publicacion posts |
| Facebook | Graph API | Instagram + Facebook publishing |

---

*Sistema de Contenido para Redes Sociales - ModulorIA*
*Creado: 25 enero 2026*
