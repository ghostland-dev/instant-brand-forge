
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

interface PricingPlan {
  name: string;
  price: string;
  priceAnnual: string;
  description: string;
  features: string[];
  buttonText: string;
  popular?: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    name: "Essentiel",
    price: "29€",
    priceAnnual: "290€",
    description: "Idéal pour les freelances et projets personnels",
    features: [
      "1 génération de marque",
      "Identité visuelle de base",
      "Logo simple",
      "Palette de couleurs",
      "Typographie",
      "Exports en JPG, PNG",
      "Support par email",
    ],
    buttonText: "Commencer",
  },
  {
    name: "Professionnel",
    price: "79€",
    priceAnnual: "790€",
    description: "Parfait pour les startups et petites entreprises",
    features: [
      "3 générations de marque",
      "Identité visuelle complète",
      "Logo + variantes",
      "Charte graphique détaillée",
      "Ton de voix & storytelling",
      "10 templates réseaux sociaux",
      "Exports en JPG, PNG, SVG, PDF",
      "Support prioritaire",
    ],
    buttonText: "Choisir ce plan",
    popular: true,
  },
  {
    name: "Entreprise",
    price: "199€",
    priceAnnual: "1990€",
    description: "Solution complète pour entreprises établies",
    features: [
      "10 générations de marque",
      "Identité visuelle premium",
      "Logo animé + toutes variantes",
      "Charte graphique exhaustive",
      "Ton de voix & messaging complet",
      "30 templates (web, print, social)",
      "Tous formats d'export",
      "Support dédié & révisions",
      "Accès API",
    ],
    buttonText: "Contacter commercial",
  },
];

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-white to-accent/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tarifs transparents, résultats exceptionnels
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Choisissez le plan qui correspond à vos besoins et créez une marque remarquable en quelques minutes.
          </p>
          
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center space-x-2 p-1 border rounded-full">
              <Button 
                variant={isAnnual ? "outline" : "default"} 
                size="sm" 
                className="rounded-full px-6"
                onClick={() => setIsAnnual(false)}
              >
                Mensuel
              </Button>
              <Button 
                variant={isAnnual ? "default" : "outline"} 
                size="sm" 
                className="rounded-full px-6"
                onClick={() => setIsAnnual(true)}
              >
                Annuel <Badge variant="outline" className="ml-2 bg-primary text-primary-foreground">-20%</Badge>
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index} 
              className={`flex flex-col border ${plan.popular ? 'border-primary shadow-lg relative' : 'border-border'}`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white px-6 py-1">
                  Le plus populaire
                </Badge>
              )}
              
              <CardHeader className="pb-6">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="text-muted-foreground mt-2">{plan.description}</p>
              </CardHeader>
              
              <CardContent className="pb-6 flex-grow">
                <div className="mb-6">
                  <p className="text-4xl font-bold">
                    {isAnnual ? plan.priceAnnual : plan.price}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {isAnnual ? 'par an' : 'paiement unique'}
                  </p>
                </div>
                
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter className="pt-4">
                <Button 
                  variant={plan.popular ? "default" : "outline"} 
                  className="w-full"
                >
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
