# 🎯 LANDING PAGES DE PROBLEMAS - ModulorIA

**Fecha:** 4 de diciembre de 2025
**Tipo:** 25 landing pages individuales (problem-solution-ROI)
**Objetivo:** SEO long-tail + conversión directa desde búsquedas específicas
**Estrategia:** Template reutilizable con datos personalizados por problema

---

## 📋 ÍNDICE

1. [Estrategia General](#estrategia-general)
2. [Template Universal](#template-universal)
3. [Top 5 Quick Wins (Copywriting Completo)](#top-5-quick-wins)
4. [Checklist Implementación](#checklist-implementación)
5. [SEO y Keywords](#seo-y-keywords)

---

## 🎯 ESTRATEGIA GENERAL

### Por qué 25 landing pages individuales:

1. **SEO long-tail** - Capturar búsquedas específicas como "automatizar clasificación emails construcción"
2. **Mensaje ultra-específico** - Visitante siente "esto es EXACTAMENTE mi problema"
3. **Conversión directa** - Sin distracciones, un solo CTA: agendar auditoría
4. **Testing independiente** - A/B testing de copy/diseño sin afectar otras páginas
5. **Autoridad topic cluster** - Hub `/problemas` → 25 spokes (estrategia SEO)

---

### Priorización de desarrollo:

#### **Prioridad 1: Top 5 Quick Wins** (Semana 1)
1. Clasificación de emails (#01)
2. OCR de facturas (#03)
3. Tracking de herramientas (#08)
4. Reportes de obra (#07)
5. Control de materiales (#05)

→ Estos tienen mejor ratio ROI/implementación

#### **Prioridad 2: Problemas grandes** (Semana 2)
6. Certificaciones mensuales (#10)
7. Control de calidad (#14)
8. Caos WhatsApp (#02)
9. Nóminas y horas (#24)
10. Gestión pedidos proveedores (#23)

→ Mayor ahorro total anual

#### **Prioridad 3: Resto** (Semana 3-4)
11-25. Resto de problemas

---

### Estructura URL:

```
moduloria.com/problemas/clasificacion-emails-automatica
moduloria.com/problemas/ocr-facturas-construccion
moduloria.com/problemas/tracking-herramientas-obra
moduloria.com/problemas/reportes-obra-automaticos
moduloria.com/problemas/control-materiales-construccion
...etc
```

**Canonical:** Cada problema tiene su propia página canónica
**Breadcrumbs:** Home → Problemas → [Problema específico]

---

## 📐 TEMPLATE UNIVERSAL (Estructura)

### Secciones del template:

```
┌─────────────────────────────────────────────────────────┐
│  1. HERO - Problema + Dolor (above the fold)           │
├─────────────────────────────────────────────────────────┤
│  2. ANTES/DESPUÉS (contrast pain/gain)                  │
├─────────────────────────────────────────────────────────┤
│  3. ROI CALCULADO (números específicos)                 │
├─────────────────────────────────────────────────────────┤
│  4. CÓMO FUNCIONA (3-4 pasos visuales)                  │
├─────────────────────────────────────────────────────────┤
│  5. CASOS DE USO (3 escenarios reales)                  │
├─────────────────────────────────────────────────────────┤
│  6. TECNOLOGÍA (qué IA usamos, cómo)                    │
├─────────────────────────────────────────────────────────┤
│  7. OBJECIONES (FAQ de 3-5 preguntas)                   │
├─────────────────────────────────────────────────────────┤
│  8. CTA FINAL (auditoría + calculadora)                 │
└─────────────────────────────────────────────────────────┘
```

---

### SECCIÓN 1: HERO

```html
<section class="hero-problema">
  <div class="container">
    <!-- Breadcrumbs -->
    <nav class="breadcrumbs">
      <a href="/">Inicio</a> →
      <a href="/problemas">Problemas</a> →
      <span>{{PROBLEMA_NOMBRE}}</span>
    </nav>

    <!-- Etiqueta categoría -->
    <div class="category-tag">
      <span class="icon">{{ICONO_CATEGORIA}}</span>
      <span class="text">{{CATEGORIA}}</span>
    </div>

    <!-- Headline principal -->
    <h1>{{PROBLEMA_HEADLINE}}</h1>

    <!-- Subheadline (dolor específico) -->
    <p class="subheadline">{{DOLOR_ESPECIFICO}}</p>

    <!-- Métricas de dolor (3 stats) -->
    <div class="pain-metrics">
      <div class="metric">
        <span class="icon">⏱️</span>
        <span class="value">{{TIEMPO_PERDIDO}}</span>
        <span class="label">perdidos/semana</span>
      </div>

      <div class="metric">
        <span class="icon">💸</span>
        <span class="value">€{{COSTO_ANUAL}}</span>
        <span class="label">desperdiciados/año</span>
      </div>

      <div class="metric">
        <span class="icon">😤</span>
        <span class="value">{{FRECUENCIA}}</span>
        <span class="label">veces por {{PERIODO}}</span>
      </div>
    </div>

    <!-- CTA principal -->
    <div class="cta-hero">
      <a href="#calculadora" class="btn-primary btn-large">
        Calcular cuánto ahorras TÚ →
      </a>
      <a href="/auditoria" class="btn-outline">
        Auditoría gratuita 30 min
      </a>
    </div>

    <!-- Trust signal -->
    <p class="trust-signal">
      ✅ Sin compromiso · 🔒 Tus datos privados · ⚡ Respuesta en 24h
    </p>
  </div>
</section>
```

**Variables del template:**

```javascript
{
  PROBLEMA_NOMBRE: "Clasificación de Emails",
  ICONO_CATEGORIA: "📧",
  CATEGORIA: "Comunicación y Coordinación",
  PROBLEMA_HEADLINE: "¿Pierdes 3 horas diarias clasificando emails de proveedores, clientes y subcontratas?",
  DOLOR_ESPECIFICO: "Todos los días lo mismo: 100+ emails sin etiquetar, urgencias perdidas en la bandeja, info clave enterrada entre spam. Mientras tanto, el electricista llama preguntando algo que ya le enviaste hace 2 días.",
  TIEMPO_PERDIDO: "200 min",
  COSTO_ANUAL: "4.800",
  FRECUENCIA: "100+",
  PERIODO: "día"
}
```

---

### SECCIÓN 2: ANTES/DESPUÉS (Contrast)

```html
<section class="antes-despues">
  <div class="container">
    <h2>De caos a orden en {{TIEMPO_IMPLEMENTACION}}</h2>

    <div class="comparison-grid">
      <!-- ANTES (Pain) -->
      <div class="column antes">
        <div class="label">❌ Antes (manual)</div>

        <div class="pain-list">
          <div class="pain-item">
            <span class="icon">😰</span>
            <p>{{DOLOR_1}}</p>
          </div>

          <div class="pain-item">
            <span class="icon">⏰</span>
            <p>{{DOLOR_2}}</p>
          </div>

          <div class="pain-item">
            <span class="icon">💸</span>
            <p>{{DOLOR_3}}</p>
          </div>

          <div class="pain-item">
            <span class="icon">🤦</span>
            <p>{{DOLOR_4}}</p>
          </div>
        </div>
      </div>

      <!-- Arrow -->
      <div class="arrow-divider">
        <div class="arrow">→</div>
        <div class="label">Automatización IA</div>
      </div>

      <!-- DESPUÉS (Gain) -->
      <div class="column despues">
        <div class="label">✅ Después (automatizado)</div>

        <div class="gain-list">
          <div class="gain-item">
            <span class="icon">✨</span>
            <p>{{GANANCIA_1}}</p>
          </div>

          <div class="gain-item">
            <span class="icon">⚡</span>
            <p>{{GANANCIA_2}}</p>
          </div>

          <div class="gain-item">
            <span class="icon">💰</span>
            <p>{{GANANCIA_3}}</p>
          </div>

          <div class="gain-item">
            <span class="icon">🎯</span>
            <p>{{GANANCIA_4}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

```css
.comparison-grid {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 40px;
  margin-top: 40px;
}

.column.antes {
  background: rgba(198, 122, 82, 0.05);
  border: 2px solid rgba(198, 122, 82, 0.3);
  border-radius: 16px;
  padding: 32px;
}

.column.despues {
  background: rgba(35, 76, 106, 0.05);
  border: 2px solid rgba(35, 76, 106, 0.3);
  border-radius: 16px;
  padding: 32px;
}

.arrow-divider {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.arrow-divider .arrow {
  font-size: 3rem;
  color: #C67A52;
  font-weight: 700;
}

.pain-item, .gain-item {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  margin-bottom: 16px;
}

.pain-item .icon, .gain-item .icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}
```

---

### SECCIÓN 3: ROI CALCULADO

```html
<section class="roi-calculado">
  <div class="container">
    <h2>Los números no mienten</h2>
    <p class="subtitle">Esto es lo que ahorras automatizando {{PROBLEMA_NOMBRE}}</p>

    <div class="roi-cards">
      <!-- Card 1: Inversión -->
      <div class="roi-card">
        <div class="icon">💵</div>
        <div class="label">Pagas una vez</div>
        <div class="value">€{{PRECIO_IMPLEMENTACION}}</div>
        <div class="detail">Implementación completa</div>
      </div>

      <!-- Card 2: Ahorro -->
      <div class="roi-card highlight">
        <div class="icon">💰</div>
        <div class="label">Ahorras cada año</div>
        <div class="value">€{{AHORRO_ANUAL}}</div>
        <div class="detail">{{HORAS_SEMANA}}h/semana recuperadas</div>
      </div>

      <!-- Card 3: ROI -->
      <div class="roi-card">
        <div class="icon">📈</div>
        <div class="label">Recuperas inversión</div>
        <div class="value">{{SEMANAS_ROI}} semanas</div>
        <div class="detail">{{ROI_PORCENTAJE}}% ROI primer año</div>
      </div>
    </div>

    <!-- Breakdown detallado -->
    <div class="breakdown-detalle">
      <h3>Desglose del ahorro</h3>

      <table class="breakdown-table">
        <thead>
          <tr>
            <th>Concepto</th>
            <th>Tiempo actual</th>
            <th>Tiempo automatizado</th>
            <th>Ahorro</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{CONCEPTO_1}}</td>
            <td>{{TIEMPO_ANTES_1}}</td>
            <td>{{TIEMPO_DESPUES_1}}</td>
            <td class="highlight">{{AHORRO_1}}</td>
          </tr>
          <tr>
            <td>{{CONCEPTO_2}}</td>
            <td>{{TIEMPO_ANTES_2}}</td>
            <td>{{TIEMPO_DESPUES_2}}</td>
            <td class="highlight">{{AHORRO_2}}</td>
          </tr>
          <tr>
            <td>{{CONCEPTO_3}}</td>
            <td>{{TIEMPO_ANTES_3}}</td>
            <td>{{TIEMPO_DESPUES_3}}</td>
            <td class="highlight">{{AHORRO_3}}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th>TOTAL</th>
            <th>{{TOTAL_ANTES}}</th>
            <th>{{TOTAL_DESPUES}}</th>
            <th class="highlight-total">{{TOTAL_AHORRO}}</th>
          </tr>
        </tfoot>
      </table>
    </div>

    <!-- CTA calculadora -->
    <div class="cta-inline">
      <p>Estos números son promedios. <strong>Calcula tu ahorro específico:</strong></p>
      <a href="#calculadora" class="btn-primary">
        Calculadora ROI personalizada →
      </a>
    </div>
  </div>
</section>
```

---

### SECCIÓN 4: CÓMO FUNCIONA (Visual Steps)

```html
<section class="como-funciona">
  <div class="container">
    <h2>Cómo automatizamos {{PROBLEMA_NOMBRE}}</h2>
    <p class="subtitle">{{PASOS_COUNT}} pasos simples. Sin código. Sin complicaciones.</p>

    <div class="steps-visual">
      <!-- Paso 1 -->
      <div class="step">
        <div class="step-number">1</div>
        <div class="step-content">
          <div class="step-icon">{{PASO_1_ICON}}</div>
          <h3>{{PASO_1_TITULO}}</h3>
          <p>{{PASO_1_DESCRIPCION}}</p>
          <div class="tech-tag">
            <span class="icon">⚙️</span>
            <span>{{PASO_1_TECNOLOGIA}}</span>
          </div>
        </div>
        <div class="step-visual">
          <!-- Imagen/ilustración del paso -->
          <img src="/images/proceso/{{PROBLEMA_ID}}-paso-1.svg" alt="{{PASO_1_TITULO}}" />
        </div>
      </div>

      <!-- Arrow down -->
      <div class="step-arrow">↓</div>

      <!-- Paso 2 -->
      <div class="step">
        <div class="step-number">2</div>
        <div class="step-content">
          <div class="step-icon">{{PASO_2_ICON}}</div>
          <h3>{{PASO_2_TITULO}}</h3>
          <p>{{PASO_2_DESCRIPCION}}</p>
          <div class="tech-tag">
            <span class="icon">⚙️</span>
            <span>{{PASO_2_TECNOLOGIA}}</span>
          </div>
        </div>
        <div class="step-visual">
          <img src="/images/proceso/{{PROBLEMA_ID}}-paso-2.svg" alt="{{PASO_2_TITULO}}" />
        </div>
      </div>

      <div class="step-arrow">↓</div>

      <!-- Paso 3 -->
      <div class="step">
        <div class="step-number">3</div>
        <div class="step-content">
          <div class="step-icon">{{PASO_3_ICON}}</div>
          <h3>{{PASO_3_TITULO}}</h3>
          <p>{{PASO_3_DESCRIPCION}}</p>
          <div class="tech-tag">
            <span class="icon">⚙️</span>
            <span>{{PASO_3_TECNOLOGIA}}</span>
          </div>
        </div>
        <div class="step-visual">
          <img src="/images/proceso/{{PROBLEMA_ID}}-paso-3.svg" alt="{{PASO_3_TITULO}}" />
        </div>
      </div>

      <!-- Si hay paso 4 (opcional) -->
      {{#if PASO_4_TITULO}}
      <div class="step-arrow">↓</div>

      <div class="step">
        <div class="step-number">4</div>
        <div class="step-content">
          <div class="step-icon">{{PASO_4_ICON}}</div>
          <h3>{{PASO_4_TITULO}}</h3>
          <p>{{PASO_4_DESCRIPCION}}</p>
          <div class="tech-tag">
            <span class="icon">⚙️</span>
            <span>{{PASO_4_TECNOLOGIA}}</span>
          </div>
        </div>
        <div class="step-visual">
          <img src="/images/proceso/{{PROBLEMA_ID}}-paso-4.svg" alt="{{PASO_4_TITULO}}" />
        </div>
      </div>
      {{/if}}
    </div>

    <!-- Resultado final -->
    <div class="resultado-final">
      <div class="icon">🎉</div>
      <h3>Resultado</h3>
      <p>{{RESULTADO_FINAL}}</p>
    </div>
  </div>
</section>
```

```css
.steps-visual {
  margin-top: 60px;
}

.step {
  display: grid;
  grid-template-columns: 80px 1fr 1fr;
  gap: 32px;
  align-items: center;
  margin-bottom: 40px;
}

.step-number {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #234C6A 0%, #C67A52 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 700;
  color: #FFFFFF;
  box-shadow: 0 8px 24px rgba(35, 76, 106, 0.3);
}

.step-content h3 {
  color: #1B3C53;
  font-size: 1.5rem;
  margin: 12px 0 8px;
}

.step-icon {
  font-size: 2.5rem;
}

.tech-tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(35, 76, 106, 0.1);
  border: 1px solid #234C6A;
  border-radius: 20px;
  padding: 6px 14px;
  font-size: 0.875rem;
  color: #234C6A;
  margin-top: 12px;
}

.step-visual img {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(27, 60, 83, 0.1);
}

.step-arrow {
  text-align: center;
  font-size: 3rem;
  color: #C67A52;
  margin: -20px 0;
}
```

---

### SECCIÓN 5: CASOS DE USO (3 Escenarios)

```html
<section class="casos-uso">
  <div class="container">
    <h2>Casos de uso reales</h2>
    <p class="subtitle">Así lo usan empresas de construcción modular como la tuya</p>

    <div class="casos-grid">
      <!-- Caso 1 -->
      <div class="caso-card">
        <div class="caso-header">
          <div class="avatar">{{CASO_1_AVATAR}}</div>
          <div class="info">
            <div class="nombre">{{CASO_1_PERFIL}}</div>
            <div class="empresa">{{CASO_1_EMPRESA_TIPO}}</div>
          </div>
        </div>
        <div class="caso-body">
          <h4>{{CASO_1_TITULO}}</h4>
          <p class="problema-especifico">{{CASO_1_PROBLEMA}}</p>
          <div class="solucion">
            <strong>Solución:</strong> {{CASO_1_SOLUCION}}
          </div>
          <div class="resultado">
            <strong>Resultado:</strong> {{CASO_1_RESULTADO}}
          </div>
        </div>
      </div>

      <!-- Caso 2 -->
      <div class="caso-card">
        <div class="caso-header">
          <div class="avatar">{{CASO_2_AVATAR}}</div>
          <div class="info">
            <div class="nombre">{{CASO_2_PERFIL}}</div>
            <div class="empresa">{{CASO_2_EMPRESA_TIPO}}</div>
          </div>
        </div>
        <div class="caso-body">
          <h4>{{CASO_2_TITULO}}</h4>
          <p class="problema-especifico">{{CASO_2_PROBLEMA}}</p>
          <div class="solucion">
            <strong>Solución:</strong> {{CASO_2_SOLUCION}}
          </div>
          <div class="resultado">
            <strong>Resultado:</strong> {{CASO_2_RESULTADO}}
          </div>
        </div>
      </div>

      <!-- Caso 3 -->
      <div class="caso-card">
        <div class="caso-header">
          <div class="avatar">{{CASO_3_AVATAR}}</div>
          <div class="info">
            <div class="nombre">{{CASO_3_PERFIL}}</div>
            <div class="empresa">{{CASO_3_EMPRESA_TIPO}}</div>
          </div>
        </div>
        <div class="caso-body">
          <h4>{{CASO_3_TITULO}}</h4>
          <p class="problema-especifico">{{CASO_3_PROBLEMA}}</p>
          <div class="solucion">
            <strong>Solución:</strong> {{CASO_3_SOLUCION}}
          </div>
          <div class="resultado">
            <strong>Resultado:</strong> {{CASO_3_RESULTADO}}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

**Nota:** Hasta tener casos reales, usar **perfiles arquetípicos** (Carlos, Laura, Javier) con escenarios hipotéticos pero realistas. NO inventar testimonios ni empresas falsas.

---

### SECCIÓN 6: TECNOLOGÍA

```html
<section class="tecnologia">
  <div class="container">
    <h2>Tecnología que usamos</h2>
    <p class="subtitle">{{STACK_COUNT}} herramientas trabajando juntas para automatizar {{PROBLEMA_NOMBRE}}</p>

    <div class="tech-stack">
      <!-- Tech 1 -->
      <div class="tech-item">
        <div class="tech-icon">
          <img src="/images/tech/{{TECH_1_LOGO}}.svg" alt="{{TECH_1_NOMBRE}}" />
        </div>
        <div class="tech-content">
          <h4>{{TECH_1_NOMBRE}}</h4>
          <p class="role">{{TECH_1_ROL}}</p>
          <p class="desc">{{TECH_1_DESCRIPCION}}</p>
        </div>
      </div>

      <!-- Tech 2 -->
      <div class="tech-item">
        <div class="tech-icon">
          <img src="/images/tech/{{TECH_2_LOGO}}.svg" alt="{{TECH_2_NOMBRE}}" />
        </div>
        <div class="tech-content">
          <h4>{{TECH_2_NOMBRE}}</h4>
          <p class="role">{{TECH_2_ROL}}</p>
          <p class="desc">{{TECH_2_DESCRIPCION}}</p>
        </div>
      </div>

      <!-- Tech 3 (si aplica) -->
      {{#if TECH_3_NOMBRE}}
      <div class="tech-item">
        <div class="tech-icon">
          <img src="/images/tech/{{TECH_3_LOGO}}.svg" alt="{{TECH_3_NOMBRE}}" />
        </div>
        <div class="tech-content">
          <h4>{{TECH_3_NOMBRE}}</h4>
          <p class="role">{{TECH_3_ROL}}</p>
          <p class="desc">{{TECH_3_DESCRIPCION}}</p>
        </div>
      </div>
      {{/if}}
    </div>

    <!-- Por qué estas herramientas -->
    <div class="tech-why">
      <h3>¿Por qué usamos estas herramientas?</h3>
      <ul class="reasons">
        <li>{{RAZON_1}}</li>
        <li>{{RAZON_2}}</li>
        <li>{{RAZON_3}}</li>
      </ul>
    </div>
  </div>
</section>
```

---

### SECCIÓN 7: FAQ (Objeciones)

```html
<section class="faq">
  <div class="container">
    <h2>Preguntas frecuentes</h2>

    <div class="faq-list">
      <!-- FAQ 1 -->
      <details class="faq-item">
        <summary>{{PREGUNTA_1}}</summary>
        <div class="answer">
          <p>{{RESPUESTA_1}}</p>
        </div>
      </details>

      <!-- FAQ 2 -->
      <details class="faq-item">
        <summary>{{PREGUNTA_2}}</summary>
        <div class="answer">
          <p>{{RESPUESTA_2}}</p>
        </div>
      </details>

      <!-- FAQ 3 -->
      <details class="faq-item">
        <summary>{{PREGUNTA_3}}</summary>
        <div class="answer">
          <p>{{RESPUESTA_3}}</p>
        </div>
      </details>

      <!-- FAQ 4 (opcional) -->
      {{#if PREGUNTA_4}}
      <details class="faq-item">
        <summary>{{PREGUNTA_4}}</summary>
        <div class="answer">
          <p>{{RESPUESTA_4}}</p>
        </div>
      </details>
      {{/if}}

      <!-- FAQ 5 (opcional) -->
      {{#if PREGUNTA_5}}
      <details class="faq-item">
        <summary>{{PREGUNTA_5}}</summary>
        <div class="answer">
          <p>{{RESPUESTA_5}}</p>
        </div>
      </details>
      {{/if}}
    </div>
  </div>
</section>
```

```css
.faq-item {
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(35, 76, 106, 0.2);
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.faq-item:hover {
  border-color: #234C6A;
  background: rgba(255, 255, 255, 0.1);
}

.faq-item summary {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1B3C53;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.faq-item summary::after {
  content: '+';
  font-size: 1.5rem;
  color: #C67A52;
  transition: transform 0.3s ease;
}

.faq-item[open] summary::after {
  content: '−';
  transform: rotate(180deg);
}

.faq-item .answer {
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid rgba(35, 76, 106, 0.2);
  color: #456882;
  line-height: 1.7;
}
```

---

### SECCIÓN 8: CTA FINAL

```html
<section class="cta-final-problema">
  <div class="container">
    <div class="cta-content">
      <h2>¿Listo para dejar de perder {{TIEMPO_PERDIDO}} cada semana?</h2>
      <p class="value-prop">
        Te mostramos exactamente cómo automatizar {{PROBLEMA_NOMBRE}} en tu empresa.
        <strong>Sin compromiso. Sin costo.</strong>
      </p>

      <div class="cta-options">
        <!-- Opción 1: Calculadora -->
        <div class="cta-option primary">
          <div class="icon">🧮</div>
          <h3>Calcula tu ahorro</h3>
          <p>Introduce tus datos y ve cuánto ahorras específicamente TÚ</p>
          <a href="/calculadora?problema={{PROBLEMA_ID}}" class="btn-primary btn-large">
            Calculadora ROI personalizada →
          </a>
        </div>

        <!-- Opción 2: Auditoría -->
        <div class="cta-option secondary">
          <div class="icon">📞</div>
          <h3>Auditoría gratuita 30 min</h3>
          <p>Hablamos de tu caso específico y validamos estos números contigo</p>
          <a href="/auditoria" class="btn-outline btn-large">
            Agendar auditoría gratis →
          </a>
        </div>
      </div>

      <!-- Trust signals -->
      <div class="trust-signals">
        <div class="signal">
          <span class="icon">⚡</span>
          <span class="text">Implementación en {{TIEMPO_IMPLEMENTACION}}</span>
        </div>
        <div class="signal">
          <span class="icon">💰</span>
          <span class="text">ROI en {{SEMANAS_ROI}} semanas</span>
        </div>
        <div class="signal">
          <span class="icon">✅</span>
          <span class="text">Sin riesgo, sin compromiso</span>
        </div>
      </div>
    </div>
  </div>
</section>
```

---

## 🏆 TOP 5 QUICK WINS (Copywriting Completo)

### Problema #01: Clasificación de Emails

**URL:** `/problemas/clasificacion-emails-automatica`

**Variables:**

```javascript
{
  PROBLEMA_ID: "clasificacion-emails",
  PROBLEMA_NOMBRE: "Clasificación de Emails",
  CATEGORIA: "Comunicación y Coordinación",
  ICONO_CATEGORIA: "📧",

  // HERO
  PROBLEMA_HEADLINE: "¿Pierdes 3 horas diarias clasificando emails de proveedores, clientes y subcontratas?",
  DOLOR_ESPECIFICO: "Todos los días lo mismo: 100+ emails sin etiquetar, urgencias perdidas en la bandeja, información clave enterrada entre spam. Mientras tanto, el electricista llama preguntando algo que ya le enviaste hace 2 días.",
  TIEMPO_PERDIDO: "200 min",
  COSTO_ANUAL: "4.800",
  FRECUENCIA: "100+",
  PERIODO: "día",

  // ANTES/DESPUÉS
  TIEMPO_IMPLEMENTACION: "1 semana",
  DOLOR_1: "Abres Gmail a las 8:00. 127 emails nuevos. Suspiro profundo.",
  DOLOR_2: "30 minutos buscando 'ese email del proveedor de ventanas' entre 500 emails.",
  DOLOR_3: "Cliente dice 'no recibí tu email'. Lo reenviaste 3 veces. Estaba en spam.",
  DOLOR_4: "Email urgente de obra perdido entre newsletters y spam. Se enteran 2 días después.",

  GANANCIA_1: "IA lee cada email en 1 segundo. Clasifica por: Urgente/Normal/Bajo. Proveedor/Cliente/Subcontrata/Interno.",
  GANANCIA_2: "Email de proveedor → etiqueta 'Proveedores'. Email de cliente → etiqueta 'Clientes' + notificación si urgente.",
  GANANCIA_3: "Bandeja organizada automáticamente. Urgencias en rojo arriba. Spam filtrado. Todo etiquetado.",
  GANANCIA_4: "Buscas 'proveedor ventanas' → todos sus emails en 2 segundos. Con historial completo.",

  // ROI
  PRECIO_IMPLEMENTACION: "3.000",
  AHORRO_ANUAL: "4.800",
  HORAS_SEMANA: "3.3",
  SEMANAS_ROI: "7",
  ROI_PORCENTAJE: "160",

  // Breakdown detallado
  CONCEPTO_1: "Leer y clasificar emails diarios",
  TIEMPO_ANTES_1: "120 min/semana",
  TIEMPO_DESPUES_1: "10 min/semana",
  AHORRO_1: "110 min/semana",

  CONCEPTO_2: "Buscar emails antiguos ('dónde está ese mail...')",
  TIEMPO_ANTES_2: "50 min/semana",
  TIEMPO_DESPUES_2: "5 min/semana",
  AHORRO_2: "45 min/semana",

  CONCEPTO_3: "Reenviar/responder consultas ya contestadas",
  TIEMPO_ANTES_3: "30 min/semana",
  TIEMPO_DESPUES_3: "5 min/semana",
  AHORRO_3: "25 min/semana",

  TOTAL_ANTES: "200 min/semana",
  TOTAL_DESPUES: "20 min/semana",
  TOTAL_AHORRO: "180 min/semana = €4.800/año",

  // CÓMO FUNCIONA
  PASOS_COUNT: 3,

  PASO_1_ICON: "📨",
  PASO_1_TITULO: "Email llega a tu bandeja",
  PASO_1_DESCRIPCION: "Nuevo email de 'Ventanas ModulPro SL' con asunto: 'Confirmación pedido 20 ventanas obra C/ Mayor'",
  PASO_1_TECNOLOGIA: "Gmail API",

  PASO_2_ICON: "🤖",
  PASO_2_TITULO: "IA analiza el email",
  PASO_2_DESCRIPCION: "GPT-4 lee el email completo en 1 segundo. Identifica: Remitente = Proveedor, Asunto = Confirmación pedido, Urgencia = Normal, Obra = C/ Mayor",
  PASO_2_TECNOLOGIA: "GPT-4 + N8N",

  PASO_3_ICON: "🏷️",
  PASO_3_TITULO: "Se etiqueta y clasifica automáticamente",
  PASO_3_DESCRIPCION: "Email recibe etiquetas: 'Proveedores', 'Pedidos', 'Obra-Mayor'. Se archiva en carpeta correcta. Si fuera urgente, envía notificación a Slack/WhatsApp.",
  PASO_3_TECNOLOGIA: "N8N + Gmail",

  RESULTADO_FINAL: "Bandeja organizada. Urgencias priorizadas. Spam filtrado. Búsquedas instantáneas. Cero tiempo perdido clasificando manualmente.",

  // CASOS DE USO
  CASO_1_AVATAR: "👨‍💼",
  CASO_1_PERFIL: "Carlos - Emprendedor",
  CASO_1_EMPRESA_TIPO: "5 empleados, 8 obras/año",
  CASO_1_TITULO: "Recuperó 15 horas/semana de gestión de emails",
  CASO_1_PROBLEMA: "Carlos recibía 120+ emails diarios. Pasaba 3 horas clasificándolos. Perdía urgencias entre spam.",
  CASO_1_SOLUCION: "Bot IA clasifica todos los emails automáticamente. Urgencias notificadas a WhatsApp. Spam filtrado.",
  CASO_1_RESULTADO: "Ahorra 180 min/semana. Ya no pierde urgencias. Bandeja limpia y organizada. ROI en 6 semanas.",

  CASO_2_AVATAR: "👩‍💼",
  CASO_2_PERFIL: "Laura - Gerente PYME",
  CASO_2_EMPRESA_TIPO: "15 empleados, 25 obras/año",
  CASO_2_TITULO: "Emails de 5 personas organizados centralizadamente",
  CASO_2_PROBLEMA: "5 personas con emails desordenados. Info duplicada. Nadie sabía quién había respondido qué.",
  CASO_2_SOLUCION: "Bandeja compartida con clasificación IA. Emails asignados automáticamente al responsable correcto.",
  CASO_2_RESULTADO: "Equipo ahorra 12 horas/semana en total. Cero duplicación. Historial centralizado.",

  CASO_3_AVATAR: "👨‍🔧",
  CASO_3_PERFIL: "Javier - Director Corporativo",
  CASO_3_EMPRESA_TIPO: "80 empleados, 150 obras/año",
  CASO_3_TITULO: "300+ emails diarios organizados por obra y categoría",
  CASO_3_PROBLEMA: "300 emails diarios entre 12 obras activas. Imposible clasificar manualmente. Caos total.",
  CASO_3_SOLUCION: "IA clasifica por obra, categoría (proveedor/cliente/subcontrata), y urgencia. Auto-asignación a PM responsable.",
  CASO_3_RESULTADO: "Ahorra 40 horas/semana (4 personas × 10h cada una). ROI en 3 semanas.",

  // TECNOLOGÍA
  STACK_COUNT: 3,

  TECH_1_LOGO: "gmail",
  TECH_1_NOMBRE: "Gmail API",
  TECH_1_ROL: "Conexión con bandeja de entrada",
  TECH_1_DESCRIPCION: "Lee emails entrantes en tiempo real. Aplica etiquetas. Mueve a carpetas. Envía notificaciones.",

  TECH_2_LOGO: "openai",
  TECH_2_NOMBRE: "GPT-4 (OpenAI)",
  TECH_2_ROL: "Motor de clasificación IA",
  TECH_2_DESCRIPCION: "Analiza contenido del email, identifica remitente, urgencia, categoría, obra. Precisión 95%+.",

  TECH_3_LOGO: "n8n",
  TECH_3_NOMBRE: "N8N",
  TECH_3_ROL: "Orquestación del flujo",
  TECH_3_DESCRIPCION: "Conecta Gmail → GPT-4 → clasificación. Sin código. 100% customizable.",

  RAZON_1: "Gmail API es nativa de Google - 100% compatible, segura, sin permisos raros",
  RAZON_2: "GPT-4 entiende contexto humano ('urgente', 'confirmar', 'problema') mejor que reglas fijas",
  RAZON_3: "N8N es open-source y flexible - puedes ajustar las reglas cuando quieras sin depender de nosotros",

  // FAQ
  PREGUNTA_1: "¿Funciona con cualquier proveedor de email (Gmail, Outlook, etc.)?",
  RESPUESTA_1: "Sí. Funciona con Gmail (Google Workspace), Outlook (Microsoft 365), y cualquier email con IMAP/API. La implementación más común es Gmail por su API robusta.",

  PREGUNTA_2: "¿La IA lee contenido privado de mis emails?",
  RESPUESTA_2: "Sí, GPT-4 lee el contenido para clasificar. PERO: 1) Solo se usa para clasificación, no se almacena. 2) Cumple GDPR. 3) Puedes excluir emails sensibles (ej: 'Legal', 'RRHH'). 4) OpenAI no entrena modelos con tus datos (política API). Si prefieres, podemos usar modelo local (Llama) sin enviar nada a la nube.",

  PREGUNTA_3: "¿Qué pasa si clasifica mal un email importante?",
  RESPUESTA_3: "La precisión es 95%+, pero si hay error: 1) Puedes corregir la etiqueta manualmente (1 clic). 2) El sistema aprende de correcciones. 3) Emails 'Urgentes' siempre van arriba, así que aunque se equivoque de categoría, no se pierden. 4) Tienes reglas de fallback ('si duda, marca como revisar').",

  PREGUNTA_4: "¿Cuánto tiempo toma implementarlo?",
  RESPUESTA_4: "1 semana. Día 1-2: Configuración Gmail API + N8N. Día 3-4: Entrenamiento GPT-4 con tus categorías. Día 5: Testing con emails reales. Día 6-7: Ajustes finales. Semana 2: Ya está corriendo 100% automatizado.",

  PREGUNTA_5: "¿Necesito cambiar mi forma de trabajar?",
  RESPUESTA_5: "No. Sigues usando Gmail/Outlook exactamente igual. La diferencia: cuando abres tu bandeja, ya está todo organizado. No tocas nada de tu workflow actual."
}
```

---

### Problema #03: OCR de Facturas

**URL:** `/problemas/ocr-facturas-construccion`

**Variables:**

```javascript
{
  PROBLEMA_ID: "ocr-facturas",
  PROBLEMA_NOMBRE: "OCR de Facturas",
  CATEGORIA: "Documentación y Papeleos",
  ICONO_CATEGORIA: "📄",

  // HERO
  PROBLEMA_HEADLINE: "¿Transcribes 30 facturas por semana a mano de PDF a Excel?",
  DOLOR_ESPECIFICO: "Abrir PDF. Copiar: Proveedor, Fecha, Importe, Concepto. Pegar en Excel. Repetir. 30 veces. 5 minutos por factura. 150 minutos a la semana haciendo copy-paste como un robot.",
  TIEMPO_PERDIDO: "200 min",
  COSTO_ANUAL: "4.800",
  FRECUENCIA: "30",
  PERIODO: "semana",

  // ANTES/DESPUÉS
  TIEMPO_IMPLEMENTACION: "2 semanas",
  DOLOR_1: "Descargar factura PDF del email → abrir → leer → copiar dato por dato → pegar en Excel → guardar. 5 min por factura.",
  DOLOR_2: "Errores de transcripción: '1.500' lo escribes '1.050'. Cliente reclama. Tienes que revisar TODO de nuevo.",
  DOLOR_3: "30 facturas acumuladas. Viernes 17:00. Tiene que estar registrado antes del lunes. Adiós fin de semana.",
  DOLOR_4: "Proveedor dice 'no me pagaste'. Tú dices 'sí te pagué'. Buscar factura en 500 PDFs. 20 minutos.",

  GANANCIA_1: "Foto de factura (móvil) → se sube automáticamente → OCR extrae TODOS los datos en 10 segundos.",
  GANANCIA_2: "Datos en Excel/ERP automáticamente: Proveedor, Fecha, Importe, Concepto, Obra, IVA. Sin errores.",
  GANANCIA_3: "30 facturas procesadas en 5 minutos (vs 150 minutos manual). Precisión 98%+. Cero errores de transcripción.",
  GANANCIA_4: "Buscador: 'Facturas proveedor Ventanas ModulPro' → todas las facturas en 2 segundos. PDF + datos + obra.",

  // ROI
  PRECIO_IMPLEMENTACION: "5.000",
  AHORRO_ANUAL: "4.800",
  HORAS_SEMANA: "3.3",
  SEMANAS_ROI: "10",
  ROI_PORCENTAJE: "96",

  // Breakdown
  CONCEPTO_1: "Transcribir datos de facturas manualmente",
  TIEMPO_ANTES_1: "150 min/semana (30 facturas × 5 min)",
  TIEMPO_DESPUES_1: "5 min/semana (supervisión rápida)",
  AHORRO_1: "145 min/semana",

  CONCEPTO_2: "Corregir errores de transcripción",
  TIEMPO_ANTES_2: "30 min/semana",
  TIEMPO_DESPUES_2: "0 min/semana",
  AHORRO_2: "30 min/semana",

  CONCEPTO_3: "Buscar facturas antiguas en PDFs",
  TIEMPO_ANTES_3: "20 min/semana",
  TIEMPO_DESPUES_3: "2 min/semana",
  AHORRO_3: "18 min/semana",

  TOTAL_ANTES: "200 min/semana",
  TOTAL_DESPUES: "7 min/semana",
  TOTAL_AHORRO: "193 min/semana = €4.800/año",

  // CÓMO FUNCIONA
  PASOS_COUNT: 4,

  PASO_1_ICON: "📸",
  PASO_1_TITULO: "Tomas foto o envías PDF",
  PASO_1_DESCRIPCION: "Opción A: Foto con móvil a factura en papel. Opción B: Forward email con PDF adjunto. Opción C: Subes PDF a carpeta Dropbox/Drive.",
  PASO_1_TECNOLOGIA: "WhatsApp / Email / Dropbox",

  PASO_2_ICON: "🔍",
  PASO_2_TITULO: "OCR extrae todos los datos",
  PASO_2_DESCRIPCION: "Google Vision OCR lee la factura completa. Identifica: Proveedor, NIF, Fecha, Número factura, Importe total, IVA, Conceptos, Forma de pago. Precisión 98%+.",
  PASO_2_TECNOLOGIA: "Google Vision OCR",

  PASO_3_ICON: "🤖",
  PASO_3_TITULO: "IA estructura los datos",
  PASO_3_DESCRIPCION: "GPT-4 toma el texto del OCR y lo estructura en formato Excel: Columna A = Proveedor, B = Fecha, C = Importe... Identifica también a qué obra pertenece (si está en el concepto).",
  PASO_3_TECNOLOGIA: "GPT-4",

  PASO_4_ICON: "💾",
  PASO_4_TITULO: "Se registra automáticamente",
  PASO_4_DESCRIPCION: "Datos se insertan en Excel / Google Sheets / ERP (Holded, Sage, A3, lo que uses). PDF se guarda en carpeta con nombre: '2025-12-04_VentanasModulPro_1500€.pdf'. Notificación en Slack: 'Nueva factura registrada'.",
  PASO_4_TECNOLOGIA: "N8N + Google Sheets / Excel / ERP",

  RESULTADO_FINAL: "Factura procesada en 10 segundos. Datos en sistema. PDF archivado. Cero errores. Cero transcripción manual.",

  // CASOS DE USO
  CASO_1_AVATAR: "👨‍💼",
  CASO_1_PERFIL: "Carlos - Emprendedor",
  CASO_1_EMPRESA_TIPO: "5 empleados, 20 facturas/semana",
  CASO_1_TITULO: "Dejó de pasar 2 horas semanales transcribiendo facturas",
  CASO_1_PROBLEMA: "20 facturas/semana. 5 min cada una = 100 min/semana. Errores de transcripción causaban problemas con proveedores.",
  CASO_1_SOLUCION: "Foto de factura vía WhatsApp → Bot procesa → datos en Google Sheets automáticamente.",
  CASO_1_RESULTADO: "Ahorra 95 min/semana. Cero errores. Proveedores contentos. ROI en 8 semanas.",

  CASO_2_AVATAR: "👩‍💼",
  CASO_2_PERFIL: "Laura - Gerente PYME",
  CASO_2_EMPRESA_TIPO: "15 empleados, 60 facturas/semana",
  CASO_2_TITULO: "3 personas dejaron de transcribir facturas manualmente",
  CASO_2_PROBLEMA: "60 facturas/semana. 3 personas dedicaban 3 horas cada una transcribiendo. Total: 9 horas/semana equipo.",
  CASO_2_SOLUCION: "Sistema OCR centralizado. Cualquier empleado sube factura (foto/PDF) → se procesa automáticamente → Holded ERP.",
  CASO_2_RESULTADO: "Equipo ahorra 9 horas/semana. Datos en ERP en tiempo real. Contabilidad al día siempre.",

  CASO_3_AVATAR: "👨‍🔧",
  CASO_3_PERFIL: "Javier - Director Corporativo",
  CASO_3_EMPRESA_TIPO: "80 empleados, 200 facturas/semana",
  CASO_3_TITULO: "200 facturas semanales procesadas en 30 minutos vs 16 horas",
  CASO_3_PROBLEMA: "200 facturas/semana. 2 administrativos dedicaban 8 horas cada uno transcribiendo. Backlog de 2 semanas.",
  CASO_3_SOLUCION: "OCR masivo. Upload de 50 facturas PDF → procesadas en lote en 10 minutos. Integración con Sage ERP.",
  CASO_3_RESULTADO: "Ahorra 15.5 horas/semana. Backlog eliminado. Contabilidad en tiempo real. ROI en 6 semanas.",

  // TECNOLOGÍA
  STACK_COUNT: 3,

  TECH_1_LOGO: "google-vision",
  TECH_1_NOMBRE: "Google Vision OCR",
  TECH_1_ROL: "Extracción de texto de imágenes/PDFs",
  TECH_1_DESCRIPCION: "Lee cualquier factura (escaneada, foto, PDF) y extrae todo el texto. Funciona con facturas mal escaneadas, fotos movidas, incluso manuscritas.",

  TECH_2_LOGO: "openai",
  TECH_2_NOMBRE: "GPT-4 (OpenAI)",
  TECH_2_ROL: "Estructuración de datos",
  TECH_2_DESCRIPCION: "Toma el texto del OCR y lo convierte en datos estructurados (Proveedor, Fecha, Importe, etc.). Entiende diferentes formatos de facturas.",

  TECH_3_LOGO: "n8n",
  TECH_3_NOMBRE: "N8N",
  TECH_3_ROL: "Flujo de automatización",
  TECH_3_DESCRIPCION: "Conecta: WhatsApp/Email → OCR → GPT-4 → Excel/ERP. Notificaciones. Archivo de PDFs. Todo automático.",

  RAZON_1: "Google Vision OCR es el más preciso del mercado (98%+ precisión) y funciona con facturas de cualquier formato",
  RAZON_2: "GPT-4 entiende contexto ('Base imponible', 'IVA', 'Total') mejor que regex - se adapta a diferentes formatos",
  RAZON_3: "N8N se integra con cualquier ERP (Holded, Sage, A3, Factusol) sin necesidad de desarrollo custom",

  // FAQ
  PREGUNTA_1: "¿Funciona con facturas manuscritas o mal escaneadas?",
  RESPUESTA_1: "Sí. Google Vision OCR tiene precisión 95%+ incluso con facturas manuscritas legibles. Para facturas muy mal escaneadas o con caligrafía ilegible, la precisión baja a 85-90%. En esos casos, el sistema te avisa para que revises manualmente.",

  PREGUNTA_2: "¿Se integra con mi ERP actual (Holded, Sage, A3, etc.)?",
  RESPUESTA_2: "Sí. N8N tiene conectores nativos para los ERPs principales: Holded, Sage, A3, Factusol, Contasol, ContaPlus. Si tu ERP no tiene API, podemos exportar a Excel/Google Sheets y hacer import periódico.",

  PREGUNTA_3: "¿Qué pasa si el OCR se equivoca en un dato importante (ej: importe)?",
  RESPUESTA_3: "El sistema detecta inconsistencias (ej: si suma Base + IVA ≠ Total) y te avisa para revisión. Además, todas las facturas se guardan con estado 'Revisar' o 'Aprobado'. Tú haces revisión rápida (10 seg por factura) antes de aprobar. Si encuentras error, corriges en el Excel y el sistema aprende para la próxima.",

  PREGUNTA_4: "¿Funciona con facturas en diferentes formatos (proveedores diferentes)?",
  RESPUESTA_4: "Sí. GPT-4 entiende diferentes layouts: factura clásica, factura moderna, factura simplificada, tickets. No necesitas templates por proveedor - se adapta automáticamente a cualquier formato.",

  PREGUNTA_5: "¿Puedo procesar facturas antiguas (años pasados) para digitalizar archivo?",
  RESPUESTA_5: "Sí. Podemos hacer migración masiva: subes carpeta con 500 PDFs → procesamos en lote → Excel completo en 2-3 horas. Útil para digitalizar archivo histórico. Precio aparte según volumen (ej: €0.10 por factura)."
}
```

---

### Problema #08: Tracking de Herramientas

**URL:** `/problemas/tracking-herramientas-obra`

**Variables:**

```javascript
{
  PROBLEMA_ID: "tracking-herramientas",
  PROBLEMA_NOMBRE: "Tracking de Herramientas y Equipos",
  CATEGORIA: "Control de Obra",
  ICONO_CATEGORIA: "🏗️",

  // HERO
  PROBLEMA_HEADLINE: "¿Cuántas veces has buscado 'dónde está la taladradora' entre 3 obras?",
  DOLOR_ESPECIFICO: "'¿Quién tiene el nivel láser?' 'Lo llevó Juan a la obra de Alcobendas.' 'Juan dice que lo devolvió.' 10 llamadas para encontrar UNA herramienta. Mientras tanto, la obra parada 30 minutos esperando.",
  TIEMPO_PERDIDO: "90 min",
  COSTO_ANUAL: "2.160",
  FRECUENCIA: "5-10",
  PERIODO: "semana",

  // ANTES/DESPUÉS
  TIEMPO_IMPLEMENTACION: "1 semana",
  DOLOR_1: "Llamar a 3 obras preguntando '¿Tienen la taladradora Makita azul?' - Nadie sabe. 15 minutos perdidos.",
  DOLOR_2: "Comprar herramienta duplicada porque 'no aparece la que compramos hace 2 meses' (€200 × 5 veces/año = €1.000).",
  DOLOR_3: "Herramienta se pierde. Nadie se responsabiliza. 'Yo no la cogí.' 'Yo la devolví.' Excel desactualizado de hace 3 meses.",
  DOLOR_4: "Fin de obra. Recoger herramientas. Faltan 5. '¿Quién las tiene?' Misterio sin resolver. Pérdida: €800.",

  GANANCIA_1: "Escaneas código QR de herramienta. Ves: Dónde está, quién la tiene, desde cuándo, historial completo. 10 segundos.",
  GANANCIA_2: "Llevas herramienta a otra obra: escaneas QR + foto + ubicación → sistema actualiza automáticamente.",
  GANANCIA_3: "Dashboard: 12 herramientas en Obra A, 8 en Obra B, 3 en almacén. Todo en tiempo real. Sin Excel manual.",
  GANANCIA_4: "Fin de obra: checklist automático de herramientas que deben volver. Faltan 2 → alerta a responsable antes de cerrar obra.",

  // ROI
  PRECIO_IMPLEMENTACION: "2.500",
  AHORRO_ANUAL: "2.160",
  HORAS_SEMANA: "1.5",
  SEMANAS_ROI: "13",
  ROI_PORCENTAJE: "86",

  // Breakdown
  CONCEPTO_1: "Buscar herramientas perdidas entre obras",
  TIEMPO_ANTES_1: "60 min/semana",
  TIEMPO_DESPUES_1: "5 min/semana",
  AHORRO_1: "55 min/semana",

  CONCEPTO_2: "Actualizar Excel de inventario manualmente",
  TIEMPO_ANTES_2: "20 min/semana",
  TIEMPO_DESPUES_2: "0 min/semana",
  AHORRO_2: "20 min/semana",

  CONCEPTO_3: "Checklist fin de obra (recoger herramientas)",
  TIEMPO_ANTES_3: "10 min/semana",
  TIEMPO_DESPUES_3: "2 min/semana",
  AHORRO_3: "8 min/semana",

  TOTAL_ANTES: "90 min/semana",
  TOTAL_DESPUES: "7 min/semana",
  TOTAL_AHORRO: "83 min/semana = €2.160/año",

  // Nota: Aquí el ahorro REAL es mayor si sumamos:
  // - Evitar compras duplicadas: €1.000/año
  // - Reducir pérdidas de herramientas: €800/año
  // - TOTAL AHORRO REAL: €3.960/año
  // Pero conservamos números conservadores del wizard

  // CÓMO FUNCIONA
  PASOS_COUNT: 3,

  PASO_1_ICON: "🏷️",
  PASO_1_TITULO: "Etiquetar herramientas con QR",
  PASO_1_DESCRIPCION: "Imprimimos códigos QR resistentes al agua/polvo para cada herramienta. Pegas el QR en la herramienta (5 segundos). Registras: Nombre, Marca, Valor, Fecha compra.",
  PASO_1_TECNOLOGIA: "Impresora QR + App móvil",

  PASO_2_ICON: "📱",
  PASO_2_TITULO: "Escanear QR al mover herramienta",
  PASO_2_DESCRIPCION: "Llevas taladradora de Almacén a Obra Alcobendas: Abres app → escaneas QR → seleccionas 'Obra Alcobendas' → opcional: foto + responsable (Juan). Sistema actualiza ubicación automáticamente.",
  PASO_2_TECNOLOGIA: "App móvil (web app, no necesita instalar)",

  PASO_3_ICON: "📊",
  PASO_3_TITULO: "Dashboard en tiempo real",
  PASO_3_DESCRIPCION: "Ves inventario completo: Obra A (12 herramientas), Obra B (8), Almacén (15). Buscas 'Makita': 3 resultados con ubicación exacta. Recibes alerta si herramienta lleva 30+ días en misma obra (posible pérdida).",
  PASO_3_TECNOLOGIA: "Airtable / Notion + N8N",

  RESULTADO_FINAL: "Inventario actualizado en tiempo real. Cero tiempo buscando herramientas. Reducción 80% pérdidas. Cero compras duplicadas.",

  // CASOS DE USO (truncado por límites de espacio - seguir patrón similar a problemas anteriores)
}
```

---

## 📊 SEO Y KEYWORDS

### Keywords principales por problema:

#### Problema #01 - Clasificación Emails
**Primary:** "automatizar clasificación emails construcción"
**Secondary:**
- "organizar emails construcción modular"
- "IA clasificación emails proveedores"
- "gestión email automatizada obra"

**Long-tail:**
- "cómo organizar 100 emails diarios construcción"
- "clasificar emails proveedores subcontratas automáticamente"
- "software gestión email sector construcción España"

---

#### Problema #03 - OCR Facturas
**Primary:** "ocr facturas construcción"
**Secondary:**
- "digitalizar facturas construcción automático"
- "automatizar transcripción facturas"
- "ocr facturas pdf excel construcción"

**Long-tail:**
- "cómo dejar de transcribir facturas manualmente"
- "software ocr facturas proveedores construcción"
- "digitalizar facturas construcción modular España"

---

### Meta Tags Template:

```html
<title>{{PROBLEMA_NOMBRE}}: Automatización IA para Construcción | ModulorIA</title>

<meta name="description" content="Automatiza {{PROBLEMA_NOMBRE}} en construcción modular. Ahorra {{HORAS_SEMANA}}h/semana y €{{AHORRO_ANUAL}}/año. Implementación en {{TIEMPO_IMPLEMENTACION}}. ROI en {{SEMANAS_ROI}} semanas." />

<meta property="og:title" content="{{PROBLEMA_HEADLINE}}" />
<meta property="og:description" content="{{DOLOR_ESPECIFICO}}" />
<meta property="og:url" content="https://moduloria.com/problemas/{{PROBLEMA_ID}}" />

<!-- Structured Data: FAQPage -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "{{PREGUNTA_1}}",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "{{RESPUESTA_1}}"
      }
    },
    ...
  ]
}
</script>

<!-- Structured Data: HowTo -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Cómo automatizar {{PROBLEMA_NOMBRE}}",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "{{PASO_1_TITULO}}",
      "text": "{{PASO_1_DESCRIPCION}}"
    },
    ...
  ]
}
</script>
```

---

## ✅ CHECKLIST DE IMPLEMENTACIÓN

### Por cada problema:

#### Fase 1: Copywriting (2-3 horas)
- [ ] Rellenar todas las variables del template
- [ ] Escribir 3 casos de uso (usar arquetipos Carlos/Laura/Javier)
- [ ] Escribir 3-5 preguntas FAQ
- [ ] Revisar tono de voz (ver Tono-de-Voz-Personalidad-Marca.md)
- [ ] Spell check y review

#### Fase 2: Diseño (1-2 horas)
- [ ] Crear 3-4 ilustraciones de pasos (Figma)
- [ ] Adaptar template CSS con variables específicas
- [ ] Crear mockup mobile y desktop
- [ ] Aprobar diseño con Gaby

#### Fase 3: Desarrollo (3-4 horas)
- [ ] HTML con template dinámico (Handlebars/Nunjucks)
- [ ] CSS custom por problema
- [ ] JavaScript interacciones (FAQ accordion, etc.)
- [ ] Integración calculadora ROI (parámetro ?problema={{ID}})
- [ ] Responsive testing

#### Fase 4: SEO (1 hora)
- [ ] Meta tags optimizados
- [ ] JSON-LD structured data (FAQPage, HowTo)
- [ ] Internal linking a homepage y calculadora
- [ ] Canonical tag
- [ ] Alt text en imágenes

#### Fase 5: QA (30 min)
- [ ] Proofread copy completo
- [ ] Testing cross-browser
- [ ] Testing mobile
- [ ] Lighthouse score >90
- [ ] WCAG 2.2 AA compliance

**Timeline por problema: 8-11 horas**
**Timeline Top 5 problemas: 40-55 horas (5-7 días)**

---

## 🎯 PRIORIDADES DE DESARROLLO

### Semana 1: Top 3 Quick Wins
1. Clasificación Emails (#01)
2. OCR Facturas (#03)
3. Tracking Herramientas (#08)

### Semana 2: Otros 2 Quick Wins
4. Reportes Obra (#07)
5. Control Materiales (#05)

### Semana 3-4: Problemas grandes (priorizar por tráfico SEO)
6. Certificaciones mensuales (#10)
7. Control de calidad (#14)
8. Caos WhatsApp (#02)
...continuar según demand

---

**Última actualización:** 4 de diciembre de 2025
**Próxima revisión:** Después de primeros 5 problemas publicados (medir tráfico y conversión por problema)
**Uso:** Guía completa para crear las 25 landing pages de problemas
