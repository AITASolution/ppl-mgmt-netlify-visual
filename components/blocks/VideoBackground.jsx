'use client';

import React, { useEffect, useRef, forwardRef, useImperativeHandle } from "react";
import { gsap } from "gsap";
import { defineBlockComponent } from '@netlify/visual-editing';

const VideoBackgroundImpl = forwardRef(({ videoSrc = "/assets/PPL.mp4", className = "", ...props }, ref) => {
  // Remove extension if present to get base path
  const basePath = videoSrc.replace(/\.(mp4|webm)$/, '');
  const videoRef = useRef(null);
  const overlayRef = useRef(null);

  // Detect if we're in editing mode
  const isEditing = typeof window !== 'undefined' && window.location.search.includes('editing=true');

  useImperativeHandle(ref, () => ({
    videoElement: videoRef.current,
    overlayElement: overlayRef.current,
  }));

  useEffect(() => {
    // Initial state: Video und Overlay unsichtbar für Animation (außer im Editing-Modus)
    if (videoRef.current && overlayRef.current && !isEditing) {
      gsap.set(videoRef.current, { opacity: 0 });
      gsap.set(overlayRef.current, { opacity: 0 });
    }

    // Ensure video plays automatically when loaded
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video autoplay failed:", error);
      });
    }
  }, [isEditing]);

  return (
    <div 
      className={`fixed inset-0 -z-10 w-full h-full overflow-hidden ${className}`}
      {...props}
    >
      <video
        ref={videoRef}
        className="absolute min-w-full min-h-full object-cover"
        autoPlay
        loop
        playsInline
        muted
        style={{ opacity: isEditing ? 1 : undefined }}
        data-sb-field-path="videoSrc"
      >
        <source src={`${basePath}.webm`} type="video/webm" />
        <source src={`${basePath}.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Optional overlay to darken the video and improve text readability */}
      <div 
        ref={overlayRef}
        className="absolute inset-0 bg-warm-bg bg-opacity-75"
        style={{ 
          backgroundColor: 'rgba(242, 234, 223, 0.75)',
          opacity: isEditing ? 1 : undefined
        }}
      />
    </div>
  );
});

VideoBackgroundImpl.displayName = 'VideoBackgroundImpl';

export const VideoBackground = defineBlockComponent(VideoBackgroundImpl, {
  label: 'Video Background',
  schema: './VideoBackground.schema.json'
});

export default VideoBackground;