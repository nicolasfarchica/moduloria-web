# Sesion 2 Febrero 2026 - Investigacion RAG / Memoria Personal

## Resumen
Nicolas quiere construir una memoria RAG personal para capturar informacion de videos, articulos y tendencias de IA, y poder relacionarla con su proyecto ModulorIA.

## Logros de hoy
1. **MCP Perplexity instalado y funcionando** - Se verifico con busqueda de prueba sobre tendencias construccion modular 2026
2. **Investigacion completa sobre opciones de RAG/memoria personal**
3. **Plan definido con 3 herramientas complementarias**

---

## Las 3 opciones investigadas

### Opcion 1: Google NotebookLM (gratis, sin codigo)
- **Para que**: Explorar y entender rapido contenido (videos, PDFs, articulos)
- **Como**: Un notebook por tema/proyecto, hasta 300 sources por notebook (Pro)
- **Fortaleza**: Acepta URLs de YouTube directamente, zero alucinaciones, genera audio/video overviews
- **Limitacion**: Cada notebook es una isla, no cruza entre notebooks
- **Estructura recomendada**:
  - Notebook "IA para Construccion" (videos + articulos del tema)
  - Notebook "Ventas y Outreach ModulorIA" (playbooks + recursos ventas)
  - Notebook "Competencia y Mercado" (webs competidores + reportes)

### Opcion 2: Notion (ya lo usa Nicolas)
- **Para que**: Organizar y conectar conocimiento con el negocio
- **Como**: Base de datos "Base de Conocimiento" con propiedades:
  - Titulo, Tipo (Video/Articulo/Podcast/Idea), Fuente (URL)
  - Tags (multi-select), Proyecto relacionado (relation), Problema relacionado (relation)
  - Resumen (3-5 bullets), Aplicable a ModulorIA (checkbox), Accion siguiente
- **Fortaleza**: Ya tiene Notion con CRM y proyectos, puede relacionar contenido con clientes/problemas
- **Limitacion**: Requiere disciplina manual para cada entrada

### Opcion 3: N8N + Pinecone (RAG real, automatizado)
- **Para que**: Consultar todo el conocimiento acumulado por chat
- **Como**: 2 workflows en N8N
  - **Workflow 1 (Ingestion)**: Google Drive trigger → Descargar → Text Splitter → OpenAI Embeddings (text-embedding-3-small) → Pinecone Vector Store
  - **Workflow 2 (Chat)**: Chat trigger → AI Agent (GPT-4o-mini) → Pinecone search → Respuesta
- **Costo estimado**: <$5/mes (Pinecone gratis tier starter, OpenAI embeddings ~$0.02/1M tokens)
- **Fortaleza**: Automatico, busqueda semantica real, se puede conectar a WhatsApp
- **Limitacion**: Requiere setup inicial (1-2 horas)
- **Doble uso**: Memoria personal + demo vendible a clientes

---

## Concepto clave: La conexion proyecto-aprendizaje

El problema que tenia Nicolas: "mi proyecto solo esta aqui en codigo, como lo conecto con lo que aprendo?"

**Solucion**: Meter TODO en el mismo RAG (mismo Pinecone index):
```
Base-Conocimiento/
├── mi-proyecto/          ← Los 132 docs de ModulorIA (pain points, estrategia, prospectos...)
└── aprendizaje/          ← Transcripciones de videos, articulos, notas
```

La busqueda semantica (embeddings) conecta automaticamente un video sobre "OCR para facturas" con el doc de pain points que dice "PYMES pierden 20h/mes en facturas manuales". No hace falta vincular manualmente.

**Ejemplo**: Preguntar al chat "que videos he visto que se relacionen con los problemas de mis prospectos?" y la IA cruza todo sola.

---

## Flujo combinado recomendado

```
VER VIDEO/ARTICULO
    |
    ├→ NotebookLM (explorar, preguntar, audio overview)
    |
    ├→ Notion (entrada en Base Conocimiento, tags, relacion con proyectos)
    |
    └→ Google Drive → N8N → Pinecone (transcripcion para RAG permanente)
                                |
                                └→ Chat "que se sobre X?" (WhatsApp o web)
```

- NotebookLM = entender rapido
- Notion = organizar y conectar con negocio
- N8N + Pinecone = consultar todo por chat

---

## Para empezar rapido (prueba sin setup)
1. Ir a NotebookLM
2. Subir 5-10 docs importantes de docs/ (estrategia, pain points, prospectos)
3. Subir 2-3 links de YouTube recientes
4. Preguntar: "que conexiones ves entre los videos y los problemas documentados?"

---

## Proximos pasos (para manana)
- [ ] Decidir por cual de las 3 opciones empezar
- [ ] Si elige N8N + Pinecone: crear cuenta Pinecone, configurar workflows
- [ ] Si elige NotebookLM: crear primer notebook con docs del proyecto + videos
- [ ] Si elige Notion: crear la base de datos "Base de Conocimiento"

---

## Datos del proyecto al cierre
- 132 documentos en docs/
- 6/15 tareas completadas en Task Master
- Cambios sin commitear: 8 archivos (3 borrados, 1 modificado, 4 nuevos)
- TypeScript: sin errores
- MCP Perplexity: operativo
