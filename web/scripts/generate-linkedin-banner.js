const { createCanvas, loadImage, registerFont } = require('canvas');
const fs = require('fs');
const path = require('path');

// LinkedIn banner: 1584 x 396 px
const WIDTH = 1584;
const HEIGHT = 396;

const BRAND = {
  colors: {
    primary: '#0f1419',
    secondary: '#1a1f36',
    accent: '#d4a574',
    text: '#FFFFFF',
    textMuted: '#a0aec0'
  }
};

// Colores representativos de cada LLM
const LLMS = [
  { name: 'ChatGPT', color: '#10a37f' },
  { name: 'Claude', color: '#d4a574' },
  { name: 'Gemini', color: '#8b5cf6' },
  { name: 'Perplexity', color: '#20b2aa' },
  { name: 'Grok', color: '#f59e0b' },
  { name: 'DeepSeek', color: '#3b82f6' },
  { name: 'Copilot', color: '#0078d4' },
  { name: 'Meta AI', color: '#0668E1' }
];

async function generateBanner() {
  const canvas = createCanvas(WIDTH, HEIGHT);
  const ctx = canvas.getContext('2d');

  // Registrar fuentes
  const fontsDir = path.join(__dirname, 'fonts');
  registerFont(path.join(fontsDir, 'Inter-Bold.ttf'), { family: 'Inter', weight: 'bold' });
  registerFont(path.join(fontsDir, 'Inter-Regular.ttf'), { family: 'Inter', weight: 'normal' });

  // 1. Fondo con gradiente
  const gradient = ctx.createLinearGradient(0, 0, WIDTH, HEIGHT);
  gradient.addColorStop(0, '#0a0f1a');
  gradient.addColorStop(0.5, '#111827');
  gradient.addColorStop(1, '#1a1f36');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  // 2. Elementos decorativos sutiles
  ctx.strokeStyle = 'rgba(212, 165, 116, 0.1)';
  ctx.lineWidth = 1;

  // Líneas diagonales sutiles
  for (let i = 0; i < 8; i++) {
    ctx.beginPath();
    ctx.moveTo(WIDTH * 0.7 + i * 50, 0);
    ctx.lineTo(WIDTH * 0.85 + i * 50, HEIGHT);
    ctx.stroke();
  }

  // 3. Círculos decorativos
  ctx.strokeStyle = 'rgba(212, 165, 116, 0.08)';
  ctx.beginPath();
  ctx.arc(WIDTH * 0.1, HEIGHT * 0.5, 150, 0, Math.PI * 2);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(WIDTH * 0.92, HEIGHT * 0.3, 100, 0, Math.PI * 2);
  ctx.stroke();

  // 4. Línea de acento superior
  const lineGradient = ctx.createLinearGradient(0, 0, WIDTH, 0);
  lineGradient.addColorStop(0, 'transparent');
  lineGradient.addColorStop(0.3, BRAND.colors.accent);
  lineGradient.addColorStop(0.7, BRAND.colors.accent);
  lineGradient.addColorStop(1, 'transparent');
  ctx.strokeStyle = lineGradient;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(0, 8);
  ctx.lineTo(WIDTH, 8);
  ctx.stroke();

  // 5. Texto principal
  ctx.shadowColor = 'rgba(0,0,0,0.5)';
  ctx.shadowBlur = 20;
  ctx.shadowOffsetY = 4;

  ctx.fillStyle = BRAND.colors.text;
  ctx.font = 'bold 52px Inter';
  ctx.textAlign = 'center';
  ctx.fillText('Implemento IA que realmente', WIDTH / 2, HEIGHT * 0.38);

  // Segunda línea con acento
  ctx.fillStyle = BRAND.colors.accent;
  ctx.font = 'bold 52px Inter';
  ctx.fillText('funciona en empresas', WIDTH / 2, HEIGHT * 0.55);

  // Reset shadow
  ctx.shadowBlur = 0;
  ctx.shadowOffsetY = 0;

  // 6. Logos de LLMs como círculos con nombres
  const startX = WIDTH * 0.18;
  const spacing = (WIDTH * 0.64) / (LLMS.length - 1);
  const y = HEIGHT * 0.82;
  const circleRadius = 12;

  LLMS.forEach((llm, index) => {
    const x = startX + index * spacing;

    // Círculo con color del LLM
    ctx.fillStyle = llm.color;
    ctx.beginPath();
    ctx.arc(x, y - 8, circleRadius, 0, Math.PI * 2);
    ctx.fill();

    // Nombre debajo
    ctx.fillStyle = BRAND.colors.textMuted;
    ctx.font = 'normal 11px Inter';
    ctx.textAlign = 'center';
    ctx.fillText(llm.name, x, y + 12);
  });

  // 7. Línea conectando los círculos
  ctx.strokeStyle = 'rgba(160, 174, 192, 0.3)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(startX, y - 8);
  ctx.lineTo(startX + (LLMS.length - 1) * spacing, y - 8);
  ctx.stroke();

  // 8. Guardar
  const outputDir = path.join(__dirname, '..', 'public', 'images', 'social');
  const buffer = canvas.toBuffer('image/jpeg', { quality: 0.95 });
  fs.writeFileSync(path.join(outputDir, 'linkedin-banner-nicolas-v1.jpg'), buffer);

  console.log('✅ Banner generado: linkedin-banner-nicolas-v1.jpg');
}

generateBanner().catch(console.error);
