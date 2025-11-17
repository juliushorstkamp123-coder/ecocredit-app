import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Leaf, Bell } from "lucide-react";
import heroImage from "@/assets/hero-sustainable-city.jpg";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

const waitlistSchema = z.object({
  email: z.string().email({ message: "Bitte gib eine gültige E-Mail-Adresse ein" }),
});

const Hero = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof waitlistSchema>>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof waitlistSchema>) => {
    console.log("Waitlist submission:", values);
    toast({
      title: "Erfolgreich eingetragen! 🎉",
      description: "Du erhältst eine Benachrichtigung, sobald wir starten.",
    });
    form.reset();
  };

  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Sustainable city with eco-friendly transportation" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full border border-primary/20">
            <Bell className="w-4 h-4 animate-pulse" />
            <span className="text-sm font-medium">🎁 Exklusiv: Frühe Anmeldung = Mehr sparen</span>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Sichere dir{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                exklusive Launch-Rabatte
              </span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
              Trage dich in die Warteliste ein und erhalte beim Launch zusätzliche Bonuspunkte und Sonderkonditionen
            </p>
          </div>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-md mx-auto mb-6">
              <div className="flex flex-col sm:flex-row gap-3 p-2 bg-card/50 backdrop-blur-sm rounded-lg border-2 border-primary/20 shadow-lg">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormControl>
                        <Input
                          placeholder="deine@email.de"
                          {...field}
                          className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-base"
                        />
                      </FormControl>
                      <FormMessage className="text-left text-xs mt-1" />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  size="lg"
                  className="bg-gradient-primary hover:opacity-90 shadow-medium"
                >
                  <Bell className="w-4 h-4 mr-2" />
                  Jetzt sparen
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                ✨ Wartelisten-Mitglieder erhalten Startbonus beim Launch
              </p>
            </form>
          </Form>
          
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full border border-primary/20">
            <Leaf className="w-4 h-4" />
            <span className="text-sm font-medium">Nachhaltigkeit belohnen</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
            Gutes tun.{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Prämien sammeln.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            EcoCredit ist das erste Bonusprogramm, das nachhaltige Entscheidungen im Alltag belohnt – wie Payback, nur für den Planeten.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 text-lg px-8 shadow-medium"
            >
              App starten
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 border-2"
            >
              Für Unternehmen
            </Button>
          </div>
          
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">200+</div>
              <div className="text-sm text-muted-foreground">Partner</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">50k+</div>
              <div className="text-sm text-muted-foreground">Nutzer</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">2.5M</div>
              <div className="text-sm text-muted-foreground">CO₂ gespart</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
