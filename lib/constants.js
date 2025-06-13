/**
 * Zentrale Farbdefinitionen für die Anwendung
 *
 * Diese Datei enthält alle wichtigen Farben, die in der gesamten
 * Anwendung verwendet werden, um eine konsistente Farbgebung
 * zu gewährleisten und zentrale Änderungen zu ermöglichen.
 */

export const colors = {
  /**
   * Sekundärfarbe - Wird für CTA-Buttons, Akzente und interaktive Elemente verwendet
   */
  secondary: "#7e4b26",
  
  /**
   * Warme Hintergrundfarbe - Ersetzt das vorherige Schwarz für eine wärmere Optik
   */
  warmBackground: "#f2eadf",
  
  /**
   * Weitere Farben können hier hinzugefügt werden
   */
  // primary: "#000000",
  // accent: "#ffffff",
};

/**
 * Typsichere Farbexporte für bessere Entwicklererfahrung
 */
export const SECONDARY_COLOR = colors.secondary;
export const WARM_BACKGROUND_COLOR = colors.warmBackground;

/**
 * Hilfsfunktion zur Konvertierung von Hex zu RGBA
 */
function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

/**
 * Vordefinierte Farbvarianten für häufige Anwendungsfälle
 */
export const SECONDARY_COLOR_VARIANTS = {
  // Transparente Varianten
  '10': hexToRgba(SECONDARY_COLOR, 0.1),   // 10% Transparenz
  '20': hexToRgba(SECONDARY_COLOR, 0.2),   // 20% Transparenz
  '30': hexToRgba(SECONDARY_COLOR, 0.3),   // 30% Transparenz
  '50': hexToRgba(SECONDARY_COLOR, 0.5),   // 50% Transparenz
  '80': hexToRgba(SECONDARY_COLOR, 0.8),   // 80% Transparenz
  '90': hexToRgba(SECONDARY_COLOR, 0.9),   // 90% Transparenz
  
  // Vollständig opak
  full: SECONDARY_COLOR,
};