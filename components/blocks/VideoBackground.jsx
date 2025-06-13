'use client';

import React, { useEffect, useRef, forwardRef, useImperativeHandle } from "react";
import { gsap } from "gsap";

const VideoBackground = forwardRef(({ videoSrc = "/assets/PPL.mp4", className = "" }, ref) => {
  // Remove extension if present to get base path
  const basePath = videoSrc.replace(/\.(mp4|webm)$/, '');
  const videoRef = useRef(null);
  const overlayRef = useRef(null);

  useImperativeHandle(ref, () => ({
    videoElement: videoRef.current,
    overlayElement: overlayRef.current,
  }));

  useEffect(() => {
    // Initial state: Video und Overlay unsichtbar für Animation
    if (videoRef.current && overlayRef.current) {
      gsap.set(videoRef.current, { opacity: 0 });
      gsap.set(overlayRef.current, { opacity: 0 });
    }

    // Ensure video plays automatically when loaded
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <div className={`fixed inset-0 -z-10 w-full h-full overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        className="absolute min-w-full min-h-full object-cover"
        autoPlay
        loop
        playsInline
        muted
      >
        <source src={`${basePath}.webm`} type="video/webm" />
        <source src={`${basePath}.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Optional overlay to darken the video and improve text readability */}
      <div 
        ref={overlayRef}
        className="absolute inset-0 bg-warm-bg bg-opacity-75"
        style={{ backgroundColor: 'rgba(242, 234, 223, 0.75)' }}
      />
    </div>
  );
});

VideoBackground.displayName = 'VideoBackground';

export default VideoBackground;