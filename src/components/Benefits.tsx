import { Card } from "@/components/ui/card";
import { Users, Building2, MapPin } from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Für Nutzer",
    color: "primary",
    points: [
      "Kostenlose Prämien für nachhaltiges Verhalten",
      "Rabatte bei über 200 Partnern",
      "Einfaches Tracking deines CO₂-Fußabdrucks",
      "Teil einer wachsenden Community",
    ],
  },
  {
    icon: Building2,
    title: "Für Unternehmen",
    color: "accent",
    points: [
      "Gewinnung nachhaltigkeitsbewusster Kunden",
      "Stärkung des grünen Markenimages",
      "Messbare Marketing-Performance",
      "Nur Bezahlung bei eingelösten Credits",
    ],
  },
  {
    icon: MapPin,
    title: "Für Städte",
    color: "success",
    points: [
      "Effektive CO₂-Reduktion in der Region",
      "Förderung nachhaltiger Mobilität",
      "Kostengünstiger als klassische Kampagnen",
      "Messbare Erfolge & Bürgerbeteiligung",
    ],
  },
];

const Benefits = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Alle profitieren
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ein System, das Nutzer, Unternehmen und Städte zusammenbringt
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="p-8 bg-card border-2 hover:shadow-medium transition-all duration-300 hover:border-primary/20"
            >
              <div className={`w-16 h-16 rounded-2xl bg-${benefit.color}/10 flex items-center justify-center mb-6`}>
                <benefit.icon className={`w-8 h-8 text-${benefit.color}`} />
              </div>
              
              <h3 className="text-2xl font-bold mb-6 text-card-foreground">
                {benefit.title}
              </h3>
              
              <ul className="space-y-3">
                {benefit.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className={`w-1.5 h-1.5 rounded-full bg-${benefit.color} mt-2 flex-shrink-0`} />
                    <span className="text-muted-foreground leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
