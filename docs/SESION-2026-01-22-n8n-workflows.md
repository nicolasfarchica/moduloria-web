# Sesion 2026-01-22: Configuracion Workflows N8N

## Resumen Ejecutivo

Se configuro exitosamente el **Workflow 1: Recolector Diario de Contenido** en N8N. El workflow esta activo y funcionando, recolectando noticias relevantes para construccion modular y guardandolas en Notion.

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

## Workflow 2: Envio Newsletter Semanal - PENDIENTE CONFIGURAR

### Estado: IMPORTADO, PENDIENTE CONFIGURAR CREDENCIALES

### Lo que falta hacer:

1. **Nodos de Notion** (2 nodos):
   - Seleccionar credencial "ModulorIA N8N" en:
     - "Leer Contenido de Notion"
     - "Leer Suscriptores"

2. **Nodo OpenAI**:
   - Seleccionar credencial de OpenAI existente

3. **Nodo "Enviar con Resend"** (HTTP Request):
   - Crear nueva credencial Header Auth:
     - Name: `Resend API Key`
     - Header Name: `Authorization`
     - Header Value: `Bearer [RESEND_API_KEY]`

4. **Activar el workflow**

### Flujo del Workflow 2

```
[Miercoles 9:00 AM]
    |
    v
[Leer contenido no usado] + [Leer suscriptores activos]
    |
    v
[Preparar datos para AI]
    |
    v
[AI genera contenido del newsletter]
    |
    v
[Aplicar template HTML]
    |
    v
[Enviar email via Resend] --> Loop por cada suscriptor
    |
    v
[Marcar articulos como "Usado" en Notion]
```

---

## Errores Resueltos Durante la Sesion

| Error | Causa | Solucion |
|-------|-------|----------|
| RSS 404 (ENR News) | Feed no disponible | Habilitado "Continue On Fail" |
| Notion "Bad request" URL | URL como texto, no tipo URL | Configurar tipo URL en dropdown |
| Notion campos concatenados | Campo y valor juntos | Separar: campo en dropdown, valor en expresion |
| URLs vacias a Notion | AI no recibia links | Agregar `Link: ${n.link}` al prompt |
| "Sin titulo" en Notion | Items de error pasaban | Filtrar `!item.json.error && item.json.title` |
| Campos con nombres diferentes | AI devuelve title/link vs titulo/url | Aceptar ambos formatos |

---

## Credenciales Creadas en N8N

| Credencial | Tipo | Uso |
|------------|------|-----|
| ModulorIA N8N | Notion API | Acceso a bases de datos Newsletter |
| OpenAI | OpenAI API | Filtrado y generacion de contenido |
| Resend API Key | Header Auth | PENDIENTE CREAR para Workflow 2 |

---

## Proximos Pasos (Manana)

1. [ ] Configurar credenciales en Workflow 2
2. [ ] Crear credencial Resend Header Auth
3. [ ] Probar Workflow 2 manualmente
4. [ ] Activar Workflow 2
5. [ ] Verificar que Workflow 1 recolecto contenido (revisar Notion)

---

## Verificacion Workflow 1

Para verificar que funciona:
1. Ir a Notion > Newsletter Content
2. Verificar si hay articulos nuevos con fecha de hoy
3. O ejecutar manualmente el workflow en N8N

