'use client';

import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const WhatsAppWidget = ({
  phoneNumber = '+491234567890',
  message = 'Hallo! Ich interessiere mich für Ihre Services.',
  position = 'bottom-right',
  size = 'medium',
  animationDelay = 5.25,
  isHomePage = false,
  className = "",
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const widgetRef = useRef(null);

  // Initial Animation Effect
  useEffect(() => {
    if (widgetRef.current) {
      if (isHomePage) {
        // Auf HomePage: Nur Initial State setzen, Master Timeline übernimmt Animation
        gsap.set(widgetRef.current, {
          opacity: 0,
          scale: 0,
          rotation: -180,
          transformOrigin: "center center"
        });
        return; // Früher Return - keine interne Animation!
      }

      if (animationDelay > 0) {
        // Seiten mit Animation: Initial State unsichtbar für Animation
        gsap.set(widgetRef.current, {
          opacity: 0,
          scale: 0,
          rotation: -180,
          transformOrigin: "center center"
        });

        // WhatsApp Widget "Aufplopp" Animation
        // Startet nach allen anderen Animationen
        gsap.to(widgetRef.current, {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.6,
          ease: "back.out(1.7)", // Elastischer "Aufplopp"-Effekt
          delay: animationDelay + 0.3,
          // Zusätzlicher Bounce-Effekt
          onComplete: () => {
            gsap.to(widgetRef.current, {
              scale: 1.1,
              duration: 0.15,
              ease: "power2.out",
              yoyo: true,
              repeat: 1
            });
          }
        });
      } else {
        // Andere Seiten: Sofort sichtbar ohne Animation
        gsap.set(widgetRef.current, {
          opacity: 1,
          scale: 1,
          rotation: 0,
          transformOrigin: "center center"
        });
      }
    }
  }, [animationDelay, isHomePage]);

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const getPositionClasses = () => {
    switch (position) {
      case 'bottom-left':
        return 'bottom-4 left-4 md:bottom-24 md:left-6';
      case 'top-right':
        return 'top-6 right-6';
      case 'top-left':
        return 'top-6 left-6';
      default:
        return 'bottom-4 right-4 md:bottom-24 md:right-6';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'small':
        return 'w-12 h-12';
      case 'large':
        return 'w-20 h-20';
      default:
        return 'w-16 h-16';
    }
  };

  return (
    <div
      ref={widgetRef}
      className={`fixed ${getPositionClasses()} z-[9999] ${className}`}
      data-netlify-visual-editor-block="WhatsAppWidget"
      {...props}
    >
      {/* Tooltip */}
      {showTooltip && (
        <div className={`absolute ${position.includes('right') ? 'right-full mr-4' : 'left-full ml-4'} ${position.includes('bottom') ? 'bottom-0' : 'top-0'} bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg`}>
          Schreiben Sie uns auf WhatsApp
          <div className={`absolute ${position.includes('right') ? 'right-0 translate-x-full' : 'left-0 -translate-x-full'} top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-transparent ${position.includes('right') ? 'border-l-4 border-l-gray-800' : 'border-r-4 border-r-gray-800'}`}></div>
        </div>
      )}
      
      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        onMouseEnter={() => {
          setIsHovered(true);
          setShowTooltip(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          setShowTooltip(false);
        }}
        className={`
          ${getSizeClasses()}
          bg-green-500 hover:bg-green-600 
          rounded-full shadow-lg hover:shadow-xl 
          flex items-center justify-center 
          transition-all duration-300 ease-in-out
          transform hover:scale-110
          ${isHovered ? 'animate-pulse' : ''}
        `}
        aria-label="WhatsApp Support kontaktieren"
      >
        {/* WhatsApp Icon SVG */}
        <svg
          className={`${size === 'small' ? 'w-6 h-6' : size === 'large' ? 'w-12 h-12' : 'w-8 h-8'} text-white`}
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516"/>
        </svg>
      </button>
    </div>
  );
};

export default WhatsAppWidget;