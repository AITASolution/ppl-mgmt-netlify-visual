'use client';

import React, { useEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";

// Import block components
import VideoBackground from "./blocks/VideoBackground.jsx";
import Logo from "./blocks/Logo.jsx";
import HeroText from "./blocks/HeroText.jsx";
import Navigation from "./blocks/Navigation.jsx";
import Footer from "./blocks/Footer.jsx";
import WhatsAppWidget from "./blocks/WhatsAppWidget.jsx";

/**
 * HomePage Komponente mit Master Animation Timeline
 * Migriert von ppl-mgmt für Netlify Visual Editor
 */
const HomePage = ({
  // Video Background Props
  videoSrc = "/assets/PPL.mp4",
  
  // Logo Props
  logoSrc = "/assets/logo/PPL-Logo.svg",
  managementText = "Management & Records",
  
  // Hero Text Props
  firstText = "FROM PEOPLE.",
  secondText = "FOR PEOPLE.",
  
  // Navigation Props
  navigationData = [
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
  
  // Footer Props
  emailAddress = "info@ppl-mgmt.de",
  tiktokUrl = "https://tiktok.com/@ppl",
  instagramUrl = "https://instagram.com/ppl",
  
  // WhatsApp Widget Props
  phoneNumber = "+491234567890",
  whatsappMessage = "Hallo! Ich interessiere mich für Ihre Services."
}) => {
  const logoRef = useRef(null);
  const videoRef = useRef(null);
  const heroTextRef = useRef(null);
  const navigationRef = useRef(null);
  const footerRef = useRef(null);
  const whatsAppRef = useRef(null);
  
  // Master Timeline Ref für Hero-Komponente
  const masterTimelineRef = useRef(null);

  useEffect(() => {
    // Master Timeline für die gesamte Startseiten-Animation
    const masterTimeline = gsap.timeline();
    masterTimelineRef.current = masterTimeline;

    // Warten bis alle Refs verfügbar sind
    const checkRefs = () => {
      if (logoRef.current?.logoElement && logoRef.current?.textElement && videoRef.current?.videoElement && whatsAppRef.current) {
        // Phase 1-4 werden von HeroText-Komponente gesteuert
        // Hier definieren wir Phase 5-8 in finaler Reihenfolge
        
        // Phase 5: Logo Animation - startet nach Navigation (ca. 3.45s)
        masterTimeline.to(logoRef.current.logoElement, {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "power2.out"
        }, 3.45);

        // Phase 6: "MANAGEMENT & RECORDS" Text Animation - nach Logo (ca. 3.95s)
        // Desktop Version
        masterTimeline.to(logoRef.current.textElement, {
          opacity: 1,
          y: 0,
          duration: 0.3,
          ease: "power2.out"
        }, 3.95);

        // Mobile Version (falls vorhanden)
        if (logoRef.current.mobileTextElement) {
          masterTimeline.to(logoRef.current.mobileTextElement, {
            opacity: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out"
          }, 3.95);
        }

        // Phase 7: Video Background Animation - finale Phase (ca. 4.25s)
        masterTimeline.to(videoRef.current.videoElement, {
          opacity: 1,
          duration: 1.0,
          ease: "power2.out"
        }, 4.25);

        // Video Overlay Animation
        if (videoRef.current.overlayElement) {
          masterTimeline.to(videoRef.current.overlayElement, {
            opacity: 1,
            duration: 1.0,
            ease: "power2.out"
          }, 4.25); // Gleichzeitig mit dem Video
        }

        // Phase 8: WhatsApp Widget Animation - als letztes Element (ca. 5.55s)
        // Finde das tatsächliche Widget-Element (erstes Kind des Wrapper-Divs)
        const widgetElement = whatsAppRef.current.firstElementChild;
        if (widgetElement) {
          // Initial State: unsichtbar für Animation
          gsap.set(widgetElement, {
            opacity: 0,
            scale: 0,
            rotation: -180,
            transformOrigin: "center center"
          });

          // WhatsApp Widget "Aufplopp" Animation
          masterTimeline.to(widgetElement, {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.6,
            ease: "back.out(1.7)", // Elastischer "Aufplopp"-Effekt
            onComplete: () => {
              // Zusätzlicher Bounce-Effekt nach Animation
              gsap.to(widgetElement, {
                scale: 1.1,
                duration: 0.15,
                ease: "power2.out",
                yoyo: true,
                repeat: 1
              });
            }
          }, 5.25); // Nach Video Animation (4.25s + 1.0s = 5.25s)
        }
      } else {
        // Retry nach kurzer Verzögerung
        setTimeout(checkRefs, 50);
      }
    };

    // Kleine Verzögerung um sicherzustellen, dass alle Komponenten gemountet sind
    setTimeout(checkRefs, 100);

    return () => {
      masterTimeline.kill();
    };
  }, []);

  // Footer Animation für mobile Untermenü-Überlappung
  const animateFooter = useCallback((hide) => {
    if (!footerRef.current) return;
    
    // Nur auf mobilen Geräten (< 768px)
    if (window.innerWidth >= 768) return;
    
    if (hide) {
      // Footer nach unten ausblenden
      gsap.to(footerRef.current, {
        y: "100%",
        opacity: 0,
        duration: 0.4,
        ease: "power2.inOut",
        onComplete: () => {
          // Nach Animation: fixed entfernen für bessere Performance
          if (footerRef.current) {
            footerRef.current.classList.remove('fixed');
            footerRef.current.classList.add('relative');
          }
        }
      });
    } else {
      // Vor Animation: fixed wieder setzen
      if (footerRef.current) {
        footerRef.current.classList.remove('relative');
        footerRef.current.classList.add('fixed');
      }
      // Footer von unten nach oben einblenden
      gsap.to(footerRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.4,
        ease: "power2.inOut"
      });
    }
  }, []);

  // HeroText Animation Complete Handler
  const handleHeroTextComplete = () => {
    // Navigation Animation starten
    if (navigationRef.current?.startAnimation) {
      navigationRef.current.startAnimation();
    }
  };

  return (
    <div className="h-screen overflow-hidden relative">
      {/* Video background for main menu */}
      <VideoBackground ref={videoRef} videoSrc={videoSrc} />
      
      {/* Logo component with PPL logo */}
      <div className="pl-4 pt-8 md:pl-12 md:pt-12 relative z-20">
        <Logo 
          ref={logoRef} 
          enableHeroAnimation={true} 
          centered={true}
          logoSrc={logoSrc}
          managementText={managementText}
        />
      </div>
      
      {/* Main content */}
      <main className="h-screen py-10 px-4 flex flex-col items-center justify-center relative z-10">
        <div ref={heroTextRef}>
          <HeroText
            firstText={firstText}
            secondText={secondText}
            onAnimationComplete={handleHeroTextComplete}
          />
        </div>
        
        {/* Navigation */}
        <Navigation
          ref={navigationRef}
          navigationData={navigationData}
          enableHeroAnimation={true}
          onFooterAnimation={animateFooter}
        />
      </main>
      
      {/* Footer - fixed at bottom over video background */}
      <div ref={footerRef} className="fixed bottom-0 left-0 right-0 z-20 p-4">
        <Footer 
          emailAddress={emailAddress}
          tiktokUrl={tiktokUrl}
          instagramUrl={instagramUrl}
        />
      </div>
      
      {/* WhatsApp Widget - wird über Master Timeline animiert */}
      <div ref={whatsAppRef} className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[9999]">
        <WhatsAppWidget
          phoneNumber={phoneNumber}
          message={whatsappMessage}
          position="bottom-right"
          size="medium"
          isHomePage={true} // HomePage: Externe Timeline-Kontrolle, keine interne Animation
        />
      </div>
    </div>
  );
};

export default HomePage;