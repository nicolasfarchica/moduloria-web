# 📦 Alertas Automáticas de Stock Bajo

**TIER**: ⚡ Quick Win | **Implementación**: 1-2 días | **Complejidad**: Muy Baja | **ROI**: 400%

---

## 🎯 DESCRIPCIÓN DEL PROBLEMA

### El Dolor Diario
Obra para 2-3 días porque faltó cemento, varilla o material crítico que "nadie notó se estaba acabando". Descubrimiento típico: encargado llega obra 8am, revisa inventario, se da cuenta falta material esencial, llama proveedor (ocupado hasta medio día), pedido llega "mañana si hay suerte", equipo 6-8 personas parado medio día esperando, costo €1,200-2,400 en tiempo muerto más retraso cronograma.

### Manifestación Específica en Construcción
**Ciclo vicioso**:
1. Material se agota gradualmente (nadie lleva registro exacto)
2. "Creo que queda suficiente para mañana" (estimación ojo)
3. Día siguiente: Sorpresa, faltó
4. Pedido urgente = sobreprecio 15-25% + demora entrega
5. Equipo parado o haciendo tareas "de relleno" improductivas

### Cita Real
> "Paramos 4 horas esperando cemento que pedimos 'urgente'. El proveedor nos cobró €200 extra por entrega express. Y pudimos haberlo pedido con 2 días de anticipación si hubiéramos sabido."
> — Encargado, Constructora 18 empleados

---

## 💰 IMPACTO CUANTIFICADO

### Costos Directos (PYME 3-4 obras activas)

**Por cada faltante material**:
- **Personal parado**: 6 personas × 4 horas × €20/hora = **€480**
- **Sobreprecio urgente**: €200 material + €50 entrega express = **€250**
- **Alquiler equipo parado**: Grúa €150/día aunque no se use = **€150**
- **TOTAL POR INCIDENTE**: €880

**Frecuencia PYME típica**:
- Sin control: 2-3 incidentes/mes × €880 = **€1,760-2,640/mes**
- Con alertas: 0-1 incidente/mes × €880 = **€0-880/mes**

### Costos Indirectos

- **Retraso cronograma**:
  - 4 horas parado = 0.5 día retraso
  - Cliente cobra penalización si se acumula
  - Reputación dañada

- **Estrés y fricción**:
  - Encargado culpa al que "no controló inventario"
  - Proveedor molesto por pedidos caóticos
  - Equipo desmotivado (parados sin hacer nada)

- **Compras mal planificadas**:
  - Pedir muy poco → Faltantes
  - Pedir demás → €3,000-6,000 en material inmovilizado

**TOTAL MENSUAL**: €1,760-3,500 en costos evitables
**AHORRO CON ALERTAS**: €1,500-3,000/mes

---

## ⚙️ SOLUCIÓN TÉCNICA

### Stack Tecnológico Minimalista

1. **Airtable** (€20/mes, 5 usuarios) - Inventario simple
2. **N8N** (€8/mes self-hosted) - Lógica alertas
3. **WhatsApp Business** (€0) - Notificaciones
4. **Alternativa gratis**: Google Sheets + Zapier (€0-20/mes)

**Inversión total**: €30-50/mes (o €0 con Google Sheets + Apps Script)

### Arquitectura del Sistema

```
┌─────────────────────────────────────────────┐
│     CONSUMO DIARIO MATERIAL                 │
│     Encargado actualiza al final día        │
│     (30 seg WhatsApp o Airtable)            │
└──────────────────┬──────────────────────────┘
                   │
                   ▼
        ┌─────────────────────┐
        │  Airtable:          │
        │  Tabla "Inventario" │
        │  - Item             │
        │  - Stock actual     │
        │  - Consumo/día prom │
        │  - Umbral alerta    │
        │  - Proveedor        │
        └──────────┬──────────┘
                   │
                   ▼
        ┌─────────────────────┐
        │  N8N Workflow       │
        │  DIARIO 8am:        │
        │  Calcula:           │
        │  ¿Stock < Umbral?   │
        │  ¿Quedan < 3 días?  │
        └──────────┬──────────┘
                   │
        ┌──────────┴──────────┐
        │                     │
        ▼                     ▼
┌──────────────┐      ┌──────────────┐
│  SÍ Alerta   │      │  NO          │
│  → WhatsApp  │      │  → Silencio  │
│    Encargado │      └──────────────┘
│    + Gerente │
└──────────────┘
```

### Flujo de Trabajo Detallado

#### 1. Setup Inicial (Una sola vez)

**Airtable - Tabla "Inventario"**:

| Item | Stock Actual | Unidad | Consumo/día | Días quedan | Umbral Alerta | Proveedor | Teléfono |
|------|--------------|---------|-------------|-------------|---------------|-----------|----------|
| Cemento | 85 sacos | sacos | 15 | 5.7 | 45 (3 días) | Cementos SA | +34 XXX |
| Varilla 3/8 | 120 m | metros | 25 | 4.8 | 75 (3 días) | Aceros del Sur | +34 YYY |
| Arena | 8 m³ | m³ | 1.5 | 5.3 | 4.5 (3 días) | Áridos López | +34 ZZZ |

**Lógica automática Airtable**:
```
Campo "Días quedan":
FÓRMULA: {Stock Actual} / {Consumo/día}

Campo "Status":
IF({Días quedan} < 2, "🔴 URGENTE",
   IF({Días quedan} < 3, "🟡 PEDIR HOY",
      IF({Días quedan} < 5, "🟢 OK", "✅ SOBRA")))
```

#### 2. Actualización Diaria (30 segundos)

**Opción A - WhatsApp Bot**:
```
Encargado (6pm, fin de día):

"@stockbot cemento -40"

Bot: "✅ Actualizado

Cemento:
Antes: 85 sacos
Consumo hoy: 40 sacos
Ahora: 45 sacos

⚠️ ALERTA: Quedan solo 3 días
(Umbral alcanzado)

Pedido sugerido: 150 sacos
Proveedor: Cementos SA +34 XXX XXX XXX

[Pedir ahora] [Ignorar]"
```

**Opción B - Airtable directo** (desde celular):
```
Encargado abre Airtable app
→ Tabla "Inventario"
→ Fila "Cemento"
→ Stock actual: 85 → 45
→ Guarda
(15 segundos)
```

#### 3. Alertas Automáticas Inteligentes

**Lunes 8am - Workflow N8N corre**:

**Revisa cada item**:
```python
# Pseudocódigo lógica

FOR cada_material IN inventario:
  dias_quedan = material.stock / material.consumo_diario

  IF dias_quedan < 2:
    alerta = "🔴 URGENTE - Pedir HOY"
    notificar = [encargado, gerente, compras]

  ELIF dias_quedan < 3:
    alerta = "🟡 ALERTA - Pedir mañana máximo"
    notificar = [encargado, compras]

  ELIF dias_quedan < 5:
    alerta = "🟢 Monitorear - OK por ahora"
    notificar = []

  # Enviar WhatsApp
  IF notificar:
    mensaje = generar_mensaje(material, dias_quedan)
    enviar_whatsapp(notificar, mensaje)

  # Opcional: Auto-generar orden compra
  IF dias_quedan < 2:
    crear_orden_compra_draft(material)
```

**WhatsApp → Encargado + Gerente**:
```
🔴 ALERTA STOCK URGENTE - Obra Polanco

Material: CEMENTO
Stock actual: 45 sacos
Consumo promedio: 15 sacos/día
⏰ Quedan: 3 días

SI NO PEDIMOS HOY:
→ Faltará: Jueves 9 de enero (en 3 días)

PEDIDO SUGERIDO: 150 sacos
(Alcanza 10 días)

Proveedor: Cementos SA
📞 +34 XXX XXX XXX
📧 pedidos@cementossa.com

[Pedir ahora] [Cambiar cantidad] [Ya pedí]
```

#### 4. Predicción Inteligente (Con 2+ meses datos)

**Sistema aprende patrones**:
```
ANÁLISIS HISTÓRICO - Cemento:

Lun-Mie: Consumo 18 sacos/día
Jue-Vie: Consumo 12 sacos/día
Sáb: Consumo 5 sacos/día

Hoy es Miércoles, stock: 60 sacos

PREDICCIÓN:
- Hoy (Mié): -18 = 42
- Mañana (Jue): -12 = 30
- Viernes: -12 = 18
- Sábado: -5 = 13 🟡

RECOMENDACIÓN:
Pedir Jueves para que llegue Viernes
(Evita cortar Sábado)
```

---

## 📋 PLAN DE IMPLEMENTACIÓN

### Día 1: Setup Base de Datos (3 horas)

**Mañana (2 horas)**:
1. **Crear Airtable base** (30 min)
   - Tabla "Inventario"
   - Campos básicos + fórmulas

2. **Inventario inicial** (1.5 horas)
   - Listar 15-25 materiales críticos
   - Medir stock actual físicamente
   - Estimar consumo/día (ojo, histórico facturas)

**Tarde (1 hora)**:
3. **Definir umbrales alerta** (1 hora)
   - Por material: ¿Cuántos días buffer?
   - Cemento: 3 días (entrega rápida)
   - Materiales especiales: 7 días (demora más)

### Día 2: Automatización (4 horas)

**Mañana (2 horas)**:
1. **N8N workflow alertas** (1.5 horas)
   - Trigger: Cron diario 8am
   - Acción: Query Airtable
   - Lógica: Calcular días restantes
   - Acción: WhatsApp si alerta

2. **Testing con datos reales** (30 min)

**Tarde (2 horas)**:
3. **WhatsApp bot actualización** (1 hora)
   - Comando: "@stockbot [item] -[cantidad]"
   - Respuesta: Confirmación + status

4. **Capacitación encargado** (30 min)
   - "Cada día, actualiza consumo 30 seg"
   - Mostrar cómo

5. **Monitoreo primera semana** (30 min diarios)

---

## 💡 CASOS DE USO REALES

### Caso 1: Constructora Modular México (22 empleados)

**Antes del sistema**:
- **7 paros** por faltantes en 4 meses
- Costo promedio por paro: €950
- **Total pérdida**: €6,650 (4 meses)
- Inventario Excel desactualizado, nadie miraba

**Después** (6 meses con alertas automáticas):
- **0 paros** por faltantes
- **1 alerta falsa** (consumo anormal ese día, no crítico)
- Encargado: "30 seg al día actualizar, me salvó 3 veces ya"
- **Ahorro**: €9,975 (6 meses) vs inversión €180
- **ROI**: 5,450%

**Bonus inesperado**:
```
Gerente:
"Ahora sé EXACTAMENTE cuánto gastamos por día
en cada material. Detecté que en Obra A gastábamos
30% más cemento que Obra B (mismo tipo proyecto).

Investigamos → Encargado Obra A tiraba mezcla mala.
Capacitación → Ahorro €800/mes adicional."
```

### Caso 2: PYME Barcelona (Evitó desastre)

**Viernes 6pm - Sistema alerta**:
```
🔴 URGENTE - Varilla 3/8

Stock: 18 metros
Lunes necesitas: 50 metros (obra grande)
⚠️ FALTARÁN 32 metros

Proveedor cierra sábados.
SI NO PIDES HOY, problema lunes.

[Pedir ahora]
```

**Encargado pide inmediato (6:15pm)**
**Proveedor entrega sábado mañana**
**Lunes: Obra normal**

**SIN alerta**:
- Lunes 8am: Descubre faltante
- Proveedor cerrado festivo lunes
- Material llega martes tarde
- **1.5 días perdidos** = €2,100 + multa cliente

### Caso 3: Optimización Compras (Efecto secundario)

**Con 4 meses datos históricos**:

**Dashboard Compras**:
```
📊 ANÁLISIS CONSUMO - Obra Polanco

Material: Cemento
Periodo: Sept-Dic 2024
Total consumido: 2,400 sacos
Promedio/mes: 600 sacos

COMPRAS REALIZADAS:
- 8 pedidos × 300 sacos = 2,400 ✅
- Costo promedio: €7.20/saco

OPTIMIZACIÓN:
Si pedían 2 pedidos × 1,200 sacos:
- Descuento volumen: €6.85/saco (-5%)
- Ahorro: €840 (4 meses)
- Menos viajes camión

RECOMENDACIÓN:
Obra similar futura → Pedir bulto
(Requiere espacio almacenamiento)
```

---

## 📊 MEJORES PRÁCTICAS

### ✅ Items Críticos a Trackear

**Categoría 1: CRÍTICOS (paran obra)**:
- Cemento
- Varilla/acero estructural
- Arena/grava
- Bloques/ladrillos
- Tuberías principales

**Categoría 2: IMPORTANTES (retrasan)**:
- Cables eléctricos
- Material acabados
- Tornillería especial
- Pegamentos/selladores

**Categoría 3: OPCIONALES (monitorear)**:
- Herramientas consumibles
- EPP (guantes, cascos)
- Material limpieza

### ✅ Fórmula Umbral Alerta Ideal

```
Umbral Alerta = (Consumo/día × Días buffer) + Margen seguridad

Días buffer:
- Material local común: 2-3 días
- Material importado: 7-10 días
- Material custom: 15-20 días

Margen seguridad:
- Proyecto estable: 10%
- Proyecto cambiante: 25%

EJEMPLO:
Cemento:
- Consumo: 15 sacos/día
- Días buffer: 3 (local, entrega rápida)
- Margen: 10%

Umbral = (15 × 3) × 1.10 = 49.5 sacos
→ Redondeado: 50 sacos
```

### ⚠️ Errores Comunes

**❌ NO Hacer**:

1. **Trackear 100 items día 1**
   - Abrumador
   - Nadie actualiza
   - ✅ Empieza con 5-10 críticos

2. **Umbral muy ajustado**
   - Alerta diaria "falta cemento"
   - Equipo ignora alertas
   - ✅ Buffer realista 3-5 días

3. **No actualizar consumo real**
   - Sistema calcula mal
   - Alerta cuando "sobra" → Pierde confianza
   - ✅ Disciplina diaria 30 seg

4. **Olvidar ajustar según fase obra**
   ```
   Fase cimentación: 25 sacos/día
   Fase acabados: 3 sacos/día

   ✅ Actualizar "consumo/día" al cambiar fase
   ```

---

## 🚀 PRÓXIMO NIVEL

### Fase 2: Integración con Proveedores

**API directa con proveedor**:
```
Sistema detecta stock bajo
↓
Genera orden compra automática (draft)
↓
WhatsApp gerente: "¿Aprobar orden €1,200 Cementos SA?"
↓
[Aprobar] → Orden enviada automáticamente a proveedor
↓
Proveedor confirma entrega
↓
Sistema actualiza: "Llegada: Jueves 10am"
```

### Fase 3: IoT Peso Automático (Avanzado)

**Para almacenes grandes**:
```
Báscula IoT bajo pallet cemento
→ Mide peso cada hora
→ API a Airtable
→ Stock actualizado SIN intervención humana

Inversión: €200-400 por báscula
ROI: Solo si >50 sacos/día consumo
```

### Fase 4: Predicción con IA

**Con 12 meses datos**:
```
IA detecta:

"📊 PATRÓN - Obra tipo Residencial 150m²

Semana 1-2: Cemento 20 sacos/día
Semana 3-4: Cemento 35 sacos/día (PICO)
Semana 5-6: Cemento 8 sacos/día

Hoy: Semana 2, obra Miraflores
Consumo actual: 18 sacos/día

⚠️ PREDICCIÓN:
Próxima semana: Pico 35 sacos/día
Stock actual: 80 sacos (insuficiente)

SUGERENCIA:
Pedir 200 sacos esta semana
(Evita faltante semana que viene)"
```

---

## 🎓 PLANTILLAS LISTAS

### Google Sheets Alternativa (€0)

**Fórmulas clave**:

```
Columna "Días quedan":
=SI(C2>0, B2/C2, "ERROR")

Columna "Status":
=SI(D2<2, "🔴 URGENTE",
   SI(D2<3, "🟡 ALERTA",
      SI(D2<5, "🟢 OK", "✅ SOBRA")))

Columna "Pedir":
=SI(D2<3, "SÍ - HOY", "No todavía")
```

**Google Apps Script - Alertas Email**:
```javascript
function checkInventory() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = sheet.getDataRange().getValues();

  for (var i = 1; i < data.length; i++) {
    var item = data[i][0];
    var diasQuedan = data[i][3];

    if (diasQuedan < 3) {
      MailApp.sendEmail({
        to: "encargado@empresa.com",
        subject: "⚠️ ALERTA Stock: " + item,
        body: "Quedan solo " + diasQuedan + " días de " + item
      });
    }
  }
}

// Ejecutar diario 8am (Trigger manual en Google)
```

---

**Última actualización**: 2025-01-05
**Categoría**: Materiales e Inventario
**Dificultad**: ⭐ (1/5)
**ROI**: ⭐⭐⭐⭐⭐ (5/5)
**Tiempo implementación real**: 1-2 días (4-8 horas)
