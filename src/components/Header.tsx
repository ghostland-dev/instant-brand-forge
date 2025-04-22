
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToWizard = () => {
    const wizardElement = document.getElementById('brand-wizard');
    if (wizardElement) {
      wizardElement.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-xl font-bold font-montserrat text-primary">
            InstaBrand<span className="text-secondary">AI</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link 
            to="/features" 
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Fonctionnalités
          </Link>
          <Link 
            to="/how-it-works" 
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Comment ça marche
          </Link>
          <Link 
            to="/pricing" 
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Tarifs
          </Link>
          <Button 
            size="sm" 
            onClick={scrollToWizard}
          >
            Commencer
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex items-center p-2" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link 
              to="/features" 
              className="text-sm font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Fonctionnalités
            </Link>
            <Link 
              to="/how-it-works" 
              className="text-sm font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Comment ça marche
            </Link>
            <Link 
              to="/pricing" 
              className="text-sm font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Tarifs
            </Link>
            <Button 
              size="sm" 
              className="w-full"
              onClick={scrollToWizard}
            >
              Commencer
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
