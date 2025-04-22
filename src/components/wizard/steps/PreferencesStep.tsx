
import { FormData } from "@/types/brand";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface PreferencesStepProps {
  formData: FormData;
  updateFormData: (field: keyof FormData, value: string) => void;
}

const PreferencesStep = ({ formData, updateFormData }: PreferencesStepProps) => {
  return (
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
  );
};

export default PreferencesStep;
