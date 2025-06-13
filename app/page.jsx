import HomePage from '../components/HomePage.jsx';

/**
 * Startseite für PPL Management & Records
 * Migriert von ppl-mgmt für Netlify Visual Editor
 */
export default function Page() {
  return (
    <HomePage 
      // Video Background
      videoSrc="/assets/PPL.mp4"
      
      // Logo
      logoSrc="/assets/logo/PPL-Logo.svg"
      managementText="Management & Records"
      
      // Hero Text
      firstText="FROM PEOPLE."
      secondText="FOR PEOPLE."
      
      // Navigation Data
      navigationData={[
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
      
      // Footer
      emailAddress="info@ppl-mgmt.de"
      tiktokUrl="https://tiktok.com/@ppl"
      instagramUrl="https://instagram.com/ppl"
      
      // WhatsApp Widget
      phoneNumber="+491234567890"
      whatsappMessage="Hallo! Ich interessiere mich für Ihre Services."
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
