
import { FormData, Personality } from "@/types/brand";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface PersonalityStepProps {
  formData: FormData;
  updateFormData: (field: keyof FormData, value: string) => void;
}

const PersonalityStep = ({ formData, updateFormData }: PersonalityStepProps) => {
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <Label>Personnalité de votre marque</Label>
        <RadioGroup 
          value={formData.personality}
          onValueChange={(value) => updateFormData("personality", value as Personality)}
          className="grid grid-cols-1 sm:grid-cols-2 gap-3"
        >
          {[
            { value: "professional", label: "Professionnelle" },
            { value: "friendly", label: "Amicale" },
            { value: "luxurious", label: "Luxueuse" },
            { value: "playful", label: "Ludique" },
            { value: "minimalist", label: "Minimaliste" },
            { value: "bold", label: "Audacieuse" },
            { value: "traditional", label: "Traditionnelle" },
            { value: "innovative", label: "Innovante" },
          ].map(({ value, label }) => (
            <div key={value} className="flex items-center space-x-2 border p-3 rounded-md">
              <RadioGroupItem value={value} id={value} />
              <Label htmlFor={value} className="flex-1 cursor-pointer">{label}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
};

export default PersonalityStep;
