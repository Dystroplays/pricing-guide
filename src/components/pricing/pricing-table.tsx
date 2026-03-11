import { ProductLineData } from "@/data/pricing";
import { formatPrice } from "@/lib/format";

export function PricingTable({ data }: { data: ProductLineData }) {
  return (
    <div className="overflow-hidden rounded-b-xl border border-t-0 border-border">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-muted border-b border-border">
            <th className="px-6 py-4 text-left font-semibold">Door Size</th>
            <th className="px-6 py-4 text-right font-semibold">Base Price</th>
            <th className="px-6 py-4 text-right font-semibold">+ {data.glassColumnLabel ?? "Glass Option"}</th>
            <th className="px-6 py-4 text-right font-semibold">+ Insulated</th>
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, i) => (
            <tr
              key={row.size}
              className={`border-b border-border/50 last:border-0 transition-colors hover:bg-muted/50 ${
                i % 2 === 0 ? "bg-card" : "bg-muted/30"
              }`}
            >
              <td className="px-6 py-4 font-medium text-foreground">
                {row.size}
              </td>
              <td className="px-6 py-4 text-right font-semibold text-price">
                {formatPrice(row.base)}
              </td>
              <td className="px-6 py-4 text-right text-muted-foreground">
                {formatPrice(row.glass)}
              </td>
              <td className="px-6 py-4 text-right text-muted-foreground">
                {formatPrice(row.insulated)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
