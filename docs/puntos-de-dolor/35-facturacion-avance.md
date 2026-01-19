# 💵 Facturación por Avance de Obra (Progress Billing)

**TIER**: 🚀 Alto Impacto | **Implementación**: 3-4 semanas | **Complejidad**: Alta | **ROI**: ~500%

---

## 🎯 DESCRIPCIÓN DEL PROBLEMA

### El Dolor Diario
El modelo financiero de la construcción modular tiene un desafío único de flujo de caja: el fabricante **compra todos los materiales por adelantado** (meses antes de la entrega), mientras que los pagos del cliente siguen un esquema de "pago por obra instalada". Esto crea una **brecha de liquidez masiva**.

### Manifestación Específica
- Para cobrar por materiales en fábrica, bancos exigen documentación exhaustiva
- Fotos de materiales etiquetados, certificados de seguro, informes de inspección
- Recopilar y empaquetar esta evidencia es **proceso manual intensivo**
- Si falta un documento, el pago se retrasa semanas
- Gestión de retenciones a través de múltiples facturas es compleja
- **El retraso en cobros pone en peligro la nómina o pagos a proveedores**

### Contexto en Construcción Modular
A diferencia de la construcción tradicional donde se factura por obra visible en sitio, el 70-80% del valor de un módulo se produce en fábrica antes de ser visible para el cliente o su banco. Justificar "draws" (disposiciones) de financiación requiere demostrar progreso en un entorno que el financiador no puede ver fácilmente.

---

## 💰 IMPACTO CUANTIFICADO

### Costos Directos
- **Tiempo preparar documentación**: 8-12 horas/factura de avance
- **Retrasos por documentos faltantes**: 2-4 semanas adicionales
- **Costo financiero del retraso**: €500-2,000/proyecto (intereses, urgencias)
- **Retenciones no recuperadas**: 2-5% de proyectos con problemas

### Brecha de Liquidez Típica
```
MES 1: Compra materiales          -€80,000
MES 2: Producción en fábrica      -€40,000 (mano de obra)
MES 3: Transporte + instalación   -€15,000
MES 4: Cliente paga primer hito   +€70,000
MES 5: Cliente paga segundo hito  +€50,000
MES 6: Retención liberada         +€15,000

EXPOSICIÓN MÁXIMA: -€135,000 (Mes 2-3)
```

**IMPACTO POTENCIAL**: €10,000-30,000/año (costos financieros + tiempo admin)

---

## ⚙️ SOLUCIÓN TÉCNICA

### Stack Tecnológico
1. **N8N** - Orquestación del proceso de facturación
2. **Airtable** - Tracking de hitos y documentación
3. **Google Drive** - Almacenamiento estructurado de evidencias
4. **OpenAI GPT-4** - Generación de informes de progreso
5. **E-signature (DocuSign/PandaDoc)** - Aprobaciones digitales

### Flujo de Facturación por Avance

```
┌─────────────────────────────────────────────────────┐
│          SISTEMA FACTURACIÓN POR AVANCE            │
└─────────────────────────────────────────────────────┘
                          │
                          ▼
               ┌─────────────────┐
               │   PROYECTO EN   │
               │    PRODUCCIÓN   │
               └────────┬────────┘
                        │
         ┌──────────────┼──────────────┐
         │              │              │
         ▼              ▼              ▼
┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│   HITO 1    │  │   HITO 2    │  │   HITO 3    │
│   30%       │  │   60%       │  │   100%      │
│ Materiales  │  │ Producción  │  │ Instalación │
└──────┬──────┘  └──────┬──────┘  └──────┬──────┘
       │                │                │
       ▼                ▼                ▼
┌─────────────────────────────────────────────────────┐
│              N8N RECOPILA EVIDENCIAS                │
│                                                     │
│  □ Fotos materiales en almacén (etiquetados)       │
│  □ Fotos módulo en producción                       │
│  □ Informe de inspección QC                         │
│  □ Certificado seguro almacenamiento                │
│  □ Lista de materiales (BOM) valorizada            │
└───────────────────────┬─────────────────────────────┘
                        │
                        ▼
               ┌─────────────────┐
               │   GPT-4 GENERA  │
               │   INFORME DE    │
               │   PROGRESO PDF  │
               └────────┬────────┘
                        │
                        ▼
               ┌─────────────────┐
               │   PAQUETE DE    │
               │   FACTURACIÓN   │
               │   COMPLETO      │
               └────────┬────────┘
                        │
                        ▼
               ┌─────────────────┐
               │   ENVÍO AUTO    │
               │   A CLIENTE     │
               │   + BANCO       │
               └─────────────────┘
```

### Checklist de Evidencias por Hito

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DOCUMENTACIÓN HITO 1 (30% - Materiales)
Proyecto: Casa García #PRJ-2026-0127
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📸 EVIDENCIA FOTOGRÁFICA
✅ Foto general almacén con materiales etiquetados
✅ Foto close-up etiquetas con número proyecto
✅ Foto estructuras de madera/acero
⏳ Foto ventanas y puertas almacenadas

📄 DOCUMENTACIÓN
✅ BOM valorizado (Lista de materiales)
✅ Facturas de proveedores (matched)
✅ Certificado seguro almacenamiento
⏳ Informe inspección entrada materiales

📋 INFORME
⏳ Resumen ejecutivo de progreso
⏳ Comparativa plan vs real
⏳ Próximos pasos programados

COMPLETADO: 6/10 (60%)
⚠️ Faltan 4 items para enviar factura

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### Informe de Progreso Automático

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INFORME DE PROGRESO - DRAW #1
Proyecto: Casa Modular García
Fecha: 2026-01-19
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 RESUMEN EJECUTIVO
Este informe certifica el avance del 30% del proyecto,
correspondiente a la adquisición y almacenamiento de
materiales principales.

💰 VALOR DE ESTE HITO
Valor contractual del hito: €45,000
Retención (10%): €4,500
Importe a facturar: €40,500

📦 MATERIALES ADQUIRIDOS
┌────────────────────┬──────────┬─────────┐
│ Categoría          │ Cantidad │ Valor   │
├────────────────────┼──────────┼─────────┤
│ Estructura acero   │ 1 lote   │ €18,500 │
│ Paneles sandwich   │ 45 uds   │ €12,300 │
│ Ventanas PVC       │ 12 uds   │ €6,200  │
│ Instalaciones      │ 1 lote   │ €8,000  │
└────────────────────┴──────────┴─────────┘
TOTAL MATERIALES: €45,000

📍 UBICACIÓN ALMACENAMIENTO
Almacén: Fábrica ModulorIA - Valencia
Dirección: Polígono Industrial El Pla, Nave 7
Seguro: Póliza #2026-ALM-0127 (vigente)

📸 EVIDENCIA FOTOGRÁFICA
[Ver anexo fotográfico - 8 imágenes]

✅ CERTIFICACIÓN
Los materiales listados han sido recibidos,
inspeccionados y almacenados correctamente,
identificados con el número de proyecto PRJ-2026-0127.

Firmado digitalmente: [Responsable QC]
Fecha: 2026-01-19

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### Tracking de Retenciones

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TRACKING RETENCIONES 2026
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PROYECTO    │ TOTAL RET. │ LIBERACIÓN │ STATUS
────────────┼────────────┼────────────┼─────────
PRJ-0121    │ €12,000    │ 2026-02-15 │ 🟡 Pendiente
PRJ-0118    │ €8,500     │ 2026-01-30 │ 🟢 Solicitar
PRJ-0112    │ €15,000    │ 2025-12-20 │ 🔴 Vencido
PRJ-0108    │ €9,200     │ 2025-11-15 │ ✅ Cobrado

TOTAL PENDIENTE: €35,500
VENCIDO SIN COBRAR: €15,000

⚠️ ACCIONES REQUERIDAS:
• PRJ-0118: Enviar solicitud liberación HOY
• PRJ-0112: Escalar a gerencia (30 días vencido)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## 📋 PLAN DE IMPLEMENTACIÓN

### Fase 1: Estructura de Hitos (Semana 1)
1. **Definir hitos estándar** por tipo de proyecto
2. **Crear checklist** de evidencias por hito
3. **Configurar carpetas Drive** con estructura estándar
4. **Template de informe** de progreso

### Fase 2: Automatización Recopilación (Semana 2-3)
1. **N8N workflow**: Alertas cuando se acerca fecha de hito
2. **Formulario para QC** para subir fotos/documentos
3. **Verificación automática** de checklist completo
4. **Generación PDF** de informe de progreso

### Fase 3: Gestión de Retenciones (Semana 4)
1. **Tracking automático** de retenciones por proyecto
2. **Alertas de vencimiento** de período de retención
3. **Generación de solicitud** de liberación
4. **Dashboard de cash flow** con retenciones proyectadas

---

## 💡 CASOS DE USO REALES

### Antes
Proyecto llega a hito del 30%. Administradora pasa 2 días recopilando fotos del almacén (pidiendo al jefe de planta que las haga), buscando facturas de proveedores en el email, solicitando al seguro certificado actualizado. Envía el paquete al banco. Banco rechaza: "Falta informe de inspección". Buscar, preparar, reenviar: 1 semana más de retraso. Mientras tanto, la empresa financia €45,000 adicionales de su bolsillo.

### Después
Al alcanzar hito del 30%, N8N verifica automáticamente que todas las evidencias están en carpeta. QC recibe alerta: "Subir foto de materiales etiquetados". Una vez completo, GPT-4 genera informe de progreso profesional. El paquete se envía automáticamente a cliente y banco. **Tiempo total: 2 horas en lugar de 2 días**. Cobro en 5 días en lugar de 3 semanas.

**Resultado**: Reducción de 70% en tiempo administrativo, mejora de 2 semanas en ciclo de cobro.

---

## ⚠️ ERRORES COMUNES A EVITAR

### ❌ NO Hacer
1. **Esperar a necesitar el dinero** → Preparar con antelación
2. **Fotos de baja calidad** → Estándares claros de evidencia
3. **Mezclar proyectos** → Etiquetado riguroso
4. **Olvidar retenciones** → Tracking activo desde día 1

### ✅ SÍ Hacer
1. **Checklist obligatorio** → No enviar sin 100% completo
2. **Fotos profesionales** → Timestamp visible, etiquetas claras
3. **Redundancia documental** → Backup en la nube
4. **Alerta de retenciones** → 30 días antes de poder solicitar

---

## 📊 MÉTRICAS DE ÉXITO

| Métrica | Actual | Objetivo Mes 1 | Objetivo Mes 3 |
|---------|--------|----------------|----------------|
| **Tiempo preparar factura avance** | 2 días | 4h | 2h |
| **Rechazos por documentación** | 30% | 10% | <5% |
| **Días entre hito y cobro** | 21 días | 14 días | 7 días |
| **Retenciones no recuperadas** | 5% | 2% | 0% |

---

## 💵 ROI CALCULADO

- **Inversión**: ~€4,000 (4 semanas configuración)
- **Ahorro anual**: €12,000 (tiempo admin) + €8,000 (costos financieros evitados)
- **Payback**: ~3 meses
- **ROI**: ~**500%**

---

**Última actualización**: 2026-01-19
**Categoría**: Finanzas y Administración
**Dificultad**: ⭐⭐⭐⭐ (4/5)
**ROI**: ⭐⭐⭐⭐ (4/5)
