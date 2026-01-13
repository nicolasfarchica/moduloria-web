const { Client } = require('@notionhq/client');
require('dotenv').config({ path: '.env.local' });

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

async function checkDatabase() {
  try {
    const databaseId = process.env.NOTION_DATABASE_ID;
    console.log('Verificando database:', databaseId);

    const response = await notion.databases.retrieve({
      database_id: databaseId,
    });

    console.log('\n✅ Database encontrada!');
    console.log('Nombre:', response.title[0]?.plain_text || 'Sin nombre');
    console.log('\n📋 Propiedades disponibles:');

    if (response.properties) {
      Object.keys(response.properties).forEach(key => {
        console.log(`  - ${key} (${response.properties[key].type})`);
      });

      console.log('\n✅ Total propiedades:', Object.keys(response.properties).length);
    } else {
      console.log('  ⚠️  No se pudieron cargar las propiedades');
      console.log('  Response:', JSON.stringify(response, null, 2));
    }

  } catch (error) {
    console.error('❌ Error:', error.message);

    if (error.code === 'object_not_found') {
      console.log('\n⚠️  La integración no tiene acceso a la database.');
      console.log('Ve a: https://www.notion.so/' + process.env.NOTION_DATABASE_ID.replace(/-/g, ''));
      console.log('Click en "•••" → "Add connections" → "ModulorIA Integration"');
    }
  }
}

checkDatabase();
