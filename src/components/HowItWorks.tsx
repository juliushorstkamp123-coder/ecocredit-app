import { Bike, Gift, Smartphone, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const steps = [
  {
    icon: Smartphone,
    title: "App öffnen",
    description: "Lade die EcoCredit App herunter und erstelle dein kostenloses Konto in unter 2 Minuten.",
  },
  {
    icon: Bike,
    title: "Nachhaltig handeln",
    description: "Fahrrad fahren, Second-Hand shoppen, regional essen – jede grüne Aktion zählt.",
  },
  {
    icon: TrendingUp,
    title: "Credits sammeln",
    description: "Für jede nachhaltige Entscheidung erhältst du EcoCredits auf dein Konto.",
  },
  {
    icon: Gift,
    title: "Prämien einlösen",
    description: "Tausche Credits bei über 200 Partnern gegen Rabatte, Gutscheine und mehr.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            So funktioniert's
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Vier einfache Schritte zu einem nachhaltigeren Leben – und tollen Belohnungen
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className="p-6 relative bg-card hover:shadow-medium transition-all duration-300 border-2 hover:border-primary/20"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-lg shadow-soft">
                {index + 1}
              </div>
              
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 mt-2">
                <step.icon className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                {step.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
