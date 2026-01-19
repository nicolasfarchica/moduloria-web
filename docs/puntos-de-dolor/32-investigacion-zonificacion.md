# 🗺️ Investigación de Zonificación Automatizada

**TIER**: 🚀 Alto Impacto | **Implementación**: 3-4 semanas | **Complejidad**: Alta | **ROI**: ~900%

---

## 🎯 DESCRIPCIÓN DEL PROBLEMA

### El Dolor Diario
Antes de poder ofrecer un presupuesto realista, las empresas modulares deben validar la viabilidad normativa del terreno del cliente. Este proceso de investigación de zonificación es **manual, artesanal y costoso**. Cada análisis puede tomar de varias horas a días, y el conocimiento adquirido no se centraliza.

### Manifestación Específica
- Un técnico debe localizar la parcela en mapas GIS del condado
- Buscar ordenanzas específicas (setbacks, coeficiente ocupación, altura máxima)
- Verificar si hay restricciones contra viviendas prefabricadas o modulares
- Analizar visualmente el acceso por carretera para camiones de gran gálibo
- **Costo implícito: hasta €300+ por hora** considerando personal especializado
- La empresa investiga el mismo municipio diez veces para diez clientes diferentes

### Contexto en Construcción Modular
La construcción modular enfrenta restricciones específicas de zonificación, transporte y códigos que varían por municipio. A diferencia de la construcción tradicional, un error de interpretación puede invalidar todo el proyecto. Además, los vendedores prometen casas en zonas que luego resultan inviables, generando pérdidas de tiempo y credibilidad.

---

## 💰 IMPACTO CUANTIFICADO

### Costos Directos
- **Tiempo por investigación**: 4-8 horas × €40/hora = €160-320/estudio
- **Volumen mensual**: 20-40 estudios/mes = €4,800-12,800/mes
- **Errores de interpretación**: 5-10% de proyectos con problemas normativos
- **Cuello de botella**: Equipo técnico frena al equipo comercial

### Consecuencias del Proceso Manual
- **Errores costosos**: Vendedor promete 2 plantas en zona con restricción de altura → pérdida del cliente o rediseño costoso
- **Ciclo de ventas extendido**: Las ventas se detienen esperando el "OK" de viabilidad
- **Conocimiento no centralizado**: Se repite el trabajo para cada cliente nuevo en la misma zona

**AHORRO POTENCIAL**: €6,000-12,000/mes (eficiencia + errores evitados)

---

## ⚙️ SOLUCIÓN TÉCNICA

### Stack Tecnológico
1. **N8N** - Orquestación del flujo
2. **OpenAI GPT-4** - Lectura e interpretación de ordenanzas
3. **APIs GIS** - Consulta de mapas municipales
4. **Google Maps API** - Análisis de acceso y rutas
5. **Airtable** - Base de conocimiento de zonas investigadas

### Flujo de Investigación Automatizada

```
┌─────────────────────────────────────────────────────┐
│           INVESTIGACIÓN ZONIFICACIÓN AUTO           │
└─────────────────────────────────────────────────────┘
                          │
                          ▼
               ┌─────────────────┐
               │  Lead con       │
               │  Dirección      │
               │  del Terreno    │
               └────────┬────────┘
                        │
                        ▼
               ┌─────────────────┐
               │     N8N         │
               │  Consulta APIs  │
               │  GIS/Municipio  │
               └────────┬────────┘
                        │
         ┌──────────────┼──────────────┐
         │              │              │
         ▼              ▼              ▼
┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│    ZONA     │  │  ORDENANZAS │  │   ACCESO    │
│  Residencial│  │  Setbacks   │  │   Camión    │
│  Comercial  │  │  Altura     │  │   Grúa      │
│  Mixta      │  │  Ocupación  │  │   Rutas     │
└──────┬──────┘  └──────┬──────┘  └──────┬──────┘
       │                │                │
       └────────────────┼────────────────┘
                        │
                        ▼
               ┌─────────────────┐
               │   OpenAI GPT-4  │
               │  Interpreta     │
               │  normativa y    │
               │  evalúa viab.   │
               └────────┬────────┘
                        │
                        ▼
               ┌─────────────────┐
               │    INFORME      │
               │   VIABILIDAD    │
               │   PRELIMINAR    │
               │   (PDF auto)    │
               └────────┬────────┘
                        │
           ┌────────────┼────────────┐
           │            │            │
           ▼            ▼            ▼
      ┌────────┐   ┌────────┐   ┌────────┐
      │ VIABLE │   │REVISAR │   │NO VIABLE│
      │   ✅   │   │   ⚠️   │   │   ❌   │
      │Continuar│  │Técnico │   │Notificar│
      │ proceso │  │ revisa │   │  lead   │
      └────────┘   └────────┘   └────────┘
```

### Informe de Viabilidad Automático

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INFORME VIABILIDAD ZONIFICACIÓN
Generado: 2026-01-19 | Auto-análisis
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📍 UBICACIÓN
Dirección: Calle Principal 123, Valencia
Referencia catastral: 1234567VG1234N
Parcela: 500 m²

🏗️ ZONIFICACIÓN
Uso permitido: Residencial unifamiliar ✅
Altura máxima: 9 metros (3 plantas) ✅
Coef. ocupación: 40% (200 m² máx) ✅
Retranqueos: 3m frontal, 2m laterales ✅

⚠️ RESTRICCIONES MODULARES
- No hay restricción explícita contra modular ✅
- Requiere certificación ITeC para módulos

🚛 ACCESO TRANSPORTE
Ancho calle: 6 metros ✅
Radio giro: Suficiente para camión ✅
Obstáculos: Ninguno detectado ✅
Distancia desde fábrica: 145 km

📋 RECOMENDACIÓN
VIABLE CON CONDICIONES
Se recomienda verificar con técnico local
las especificaciones de cimentación.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### Prompt para GPT-4

```
Analiza la siguiente información normativa de zonificación
para un proyecto de construcción modular:

DATOS DE LA PARCELA:
- Ubicación: [dirección]
- Superficie: [m²]
- Zonificación: [tipo]

ORDENANZAS APLICABLES:
[texto de ordenanzas]

Determina:
1. ¿Es viable instalar una vivienda modular prefabricada?
2. ¿Cuáles son las restricciones de altura, ocupación y retranqueos?
3. ¿Hay prohibiciones específicas contra "prefabricados" o "modulares"?
4. ¿Qué permisos especiales podrían requerirse?

Devuelve un informe estructurado con semáforo:
- VERDE: Viable sin restricciones significativas
- AMARILLO: Viable con condiciones/verificación
- ROJO: No viable o restricciones mayores
```

---

## 📋 PLAN DE IMPLEMENTACIÓN

### Fase 1: Base de Conocimiento (Semana 1)
1. **Recopilar** ordenanzas de zonas más frecuentes
2. **Estructurar** base de datos por municipio
3. **Identificar** APIs de GIS disponibles por región
4. **Documentar** criterios de viabilidad modular

### Fase 2: Automatización Básica (Semana 2-3)
1. **N8N workflow**: Dirección → Consulta APIs → Airtable
2. **Integrar GPT-4** para interpretar ordenanzas
3. **Generar PDF** de informe automático
4. **Notificaciones** a vendedor con resultado

### Fase 3: Optimización (Semana 4+)
1. **Caché de resultados** por zona investigada
2. **Feedback loop** con equipo técnico para mejorar precisión
3. **Dashboard** de zonas más consultadas
4. **Integración con CRM** para adjuntar informe al lead

---

## 💡 CASOS DE USO REALES

### Antes
Lead pide presupuesto para casa en zona rural. Técnico dedica 5 horas investigando: busca web del ayuntamiento, descarga PDF de 200 páginas de ordenanzas, intenta localizar la parcela en el catastro. Finalmente determina que hay restricción de altura que invalida el diseño propuesto. Esas 5 horas (€200+) se perdieron. El mes siguiente, otro lead pide presupuesto en el mismo municipio: el técnico vuelve a investigar desde cero.

### Después
Lead ingresa dirección en formulario web. N8N consulta APIs y base de conocimiento. GPT-4 interpreta ordenanzas (ya cacheadas del mes anterior). En **5 minutos** se genera informe: "Viable con restricción de altura 7.5m". Vendedor responde al cliente con información precisa el mismo día. Se cierra la venta porque el cliente percibe profesionalismo y rapidez.

**Resultado**: 4+ horas ahorradas por estudio, base de conocimiento que crece con cada investigación.

---

## ⚠️ ERRORES COMUNES A EVITAR

### ❌ NO Hacer
1. **Confiar ciegamente en IA** → Siempre revisión humana para casos complejos
2. **Ignorar actualizaciones normativas** → Revisar ordenanzas periódicamente
3. **No cachear resultados** → Desperdiciar trabajo repetido
4. **Prometer sin verificar** → El informe es "preliminar", no vinculante

### ✅ SÍ Hacer
1. **Disclaimer claro** en informes automáticos
2. **Escalado** a técnico humano en casos ambiguos
3. **Actualizar base** cuando técnico detecta cambios
4. **Medir precisión** del sistema vs verificación manual

---

## 📊 MÉTRICAS DE ÉXITO

| Métrica | Actual | Objetivo Mes 1 | Objetivo Mes 3 |
|---------|--------|----------------|----------------|
| **Tiempo por estudio** | 4-8h | 30min | 5min |
| **Estudios automatizados** | 0% | 50% | 80% |
| **Precisión vs manual** | - | 85% | 95% |
| **Base de zonas cacheadas** | 0 | 20 | 100+ |

---

## 💵 ROI CALCULADO

- **Inversión**: ~€4,000 (4 semanas configuración + APIs)
- **Ahorro mensual**: €6,000 (tiempo) + €3,000 (errores evitados)
- **Payback**: ~1.5 meses
- **ROI**: ~**900%**

---

**Última actualización**: 2026-01-19
**Categoría**: Pre-Construcción
**Dificultad**: ⭐⭐⭐⭐ (4/5)
**ROI**: ⭐⭐⭐⭐⭐ (5/5)
