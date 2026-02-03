/**
 * ModulorIA - Generador de Infografías con Barras
 *
 * Uso:
 *   node scripts/generate-infographic.js
 *   node scripts/generate-infographic.js --output carpeta-salida
 *   node scripts/generate-infographic.js --preview (solo genera 1 imagen de prueba)
 */

const { createCanvas, loadImage, registerFont } = require('canvas');
const fs = require('fs');
const path = require('path');

// ============================================
// CONFIGURACIÓN DE MARCA
// ============================================
const BRAND = {
  colors: {
    primary: '#1a1f36',
    secondary: '#252b45',
    accent: '#d4a574',
    text: '#FFFFFF',
    textMuted: '#a0a0a0',
    barBg: '#3a4060',
    spain: '#c94c4c',
    germany: '#e8a838',
    sweden: '#4CAF50'
  }
};

// Datos de la infografía
const DATA = {
  title: 'Edificación industrializada',
  subtitle: 'en Europa',
  countries: [
    { name: 'España', value: 2, color: BRAND.colors.spain },
    { name: 'Alemania', value: 15, color: BRAND.colors.germany },
    { name: 'Suecia', value: 80, color: BRAND.colors.sweden }
  ],
  benefits: [
    { icon: '⏱️', text: 'Tiempos de obra', value: '-60%' },
    { icon: '🌱', text: 'Emisiones CO₂', value: '-30%' },
    { icon: '♻️', text: 'Residuos', value: '-50%' }
  ],
  footer: '¿Por qué España va tan lenta?'
};

// Tamaños
const SIZES = {
  instagram: { width: 1080, height: 1080, name: 'instagram-1080x1080' },
  facebook: { width: 1200, height: 1200, name: 'facebook-1200x1200' },
  linkedin: { width: 1200, height: 1200, name: 'linkedin-1200x1200' }
};

// ============================================
// FUNCIONES
// ============================================

function drawGradientFallback(ctx, width, height) {
  const gradient = ctx.createLinearGradient(0, 0, 0, height);
  gradient.addColorStop(0, BRAND.colors.primary);
  gradient.addColorStop(1, BRAND.colors.secondary);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
}

async function ensureFonts() {
  const fontsDir = path.join(__dirname, 'fonts');
  const interBoldPath = path.join(fontsDir, 'Inter-Bold.ttf');
  const interRegularPath = path.join(fontsDir, 'Inter-Regular.ttf');

  if (!fs.existsSync(interBoldPath) || !fs.existsSync(interRegularPath)) {
    console.error('❌ Error: Fuentes no encontradas en scripts/fonts/');
    process.exit(1);
  }

  registerFont(interBoldPath, { family: 'Inter', weight: 'bold' });
  registerFont(interRegularPath, { family: 'Inter', weight: 'normal' });
}

function drawRoundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

async function generateInfographic(size, outputPath, options = {}) {
  const { width, height, name } = size;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');
  const scale = width / 1200; // Escala base

  // Fondo: imagen personalizada o gradiente
  if (options.backgroundImage) {
    try {
      const bg = await loadImage(options.backgroundImage);
      ctx.drawImage(bg, 0, 0, width, height);
      // Overlay oscuro para legibilidad
      const overlay = ctx.createLinearGradient(0, 0, 0, height);
      overlay.addColorStop(0, 'rgba(26, 31, 54, 0.75)');
      overlay.addColorStop(0.5, 'rgba(26, 31, 54, 0.80)');
      overlay.addColorStop(1, 'rgba(26, 31, 54, 0.90)');
      ctx.fillStyle = overlay;
      ctx.fillRect(0, 0, width, height);
    } catch (err) {
      console.log('Error cargando fondo, usando gradiente');
      drawGradientFallback(ctx, width, height);
    }
  } else {
    drawGradientFallback(ctx, width, height);
  }

  // Patrón decorativo sutil (líneas diagonales) - solo si no hay fondo
  if (!options.backgroundImage) {
    ctx.strokeStyle = 'rgba(212, 165, 116, 0.05)';
    ctx.lineWidth = 1;
    for (let i = -height; i < width + height; i += 40 * scale) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i + height, height);
      ctx.stroke();
    }
  }

  const marginX = width * 0.08;
  const contentWidth = width - marginX * 2;

  // === TÍTULO ===
  const titleY = height * 0.12;
  ctx.fillStyle = BRAND.colors.text;
  ctx.font = `bold ${Math.floor(52 * scale)}px Inter`;
  ctx.textAlign = 'left';
  ctx.fillText(DATA.title, marginX, titleY);

  ctx.fillStyle = BRAND.colors.accent;
  ctx.font = `normal ${Math.floor(36 * scale)}px Inter`;
  ctx.fillText(DATA.subtitle, marginX, titleY + 50 * scale);

  // === BARRAS COMPARATIVAS ===
  const barsStartY = height * 0.24;
  const barHeight = 55 * scale;
  const barSpacing = 85 * scale;
  const barRadius = 8 * scale;
  const maxBarWidth = contentWidth * 0.7;

  for (let i = 0; i < DATA.countries.length; i++) {
    const country = DATA.countries[i];
    const y = barsStartY + i * barSpacing;

    // Nombre del país
    ctx.fillStyle = BRAND.colors.text;
    ctx.font = `bold ${Math.floor(24 * scale)}px Inter`;
    ctx.textAlign = 'left';
    ctx.fillText(country.name, marginX, y + barHeight / 2 + 8 * scale);

    // Barra de fondo
    const barX = marginX + 120 * scale;
    ctx.fillStyle = BRAND.colors.barBg;
    drawRoundedRect(ctx, barX, y, maxBarWidth, barHeight, barRadius);
    ctx.fill();

    // Barra de valor
    const valueWidth = (country.value / 100) * maxBarWidth;
    ctx.fillStyle = country.color;
    drawRoundedRect(ctx, barX, y, Math.max(valueWidth, barRadius * 2), barHeight, barRadius);
    ctx.fill();

    // Porcentaje
    ctx.fillStyle = BRAND.colors.text;
    ctx.font = `bold ${Math.floor(32 * scale)}px Inter`;
    ctx.textAlign = 'left';
    const percentX = barX + valueWidth + 15 * scale;
    ctx.fillText(`${country.value}%`, percentX, y + barHeight / 2 + 10 * scale);
  }

  // === LÍNEA SEPARADORA ===
  const separatorY = height * 0.52;
  ctx.strokeStyle = BRAND.colors.accent;
  ctx.lineWidth = 2 * scale;
  ctx.beginPath();
  ctx.moveTo(marginX, separatorY);
  ctx.lineTo(width - marginX, separatorY);
  ctx.stroke();

  // === BENEFICIOS ===
  const benefitsY = height * 0.58;
  ctx.fillStyle = BRAND.colors.text;
  ctx.font = `bold ${Math.floor(28 * scale)}px Inter`;
  ctx.textAlign = 'left';
  ctx.fillText('La construcción industrializada reduce:', marginX, benefitsY);

  const benefitStartY = benefitsY + 50 * scale;
  const benefitSpacing = 70 * scale;

  for (let i = 0; i < DATA.benefits.length; i++) {
    const benefit = DATA.benefits[i];
    const y = benefitStartY + i * benefitSpacing;

    // Círculo con icono
    const circleX = marginX + 25 * scale;
    ctx.fillStyle = BRAND.colors.accent;
    ctx.beginPath();
    ctx.arc(circleX, y, 22 * scale, 0, Math.PI * 2);
    ctx.fill();

    // Texto del beneficio
    ctx.fillStyle = BRAND.colors.text;
    ctx.font = `normal ${Math.floor(24 * scale)}px Inter`;
    ctx.textAlign = 'left';
    ctx.fillText(benefit.text, marginX + 60 * scale, y + 8 * scale);

    // Valor destacado
    ctx.fillStyle = BRAND.colors.accent;
    ctx.font = `bold ${Math.floor(28 * scale)}px Inter`;
    const textWidth = ctx.measureText(benefit.text).width;
    ctx.fillText(benefit.value, marginX + 70 * scale + textWidth, y + 8 * scale);
  }

  // === PREGUNTA FOOTER ===
  const footerY = height * 0.88;
  ctx.fillStyle = BRAND.colors.text;
  ctx.font = `bold ${Math.floor(30 * scale)}px Inter`;
  ctx.textAlign = 'center';
  ctx.fillText(DATA.footer, width / 2, footerY);

  // === LOGO ===
  const logoPath = path.join(__dirname, '..', 'public', 'images', 'moduloria-logo-transparent.png');
  try {
    const logo = await loadImage(logoPath);
    const logoSize = 90 * scale;
    ctx.drawImage(logo, width - logoSize - marginX, height - logoSize - 30 * scale, logoSize, logoSize);
  } catch (err) {
    console.log('Logo no encontrado');
  }

  // Guardar
  const fileName = `${name}.jpg`;
  const fullPath = path.join(outputPath, fileName);
  const buffer = canvas.toBuffer('image/jpeg', { quality: 0.95 });
  fs.writeFileSync(fullPath, buffer);

  return fullPath;
}

async function main() {
  const args = process.argv.slice(2);
  const isPreview = args.includes('--preview');

  let outputDir = path.join(process.cwd(), 'output');
  let backgroundImage = null;
  let outputSuffix = '';

  const outputIdx = args.indexOf('--output');
  if (outputIdx !== -1 && args[outputIdx + 1]) {
    outputDir = args[outputIdx + 1];
  }

  const bgIdx = args.indexOf('--background');
  if (bgIdx !== -1 && args[bgIdx + 1]) {
    backgroundImage = args[bgIdx + 1];
  }

  const suffixIdx = args.indexOf('--suffix');
  if (suffixIdx !== -1 && args[suffixIdx + 1]) {
    outputSuffix = '-' + args[suffixIdx + 1];
  }

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log('\n📊 ModulorIA Infographic Generator\n');
  console.log(`📁 Salida: ${outputDir}`);
  if (backgroundImage) console.log(`🖼️  Fondo: ${backgroundImage}`);
  console.log('');

  await ensureFonts();

  const options = { backgroundImage };

  if (isPreview) {
    // Solo generar una imagen de prueba (LinkedIn)
    console.log('⏳ Generando preview...\n');
    const size = { ...SIZES.linkedin, name: SIZES.linkedin.name + outputSuffix };
    const filePath = await generateInfographic(size, outputDir, options);
    console.log(`✅ Preview → ${path.basename(filePath)}`);
  } else {
    // Generar para todas las redes
    console.log('⏳ Generando imágenes...\n');
    for (const [network, size] of Object.entries(SIZES)) {
      const sizeWithSuffix = { ...size, name: size.name + outputSuffix };
      const filePath = await generateInfographic(sizeWithSuffix, outputDir, options);
      console.log(`✅ ${network.padEnd(10)} → ${path.basename(filePath)}`);
    }
  }

  console.log(`\n🎉 ¡Listo!\n`);
}

main().catch(console.error);
