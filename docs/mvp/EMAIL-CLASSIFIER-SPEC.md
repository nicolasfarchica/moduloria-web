# Email Classifier + Draft Generator - Especificacion Tecnica

> Sistema de clasificacion automatica de emails con generacion de borradores de respuesta
> Producto ModulorIA - Listo para ofrecer a clientes
> Fecha: 2026-01-23

---

## 1. Vision del Producto

Un asistente de email con IA que lee correos entrantes, los clasifica por urgencia y tipo, busca informacion relevante en la base de conocimiento de la empresa, y genera un borrador de respuesta listo para enviar (o revisar y ajustar).

**Propuesta de valor:** "Tu admin contesta emails en 30 segundos en vez de 10 minutos"

---

## 2. Flujo del Sistema

```
[Email Entrante]
      |
      v
[N8N: IMAP/Gmail Trigger - Lee email nuevo]
      |
      v
[GPT-4o-mini: CLASIFICAR]
├── Urgencia: Alta / Media / Baja / Spam
├── Categoria: Cliente / Proveedor / Interno / Gobierno / Comercial
├── Accion requerida: Responder / Informar / Archivar / Delegar
└── Resumen: 1 linea del contenido
      |
      v
[BUSCAR CONTEXTO]
├── Airtable/Notion: Historial con ese contacto
├── Base conocimiento: Respuestas previas similares
└── Datos empresa: Precios, plazos, politicas
      |
      v
[GPT-4o-mini: GENERAR BORRADOR]
├── Tono profesional pero cercano
├── Basado en contexto encontrado
├── Incluye datos reales (no inventa)
└── Marca lo que necesita revision humana con [VERIFICAR]
      |
      v
[ENTREGA AL USUARIO]
├── Opcion A: Email con resumen + borrador (copia al admin)
├── Opcion B: WhatsApp con resumen + link al borrador
└── Opcion C: Guardar borrador en Gmail (Drafts)
```

---

## 3. Arquitectura N8N

### Workflow Principal: Email Classifier + Drafter

```
[1. IMAP Trigger]
    Configuracion:
    - Host: imap.gmail.com (o outlook)
    - Puerto: 993
    - SSL: true
    - Carpeta: INBOX
    - Polling: cada 2 minutos
    - Mark as read: true
    |
    v
[2. EXTRACT DATA]
    Configuracion (Code node):
    - from: email del remitente
    - subject: asunto
    - body: cuerpo (text o html stripped)
    - date: fecha/hora
    - attachments: boolean
    - thread_id: para agrupar conversaciones
    |
    v
[3. CLASIFICAR (OpenAI)]
    Modelo: gpt-4o-mini
    System prompt: (ver seccion 4)
    Input: { from, subject, body }
    Output JSON: {
      urgencia: "alta|media|baja|spam",
      categoria: "cliente|proveedor|interno|gobierno|comercial|spam",
      accion: "responder|informar|archivar|delegar",
      resumen: "string",
      sentimiento: "positivo|neutral|negativo|urgente",
      delegado_sugerido: "string|null"
    }
    |
    v
[4. ROUTER (Switch)]
    ├── urgencia == "spam" → [Archivar + Skip]
    ├── accion == "archivar" → [Mover a carpeta + Log]
    ├── accion == "delegar" → [Notificar a delegado]
    └── accion == "responder" o "informar" → [Continuar]
    |
    v
[5. BUSCAR CONTEXTO (HTTP/Airtable)]
    ├── Buscar en Airtable: registros del mismo remitente
    │   (ultimos emails, proyectos activos, notas)
    ├── Buscar en base conocimiento: FAQs, plantillas
    │   (match por categoria + palabras clave)
    └── Datos empresa: tabla de referencia rapida
        (precios, plazos, contactos internos)
    |
    v
[6. GENERAR BORRADOR (OpenAI)]
    Modelo: gpt-4o-mini
    System prompt: (ver seccion 5)
    Input: {
      email_original: { from, subject, body },
      clasificacion: { urgencia, categoria, ... },
      contexto: { historial, faqs, datos_empresa }
    }
    Output: {
      borrador_respuesta: "string",
      notas_para_admin: "string",
      confianza: "alta|media|baja"
    }
    |
    v
[7. ENTREGAR BORRADOR]
    ├── Si confianza "alta" → Guardar como Draft en Gmail
    ├── Si confianza "media" → Draft + WhatsApp al admin
    └── Si confianza "baja" → Solo WhatsApp con resumen
    |
    v
[8. LOG en Airtable]
    Registrar: fecha, remitente, clasificacion, accion tomada,
    borrador generado, tiempo ahorrado estimado
```

---

## 4. System Prompt: Clasificador

```
Eres un clasificador de emails para una empresa de construccion.
Tu trabajo es analizar emails entrantes y clasificarlos.

REGLAS:
1. Responde SOLO con JSON valido, sin texto adicional
2. Se conservador con la urgencia: solo "alta" si hay deadline <24h o problema critico
3. "spam" incluye: newsletters no solicitados, ventas, phishing
4. "delegar" si el email es claramente para otra persona del equipo

CATEGORIAS:
- cliente: emails de clientes actuales o potenciales
- proveedor: proveedores, materiales, logistica
- interno: equipo interno, rrhh, administracion
- gobierno: ayuntamientos, permisos, normativa, inspecciones
- comercial: ofertas comerciales, propuestas recibidas
- spam: newsletters, publicidad, phishing

URGENCIA:
- alta: deadline <24h, problema en obra, cliente molesto, emergencia
- media: requiere accion esta semana, seguimiento pendiente
- baja: informativo, sin deadline, puede esperar
- spam: no requiere atencion

ACCION:
- responder: el email espera una respuesta directa
- informar: solo necesita que alguien lo sepa (CC, FYI)
- archivar: no requiere accion, solo registro
- delegar: debe ir a otra persona del equipo

Responde con este JSON exacto:
{
  "urgencia": "",
  "categoria": "",
  "accion": "",
  "resumen": "1 frase maxima describiendo el email",
  "sentimiento": "",
  "delegado_sugerido": null o "nombre/rol"
}
```

---

## 5. System Prompt: Generador de Borradores

```
Eres un asistente de redaccion de emails para una empresa de construccion modular.
Tu trabajo es generar borradores de respuesta profesionales basados en el email recibido y el contexto disponible.

REGLAS:
1. Tono: profesional pero cercano, tutea al cliente
2. Longitud: 3-6 lineas maximo (conciso y directo)
3. NUNCA inventes datos, precios, fechas o plazos que no esten en el contexto
4. Si necesitas un dato que no tienes, escribe [VERIFICAR: descripcion]
5. Incluye saludo y despedida apropiados
6. Si hay un archivo adjunto mencionado, haz referencia a el
7. Firma: solo "Un saludo,\n[NOMBRE]" (el admin pone su nombre)

ESTRUCTURA DE RESPUESTA:
- Saludo personalizado (usar nombre del remitente si disponible)
- Acuse de recibo (confirmar que recibiste/entendiste)
- Respuesta/accion concreta
- Proximo paso claro
- Despedida

CONTEXTO DISPONIBLE:
- Historial con el contacto (emails previos, proyectos)
- Base de conocimiento (FAQs, politicas, procesos)
- Datos de la empresa (servicios, plazos generales)

Si el contexto no tiene info suficiente para responder bien,
indica confianza "baja" y en notas_para_admin explica que falta.

Responde con este JSON:
{
  "borrador_respuesta": "El email completo listo para enviar",
  "notas_para_admin": "Notas internas sobre que verificar o ajustar",
  "confianza": "alta|media|baja"
}
```

---

## 6. Base de Conocimiento (Airtable)

### Tabla: Contactos
| Campo | Tipo | Descripcion |
|-------|------|-------------|
| Email | Email | Direccion del contacto |
| Nombre | Text | Nombre completo |
| Empresa | Text | Empresa |
| Tipo | Select | Cliente / Proveedor / Otro |
| Proyectos | Linked | Proyectos relacionados |
| Notas | Long text | Contexto relevante |
| Ultimo Email | Date | Fecha ultimo email procesado |

### Tabla: FAQ / Plantillas
| Campo | Tipo | Descripcion |
|-------|------|-------------|
| Pregunta/Tema | Text | Tema de la FAQ |
| Categoria | Select | Mismas categorias del clasificador |
| Palabras Clave | Text | Para matching |
| Respuesta Base | Long text | Respuesta template |
| Datos Variables | Text | Que datos insertar ([PRECIO], [PLAZO], etc.) |

### Tabla: Datos Empresa
| Campo | Tipo | Descripcion |
|-------|------|-------------|
| Clave | Text | Identificador (ej: "plazo_entrega") |
| Valor | Text | Dato actual (ej: "4-6 semanas") |
| Categoria | Select | Operaciones / Comercial / Legal |
| Actualizado | Date | Ultima actualizacion |

### Tabla: Email Log
| Campo | Tipo | Descripcion |
|-------|------|-------------|
| Fecha | DateTime | Cuando se proceso |
| Remitente | Email | Quien envio |
| Asunto | Text | Subject original |
| Clasificacion | JSON | Resultado del clasificador |
| Borrador | Long text | Respuesta generada |
| Confianza | Select | Alta / Media / Baja |
| Accion Admin | Select | Enviado / Editado / Descartado |
| Tiempo Ahorrado | Number | Minutos estimados ahorrados |

---

## 7. Notificacion al Admin (WhatsApp)

### Formato del mensaje:

```
📧 *Nuevo email procesado*

De: Juan Garcia (ClienteABC)
Asunto: Retraso entrega modulos
Urgencia: 🔴 ALTA
Categoria: Cliente
Sentimiento: Negativo

📝 *Resumen:*
Cliente reporta retraso de 3 dias en entrega de modulos para obra Pozuelo.
Pide fecha actualizada.

✍️ *Borrador generado:* (confianza MEDIA)
"Hola Juan, gracias por avisarnos. Lamento el retraso.
Verifico con produccion y te confirmo la nueva fecha hoy
antes de las 17:00. [VERIFICAR: fecha real con produccion]
Un saludo, [NOMBRE]"

⚠️ *Notas:* Verificar fecha real con jefe de produccion
antes de enviar.

---
Responde:
1 - Enviar tal cual
2 - Voy a editarlo
3 - Ignorar
```

---

## 8. Implementacion en N8N - Nodos Detallados

### Nodo 1: Email Trigger (IMAP)
```json
{
  "node": "IMAP Email",
  "parameters": {
    "host": "imap.gmail.com",
    "port": 993,
    "secure": true,
    "credentials": "Gmail IMAP",
    "mailbox": "INBOX",
    "options": {
      "markSeen": true,
      "fetchUnread": true
    }
  },
  "pollInterval": 2
}
```

### Nodo 2: Extract Data (Code)
```javascript
// Code node
const email = $input.first().json;

return [{
  json: {
    from: email.from?.text || email.from,
    fromEmail: email.from?.value?.[0]?.address || email.from,
    subject: email.subject || "(Sin asunto)",
    body: email.text || email.html?.replace(/<[^>]*>/g, '') || "",
    date: email.date,
    hasAttachments: (email.attachments?.length || 0) > 0,
    messageId: email.messageId,
    // Truncar body a 2000 chars para no gastar tokens
    bodyTruncated: (email.text || "").substring(0, 2000)
  }
}];
```

### Nodo 3: Clasificar (OpenAI)
```json
{
  "node": "OpenAI",
  "parameters": {
    "model": "gpt-4o-mini",
    "systemMessage": "[System prompt del clasificador - seccion 4]",
    "userMessage": "Email de: {{$json.from}}\nAsunto: {{$json.subject}}\n\nContenido:\n{{$json.bodyTruncated}}",
    "options": {
      "temperature": 0.1,
      "maxTokens": 200,
      "responseFormat": "json"
    }
  }
}
```

### Nodo 4: Switch (Router)
```json
{
  "node": "Switch",
  "parameters": {
    "conditions": [
      {
        "value": "={{$json.clasificacion.urgencia}}",
        "operation": "equal",
        "value2": "spam",
        "output": 0
      },
      {
        "value": "={{$json.clasificacion.accion}}",
        "operation": "equal",
        "value2": "archivar",
        "output": 1
      },
      {
        "value": "={{$json.clasificacion.accion}}",
        "operation": "equal",
        "value2": "responder",
        "output": 2
      }
    ],
    "fallbackOutput": 2
  }
}
```

### Nodo 5: Buscar Contexto (Airtable)
```json
{
  "node": "Airtable",
  "parameters": {
    "operation": "search",
    "base": "Email Classifier Base",
    "table": "Contactos",
    "filterByFormula": "FIND('{{$json.fromEmail}}', {Email})"
  }
}
```

### Nodo 6: Generar Borrador (OpenAI)
```json
{
  "node": "OpenAI",
  "parameters": {
    "model": "gpt-4o-mini",
    "systemMessage": "[System prompt del generador - seccion 5]",
    "userMessage": "EMAIL ORIGINAL:\nDe: {{$json.from}}\nAsunto: {{$json.subject}}\nContenido: {{$json.bodyTruncated}}\n\nCLASIFICACION:\n{{$json.clasificacion}}\n\nCONTEXTO ENCONTRADO:\n{{$json.contexto}}",
    "options": {
      "temperature": 0.3,
      "maxTokens": 500,
      "responseFormat": "json"
    }
  }
}
```

### Nodo 7: Crear Draft en Gmail
```json
{
  "node": "Gmail",
  "parameters": {
    "operation": "createDraft",
    "to": "{{$json.fromEmail}}",
    "subject": "Re: {{$json.subject}}",
    "message": "{{$json.borrador_respuesta}}",
    "options": {
      "inReplyTo": "{{$json.messageId}}"
    }
  }
}
```

### Nodo 8: Notificar WhatsApp
```json
{
  "node": "Twilio",
  "parameters": {
    "operation": "sendMessage",
    "from": "whatsapp:+14155238886",
    "to": "whatsapp:+34XXXXXXXXXX",
    "body": "📧 *Nuevo email*\nDe: {{$json.from}}\nUrgencia: {{$json.clasificacion.urgencia}}\n\n{{$json.borrador_respuesta}}"
  }
}
```

---

## 9. Configuracion Paso a Paso

### Pre-requisitos:
- [ ] Cuenta Gmail con IMAP habilitado (o App Password)
- [ ] N8N Cloud o self-hosted funcionando
- [ ] API Key OpenAI configurada en N8N
- [ ] Airtable base creada con las 4 tablas
- [ ] (Opcional) WhatsApp Business via Twilio

### Pasos:

**Dia 1: Setup Base**
1. Crear Airtable base con tablas Contactos, FAQ, Datos Empresa, Email Log
2. Poblar FAQ con 10-15 respuestas comunes (plazos, procesos, etc.)
3. Poblar Datos Empresa con info basica
4. Agregar 5-10 contactos frecuentes

**Dia 2: Workflow Clasificacion**
5. Crear workflow N8N con trigger IMAP
6. Agregar nodo Code para extraer datos
7. Agregar nodo OpenAI con prompt clasificador
8. Agregar Switch para routing
9. Test con 5-10 emails reales

**Dia 3: Workflow Borrador**
10. Agregar nodo Airtable busqueda de contexto
11. Agregar nodo OpenAI generador de borrador
12. Agregar nodo Gmail crear draft
13. Test end-to-end

**Dia 4: Notificaciones + Polish**
14. Agregar notificacion WhatsApp (opcional)
15. Agregar logging en Airtable
16. Ajustar prompts basado en resultados de testing
17. Manejar edge cases (emails vacios, adjuntos, threads)

**Dia 5: Demo + Documentacion**
18. Grabar video demo (3 min)
19. Preparar metricas: emails procesados, tiempo ahorrado, precision
20. Crear propuesta comercial para clientes

---

## 10. Costos

| Concepto | Mensual |
|----------|---------|
| OpenAI API (200 emails/dia × 2 calls × 30 dias) | €20-40 |
| Airtable Pro | €20 |
| N8N Cloud | €24 |
| Twilio WhatsApp (opcional) | €5-15 |
| Gmail | €0 (cuenta existente) |
| **TOTAL** | **€64-99/mes** |

**vs. Tiempo admin ahorrado:** 2-3 horas/dia × €15-20/hora × 20 dias = **€600-1,200/mes**

**ROI:** ~1,000%

---

## 11. Metricas de Exito

| KPI | Semana 1 | Mes 1 | Mes 3 |
|-----|----------|-------|-------|
| Emails procesados/dia | 20 | 50 | 100+ |
| Precision clasificacion | 75% | 85% | 92% |
| Borradores usados sin editar | 30% | 50% | 65% |
| Borradores editados y enviados | 40% | 35% | 25% |
| Tiempo respuesta promedio | 2h | 45min | 15min |
| Tiempo admin ahorrado/dia | 1h | 2h | 3h |

---

## 12. Ejemplo Real

### Email entrante:
```
De: juan.garcia@constructoraXYZ.com
Asunto: Presupuesto modulos prefabricados planta Getafe
Fecha: 23-ene-2026 10:15

Buenos dias,

Somos Constructora XYZ y estamos interesados en un presupuesto
para 12 modulos prefabricados para nuestra nueva planta en Getafe.
Necesitariamos entrega antes de marzo.

Podrian enviarnos una propuesta?

Saludos,
Juan Garcia
Director de Operaciones
```

### Clasificacion automatica:
```json
{
  "urgencia": "media",
  "categoria": "cliente",
  "accion": "responder",
  "resumen": "Cliente potencial solicita presupuesto 12 modulos para planta Getafe, deadline marzo",
  "sentimiento": "positivo",
  "delegado_sugerido": null
}
```

### Contexto encontrado:
- Contacto: No existe en base (nuevo lead)
- FAQ: "Presupuestos: plazo de respuesta 48h, requiere datos de especificaciones"
- Datos empresa: "Plazo entrega modulos: 4-6 semanas desde aprobacion"

### Borrador generado:
```
Hola Juan,

Gracias por contactarnos. Nos encanta que esteis considerando
modulos prefabricados para la planta de Getafe.

Para preparar un presupuesto preciso, necesitaria algunos datos:
- Dimensiones aproximadas de cada modulo
- Uso previsto (oficinas, almacen, produccion)
- Instalaciones requeridas (electrica, fontaneria, climatizacion)

Si te parece, podemos agendar una llamada de 20 minutos para
definir el alcance: [VERIFICAR: incluir link Calendly]

Nuestro plazo de entrega habitual es 4-6 semanas desde aprobacion,
asi que para marzo estariamos dentro de plazo.

Un saludo,
[NOMBRE]
```

### Notificacion WhatsApp al admin:
```
📧 Nuevo email - Urgencia MEDIA
De: Juan Garcia (Constructora XYZ)
📝 Pide presupuesto 12 modulos, Getafe, deadline marzo
✍️ Borrador generado (confianza MEDIA)
⚠️ Verificar: agregar link Calendly, confirmar plazo real

Responde: 1-Enviar | 2-Editar | 3-Ignorar
```

---

## 13. Mejoras Futuras

1. **Auto-learning:** Cuando el admin edita un borrador, guardar la version final como ejemplo para mejorar futuros borradores
2. **Multi-idioma:** Detectar idioma del email y responder en el mismo
3. **Adjuntos:** OCR de facturas/documentos adjuntos para incluir datos en contexto
4. **Threading:** Agrupar emails del mismo hilo y mantener contexto de la conversacion
5. **Prioridad inteligente:** Aprender patrones del admin (a quien responde primero) y ajustar urgencia
6. **CRM auto-update:** Crear/actualizar lead en Notion cuando detecta email de cliente nuevo
7. **Analytics dashboard:** Tipos de emails mas frecuentes, tiempos de respuesta, ROI acumulado

---

*Especificacion para ModulorIA - Producto "Email Classifier + Draft Generator"*
*Implementable en 5 dias con N8N + OpenAI + Airtable*
