# 📄 OCR Automático de Facturas y Albaranes

**TIER**: ⚡ Quick Win | **Implementación**: 2-3 días | **Complejidad**: Baja | **ROI**: 800%

---

## 🎯 DESCRIPCIÓN DEL PROBLEMA

### El Dolor Diario
Administrativo recibe 20-40 facturas/albaranes diarios en papel o PDF. Proceso manual: abrir documento → leer → tipear datos en Excel/sistema contable → archivar físicamente. Errores de transcripción en 8-12% de casos generan: pagos duplicados, proveedores molestos por "facturas perdidas", caos fin de mes al cuadrar cuentas, auditorías pesadilla.

### Manifestación Específica en Construcción
**Problema amplificado**: Múltiples proveedores por obra (15-30 diferentes), cada uno con formato factura distinto. Albaranes llegando desde obra en fotos WhatsApp borrosas tomadas con prisa. Documentos con manchas de cemento, dobleces, escritura manual ilegible.

### Señales de Alerta
- Pila de facturas **sin procesar 2+ semanas**
- Excel con **celdas en blanco** "completar después"
- Proveedor llama: **"No registraron mi factura"**
- Fin de mes: **pánico 3 días** cerrando cuentas
- Auditoría fiscal: **no encuentran documentos**

---

## 💰 IMPACTO CUANTIFICADO

### Costos Directos (PYME 3-4 obras, ~500 facturas/mes)
- **Tiempo data entry**: 500 docs × 3 min × €18/hora = **€450/mes**
- **Errores transcripción**: 40 errores/mes × €75 corrección promedio = **€3,000/mes**
- **Pagos duplicados**: 2/año × €1,500 = **€250/mes** promedio
- **Búsqueda documentos perdidos**: 8 hrs/mes × €18/hora = **€144/mes**

### Costos Indirectos Ocultos
- **Retrasos pago proveedores**:
  - Descuentos pronto pago perdidos: ~2% de €200K compras/mes = **€4,000/mes**
  - Relación deteriorada con proveedores clave

- **Auditoría fiscal problemática**:
  - 15-20 horas adicionales preparando docs = **€500-800** por auditoría
  - Multas por documentación deficiente: **€1,000-3,000/año**

- **Capital de trabajo mal gestionado**:
  - Sin visibilidad real cuentas por pagar
  - Decisiones financieras con datos desactualizados

**TOTAL MENSUAL**: €3,844-7,644 en costos evitables
**AHORRO CON OCR**: €3,000-6,000/mes

---

## ⚙️ SOLUCIÓN TÉCNICA

### Stack Tecnológico

#### Opción A: Low-Cost (PYME <20 empleados)
1. **Google Cloud Vision API** (€1.50 por 1,000 páginas)
2. **N8N** (€8-24/mes) - Orquestación
3. **Google Drive** (€0-10/mes) - Storage
4. **Airtable** (€20/mes) - Base datos
5. **WhatsApp Business** (€0) - Captura móvil

**Inversión**: €30-55/mes + €0.75 por 500 docs = **€35-60/mes total**

#### Opción B: Enterprise (PYME >20 empleados)
1. **Rossum.ai** (€150-300/mes) - OCR + validación IA
2. **QuickBooks/Xero** (€30-50/mes) - Contabilidad integrada
3. **Dext** (€50/mes) - Especializado construcción

**Inversión**: €230-400/mes (todo incluido)

### Arquitectura del Sistema (Opción A)

```
┌─────────────────────────────────────────────┐
│       FACTURA LLEGA (3 fuentes)             │
│  1. Email adjunto                           │
│  2. Foto WhatsApp desde obra                │
│  3. Upload manual Drive                     │
└──────────────────┬──────────────────────────┘
                   │
                   ▼
        ┌─────────────────────┐
        │  Google Drive       │
        │  Carpeta "Inbox"    │
        └──────────┬──────────┘
                   │
                   ▼
        ┌─────────────────────┐
        │  N8N Trigger        │
        │  (cada 15 min)      │
        └──────────┬──────────┘
                   │
                   ▼
        ┌─────────────────────┐
        │  Google Vision OCR  │
        │  Extrae:            │
        │  - Proveedor        │
        │  - Fecha            │
        │  - Nº factura       │
        │  - Total €          │
        │  - IVA              │
        │  - Conceptos        │
        └──────────┬──────────┘
                   │
                   ▼
        ┌─────────────────────┐
        │  GPT-4 Validación   │
        │  - Verifica lógica  │
        │  - Detecta errores  │
        │  - Categoriza gasto │
        └──────────┬──────────┘
                   │
        ┌──────────┴──────────┐
        │                     │
        ▼                     ▼
┌──────────────┐      ┌──────────────┐
│  TODO OK     │      │  REVISAR     │
│  → Airtable  │      │  → WhatsApp  │
│  Automático  │      │    Admin     │
└──────────────┘      └──────────────┘
```

### Flujo de Trabajo Detallado

#### 1. Captura Multifuente

**Email automático**:
```
Admin reenvía factura a:
facturas@tuempresa.com
→ N8N captura adjunto
→ Sube a Drive "Inbox"
```

**WhatsApp desde obra**:
```
Encargado: [Foto albarán]
Bot: "✅ Albarán recibido
      Proveedor: ¿Aceros del Sur?
      Total: €3,245

      [Confirmar] [Corregir]"
```

**Upload manual Drive**:
```
Admin arrastra 10 PDFs a carpeta
→ N8N procesa en batch
→ 10 min después: todo en Airtable
```

#### 2. Extracción con IA

**Ejemplo OCR output**:
```json
{
  "vendor": "Cementos Andalucía S.L.",
  "vendor_tax_id": "B-12345678",
  "invoice_number": "FAC-2025-00123",
  "invoice_date": "2025-01-03",
  "due_date": "2025-02-03",
  "subtotal": 2450.00,
  "vat_21": 514.50,
  "total": 2964.50,
  "currency": "EUR",
  "line_items": [
    {
      "description": "Cemento Portland CEM II 42.5",
      "quantity": 35,
      "unit": "sacos",
      "unit_price": 70.00,
      "total": 2450.00
    }
  ],
  "payment_method": "Transferencia 30 días",
  "confidence_score": 0.94
}
```

#### 3. Validación Inteligente

**GPT-4 verifica**:
```python
# Reglas de negocio automáticas:

1. ¿Total = Subtotal + IVA?
   → SI: OK
   → NO: Alerta admin

2. ¿Proveedor conocido en DB?
   → SI: OK
   → NO: "Nuevo proveedor, revisar"

3. ¿Importe > €5,000?
   → SI: Requiere aprobación gerente
   → NO: Auto-aprobar

4. ¿Fecha vencimiento < 7 días?
   → SI: Alerta urgente pago
   → NO: Pipeline normal

5. ¿Conceptos coinciden con obra activa?
   → SI: Asignar a obra automáticamente
   → NO: Preguntar a qué obra va
```

#### 4. Notificaciones Inteligentes

**Caso TODO OK (85% facturas)**:
```
WhatsApp → Admin:
"✅ Factura procesada automáticamente

Proveedor: Cementos Andalucía
Factura: FAC-2025-00123
Total: €2,964.50
Vence: 03/02/2025
Obra asignada: Polanco Residencial

[Ver en Airtable] [Aprobar pago]"
```

**Caso REVISAR (15% facturas)**:
```
WhatsApp → Admin:
"⚠️ Factura requiere revisión

Proveedor: NUEVO - Ferretería XYZ
Total: €847.20
Problema: Proveedor no existe en DB

[Agregar proveedor] [Rechazar] [Ver documento]"
```

---

## 📋 PLAN DE IMPLEMENTACIÓN

### Día 1: Setup Infraestructura

**Mañana (3 horas)**:
1. **Google Cloud Platform** account (30 min)
   - Activar Vision API
   - Obtener credenciales API
   - Budget alert €50/mes

2. **Google Drive estructura** (30 min)
   ```
   /Facturas
   ├── /Inbox (nuevas)
   ├── /Procesadas (OK)
   ├── /Revisar (problemas)
   └── /Archivo (antiguas)
   ```

3. **Airtable base** (2 horas)
   - Tabla "Facturas"
   - Tabla "Proveedores"
   - Tabla "Obras" (asignación)

**Tarde (2 horas)**:
4. **N8N workflow básico** (2 horas)
   - Trigger: Google Drive nuevo archivo
   - Action: Vision API OCR
   - Action: Parse JSON
   - Action: Insert Airtable

### Día 2: Inteligencia y Validación

**Mañana (3 horas)**:
1. **Agregar GPT-4 validación** (1.5 horas)
2. **Lógica routing** (1.5 horas)
   - SI confidence >90% → Auto-aprobar
   - SI confidence 70-90% → Revisar
   - SI confidence <70% → Manual completo

**Tarde (2 horas)**:
3. **WhatsApp notificaciones** (1 hora)
4. **Testing con 20 facturas reales** (1 hora)

### Día 3: Refinamiento

**Mañana (2 horas)**:
1. **Ajustar prompts GPT-4** según errores
2. **Agregar proveedores DB** históricos

**Tarde (2 horas)**:
3. **Capacitación equipo** (30 min)
4. **Documentación proceso** (30 min)
5. **Monitoreo primera semana** (1 hora)

---

## 💡 CASOS DE USO REALES

### Caso 1: Constructora Madrid (12 empleados, 380 facturas/mes)
**Antes del OCR**:
- Admin: 5 horas/semana data entry (€360/mes)
- Errores: 30-40/mes × €50 corrección = €1,500/mes
- Caos fin de mes: 2 días completos = €288

**3 meses después**:
- Admin: **15 min/semana** solo revisión casos dudosos
- Errores: **3-5/mes** (reducción 87%)
- Fin de mes: **2 horas** (reducción 93%)
- **Ahorro neto**: €2,000/mes
- **ROI**: 6,600% (inversión €360 vs ahorro anual €24,000)

### Caso 2: PYME Barcelona (Caso extremo)
**Problema**: Auditoría fiscal encontró **€18,000 en facturas duplicadas** pagadas

**Root cause**: Admin transcribía mal números factura
- Factura FAC-001234 → FAC-001243 (digitó mal)
- Sistema no detectó duplicado
- Proveedor cobró 2 veces "por error"

**Con OCR**:
- 0 errores transcripción en 6 meses
- Duplicados detectados automáticamente
- Ahorro: **€18,000 recuperados** + prevención futura

### Caso 3: Constructora Modular Sevilla
**Innovación**: OCR + WhatsApp desde obra

**Workflow**:
```
1. Camión descarga material
2. Encargado foto albarán con celular
3. WhatsApp → Bot OCR
4. 30 segundos: Albarán en sistema
5. Material asignado a obra automáticamente
6. Factura llega semana después → Ya está pre-cargada
```

**Resultado**:
- Trazabilidad 100% material
- 0 discusiones "ese material no llegó"
- Inventario actualizado en tiempo real

---

## 📊 ANÁLISIS ROI DETALLADO

### Escenario PYME Típica

**Volumen**: 400 facturas/mes + 200 albaranes/mes = 600 docs

**COSTOS SIN OCR**:
| Concepto | Cálculo | Mensual |
|----------|---------|---------|
| Data entry manual | 600 × 3 min × €18/hr | €540 |
| Errores corrección | 48 × €75 | €3,600 |
| Búsquedas docs | 10 hrs × €18 | €180 |
| Descuentos perdidos | 2% × €250K compras | €5,000 |
| **TOTAL** | | **€9,320** |

**COSTOS CON OCR**:
| Concepto | Cálculo | Mensual |
|----------|---------|---------|
| Google Vision API | 600 × €1.50/1000 | €0.90 |
| N8N cloud | Plan Pro | €24 |
| Airtable | 3 usuarios | €30 |
| OpenAI API | ~200 validaciones | €10 |
| Admin revisión (15%) | 90 casos × 1 min × €18/hr | €27 |
| **TOTAL** | | **€92** |

**AHORRO MENSUAL**: €9,320 - €92 = **€9,228**
**AHORRO ANUAL**: **€110,736**
**Inversión setup**: €500 (3 días trabajo técnico)
**Payback**: 16 días

---

## ⚠️ ERRORES COMUNES A EVITAR

### ❌ NO Hacer

1. **Esperar 100% precisión día 1**
   - OCR ~85% accuracy inicial
   - Mejora a 95%+ con entrenamiento
   - Siempre tener revisión humana casos dudosos

2. **Procesar facturas ilegibles**
   - Si foto borrosa → Pedir re-envío
   - Mejor 30 seg extra que error €3,000

3. **No estandarizar proveedores**
   - "Cementos SA" vs "Cementos S.A." → Duplicados
   - Crear lista maestra proveedores

4. **Olvidar GDPR/compliance**
   - Facturas = datos sensibles
   - Google Drive con 2FA obligatorio
   - Backup diario

### ✅ SÍ Hacer

1. **Entrenar con facturas históricas**
   - Subir 100-200 facturas antiguas
   - Ver qué errores comete OCR
   - Ajustar validaciones antes go-live

2. **Naming convention claro**
   ```
   Archivo guardado como:
   "2025-01-03_CementosAndalucia_FAC-00123_2964.50.pdf"

   Formato:
   FECHA_PROVEEDOR_NUMERO_TOTAL.pdf
   ```

3. **Dashboard semanal**
   ```
   📊 SEMANA 1-7 ENERO

   Facturas procesadas: 87
   ├─ Auto-aprobadas: 74 (85%)
   ├─ Revisión manual: 13 (15%)
   └─ Rechazadas: 0

   Tiempo ahorro: 4.2 horas
   Errores detectados por IA: 3

   ⚠️ Alerta:
   - Proveedor "Ferretería XYZ" facturas
     siempre borrosas → Contactar
   ```

4. **Integrar con contabilidad**
   - Airtable → Export CSV semanal
   - Import directo a software contable
   - Cierre mes: 2 clicks

---

## 🚀 PRÓXIMO NIVEL

### Fase 2: Machine Learning Personalizado

**Entrenar modelo custom con TUS facturas**:
```
Después 6 meses datos:
- Sistema aprende formatos tus proveedores
- Accuracy sube 85% → 98%
- Reconoce proveedores por logo
- Asigna a obra correcta 95% automático
```

### Fase 3: Pagos Automáticos

**Workflow futuro**:
```
1. Factura llega → OCR
2. Validada → Airtable
3. Día antes vencimiento → Alerta
4. Admin: [Aprobar pago] (1 click)
5. Sistema genera transferencia bancaria
6. Email confirmación proveedor
```

**Ahorro adicional**:
- 0 facturas vencidas (sin recargos)
- Captura 100% descuentos pronto pago
- **€8,000-12,000/año** adicional

### Fase 4: Analytics Predictivo

**Con 12 meses datos**:
```
IA detecta patrones:

"⚠️ ALERTA PRESUPUESTO
Obra Polanco:
- Gasto cemento: +35% vs presupuestado
- Tendencia: €12,000 sobrecosto si continúa
- Acción sugerida: Revisar consumo con encargado"
```

---

**Última actualización**: 2025-01-05
**Categoría**: Comunicación y Administración
**Dificultad**: ⭐⭐ (2/5)
**ROI**: ⭐⭐⭐⭐⭐ (5/5)
**Tiempo implementación real**: 2-3 días (12-20 horas)
