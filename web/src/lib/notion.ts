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
  nombre?: string;
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

    // Truncate text fields to prevent Notion API errors (max 2000 chars)
    const truncate = (text: string, maxLength: number = 2000) =>
      text.length > maxLength ? text.substring(0, maxLength - 3) + '...' : text;

    console.log('Creating Notion lead with data:', {
      nombre: data.nombre,
      empresa: data.empresa,
      email: data.email,
      empleados: data.empleados,
      presupuesto: data.presupuesto,
    });

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
        // Empleados (Text) - Changed from Select for reliability
        'Empleados': {
          rich_text: [
            {
              text: {
                content: data.empleados,
              },
            },
          ],
        },
        // Proyectos Activos (Number)
        'Proyectos Activos': {
          number: parseInt(data.proyectosActivos) || 0,
        },
        // Mayor Problema (Text) - truncated to prevent API errors
        'Mayor Problema': {
          rich_text: [
            {
              text: {
                content: truncate(data.mayorProblema),
              },
            },
          ],
        },
        // Presupuesto (Text) - optional, changed from Select for reliability
        ...(data.presupuesto && {
          'Presupuesto': {
            rich_text: [
              {
                text: {
                  content: data.presupuesto,
                },
              },
            ],
          },
        }),
        // Source (Select) - fixed value that exists in Notion
        'Source': {
          select: {
            name: 'Web - Auditoría',
          },
        },
        // Status (Select) - fixed value that exists in Notion
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
  } catch (error: unknown) {
    console.error('Error creating Notion lead:', error);

    // Log detailed error info for debugging
    if (error && typeof error === 'object' && 'body' in error) {
      console.error('Notion API error body:', (error as { body: unknown }).body);
    }
    if (error && typeof error === 'object' && 'code' in error) {
      console.error('Notion API error code:', (error as { code: unknown }).code);
    }

    throw error;
  }
}

/**
 * Creates a newsletter subscription entry in Notion (separate database)
 * Database: Suscriptores Newsletter (ID: 1bf2788f3a7f45608f437a9280e0b691)
 */
export async function createNewsletterSubscription(data: NewsletterFormData) {
  try {
    const databaseId = process.env.NOTION_NEWSLETTER_DB_ID;

    if (!databaseId) {
      throw new Error('NOTION_NEWSLETTER_DB_ID is not configured');
    }

    const response = await notion.pages.create({
      parent: {
        database_id: databaseId,
      },
      properties: {
        // Email (Title field in new database)
        'Email': {
          title: [
            {
              text: {
                content: data.email,
              },
            },
          ],
        },
        // Nombre (Text) - optional
        ...(data.nombre && {
          'Nombre': {
            rich_text: [
              {
                text: {
                  content: data.nombre,
                },
              },
            ],
          },
        }),
        // Fecha Suscripción (Date)
        'Fecha Suscripción': {
          date: {
            start: new Date().toISOString(),
          },
        },
        // Activo (Checkbox) - default true
        'Activo': {
          checkbox: true,
        },
        // Source (Text)
        'Source': {
          rich_text: [
            {
              text: {
                content: data.source || 'Web - Newsletter',
              },
            },
          ],
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
