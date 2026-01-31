const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const logoDir = path.join(__dirname, '..', 'public', 'images', 'social', 'logos-llm');

const logos = [
  { svg: 'svgl-openai.svg', png: 'final-chatgpt.png' },
  { svg: 'svgl-claude.svg', png: 'final-claude.png' },
  { svg: 'svgl-gemini.svg', png: 'final-gemini.png' },
  { svg: 'svgl-perplexity.svg', png: 'final-perplexity.png' },
  { svg: 'svgl-grok.svg', png: 'final-grok.png' },
  { svg: 'svgl-deepseek.svg', png: 'final-deepseek.png' },
  { svg: 'svgl-copilot.svg', png: 'final-copilot.png' },
  { svg: 'svgl-meta.svg', png: 'final-meta.png' }
];

async function convert() {
  for (const logo of logos) {
    const svgPath = path.join(logoDir, logo.svg);
    const pngPath = path.join(logoDir, logo.png);

    try {
      const svg = fs.readFileSync(svgPath);

      await sharp(svg)
        .resize(96, 96, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .png()
        .toFile(pngPath);

      console.log('✅', logo.png);
    } catch (e) {
      console.log('❌', logo.svg + ':', e.message);
    }
  }
}

convert().then(() => console.log('\n¡Conversión completada!'));
