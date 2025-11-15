import { QRCodeSVG } from "qrcode.react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Smartphone } from "lucide-react";

const QRCode = () => {
  // This would typically be a dynamic URL linking to the user's profile or a payment/reward page
  const qrValue = "https://ecocredit.app/scan";

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Nachhaltig handeln, Prämie sichern
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Zeige deinen QR-Code im Restaurant, Café oder beim Einkaufen und sammle EcoCredits
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden border-2 shadow-xl">
            <CardHeader className="text-center bg-gradient-to-r from-primary/10 to-primary/5 pb-8">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Smartphone className="w-12 h-12 text-primary" />
                </div>
              </div>
              <CardTitle className="text-2xl md:text-3xl mb-2">
                Dein persönlicher QR-Code
              </CardTitle>
              <CardDescription className="text-base">
                Lass diesen Code beim nachhaltigen Einkauf scannen
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center pt-8 pb-10">
              <div className="bg-white p-8 rounded-2xl shadow-lg mb-6">
                <QRCodeSVG
                  value={qrValue}
                  size={256}
                  level="H"
                  includeMargin={true}
                  fgColor="hsl(var(--primary))"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl mt-4">
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">1</div>
                  <p className="text-sm text-muted-foreground">
                    Öffne die App beim Bezahlen
                  </p>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">2</div>
                  <p className="text-sm text-muted-foreground">
                    Zeige deinen QR-Code vor
                  </p>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">3</div>
                  <p className="text-sm text-muted-foreground">
                    Erhalte sofort EcoCredits
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            <span className="font-semibold text-foreground">Tipp:</span> Füge den QR-Code zu deinem Wallet hinzu für noch schnelleren Zugriff
          </p>
        </div>
      </div>
    </section>
  );
};

export default QRCode;
