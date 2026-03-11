import { Package, Truck, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const INFO_ITEMS = [
  {
    icon: Package,
    title: "Volume Discounts",
    description: "Orders of 10+ doors qualify for tiered volume pricing.",
  },
  {
    icon: Truck,
    title: "Lead Time",
    description: "Standard orders ship within 5\u20137 business days.",
  },
  {
    icon: ShieldCheck,
    title: "Warranty",
    description: "All doors include a 5-year manufacturer warranty.",
  },
];

export function InfoCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
      {INFO_ITEMS.map((item) => (
        <Card key={item.title} className="border-border bg-card text-center">
          <CardContent className="pt-6 pb-6">
            <div className="mx-auto mb-3 h-10 w-10 rounded-full bg-muted flex items-center justify-center">
              <item.icon className="h-5 w-5 text-price" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">
              {item.title}
            </h3>
            <p className="text-muted-foreground text-sm">
              {item.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
