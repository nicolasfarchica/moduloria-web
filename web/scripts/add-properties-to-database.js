#!/usr/bin/env node

const { Client } = require('@notionhq/client');
require('dotenv').config({ path: '.env.local' });

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

async function addPropertiesToDatabase() {
  const databaseId = process.env.NOTION_DATABASE_ID;

  console.log('🔧 Agregando propiedades a la database:', databaseId, '\n');

  try {
    const response = await notion.databases.update({
      database_id: databaseId,
      properties: {
        // 1. Name ya existe por defecto como Title
        'Name': {
          title: {},
        },

        // 2. Email
        'Email': {
          email: {},
        },

        // 3. Empresa (Rich Text)
        'Empresa': {
          rich_text: {},
        },

        // 4. Teléfono (Phone)
        'Teléfono': {
          phone_number: {},
        },

        // 5. Empleados (Select)
        'Empleados': {
          select: {
            options: [
              { name: '1-10', color: 'blue' },
              { name: '11-50', color: 'green' },
              { name: '51-200', color: 'yellow' },
              { name: '200+', color: 'orange' },
            ],
          },
        },

        // 6. Proyectos Activos (Number)
        'Proyectos Activos': {
          number: {
            format: 'number',
          },
        },

        // 7. Mayor Problema (Rich Text)
        'Mayor Problema': {
          rich_text: {},
          },

        // 8. Presupuesto (Select)
        'Presupuesto': {
          select: {
            options: [
              { name: 'bajo', color: 'gray' },
              { name: 'medio', color: 'blue' },
              { name: 'alto', color: 'green' },
              { name: 'flexible', color: 'purple' },
              { name: 'proyecto-unico', color: 'pink' },
            ],
          },
        },

        // 9. Source (Select)
        'Source': {
          select: {
            options: [
              { name: 'Web - Auditoría', color: 'blue' },
              { name: 'Web - Newsletter', color: 'green' },
              { name: 'LinkedIn', color: 'purple' },
              { name: 'WhatsApp', color: 'orange' },
              { name: 'Referido', color: 'pink' },
            ],
          },
        },

        // 10. Status (Select)
        'Status': {
          select: {
            options: [
              { name: 'Nuevo', color: 'blue' },
              { name: 'Contactado', color: 'yellow' },
              { name: 'Calificado', color: 'green' },
              { name: 'Reunión', color: 'orange' },
              { name: 'Propuesta', color: 'purple' },
              { name: 'Cerrado Ganado', color: 'green' },
              { name: 'Cerrado Perdido', color: 'red' },
              { name: 'Newsletter', color: 'gray' },
            ],
          },
        },

        // 11. Fecha (Date)
        'Fecha': {
          date: {},
        },
      },
    });

    console.log('✅ Propiedades agregadas exitosamente!\n');
    console.log('📋 Propiedades ahora disponibles:');

    if (response.properties) {
      Object.keys(response.properties).forEach(key => {
        console.log(`  - ${key} (${response.properties[key].type})`);
      });
    }

    console.log('\n🔗 URL:', response.url);

    return response;
  } catch (error) {
    console.error('❌ Error:', error.message);
    if (error.body) {
      console.error('Body:', error.body);
    }
    throw error;
  }
}

addPropertiesToDatabase()
  .then(() => {
    console.log('\n🎉 Database lista para usar!');
    console.log('Ahora puedes probar el formulario en /auditoria\n');
  })
  .catch(error => {
    console.error('\n❌ Falló la actualización');
    process.exit(1);
  });
