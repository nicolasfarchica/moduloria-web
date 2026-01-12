# 🧮 WIZARD CALCULADORA ROI - ModulorIA

**Fecha:** 4 de diciembre de 2025
**Tipo:** Calculadora interactiva de 3 pasos (wizard step-by-step)
**Objetivo:** Convertir visitantes en leads cualificados mostrando ahorro potencial personalizado
**Ubicación:** Homepage (CTA principal) + página dedicada `/calculadora`

---

## 🎯 OBJETIVO Y ESTRATEGIA

### Por qué Wizard (no calculadora simple):

1. **Mayor engagement** - Usuario invierte tiempo = mayor compromiso
2. **Más datos** - Capturamos información valiosa para personalizar propuesta
3. **Efecto "endowment"** - Al final del proceso, usuario ya invirtió 2-3 min, más probable que deje email
4. **Educación progresiva** - Cada paso educa sobre problemas que quizá ni sabían que tenían
5. **Sensación de personalización** - "Esto es para MI empresa" vs "calculadora genérica"

### Métricas de éxito:

- **Tasa de inicio:** >15% de visitantes homepage
- **Tasa de completado:** >60% de quienes empiezan
- **Conversión a lead:** >40% dejan email al final
- **Tiempo promedio:** 2-3 minutos

---

## 📐 ESTRUCTURA GENERAL DEL WIZARD

```
┌─────────────────────────────────────────────────────────────┐
│  WIZARD CALCULADORA ROI - 3 PASOS                          │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  [●━━━━○━━━━○]  Paso 1 de 3: Contexto de tu empresa       │
│                                                             │
│  [Formulario Paso 1]                                        │
│                                                             │
│  [Botón: Siguiente →]                                       │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Barra de progreso:
```html
<!-- Paso 1 -->
<div class="progress-bar">
  <div class="step active">1</div>
  <div class="line"></div>
  <div class="step">2</div>
  <div class="line"></div>
  <div class="step">3</div>
</div>

<!-- Visual: ●━━━━○━━━━○ -->
```

---

## 🔷 PASO 1: CONTEXTO DE TU EMPRESA

### Objetivo del paso:
Entender tamaño y modelo de negocio para personalizar cálculos.

### Campos:

#### 1️⃣ Número de empleados administrativos
```html
<label>¿Cuántas personas trabajan en oficina/administración?</label>
<div class="button-group">
  <button data-value="1-3">1-3 personas</button>
  <button data-value="4-10">4-10 personas</button>
  <button data-value="11-20">11-20 personas</button>
  <button data-value="20+">Más de 20</button>
</div>
<p class="helper-text">Incluye gerentes, administrativos, coordinadores de obra</p>
```

**Lógica interna:**
- 1-3 personas → Arquetipo Carlos (Emprendedor)
- 4-10 personas → Transición Carlos → Laura
- 11-20 personas → Arquetipo Laura (Gerente PYME)
- 20+ personas → Arquetipo Javier (Director Corporativo)

---

#### 2️⃣ Número de obras simultáneas
```html
<label>¿Cuántas obras gestionas simultáneamente en promedio?</label>
<input type="number" min="1" max="100" placeholder="Ej: 5" />
<p class="helper-text">Obras activas al mismo tiempo (no totales al año)</p>
```

**Lógica interna:**
- 1-3 obras → Pequeño
- 4-10 obras → Mediano
- 10+ obras → Grande

---

#### 3️⃣ Facturación anual aproximada
```html
<label>Facturación anual aproximada (opcional)</label>
<select>
  <option value="">Prefiero no decirlo</option>
  <option value="0-500k">€0 - €500.000</option>
  <option value="500k-2m">€500.000 - €2M</option>
  <option value="2m-5m">€2M - €5M</option>
  <option value="5m-15m">€5M - €15M</option>
  <option value="15m+">Más de €15M</option>
</select>
<p class="helper-text">Nos ayuda a calcular el ROI de forma más precisa</p>
```

**Lógica interna:**
- Si no responde, usar promedios conservadores
- Si responde, ajustar cálculos de ahorro

---

#### 4️⃣ Tipo de construcción (opcional pero útil)
```html
<label>¿Qué tipo de construcción modular haces? (opcional)</label>
<div class="checkbox-group">
  <label><input type="checkbox" value="casas"/> Casas modulares</label>
  <label><input type="checkbox" value="ampliaciones"/> Ampliaciones/Extensiones</label>
  <label><input type="checkbox" value="comercial"/> Locales comerciales</label>
  <label><input type="checkbox" value="temporal"/> Construcción temporal</label>
  <label><input type="checkbox" value="otro"/> Otro</label>
</div>
```

---

### Diseño visual Paso 1:

```css
/* Card glassmorphism para el wizard */
.wizard-container {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 24px;
  padding: 48px;
  max-width: 700px;
  margin: 0 auto;
  box-shadow: 0 8px 32px rgba(27, 60, 83, 0.15);
}

/* Botones de selección múltiple */
.button-group button {
  background: rgba(35, 76, 106, 0.1);
  border: 2px solid #234C6A;
  color: #234C6A;
  padding: 16px 24px;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.button-group button:hover {
  background: rgba(35, 76, 106, 0.2);
  transform: translateY(-2px);
}

.button-group button.selected {
  background: #234C6A;
  color: #FFFFFF;
  border-color: #234C6A;
}
```

---

## 🔶 PASO 2: PROCESOS QUE AUTOMATIZARÍAS

### Objetivo del paso:
Identificar problemas específicos para calcular ahorro real.

### Introducción del paso:
```
Ahora dime: ¿Cuáles de estos procesos consumen más tiempo en tu empresa?

Selecciona todos los que apliquen. No te preocupes si son muchos -
es normal en construcción modular 😅
```

### Formato: Checklist con 25 problemas organizados por categorías

#### CATEGORÍA 1: Comunicación (5 problemas)
```html
<div class="category">
  <h4>📧 Comunicación y Coordinación</h4>

  <label class="checkbox-card">
    <input type="checkbox" value="email-clasificacion" data-time="200" data-cost="4800"/>
    <div class="content">
      <h5>Clasificación de emails</h5>
      <p class="problem-desc">Leer, etiquetar y distribuir 100+ emails diarios entre proveedores, clientes, subcontratas</p>
      <p class="time-estimate">⏱️ ~200 min/semana</p>
    </div>
  </label>

  <label class="checkbox-card">
    <input type="checkbox" value="whatsapp-chaos" data-time="180" data-cost="4320"/>
    <div class="content">
      <h5>Caos de WhatsApp</h5>
      <p class="problem-desc">Buscar info en 15 grupos de WhatsApp, reenviar mensajes, perder contexto</p>
      <p class="time-estimate">⏱️ ~180 min/semana</p>
    </div>
  </label>

  <label class="checkbox-card">
    <input type="checkbox" value="llamadas-seguimiento" data-time="150" data-cost="3600"/>
    <div class="content">
      <h5>Llamadas de seguimiento repetitivas</h5>
      <p class="problem-desc">"¿Llegó el material?" "¿Cuándo viene el electricista?" - 20 llamadas diarias</p>
      <p class="time-estimate">⏱️ ~150 min/semana</p>
    </div>
  </label>

  <label class="checkbox-card">
    <input type="checkbox" value="reuniones-status" data-time="240" data-cost="5760"/>
    <div class="content">
      <h5>Reuniones de status diarias/semanales</h5>
      <p class="problem-desc">Juntar a 5 personas para preguntar "¿cómo va todo?" cuando podría ser un reporte auto</p>
      <p class="time-estimate">⏱️ ~240 min/semana</p>
    </div>
  </label>

  <label class="checkbox-card">
    <input type="checkbox" value="coordinacion-subcontratas" data-time="120" data-cost="2880"/>
    <div class="content">
      <h5>Coordinación de subcontratas</h5>
      <p class="problem-desc">Llamar a fontanero, electricista, carpintero para confirmar fechas, enviar planos, recordar materiales</p>
      <p class="time-estimate">⏱️ ~120 min/semana</p>
    </div>
  </label>
</div>
```

#### CATEGORÍA 2: Documentación (5 problemas)
```html
<div class="category">
  <h4>📄 Documentación y Papeleos</h4>

  <label class="checkbox-card">
    <input type="checkbox" value="facturas-transcripcion" data-time="200" data-cost="4800"/>
    <div class="content">
      <h5>Transcripción manual de facturas</h5>
      <p class="problem-desc">Abrir PDF, copiar datos, pegar en Excel/ERP, 30 facturas/semana</p>
      <p class="time-estimate">⏱️ ~200 min/semana</p>
    </div>
  </label>

  <label class="checkbox-card">
    <input type="checkbox" value="albaranes-registro" data-time="100" data-cost="2400"/>
    <div class="content">
      <h5>Registro de albaranes de entrega</h5>
      <p class="problem-desc">Foto → descargar → renombrar → subir a carpeta → registrar en Excel</p>
      <p class="time-estimate">⏱️ ~100 min/semana</p>
    </div>
  </label>

  <label class="checkbox-card">
    <input type="checkbox" value="partes-obra-digitalizacion" data-time="180" data-cost="4320"/>
    <div class="content">
      <h5>Digitalización de partes de obra</h5>
      <p class="problem-desc">Partes en papel → escanear → OCR manual → pasar a sistema</p>
      <p class="time-estimate">⏱️ ~180 min/semana</p>
    </div>
  </label>

  <label class="checkbox-card">
    <input type="checkbox" value="contratos-archivo" data-time="60" data-cost="1440"/>
    <div class="content">
      <h5>Archivo de contratos y documentos legales</h5>
      <p class="problem-desc">Nombrar, clasificar, almacenar, buscar cuando se necesitan</p>
      <p class="time-estimate">⏱️ ~60 min/semana</p>
    </div>
  </label>

  <label class="checkbox-card">
    <input type="checkbox" value="certificaciones-mensuales" data-time="300" data-cost="7200"/>
    <div class="content">
      <h5>Certificaciones de obra mensuales</h5>
      <p class="problem-desc">Recopilar mediciones, cruzar con presupuesto, generar certificado, enviar a cliente</p>
      <p class="time-estimate">⏱️ ~300 min/semana (en semanas que toca)</p>
    </div>
  </label>
</div>
```

#### CATEGORÍA 3: Control de Obra (5 problemas)
```html
<div class="category">
  <h4>🏗️ Control de Obra</h4>

  <label class="checkbox-card">
    <input type="checkbox" value="materiales-tracking" data-time="150" data-cost="3600"/>
    <div class="content">
      <h5>Control de inventario de materiales</h5>
      <p class="problem-desc">Excel manual: qué llegó, qué falta, qué se usó, dónde está</p>
      <p class="time-estimate">⏱️ ~150 min/semana</p>
    </div>
  </label>

  <label class="checkbox-card">
    <input type="checkbox" value="herramientas-tracking" data-time="90" data-cost="2160"/>
    <div class="content">
      <h5>Tracking de herramientas/equipos</h5>
      <p class="problem-desc">"¿Dónde está la taladradora?" "¿Quién tiene el nivel láser?" - buscar en 3 obras</p>
      <p class="time-estimate">⏱️ ~90 min/semana</p>
    </div>
  </label>

  <label class="checkbox-card">
    <input type="checkbox" value="reportes-progreso" data-time="180" data-cost="4320"/>
    <div class="content">
      <h5>Reportes de progreso de obra</h5>
      <p class="problem-desc">Fotos → descargar → editar → comentar → informe PDF → enviar a cliente semanalmente</p>
      <p class="time-estimate">⏱️ ~180 min/semana</p>
    </div>
  </label>

  <label class="checkbox-card">
    <input type="checkbox" value="incidencias-seguimiento" data-time="120" data-cost="2880"/>
    <div class="content">
      <h5>Seguimiento de incidencias/problemas</h5>
      <p class="problem-desc">Anotar problema → asignar responsable → seguir hasta cierre → actualizar estado</p>
      <p class="time-estimate">⏱️ ~120 min/semana</p>
    </div>
  </label>

  <label class="checkbox-card">
    <input type="checkbox" value="control-calidad" data-time="240" data-cost="5760"/>
    <div class="content">
      <h5>Checklists de control de calidad</h5>
      <p class="problem-desc">Revisar 50 puntos por módulo, anotar en papel, pasar a digital, enviar a producción</p>
      <p class="time-estimate">⏱️ ~240 min/semana</p>
    </div>
  </label>
</div>
```

#### CATEGORÍA 4: Clientes (5 problemas)
```html
<div class="category">
  <h4>👥 Gestión de Clientes</h4>

  <label class="checkbox-card">
    <input type="checkbox" value="consultas-clientes" data-time="180" data-cost="4320"/>
    <div class="content">
      <h5>Responder consultas repetitivas de clientes</h5>
      <p class="problem-desc">"¿Cuándo empieza mi obra?" "¿Qué incluye el precio?" - mismas preguntas 20 veces</p>
      <p class="time-estimate">⏱️ ~180 min/semana</p>
    </div>
  </label>

  <label class="checkbox-card">
    <input type="checkbox" value="cotizaciones-envio" data-time="150" data-cost="3600"/>
    <div class="content">
      <h5>Preparar y enviar cotizaciones</h5>
      <p class="problem-desc">Copiar plantilla → personalizar → calcular → formatear → enviar → seguimiento</p>
      <p class="time-estimate">⏱️ ~150 min/semana</p>
    </div>
  </label>

  <label class="checkbox-card">
    <input type="checkbox" value="seguimiento-pagos" data-time="120" data-cost="2880"/>
    <div class="content">
      <h5>Seguimiento de pagos pendientes</h5>
      <p class="problem-desc">Revisar quién debe, cuánto, desde cuándo → llamar/email → anotar promesas → repetir</p>
      <p class="time-estimate">⏱️ ~120 min/semana</p>
    </div>
  </label>

  <label class="checkbox-card">
    <input type="checkbox" value="actualizaciones-status" data-time="90" data-cost="2160"/>
    <div class="content">
      <h5>Actualizaciones de estado a clientes</h5>
      <p class="problem-desc">"Hola Carlos, te cuento cómo va tu obra..." - email semanal manual a 10 clientes</p>
      <p class="time-estimate">⏱️ ~90 min/semana</p>
    </div>
  </label>

  <label class="checkbox-card">
    <input type="checkbox" value="postventa-garantias" data-time="60" data-cost="1440"/>
    <div class="content">
      <h5>Gestión de postventa y garantías</h5>
      <p class="problem-desc">Cliente reporta problema → buscar historial → coordinar reparación → hacer seguimiento</p>
      <p class="time-estimate">⏱️ ~60 min/semana</p>
    </div>
  </label>
</div>
```

#### CATEGORÍA 5: Administrativo (5 problemas)
```html
<div class="category">
  <h4>💼 Tareas Administrativas</h4>

  <label class="checkbox-card">
    <input type="checkbox" value="busqueda-documentos" data-time="120" data-cost="2880"/>
    <div class="content">
      <h5>Buscar documentos en carpetas/emails</h5>
      <p class="problem-desc">"¿Dónde está la factura de marzo?" "¿Quién tiene el plano actualizado?" - 30 min diarios perdidos</p>
      <p class="time-estimate">⏱️ ~120 min/semana</p>
    </div>
  </label>

  <label class="checkbox-card">
    <input type="checkbox" value="agenda-coordinacion" data-time="90" data-cost="2160"/>
    <div class="content">
      <h5>Coordinación de agendas y citas</h5>
      <p class="problem-desc">Emails/llamadas para agendar visitas, confirmaciones, cambios de última hora</p>
      <p class="time-estimate">⏱️ ~90 min/semana</p>
    </div>
  </label>

  <label class="checkbox-card">
    <input type="checkbox" value="proveedores-pedidos" data-time="180" data-cost="4320"/>
    <div class="content">
      <h5>Gestión de pedidos a proveedores</h5>
      <p class="problem-desc">Revisar stock → llamar/email proveedor → confirmar precio → hacer pedido → dar seguimiento</p>
      <p class="time-estimate">⏱️ ~180 min/semana</p>
    </div>
  </label>

  <label class="checkbox-card">
    <input type="checkbox" value="nominas-horas" data-time="240" data-cost="5760"/>
    <div class="content">
      <h5>Control de horas y nóminas</h5>
      <p class="problem-desc">Recopilar partes de horas → validar → cuadrar con obras → enviar a gestoría</p>
      <p class="time-estimate">⏱️ ~240 min/semana (semanas que toca)</p>
    </div>
  </label>

  <label class="checkbox-card">
    <input type="checkbox" value="reportes-direccion" data-time="180" data-cost="4320"/>
    <div class="content">
      <h5>Informes para dirección/socios</h5>
      <p class="problem-desc">Recopilar KPIs de 5 fuentes, formatear, analizar, presentar mensualmente</p>
      <p class="time-estimate">⏱️ ~180 min/semana (cuando toca)</p>
    </div>
  </label>
</div>
```

---

### Diseño visual Paso 2:

```css
/* Checkbox cards con hover interactivo */
.checkbox-card {
  display: flex;
  align-items: flex-start;
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid transparent;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.checkbox-card:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: #234C6A;
  transform: translateX(4px);
}

.checkbox-card input[type="checkbox"]:checked ~ .content {
  opacity: 1;
}

.checkbox-card input[type="checkbox"]:checked {
  accent-color: #C67A52; /* Naranja cobre */
}

/* Categorías */
.category {
  margin-bottom: 40px;
}

.category h4 {
  color: #1B3C53;
  font-size: 1.25rem;
  margin-bottom: 16px;
  font-weight: 600;
}

/* Tiempo estimado */
.time-estimate {
  color: #C67A52;
  font-size: 0.875rem;
  font-weight: 600;
  margin-top: 8px;
}
```

---

### Sidebar dinámico (opcional pero recomendado):

```html
<!-- Sidebar que muestra ahorro en tiempo real mientras selecciona -->
<div class="sidebar-preview">
  <h4>Tu ahorro potencial</h4>
  <div class="metric">
    <span class="value" id="total-hours">0</span>
    <span class="unit">horas/semana</span>
  </div>
  <div class="metric">
    <span class="value" id="total-cost">€0</span>
    <span class="unit">ahorrados/año</span>
  </div>
  <p class="note">Basado en los <span id="selected-count">0</span> procesos seleccionados</p>
</div>
```

```javascript
// JavaScript para actualizar en tiempo real
const checkboxes = document.querySelectorAll('.checkbox-card input[type="checkbox"]');
let totalMinutes = 0;
let totalCost = 0;

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', (e) => {
    const minutes = parseInt(e.target.dataset.time);
    const cost = parseInt(e.target.dataset.cost);

    if (e.target.checked) {
      totalMinutes += minutes;
      totalCost += cost;
    } else {
      totalMinutes -= minutes;
      totalCost -= cost;
    }

    updatePreview();
  });
});

function updatePreview() {
  const hours = (totalMinutes / 60).toFixed(1);
  document.getElementById('total-hours').textContent = hours;
  document.getElementById('total-cost').textContent = `€${totalCost.toLocaleString()}`;
  document.getElementById('selected-count').textContent =
    document.querySelectorAll('.checkbox-card input:checked').length;
}
```

---

## 🔸 PASO 3: RESULTADOS (Dashboard)

### Objetivo del paso:
Mostrar ahorro potencial de forma visual e impactante, capturar email para enviar informe detallado.

### Diseño: Dashboard estilo "data viz" con glassmorphism

#### Sección 1: Resumen Ejecutivo (Hero)

```html
<div class="results-hero">
  <h2>Tu empresa está perdiendo</h2>
  <div class="big-number">
    <span class="amount">€67.200</span>
    <span class="period">al año</span>
  </div>
  <p class="subheadline">
    en tareas que IA puede automatizar <strong>en 2-4 semanas</strong>
  </p>
</div>
```

```css
.results-hero {
  text-align: center;
  padding: 60px 40px;
  background: linear-gradient(135deg, #1B3C53 0%, #234C6A 100%);
  border-radius: 24px;
  color: #FFFFFF;
  margin-bottom: 40px;
}

.big-number {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 24px 0;
}

.big-number .amount {
  font-size: 5rem; /* 80px */
  font-weight: 700;
  color: #C67A52; /* Naranja cobre */
  line-height: 1;
}

.big-number .period {
  font-size: 1.5rem;
  color: #D2C1B6;
  margin-top: 8px;
}
```

---

#### Sección 2: Desglose por Categoría

```html
<div class="breakdown">
  <h3>Desglose de ahorro por categoría</h3>

  <!-- Chart de barras horizontal -->
  <div class="category-chart">
    <div class="bar-item">
      <div class="label">
        <span class="icon">📧</span>
        <span class="name">Comunicación</span>
      </div>
      <div class="bar-container">
        <div class="bar" style="width: 75%;" data-value="€24.000"></div>
      </div>
      <div class="value">€24.000/año</div>
    </div>

    <div class="bar-item">
      <div class="label">
        <span class="icon">📄</span>
        <span class="name">Documentación</span>
      </div>
      <div class="bar-container">
        <div class="bar" style="width: 60%;" data-value="€19.200"></div>
      </div>
      <div class="value">€19.200/año</div>
    </div>

    <div class="bar-item">
      <div class="label">
        <span class="icon">🏗️</span>
        <span class="name">Control de Obra</span>
      </div>
      <div class="bar-container">
        <div class="bar" style="width: 45%;" data-value="€14.400"></div>
      </div>
      <div class="value">€14.400/año</div>
    </div>

    <div class="bar-item">
      <div class="label">
        <span class="icon">👥</span>
        <span class="name">Clientes</span>
      </div>
      <div class="bar-container">
        <div class="bar" style="width: 30%;" data-value="€9.600"></div>
      </div>
      <div class="value">€9.600/año</div>
    </div>
  </div>
</div>
```

```css
.category-chart {
  margin-top: 24px;
}

.bar-item {
  display: grid;
  grid-template-columns: 180px 1fr 120px;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
}

.bar-container {
  background: rgba(35, 76, 106, 0.1);
  border-radius: 8px;
  height: 40px;
  position: relative;
  overflow: hidden;
}

.bar {
  background: linear-gradient(90deg, #234C6A 0%, #C67A52 100%);
  height: 100%;
  border-radius: 8px;
  transition: width 1s ease-out;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 12px;
  color: #FFFFFF;
  font-weight: 600;
  font-size: 0.875rem;
}

/* Animación al aparecer */
.bar {
  width: 0 !important;
}

.bar.animate {
  width: var(--final-width) !important;
}
```

---

#### Sección 3: Métricas Clave (3 cards)

```html
<div class="metrics-grid">
  <div class="metric-card">
    <div class="icon">⏱️</div>
    <div class="value">27.3</div>
    <div class="unit">horas/semana</div>
    <div class="label">ahorradas</div>
  </div>

  <div class="metric-card">
    <div class="icon">💰</div>
    <div class="value">€5.200</div>
    <div class="unit">inversión</div>
    <div class="label">estimada (una vez)</div>
  </div>

  <div class="metric-card highlight">
    <div class="icon">📈</div>
    <div class="value">7 semanas</div>
    <div class="unit">ROI</div>
    <div class="label">recuperas inversión</div>
  </div>
</div>
```

```css
.metrics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  margin: 40px 0;
}

.metric-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(35, 76, 106, 0.2);
  border-radius: 16px;
  padding: 32px 24px;
  text-align: center;
  transition: all 0.3s ease;
}

.metric-card:hover {
  transform: translateY(-4px);
  border-color: #234C6A;
  box-shadow: 0 12px 24px rgba(27, 60, 83, 0.2);
}

.metric-card.highlight {
  background: linear-gradient(135deg, rgba(198, 122, 82, 0.2) 0%, rgba(35, 76, 106, 0.2) 100%);
  border-color: #C67A52;
}

.metric-card .icon {
  font-size: 3rem;
  margin-bottom: 16px;
}

.metric-card .value {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1B3C53;
  line-height: 1.2;
}

.metric-card .unit {
  font-size: 1rem;
  color: #456882;
  margin-top: 4px;
}

.metric-card .label {
  font-size: 0.875rem;
  color: #456882;
  margin-top: 8px;
}
```

---

#### Sección 4: Top 3 Quick Wins (victorias rápidas)

```html
<div class="quick-wins">
  <h3>🎯 Tus 3 victorias más rápidas</h3>
  <p class="subtitle">Estos procesos puedes automatizarlos en 1-2 semanas cada uno</p>

  <div class="wins-list">
    <div class="win-card">
      <div class="rank">#1</div>
      <div class="content">
        <h4>Clasificación automática de emails</h4>
        <div class="stats">
          <span class="stat">
            <strong>200 min/semana</strong> ahorrados
          </span>
          <span class="stat">
            <strong>€4.800/año</strong> recuperados
          </span>
          <span class="stat">
            <strong>1 semana</strong> implementación
          </span>
        </div>
        <p class="how">Bot IA lee emails, clasifica por urgencia/tema, asigna responsable automáticamente</p>
      </div>
    </div>

    <div class="win-card">
      <div class="rank">#2</div>
      <div class="content">
        <h4>OCR de facturas</h4>
        <div class="stats">
          <span class="stat">
            <strong>200 min/semana</strong> ahorrados
          </span>
          <span class="stat">
            <strong>€4.800/año</strong> recuperados
          </span>
          <span class="stat">
            <strong>2 semanas</strong> implementación
          </span>
        </div>
        <p class="how">Foto de factura → IA extrae datos → registra en sistema automáticamente</p>
      </div>
    </div>

    <div class="win-card">
      <div class="rank">#3</div>
      <div class="content">
        <h4>Reportes de obra automáticos</h4>
        <div class="stats">
          <span class="stat">
            <strong>180 min/semana</strong> ahorrados
          </span>
          <span class="stat">
            <strong>€4.320/año</strong> recuperados
          </span>
          <span class="stat">
            <strong>2 semanas</strong> implementación
          </span>
        </div>
        <p class="how">Fotos + notas → IA genera informe PDF profesional → envía a cliente automáticamente</p>
      </div>
    </div>
  </div>
</div>
```

```css
.quick-wins {
  background: rgba(210, 193, 182, 0.1);
  border-radius: 20px;
  padding: 40px;
  margin: 40px 0;
}

.wins-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 24px;
}

.win-card {
  display: flex;
  gap: 20px;
  background: #FFFFFF;
  border: 2px solid #D2C1B6;
  border-radius: 16px;
  padding: 24px;
  transition: all 0.3s ease;
}

.win-card:hover {
  border-color: #C67A52;
  transform: translateX(8px);
  box-shadow: 0 8px 24px rgba(198, 122, 82, 0.15);
}

.win-card .rank {
  font-size: 2.5rem;
  font-weight: 700;
  color: #C67A52;
  min-width: 60px;
}

.win-card .content h4 {
  color: #1B3C53;
  font-size: 1.25rem;
  margin-bottom: 12px;
}

.win-card .stats {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 12px;
}

.win-card .stat {
  font-size: 0.875rem;
  color: #456882;
}

.win-card .stat strong {
  color: #C67A52;
}

.win-card .how {
  font-size: 0.875rem;
  color: #456882;
  font-style: italic;
}
```

---

#### Sección 5: CTA Final (Lead Capture)

```html
<div class="cta-final">
  <h3>¿Quieres implementar esto en tu empresa?</h3>
  <p class="value-prop">
    Te envío un informe PDF detallado con tu plan de automatización personalizado +
    30 min de auditoría gratis para validar estos números.
  </p>

  <form class="lead-form" id="lead-capture-form">
    <div class="form-row">
      <input
        type="text"
        name="nombre"
        placeholder="Tu nombre"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email empresarial"
        required
      />
    </div>

    <div class="form-row">
      <input
        type="tel"
        name="telefono"
        placeholder="Teléfono (opcional)"
      />
      <input
        type="text"
        name="empresa"
        placeholder="Nombre de tu empresa"
        required
      />
    </div>

    <label class="checkbox-consent">
      <input type="checkbox" name="consent" required />
      <span>
        Acepto recibir el informe y ser contactado por ModulorIA para una auditoría gratuita.
        <a href="/privacidad">Política de privacidad</a>
      </span>
    </label>

    <button type="submit" class="btn-primary btn-large">
      📩 Enviarme informe PDF + agendar auditoría gratuita
    </button>
  </form>

  <div class="trust-signals">
    <div class="signal">
      <span class="icon">✅</span>
      <span class="text">Sin compromiso</span>
    </div>
    <div class="signal">
      <span class="icon">🔒</span>
      <span class="text">Tus datos 100% privados</span>
    </div>
    <div class="signal">
      <span class="icon">⚡</span>
      <span class="text">Respuesta en 24 horas</span>
    </div>
  </div>
</div>
```

```css
.cta-final {
  background: linear-gradient(135deg, #1B3C53 0%, #234C6A 100%);
  border-radius: 24px;
  padding: 60px 40px;
  text-align: center;
  color: #FFFFFF;
  margin-top: 60px;
}

.cta-final h3 {
  font-size: 2rem;
  color: #FFFFFF;
  margin-bottom: 16px;
}

.cta-final .value-prop {
  font-size: 1.125rem;
  color: #D2C1B6;
  max-width: 600px;
  margin: 0 auto 40px;
  line-height: 1.6;
}

.lead-form {
  max-width: 600px;
  margin: 0 auto;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 16px;
}

.lead-form input[type="text"],
.lead-form input[type="email"],
.lead-form input[type="tel"] {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 16px 20px;
  color: #FFFFFF;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.lead-form input::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

.lead-form input:focus {
  outline: none;
  border-color: #C67A52;
  background: rgba(255, 255, 255, 0.15);
}

.checkbox-consent {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  text-align: left;
  font-size: 0.875rem;
  color: #D2C1B6;
  margin: 24px 0;
}

.checkbox-consent input[type="checkbox"] {
  margin-top: 4px;
  accent-color: #C67A52;
}

.checkbox-consent a {
  color: #C67A52;
  text-decoration: underline;
}

.btn-large {
  width: 100%;
  padding: 20px 40px;
  font-size: 1.125rem;
  margin-top: 24px;
}

.trust-signals {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 32px;
  flex-wrap: wrap;
}

.trust-signals .signal {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.875rem;
  color: #D2C1B6;
}

.trust-signals .icon {
  font-size: 1.25rem;
}

/* Responsive */
@media (max-width: 768px) {
  .form-row {
    grid-template-columns: 1fr;
  }
}
```

---

#### Sección 6: Opción alternativa (sin dejar email)

```html
<div class="alternative-cta">
  <p>¿Prefieres explorar más antes de compartir tu email?</p>
  <div class="button-group">
    <a href="/problemas" class="btn-outline">
      Ver cómo automatizamos cada proceso →
    </a>
    <a href="/precios" class="btn-outline">
      Ver precios transparentes →
    </a>
  </div>
</div>
```

---

## 🧮 LÓGICA DE CÁLCULO (Backend)

### Fórmulas de cálculo:

#### 1. Cálculo base de ahorro por problema:

```javascript
// Data de cada problema (ya en los checkboxes)
const problemas = {
  'email-clasificacion': {
    minutosSemanales: 200,
    dificultadAutomatizacion: 'baja', // baja, media, alta
    precioImplementacion: 3000,
    semanasImplementacion: 1
  },
  'facturas-transcripcion': {
    minutosSemanales: 200,
    dificultadAutomatizacion: 'baja',
    precioImplementacion: 5000,
    semanasImplementacion: 2
  },
  // ... resto de problemas
};

// Cálculo de ahorro anual
function calcularAhorroAnual(minutosSemanales, empleados) {
  const horasSemanales = minutosSemanales / 60;
  const horasAnuales = horasSemanales * 52; // 52 semanas
  const costoHoraPromedio = 24; // €24/hora costo empleado administrativo España

  const ahorroAnual = horasAnuales * costoHoraPromedio * empleados;

  return ahorroAnual;
}

// Ejemplo:
// 200 min/semana = 3.33 horas/semana
// 3.33 horas × 52 semanas = 173 horas/año
// 173 horas × €24/hora = €4.152/año por empleado
// Si tienen 3 empleados que hacen esa tarea = €12.456/año
```

#### 2. Ajuste por tamaño de empresa:

```javascript
function ajustarPorTamano(problemaSeleccionado, empleados) {
  let multiplicador = 1;

  // Arquetipo Carlos (1-3 empleados)
  if (empleados <= 3) {
    multiplicador = 0.8; // Menor volumen
  }

  // Arquetipo Laura (4-20 empleados)
  else if (empleados <= 20) {
    multiplicador = 1.0; // Promedio
  }

  // Arquetipo Javier (20+ empleados)
  else {
    multiplicador = 1.5; // Mayor volumen, más caos
  }

  return problemaSeleccionado.minutosSemanales * multiplicador;
}
```

#### 3. Cálculo de inversión total estimada:

```javascript
function calcularInversionTotal(problemasSeleccionados) {
  let inversionTotal = 0;
  let descuentoPaquete = 0;

  problemasSeleccionados.forEach(problema => {
    inversionTotal += problema.precioImplementacion;
  });

  // Descuento por volumen (3+ automatizaciones)
  if (problemasSeleccionados.length >= 3) {
    descuentoPaquete = inversionTotal * 0.15; // 15% descuento
    inversionTotal = inversionTotal - descuentoPaquete;
  }

  if (problemasSeleccionados.length >= 5) {
    descuentoPaquete = inversionTotal * 0.25; // 25% descuento
    inversionTotal = inversionTotal - descuentoPaquete;
  }

  return {
    inversionTotal,
    descuentoPaquete,
    inversionOriginal: inversionTotal + descuentoPaquete
  };
}
```

#### 4. Cálculo de ROI (payback period):

```javascript
function calcularROI(ahorroAnual, inversionTotal) {
  const ahorroMensual = ahorroAnual / 12;
  const mesesRecuperacion = inversionTotal / ahorroMensual;
  const semanasRecuperacion = (mesesRecuperacion * 4).toFixed(1);

  return {
    meses: mesesRecuperacion.toFixed(1),
    semanas: semanasRecuperacion,
    roi: ((ahorroAnual / inversionTotal) * 100).toFixed(0) + '%'
  };
}
```

#### 5. Identificar Top 3 Quick Wins:

```javascript
function identificarQuickWins(problemasSeleccionados) {
  // Ordenar por ratio ahorro/implementación
  const ordenados = problemasSeleccionados.sort((a, b) => {
    const ratioA = a.ahorroAnual / a.semanasImplementacion;
    const ratioB = b.ahorroAnual / b.semanasImplementacion;
    return ratioB - ratioA;
  });

  return ordenados.slice(0, 3); // Top 3
}
```

---

### Ejemplo de flujo completo:

**Input del usuario:**
- Empleados: 5
- Obras simultáneas: 8
- Facturación: €2M-€5M
- Problemas seleccionados:
  - Email clasificación
  - Facturas OCR
  - Reportes obra
  - WhatsApp caos
  - Control materiales

**Output calculado:**

```javascript
{
  ahorroAnual: 67200, // €67.200/año
  ahorroSemanal: 1292, // €1.292/semana
  horasSemanalesAhorradas: 27.3, // 27.3 horas/semana

  inversionTotal: 18000, // €18.000 (5 automatizaciones)
  inversionOriginal: 22000, // €22.000 (antes descuento)
  descuento: 4000, // €4.000 descuento por paquete

  roi: {
    semanas: 13.9, // ~14 semanas para recuperar inversión
    meses: 3.2,
    roiAnual: '373%' // 373% ROI primer año
  },

  topQuickWins: [
    {
      nombre: 'Clasificación emails',
      ahorro: 4800,
      semanas: 1,
      ratio: 4800 // €4.800 ahorro / 1 semana = mejor ratio
    },
    {
      nombre: 'OCR facturas',
      ahorro: 4800,
      semanas: 2,
      ratio: 2400
    },
    {
      nombre: 'Reportes obra',
      ahorro: 4320,
      semanas: 2,
      ratio: 2160
    }
  ],

  desgloseCategoria: {
    comunicacion: 24000,
    documentacion: 19200,
    control_obra: 14400,
    clientes: 9600,
    administrativo: 0
  }
}
```

---

## 🔗 INTEGRACIÓN BACKEND (N8N Webhook)

### Endpoint N8N:

```
POST https://n8n.moduloria.com/webhook/calculadora-roi
```

### Payload enviado:

```json
{
  "timestamp": "2025-12-04T10:30:00Z",
  "paso1": {
    "empleados": "4-10",
    "obras": 8,
    "facturacion": "2m-5m",
    "tipo_construccion": ["casas", "ampliaciones"]
  },
  "paso2": {
    "problemas_seleccionados": [
      "email-clasificacion",
      "facturas-transcripcion",
      "reportes-progreso",
      "whatsapp-chaos",
      "materiales-tracking"
    ],
    "tiempo_total_minutos": 910,
    "costo_total_anual": 67200
  },
  "paso3": {
    "nombre": "Carlos García",
    "email": "carlos@modularhomes.es",
    "telefono": "+34 600 123 456",
    "empresa": "Modular Homes SL",
    "consent": true
  },
  "calculado": {
    "ahorro_anual": 67200,
    "inversion_total": 18000,
    "roi_semanas": 13.9,
    "quick_wins": [...]
  }
}
```

### Respuesta N8N:

```json
{
  "success": true,
  "pdf_url": "https://moduloria.com/reportes/carlos-garcia-2025-12-04.pdf",
  "calendly_url": "https://calendly.com/moduloria/auditoria-carlos-garcia",
  "message": "Informe enviado a carlos@modularhomes.es. Revisa tu bandeja de entrada."
}
```

---

### Workflow N8N (simplificado):

```
1. Webhook Trigger
   ↓
2. Validar datos
   ↓
3. Calcular métricas (si no vienen calculadas del frontend)
   ↓
4. Generar PDF con template (Puppeteer o PDFMonkey)
   ↓
5. Guardar lead en CRM (Notion/Airtable/Google Sheets)
   ↓
6. Enviar email con PDF adjunto (Gmail/SendGrid)
   ↓
7. Crear link personalizado Calendly
   ↓
8. Enviar WhatsApp de seguimiento (opcional, si dejó teléfono)
   ↓
9. Return response al frontend
```

---

## 📱 VERSIÓN MOBILE

### Consideraciones mobile-first:

1. **Paso 1:** Botones grandes (mín 44×44px), stack vertical
2. **Paso 2:** Checkboxes colapsables por categoría (accordion)
3. **Paso 3:** Dashboard simplificado, scroll vertical
4. **Sidebar preview:** Sticky footer con totales en mobile

### Breakpoints:

```css
/* Mobile: 320px - 767px */
@media (max-width: 767px) {
  .wizard-container {
    padding: 24px 16px;
    border-radius: 16px;
  }

  .button-group {
    flex-direction: column;
  }

  .button-group button {
    width: 100%;
  }

  .bar-item {
    grid-template-columns: 1fr;
    gap: 8px;
  }

  .metrics-grid {
    grid-template-columns: 1fr;
  }
}

/* Tablet: 768px - 1023px */
@media (min-width: 768px) and (max-width: 1023px) {
  .wizard-container {
    padding: 40px 32px;
  }

  .metrics-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop: 1024px+ */
@media (min-width: 1024px) {
  /* Estilos por defecto */
}
```

---

## ⚡ ANIMACIONES Y MICROINTERACCIONES

### 1. Entrada del wizard (fade-in + slide-up):

```css
@keyframes fadeInSlideUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.wizard-container {
  animation: fadeInSlideUp 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}
```

### 2. Transición entre pasos:

```javascript
function nextStep() {
  const currentStep = document.querySelector('.step.active');
  const nextStep = currentStep.nextElementSibling;

  // Fade out current
  currentStep.style.opacity = '0';
  currentStep.style.transform = 'translateX(-40px)';

  setTimeout(() => {
    currentStep.classList.remove('active');
    nextStep.classList.add('active');

    // Fade in next
    nextStep.style.opacity = '1';
    nextStep.style.transform = 'translateX(0)';
  }, 300);
}
```

### 3. Animación de barras en Paso 3:

```javascript
// Cuando aparece el dashboard
const bars = document.querySelectorAll('.bar');
bars.forEach((bar, index) => {
  setTimeout(() => {
    bar.classList.add('animate');
  }, index * 200); // Cascada 200ms entre cada barra
});
```

### 4. Contador animado para números grandes:

```javascript
function animateCounter(element, targetValue, duration = 2000) {
  const startValue = 0;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1);

    // Easing: easeOutQuad
    const easedProgress = 1 - Math.pow(1 - progress, 3);

    const currentValue = Math.floor(startValue + (targetValue - startValue) * easedProgress);
    element.textContent = `€${currentValue.toLocaleString()}`;

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

// Uso:
animateCounter(document.querySelector('.big-number .amount'), 67200);
```

---

## 🎨 VARIANTES DE DISEÑO (A/B Testing futuro)

### Variante A: Wizard clásico (3 pasos secuenciales)
- Descrito arriba ✅

### Variante B: One-page con scroll (alternativa)
- Todo en una sola página
- Scroll a siguiente sección al completar
- Sidebar sticky con preview
- Más rápido pero menos engagement

### Variante C: Conversational UI (chatbot-style)
- Interfaz tipo chat
- Preguntas una por una
- Más personal pero puede ser lento

**Recomendación inicial:** Variante A (Wizard 3 pasos) - mejor balance engagement/conversión.

---

## 📊 MÉTRICAS Y ANALYTICS

### Eventos a trackear (Google Analytics 4 / Plausible):

```javascript
// Paso 1: Inicio wizard
gtag('event', 'wizard_start', {
  event_category: 'Calculator',
  event_label: 'Step 1 Started'
});

// Paso 1 → 2
gtag('event', 'wizard_step_2', {
  event_category: 'Calculator',
  empleados: '4-10',
  obras: 8
});

// Paso 2 → 3
gtag('event', 'wizard_step_3', {
  event_category: 'Calculator',
  problemas_count: 5,
  ahorro_estimado: 67200
});

// Lead capture (conversión)
gtag('event', 'lead_captured', {
  event_category: 'Conversion',
  value: 67200, // Ahorro potencial = valor del lead
  currency: 'EUR'
});

// Abandono
gtag('event', 'wizard_abandon', {
  event_category: 'Calculator',
  last_step: 2
});
```

### Funnels a analizar:

```
Homepage visitors: 1000
  ↓ 15% start wizard
Wizard starts: 150
  ↓ 60% complete Paso 2
Step 2 completes: 90
  ↓ 40% submit email
Leads captured: 36

Conversion rate: 3.6% (homepage → lead)
```

---

## 🔒 SEGURIDAD Y VALIDACIÓN

### Frontend validation:

```javascript
// Email validation
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Phone validation (España)
function validatePhone(phone) {
  const re = /^(\+34|0034|34)?[6789]\d{8}$/;
  return re.test(phone.replace(/\s/g, ''));
}

// Prevent spam (honeypot field)
<input type="text" name="website" style="display:none" tabindex="-1" autocomplete="off" />

// Si "website" tiene valor = bot
if (formData.website !== '') {
  return false; // Rechazar silenciosamente
}
```

### Rate limiting:

```javascript
// Máximo 3 cálculos por IP cada 10 minutos
const rateLimit = {
  windowMs: 10 * 60 * 1000, // 10 min
  max: 3
};
```

---

## ✅ CHECKLIST DE IMPLEMENTACIÓN

### Fase 1: Diseño (1-2 días)
- [ ] Crear mockups Figma de los 3 pasos
- [ ] Definir animaciones y transiciones
- [ ] Aprobar diseño con Gaby
- [ ] Crear design tokens CSS

### Fase 2: Frontend (3-5 días)
- [ ] HTML estructura wizard
- [ ] CSS glassmorphism y animaciones
- [ ] JavaScript validación y navegación pasos
- [ ] Lógica cálculo en tiempo real (Paso 2 sidebar)
- [ ] Dashboard Paso 3 con animaciones
- [ ] Formulario lead capture
- [ ] Responsive mobile/tablet
- [ ] Testing cross-browser

### Fase 3: Backend (2-3 días)
- [ ] Crear workflow N8N
- [ ] Webhook endpoint
- [ ] Lógica cálculos servidor (validar frontend)
- [ ] Generación PDF con template
- [ ] Integración CRM (Notion/Airtable)
- [ ] Email automation (SendGrid/Gmail)
- [ ] Link Calendly personalizado
- [ ] Testing end-to-end

### Fase 4: Analytics (1 día)
- [ ] Configurar eventos GA4/Plausible
- [ ] Funnels y dashboards
- [ ] Hotjar/Clarity para heatmaps
- [ ] A/B testing setup (futuro)

### Fase 5: QA y Launch (1 día)
- [ ] Testing funcional completo
- [ ] Testing rendimiento (LCP < 2.5s)
- [ ] Testing accesibilidad (WCAG 2.2 AA)
- [ ] Spell check copywriting
- [ ] Launch 🚀

**Timeline total estimado: 7-12 días de desarrollo**

---

## 📄 TEMPLATE PDF (Informe enviado por email)

### Estructura del PDF:

```
┌─────────────────────────────────────────────┐
│  INFORME DE AHORRO PERSONALIZADO            │
│  Carlos García - Modular Homes SL           │
│  Generado: 4 de diciembre de 2025           │
└─────────────────────────────────────────────┘

RESUMEN EJECUTIVO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Tu empresa está perdiendo €67.200/año
en tareas que IA puede automatizar en 2-4 semanas

→ Ahorro semanal: 27.3 horas
→ Inversión estimada: €18.000
→ ROI: 14 semanas (3.5 meses)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

DESGLOSE POR PROCESO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Clasificación de emails
   Tiempo actual: 200 min/semana
   Ahorro: €4.800/año
   Solución: Bot IA + clasificación automática
   Implementación: 1 semana
   Costo: €3.000

2. OCR de facturas
   Tiempo actual: 200 min/semana
   Ahorro: €4.800/año
   Solución: Google Vision OCR + N8N
   Implementación: 2 semanas
   Costo: €5.000

[...continúa con los 5 procesos seleccionados...]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PLAN DE IMPLEMENTACIÓN SUGERIDO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Semana 1-2: Quick Win #1 (Emails)
Semana 3-4: Quick Win #2 (Facturas)
Semana 5-6: Quick Win #3 (Reportes)
Semana 7-8: Proceso #4
Semana 9-10: Proceso #5

Total implementación: 10 semanas
Ahorro acumulado año 1: €67.200
Inversión total: €18.000
ROI neto año 1: €49.200

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PRÓXIMOS PASOS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Auditoría gratuita 30 min
   Validamos estos números con tus procesos reales

   → Agendar aquí: [link Calendly personalizado]

2. Propuesta comercial detallada
   Si los números cuadran, te envío propuesta formal
   con cronograma, precios finales, y SLA

3. Implementación
   Empezamos con Quick Win #1 (1 semana)
   Ves resultados reales antes de continuar

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

¿Dudas? Responde este email o llámame:
Nicolás Farchica
+34 XXX XXX XXX
nicolas@moduloria.com

ModulorIA - Automatización IA para construcción modular
www.moduloria.com
```

---

## 🚀 OPTIMIZACIONES FUTURAS (Post-MVP)

### Fase 2 (después de primeros 50 leads):

1. **Machine Learning para predicciones**
   - Entrenar modelo con datos reales de clientes
   - Predicciones más precisas basadas en historial

2. **Comparación con competencia**
   - "Empresas como la tuya ahorran en promedio €72K"
   - Benchmarking por sector/tamaño

3. **Video personalizado**
   - Generar video con Synthesia/D-ID
   - "Hola Carlos, aquí está tu informe..."

4. **Integración CRM visual**
   - Dashboard cliente para ver implementación en tiempo real
   - Portal de cliente con progreso

5. **Calculadora avanzada**
   - Integración con ERP/contabilidad para datos reales
   - Upload Excel con datos de facturación → cálculo automático

---

**Última actualización:** 4 de diciembre de 2025
**Próxima revisión:** Después de primeros 20 leads (para refinar cálculos con datos reales)
**Uso:** Guía técnica completa para desarrollar la calculadora ROI wizard

---

**ANEXOS:**

- `calculadora-formulas.js` - Código completo cálculos (cuando se desarrolle)
- `n8n-workflow-export.json` - Workflow N8N completo (cuando se cree)
- `pdf-template.html` - Template HTML para generación PDF
