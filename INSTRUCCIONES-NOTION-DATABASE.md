# 📊 Instrucciones: Crear Database de Leads en Notion

## 🎯 Paso 1: Crear la Database

1. Ve a tu página de Notion: https://www.notion.so/Moduloria-294dd4a52f438007b3affd013b50c7f8
2. Dentro de esa página, crea una **nueva Database** (puedes usar `/database`)
3. Nómbrala: **"Leads - ModulorIA"**

---

## 📋 Paso 2: Configurar las Propiedades (Columnas)

Crea las siguientes propiedades **exactamente con estos nombres**:

| Propiedad | Tipo | Valores/Opciones |
|-----------|------|------------------|
| **Nombre** | Title | (texto libre) |
| **Email** | Email | (correo electrónico) |
| **Empresa** | Text | (texto libre) |
| **Teléfono** | Phone | (número telefónico) |
| **Empleados** | Select | `1-10`, `11-50`, `51-200`, `200+` |
| **Proyectos Activos** | Number | (número entero) |
| **Mayor Problema** | Text | (texto largo) |
| **Presupuesto** | Select | `bajo`, `medio`, `alto`, `flexible`, `proyecto-unico` |
| **Source** | Select | `Web - Auditoría`, `Web - Newsletter`, `LinkedIn`, `WhatsApp`, `Referido` |
| **Status** | Select | `Nuevo`, `Contactado`, `Calificado`, `Reunión`, `Propuesta`, `Cerrado Ganado`, `Cerrado Perdido`, `Newsletter` |
| **Fecha** | Date | (fecha automática) |

---

## 🎨 Paso 3: Configurar los Colores de Status (Opcional pero Recomendado)

Para la propiedad **Status**, asigna estos colores:

- 🔵 **Nuevo** → Blue
- 🟡 **Contactado** → Yellow
- 🟢 **Calificado** → Green
- 🟠 **Reunión** → Orange
- 🟣 **Propuesta** → Purple
- ✅ **Cerrado Ganado** → Green (fondo)
- ❌ **Cerrado Perdido** → Red
- 📧 **Newsletter** → Gray

---

## 🔗 Paso 4: Obtener el Database ID

1. Abre la database en **vista completa** (full page)
2. Copia la URL de tu navegador. Se verá algo así:
   ```
   https://www.notion.so/294dd4a52f438007b3affd013b50c7f8?v=...
   ```
3. El **Database ID** es la parte ANTES del `?v=`:
   ```
   294dd4a52f438007b3affd013b50c7f8
   ```

**IMPORTANTE**: Este ID ya está configurado en tu `.env.local` como `NOTION_DATABASE_ID`. Si es diferente, actualízalo.

---

## 🔐 Paso 5: Dar Permisos a la Integración

1. En la página de la database, click en **"•••"** (esquina superior derecha)
2. Click en **"Add connections"**
3. Busca **"ModulorIA Integration"** y selecciónala
4. Click **"Confirm"**

✅ **Ya está!** Ahora la integration puede escribir en esta database.

---

## 🎬 Paso 6: Crear Vistas Útiles (Opcional)

### Vista 1: Pipeline Kanban
- Tipo: **Board**
- Agrupar por: **Status**
- Filtrar: Status no es "Newsletter"
- Ordenar: Fecha (más reciente primero)

### Vista 2: Nuevos Leads
- Tipo: **Table**
- Filtrar: Status = "Nuevo"
- Ordenar: Fecha (más reciente primero)

### Vista 3: Newsletter
- Tipo: **Table**
- Filtrar: Status = "Newsletter"
- Mostrar solo: Nombre, Email, Fecha, Source

---

## ✅ Verificación Final

Una vez configurado todo, verifica que:

- [ ] La database tiene **todas las propiedades** listadas arriba
- [ ] Los nombres de las propiedades son **exactamente iguales** (case-sensitive)
- [ ] La integración **ModulorIA Integration** tiene acceso
- [ ] El `NOTION_DATABASE_ID` en `.env.local` es correcto

---

## 🧪 Prueba Manual

Puedes probar creando una entrada manual en Notion para verificar que los tipos de datos son correctos.

**Ejemplo de entrada:**
- Nombre: Test Lead
- Email: test@ejemplo.com
- Empresa: Empresa Test
- Teléfono: +34 600 000 000
- Empleados: 11-50
- Proyectos Activos: 5
- Mayor Problema: Prueba del sistema
- Presupuesto: medio
- Source: Web - Auditoría
- Status: Nuevo
- Fecha: (hoy)

Si puedes crear esta entrada sin problemas, el sistema está listo! 🎉

---

## 📞 Próximos Pasos

Una vez que la database esté lista:

1. Reinicia el servidor de desarrollo: `npm run dev`
2. Prueba el formulario en: http://localhost:3000/auditoria
3. Envía un formulario de prueba
4. Verifica que aparezca en tu Notion database

---

**Creado:** 2026-01-13
**Actualizado:** 2026-01-13
