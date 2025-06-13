/**
 * Netlify Visual Editor Konfiguration
 * Diese Datei definiert die Einstellungen für den Visual Editor
 */

import { allBlocks } from './lib/block-definitions.js';

export default {
  // Editor-Einstellungen
  editor: {
    // Aktiviert den Visual Editor
    enabled: true,
    
    // Editor-Modus
    mode: 'blocks',
    
    // Verfügbare Blöcke
    blocks: allBlocks,
    
    // Editor-Theme
    theme: {
      primaryColor: '#7e4b26',
      secondaryColor: '#f2eadf',
      fontFamily: 'Inter, system-ui, sans-serif'
    },
    
    // Toolbar-Konfiguration
    toolbar: {
      position: 'top',
      sticky: true,
      showPreview: true,
      showUndo: true,
      showRedo: true
    },
    
    // Canvas-Einstellungen
    canvas: {
      responsive: true,
      breakpoints: {
        mobile: 768,
        tablet: 1024,
        desktop: 1280
      }
    }
  },
  
  // Block-Kategorien
  categories: [
    {
      id: 'layout',
      name: 'Layout',
      icon: 'layout',
      description: 'Grundlegende Layout-Komponenten'
    },
    {
      id: 'content',
      name: 'Inhalt',
      icon: 'type',
      description: 'Text und Inhalts-Komponenten'
    },
    {
      id: 'media',
      name: 'Medien',
      icon: 'image',
      description: 'Bilder, Videos und andere Medien'
    },
    {
      id: 'navigation',
      name: 'Navigation',
      icon: 'menu',
      description: 'Navigations-Komponenten'
    },
    {
      id: 'branding',
      name: 'Branding',
      icon: 'star',
      description: 'Logo und Branding-Elemente'
    },
    {
      id: 'contact',
      name: 'Kontakt',
      icon: 'message-circle',
      description: 'Kontakt und Kommunikations-Widgets'
    }
  ],
  
  // API-Endpunkte
  api: {
    blocks: '/api/visual-editor/blocks',
    config: '/api/page-config',
    save: '/api/visual-editor/save'
  },
  
  // Seiten-Konfiguration
  pages: {
    // Startseite
    '/': {
      title: 'PPL Management & Records - Startseite',
      description: 'FROM PEOPLE. FOR PEOPLE.',
      template: 'homepage',
      blocks: [
        {
          type: 'VideoBackground',
          id: 'video-bg-1',
          props: {
            videoSrc: '/assets/PPL.mp4'
          }
        },
        {
          type: 'Logo',
          id: 'logo-1',
          props: {
            enableHeroAnimation: true,
            centered: true,
            logoSrc: '/assets/logo/PPL-Logo.svg',
            managementText: 'Management & Records'
          }
        },
        {
          type: 'HeroText',
          id: 'hero-text-1',
          props: {
            firstText: 'FROM PEOPLE.',
            secondText: 'FOR PEOPLE.',
            showLine: true
          }
        },
        {
          type: 'Navigation',
          id: 'navigation-1',
          props: {
            enableHeroAnimation: true
          }
        },
        {
          type: 'Footer',
          id: 'footer-1',
          props: {
            emailAddress: 'info@ppl-mgmt.de',
            showSocialMedia: true,
            showLegalLinks: true,
            showCopyright: true
          }
        },
        {
          type: 'WhatsAppWidget',
          id: 'whatsapp-1',
          props: {
            phoneNumber: '+491234567890',
            message: 'Hallo! Ich interessiere mich für Ihre Services.',
            position: 'bottom-right',
            size: 'medium',
            isHomePage: true
          }
        }
      ]
    }
  },
  
  // Entwicklungseinstellungen
  development: {
    hotReload: true,
    showBlockOutlines: true,
    enableDebugMode: false
  },
  
  // Produktionseinstellungen
  production: {
    optimizeAssets: true,
    minifyOutput: true,
    enableAnalytics: true
  }
};