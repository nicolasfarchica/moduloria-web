#!/usr/bin/env node

/**
 * Script para crear la database "Leads - ModulorIA" en Notion
 *
 * Uso:
 *   node scripts/setup-notion-database.js
 *
 * Requiere:
 *   - NOTION_API_KEY en .env.local
 *   - NOTION_PAGE_ID (ID de la página padre donde crear la database)
 */

const { Client } = require('@notionhq/client');
require('dotenv').config({ path: '.env.local' });

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

// ID de la página ModulorIA donde crear la database
const PARENT_PAGE_ID = process.env.NOTION_DATABASE_ID || '294dd4a52f438007b3affd013b50c7f8';

async function createLeadsDatabase() {
  console.log('🚀 Creando database "Leads - ModulorIA" en Notion...\n');

  try {
    const response = await notion.databases.create({
      parent: {
        type: 'page_id',
        page_id: PARENT_PAGE_ID,
      },
      title: [
        {
          type: 'text',
          text: {
            content: 'Leads - ModulorIA',
          },
        },
      ],
      properties: {
        // 1. Nombre (Title) - Campo principal
        'Nombre': {
          title: {},
        },

        // 2. Email (Email)
        'Email': {
          email: {},
        },

        // 3. Empresa (Rich Text)
        'Empresa': {
          rich_text: {},
        },

        // 4. Teléfono (Phone Number)
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
              { name: 'Directo', color: 'gray' },
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

    console.log('✅ Database creada exitosamente!\n');
    console.log('📊 Database ID:', response.id);
    console.log('🔗 URL:', response.url);
    console.log('\n📝 Próximos pasos:');
    console.log('1. Actualiza NOTION_DATABASE_ID en .env.local con:', response.id);
    console.log('2. Verifica que la integration tiene acceso (Add connections)');
    console.log('3. Prueba el formulario en /auditoria\n');

    return response;
  } catch (error) {
    console.error('❌ Error creando database:', error);

    if (error.code === 'object_not_found') {
      console.error('\n⚠️  La página padre no existe o la integration no tiene acceso.');
      console.error('Solución:');
      console.error('1. Ve a: https://www.notion.so/' + PARENT_PAGE_ID);
      console.error('2. Click en "•••" → "Add connections"');
      console.error('3. Selecciona "ModulorIA Integration"');
      console.error('4. Ejecuta este script nuevamente\n');
    } else if (error.code === 'unauthorized') {
      console.error('\n⚠️  Token de Notion inválido.');
      console.error('Verifica que NOTION_API_KEY en .env.local es correcto.\n');
    }

    throw error;
  }
}

// Función para crear un lead de prueba
async function createTestLead(databaseId) {
  console.log('\n🧪 Creando lead de prueba...\n');

  try {
    const response = await notion.pages.create({
      parent: {
        database_id: databaseId,
      },
      properties: {
        'Nombre': {
          title: [
            {
              text: {
                content: 'Test Lead - Sistema Funcionando',
              },
            },
          ],
        },
        'Email': {
          email: 'test@moduloria.com',
        },
        'Empresa': {
          rich_text: [
            {
              text: {
                content: 'ModulorIA Test',
              },
            },
          ],
        },
        'Teléfono': {
          phone_number: '+34 600 000 000',
        },
        'Empleados': {
          select: {
            name: '11-50',
          },
        },
        'Proyectos Activos': {
          number: 5,
        },
        'Mayor Problema': {
          rich_text: [
            {
              text: {
                content: 'Este es un lead de prueba creado automáticamente por el script de setup.',
              },
            },
          ],
        },
        'Presupuesto': {
          select: {
            name: 'medio',
          },
        },
        'Source': {
          select: {
            name: 'Web - Auditoría',
          },
        },
        'Status': {
          select: {
            name: 'Nuevo',
          },
        },
        'Fecha': {
          date: {
            start: new Date().toISOString(),
          },
        },
      },
    });

    console.log('✅ Lead de prueba creado exitosamente!');
    console.log('🔗 URL:', response.url, '\n');

    return response;
  } catch (error) {
    console.error('❌ Error creando lead de prueba:', error.message);
    throw error;
  }
}

// Ejecutar script
async function main() {
  console.log('\n🎯 Setup Database Notion - ModulorIA\n');
  console.log('Parent Page ID:', PARENT_PAGE_ID);
  console.log('API Key:', process.env.NOTION_API_KEY ? '✓ Configurado' : '✗ No configurado');
  console.log('─'.repeat(50) + '\n');

  if (!process.env.NOTION_API_KEY) {
    console.error('❌ NOTION_API_KEY no está configurado en .env.local');
    process.exit(1);
  }

  try {
    // Crear database
    const database = await createLeadsDatabase();

    // Crear lead de prueba
    await createTestLead(database.id);

    console.log('🎉 Setup completado exitosamente!\n');
    console.log('Actualiza tu .env.local:');
    console.log(`NOTION_DATABASE_ID=${database.id}\n`);

  } catch (error) {
    console.error('\n❌ Setup falló:', error.message);
    process.exit(1);
  }
}

// Solo ejecutar si se corre directamente
if (require.main === module) {
  main();
}

module.exports = { createLeadsDatabase, createTestLead };
