
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Download, Share2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { BrandResultProps } from "@/types/brandResult";
import { generateBrandData } from "@/utils/brandData";
import IdentityTab from "./brand-result/IdentityTab";
import VisualTab from "./brand-result/VisualTab";
import VoiceTab from "./brand-result/VoiceTab";
import SocialTab from "./brand-result/SocialTab";

const BrandResult = ({ formData }: BrandResultProps) => {
  const { toast } = useToast();
  const brandData = generateBrandData(formData.businessName);

  const handleDownload = () => {
    toast({
      title: "Téléchargement prêt",
      description: "Tous les éléments de votre marque ont été téléchargés.",
    });
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-white to-accent/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Votre marque est prête</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              {brandData.name}
            </h2>
            <p className="text-xl text-muted-foreground italic">
              "{brandData.slogan}"
            </p>
          </div>

          <div className="flex justify-center gap-4 mb-12">
            <Button onClick={handleDownload}>
              <Download className="mr-2 h-4 w-4" />
              Télécharger tout
            </Button>
            <Button variant="outline">
              <Share2 className="mr-2 h-4 w-4" />
              Partager
            </Button>
          </div>

          <Tabs defaultValue="identity" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="identity">Identité</TabsTrigger>
              <TabsTrigger value="visual">Visuel</TabsTrigger>
              <TabsTrigger value="voice">Ton & Message</TabsTrigger>
              <TabsTrigger value="social">Contenu Social</TabsTrigger>
            </TabsList>
            
            <TabsContent value="identity">
              <IdentityTab brandData={brandData} />
            </TabsContent>
            
            <TabsContent value="visual">
              <VisualTab brandData={brandData} />
            </TabsContent>
            
            <TabsContent value="voice">
              <VoiceTab brandData={brandData} />
            </TabsContent>
            
            <TabsContent value="social">
              <SocialTab brandData={brandData} />
            </TabsContent>
          </Tabs>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              Votre branding est maintenant prêt à être utilisé. Vous pouvez télécharger tous les éléments ou les copier individuellement.
            </p>
            <Button>
              Créer une nouvelle marque
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandResult;
