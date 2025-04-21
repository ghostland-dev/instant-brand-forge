
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToWizard = () => {
    const wizardElement = document.getElementById('brand-wizard');
    if (wizardElement) {
      wizardElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-br from-accent to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16 animate-reveal">
            <span className="inline-block px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full mb-4">
              IA-Powered Branding • En 10 minutes
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-hero-pattern leading-tight">
              Créez votre marque complète en quelques clics
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Générez instantanément votre nom, logo, charte graphique, ton de voix, slogan, et plus encore. Tout ce dont vous avez besoin pour lancer votre business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="px-8 py-6 text-lg font-semibold" 
                onClick={scrollToWizard}
              >
                Créer ma marque <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-6 text-lg font-semibold">
                Voir des exemples
              </Button>
            </div>
          </div>
          
          <div className="relative mt-12 md:mt-16 rounded-xl overflow-hidden shadow-2xl animate-reveal" style={{ animationDelay: '0.2s' }}>
            <div className="aspect-[16/9] bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <div className="bg-white/90 backdrop-blur p-8 rounded-xl max-w-md text-center">
                <h3 className="text-2xl font-bold mb-4">Votre branding complet</h3>
                <ul className="flex flex-wrap justify-center gap-3 mb-6">
                  {["Nom", "Logo", "Couleurs", "Typographie", "Ton de voix", "Storytelling"].map((item, index) => (
                    <li key={index} className="px-3 py-1 bg-accent rounded-full text-sm font-medium">
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground">Prêt à l'emploi en quelques minutes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
