import { Client } from '@notionhq/client';

// Initialize Notion client
const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export interface AuditoriaFormData {
  nombre: string;
  empresa: string;
  email: string;
  telefono: string;
  empleados: string;
  proyectosActivos: string;
  mayorProblema: string;
  presupuesto?: string;
}

export interface NewsletterFormData {
  email: string;
  source?: string;
}

/**
 * Creates a new lead entry in Notion database
 */
export async function createNotionLead(data: AuditoriaFormData) {
  try {
    const databaseId = process.env.NOTION_DATABASE_ID;

    if (!databaseId) {
      throw new Error('NOTION_DATABASE_ID is not configured');
    }

    const response = await notion.pages.create({
      parent: {
        database_id: databaseId,
      },
      properties: {
        // Name (Title) - Notion usa "Name" por defecto
        'Name': {
          title: [
            {
              text: {
                content: data.nombre,
              },
            },
          ],
        },
        // Email
        'Email': {
          email: data.email,
        },
        // Empresa (Text)
        'Empresa': {
          rich_text: [
            {
              text: {
                content: data.empresa,
              },
            },
          ],
        },
        // Teléfono (Phone)
        'Teléfono': {
          phone_number: data.telefono,
        },
        // Empleados (Select)
        'Empleados': {
          select: {
            name: data.empleados,
          },
        },
        // Proyectos Activos (Number)
        'Proyectos Activos': {
          number: parseInt(data.proyectosActivos) || 0,
        },
        // Mayor Problema (Text)
        'Mayor Problema': {
          rich_text: [
            {
              text: {
                content: data.mayorProblema,
              },
            },
          ],
        },
        // Presupuesto (Select) - optional
        ...(data.presupuesto && {
          'Presupuesto': {
            select: {
              name: data.presupuesto,
            },
          },
        }),
        // Source (Select)
        'Source': {
          select: {
            name: 'Web - Auditoría',
          },
        },
        // Status (Select) - default to "Nuevo"
        'Status': {
          select: {
            name: 'Nuevo',
          },
        },
        // Fecha (Date)
        'Fecha': {
          date: {
            start: new Date().toISOString(),
          },
        },
      },
    });

    return {
      success: true,
      pageId: response.id,
    };
  } catch (error) {
    console.error('Error creating Notion lead:', error);
    throw error;
  }
}

/**
 * Creates a newsletter subscription entry in Notion
 */
export async function createNewsletterSubscription(data: NewsletterFormData) {
  try {
    const databaseId = process.env.NOTION_DATABASE_ID;

    if (!databaseId) {
      throw new Error('NOTION_DATABASE_ID is not configured');
    }

    const response = await notion.pages.create({
      parent: {
        database_id: databaseId,
      },
      properties: {
        'Name': {
          title: [
            {
              text: {
                content: 'Newsletter Subscriber',
              },
            },
          ],
        },
        'Email': {
          email: data.email,
        },
        'Source': {
          select: {
            name: data.source || 'Web - Newsletter',
          },
        },
        'Status': {
          select: {
            name: 'Newsletter',
          },
        },
        'Fecha': {
          date: {
            start: new Date().toISOString(),
          },
        },
      },
    });

    return {
      success: true,
      pageId: response.id,
    };
  } catch (error) {
    console.error('Error creating newsletter subscription:', error);
    throw error;
  }
}

/**
 * Test Notion connection
 */
export async function testNotionConnection() {
  try {
    const response = await notion.users.me({});
    return {
      success: true,
      user: response,
    };
  } catch (error) {
    console.error('Error testing Notion connection:', error);
    return {
      success: false,
      error,
    };
  }
}
