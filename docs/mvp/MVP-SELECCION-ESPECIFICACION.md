# MVP Selection & Technical Specification

> Documento de seleccion del MVP optimo para ModulorIA
> Fecha: 2026-01-23
> Autor: Nicolas Farchica / ModulorIA

---

## 1. Executive Summary

Se evaluaron 3 problemas candidatos para el MVP inicial de ModulorIA. Tras un analisis ponderado de complejidad tecnica, tiempo de implementacion, ROI demostrable, potencial de validacion de mercado y reusabilidad, **se recomienda el Problema #08 - Tracking de Herramientas con QR** como MVP principal.

**Recomendacion:**
- **MVP Primario:** #08 Tool Tracking QR (1-2 semanas, ROI 650%, €5.2-10.4K ahorro/mes)
- **MVP Secundario (add-on):** #01 Email Classification (3-5 dias adicionales, ROI 400%)
- **Fase 2 (post-validacion):** #12 Change Orders (mayor impacto pero mas complejo)

---

## 2. Evaluation Matrix

### 2.1 Criterios de Evaluacion

| # | Criterio | Peso (1-5) | Descripcion |
|---|----------|-----------|-------------|
| 1 | Complejidad tecnica (menor = mejor) | 4 | Cantidad de integraciones, APIs, edge cases |
| 2 | Tiempo de implementacion (menor = mejor) | 5 | Dias/semanas hasta MVP funcional |
| 3 | Demostrabilidad del ROI | 5 | Facilidad de mostrar resultados tangibles |
| 4 | Potencial de validacion de mercado | 4 | Resonancia con clientes target |
| 5 | Reusabilidad para otros clientes | 3 | Aplicabilidad cross-client |

### 2.2 Scoring (1-10 por criterio)

| Criterio (Peso) | #01 Email (Score) | #08 QR Tools (Score) | #12 Change Orders (Score) |
|-----------------|-------------------|---------------------|--------------------------|
| Complejidad tecnica (×4) | 9 | 8 | 5 |
| Tiempo implementacion (×5) | 10 | 7 | 5 |
| Demostrabilidad ROI (×5) | 6 | 9 | 10 |
| Validacion mercado (×4) | 7 | 9 | 10 |
| Reusabilidad (×3) | 9 | 8 | 6 |

### 2.3 Resultados Ponderados

| Candidato | Score Ponderado | Ranking |
|-----------|----------------|---------|
| **#08 Tool Tracking QR** | **172/210** | 1 |
| #01 Email Classification | 171/210 | 2 |
| #12 Change Orders | 156/210 | 3 |

### 2.4 Comparativa Rapida

| Metrica | #01 Email | #08 QR Tools | #12 Change Orders |
|---------|-----------|-------------|-------------------|
| Tier | Quick Win | Quick Win | High Impact |
| Implementacion | 3-5 dias | 1-2 semanas | 2-3 semanas |
| Complejidad | Baja | Baja | Media |
| Ahorro mensual | €1.5-3K | €5.2-10.4K | €18-33K |
| ROI | 400% | 650% | 800% |
| Inversion mensual | €70-94 | €30 | €104-116 |
| Payback | 1-2 semanas | 1-2 semanas | 2-4 semanas |
| Factor "Wow" en demo | Medio | Muy Alto | Alto |

---

## 3. Justificacion de la Recomendacion

### Por que #08 Tool Tracking QR como MVP principal:

1. **Tangibilidad fisica:** Los codigos QR son un producto fisico que el cliente puede tocar, ver y mostrar a su equipo. Esto genera una percepcion de valor superior a una solucion puramente digital.

2. **Demo de 5 minutos irresistible:** Escanear un QR con el movil y recibir respuesta instantanea por WhatsApp es una experiencia "wow" que se puede demostrar en cualquier reunion.

3. **3.5x mayor ahorro que Email:** €5.2-10.4K/mes vs €1.5-3K/mes posiciona mejor el valor percibido del servicio.

4. **Especifico del nicho:** Valida que ModulorIA entiende los problemas reales de construccion (no es "otra empresa de IA generica").

5. **Costo operativo minimo:** €30/mes es practicamente irrelevante para el cliente, eliminando objeciones de precio.

6. **Escalabilidad probada:** De 100 herramientas a 1,000+ sin cambios de arquitectura.

7. **Datos para upsell:** Una vez adoptado, los datos de movimiento de herramientas abren oportunidades para:
   - Prediccion de mantenimiento
   - Optimizacion de compras
   - Analisis de productividad por obra

### Por que NO empezar con #12 Change Orders:

- Mayor complejidad tecnica (multiple approval flows, AI enrichment)
- Requiere cambio de procesos internos del cliente (resistencia)
- Demo mas compleja de preparar
- Mas riesgo de fracaso en piloto por factores humanos

### Estrategia secuencial recomendada:

```
Semana 1-2: Implementar #08 Tool Tracking QR (MVP)
    |
    v
Semana 3: Piloto con primer cliente (30 dias medicion)
    |
    v
Semana 3-4: Implementar #01 Email Classification (add-on)
    |
    v
Mes 2-3: Con datos de piloto, presentar caso de exito
    |
    v
Mes 3-4: Implementar #12 Change Orders (High Impact)
```

---

## 4. Technical Specification: MVP #08 - Tool Tracking QR

### 4.1 Vision General

Un sistema de tracking de herramientas via codigos QR + WhatsApp que permite a equipos de construccion registrar prestamos, devoluciones y ubicaciones de herramientas en tiempo real, eliminando busquedas manuales y perdidas.

### 4.2 User Journey

```
OPERADOR EN CAMPO:
==================
1. Ve herramienta → Escanea QR con camara del movil
2. Se abre WhatsApp con mensaje pre-configurado
3. Bot responde: "Taladro DeWalt DW511. Que accion?"
   - 1. Llevar a obra (check-out)
   - 2. Devolver (check-in)
   - 3. Reportar problema
4. Operador responde "1"
5. Bot: "A que obra?"
   - Lista obras activas
6. Operador responde nombre de obra
7. Bot: "Registrado: Taladro DeWalt → Obra Norte → Juan Garcia. Foto del estado?"
8. Operador envia foto (opcional)
9. Bot: "Listo. Buen trabajo!"

SUPERVISOR/JEFE DE OBRA:
=========================
1. Envia WhatsApp: "donde esta el nivel laser?"
2. Bot responde: "Nivel Laser Bosch GLL3-80
   - Ubicacion: Obra Sur
   - Asignado a: Pedro Lopez
   - Desde: 21-ene-2026 (3 dias)
   - Estado: OK"

GERENTE/ADMIN:
==============
- Accede a dashboard Airtable
- Ve: todas las herramientas, ubicaciones, historial
- Recibe alerta semanal: "5 herramientas sin devolver >7 dias"
```

### 4.3 Arquitectura del Sistema

```
                         CAPA FISICA
                         ===========
[Herramienta] ──── [Etiqueta QR laminada]
                         │
                         │ (escaneo = abre link wa.me)
                         v
                    CAPA COMUNICACION
                    =================
               [WhatsApp Business API]
                         │
                         │ (webhook a N8N)
                         v
                    CAPA ORQUESTACION
                    =================
                      [N8N Cloud]
                    /     |     \
                   v      v      v
            [Parser]  [Router]  [Responder]
                   \      |      /
                    v     v     v
                    CAPA DATOS
                    ==========
                   [Airtable Base]
                   ┌─────────────┐
                   │ Herramientas│
                   │ Movimientos │
                   │ Usuarios    │
                   │ Obras       │
                   └─────────────┘
                         │
                         v
                    CAPA ALERTAS
                    ============
              [Cron N8N: Alertas semanales]
                         │
                         v
              [WhatsApp a supervisores]
```

### 4.4 Database Schema (Airtable)

#### Tabla: Herramientas
| Campo | Tipo | Ejemplo |
|-------|------|---------|
| ID | Auto-number | TOOL-001 |
| Nombre | Single line | Taladro DeWalt DW511 |
| Categoria | Single select | Electrica / Manual / Medicion / Seguridad |
| Numero Serie | Single line | DW511-2024-003 |
| Codigo QR | URL | wa.me/34XXXXXXXXX?text=TOOL-001 |
| Estado | Single select | Disponible / En Uso / Mantenimiento / Perdida |
| Ubicacion Actual | Linked (Obras) | Obra Norte |
| Asignado A | Linked (Usuarios) | Juan Garcia |
| Fecha Ultimo Mov | Date | 2026-01-21 |
| Foto Estado | Attachment | [imagen.jpg] |
| Valor Compra | Currency | €400 |
| Fecha Compra | Date | 2024-06-15 |
| Prox Mantenimiento | Date | 2026-03-15 |

#### Tabla: Movimientos
| Campo | Tipo | Ejemplo |
|-------|------|---------|
| ID | Auto-number | MOV-0042 |
| Herramienta | Linked (Herramientas) | TOOL-001 |
| Accion | Single select | Check-out / Check-in / Reporte / Transfer |
| Usuario | Linked (Usuarios) | Juan Garcia |
| Obra Destino | Linked (Obras) | Obra Norte |
| Fecha Hora | DateTime | 2026-01-21 08:30 |
| Foto | Attachment | [estado.jpg] |
| Notas | Long text | "Cable un poco pelado" |
| GPS (opcional) | Single line | 40.4168, -3.7038 |

#### Tabla: Usuarios
| Campo | Tipo | Ejemplo |
|-------|------|---------|
| ID | Auto-number | USR-001 |
| Nombre | Single line | Juan Garcia |
| Telefono WhatsApp | Phone | +34612345678 |
| Rol | Single select | Operador / Supervisor / Admin |
| Obras Asignadas | Linked (Obras) | Obra Norte, Obra Sur |
| Activo | Checkbox | true |

#### Tabla: Obras
| Campo | Tipo | Ejemplo |
|-------|------|---------|
| ID | Auto-number | SITE-001 |
| Nombre | Single line | Obra Norte - Edificio Modular |
| Direccion | Single line | C/ Ejemplo 123, Madrid |
| Estado | Single select | Activa / Finalizada / Pausada |
| Responsable | Linked (Usuarios) | Pedro Lopez |
| Herramientas Actuales | Linked (Herramientas) | [count] |

### 4.5 N8N Workflows

#### Workflow 1: Mensaje Entrante (WhatsApp → Procesamiento)

```
Trigger: Twilio/Wati Webhook
    │
    v
Parse Message:
    │── Si empieza con "TOOL-XXX" → Flujo Check-out/in
    │── Si contiene "donde esta" → Flujo Busqueda
    │── Si contiene "devolver" → Flujo Check-in
    └── Otro → Respuesta "No entendi, usa el QR o escribe 'donde esta [herramienta]'"

Flujo Check-out:
    │
    ├── Buscar herramienta en Airtable (by ID)
    │   └── No encontrada → "Herramienta no registrada"
    │
    ├── Verificar estado
    │   └── Ya en uso → "Esta herramienta esta con [persona] en [obra]. Contactale."
    │
    ├── Preguntar accion (1/2/3)
    │   ├── 1: Check-out → Preguntar obra destino
    │   ├── 2: Check-in → Confirmar devolucion
    │   └── 3: Problema → Registrar incidencia
    │
    ├── Actualizar Airtable:
    │   ├── Herramientas: estado, ubicacion, asignado, fecha
    │   └── Movimientos: nuevo registro
    │
    └── Responder confirmacion por WhatsApp

Flujo Busqueda:
    │
    ├── Extraer nombre herramienta del mensaje
    ├── Buscar en Airtable (fuzzy match por nombre)
    ├── Si encontrada → Responder ubicacion + asignado + fecha
    └── Si no → "No encontre esa herramienta. Herramientas similares: [lista]"
```

#### Workflow 2: Alertas Automaticas (Cron semanal)

```
Trigger: Cron Lunes 9:00 AM
    │
    v
Leer herramientas con estado "En Uso" y Fecha Ultimo Mov > 7 dias
    │
    v
Para cada herramienta:
    ├── Enviar WhatsApp al usuario asignado:
    │   "Recordatorio: Tienes [herramienta] desde hace [X] dias.
    │    Aun la necesitas? Responde SI o NO"
    │
    └── Enviar resumen a supervisor:
        "5 herramientas sin devolver >7 dias:
         1. Taladro DeWalt - Juan - Obra Norte (12 dias)
         2. Nivel Laser - Pedro - Obra Sur (8 dias)
         ..."
```

#### Workflow 3: Resumen Diario (Dashboard)

```
Trigger: Cron Diario 18:00
    │
    v
Calcular metricas del dia:
    ├── Total movimientos hoy
    ├── Herramientas en uso vs disponibles
    ├── Incidencias reportadas
    └── Top 3 herramientas mas usadas
    │
    v
Enviar WhatsApp resumen a admin/gerente
```

### 4.6 QR Code Generation

**Formato del QR:**
```
URL: https://wa.me/34XXXXXXXXX?text=TOOL-001-SCAN
```

Al escanear, abre WhatsApp con mensaje pre-llenado "TOOL-001-SCAN" que el bot reconoce como inicio de interaccion.

**Generacion masiva:**
- Herramienta: qr-code-generator.com o libreria `qrcode` en Node.js
- Tamano: 4cm x 4cm minimo (legible a 30cm distancia)
- Material: Etiqueta vinilo laminado (resistente agua, polvo, golpes)
- Incluye: QR + Texto legible "TOOL-001 | Taladro DeWalt" + Logo ModulorIA

**Template de impresion:**
```
┌──────────────────────────────┐
│  [QR CODE]   TOOL-001       │
│              Taladro DeWalt  │
│              DW511           │
│                              │
│  ModulorIA   Escanea para   │
│              registrar uso   │
└──────────────────────────────┘
```

### 4.7 Conversational Flow (WhatsApp Bot)

```
BOT: Hola! Herramienta detectada:
     TOOL-001 - Taladro DeWalt DW511
     Estado actual: Disponible (Almacen Central)

     Que quieres hacer?
     1 - Llevar a obra
     2 - Reportar problema
     3 - Ver historial

USER: 1

BOT: A que obra la llevas?
     1 - Obra Norte (Edificio Modular)
     2 - Obra Sur (Nave Industrial)
     3 - Otra (escribe nombre)

USER: 1

BOT: Registrado:
     Taladro DeWalt → Obra Norte
     Responsable: Juan Garcia
     Fecha: 23-ene-2026 08:45

     Quieres enviar foto del estado actual? (opcional)

USER: [envia foto]

BOT: Foto guardada. Todo listo!
     Recuerda devolver cuando termines.
```

### 4.8 Edge Cases & Error Handling

| Caso | Manejo |
|------|--------|
| QR no reconocido | "Codigo no valido. Contacta al supervisor." |
| Herramienta ya en uso por otro | Mostrar quien la tiene + obra + WhatsApp directo |
| Usuario no registrado | "Tu numero no esta registrado. Pide al supervisor que te agregue." |
| Mensaje incomprensible | "No entendi. Opciones: 1-Llevar, 2-Devolver, 3-Problema" |
| WhatsApp caido | Fallback: formulario web simple en moduloria.com/scan?tool=TOOL-001 |
| Airtable caido | Cola de mensajes en N8N, reintentar cada 5 min |
| Foto muy pesada | Comprimir automaticamente antes de guardar |
| Herramienta marcada como perdida | Notificar admin + bloquear check-out hasta resolucion |
| Timeout de respuesta (>5 min) | "Sesion expirada. Escanea de nuevo el QR." |

### 4.9 Implementation Timeline

```
DIA 1-2: Setup Base de Datos
├── Crear base Airtable con 4 tablas
├── Poblar con 20-30 herramientas de prueba
├── Configurar vistas: Kanban por estado, Grid completo
└── Crear 3-5 usuarios de prueba

DIA 3-4: Workflow Principal (Check-out/in)
├── Configurar Twilio/Wati sandbox WhatsApp
├── Crear N8N Workflow 1 (mensaje entrante)
├── Implementar flujo check-out completo
├── Implementar flujo check-in
└── Testing interno con datos mock

DIA 5-6: Busqueda + Alertas
├── Implementar flujo busqueda ("donde esta X")
├── Crear Workflow 2 (alertas semanales)
├── Crear Workflow 3 (resumen diario)
└── Testing de todos los flujos

DIA 7: QR Codes + Material
├── Generar QR codes para herramientas de prueba
├── Disenar template de etiquetas
├── Imprimir batch de prueba (10 etiquetas)
└── Probar escaneo fisico end-to-end

DIA 8-9: Testing + Polish
├── Test end-to-end completo (check-out → uso → check-in)
├── Test edge cases
├── Optimizar textos del bot
├── Preparar video demo (Loom, 3-5 min)
└── Documentar troubleshooting

DIA 10: Demo Ready
├── Script de demo preparado
├── QR codes fisicos listos
├── Video demo grabado
├── Metricas baseline definidas
└── Propuesta piloto lista
```

### 4.10 Acceptance Criteria (Definition of Done)

- [ ] Operador puede escanear QR y completar check-out en <60 segundos
- [ ] Operador puede devolver herramienta (check-in) en <30 segundos
- [ ] Supervisor puede buscar ubicacion de herramienta en <10 segundos
- [ ] Sistema registra todos los movimientos con timestamp en Airtable
- [ ] Alertas semanales se envian automaticamente los lunes
- [ ] Bot maneja errores gracefully (QR invalido, usuario desconocido, etc.)
- [ ] Video demo de 5 minutos grabado y listo para presentar
- [ ] 10+ QR codes fisicos impresos y funcionales
- [ ] Dashboard Airtable muestra estado actual de todas las herramientas
- [ ] Tiempo de respuesta del bot <3 segundos

### 4.11 Costs Breakdown

| Concepto | Setup (unico) | Mensual |
|----------|---------------|---------|
| Airtable Pro (5 users) | €0 | €20 |
| N8N Cloud (o self-hosted) | €0 | €8-24 |
| Twilio WhatsApp (sandbox) | €0 | €0 (testing) |
| Twilio WhatsApp (produccion) | €15 | €5-15 |
| QR Labels (100 unidades) | €10 | €0 |
| Impresora etiquetas | €0 (usa impresora normal) | €0 |
| **TOTAL** | **€10-25** | **€33-59** |

**vs. Ahorro mensual del cliente:** €5,200-10,400

**ROI para el cliente:** (€5,200 - €59) / €59 = **8,700%**

### 4.12 KPIs de Exito del Piloto

| KPI | Baseline (sin sistema) | Target (30 dias) | Excepcional |
|-----|----------------------|-------------------|-------------|
| Adopcion (% check-outs registrados) | 0% | 60% | 85% |
| Tiempo busqueda herramienta | 8-15 min | <2 min | <45 seg |
| Herramientas "perdidas" | 5-8/mes | 2/mes | 0 |
| Recuperaciones fisicas/semana | 4-6 | 1-2 | 0 |
| Satisfaccion supervisor (1-10) | - | 7 | 9+ |
| Incidencias reportadas a tiempo | 20% | 60% | 90% |

---

## 5. Technical Specification: Add-on #01 - Email Classification

### 5.1 Vision Rapida

Clasificacion automatica de emails y WhatsApp en 4 categorias de urgencia, con notificaciones inteligentes al responsable correcto.

### 5.2 Scope (Add-on post-MVP)

- **Implementacion:** 3-5 dias adicionales
- **Prerequisito:** MVP #08 funcionando (demuestra que el equipo usa WhatsApp con el bot)
- **Sinergia:** El mismo bot WhatsApp que usa el tracking puede recibir alertas de emails urgentes

### 5.3 Architecture Summary

```
[Gmail/Outlook] → [N8N Webhook/IMAP]
       │
       v
[OpenAI GPT-4o-mini: Clasificar urgencia]
       │
       ├── URGENTE-CLIENTE → WhatsApp inmediato a PM
       ├── URGENTE-INTERNA → WhatsApp a supervisor + log
       ├── NORMAL → Email resumen diario agrupado
       └── INFO → Auto-archivar
```

### 5.4 Costo Adicional

| Concepto | Mensual |
|----------|---------|
| OpenAI API (clasificacion) | €20-50 |
| N8N (ya configurado) | €0 |
| Gmail API | €0 |
| **Total adicional** | **€20-50/mes** |

---

## 6. Roadmap Fase 2: #12 Change Orders

### 6.1 Pre-requisitos

- MVP #08 validado con 1+ cliente
- Caso de exito documentado
- Equipo familiarizado con Airtable + N8N + WhatsApp
- Al menos 1 cliente con 3+ proyectos activos

### 6.2 Scope Reducido para Piloto

Implementar solo el flujo basico:
1. Campo detecta cambio → Envia foto + descripcion por WhatsApp
2. Bot registra en Airtable con timestamp
3. Segun monto estimado, ruta a aprobador correcto
4. Aprobador recibe WhatsApp con resumen → Aprueba/Rechaza
5. PDF generado automaticamente
6. Dashboard con metricas

**Excluir de la primera version:**
- AI enrichment (prediccion, historial)
- Integracion con factory (modular)
- Multi-level approval chains

### 6.3 Timeline Estimado

- Semanas 1-2: Airtable + workflows basicos
- Semana 3: Piloto con 1 proyecto activo
- Semanas 4-6: Iteracion basada en feedback

---

## 7. Validation Conversations (Pendiente)

### 7.1 Target: 5-7 empresas de construccion

**Script de validacion:**
```
"Hola [nombre], estoy investigando los principales retos operativos
en empresas de construccion modular. Me gustaria hacerte 3 preguntas
rapidas (5 min):

1. Cuantas herramientas tiene tu empresa aproximadamente?
   Alguna vez habeis perdido alguna o tardado mucho en encontrarla?

2. Como gestionais los cambios de ultimo minuto en obra?
   (telefono, email, papel, app?)

3. Si pudieras resolver UN problema operativo manana,
   cual seria?"
```

### 7.2 Respuestas a documentar

| Empresa | Sector | Empleados | Problema #1 | Interes QR (1-10) | Interes Changes (1-10) | Pagaria? |
|---------|--------|-----------|-------------|-------------------|----------------------|----------|
| [Pendiente] | | | | | | |

---

## 8. Demo Script (5 minutos)

### Minute 0-1: Contexto
"Imagina que tienes 100 herramientas repartidas en 4 obras. Cada dia pierdes 30-60 minutos buscando donde esta cada una. Eso son €5,000/mes en tiempo perdido."

### Minute 1-2: Demo QR Fisico
"Mira esta etiqueta. [Muestra QR]. La pegas en la herramienta. Cuando alguien la necesita, escanea con el movil..."
[Escanea QR en vivo → Se abre WhatsApp]

### Minute 2-3: Interaccion Bot
[Muestra flujo completo: check-out en 30 segundos]
"En 30 segundos quedo registrado: quien la tiene, donde la llevo, y cuando."

### Minute 3-4: Busqueda
[Escribe al bot: "donde esta el nivel laser"]
"Tu supervisor pregunta donde esta. En 5 segundos tiene la respuesta."

### Minute 4-5: Dashboard + ROI
[Muestra Airtable con datos]
"Todo queda en un dashboard. Alertas automaticas los lunes para herramientas sin devolver.
Resultado: de perder €5,000/mes a tener control total por €30/mes."

---

## 9. Next Steps

1. **Inmediato:** Configurar Airtable + N8N (Dias 1-4)
2. **Semana 1:** Completar workflow WhatsApp + generar QR de prueba
3. **Semana 2:** Testing interno + video demo + propuesta piloto
4. **Semana 3:** Contactar 5-7 empresas para validacion
5. **Semana 4:** Iniciar piloto con primer cliente interesado

---

## 10. Risks & Mitigations

| Riesgo | Probabilidad | Impacto | Mitigacion |
|--------|-------------|---------|------------|
| Baja adopcion por operadores | Media | Alto | UX ultra-simple (1 escaneo), gamification, supervisor enforce |
| WhatsApp Business API costosa | Baja | Medio | Usar sandbox gratis para piloto, escalar despues |
| QR codes se danan en obra | Media | Bajo | Etiquetas laminadas + backup de IDs en lista |
| Airtable limites (free tier) | Baja | Medio | Plan Pro €20/mes, o migrar a Notion/Supabase |
| Cliente no tiene WhatsApp Business | Baja | Bajo | Alternativa: Telegram bot o SMS |
| Operadores sin smartphone | Baja | Alto | Verificar en discovery call, alternativa: tablet compartida |

---

*Documento generado como parte del Task #7 de ModulorIA Task Master*
