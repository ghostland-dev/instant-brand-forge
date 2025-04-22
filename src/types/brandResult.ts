
export interface BrandColor {
  name: string;
  hex: string;
  className: string;
}

export interface BrandTypography {
  heading: string;
  body: string;
}

export interface BrandData {
  name: string;
  slogan: string;
  story: string;
  colors: BrandColor[];
  typography: BrandTypography;
  voiceTone: string[];
  socialContent: string[];
}

export interface BrandResultProps {
  formData: {
    businessName: string;
    industry: string;
    targetAudience: string;
    businessDescription: string;
    personality: string;
    colorPreference: string;
  };
}
