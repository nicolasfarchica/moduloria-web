#!/usr/bin/env node

const { Client } = require('@notionhq/client');
require('dotenv').config({ path: '.env.local' });

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const PARENT_PAGE_ID = '294dd4a52f438007b3affd013b50c7f8';

async function recreateDatabase() {
  console.log('🔥 Recreando database "Leads - ModulorIA" desde cero...\n');

  try {
    // Paso 1: Eliminar database antigua (archivarla)
    const oldDatabaseId = process.env.NOTION_DATABASE_ID;
    if (oldDatabaseId && oldDatabaseId !== PARENT_PAGE_ID) {
      try {
        console.log('📦 Archivando database anterior:', oldDatabaseId);
        await notion.pages.update({
          page_id: oldDatabaseId,
          archived: true,
        });
        console.log('✅ Database anterior archivada\n');
      } catch (e) {
        console.log('⚠️  No se pudo archivar (probablemente ya no existe)\n');
      }
    }

    // Paso 2: Crear nueva database con TODAS las propiedades
    console.log('🆕 Creando nueva database con todas las propiedades...\n');

    const response = await notion.databases.create({
      parent: {
        type: 'page_id',
        page_id: PARENT_PAGE_ID,
      },
      title: [
        {
          type: 'text',
          text: {
            content: 'Leads - ModulorIA ✨',
          },
        },
      ],
      icon: {
        type: 'emoji',
        emoji: '📊',
      },
      properties: {
        // 1. Name (Title) - SIEMPRE debe llamarse exactamente "Name" o crear con "title"
        'Name': {
          title: {},
        },

        // 2. Email
        'Email': {
          email: {},
        },

        // 3. Empresa
        'Empresa': {
          rich_text: {},
        },

        // 4. Teléfono
        'Teléfono': {
          phone_number: {},
        },

        // 5. Empleados (Select con opciones)
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

        // 6. Proyectos Activos
        'Proyectos Activos': {
          number: {
            format: 'number',
          },
        },

        // 7. Mayor Problema
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

        // 11. Fecha
        'Fecha': {
          date: {},
        },
      },
    });

    console.log('✅ Database creada exitosamente!\n');
    console.log('📊 Database ID:', response.id);
    console.log('🔗 URL:', response.url);
    console.log('\n📋 Propiedades creadas:');

    if (response.properties) {
      Object.keys(response.properties).forEach(key => {
        console.log(`  ✓ ${key} (${response.properties[key].type})`);
      });
    }

    console.log('\n📝 IMPORTANTE:');
    console.log('Actualiza tu .env.local con este Database ID:');
    console.log(`NOTION_DATABASE_ID=${response.id}`);
    console.log('\n');

    return response;
  } catch (error) {
    console.error('❌ Error:', error.message);
    if (error.body) {
      console.error('Details:', error.body);
    }
    throw error;
  }
}

// Ejecutar
recreateDatabase()
  .then(db => {
    console.log('🎉 ¡Database lista para usar!');
    console.log('\nPróximos pasos:');
    console.log('1. Actualiza NOTION_DATABASE_ID en .env.local');
    console.log('2. Reinicia el servidor: npm run dev');
    console.log('3. Prueba el formulario en /auditoria\n');
  })
  .catch(error => {
    console.error('\n💥 Falló la creación');
    process.exit(1);
  });
