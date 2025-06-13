/**
 * Netlify Visual Editor Block Definition Helper
 * 
 * Diese Datei stellt Hilfsfunktionen für die Definition von Blöcken
 * im Netlify Visual Editor zur Verfügung.
 */

/**
 * Definiert eine Komponente als Block für den Netlify Visual Editor
 * @param {Object} config - Block-Konfiguration
 * @param {string} config.name - Name des Blocks
 * @param {React.Component} config.component - React-Komponente
 * @param {Object} config.schema - JSON Schema für die Konfiguration
 * @param {Object} config.defaultProps - Standard-Props
 * @returns {Object} Block-Definition
 */
export function defineBlockComponent(config) {
  const { name, component, schema, defaultProps = {} } = config;
  
  return {
    name,
    component,
    schema,
    defaultProps,
    // Netlify Visual Editor spezifische Eigenschaften
    category: 'content',
    icon: 'component',
    previewImage: null,
    ...config
  };
}

/**
 * Registriert mehrere Blöcke für den Visual Editor
 * @param {Array} blocks - Array von Block-Definitionen
 * @returns {Object} Registrierte Blöcke
 */
export function registerBlocks(blocks) {
  const registry = {};
  
  blocks.forEach(block => {
    if (block.name) {
      registry[block.name] = block;
    }
  });
  
  return registry;
}

/**
 * Erstellt ein JSON Schema für Block-Props
 * @param {Object} properties - Schema-Eigenschaften
 * @returns {Object} JSON Schema
 */
export function createBlockSchema(properties) {
  return {
    type: 'object',
    properties,
    additionalProperties: false
  };
}

/**
 * Standard-Schema-Typen für häufige Props
 */
export const schemaTypes = {
  text: {
    type: 'string',
    title: 'Text'
  },
  richText: {
    type: 'string',
    title: 'Rich Text',
    format: 'html'
  },
  image: {
    type: 'string',
    title: 'Bild',
    format: 'uri'
  },
  color: {
    type: 'string',
    title: 'Farbe',
    format: 'color'
  },
  boolean: {
    type: 'boolean',
    title: 'Aktiviert'
  },
  number: {
    type: 'number',
    title: 'Zahl'
  },
  select: (options) => ({
    type: 'string',
    title: 'Auswahl',
    enum: options
  })
};