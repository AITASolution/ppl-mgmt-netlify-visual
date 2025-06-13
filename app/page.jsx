import HomePage from '../components/HomePage.jsx';

/**
 * Startseite für PPL Management & Records
 * Migriert von ppl-mgmt für Netlify Visual Editor
 *
 * Diese Seite wird dynamisch gerendert für Netlify Visual Editor Kompatibilität
 */

// Force dynamic rendering
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function Page() {
  // Dynamische Datenabfrage von API zur Laufzeit
  let pageConfig;
  
  try {
    // Fetch configuration from API (simuliert CMS/Headless System)
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/page-config`, {
      cache: 'no-store' // Verhindert Caching für echte Dynamik
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch page config');
    }
    
    const config = await response.json();
    pageConfig = config.content;
  } catch (error) {
    console.error('Error fetching page config:', error);
    
    // Fallback-Konfiguration
    pageConfig = {
      video: { src: "/assets/PPL.mp4", overlay: true },
      logo: { src: "/assets/logo/PPL-Logo.svg", text: "Management & Records", transparent: true, centered: true },
      hero: { firstText: "FROM PEOPLE.", secondText: "FOR PEOPLE.", showLine: true },
      navigation: [], // Wird unten definiert
      footer: { email: 'info@ppl-mgmt.de', showSocialMedia: true, showLegalLinks: true, showCopyright: true },
      whatsapp: { phoneNumber: '+491234567890', message: 'Hallo! Ich interessiere mich für Ihre Services.', position: 'bottom-right', size: 'medium' }
    };
  }

  return (
    <HomePage
      // Video Background - dynamisch von API
      videoSrc={pageConfig.video?.src || "/assets/PPL.mp4"}
      
      // Logo - dynamisch von API
      logoSrc={pageConfig.logo?.src || "/assets/logo/PPL-Logo.svg"}
      managementText={pageConfig.logo?.text || "Management & Records"}
      
      // Hero Text - dynamisch von API
      firstText={pageConfig.hero?.firstText || "FROM PEOPLE."}
      secondText={pageConfig.hero?.secondText || "FOR PEOPLE."}
      
      // Navigation Data - dynamisch von API
      navigationData={pageConfig.navigation || [
        {
          label: "TALENT",
          items: [
            { title: "Artist Management", path: "/talent/artist-management" },
            { title: "Booking Representation", path: "/talent/booking" },
            { title: "Brand Collaborations", path: "/talent/brands" },
            { title: "Talent Development", path: "/talent/development" },
            { title: "Label A&R Services", path: "/talent/label-ar" },
            { title: "Admin Legal Support", path: "/talent/admin-legal" }
          ]
        },
        {
          label: "LIVE",
          items: [
            { title: "Event Production", path: "/live/events" },
            { title: "Creative Consulting", path: "/live/consulting" },
            { title: "Sponsorship Partnerships", path: "/live/sponsorship" },
            { title: "Modular Services", path: "/live/modular" },
            { title: "Talent Booking", path: "/live/talent-booking" }
          ]
        },
        {
          label: "BRANDS",
          items: [
            { title: "Brand Consulting", path: "/brands/consulting" },
            { title: "Brand Talent Partnerships", path: "/brands/partnerships" },
            { title: "Fashion Brand Development", path: "/brands/fashion" }
          ]
        },
        {
          label: "TRAVEL",
          items: [
            { title: "Full Concierge", path: "/travel/concierge" },
            { title: "Private Jet Travel", path: "/travel/jet" },
            { title: "VIP Transport Logistics", path: "/travel/transport" },
            { title: "Hotel Stay", path: "/travel/hotel" },
            { title: "Lifestyle Requests", path: "/travel/lifestyle" }
          ]
        }
      ]}
      
      // Footer - dynamisch von API
      emailAddress={pageConfig.footer?.email || "info@ppl-mgmt.de"}
      tiktokUrl={pageConfig.footer?.social?.tiktok || "https://tiktok.com/@ppl"}
      instagramUrl={pageConfig.footer?.social?.instagram || "https://instagram.com/ppl"}
      
      // WhatsApp Widget - dynamisch von API
      phoneNumber={pageConfig.whatsapp?.phoneNumber || "+491234567890"}
      whatsappMessage={pageConfig.whatsapp?.message || "Hallo! Ich interessiere mich für Ihre Services."}
    />
  );
}

/**
 * Metadata für die Seite
 */
export const metadata = {
  title: 'PPL Management & Records - FROM PEOPLE. FOR PEOPLE.',
  description: 'PPL Management & Records bietet umfassende Services in den Bereichen Talent Management, Live Events, Brand Consulting und Travel Concierge.',
  keywords: 'PPL, Management, Records, Talent, Live Events, Brand Consulting, Travel, Concierge',
  openGraph: {
    title: 'PPL Management & Records',
    description: 'FROM PEOPLE. FOR PEOPLE.',
    type: 'website',
    locale: 'de_DE',
  },
};
