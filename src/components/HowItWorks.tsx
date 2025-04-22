
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    number: "01",
    title: "Répondez à quelques questions",
    description: "Partagez les détails essentiels sur votre activité, votre public cible et vos préférences."
  },
  {
    number: "02",
    title: "Notre IA génère votre marque",
    description: "En quelques minutes, notre technologie crée une identité de marque complète et cohérente."
  },
  {
    number: "03",
    title: "Recevez votre branding complet",
    description: "Téléchargez tous les éléments de votre marque dans différents formats, prêts à l'emploi."
  },
  {
    number: "04",
    title: "Ajustez à volonté",
    description: "Affinez les résultats selon vos préférences et obtenez des variations illimitées."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comment ça fonctionne
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Un processus simple et intuitif pour obtenir votre identité de marque complète en quelques minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="border-none bg-white shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-primary">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-bold mb-4">Des résultats qui dépassent vos attentes</h3>
            <p className="text-muted-foreground mb-6">
              Notre IA a été entraînée sur des milliers d'identités de marque réussies pour vous fournir des résultats professionnels, comme si vous aviez fait appel à une agence premium.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">10 min</p>
                <p className="text-sm text-muted-foreground">temps moyen</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">97%</p>
                <p className="text-sm text-muted-foreground">taux de satisfaction</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">5000+</p>
                <p className="text-sm text-muted-foreground">marques créées</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
