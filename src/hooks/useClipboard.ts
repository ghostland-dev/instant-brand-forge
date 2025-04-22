
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export const useClipboard = () => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const handleCopy = (text: string, item: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    
    toast({
      title: "Copié !",
      description: `${item} a été copié dans votre presse-papiers.`,
    });
    
    setTimeout(() => setCopied(false), 2000);
  };

  return { copied, handleCopy };
};
