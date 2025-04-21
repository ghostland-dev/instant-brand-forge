
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Copy, Check, Share2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface BrandResultProps {
  formData: {
    businessName: string;
    industry: string;
    targetAudience: string;
    businessDescription: string;
    personality: string;
    colorPreference: string;
  };
}

const BrandResult = ({ formData }: BrandResultProps) => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  // Mock data for the generated brand
  const brandData = {
    name: formData.businessName || "NovaSphere",
    slogan: "Transformez vos idées en réalité",
    story: "NovaSphere est né d'une vision simple : créer des solutions accessibles qui répondent aux besoins réels des entrepreneurs d'aujourd'hui. Notre approche combine innovation et simplicité pour vous aider à concrétiser vos ambitions.",
    colors: [
      { name: "Primary", hex: "#8B5CF6", className: "bg-primary" },
      { name: "Secondary", hex: "#0EA5E9", className: "bg-secondary" },
      { name: "Accent", hex: "#E9D5FF", className: "bg-accent" },
      { name: "Text", hex: "#1F2937", className: "bg-gray-800" },
    ],
    typography: {
      heading: "Montserrat",
      body: "Inter",
    },
    voiceTone: [
      "Confiant sans être arrogant",
      "Accessible et bienveillant",
      "Précis et informatif",
      "Inspirant et tourné vers les solutions",
    ],
    socialContent: [
      "Découvrez comment NovaSphere transforme la façon dont les entrepreneurs créent leur marque. #BrandingRevolution",
      "Votre marque reflète votre vision. Chez NovaSphere, nous donnons vie à cette vision en quelques minutes. ✨",
      "Un branding professionnel ne devrait pas prendre des semaines. Avec NovaSphere, c'est une question de minutes. Essayez dès aujourd'hui!",
    ],
  };

  const handleCopy = (text: string, item: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    
    toast({
      title: "Copié !",
      description: `${item} a été copié dans votre presse-papiers.`,
    });
    
    setTimeout(() => setCopied(false), 2000);
  };

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
            
            {/* Identity Tab */}
            <TabsContent value="identity" className="space-y-6">
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
            </TabsContent>
            
            {/* Visual Tab */}
            <TabsContent value="visual" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Éléments visuels</CardTitle>
                  <CardDescription>
                    Couleurs, typographie et éléments graphiques
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Logo</h3>
                    <div className="flex justify-center p-8 border rounded-md bg-background">
                      <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">{brandData.name.substring(0, 2)}</span>
                      </div>
                    </div>
                    <p className="text-sm text-center mt-2 text-muted-foreground">Logo provisoire. Un logo définitif sera généré sous peu.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-3">Palette de couleurs</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {brandData.colors.map((color, index) => (
                        <div key={index} className="space-y-2">
                          <div className={`h-20 rounded-md ${color.className}`}></div>
                          <div className="flex justify-between">
                            <span className="text-sm font-medium">{color.name}</span>
                            <span className="text-sm text-muted-foreground">{color.hex}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-3">Typographie</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 border rounded-md">
                        <span className="text-sm text-muted-foreground">Titres</span>
                        <p className="font-montserrat text-2xl font-semibold">{brandData.typography.heading}</p>
                      </div>
                      <div className="p-4 border rounded-md">
                        <span className="text-sm text-muted-foreground">Texte</span>
                        <p className="font-inter text-lg">{brandData.typography.body}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Voice Tab */}
            <TabsContent value="voice" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Ton de voix</CardTitle>
                  <CardDescription>
                    Comment votre marque parle et communique
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-3">Caractéristiques</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {brandData.voiceTone.map((tone, index) => (
                        <div key={index} className="flex gap-2 p-3 border rounded-md">
                          <span className="text-primary">•</span>
                          <span>{tone}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-3">Exemples de messages</h3>
                    <div className="space-y-3">
                      <div className="p-4 border rounded-md bg-background">
                        <h4 className="font-medium mb-2">Accueil site web</h4>
                        <p>Bienvenue chez {brandData.name}. Nous croyons que chaque idée mérite d'être partagée avec le monde. Découvrez comment nous pouvons vous aider à concrétiser la vôtre.</p>
                      </div>
                      <div className="p-4 border rounded-md bg-background">
                        <h4 className="font-medium mb-2">Email de bienvenue</h4>
                        <p>Merci de rejoindre {brandData.name}! Vous venez de faire le premier pas vers la réalisation de vos ambitions. Notre équipe est là pour vous accompagner à chaque étape de votre parcours.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Social Content Tab */}
            <TabsContent value="social" className="space-y-6">
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
