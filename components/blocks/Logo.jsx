'use client';

import React, { forwardRef, useImperativeHandle, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";
import { SECONDARY_COLOR } from "../../lib/constants";

const Logo = forwardRef(({
  transparent = true,
  inHeader = false,
  enableHeroAnimation = false,
  centered = false,
  className = "",
  logoSrc = "/assets/logo/PPL-Logo.svg",
  managementText = "Management & Records"
}, ref) => {
  const router = useRouter();
  const logoRef = useRef(null);
  const textRef = useRef(null);
  const mobileTextRef = useRef(null);
  const containerRef = useRef(null);

  useImperativeHandle(ref, () => ({
    logoElement: logoRef.current,
    textElement: textRef.current,
    mobileTextElement: mobileTextRef.current,
  }));

  useEffect(() => {
    // Initial state: Logo und Text nur unsichtbar wenn Hero-Animation aktiviert ist
    if (enableHeroAnimation && logoRef.current && textRef.current) {
      gsap.set(logoRef.current, { opacity: 0, scale: 0.8 });
      gsap.set(textRef.current, { opacity: 0, y: 20 });
      // Mobile Text auch unsichtbar setzen falls vorhanden
      if (mobileTextRef.current) {
        gsap.set(mobileTextRef.current, { opacity: 0, y: 20 });
      }
    }
  }, [enableHeroAnimation]);

  const handleLogoClick = () => {
    router.push("/");
  };

  // Desktop-Größen basierend auf transparent Prop
  const logoHeight = transparent
    ? 'h-16 md:h-20 lg:h-24'  // Normal (transparent)
    : 'h-8 md:h-10 lg:h-12';   // Kompakt (nicht transparent)
    
  const textSize = transparent
    ? 'text-2xl md:text-3xl lg:text-4xl'  // Normal (transparent)
    : 'text-lg md:text-xl lg:text-2xl';    // Kompakt (nicht transparent);

  return (
    <div
      ref={containerRef}
      className={`relative z-50 cursor-pointer hover:opacity-80 ${className}`}
      onClick={handleLogoClick}
      style={{
        display: "flex",
        justifyContent: centered ? "center" : "flex-start",
        alignItems: "center",
        width: "100%",
        transformOrigin: "left center",
        transform: transparent ? "scale(1)" : "scale(0.85)",
        transition: "transform 0.4s ease-in-out",
      }}
    >
      <div className="flex items-center">
        {/* Logo image */}
        <div
          ref={logoRef}
          className="relative"
          style={{
            transformOrigin: 'left center',
            transform: transparent ? 'scale(1)' : 'scale(0.9)',
            opacity: enableHeroAnimation ? 0 : 1,
            transition: 'transform 0.4s ease-in-out, opacity 0.4s ease-in-out'
          }}
        >
          <img
            src={logoSrc}
            alt="PPL Logo"
            className={`w-auto ${logoHeight}`}
            style={{
              filter: transparent ? 'brightness(1)' : 'brightness(1.05)',
              transition: 'filter 0.4s ease-in-out'
            }}
          />
        </div>
        
        {/* Management text */}
        {/* Desktop: Immer sichtbar */}
        <div
          ref={textRef}
          className={`hidden md:block ${transparent ? 'md:ml-3' : ''}`}
          style={{
            transformOrigin: 'left center',
            transform: transparent ? 'scale(1)' : 'scale(0.9)',
            opacity: enableHeroAnimation ? 0 : (transparent ? 1 : 0.95),
            transition: 'transform 0.4s ease-in-out, opacity 0.4s ease-in-out'
          }}
        >
          <span
            className={`font-serif font-medium tracking-wider uppercase ${textSize}`}
            style={{
              background: `linear-gradient(90deg, ${SECONDARY_COLOR} 0%, #000 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
              letterSpacing: transparent ? '0.15em' : '0.12em',
              transform: transparent ? 'scaleY(1)' : 'scaleY(0.95)',
              transition: 'letter-spacing 0.4s ease-in-out, transform 0.4s ease-in-out'
            }}
          >
            {managementText}
          </span>
        </div>

        {/* Mobile: Sichtbar auf Startseite (inHeader=false) oder im Header bei transparent=false */}
        {(!inHeader || !transparent) && (
          <div
            ref={mobileTextRef}
            className="block md:hidden"
            style={{
              transformOrigin: 'left center',
              transform: transparent ? 'scale(1)' : 'scale(0.9)',
              opacity: enableHeroAnimation ? 0 : 1,
              transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out'
            }}
          >
            <span
              className={`font-serif font-medium tracking-wider uppercase ${transparent ? 'text-lg' : 'text-sm'}`}
              style={{
                background: `linear-gradient(90deg, ${SECONDARY_COLOR} 0%, #000 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent',
                letterSpacing: transparent ? '0.15em' : '0.12em',
                transform: transparent ? 'scaleY(1)' : 'scaleY(0.95)',
                transition: 'letter-spacing 0.3s ease-in-out, transform 0.3s ease-in-out'
              }}
            >
              {managementText}
            </span>
          </div>
        )}
      </div>
      
      {/* Subtiler visueller Effekt für kompakten Zustand */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.05) 50%, transparent 100%)',
          opacity: transparent ? 0 : 0.15,
          transform: transparent ? 'translateX(-100%)' : 'translateX(0%)',
          transition: 'opacity 0.4s ease-in-out, transform 0.4s ease-in-out'
        }}
      />
    </div>
  );
});

Logo.displayName = 'Logo';

export default Logo;