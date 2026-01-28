/**
 * ModulorIA - Generador de Quote Cards V2 (Diseño Premium)
 *
 * Diseño mejorado con:
 * - Elementos decorativos geométricos
 * - Mejor composición visual
 * - Gradientes más sofisticados
 * - Logo con transparencia
 * - Elementos de marca consistentes
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
    tertiary: '#0d1117',
    accent: '#d4a574',
    accentLight: '#e8c9a0',
    accentDark: '#b8956a',
    text: '#FFFFFF',
    textMuted: '#8b9dc3'
  }
};

const SIZES = {
  instagram: { width: 1080, height: 1080, name: 'instagram-1080x1080' },
  facebook: { width: 1200, height: 1200, name: 'facebook-1200x1200' },
  linkedin: { width: 1200, height: 1200, name: 'linkedin-1200x1200' }
};

// ============================================
// FUNCIONES DE DIBUJO MEJORADAS
// ============================================

/**
 * Dibuja fondo con gradiente premium y elementos decorativos
 */
function drawPremiumBackground(ctx, width, height) {
  // Gradiente diagonal más sofisticado
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, BRAND.colors.tertiary);
  gradient.addColorStop(0.3, BRAND.colors.primary);
  gradient.addColorStop(0.7, BRAND.colors.secondary);
  gradient.addColorStop(1, BRAND.colors.primary);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  // Overlay con ruido sutil (simular textura)
  ctx.fillStyle = 'rgba(255, 255, 255, 0.02)';
  for (let i = 0; i < 50; i++) {
    const x = Math.random() * width;
    const y = Math.random() * height;
    const size = Math.random() * 2 + 1;
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fill();
  }
}

/**
 * Dibuja elementos decorativos geométricos
 */
function drawDecorativeElements(ctx, width, height) {
  ctx.save();

  // Líneas diagonales sutiles en esquina superior izquierda
  ctx.strokeStyle = 'rgba(212, 165, 116, 0.15)';
  ctx.lineWidth = 2;
  for (let i = 0; i < 5; i++) {
    ctx.beginPath();
    ctx.moveTo(0, i * 40);
    ctx.lineTo(i * 40, 0);
    ctx.stroke();
  }

  // Líneas diagonales en esquina inferior derecha
  for (let i = 0; i < 5; i++) {
    ctx.beginPath();
    ctx.moveTo(width - i * 40, height);
    ctx.lineTo(width, height - i * 40);
    ctx.stroke();
  }

  // Círculos decorativos sutiles
  ctx.strokeStyle = 'rgba(212, 165, 116, 0.08)';
  ctx.lineWidth = 1;

  // Círculo grande arriba a la derecha
  ctx.beginPath();
  ctx.arc(width * 0.85, height * 0.15, width * 0.2, 0, Math.PI * 2);
  ctx.stroke();

  // Círculo mediano abajo a la izquierda
  ctx.beginPath();
  ctx.arc(width * 0.1, height * 0.85, width * 0.15, 0, Math.PI * 2);
  ctx.stroke();

  // Puntos dorados decorativos
  ctx.fillStyle = BRAND.colors.accent;
  const dotPositions = [
    { x: width * 0.05, y: height * 0.3 },
    { x: width * 0.95, y: height * 0.7 },
    { x: width * 0.08, y: height * 0.6 },
    { x: width * 0.92, y: height * 0.4 }
  ];

  dotPositions.forEach(pos => {
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, 4, 0, Math.PI * 2);
    ctx.fill();
  });

  ctx.restore();
}

/**
 * Dibuja líneas decorativas horizontales
 */
function drawHorizontalAccents(ctx, width, height) {
  // Línea superior dorada
  const gradient1 = ctx.createLinearGradient(width * 0.1, 0, width * 0.9, 0);
  gradient1.addColorStop(0, 'transparent');
  gradient1.addColorStop(0.2, BRAND.colors.accent);
  gradient1.addColorStop(0.8, BRAND.colors.accent);
  gradient1.addColorStop(1, 'transparent');

  ctx.strokeStyle = gradient1;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(width * 0.1, height * 0.12);
  ctx.lineTo(width * 0.9, height * 0.12);
  ctx.stroke();

  // Línea inferior dorada (más gruesa)
  const gradient2 = ctx.createLinearGradient(width * 0.1, 0, width * 0.9, 0);
  gradient2.addColorStop(0, 'transparent');
  gradient2.addColorStop(0.15, BRAND.colors.accent);
  gradient2.addColorStop(0.85, BRAND.colors.accent);
  gradient2.addColorStop(1, 'transparent');

  ctx.strokeStyle = gradient2;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(width * 0.1, height * 0.88);
  ctx.lineTo(width * 0.9, height * 0.88);
  ctx.stroke();
}

/**
 * Dibuja el texto principal con mejor tipografía
 */
function drawMainText(ctx, text, width, height, fontSize) {
  // Sombra sutil para el texto
  ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
  ctx.shadowBlur = 20;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 4;

  ctx.fillStyle = BRAND.colors.text;
  ctx.font = `bold ${fontSize}px Inter`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  const maxWidth = width * 0.75;
  const lineHeight = fontSize * 1.5;
  const words = text.split(' ');
  const lines = [];
  let currentLine = '';

  for (const word of words) {
    const testLine = currentLine ? `${currentLine} ${word}` : word;
    const metrics = ctx.measureText(testLine);
    if (metrics.width > maxWidth && currentLine) {
      lines.push(currentLine);
      currentLine = word;
    } else {
      currentLine = testLine;
    }
  }
  if (currentLine) lines.push(currentLine);

  const totalHeight = lines.length * lineHeight;
  let y = (height - totalHeight) / 2 + lineHeight / 2 - height * 0.02;

  lines.forEach((line, index) => {
    // Highlight la primera línea (si es corta)
    if (index === 0 && lines.length > 1) {
      ctx.fillStyle = BRAND.colors.text;
    }
    ctx.fillText(line, width / 2, y);
    y += lineHeight;
  });

  // Reset shadow
  ctx.shadowColor = 'transparent';
  ctx.shadowBlur = 0;

  return y;
}

/**
 * Dibuja comillas decorativas
 */
function drawQuoteMarks(ctx, width, height) {
  ctx.save();
  ctx.font = `bold ${Math.floor(height * 0.15)}px Georgia`;
  ctx.fillStyle = 'rgba(212, 165, 116, 0.15)';
  ctx.textAlign = 'center';

  // Comilla de apertura
  ctx.fillText('"', width * 0.12, height * 0.28);

  // Comilla de cierre
  ctx.fillText('"', width * 0.88, height * 0.75);

  ctx.restore();
}

/**
 * Dibuja la firma con estilo
 */
function drawSignature(ctx, width, height) {
  // Línea pequeña sobre la firma
  ctx.strokeStyle = BRAND.colors.accent;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(width * 0.42, height * 0.76);
  ctx.lineTo(width * 0.58, height * 0.76);
  ctx.stroke();

  // Texto de firma
  ctx.fillStyle = BRAND.colors.accent;
  ctx.font = `normal ${Math.floor(height * 0.028)}px Inter`;
  ctx.textAlign = 'center';
  ctx.fillText('ModulorIA', width / 2, height * 0.80);

  // Subtítulo
  ctx.fillStyle = BRAND.colors.textMuted;
  ctx.font = `normal ${Math.floor(height * 0.018)}px Inter`;
  ctx.fillText('IA para Construcción Modular', width / 2, height * 0.835);
}

/**
 * Dibuja el logo con transparencia
 */
async function drawLogo(ctx, width, height) {
  try {
    const logoPath = path.join(__dirname, '..', 'public', 'images', 'moduloria-logo-transparent.png');
    const logo = await loadImage(logoPath);
    const logoSize = Math.min(width, height) * 0.10;
    const x = width - logoSize - 35;
    const y = height - logoSize - 35;
    ctx.drawImage(logo, x, y, logoSize, logoSize);
  } catch (err) {
    console.log('Logo no encontrado');
  }
}

/**
 * Genera una quote card premium
 */
async function generatePremiumQuoteCard(text, size, outputPath) {
  const { width, height, name } = size;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // 1. Fondo premium
  drawPremiumBackground(ctx, width, height);

  // 2. Elementos decorativos
  drawDecorativeElements(ctx, width, height);

  // 3. Líneas de acento
  drawHorizontalAccents(ctx, width, height);

  // 4. Comillas decorativas
  drawQuoteMarks(ctx, width, height);

  // 5. Texto principal
  const fontSize = Math.floor(width * 0.042);
  drawMainText(ctx, text, width, height, fontSize);

  // 6. Firma
  drawSignature(ctx, width, height);

  // 7. Logo
  await drawLogo(ctx, width, height);

  // Guardar
  const fileName = `${name}.jpg`;
  const fullPath = path.join(outputPath, fileName);
  const buffer = canvas.toBuffer('image/jpeg', { quality: 0.95 });
  fs.writeFileSync(fullPath, buffer);

  return fullPath;
}

/**
 * Registra fuentes
 */
function setupFonts() {
  const fontsDir = path.join(__dirname, 'fonts');
  const interBold = path.join(fontsDir, 'Inter-Bold.ttf');
  const interRegular = path.join(fontsDir, 'Inter-Regular.ttf');

  if (!fs.existsSync(interBold) || !fs.existsSync(interRegular)) {
    console.error('❌ Fuentes no encontradas en scripts/fonts/');
    process.exit(1);
  }

  registerFont(interBold, { family: 'Inter', weight: 'bold' });
  registerFont(interRegular, { family: 'Inter', weight: 'normal' });
}

/**
 * Main
 */
async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0 || args[0] === '--help') {
    console.log(`
╔═══════════════════════════════════════════════════════════╗
║     ModulorIA - Quote Cards V2 (Diseño Premium)           ║
╚═══════════════════════════════════════════════════════════╝

USO:
  node scripts/generate-quote-card-v2.js "Tu texto aquí"

OPCIONES:
  --output <carpeta>    Carpeta de salida (default: ./output)

EJEMPLO:
  node scripts/generate-quote-card-v2.js "La IA no reemplaza. Potencia."
`);
    return;
  }

  let text = '';
  let outputDir = path.join(process.cwd(), 'output');

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--output' && args[i + 1]) {
      outputDir = args[i + 1];
      i++;
    } else if (!args[i].startsWith('--')) {
      text = args[i];
    }
  }

  if (!text) {
    console.error('Error: Proporciona un texto');
    process.exit(1);
  }

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log('\n🎨 ModulorIA Quote Card V2 (Premium)\n');
  console.log(`📝 Texto: "${text.substring(0, 50)}${text.length > 50 ? '...' : ''}"`);
  console.log(`📁 Salida: ${outputDir}\n`);

  setupFonts();

  console.log('⏳ Generando diseños premium...\n');

  for (const [network, size] of Object.entries(SIZES)) {
    const filePath = await generatePremiumQuoteCard(text, size, outputDir);
    console.log(`✅ ${network.padEnd(10)} → ${path.basename(filePath)}`);
  }

  console.log(`\n🎉 ¡Listo! Imágenes premium en: ${outputDir}\n`);
}

main().catch(console.error);
