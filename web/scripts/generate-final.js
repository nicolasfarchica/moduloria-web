const { createCanvas, loadImage, registerFont } = require('canvas');
const fs = require('fs');
const path = require('path');

const BRAND = {
  colors: {
    primary: '#1a1f36',
    accent: '#d4a574',
    text: '#FFFFFF',
    textMuted: '#c0c0c0'
  }
};

const SIZES = {
  instagram: { width: 1080, height: 1080, name: 'instagram-1080x1080' },
  facebook: { width: 1200, height: 1200, name: 'facebook-1200x1200' },
  linkedin: { width: 1200, height: 1200, name: 'linkedin-1200x1200' }
};

async function generateCard(size, outputDir, bg) {
  const { width, height, name } = size;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');
  const scale = width / 1080;

  // 1. Fondo
  ctx.drawImage(bg, 0, 0, width, height);

  // 2. Overlay
  const overlay = ctx.createLinearGradient(0, 0, 0, height);
  overlay.addColorStop(0, 'rgba(26, 31, 54, 0.82)');
  overlay.addColorStop(0.5, 'rgba(26, 31, 54, 0.88)');
  overlay.addColorStop(1, 'rgba(26, 31, 54, 0.92)');
  ctx.fillStyle = overlay;
  ctx.fillRect(0, 0, width, height);

  // 3. Línea superior
  const lineGradient = ctx.createLinearGradient(width * 0.1, 0, width * 0.9, 0);
  lineGradient.addColorStop(0, 'transparent');
  lineGradient.addColorStop(0.2, BRAND.colors.accent);
  lineGradient.addColorStop(0.8, BRAND.colors.accent);
  lineGradient.addColorStop(1, 'transparent');
  ctx.strokeStyle = lineGradient;
  ctx.lineWidth = 3 * scale;
  ctx.beginPath();
  ctx.moveTo(width * 0.1, height * 0.10);
  ctx.lineTo(width * 0.9, height * 0.10);
  ctx.stroke();

  // 4. Texto principal
  ctx.shadowColor = 'rgba(0,0,0,0.6)';
  ctx.shadowBlur = 15 * scale;
  ctx.shadowOffsetY = 3 * scale;
  ctx.fillStyle = BRAND.colors.text;
  ctx.font = 'bold ' + Math.round(44 * scale) + 'px Inter';
  ctx.textAlign = 'center';
  ctx.fillText("La IA no va a reemplazar", width/2, height * 0.28);
  ctx.fillText("a tu equipo.", width/2, height * 0.35);

  ctx.fillStyle = BRAND.colors.accent;
  ctx.font = 'bold ' + Math.round(40 * scale) + 'px Inter';
  ctx.fillText("Va a liberar su tiempo para", width/2, height * 0.44);
  ctx.fillText("lo que realmente importa.", width/2, height * 0.51);

  // 5. Separador
  ctx.shadowBlur = 0;
  ctx.shadowOffsetY = 0;
  ctx.fillStyle = BRAND.colors.accent;
  ctx.fillRect(width * 0.4, height * 0.565, width * 0.2, 3 * scale);

  // 6. Bullets
  ctx.font = 'normal ' + Math.round(24 * scale) + 'px Inter';
  ctx.fillStyle = BRAND.colors.textMuted;
  const bullets = [
    "✓  Automatiza tareas repetitivas sin valor",
    "✓  Reduce errores de carga manual",
    "✓  Tu equipo se enfoca en lo importante",
    "✓  Resultados medibles en semanas"
  ];
  let bulletY = height * 0.63;
  bullets.forEach(bullet => {
    ctx.fillText(bullet, width/2, bulletY);
    bulletY += 42 * scale;
  });

  // 7. Línea inferior
  ctx.strokeStyle = lineGradient;
  ctx.lineWidth = 3 * scale;
  ctx.beginPath();
  ctx.moveTo(width * 0.1, height * 0.86);
  ctx.lineTo(width * 0.9, height * 0.86);
  ctx.stroke();

  // 8. Firma
  ctx.fillStyle = BRAND.colors.accent;
  ctx.font = 'bold ' + Math.round(22 * scale) + 'px Inter';
  ctx.fillText('ModulorIA', width/2, height * 0.91);
  ctx.fillStyle = BRAND.colors.textMuted;
  ctx.font = 'normal ' + Math.round(16 * scale) + 'px Inter';
  ctx.fillText('Agenda tu diagnóstico → moduloria.com/auditoria', width/2, height * 0.95);

  // 9. Logo
  try {
    const logoPath = path.join(__dirname, '..', 'public', 'images', 'moduloria-logo-transparent.png');
    const logo = await loadImage(logoPath);
    const logoSize = 85 * scale;
    ctx.drawImage(logo, width - logoSize - 30 * scale, height - logoSize - 30 * scale, logoSize, logoSize);
  } catch(e) {}

  // Guardar
  const buffer = canvas.toBuffer('image/jpeg', { quality: 0.95 });
  fs.writeFileSync(path.join(outputDir, name + '.jpg'), buffer);
  return name;
}

async function main() {
  const fontsDir = path.join(__dirname, 'fonts');
  registerFont(path.join(fontsDir, 'Inter-Bold.ttf'), { family: 'Inter', weight: 'bold' });
  registerFont(path.join(fontsDir, 'Inter-Regular.ttf'), { family: 'Inter', weight: 'normal' });

  const bgPath = path.join(__dirname, '..', 'public', 'images', 'social', 'backgrounds', 'construccion-modular.jpg');
  const bg = await loadImage(bgPath);

  const outputDir = path.join(__dirname, '..', 'public', 'images', 'social', 'posts', '2026-01-28-autoridad-ia-no-reemplaza');

  console.log('\n🎨 Generando versiones finales...\n');

  for (const [network, size] of Object.entries(SIZES)) {
    const name = await generateCard(size, outputDir, bg);
    console.log('✅ ' + network.padEnd(10) + ' → ' + name + '.jpg');
  }

  console.log('\n🎉 ¡Listo! 3 imágenes generadas\n');
}

main().catch(console.error);
