
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Loader } from "lucide-react";
import BrandResult from "./BrandResult";
import WizardProgress from "./wizard/WizardProgress";
import BusinessInfoStep from "./wizard/steps/BusinessInfoStep";
import PersonalityStep from "./wizard/steps/PersonalityStep";
import PreferencesStep from "./wizard/steps/PreferencesStep";
import { FormData } from "@/types/brand";

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

          <WizardProgress currentStep={currentStep} />

          <Card>
            <CardContent className="p-6">
              {currentStep === 1 && (
                <BusinessInfoStep formData={formData} updateFormData={updateFormData} />
              )}
              
              {currentStep === 2 && (
                <PersonalityStep formData={formData} updateFormData={updateFormData} />
              )}
              
              {currentStep === 3 && (
                <PreferencesStep formData={formData} updateFormData={updateFormData} />
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
