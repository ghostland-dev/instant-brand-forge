
import { FormData } from "@/types/brand";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface BusinessInfoStepProps {
  formData: FormData;
  updateFormData: (field: keyof FormData, value: string) => void;
}

const BusinessInfoStep = ({ formData, updateFormData }: BusinessInfoStepProps) => {
  return (
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
          onValueChange={(value) => updateFormData("industry", value)}
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
  );
};

export default BusinessInfoStep;
