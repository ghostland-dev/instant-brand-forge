
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BrandData } from "@/types/brandResult";

interface VoiceTabProps {
  brandData: BrandData;
}

const VoiceTab = ({ brandData }: VoiceTabProps) => {
  return (
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
  );
};

export default VoiceTab;
