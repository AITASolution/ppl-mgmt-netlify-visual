import { defineBlockComponent } from './blocks.js';

// Import components
import VideoBackground from '../components/blocks/VideoBackground.jsx';
import Logo from '../components/blocks/Logo.jsx';
import HeroText from '../components/blocks/HeroText.jsx';
import Navigation from '../components/blocks/Navigation.jsx';
import Footer from '../components/blocks/Footer.jsx';
import WhatsAppWidget from '../components/blocks/WhatsAppWidget.jsx';

// Import schemas
import VideoBackgroundSchema from '../components/blocks/VideoBackground.schema.json';
import LogoSchema from '../components/blocks/Logo.schema.json';
import HeroTextSchema from '../components/blocks/HeroText.schema.json';
import NavigationSchema from '../components/blocks/Navigation.schema.json';
import FooterSchema from '../components/blocks/Footer.schema.json';
import WhatsAppWidgetSchema from '../components/blocks/WhatsAppWidget.schema.json';

/**
 * Video Background Block
 */
export const VideoBackgroundBlock = defineBlockComponent({
  name: 'VideoBackground',
  component: VideoBackground,
  schema: VideoBackgroundSchema,
  defaultProps: {
    videoSrc: '/assets/PPL.mp4',
    className: ''
  },
  category: 'media',
  icon: 'video',
  description: 'Ein Hintergrundvideo mit optionalem Overlay'
});

/**
 * Logo Block
 */
export const LogoBlock = defineBlockComponent({
  name: 'Logo',
  component: Logo,
  schema: LogoSchema,
  defaultProps: {
    transparent: true,
    inHeader: false,
    enableHeroAnimation: false,
    centered: false,
    logoSrc: '/assets/logo/PPL-Logo.svg',
    managementText: 'Management & Records',
    className: ''
  },
  category: 'branding',
  icon: 'image',
  description: 'PPL Logo mit Management Text'
});

/**
 * Hero Text Block
 */
export const HeroTextBlock = defineBlockComponent({
  name: 'HeroText',
  component: HeroText,
  schema: HeroTextSchema,
  defaultProps: {
    firstText: 'FROM PEOPLE.',
    secondText: 'FOR PEOPLE.',
    showLine: true,
    className: ''
  },
  category: 'content',
  icon: 'type',
  description: 'Animierter Hero-Text mit zwei Teilen'
});

/**
 * Navigation Block
 */
export const NavigationBlock = defineBlockComponent({
  name: 'Navigation',
  component: Navigation,
  schema: NavigationSchema,
  defaultProps: {
    navigationData: [
      {
        label: "TALENT",
        items: [
          { title: "Artist Management", path: "/talent/artist-management" },
          { title: "Booking Representation", path: "/talent/booking" },
          { title: "Brand Collaborations", path: "/talent/brands" }
        ]
      },
      {
        label: "LIVE",
        items: [
          { title: "Event Production", path: "/live/events" },
          { title: "Creative Consulting", path: "/live/consulting" },
          { title: "Sponsorship Partnerships", path: "/live/sponsorship" }
        ]
      },
      {
        label: "BRANDS",
        items: [
          { title: "Brand Consulting", path: "/brands/consulting" },
          { title: "Talent Partnerships", path: "/brands/partnerships" },
          { title: "Fashion Development", path: "/brands/fashion" }
        ]
      },
      {
        label: "TRAVEL",
        items: [
          { title: "Full Concierge", path: "/travel/concierge" },
          { title: "Private Jet Travel", path: "/travel/jet" },
          { title: "VIP Transport", path: "/travel/transport" }
        ]
      }
    ],
    enableHeroAnimation: false,
    className: ''
  },
  category: 'navigation',
  icon: 'menu',
  description: 'Hauptnavigation mit Untermenüs'
});

/**
 * Footer Block
 */
export const FooterBlock = defineBlockComponent({
  name: 'Footer',
  component: Footer,
  schema: FooterSchema,
  defaultProps: {
    emailAddress: 'info@ppl-mgmt.de',
    tiktokUrl: 'https://tiktok.com/@ppl',
    instagramUrl: 'https://instagram.com/ppl',
    showSocialMedia: true,
    showLegalLinks: true,
    showCopyright: true,
    className: ''
  },
  category: 'layout',
  icon: 'layout',
  description: 'Website Footer mit Social Media Links'
});

/**
 * WhatsApp Widget Block
 */
export const WhatsAppWidgetBlock = defineBlockComponent({
  name: 'WhatsAppWidget',
  component: WhatsAppWidget,
  schema: WhatsAppWidgetSchema,
  defaultProps: {
    phoneNumber: '+491234567890',
    message: 'Hallo! Ich interessiere mich für Ihre Services.',
    position: 'bottom-right',
    size: 'medium',
    animationDelay: 5.25,
    isHomePage: false,
    className: ''
  },
  category: 'contact',
  icon: 'message-circle',
  description: 'Schwebendes WhatsApp Kontakt-Widget'
});

/**
 * Alle Block-Definitionen exportieren
 */
export const allBlocks = [
  VideoBackgroundBlock,
  LogoBlock,
  HeroTextBlock,
  NavigationBlock,
  FooterBlock,
  WhatsAppWidgetBlock
];

/**
 * Block Registry für einfachen Zugriff
 */
export const blockRegistry = {
  VideoBackground: VideoBackgroundBlock,
  Logo: LogoBlock,
  HeroText: HeroTextBlock,
  Navigation: NavigationBlock,
  Footer: FooterBlock,
  WhatsAppWidget: WhatsAppWidgetBlock
};