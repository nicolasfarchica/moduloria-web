# 📋 Gestión de Seguros y Certificados (COI)

**TIER**: 🚀 Alto Impacto | **Implementación**: 2-3 semanas | **Complejidad**: Media | **ROI**: ~1,200%

---

## 🎯 DESCRIPCIÓN DEL PROBLEMA

### El Dolor Diario
La construcción modular implica una red extensa de subcontratistas: transportistas, operadores de grúas, equipos de instalación ("set crew"), electricistas, plomeros. **Cada uno debe tener seguros vigentes** antes de pisar el sitio o mover un módulo. La gestión de Certificados de Seguro (COI) es manual, tediosa y de **alto riesgo legal**.

### Manifestación Específica
- Solicitar COI a cada subcontratista manualmente
- Verificar visualmente coberturas y fechas de vigencia
- Registrar vencimientos en hoja de cálculo
- Recordar manualmente al subcontratista que renueve
- **No hay bloqueo automático** para proveedores con seguro vencido
- Si falla el proceso y hay accidente → responsabilidad recae en la PYME

### Contexto en Construcción Modular
Una grúa de 200 toneladas deja caer un módulo de €80,000. Si el operador de grúa tenía el seguro vencido porque nadie lo verificó, la PYME modular asume la responsabilidad civil completa. Un solo incidente puede costar más que todos los ahorros de un año.

---

## 💰 IMPACTO CUANTIFICADO

### Costos Directos
- **Tiempo administrativo**: 10-15h/mes gestionando COIs = €400-600/mes
- **Riesgo de accidente sin cobertura**: €50,000-500,000+ por incidente
- **Multas por incumplimiento**: €5,000-20,000 según jurisdicción
- **Retrasos por verificación tardía**: 2-4 horas/proyecto

### Escenario de Riesgo Real
Subcontratista de grúa deja caer módulo durante instalación. Daños: €100,000 (módulo + cimentación). Al revisar documentación, se descubre que el seguro del grúa venció hace 2 meses. La PYME modular debe pagar de su bolsillo. La aseguradora propia rechaza cobertura por "negligencia en verificación de terceros".

**EXPOSICIÓN DE RIESGO**: €100,000+ por evento (potencialmente catastrófico)

---

## ⚙️ SOLUCIÓN TÉCNICA

### Stack Tecnológico
1. **N8N** - Orquestación del flujo de verificación
2. **OCR (Google Vision/AWS Textract)** - Lectura automática de certificados
3. **Airtable** - Base de datos de proveedores y vencimientos
4. **Calendar API** - Alertas de renovación
5. **ERP/Contabilidad** - Bloqueo de pagos a proveedores no cumplientes

### Flujo de Gestión de Seguros

```
┌─────────────────────────────────────────────────────┐
│              VIGILANTE DE CUMPLIMIENTO              │
└─────────────────────────────────────────────────────┘
                          │
      ┌───────────────────┼───────────────────┐
      │                   │                   │
      ▼                   ▼                   ▼
┌───────────┐      ┌───────────┐      ┌───────────┐
│  NUEVO    │      │  RENEWAL  │      │  CHECK    │
│PROVEEDOR  │      │  MENSUAL  │      │  DIARIO   │
│  Setup    │      │  Alertas  │      │  Bloqueos │
└─────┬─────┘      └─────┬─────┘      └─────┬─────┘
      │                   │                   │
      ▼                   ▼                   ▼
┌─────────────────────────────────────────────────────┐
│                    AIRTABLE                          │
│    Base de Proveedores + Fechas Vencimiento          │
│    [Nombre | Email | COI | Vence | Status]           │
└───────────────────────┬─────────────────────────────┘
                        │
         ┌──────────────┼──────────────┐
         │              │              │
         ▼              ▼              ▼
   ┌──────────┐   ┌──────────┐   ┌──────────┐
   │ 30 DÍAS  │   │ 15 DÍAS  │   │ VENCIDO  │
   │  ANTES   │   │  ANTES   │   │    ❌    │
   └────┬─────┘   └────┬─────┘   └────┬─────┘
        │              │              │
        ▼              ▼              ▼
   ┌──────────┐   ┌──────────┐   ┌──────────┐
   │  Email   │   │ WhatsApp │   │ BLOQUEO  │
   │ cortés   │   │ urgente  │   │ en ERP   │
   │ recordar │   │ + PM     │   │ + Alerta │
   └──────────┘   └──────────┘   └──────────┘
```

### Lectura Automática de COI (OCR)

```
┌─────────────────────────────────────────────────────┐
│            PROCESAMIENTO AUTOMÁTICO COI             │
└─────────────────────────────────────────────────────┘

Proveedor envía PDF/imagen del certificado
                    │
                    ▼
          ┌─────────────────┐
          │  Google Vision  │
          │     OCR API     │
          └────────┬────────┘
                   │
                   ▼
          ┌─────────────────┐
          │   GPT-4 extrae: │
          │ - Nombre empresa│
          │ - Nº póliza     │
          │ - Coberturas    │
          │ - Fecha inicio  │
          │ - Fecha fin     │
          │ - Límites €     │
          └────────┬────────┘
                   │
           ┌───────┴───────┐
           │               │
           ▼               ▼
    ┌────────────┐  ┌────────────┐
    │  VALIDO    │  │ RECHAZADO  │
    │ Cobertura  │  │ Cobertura  │
    │ suficiente │  │ insuficiente│
    └──────┬─────┘  └──────┬─────┘
           │               │
           ▼               ▼
    ┌────────────┐  ┌────────────┐
    │ Actualizar │  │ Email auto │
    │ Airtable   │  │ "Necesitas │
    │ Status: OK │  │ más cobert"│
    └────────────┘  └────────────┘
```

### Requisitos Mínimos de Cobertura

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
REQUISITOS COI - MODULORIA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🚛 TRANSPORTISTAS
□ Responsabilidad Civil: €1,000,000 mín
□ Cobertura carga: Valor módulo completo
□ Trabajadores: Compensación activa

🏗️ OPERADORES GRÚA
□ Responsabilidad Civil: €2,000,000 mín
□ Daños a terceros: Incluido
□ Certificación operador: Vigente

⚡ SUBCONTRATISTAS OBRA
□ Responsabilidad Civil: €500,000 mín
□ Trabajadores: Compensación activa
□ Licencia profesional: Vigente

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### Email de Recordatorio Automático

```
Asunto: ⚠️ Tu seguro vence en 15 días - Acción requerida

Hola [Nombre],

Según nuestros registros, tu Certificado de Seguro (COI)
vence el [FECHA].

Para continuar trabajando con ModulorIA, necesitamos
el certificado renovado antes de esa fecha.

📎 Envía tu nuevo COI a: seguros@moduloria.com
   (Se procesará automáticamente)

⚠️ IMPORTANTE: Sin COI vigente, no podremos asignarte
nuevos proyectos ni procesar pagos pendientes.

¿Necesitas ayuda con la renovación?
Contacta a [PM asignado]: [teléfono]

Gracias por tu colaboración,
Equipo ModulorIA

---
Este es un mensaje automático de nuestro sistema de cumplimiento.
```

---

## 📋 PLAN DE IMPLEMENTACIÓN

### Fase 1: Inventario (Semana 1)
1. **Listar todos los proveedores** actuales
2. **Recopilar COIs** existentes
3. **Definir requisitos mínimos** de cobertura por tipo
4. **Crear base Airtable** con fechas de vencimiento

### Fase 2: Automatización Alertas (Semana 2)
1. **N8N workflow**: Check diario de vencimientos
2. **Secuencia de emails**: 30, 15, 7, 3 días antes
3. **WhatsApp** para urgencias (últimos 7 días)
4. **Dashboard** de status de cumplimiento

### Fase 3: OCR + Bloqueo (Semana 3)
1. **Integrar OCR** para lectura automática de COIs
2. **Validación de coberturas** contra requisitos
3. **Bloqueo en ERP** para proveedores vencidos
4. **Alertas a PM** cuando se detecte incumplimiento

---

## 💡 CASOS DE USO REALES

### Antes
Administradora tiene Excel con 35 proveedores. Revisa vencimientos "cuando se acuerda" (mensualmente). Descubre que 5 seguros vencieron hace semanas. Llama a cada uno manualmente. Uno de ellos (electricista) trabajó en sitio ayer con seguro vencido. Por suerte no pasó nada, pero la empresa estuvo expuesta.

### Después
Sistema envía automáticamente emails a los 5 proveedores 30 días antes de vencimiento. A los 15 días, WhatsApp recordatorio. A los 7 días, alerta al PM. Si vence sin renovar: bloqueo automático en sistema. Cuando electricista intenta asignarse a proyecto, sistema muestra: "⛔ COI vencido - No disponible hasta renovación". **Zero exposure**.

**Resultado**: Cero proveedores trabajando sin cobertura, cero tiempo administrativo persiguiendo renovaciones.

---

## ⚠️ ERRORES COMUNES A EVITAR

### ❌ NO Hacer
1. **Confiar en "ya lo renovó"** → Verificar siempre con documento
2. **Aceptar cualquier cobertura** → Validar montos mínimos
3. **No bloquear pagos** → Si trabajan sin COI, no pagar hasta regularizar
4. **Ignorar subcontratistas pequeños** → El riesgo es igual

### ✅ SÍ Hacer
1. **Onboarding estricto** → No trabajar sin COI verificado
2. **Automatizar 100%** → No depender de memoria humana
3. **Auditoría trimestral** → Revisar cumplimiento general
4. **Comunicar consecuencias** → Bloqueo es real, no amenaza vacía

---

## 📊 MÉTRICAS DE ÉXITO

| Métrica | Actual | Objetivo Mes 1 | Objetivo Mes 3 |
|---------|--------|----------------|----------------|
| **Proveedores con COI vigente** | 70% | 95% | 100% |
| **Tiempo admin en COIs** | 15h/mes | 2h/mes | 30min/mes |
| **Incidentes sin cobertura** | Desconocido | 0 | 0 |
| **Días promedio para renovación** | 15+ | 7 | 3 |

---

## 💵 ROI CALCULADO

- **Inversión**: ~€2,500 (3 semanas configuración)
- **Ahorro admin anual**: €6,000 (tiempo)
- **Riesgo mitigado**: €100,000+ por incidente evitado
- **Payback**: <1 mes (considerando 1 incidente evitado/año)
- **ROI**: ~**1,200%** (conservador, sin contar incidentes mayores)

---

**Última actualización**: 2026-01-19
**Categoría**: Cumplimiento y Legal
**Dificultad**: ⭐⭐⭐ (3/5)
**ROI**: ⭐⭐⭐⭐⭐ (5/5) + Mitigación de riesgo crítico
