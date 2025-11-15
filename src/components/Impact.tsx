import { Card } from "@/components/ui/card";
import { TrendingDown, Trees, Users2, Coins } from "lucide-react";

const stats = [
  {
    icon: TrendingDown,
    value: "2.5M kg",
    label: "CO₂ eingespart",
    description: "Das entspricht 12.500 Bäumen",
  },
  {
    icon: Trees,
    value: "500k+",
    label: "Nachhaltige Aktionen",
    description: "Im letzten Monat",
  },
  {
    icon: Users2,
    value: "50.000+",
    label: "Aktive Nutzer",
    description: "In 15 deutschen Städten",
  },
  {
    icon: Coins,
    value: "€250k",
    label: "Prämien ausgezahlt",
    description: "An unsere Community",
  },
];

const Impact = () => {
  return (
    <section className="py-24 bg-gradient-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground">
            Gemeinsam bewegen wir was
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Unsere Community macht bereits einen echten Unterschied
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-2xl p-8 md:p-12 text-center">
            <div className="text-6xl md:text-7xl font-bold text-primary-foreground mb-4">
              Nur 2%
            </div>
            <p className="text-2xl md:text-3xl font-semibold text-primary-foreground mb-3">
              des Klima-Budgets der Bundesregierung
            </p>
            <p className="text-lg text-primary-foreground/90">
              würden ausreichen, um EcoCredit deutschlandweit zu finanzieren
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="p-6 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mb-4">
                <stat.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
                {stat.value}
              </div>
              
              <div className="text-lg font-semibold text-primary-foreground mb-1">
                {stat.label}
              </div>
              
              <div className="text-sm text-primary-foreground/80">
                {stat.description}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
