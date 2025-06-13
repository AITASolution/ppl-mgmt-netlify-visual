/**
 * Netlify Visual Editor Blocks Konfiguration
 * 
 * Diese Datei definiert alle verfügbaren Blöcke für den Visual Editor
 */

import { allBlocks, blockRegistry } from './lib/block-definitions.js';

export default {
  // Alle verfügbaren Blöcke
  blocks: allBlocks,
  
  // Block Registry für einfachen Zugriff
  registry: blockRegistry,
  
  // Kategorien für die Organisation im Editor
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
  
  // Standard-Einstellungen für den Editor
  settings: {
    // Responsive Breakpoints
    breakpoints: {
      mobile: 768,
      tablet: 1024,
      desktop: 1280
    },
    
    // Standard-Farben für den Editor
    colors: {
      primary: '#000000',
      secondary: '#7e4b26',
      warmBackground: '#f2eadf',
      white: '#ffffff',
      gray: {
        100: '#f7fafc',
        200: '#edf2f7',
        300: '#e2e8f0',
        400: '#cbd5e0',
        500: '#a0aec0',
        600: '#718096',
        700: '#4a5568',
        800: '#2d3748',
        900: '#1a202c'
      }
    },
    
    // Standard-Schriftarten
    fonts: {
      serif: ['Georgia', 'serif'],
      sansSerif: ['Inter', 'system-ui', 'sans-serif'],
      mono: ['Menlo', 'Monaco', 'monospace']
    },
    
    // Standard-Abstände
    spacing: {
      xs: '0.25rem',
      sm: '0.5rem',
      md: '1rem',
      lg: '1.5rem',
      xl: '2rem',
      '2xl': '3rem',
      '3xl': '4rem'
    }
  },
  
  // Template-Definitionen für vorgefertigte Layouts
  templates: [
    {
      name: 'homepage',
      label: 'PPL Startseite',
      description: 'Vollständige Startseite mit allen Komponenten',
      blocks: [
        {
          type: 'VideoBackground',
          props: {
            videoSrc: '/assets/PPL.mp4'
          }
        },
        {
          type: 'Logo',
          props: {
            enableHeroAnimation: true,
            centered: true,
            logoSrc: '/assets/logo/PPL-Logo.svg',
            managementText: 'Management & Records'
          }
        },
        {
          type: 'HeroText',
          props: {
            firstText: 'FROM PEOPLE.',
            secondText: 'FOR PEOPLE.',
            showLine: true
          }
        },
        {
          type: 'Navigation',
          props: {
            enableHeroAnimation: true
          }
        },
        {
          type: 'Footer',
          props: {
            emailAddress: 'info@ppl-mgmt.de',
            showSocialMedia: true,
            showLegalLinks: true,
            showCopyright: true
          }
        },
        {
          type: 'WhatsAppWidget',
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
  ]
};