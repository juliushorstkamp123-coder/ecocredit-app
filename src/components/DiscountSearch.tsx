import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, MapPin } from "lucide-react";

const DiscountSearch = () => {
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    // This would typically trigger a search for nearby discounts
    console.log("Searching for discounts near:", location);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Finde Rabatte in Wilmersdorf
            </h2>
            <p className="text-lg text-muted-foreground">
              Entdecke nachhaltige Partner in deinem Kiez und spare bei jedem Einkauf
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
            <div className="relative flex-1">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Straße oder Ort in Wilmersdorf eingeben..."
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="pl-10 h-12 text-base border-2 focus-visible:ring-primary"
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              />
            </div>
            <Button
              size="lg"
              onClick={handleSearch}
              className="bg-gradient-primary hover:opacity-90 h-12 px-8 shadow-medium"
            >
              <Search className="w-5 h-5 mr-2" />
              Suchen
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-3xl mx-auto">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setLocation("Kurfürstendamm")}
              className="border-2 hover:border-primary hover:bg-primary/5"
            >
              Kurfürstendamm
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setLocation("Fehrbelliner Platz")}
              className="border-2 hover:border-primary hover:bg-primary/5"
            >
              Fehrbelliner Platz
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setLocation("Volkspark")}
              className="border-2 hover:border-primary hover:bg-primary/5"
            >
              Volkspark
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setLocation("Prager Platz")}
              className="border-2 hover:border-primary hover:bg-primary/5"
            >
              Prager Platz
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscountSearch;
