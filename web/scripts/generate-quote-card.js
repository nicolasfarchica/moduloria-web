/**
 * ModulorIA - Generador de Quote Cards
 *
 * Uso:
 *   node scripts/generate-quote-card.js "Tu texto aquí"
 *   node scripts/generate-quote-card.js "Tu texto aquí" --output carpeta-salida
 *   node scripts/generate-quote-card.js "Tu texto aquí" --background ruta/imagen.jpg
 *
 * Genera imágenes para Instagram (1080x1080), Facebook (1200x1200) y LinkedIn (1200x1200)
 */

const { createCanvas, loadImage, registerFont } = require('canvas');
const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// ============================================
// CONFIGURACIÓN DE MARCA
// ============================================
const BRAND = {
  colors: {
    primary: '#1a1f36',      // Azul oscuro
    secondary: '#252b45',    // Azul medio
    accent: '#d4a574',       // Dorado/Cobre
    text: '#FFFFFF',         // Blanco
    textMuted: '#a0a0a0'     // Gris
  },
  fonts: {
    title: 'Inter Bold',
    body: 'Inter Regular'
  }
};

// Tamaños para cada red social
const SIZES = {
  instagram: { width: 1080, height: 1080, name: 'instagram-1080x1080' },
  facebook: { width: 1200, height: 1200, name: 'facebook-1200x1200' },
  linkedin: { width: 1200, height: 1200, name: 'linkedin-1200x1200' }
};

// ============================================
// FUNCIONES AUXILIARES
// ============================================

/**
 * Descarga una fuente desde Google Fonts
 */
async function downloadFont(url, outputPath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    const file = fs.createWriteStream(outputPath);

    protocol.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        downloadFont(response.headers.location, outputPath).then(resolve).catch(reject);
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(outputPath, () => {});
      reject(err);
    });
  });
}

/**
 * Asegura que las fuentes estén disponibles
 */
async function ensureFonts() {
  const fontsDir = path.join(__dirname, 'fonts');

  const interBoldPath = path.join(fontsDir, 'Inter-Bold.ttf');
  const interRegularPath = path.join(fontsDir, 'Inter-Regular.ttf');

  // Verificar que las fuentes existen
  if (!fs.existsSync(interBoldPath) || !fs.existsSync(interRegularPath)) {
    console.error('❌ Error: Fuentes no encontradas en scripts/fonts/');
    console.error('   Ejecuta: ./scripts/setup-fonts.sh');
    process.exit(1);
  }

  // Registrar fuentes
  registerFont(interBoldPath, { family: 'Inter', weight: 'bold' });
  registerFont(interRegularPath, { family: 'Inter', weight: 'normal' });

  return { interBoldPath, interRegularPath };
}

/**
 * Dibuja un fondo con gradiente
 */
function drawGradientBackground(ctx, width, height) {
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, BRAND.colors.primary);
  gradient.addColorStop(1, BRAND.colors.secondary);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  // Agregar línea decorativa dorada
  ctx.strokeStyle = BRAND.colors.accent;
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(width * 0.1, height * 0.85);
  ctx.lineTo(width * 0.9, height * 0.85);
  ctx.stroke();
}

/**
 * Dibuja texto centrado con word-wrap
 */
function drawCenteredText(ctx, text, width, height, fontSize) {
  ctx.fillStyle = BRAND.colors.text;
  ctx.font = `bold ${fontSize}px Inter`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  const maxWidth = width * 0.8;
  const lineHeight = fontSize * 1.4;
  const words = text.split(' ');
  const lines = [];
  let currentLine = '';

  // Word wrap
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
  if (currentLine) {
    lines.push(currentLine);
  }

  // Calcular posición vertical centrada
  const totalHeight = lines.length * lineHeight;
  let y = (height - totalHeight) / 2 + lineHeight / 2;

  // Dibujar cada línea
  for (const line of lines) {
    ctx.fillText(line, width / 2, y);
    y += lineHeight;
  }

  return y; // Retorna la posición Y final
}

/**
 * Dibuja el logo de ModulorIA
 */
async function drawLogo(ctx, width, height, logoPath) {
  try {
    const logo = await loadImage(logoPath);
    const logoSize = Math.min(width, height) * 0.12;
    const x = width - logoSize - 40;
    const y = height - logoSize - 40;
    ctx.drawImage(logo, x, y, logoSize, logoSize);
  } catch (err) {
    console.log('Logo no encontrado, continuando sin logo');
  }
}

/**
 * Dibuja una foto circular con borde dorado
 */
async function drawCircularPhoto(ctx, photoPath, x, y, size) {
  try {
    const photo = await loadImage(photoPath);
    ctx.save();
    // Borde dorado
    ctx.beginPath();
    ctx.arc(x + size / 2, y + size / 2, size / 2 + 3, 0, Math.PI * 2);
    ctx.fillStyle = BRAND.colors.accent;
    ctx.fill();
    // Recorte circular
    ctx.beginPath();
    ctx.arc(x + size / 2, y + size / 2, size / 2, 0, Math.PI * 2);
    ctx.clip();
    ctx.drawImage(photo, x, y, size, size);
    ctx.restore();
  } catch (err) {
    console.log('Foto no encontrada, continuando sin foto');
  }
}

/**
 * Genera una quote card
 */
async function generateQuoteCard(text, size, outputPath, options = {}) {
  const { width, height, name } = size;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Fondo
  if (options.backgroundImage) {
    try {
      const bg = await loadImage(options.backgroundImage);
      ctx.drawImage(bg, 0, 0, width, height);
      // Overlay gradiente oscuro (mas fuerte abajo para el texto)
      const overlay = ctx.createLinearGradient(0, 0, 0, height);
      overlay.addColorStop(0, 'rgba(26, 31, 54, 0.4)');
      overlay.addColorStop(0.4, 'rgba(26, 31, 54, 0.6)');
      overlay.addColorStop(1, 'rgba(26, 31, 54, 0.85)');
      ctx.fillStyle = overlay;
      ctx.fillRect(0, 0, width, height);
    } catch (err) {
      drawGradientBackground(ctx, width, height);
    }
  } else {
    drawGradientBackground(ctx, width, height);
  }

  // Separar texto en titulo y subtitulo si contiene doble salto o punto seguido de mayuscula
  const textParts = text.split(/(?<=correctas\.)\s+/);
  const titleText = textParts[0] || text;
  const subtitleText = textParts[1] || '';

  const marginLeft = width * 0.08;
  const maxWidth = width * 0.8;

  // Titulo principal - grande y bold
  const titleFontSize = Math.floor(width * 0.058);
  ctx.fillStyle = BRAND.colors.text;
  ctx.font = `bold ${titleFontSize}px Inter`;
  ctx.textAlign = 'left';

  const titleLineHeight = titleFontSize * 1.3;
  const titleWords = titleText.split(' ');
  const titleLines = [];
  let currentLine = '';

  for (const word of titleWords) {
    const testLine = currentLine ? `${currentLine} ${word}` : word;
    const metrics = ctx.measureText(testLine);
    if (metrics.width > maxWidth && currentLine) {
      titleLines.push(currentLine);
      currentLine = word;
    } else {
      currentLine = testLine;
    }
  }
  if (currentLine) titleLines.push(currentLine);

  const textStartY = height * 0.45;
  for (let i = 0; i < titleLines.length; i++) {
    ctx.fillText(titleLines[i], marginLeft, textStartY + i * titleLineHeight);
  }

  // Subtitulo - mas pequeno, en dorado, elegante
  if (subtitleText) {
    const subFontSize = Math.floor(width * 0.035);
    const subLineHeight = subFontSize * 1.4;
    ctx.fillStyle = BRAND.colors.accent;
    ctx.font = `normal ${subFontSize}px Inter`;

    const subWords = subtitleText.split(' ');
    const subLines = [];
    let subLine = '';
    for (const word of subWords) {
      const testLine = subLine ? `${subLine} ${word}` : word;
      const metrics = ctx.measureText(testLine);
      if (metrics.width > maxWidth && subLine) {
        subLines.push(subLine);
        subLine = word;
      } else {
        subLine = testLine;
      }
    }
    if (subLine) subLines.push(subLine);

    const subStartY = textStartY + titleLines.length * titleLineHeight + 40;
    for (let i = 0; i < subLines.length; i++) {
      ctx.fillText(subLines[i], marginLeft, subStartY + i * subLineHeight);
    }
  }

  // Seccion inferior: foto + nombre + logo
  const bottomY = height * 0.82;

  // Foto circular del CEO
  const photoPath = path.join(__dirname, '..', 'public', 'images', 'nicolas-farchica-ceo.jpg');
  const photoSize = Math.floor(width * 0.1);
  if (options.showPhoto !== false) {
    await drawCircularPhoto(ctx, photoPath, width * 0.08, bottomY, photoSize);
  }

  // Nombre y titulo al lado de la foto
  const nameX = width * 0.08 + photoSize + 15;
  ctx.fillStyle = BRAND.colors.text;
  const nameFontSize = Math.floor(width * 0.02);
  ctx.font = `bold ${nameFontSize}px Inter`;
  ctx.textAlign = 'left';
  ctx.fillText('Nicolas Farchica', nameX, bottomY + photoSize * 0.4);
  ctx.fillStyle = BRAND.colors.accent;
  ctx.font = `normal ${Math.floor(nameFontSize * 0.8)}px Inter`;
  ctx.fillText('CEO & Founder - ModulorIA', nameX, bottomY + photoSize * 0.7);

  // Logo transparente (esquina inferior derecha, sin fondo azul)
  const logoPath = path.join(__dirname, '..', 'public', 'images', 'moduloria-logo-transparent.png');
  try {
    const logo = await loadImage(logoPath);
    const logoSize = Math.min(width, height) * 0.1;
    ctx.drawImage(logo, width - logoSize - 40, bottomY, logoSize, logoSize);
  } catch (err) {
    console.log('Logo no encontrado, continuando sin logo');
  }

  // Guardar
  const fileName = `${name}.jpg`;
  const fullPath = path.join(outputPath, fileName);
  const buffer = canvas.toBuffer('image/jpeg', { quality: 0.95 });
  fs.writeFileSync(fullPath, buffer);

  return fullPath;
}

/**
 * Función principal
 */
async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0 || args[0] === '--help') {
    console.log(`
╔═══════════════════════════════════════════════════════════╗
║        ModulorIA - Generador de Quote Cards               ║
╚═══════════════════════════════════════════════════════════╝

USO:
  node scripts/generate-quote-card.js "Tu texto aquí"

OPCIONES:
  --output <carpeta>     Carpeta de salida (default: ./output)
  --background <imagen>  Imagen de fondo (opcional)
  --help                 Muestra esta ayuda

EJEMPLOS:
  node scripts/generate-quote-card.js "La IA no va a reemplazar a tu equipo."

  node scripts/generate-quote-card.js "Tu mensaje" --output ./mis-posts

  node scripts/generate-quote-card.js "Tu mensaje" --background ./fondo.jpg

SALIDA:
  Genera 3 imágenes:
  - instagram-1080x1080.jpg
  - facebook-1200x1200.jpg
  - linkedin-1200x1200.jpg
`);
    return;
  }

  // Parsear argumentos
  let text = '';
  let outputDir = path.join(process.cwd(), 'output');
  let backgroundImage = null;

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--output' && args[i + 1]) {
      outputDir = args[i + 1];
      i++;
    } else if (args[i] === '--background' && args[i + 1]) {
      backgroundImage = args[i + 1];
      i++;
    } else if (!args[i].startsWith('--')) {
      text = args[i];
    }
  }

  if (!text) {
    console.error('Error: Debes proporcionar un texto');
    process.exit(1);
  }

  // Crear carpeta de salida
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log('\n🎨 ModulorIA Quote Card Generator\n');
  console.log(`📝 Texto: "${text.substring(0, 50)}${text.length > 50 ? '...' : ''}"`);
  console.log(`📁 Salida: ${outputDir}\n`);

  // Asegurar fuentes
  console.log('⏳ Preparando fuentes...');
  await ensureFonts();

  // Generar para cada red social
  console.log('⏳ Generando imágenes...\n');

  const options = { backgroundImage };

  for (const [network, size] of Object.entries(SIZES)) {
    const filePath = await generateQuoteCard(text, size, outputDir, options);
    console.log(`✅ ${network.padEnd(10)} → ${path.basename(filePath)}`);
  }

  console.log(`\n🎉 ¡Listo! 3 imágenes generadas en: ${outputDir}\n`);
}

// Ejecutar
main().catch(console.error);
