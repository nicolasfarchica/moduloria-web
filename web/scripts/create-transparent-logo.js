const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');
const path = require('path');

async function createTransparentLogo() {
  const size = 500;
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');
  
  // Fondo completamente transparente
  ctx.clearRect(0, 0, size, size);
  
  // Dibujar círculo dorado (solo el borde)
  const centerX = size / 2;
  const centerY = size / 2;
  const radius = size / 2 - 20;
  
  ctx.strokeStyle = '#d4a574';
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
  ctx.stroke();
  
  // Cargar y dibujar la M
  const logoM = await loadImage(path.join(__dirname, '..', 'public', 'images', 'moduloria-logo-v2.png'));
  const mSize = size * 0.55;
  const mX = (size - mSize) / 2;
  const mY = (size - mSize) / 2;
  ctx.drawImage(logoM, mX, mY, mSize, mSize);
  
  // Guardar como PNG con transparencia
  const buffer = canvas.toBuffer('image/png');
  const outputPath = path.join(__dirname, '..', 'public', 'images', 'moduloria-logo-transparent.png');
  fs.writeFileSync(outputPath, buffer);
  
  console.log('✅ Logo transparente creado:', outputPath);
}

createTransparentLogo().catch(console.error);
