const { Client } = require('@notionhq/client');
require('dotenv').config({ path: '.env.local' });

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

async function createSimpleLead() {
  try {
    const databaseId = process.env.NOTION_DATABASE_ID;
    console.log('Intentando crear lead en:', databaseId);

    // Primero, obtener info de la database
    const db = await notion.databases.retrieve({ database_id: databaseId });
    console.log('\nPropiedades de la database:',Object.keys(db.properties || {}));

    // Intentar crear solo con Name
    const response = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        'Name': {
          title: [{ text: { content: 'Test Simple' } }]
        }
      }
    });

    console.log('\n✅ Lead creado:', response.url);
  } catch (error) {
    console.error('❌ Error:', error.message);
    console.error('Body:', error.body);
  }
}

createSimpleLead();
