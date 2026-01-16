#!/bin/bash
# Script de deployment automático para ModulorIA

echo "🚀 Iniciando deployment de Google Analytics..."

cd /Users/nicolasfarchica/Desktop/ModulorIA

# Verificar que estamos en la rama correcta
git checkout main

# Cambiar remote a HTTPS
git remote set-url origin https://github.com/nicolasfarchica/moduloria-web.git

# Hacer push (te pedirá username y token)
echo ""
echo "📝 Cuando te pida credenciales:"
echo "   Username: nicolasfarchica"
echo "   Password: [pega tu token de GitHub aquí]"
echo ""

git push origin main

echo ""
echo "✅ Push completado. Vercel desplegará automáticamente en 2-3 minutos."
echo "🌐 Verifica en: https://moduloria.com"
