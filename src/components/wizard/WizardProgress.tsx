
import { Badge } from "@/components/ui/badge";

interface WizardProgressProps {
  currentStep: number;
}

const WizardProgress = ({ currentStep }: WizardProgressProps) => {
  const steps = [
    { number: 1, label: "Informations" },
    { number: 2, label: "Personnalité" },
    { number: 3, label: "Préférences" },
  ];

  return (
    <div className="flex justify-between mb-8">
      {steps.map((step) => (
        <div key={step.number} className="flex flex-col items-center">
          <div 
            className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold 
              ${currentStep >= step.number 
                ? "bg-primary text-white" 
                : "bg-gray-100 text-gray-400"}`}
          >
            {step.number}
          </div>
          <span className="text-sm mt-2 text-muted-foreground">
            {step.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default WizardProgress;
