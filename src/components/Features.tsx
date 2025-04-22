
import { Card, CardContent } from "@/components/ui/card";
import { 
  Palette, 
  MessageSquare, 
  Type, 
  Landmark, 
  Image, 
  Share2,
  CheckCircle, 
  Zap 
} from "lucide-react";

const features = [
  {
    icon: <Palette className="h-8 w-8 text-primary" />,
    title: "Identité visuelle",
    description: "Logo, couleurs, typographies et éléments graphiques harmonisés avec votre vision."
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-primary" />,
    title: "Ton de voix",
    description: "Un style de communication unique, adapté à votre marque et votre audience."
  },
  {
    icon: <Type className="h-8 w-8 text-primary" />,
    title: "Storytelling",
    description: "Une histoire de marque mémorable qui résonne avec vos clients potentiels."
  },
  {
    icon: <Landmark className="h-8 w-8 text-primary" />,
    title: "Nom & slogan",
    description: "Des propositions de noms percutants et slogans accrocheurs si vous n'en avez pas."
  },
  {
    icon: <Image className="h-8 w-8 text-primary" />,
    title: "Éléments visuels",
    description: "Des maquettes et templates pour vos réseaux sociaux, site web et documents."
  },
  {
    icon: <Share2 className="h-8 w-8 text-primary" />,
    title: "Contenu social",
    description: "Des idées de publications prêtes à l'emploi pour vos réseaux sociaux."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tout ce dont vous avez besoin pour votre marque
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Notre IA génère une identité de marque complète en quelques minutes, éliminant des semaines de recherche et des milliers d'euros en services de design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border border-border hover:border-primary/40 transition-colors duration-300">
              <CardContent className="p-6">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-accent/30 rounded-xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-1/4 flex justify-center">
              <div className="bg-primary/10 p-4 rounded-full">
                <Zap className="h-12 w-12 text-primary" />
              </div>
            </div>
            <div className="md:w-3/4">
              <h3 className="text-2xl font-bold mb-2">Prêt en 10 minutes seulement</h3>
              <p className="text-muted-foreground mb-4">
                Fini les semaines d'attente et les allers-retours sans fin. Notre IA comprend votre vision et la transforme en une identité de marque complète, prête à l'emploi.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-primary" /> Résultats instantanés</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-primary" /> Formats exportables</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-primary" /> Modifications illimitées</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-primary" /> Support humain disponible</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
