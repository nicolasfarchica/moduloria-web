# Sesion 2026-01-22: Configuracion Workflows N8N

## Resumen Ejecutivo

Se configuraron exitosamente **ambos workflows de N8N**:

1. **Workflow 1: Recolector Diario de Contenido** - Configurado en la sesion AM
2. **Workflow 2: Envio Newsletter Semanal** - Configurado en la sesion PM

**El sistema de newsletter esta 100% operativo.**

---

## Workflow 1: Recolector Diario de Contenido - COMPLETADO

### Estado: ACTIVO Y FUNCIONANDO

### Configuracion Final

| Componente | Detalle |
|------------|---------|
| **Trigger** | Diario a las 8:00 AM |
| **Credencial Notion** | ModulorIA N8N |
| **Credencial OpenAI** | Configurada |
| **Base de datos destino** | Newsletter Content (`061483b8b89b48d0beece04cbefb2300`) |

### Fuentes RSS Configuradas (6 fuentes)

| Fuente | URL | Estado |
|--------|-----|--------|
| Autodesk Construction | `https://construction.autodesk.com/feed/` | Activo |
| Construction Dive | `https://www.constructiondive.com/feeds/news/` | Activo |
| Offsite Hub | `https://www.offsitehub.co.uk/feed/` | Activo |
| Modular Building Institute | `https://www.modular.org/feed/` | Activo |
| BuiltWorlds | `https://builtworlds.com/feed/` | Activo |
| Procore Blog | `https://www.procore.com/jobsite/feed/` | Activo |

### Fuentes Eliminadas

- TechCrunch AI (no relevante para construccion modular)
- ENR News (error 404)

### Flujo del Workflow

```
[Trigger Diario 8:00 AM]
    |
    v
[6 RSS Feeds en paralelo] --> [Continue On Fail habilitado]
    |
    v
[Combinar Feeds]
    |
    v
[Preparar Noticias] --> Filtra errores, valida URLs, ultimas 24h
    |
    v
[AI Filtrar Relevantes] --> GPT-4o-mini con prompt especializado
    |
    v
[Parsear Articulos] --> Acepta ambos formatos (titulo/title, url/link)
    |
    v
[Guardar en Notion] --> Newsletter Content DB
```

### Codigo Clave - Nodo "Preparar Noticias"

```javascript
// Filtrar noticias de las ultimas 24 horas
const allItems = $input.all();
const now = new Date();
const yesterday = new Date(now.getTime() - 24 * 60 * 60 * 1000);

const news = allItems
  .filter(item => !item.json.error && item.json.title)
  .map(item => ({
    title: item.json.title,
    link: item.json.link || item.json.guid || '',
    description: (item.json.contentSnippet || item.json.description || '').substring(0, 500),
    pubDate: item.json.pubDate || item.json.isoDate || new Date().toISOString(),
    source: detectSource(item.json.link || '')
  }))
  .filter(item => {
    if (!item.pubDate) return true;
    const pubDate = new Date(item.pubDate);
    return pubDate >= yesterday;
  })
  .filter(item => item.link && item.link.startsWith('http'))
  .slice(0, 20);

function detectSource(url) {
  if (url.includes('constructiondive')) return 'Construction Dive';
  if (url.includes('builtworlds')) return 'BuiltWorlds';
  if (url.includes('autodesk')) return 'Autodesk Construction';
  if (url.includes('modular.org')) return 'Modular Building Institute';
  if (url.includes('offsitehub')) return 'Offsite Hub';
  if (url.includes('procore')) return 'Procore Blog';
  return 'Otra fuente';
}

const newsForAI = news.map((n, i) =>
  `${i + 1}. ${n.title}\n   ${n.description}\n   Fuente: ${n.source}\n   Link: ${n.link}`
).join('\n\n');

return [{
  json: {
    newsForAI,
    newsCount: news.length,
    rawNews: news
  }
}];
```

### Codigo Clave - Nodo "Parsear Articulos"

```javascript
// Parsear respuesta del AI
const aiResponse = $input.first().json.message?.content || '[]';

let articles;
try {
  const cleanJson = aiResponse.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
  articles = JSON.parse(cleanJson);
} catch (e) {
  console.log('Error parsing AI response:', e);
  return [];
}

if (!Array.isArray(articles) || articles.length === 0) {
  return [];
}

// Filtrar y mapear articulos - aceptar ambos formatos de campos
const validArticles = articles
  .map(article => ({
    titulo: article.titulo || article.title || '',
    url: article.url || article.link || '',
    fuente: article.fuente || article.source || 'Desconocida',
    resumen: article.resumen || article.summary || article.description || '',
    categoria: article.categoria || article.category || 'Industria',
    fechaRecoleccion: new Date().toISOString()
  }))
  .filter(article => {
    const hasValidTitle = article.titulo && article.titulo.length > 5;
    const hasValidUrl = article.url && article.url.startsWith('http');
    return hasValidTitle && hasValidUrl;
  });

if (validArticles.length === 0) {
  return [];
}

return validArticles.map(article => ({ json: article }));
```

### Prompt AI para Filtrado (Especializado en Construccion Modular)

```
Eres un curador de contenido para ModulorIA, agencia de IA especializada en CONSTRUCCION MODULAR y prefabricada.

PRIORIDAD MAXIMA - Selecciona noticias sobre:
1. Construccion MODULAR y prefabricada
2. Construccion off-site / industrializada
3. IA aplicada a construccion modular
4. Automatizacion en fabricas de modulos
5. BIM para proyectos modulares
6. Empresas de construccion modular

PRIORIDAD MEDIA:
- Tecnologia general de construccion aplicable a modular
- Innovacion en procesos constructivos

RECHAZA:
- IA general sin relacion con construccion
- Construccion tradicional sin componente tecnologico
- Noticias que no aporten valor a empresas de construccion modular

Devuelve SOLO JSON array. Maximo 3-4 noticias MAS relevantes.
Si ninguna es relevante para construccion modular, devuelve: []
```

---

## Workflow 2: Envio Newsletter Semanal - COMPLETADO

### Estado: ACTIVO Y FUNCIONANDO

### Configuracion Final

| Componente | Detalle |
|------------|---------|
| **Trigger** | Miercoles a las 9:00 AM |
| **Credencial Notion** | ModulorIA N8N |
| **Credencial OpenAI** | Configurada (GPT-4o) |
| **Credencial Resend** | Header Auth con Bearer token |
| **Credencial Notion HTTP** | Header Auth para marcar articulos |

### Flujo del Workflow 2

```
[Miercoles 9:00 AM]
    |
    v
[Leer Contenido de Notion] ──────┐
    (Filter: Usado = false)      │
                                 v
[Leer Suscriptores] ─────────> [Merge: APPEND]
    (Filter: Activo = true)      │
                                 v
                        [Preparar Datos]
                          (Separa items por tipo)
                                 │
                                 v
                        [AI Generar Newsletter]
                          (GPT-4o crea contenido)
                                 │
                                 v
                        [Aplicar Template]
                          (HTML con branding)
                                 │
                                 v
                        [Enviar con Resend]
                          (Loop por suscriptor)
                                 │
                                 v
                        [Obtener IDs]
                          (Extrae articleIds)
                                 │
                                 v
                        [Marcar como Usado]
                          (HTTP Request a Notion API)
```

### Codigo Clave - Nodo "Preparar Datos"

```javascript
// Obtener datos del Merge (mode: Append)
const allData = $input.all();

// Separar por la base de datos de origen
const contentItems = [];
const subscriberItems = [];

for (const item of allData) {
  const data = item.json;
  const parentDbId = data.parent?.database_id?.replace(/-/g, '') || '';

  if (parentDbId === '061483b8b89b48d0beece04cbefb2300') {
    // Newsletter Content
    contentItems.push(item);
  } else if (parentDbId === '1bf2788f3a7f45608f437a9280e0b691') {
    // Suscriptores
    subscriberItems.push(item);
  } else {
    // Fallback por propiedades
    if (data.property_usado !== undefined || data.property_url !== undefined) {
      contentItems.push(item);
    } else if (data.property_activo !== undefined) {
      subscriberItems.push(item);
    }
  }
}

if (contentItems.length === 0) {
  throw new Error('No hay contenido nuevo para el newsletter');
}

if (subscriberItems.length === 0) {
  throw new Error('No hay suscriptores activos');
}

// Formatear articulos
const articles = contentItems.map(item => {
  const data = item.json;
  return {
    id: data.id,
    titulo: data.name || data.property_t_tulo || 'Sin titulo',
    url: data.property_url || '',
    fuente: data.property_fuente || '',
    resumen: data.property_resumen_ai || '',
    categoria: data.property_categor_a || 'Industria'
  };
});

// Formatear suscriptores
const subscribers = subscriberItems.map(item => {
  const data = item.json;
  return {
    email: data.name || '',
    nombre: data.property_nombre || ''
  };
}).filter(s => s.email && s.email.includes('@'));

// Crear texto para AI
const articlesForAI = articles.map((a, i) =>
  `${i + 1}. [${a.categoria}] ${a.titulo}\n   ${a.resumen}\n   Link: ${a.url}`
).join('\n\n');

return [{
  json: {
    articlesForAI,
    articles,
    subscribers,
    articleIds: articles.map(a => a.id),
    subscriberCount: subscribers.length,
    articleCount: articles.length
  }
}];
```

### Codigo Clave - Nodo "Obtener IDs"

```javascript
// Obtener IDs de articulos para marcar como usados
const previousData = $('Preparar Datos').first().json;
const articleIds = previousData.articleIds || [];

if (articleIds.length === 0) {
  return [];
}

return articleIds.map(id => ({
  json: { pageId: id }
}));
```

### Nodo "Marcar como Usado" (HTTP Request)

| Configuracion | Valor |
|---------------|-------|
| Method | PATCH |
| URL | `https://api.notion.com/v1/pages/{{ $json.pageId }}` |
| Authentication | Header Auth (Notion API Key) |
| Header | Notion-Version: 2022-06-28 |
| Body (JSON) | `{"properties": {"Usado": {"checkbox": true}}}` |

### Credencial Notion API Key (Header Auth)

| Campo | Valor |
|-------|-------|
| Name | Notion API Key |
| Header Name | Authorization |
| Header Value | Bearer [NOTION_API_KEY] |

---

## Errores Resueltos Durante la Sesion

### Sesion AM (Workflow 1)

| Error | Causa | Solucion |
|-------|-------|----------|
| RSS 404 (ENR News) | Feed no disponible | Habilitado "Continue On Fail" |
| Notion "Bad request" URL | URL como texto, no tipo URL | Configurar tipo URL en dropdown |
| Notion campos concatenados | Campo y valor juntos | Separar: campo en dropdown, valor en expresion |
| URLs vacias a Notion | AI no recibia links | Agregar `Link: ${n.link}` al prompt |
| "Sin titulo" en Notion | Items de error pasaban | Filtrar `!item.json.error && item.json.title` |
| Campos con nombres diferentes | AI devuelve title/link vs titulo/url | Aceptar ambos formatos |

### Sesion PM (Workflow 2)

| Error | Causa | Solucion |
|-------|-------|----------|
| "Leer Suscriptores hasn't been executed" | Nodos paralelos sin Merge | Agregar nodo Merge entre reads y Preparar Datos |
| "No hay suscriptores activos" | Merge en modo Combine mezclaba datos | Cambiar Merge a modo **Append** |
| "Usado is not a property that exists" | pageId era de suscriptor, no de articulo | Corregir flujo de datos con Merge Append |
| Notion node no encontraba propiedad | Bug del nodo nativo de Notion | Usar HTTP Request con Notion API directamente |

### Error Critico Resuelto: Merge en modo incorrecto

**Problema**: El nodo Merge estaba en modo "Combine" que fusionaba un articulo + un suscriptor en un solo registro mezclado. Esto hacia que:
- El ID del registro combinado fuera el del suscriptor
- Al intentar marcar como "Usado", fallaba porque los suscriptores no tienen esa propiedad

**Solucion**: Cambiar el nodo Merge a modo **"Append"** para mantener los items separados:
- Items 1-N: Articulos de Newsletter Content
- Items N+1-M: Suscriptores

---

## Credenciales Creadas en N8N

| Credencial | Tipo | Uso | Estado |
|------------|------|-----|--------|
| ModulorIA N8N | Notion API | Leer bases de datos | ACTIVO |
| OpenAI | OpenAI API | Filtrado y generacion de contenido | ACTIVO |
| Resend API Key | Header Auth | Enviar emails via HTTP Request | ACTIVO |
| Notion API Key | Header Auth | Actualizar paginas via HTTP Request | ACTIVO |

---

## Verificacion del Sistema

### Workflow 1 (Recolector Diario)
- **Trigger**: Diario 8:00 AM
- **Verificar**: Notion > Newsletter Content > articulos nuevos
- **Test manual**: Ejecutar workflow en N8N

### Workflow 2 (Envio Newsletter)
- **Trigger**: Miercoles 9:00 AM
- **Verificar**: Email recibido por suscriptores
- **Verificar**: Articulos marcados como Usado = true en Notion
- **Test manual**: Ejecutar workflow en N8N

---

## Resumen Final

| Componente | Estado |
|------------|--------|
| Workflow 1: Recolector Diario | ACTIVO |
| Workflow 2: Envio Newsletter | ACTIVO |
| Todas las credenciales | CONFIGURADAS |
| Sistema Newsletter | 100% OPERATIVO |

