'use client';

import React from 'react';
import { Mail, Instagram } from 'lucide-react';
import { defineBlockComponent } from '@netlify/visual-editing';

const FooterImpl = ({
  emailAddress = "info@ppl-mgmt.de",
  tiktokUrl = "https://tiktok.com/@ppl",
  instagramUrl = "https://instagram.com/ppl",
  showSocialMedia = true,
  showLegalLinks = true,
  showCopyright = true,
  className = "",
  ...props
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className={`space-y-4 ${className}`}
      {...props}
    >
      {/* Social Media Icons */}
      {showSocialMedia && (
        <div className="flex justify-center gap-6">
          <a
            href={`mailto:${emailAddress}`}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="E-Mail kontaktieren"
            data-sb-field-path="emailAddress"
          >
            <Mail size={20} />
          </a>
          <a
            href={tiktokUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="TikTok folgen"
            data-sb-field-path="tiktokUrl"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
          </a>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Instagram folgen"
            data-sb-field-path="instagramUrl"
          >
            <Instagram size={20} />
          </a>
        </div>
      )}

      {/* Legal Links */}
      {showLegalLinks && (
        <div className="flex justify-center gap-4 text-xs text-gray-400">
          <a
            href="/datenschutz"
            className="text-gray-400 hover:text-gray-600 underline underline-offset-2 transition-colors"
          >
            Datenschutz
          </a>
          <a
            href="/impressum"
            className="text-gray-400 hover:text-gray-600 underline underline-offset-2 transition-colors"
          >
            Impressum
          </a>
        </div>
      )}

      {/* Copyright */}
      {showCopyright && (
        <div className="w-full text-center text-xs text-gray-400">
          © {currentYear} PPL
        </div>
      )}
    </footer>
  );
};

export const Footer = defineBlockComponent(FooterImpl, {
  label: 'Footer',
  schema: './Footer.schema.json'
});

export default Footer;