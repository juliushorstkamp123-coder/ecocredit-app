import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone } from "lucide-react";
import appMockup from "@/assets/app-mockup.jpg";

const CTA = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 md:p-12 border-2 border-primary/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full border border-accent/20">
                <Smartphone className="w-4 h-4" />
                <span className="text-sm font-medium">Jetzt starten</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Bereit für den ersten EcoCredit?
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Lade die App herunter und werde Teil der Bewegung. Nachhaltig leben war noch nie so lohnend.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:opacity-90 text-lg px-8 shadow-medium"
                >
                  App herunterladen
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-8 border-2"
                >
                  Partner werden
                </Button>
              </div>
              
              <p className="text-sm text-muted-foreground pt-4">
                ✓ Kostenlos  •  ✓ Keine Kreditkarte nötig  •  ✓ In 2 Minuten startklar
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-accent opacity-20 blur-3xl rounded-full" />
              <img 
                src={appMockup} 
                alt="EcoCredit App Interface" 
                className="relative z-10 w-full max-w-md mx-auto rounded-2xl shadow-medium"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
