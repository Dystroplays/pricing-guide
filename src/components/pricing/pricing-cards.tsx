import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProductLineData } from "@/data/pricing";
import { formatPrice } from "@/lib/format";

export function PricingCards({ data }: { data: ProductLineData }) {
  return (
    <div className="space-y-3">
      {data.rows.map((row) => (
        <Card key={row.size} className="border-border bg-card">
          <CardHeader className="pb-2 pt-4 px-4">
            <CardTitle className="text-base font-semibold text-foreground">
              {row.size}
            </CardTitle>
          </CardHeader>
          <CardContent className="px-4 pb-4">
            <div className="grid grid-cols-3 gap-3 text-center">
              <div>
                <p className="text-[11px] text-muted-foreground uppercase tracking-wider mb-1">
                  Base
                </p>
                <p className="text-price font-bold text-lg">
                  {formatPrice(row.base)}
                </p>
              </div>
              <div>
                <p className="text-[11px] text-muted-foreground uppercase tracking-wider mb-1">
                  + Glass
                </p>
                <p className="font-semibold text-foreground">
                  {formatPrice(row.glass)}
                </p>
              </div>
              <div>
                <p className="text-[11px] text-muted-foreground uppercase tracking-wider mb-1">
                  + Insulated
                </p>
                <p className="font-semibold text-foreground">
                  {formatPrice(row.insulated)}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
