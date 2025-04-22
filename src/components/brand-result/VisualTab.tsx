
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BrandData } from "@/types/brandResult";

interface VisualTabProps {
  brandData: BrandData;
}

const VisualTab = ({ brandData }: VisualTabProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Éléments visuels</CardTitle>
        <CardDescription>
          Couleurs, typographie et éléments graphiques
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-4">Logo</h3>
          <div className="flex justify-center p-8 border rounded-md bg-background">
            <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-white">{brandData.name.substring(0, 2)}</span>
            </div>
          </div>
          <p className="text-sm text-center mt-2 text-muted-foreground">Logo provisoire. Un logo définitif sera généré sous peu.</p>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-3">Palette de couleurs</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {brandData.colors.map((color, index) => (
              <div key={index} className="space-y-2">
                <div className={`h-20 rounded-md ${color.className}`}></div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">{color.name}</span>
                  <span className="text-sm text-muted-foreground">{color.hex}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-3">Typographie</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 border rounded-md">
              <span className="text-sm text-muted-foreground">Titres</span>
              <p className="font-montserrat text-2xl font-semibold">{brandData.typography.heading}</p>
            </div>
            <div className="p-4 border rounded-md">
              <span className="text-sm text-muted-foreground">Texte</span>
              <p className="font-inter text-lg">{brandData.typography.body}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default VisualTab;
