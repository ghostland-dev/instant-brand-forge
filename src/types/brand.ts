
export type Industry = "technology" | "health" | "education" | "finance" | "food" | "fashion" | "travel" | "creative" | "other";
export type Personality = "professional" | "friendly" | "luxurious" | "playful" | "minimalist" | "bold" | "traditional" | "innovative";

export interface FormData {
  businessName: string;
  industry: Industry;
  targetAudience: string;
  businessDescription: string;
  personality: Personality;
  colorPreference: string;
}
