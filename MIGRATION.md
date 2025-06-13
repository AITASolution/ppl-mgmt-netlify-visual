# PPL Management & Records - Netlify Visual Editor Migration

## Übersicht

Diese Migration überträgt die Startseite von `ppl-mgmt` nach `ppl-mgmt-netlify-visual` und macht alle Komponenten als konfigurierbare Blöcke für den Netlify Visual Editor verfügbar.

## Migrierte Komponenten

### 1. VideoBackground Block
- **Datei**: `components/blocks/VideoBackground.jsx`
- **Schema**: `components/blocks/VideoBackground.schema.json`
- **Beschreibung**: Hintergrundvideo mit optionalem Overlay
- **Konfigurierbar**: Video-URL, CSS-Klassen

### 2. Logo Block
- **Datei**: `components/blocks/Logo.jsx`
- **Schema**: `components/blocks/Logo.schema.json`
- **Beschreibung**: PPL Logo mit Management Text
- **Konfigurierbar**: Logo-Bild, Text, Transparenz, Zentrierung, Animationen

### 3. HeroText Block
- **Datei**: `components/blocks/HeroText.jsx`
- **Schema**: `components/blocks/HeroText.schema.json`
- **Beschreibung**: Animierter Hero-Text mit zwei Teilen
- **Konfigurierbar**: Erster Text, zweiter Text, Linie anzeigen

### 4. Navigation Block
- **Datei**: `components/blocks/Navigation.jsx`
- **Schema**: `components/blocks/Navigation.schema.json`
- **Beschreibung**: Hauptnavigation mit Untermenüs
- **Konfigurierbar**: Navigationsstruktur, Animationen

### 5. Footer Block
- **Datei**: `components/blocks/Footer.jsx`
- **Schema**: `components/blocks/Footer.schema.json`
- **Beschreibung**: Website Footer mit Social Media Links
- **Konfigurierbar**: E-Mail, Social Media URLs, Sichtbarkeit der Elemente

### 6. WhatsAppWidget Block
- **Datei**: `components/blocks/WhatsAppWidget.jsx`
- **Schema**: `components/blocks/WhatsAppWidget.schema.json`
- **Beschreibung**: Schwebendes WhatsApp Kontakt-Widget
- **Konfigurierbar**: Telefonnummer, Nachricht, Position, Größe, Animationen

## Technische Struktur

### Block-System
- **`lib/blocks.js`**: Hilfsfunktionen für Block-Definitionen
- **`lib/block-definitions.js`**: Zentrale Block-Registrierung
- **`lib/constants.js`**: Farbkonstanten und Design-Tokens
- **`netlify-blocks.config.js`**: Konfiguration für Netlify Visual Editor

### Hauptkomponente
- **`components/HomePage.jsx`**: Zusammengesetzte Startseite mit Master-Animation
- **`app/page.jsx`**: Next.js Seite, die die HomePage-Komponente verwendet

## Animationen

Die ursprünglichen GSAP-Animationen wurden beibehalten:

1. **Phase 1-2**: HeroText Animation (Buchstaben-für-Buchstaben)
2. **Phase 3**: Navigation Animation (Staggered von unten nach oben)
3. **Phase 5**: Logo Animation
4. **Phase 6**: Management Text Animation
5. **Phase 7**: Video Background Animation
6. **Phase 8**: WhatsApp Widget Animation

## Installation und Setup

### Abhängigkeiten
```bash
npm install framer-motion gsap lucide-react
```

### Assets
Die folgenden Assets wurden vom ursprünglichen Projekt kopiert:
- `/public/assets/PPL.mp4` - Hintergrundvideo
- `/public/assets/logo/PPL-Logo.svg` - PPL Logo
- Weitere Assets im `/public/assets/` Verzeichnis

## Verwendung im Netlify Visual Editor

### Block-Registrierung
Alle Blöcke sind in `lib/block-definitions.js` registriert und können im Visual Editor verwendet werden.

### Konfiguration
Jeder Block hat ein JSON Schema, das die konfigurierbaren Eigenschaften definiert. Diese erscheinen als Formularfelder im Visual Editor.

### Templates
Ein vorgefertigtes Template für die komplette Startseite ist in `netlify-blocks.config.js` definiert.

## Responsive Design

Alle Komponenten sind vollständig responsiv und verwenden Tailwind CSS Klassen:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## Farben und Design-Tokens

Zentrale Farbdefinitionen in `lib/constants.js`:
- **Sekundärfarbe**: `#7e4b26`
- **Warmer Hintergrund**: `#f2eadf`

## Performance

- **SSR-kompatibel**: Alle Komponenten funktionieren mit Next.js Server-Side Rendering
- **Lazy Loading**: Animationen werden nur bei Bedarf geladen
- **Optimierte Assets**: Videos in WebM und MP4 Format für beste Kompatibilität

## Entwicklung

### Neue Blöcke hinzufügen
1. Komponente in `components/blocks/` erstellen
2. Schema in `components/blocks/[Name].schema.json` definieren
3. Block in `lib/block-definitions.js` registrieren

### Animationen anpassen
GSAP-Animationen können in der `HomePage.jsx` oder in den einzelnen Block-Komponenten angepasst werden.

## Browser-Unterstützung

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (neueste Versionen)
- **Mobile**: iOS Safari, Chrome Mobile
- **Fallbacks**: Graceful Degradation für ältere Browser

## Deployment

Das Projekt ist bereit für Deployment auf Netlify mit automatischer Optimierung für:
- **Build-Performance**
- **Asset-Optimierung**
- **CDN-Verteilung**