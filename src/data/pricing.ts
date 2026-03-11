export type ProductLine = "signature" | "essentials";

export interface PricingRow {
  size: string;
  base: number;
  glass: number;
  insulated: number;
}

export interface ProductLineData {
  id: ProductLine;
  name: string;
  tagline: string;
  description: string;
  glassColumnLabel?: string;
  rows: PricingRow[];
}

export const SIGNATURE: ProductLineData = {
  id: "signature",
  name: "STK Cedar",
  tagline: "Full Wood STK Cedar Doors",
  description: "No overlay.",
  rows: [
    { size: "8\u00d77", base: 1999, glass: 799, insulated: 799 },
    { size: "8\u00d78", base: 2199, glass: 799, insulated: 799 },
    { size: "9\u00d77", base: 2099, glass: 799, insulated: 799 },
    { size: "9\u00d78", base: 2299, glass: 799, insulated: 799 },
    { size: "16\u00d77", base: 2999, glass: 999, insulated: 999 },
    { size: "16\u00d78", base: 3499, glass: 999, insulated: 999 },
    { size: "18\u00d77", base: 3399, glass: 999, insulated: 999 },
    { size: "18\u00d78", base: 3899, glass: 999, insulated: 999 },
  ],
};

export const ESSENTIALS: ProductLineData = {
  id: "essentials",
  name: "MDO/LP",
  tagline: "MDO/SmartSide LP Door",
  description: "Available in all standard sizes.",
  glassColumnLabel: "Doug fir frame + glass",
  rows: [
    { size: "8\u00d77", base: 1433, glass: 1198, insulated: 399 },
    { size: "8\u00d78", base: 1522, glass: 1198, insulated: 399 },
    { size: "9\u00d77", base: 1612, glass: 1198, insulated: 399 },
    { size: "9\u00d78", base: 1552, glass: 1198, insulated: 399 },
    { size: "16\u00d77", base: 2164, glass: 1598, insulated: 799 },
    { size: "16\u00d78", base: 2313, glass: 1598, insulated: 799 },
    { size: "18\u00d77", base: 2645, glass: 2198, insulated: 799 },
    { size: "18\u00d78", base: 2818, glass: 2198, insulated: 799 },
  ],
};

export const PRODUCT_LINES: ProductLineData[] = [SIGNATURE, ESSENTIALS];
