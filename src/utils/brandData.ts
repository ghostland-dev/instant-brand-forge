
import { BrandData } from "@/types/brandResult";

export const generateBrandData = (businessName: string): BrandData => ({
  name: businessName || "NovaSphere",
  slogan: "Transformez vos idées en réalité",
  story: "NovaSphere est né d'une vision simple : créer des solutions accessibles qui répondent aux besoins réels des entrepreneurs d'aujourd'hui. Notre approche combine innovation et simplicité pour vous aider à concrétiser vos ambitions.",
  colors: [
    { name: "Primary", hex: "#8B5CF6", className: "bg-primary" },
    { name: "Secondary", hex: "#0EA5E9", className: "bg-secondary" },
    { name: "Accent", hex: "#E9D5FF", className: "bg-accent" },
    { name: "Text", hex: "#1F2937", className: "bg-gray-800" },
  ],
  typography: {
    heading: "Montserrat",
    body: "Inter",
  },
  voiceTone: [
    "Confiant sans être arrogant",
    "Accessible et bienveillant",
    "Précis et informatif",
    "Inspirant et tourné vers les solutions",
  ],
  socialContent: [
    "Découvrez comment NovaSphere transforme la façon dont les entrepreneurs créent leur marque. #BrandingRevolution",
    "Votre marque reflète votre vision. Chez NovaSphere, nous donnons vie à cette vision en quelques minutes. ✨",
    "Un branding professionnel ne devrait pas prendre des semaines. Avec NovaSphere, c'est une question de minutes. Essayez dès aujourd'hui!",
  ],
});
