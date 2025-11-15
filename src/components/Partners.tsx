import { Card } from "@/components/ui/card";
import { ShoppingBag, Coffee, Bike, Utensils, Home, Zap } from "lucide-react";

const partnerCategories = [
  {
    icon: ShoppingBag,
    name: "Second-Hand & Mode",
    examples: ["Kleiderkreisel", "Vinted", "nachhaltige Marken"],
  },
  {
    icon: Coffee,
    name: "Cafés & Restaurants",
    examples: ["Lokale Cafés", "Bio-Restaurants", "Vegane Küche"],
  },
  {
    icon: Bike,
    name: "Mobilität",
    examples: ["E-Scooter", "Fahrrad-Sharing", "ÖPNV-Partner"],
  },
  {
    icon: Utensils,
    name: "Lebensmittel",
    examples: ["Bio-Supermärkte", "Regionale Märkte", "Unverpackt-Läden"],
  },
  {
    icon: Home,
    name: "Haushaltsware",
    examples: ["Mehrweg-Produkte", "Reparatur-Services", "Upcycling"],
  },
  {
    icon: Zap,
    name: "Energie & Services",
    examples: ["Ökostrom", "Carsharing", "Grüne Dienstleister"],
  },
];

const Partners = () => {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Unsere Partner
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Löse deine EcoCredits bei über 200 nachhaltigen Partnern ein
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {partnerCategories.map((category, index) => (
            <Card 
              key={index}
              className="p-6 bg-card hover:shadow-soft transition-all duration-300 border hover:border-primary/30"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold mb-2 text-card-foreground">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {category.examples.join(" • ")}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Und viele weitere Partner aus deiner Region
          </p>
        </div>
      </div>
    </section>
  );
};

export default Partners;
