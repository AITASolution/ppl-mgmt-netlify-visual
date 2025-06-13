import { NextResponse } from 'next/server';
import { allBlocks } from '../../../../lib/block-definitions.js';

/**
 * API Route für Netlify Visual Editor Block-Registrierung
 * Diese Route stellt alle verfügbaren Blöcke für den Visual Editor bereit
 */
export async function GET() {
  try {
    // Block-Definitionen für Visual Editor formatieren
    const editorBlocks = allBlocks.map(block => ({
      name: block.name,
      displayName: block.name,
      category: block.category || 'content',
      icon: block.icon || 'component',
      description: block.description || '',
      schema: block.schema,
      defaultProps: block.defaultProps || {},
      // Visual Editor spezifische Eigenschaften
      editable: true,
      deletable: true,
      moveable: true,
      // Component-Pfad für den Editor
      componentPath: `components/blocks/${block.name}.jsx`
    }));

    const response = {
      blocks: editorBlocks,
      categories: [
        {
          name: 'layout',
          label: 'Layout',
          description: 'Grundlegende Layout-Komponenten'
        },
        {
          name: 'content',
          label: 'Inhalt',
          description: 'Text und Inhalts-Komponenten'
        },
        {
          name: 'media',
          label: 'Medien',
          description: 'Bilder, Videos und andere Medien'
        },
        {
          name: 'navigation',
          label: 'Navigation',
          description: 'Navigations-Komponenten'
        },
        {
          name: 'branding',
          label: 'Branding',
          description: 'Logo und Branding-Elemente'
        },
        {
          name: 'contact',
          label: 'Kontakt',
          description: 'Kontakt und Kommunikations-Widgets'
        }
      ],
      version: '1.0.0',
      timestamp: new Date().toISOString()
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('Error in visual-editor blocks API:', error);
    return NextResponse.json(
      { error: 'Failed to load blocks', message: error.message },
      { status: 500 }
    );
  }
}

/**
 * POST Route für Block-Updates vom Visual Editor
 */
export async function POST(request) {
  try {
    const body = await request.json();
    const { blockId, props, action } = body;

    console.log('Visual Editor block update:', { blockId, action, props });

    // Hier würde normalerweise die Block-Konfiguration gespeichert werden
    // Für Demo-Zwecke loggen wir nur die Änderungen

    return NextResponse.json({
      success: true,
      blockId,
      action,
      timestamp: new Date().toISOString(),
      message: 'Block updated successfully'
    });
  } catch (error) {
    console.error('Error updating block:', error);
    return NextResponse.json(
      { error: 'Failed to update block', message: error.message },
      { status: 500 }
    );
  }
}