
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { ArrowLeft, ArrowRight, Loader } from "lucide-react";
import BrandResult from "./BrandResult";

type Industry = "technology" | "health" | "education" | "finance" | "food" | "fashion" | "travel" | "creative" | "other";
type Personality = "professional" | "friendly" | "luxurious" | "playful" | "minimalist" | "bold" | "traditional" | "innovative";

interface FormData {
  businessName: string;
  industry: Industry;
  targetAudience: string;
  businessDescription: string;
  personality: Personality;
  colorPreference: string;
}

const BrandWizard = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    businessName: "",
    industry: "technology",
    targetAudience: "",
    businessDescription: "",
    personality: "professional",
    colorPreference: "",
  });

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      generateBranding();
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const generateBranding = () => {
    setIsGenerating(true);
    // Simulate brand generation with a timeout
    setTimeout(() => {
      setIsGenerating(false);
      setIsComplete(true);
    }, 3000);
  };

  if (isComplete) {
    return <BrandResult formData={formData} />;
  }

  return (
    <section id="brand-wizard" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Créez votre marque en 3 étapes
            </h2>
            <p className="text-muted-foreground">
              Répondez à quelques questions simples et notre IA créera votre identité de marque complète.
            </p>
          </div>

          <div className="flex justify-between mb-8">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex flex-col items-center">
                <div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold 
                    ${currentStep >= step 
                      ? "bg-primary text-white" 
                      : "bg-gray-100 text-gray-400"}`}
                >
                  {step}
                </div>
                <span className="text-sm mt-2 text-muted-foreground">
                  {step === 1 && "Informations"}
                  {step === 2 && "Personnalité"}
                  {step === 3 && "Préférences"}
                </span>
              </div>
            ))}
          </div>

          <Card>
            <CardContent className="p-6">
              {/* Step 1: Business Information */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="businessName">Nom de votre entreprise ou projet (si défini)</Label>
                    <Input 
                      id="businessName" 
                      placeholder="Laissez vide pour générer des suggestions"
                      value={formData.businessName}
                      onChange={(e) => updateFormData("businessName", e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="industry">Secteur d'activité</Label>
                    <Select 
                      value={formData.industry} 
                      onValueChange={(value) => updateFormData("industry", value as Industry)}
                    >
                      <SelectTrigger id="industry">
                        <SelectValue placeholder="Sélectionnez votre secteur" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="technology">Technologie</SelectItem>
                        <SelectItem value="health">Santé & Bien-être</SelectItem>
                        <SelectItem value="education">Éducation & Formation</SelectItem>
                        <SelectItem value="finance">Finance & Business</SelectItem>
                        <SelectItem value="food">Alimentation & Restauration</SelectItem>
                        <SelectItem value="fashion">Mode & Beauté</SelectItem>
                        <SelectItem value="travel">Voyage & Loisirs</SelectItem>
                        <SelectItem value="creative">Créatif & Artistique</SelectItem>
                        <SelectItem value="other">Autre</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="targetAudience">Public cible</Label>
                    <Input 
                      id="targetAudience" 
                      placeholder="Ex: entrepreneurs, parents, professionnels, etc."
                      value={formData.targetAudience}
                      onChange={(e) => updateFormData("targetAudience", e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="businessDescription">Description de votre activité</Label>
                    <Textarea 
                      id="businessDescription" 
                      placeholder="Décrivez brièvement votre entreprise, produit ou service..."
                      rows={4}
                      value={formData.businessDescription}
                      onChange={(e) => updateFormData("businessDescription", e.target.value)}
                    />
                  </div>
                </div>
              )}

              {/* Step 2: Brand Personality */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div className="space-y-3">
                    <Label>Personnalité de votre marque</Label>
                    <RadioGroup 
                      value={formData.personality}
                      onValueChange={(value) => updateFormData("personality", value as Personality)}
                      className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                    >
                      <div className="flex items-center space-x-2 border p-3 rounded-md">
                        <RadioGroupItem value="professional" id="professional" />
                        <Label htmlFor="professional" className="flex-1 cursor-pointer">Professionnelle</Label>
                      </div>
                      <div className="flex items-center space-x-2 border p-3 rounded-md">
                        <RadioGroupItem value="friendly" id="friendly" />
                        <Label htmlFor="friendly" className="flex-1 cursor-pointer">Amicale</Label>
                      </div>
                      <div className="flex items-center space-x-2 border p-3 rounded-md">
                        <RadioGroupItem value="luxurious" id="luxurious" />
                        <Label htmlFor="luxurious" className="flex-1 cursor-pointer">Luxueuse</Label>
                      </div>
                      <div className="flex items-center space-x-2 border p-3 rounded-md">
                        <RadioGroupItem value="playful" id="playful" />
                        <Label htmlFor="playful" className="flex-1 cursor-pointer">Ludique</Label>
                      </div>
                      <div className="flex items-center space-x-2 border p-3 rounded-md">
                        <RadioGroupItem value="minimalist" id="minimalist" />
                        <Label htmlFor="minimalist" className="flex-1 cursor-pointer">Minimaliste</Label>
                      </div>
                      <div className="flex items-center space-x-2 border p-3 rounded-md">
                        <RadioGroupItem value="bold" id="bold" />
                        <Label htmlFor="bold" className="flex-1 cursor-pointer">Audacieuse</Label>
                      </div>
                      <div className="flex items-center space-x-2 border p-3 rounded-md">
                        <RadioGroupItem value="traditional" id="traditional" />
                        <Label htmlFor="traditional" className="flex-1 cursor-pointer">Traditionnelle</Label>
                      </div>
                      <div className="flex items-center space-x-2 border p-3 rounded-md">
                        <RadioGroupItem value="innovative" id="innovative" />
                        <Label htmlFor="innovative" className="flex-1 cursor-pointer">Innovante</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              )}

              {/* Step 3: Colors and Preferences */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="colorPreference">Préférences de couleurs (optionnel)</Label>
                    <Input 
                      id="colorPreference" 
                      placeholder="Ex: bleu, vert, tons naturels, etc."
                      value={formData.colorPreference}
                      onChange={(e) => updateFormData("colorPreference", e.target.value)}
                    />
                  </div>
                  
                  <div className="bg-accent/50 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Votre marque inclura</h3>
                    <ul className="grid grid-cols-2 gap-2">
                      <li className="flex items-center text-sm">✓ Nom & slogan</li>
                      <li className="flex items-center text-sm">✓ Logo & icône</li>
                      <li className="flex items-center text-sm">✓ Charte graphique</li>
                      <li className="flex items-center text-sm">✓ Palette de couleurs</li>
                      <li className="flex items-center text-sm">✓ Typographie</li>
                      <li className="flex items-center text-sm">✓ Ton de voix</li>
                      <li className="flex items-center text-sm">✓ Storytelling</li>
                      <li className="flex items-center text-sm">✓ Contenus sociaux</li>
                    </ul>
                  </div>
                </div>
              )}

              <div className="mt-8 flex justify-between">
                {currentStep > 1 ? (
                  <Button variant="outline" onClick={handleBack}>
                    <ArrowLeft className="mr-2 h-4 w-4" /> Retour
                  </Button>
                ) : (
                  <div></div>
                )}
                <Button onClick={handleNext} disabled={isGenerating}>
                  {isGenerating ? (
                    <>
                      <Loader className="mr-2 h-4 w-4 animate-spin" />
                      Génération...
                    </>
                  ) : (
                    <>
                      {currentStep < 3 ? "Continuer" : "Générer ma marque"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BrandWizard;
