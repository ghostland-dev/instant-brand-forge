
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useClipboard } from "@/hooks/useClipboard";
import { BrandData } from "@/types/brandResult";

interface SocialTabProps {
  brandData: BrandData;
}

const SocialTab = ({ brandData }: SocialTabProps) => {
  const { copied, handleCopy } = useClipboard();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Contenu pour réseaux sociaux</CardTitle>
        <CardDescription>
          Posts prêts à l'emploi pour vos plateformes sociales
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {brandData.socialContent.map((content, index) => (
            <div key={index} className="relative p-4 border rounded-md bg-background">
              <p className="pr-10">{content}</p>
              <Button 
                variant="ghost" 
                size="icon"
                className="absolute top-3 right-3"
                onClick={() => handleCopy(content, "Post social")}
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SocialTab;
