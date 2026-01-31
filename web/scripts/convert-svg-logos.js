const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const logoDir = path.join(__dirname, '..', 'public', 'images', 'social', 'logos-llm');

// Logos a convertir con sus colores
const logos = [
  { svg: 'gemini-simple.svg', png: 'gemini-icon.png', color: '#8b5cf6' },
  { svg: 'perplexity-simple.svg', png: 'perplexity-icon.png', color: '#20b2aa' },
  { svg: 'copilot-simple.svg', png: 'copilot-icon.png', color: '#0078d4' },
  { svg: 'meta-simple.svg', png: 'meta-icon.png', color: '#0668E1' },
  { svg: 'claude-simple.svg', png: 'claude-icon.png', color: '#d4a574' }
];

async function convertSvgToPng() {
  for (const logo of logos) {
    const svgPath = path.join(logoDir, logo.svg);
    const pngPath = path.join(logoDir, logo.png);

    try {
      // Leer SVG y modificar el color
      let svgContent = fs.readFileSync(svgPath, 'utf8');

      // Agregar fill color al SVG
      svgContent = svgContent.replace('<svg', '<svg fill="' + logo.color + '"');

      // Convertir a PNG con fondo transparente
      await sharp(Buffer.from(svgContent))
        .resize(128, 128)
        .png()
        .toFile(pngPath);

      console.log('✅ ' + logo.png);
    } catch (e) {
      console.log('❌ ' + logo.svg + ': ' + e.message);
    }
  }
}

convertSvgToPng().then(() => console.log('\nConversión completada'));
