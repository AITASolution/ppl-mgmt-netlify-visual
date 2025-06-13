'use client';

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SECONDARY_COLOR } from "../../lib/constants";

const HeroText = ({
  firstText = "FROM PEOPLE.",
  secondText = "FOR PEOPLE.",
  showLine = true,
  className = "",
  onAnimationComplete
}) => {
  const textRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    if (!textRef.current || !lineRef.current) return;

    // Text in einzelne Buchstaben aufteilen
    const firstChars = firstText.split("");
    const secondChars = secondText.split("");
    
    // Ersten Teil (schwarz) erstellen
    const firstSpan = document.createElement("span");
    firstSpan.className = "text-black";
    firstSpan.style.fontFamily = "inherit";
    firstSpan.style.fontWeight = "inherit";
    firstChars.forEach((char, index) => {
      const span = document.createElement("span");
      span.textContent = char === " " ? "\u00A0" : char;
      span.style.opacity = "0";
      span.style.transform = "translateY(20px)";
      span.style.display = "inline-block";
      span.style.fontFamily = "inherit";
      span.style.fontWeight = "inherit";
      firstSpan.appendChild(span);
    });

    // Leerzeichen für Desktop zwischen den Teilen
    const spaceSpan = document.createElement("span");
    spaceSpan.className = "hidden md:inline"; // Nur auf Desktop sichtbar
    spaceSpan.innerHTML = "&nbsp;";

    // Zweiten Teil (farbig) erstellen
    const secondSpan = document.createElement("span");
    secondSpan.className = "font-bold highlight-underline block md:inline";
    secondSpan.style.color = SECONDARY_COLOR;
    secondSpan.style.position = "relative";
    secondSpan.style.zIndex = "100";
    secondSpan.style.isolation = "isolate";
    secondSpan.style.fontFamily = "inherit";
    secondSpan.style.fontWeight = "inherit";
    
    secondChars.forEach((char, index) => {
      const span = document.createElement("span");
      span.textContent = char === " " ? "\u00A0" : char;
      span.style.opacity = "0";
      span.style.transform = "translateY(20px)";
      span.style.display = "inline-block";
      span.style.fontFamily = "inherit";
      span.style.fontWeight = "inherit";
      secondSpan.appendChild(span);
    });

    // Text ersetzen mit responsive Layout
    textRef.current.innerHTML = "";
    textRef.current.appendChild(firstSpan);
    textRef.current.appendChild(spaceSpan);
    textRef.current.appendChild(secondSpan);

    // HeroText Animation Timeline erstellen - startet sofort (Phase 1)
    const heroTextTimeline = gsap.timeline();

    // Phase 1: "FROM PEOPLE." Animation - startet sofort
    const firstSpans = firstSpan.querySelectorAll("span");
    heroTextTimeline.to(firstSpans, {
      opacity: 1,
      y: 0,
      duration: 0.08,
      stagger: 0.05,
      ease: "power2.out"
    });

    // Phase 2: "FOR PEOPLE." Animation - mit minimaler Verzögerung
    const secondSpans = secondSpan.querySelectorAll("span");
    heroTextTimeline.to(secondSpans, {
      opacity: 1,
      y: 0,
      duration: 0.08,
      stagger: 0.05,
      ease: "power2.out"
    }, "+=0.2"); // 0.2s Pause zwischen den beiden Teilen

    // Phase 2: Linie animieren - direkt nach dem Text
    if (showLine && lineRef.current) {
      heroTextTimeline.fromTo(lineRef.current,
        {
          scaleX: 0,
          opacity: 0
        },
        {
          scaleX: 1,
          opacity: 0.9,
          duration: 0.8,
          ease: "power2.out"
        }
      );
    }

    // Animation abgeschlossen Callback
    heroTextTimeline.call(() => {
      if (onAnimationComplete) {
        onAnimationComplete();
      }
    });

    return () => {
      heroTextTimeline.kill();
    };
  }, [firstText, secondText, showLine, onAnimationComplete]);

  return (
    <div className={`text-center mb-28 pb-20 overflow-visible relative z-50 isolate flex flex-col items-center w-full ${className}`}>
      <div className="overflow-visible relative z-50 isolate">
        <h1
          ref={textRef}
          className="font-serif text-3xl md:text-5xl lg:text-7xl md:mt-24 font-bold text-black pt-10 leading-tight overflow-visible relative z-50 isolate"
        >
          {/* Text wird durch JavaScript ersetzt */}
        </h1>
        {/* Animierte schwarze Linie */}
        {showLine && (
          <div
            ref={lineRef}
            className="block mx-auto mt-[18px] h-1 w-[60vw] max-w-3xl bg-black rounded-full"
            style={{ transformOrigin: "center" }}
            aria-hidden="true"
          />
        )}
      </div>
    </div>
  );
};

export default HeroText;