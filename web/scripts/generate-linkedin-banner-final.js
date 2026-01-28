const { createCanvas, loadImage, registerFont } = require('canvas');
const fs = require('fs');
const path = require('path');

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

const LLMS = [
  { name: 'ChatGPT', file: 'final-chatgpt.png' },
  { name: 'Claude', file: 'final-claude.png' },
  { name: 'Gemini', file: 'final-gemini.png' },
  { name: 'Perplexity', file: 'final-perplexity.png' },
  { name: 'Grok', file: 'final-grok.png' },
  { name: 'DeepSeek', file: 'final-deepseek.png' },
  { name: 'Copilot', file: 'final-copilot.png' },
  { name: 'Meta AI', file: 'final-meta.png' }
];

async function generateBanner() {
  const canvas = createCanvas(WIDTH, HEIGHT);
  const ctx = canvas.getContext('2d');

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

  // 2. Elementos decorativos
  ctx.strokeStyle = 'rgba(212, 165, 116, 0.08)';
  ctx.lineWidth = 1;
  for (let i = 0; i < 8; i++) {
    ctx.beginPath();
    ctx.moveTo(WIDTH * 0.7 + i * 50, 0);
    ctx.lineTo(WIDTH * 0.85 + i * 50, HEIGHT);
    ctx.stroke();
  }

  ctx.strokeStyle = 'rgba(212, 165, 116, 0.05)';
  ctx.beginPath();
  ctx.arc(WIDTH * 0.06, HEIGHT * 0.5, 100, 0, Math.PI * 2);
  ctx.stroke();

  // 3. Línea superior
  const lineGradient = ctx.createLinearGradient(0, 0, WIDTH, 0);
  lineGradient.addColorStop(0, 'transparent');
  lineGradient.addColorStop(0.3, BRAND.colors.accent);
  lineGradient.addColorStop(0.7, BRAND.colors.accent);
  lineGradient.addColorStop(1, 'transparent');
  ctx.strokeStyle = lineGradient;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(0, 6);
  ctx.lineTo(WIDTH, 6);
  ctx.stroke();

  // 4. Texto principal
  ctx.shadowColor = 'rgba(0,0,0,0.5)';
  ctx.shadowBlur = 20;
  ctx.shadowOffsetY = 4;
  ctx.fillStyle = BRAND.colors.text;
  ctx.font = 'bold 48px Inter';
  ctx.textAlign = 'center';
  ctx.fillText('Implemento IA que realmente', WIDTH / 2, HEIGHT * 0.36);

  ctx.fillStyle = BRAND.colors.accent;
  ctx.fillText('funciona en empresas', WIDTH / 2, HEIGHT * 0.52);

  ctx.shadowBlur = 0;
  ctx.shadowOffsetY = 0;

  // 5. Logos de LLMs
  const logoDir = path.join(__dirname, '..', 'public', 'images', 'social', 'logos-llm');
  const startX = WIDTH * 0.12;
  const spacing = (WIDTH * 0.76) / (LLMS.length - 1);
  const y = HEIGHT * 0.80;
  const logoSize = 36;

  for (let i = 0; i < LLMS.length; i++) {
    const llm = LLMS[i];
    const x = startX + i * spacing;

    try {
      const logoPath = path.join(logoDir, llm.file);
      const logo = await loadImage(logoPath);

      // Fondo circular blanco
      ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
      ctx.beginPath();
      ctx.arc(x, y - 6, logoSize / 2 + 5, 0, Math.PI * 2);
      ctx.fill();

      // Borde sutil
      ctx.strokeStyle = 'rgba(212, 165, 116, 0.3)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Logo
      ctx.drawImage(logo, x - logoSize / 2, y - 6 - logoSize / 2, logoSize, logoSize);
    } catch (e) {
      console.log('Error cargando', llm.file, e.message);
    }

    // Nombre
    ctx.fillStyle = BRAND.colors.textMuted;
    ctx.font = 'normal 11px Inter';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    ctx.fillText(llm.name, x, y + 20);
  }

  // 6. Línea conectora
  ctx.strokeStyle = 'rgba(160, 174, 192, 0.2)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(startX, y - 6);
  ctx.lineTo(startX + (LLMS.length - 1) * spacing, y - 6);
  ctx.stroke();

  // Guardar
  const outputPath = path.join(__dirname, '..', 'public', 'images', 'social', 'linkedin-banner-nicolas-final.jpg');
  const buffer = canvas.toBuffer('image/jpeg', { quality: 0.95 });
  fs.writeFileSync(outputPath, buffer);

  console.log('✅ Banner FINAL generado: linkedin-banner-nicolas-final.jpg');
}

generateBanner().catch(console.error);
