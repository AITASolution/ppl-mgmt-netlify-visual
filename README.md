# PPL Management & Records - Netlify Visual Editor

## 🚀 Übersicht

Dieses Projekt ist die migrierte Version der PPL Management & Records Startseite, optimiert für den Netlify Visual Editor. Alle Komponenten wurden als konfigurierbare Blöcke implementiert, die im Visual Editor bearbeitet werden können.

## ✨ Features

- **Modulare Block-Architektur**: Alle Komponenten als wiederverwendbare Blöcke
- **Netlify Visual Editor Integration**: Vollständig konfigurierbar im Editor
- **Responsive Design**: Optimiert für alle Bildschirmgrößen
- **GSAP Animationen**: Flüssige, professionelle Animationen
- **TypeScript Support**: Typsichere Entwicklung
- **Performance Optimiert**: SSR-kompatibel und schnell

## 🏗️ Architektur

### Block-Komponenten
```
components/blocks/
├── VideoBackground.jsx     # Hintergrundvideo
├── Logo.jsx               # PPL Logo mit Text
├── HeroText.jsx           # Animierter Hero-Text
├── Navigation.jsx         # Hauptnavigation
├── Footer.jsx             # Website Footer
└── WhatsAppWidget.jsx     # Kontakt-Widget
```

### Schemas
```
components/blocks/
├── VideoBackground.schema.json
├── Logo.schema.json
├── HeroText.schema.json
├── Navigation.schema.json
├── Footer.schema.json
└── WhatsAppWidget.schema.json
```

### Konfiguration
```
lib/
├── blocks.js              # Block-Hilfsfunktionen
├── block-definitions.js   # Block-Registrierung
├── constants.js           # Design-Tokens
└── netlify-blocks.config.js # Editor-Konfiguration
```

## 🛠️ Installation

```bash
# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten
npm run dev

# Projekt bauen
npm run build

# Produktionsserver starten
npm start
```

## 📦 Abhängigkeiten

- **Next.js 15.3.3**: React Framework
- **React 18.3.1**: UI Library
- **Framer Motion**: Animationen
- **GSAP**: Erweiterte Animationen
- **Lucide React**: Icons
- **Tailwind CSS 4.0**: Styling

## 🎨 Design-System

### Farben
- **Sekundärfarbe**: `#7e4b26` (Braun)
- **Warmer Hintergrund**: `#f2eadf` (Beige)
- **Text**: `#000000` (Schwarz)

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Typografie
- **Serif**: Georgia (für Headlines)
- **Sans-Serif**: Inter (für Body Text)

## 🎬 Animationen

Die Startseite verwendet eine Master-Timeline mit 8 Phasen:

1. **Phase 1-2**: HeroText Animation (Buchstaben-Animation)
2. **Phase 3**: Navigation Animation (Staggered Entrance)
3. **Phase 5**: Logo Animation
4. **Phase 6**: Management Text Animation
5. **Phase 7**: Video Background Animation
6. **Phase 8**: WhatsApp Widget Animation

## 📱 Responsive Verhalten

- **Mobile**: Vereinfachte Navigation, angepasste Schriftgrößen
- **Tablet**: Optimierte Layouts für mittlere Bildschirme
- **Desktop**: Vollständige Features und Animationen

## 🔧 Netlify Visual Editor

### Block-Konfiguration
Jeder Block kann im Visual Editor konfiguriert werden:

- **VideoBackground**: Video-URL, Overlay-Einstellungen
- **Logo**: Logo-Bild, Text, Transparenz, Zentrierung
- **HeroText**: Texte, Linie anzeigen/verstecken
- **Navigation**: Menüstruktur, Links
- **Footer**: Social Media Links, rechtliche Links
- **WhatsAppWidget**: Telefonnummer, Nachricht, Position

### Templates
Vorgefertigte Templates für schnelle Seitenerstellung:
- **Homepage**: Komplette Startseite mit allen Komponenten

## 🚀 Deployment

### Netlify
```bash
# Automatisches Deployment bei Git Push
git push origin main
```

### Manuelle Builds
```bash
npm run build
npm run export  # Für statische Exports
```

## 📁 Projektstruktur

```
ppl-mgmt-netlify-visual/
├── app/
│   ├── layout.jsx          # Root Layout
│   └── page.jsx            # Startseite
├── components/
│   ├── blocks/             # Block-Komponenten
│   └── HomePage.jsx        # Hauptkomponente
├── lib/
│   ├── blocks.js           # Block-System
│   ├── block-definitions.js # Block-Registry
│   └── constants.js        # Design-Tokens
├── public/
│   └── assets/             # Statische Assets
├── netlify-blocks.config.js # Editor-Konfiguration
└── MIGRATION.md            # Migrations-Dokumentation
```

## 🔍 Entwicklung

### Neue Blöcke hinzufügen

1. **Komponente erstellen**:
```jsx
// components/blocks/MeinBlock.jsx
export default function MeinBlock({ title, content }) {
  return <div>{title}: {content}</div>;
}
```

2. **Schema definieren**:
```json
// components/blocks/MeinBlock.schema.json
{
  "type": "object",
  "properties": {
    "title": { "type": "string", "title": "Titel" },
    "content": { "type": "string", "title": "Inhalt" }
  }
}
```

3. **Block registrieren**:
```js
// lib/block-definitions.js
export const MeinBlockDefinition = defineBlockComponent({
  name: 'MeinBlock',
  component: MeinBlock,
  schema: MeinBlockSchema
});
```

### Debugging

- **Konsole**: Browser-Entwicklertools für Client-Side Debugging
- **Server**: Next.js Logs für Server-Side Issues
- **Animationen**: GSAP DevTools für Animation-Debugging

## 📞 Support

Bei Fragen zur Migration oder Entwicklung:

- **Dokumentation**: Siehe `MIGRATION.md`
- **Code-Kommentare**: Inline-Dokumentation in allen Komponenten
- **Schema-Definitionen**: JSON Schemas für alle konfigurierbaren Eigenschaften

## 🎯 Roadmap

- [ ] Weitere Block-Komponenten hinzufügen
- [ ] A/B Testing Integration
- [ ] Performance-Optimierungen
- [ ] Erweiterte Animation-Optionen
- [ ] Multi-Language Support

---

**PPL Management & Records** - FROM PEOPLE. FOR PEOPLE.
