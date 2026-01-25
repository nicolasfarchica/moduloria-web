# Comando /blog - Crear artículo semanal para SEO

Cuando el usuario ejecute este comando, guíalo para crear un artículo de blog optimizado para SEO.

## Contexto

- ModulorIA publica artículos los **martes**
- Objetivo: mejorar posicionamiento en Google para "IA construcción modular"
- Público: directores y gerentes de empresas de construcción modular/industrializada
- Tono: profesional pero accesible, con datos concretos, sin tecnicismos innecesarios

## Pasos a ejecutar

### 1. Revisar contenido existente
- Lee los archivos en `web/src/lib/blog.ts` o `web/src/app/blog/` para ver qué artículos ya existen
- Evita repetir temas ya cubiertos

### 2. Proponer 3 temas
Basándote en:
- Los 25 pain points en `.taskmaster/tasks/tasks.json` (problemas de construcción modular)
- Tendencias de IA en construcción
- Keywords SEO relevantes: "automatización construcción", "IA construcción modular", "digitalización obra", etc.

Presenta los temas así:
```
## Propuestas para esta semana

| # | Tema | Keyword principal | Por qué ahora |
|---|------|-------------------|---------------|
| 1 | [Título] | [keyword] | [razón] |
| 2 | [Título] | [keyword] | [razón] |
| 3 | [Título] | [keyword] | [razón] |

¿Cuál te gusta más? (1, 2, 3, o decime otro tema)
```

### 3. Crear estructura del artículo
Una vez elegido el tema:
- Título SEO (50-60 caracteres)
- Meta description (150-160 caracteres)
- H2s y H3s (estructura)
- Puntos clave a cubrir
- CTA final (hacia /auditoria)

### 4. Escribir el artículo
- Longitud: 800-1200 palabras
- Incluir datos/estadísticas cuando sea posible
- Usar ejemplos concretos de construcción modular
- Incluir al menos 1 imagen sugerida (describir qué imagen buscar)
- Terminar con CTA claro

### 5. Formato de entrega
Entregar el artículo en formato listo para copiar:
```markdown
---
title: "Título del artículo"
description: "Meta description"
date: "YYYY-MM-DD"
author: "Nicolás Farchica"
image: "/images/blog/nombre-imagen.jpg"
tags: ["tag1", "tag2"]
---

[Contenido del artículo]
```

### 6. Pasos finales
Indicar al usuario:
1. Dónde guardar el archivo (ruta exacta)
2. Qué imagen necesita conseguir
3. Cómo verificar que se ve bien localmente
4. Recordar hacer commit y push

## Keywords prioritarias para SEO

Usar estas keywords en los artículos:
- IA construcción modular
- Automatización construcción
- Digitalización obra
- Software construcción modular
- Eficiencia construcción industrializada
- ROI automatización construcción
- N8N construcción
- ChatGPT construcción
- OCR facturas construcción
- Gestión proyectos modulares

## Directrices SEO (MUY IMPORTANTE)

### Estructura de Keywords
Cada artículo debe incluir:
- **1 keyword principal** (short-tail): en título, H1, primer párrafo, meta description
- **2-3 keywords secundarias** (long-tail): distribuidas en H2s y contenido
- **Keywords LSI** (relacionadas): variaciones naturales en el texto

### Keywords prioritarias ModulorIA
**Short-tail (alta competencia, alto volumen):**
- automatización construcción
- IA construcción
- software construcción modular
- digitalización obra

**Long-tail (menor competencia, alta conversión):**
- automatizar facturas empresa constructora
- chatbot para constructoras modulares
- reducir tiempo reportes obra
- OCR documentos construcción
- automatización PYMES construcción España

### Formato del artículo (SEO-friendly)
- **Longitud:** 600-900 palabras (conciso, escaneable)
- **Párrafos:** Máximo 3-4 líneas
- **H2 cada 150-200 palabras** con keyword
- **Listas y bullets:** Mínimo 2 por artículo
- **Negrita** en frases clave (ayuda al escaneo)
- **Primer párrafo:** Debe contener keyword principal y enganchar en 2 líneas

### Estructura visual recomendada
```
[Título con keyword] (H1)
[Párrafo intro corto - 2-3 líneas con keyword]

[H2 con keyword secundaria]
[Párrafo corto]
[Lista de 3-5 puntos]

[H2 problema/solución]
[Párrafo con dato concreto]

[H2 ejemplo práctico]
[Caso real o hipotético con números]

[H2 CTA]
[Párrafo final + link a /auditoria]
```

### Meta Description
- Exactamente 150-160 caracteres
- Incluir keyword principal
- Incluir beneficio claro
- Terminar con gancho o pregunta

Ejemplo: "Descubre cómo automatizar facturas en tu constructora y pasar de 15 min a 30 seg por documento. Guía práctica con ejemplos reales."

## Notas importantes

- No inventar estadísticas, usar datos reales o indicar "según estudios del sector"
- Mantener el tono de ModulorIA: práctico, sin humo, orientado a resultados
- Cada artículo debe tener UN objetivo claro (educar sobre un problema o mostrar una solución)
- Siempre terminar con CTA hacia la auditoría gratuita
- **Priorizar valor + posicionamiento SEO en cada artículo**
- **Contenido escaneable:** el lector debe entender el valor en 10 segundos
