---
description: Implementar cambios de código de forma segura y profesional
---

Sigue estos pasos maestros para asegurar que el código es robusto y no introduce bugs.

1. **Lectura Profunda**:
   - Lee el archivo completo antes de editar. Entiende el contexto de imports y tipos.

2. **Copia de Seguridad Mental**:
   - Asegúrate de tener claro qué vas a cambiar. Si el cambio es grande, considera usar un archivo temporal o una rama de git.

3. **Edición Precisa**:
   - Usa `replace_file_content` o `multi_replace_file_content` para cambios quirúrgicos.
   - **Evita** reescribir archivos enteros si no es estrictamente necesario.

// turbo
4. **Verificación de Sintaxis**:
   - Ejecuta `npm run build` o `npx tsc --noEmit` en el directorio `web/` para asegurar que no hay errores de TypeScript.
   - Si es un cambio visual, usa `npm run dev` y verifica en el navegador.

5. **Limpieza**:
   - Elimina logs, comentarios innecesarios o código muerto.
   - Formatea el código para que sea consistente con el proyecto.
