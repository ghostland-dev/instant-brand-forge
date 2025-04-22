
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useClipboard } from "@/hooks/useClipboard";
import { BrandData } from "@/types/brandResult";

interface IdentityTabProps {
  brandData: BrandData;
}

const IdentityTab = ({ brandData }: IdentityTabProps) => {
  const { copied, handleCopy } = useClipboard();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Identité de marque</CardTitle>
        <CardDescription>
          Les éléments fondamentaux qui définissent votre marque
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-2">Nom</h3>
          <div className="flex items-center gap-2 p-3 border rounded-md bg-background">
            <span className="text-xl font-semibold">{brandData.name}</span>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => handleCopy(brandData.name, "Nom")}
            >
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-2">Slogan</h3>
          <div className="flex items-center gap-2 p-3 border rounded-md bg-background">
            <span className="italic">{brandData.slogan}</span>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => handleCopy(brandData.slogan, "Slogan")}
            >
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-2">Storytelling</h3>
          <div className="relative p-4 border rounded-md bg-background">
            <p className="pr-10">{brandData.story}</p>
            <Button 
              variant="ghost" 
              size="icon"
              className="absolute top-3 right-3"
              onClick={() => handleCopy(brandData.story, "Storytelling")}
            >
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default IdentityTab;
