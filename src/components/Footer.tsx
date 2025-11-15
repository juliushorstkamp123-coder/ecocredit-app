import { Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Leaf className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">EcoCredit</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Nachhaltigkeit belohnen. Gemeinsam die Zukunft gestalten.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Produkt</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">App</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Für Unternehmen</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Für Städte</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Partner werden</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Unternehmen</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Über uns</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Karriere</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Presse</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Rechtliches</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Impressum</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Datenschutz</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">AGB</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Kontakt</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © 2024 EcoCredit. Alle Rechte vorbehalten. Made with 💚 for a sustainable future.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
