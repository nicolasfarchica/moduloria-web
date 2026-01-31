---
description: Planificar una nueva funcionalidad o cambio estructural evitando riesgos
---

Este workflow está diseñado para detenerte un segundo, pensar y estructurar antes de tocar una sola línea de código. **No te lo saltes si quieres evitar errores técnicos.**

1. **Análisis de Impacto**:
   - Identifica el archivo principal que vas a tocar.
   - Usa `grep_search` para ver quién más depende de ese archivo.
   - Lee el contenido actual del archivo para entender su lógica.

2. **Definición del Cambio**:
   - Qué quieres lograr (objetivo final).
   - Qué datos entran y qué datos salen (si es una función o componente).

3. **Plan de Acción (Borrador)**:
   - Enumera los pasos técnicos uno por uno.
   - Describe qué herramientas usarás (ej: `replace_file_content`).

4. **Validación de Seguridad**:
   - ¿Este cambio rompe el diseño responsive?
   - ¿Depende de alguna variable de entorno?
   - ¿Cómo vamos a probar que funciona?

5. **Aprobación**:
   - Presenta el plan al usuario y espera su "OK" antes de ejecutar.
