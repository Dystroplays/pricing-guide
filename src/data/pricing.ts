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
  rows: PricingRow[];
}

export const SIGNATURE: ProductLineData = {
  id: "signature",
  name: "STK Cedar",
  tagline: "Full Wood STK Cedar Doors",
  description: "No overlay.",
  rows: [
    { size: "8\u00d77", base: 1999, glass: 599, insulated: 399 },
    { size: "8\u00d78", base: 2199, glass: 599, insulated: 399 },
    { size: "9\u00d78", base: 2299, glass: 599, insulated: 399 },
    { size: "16\u00d77", base: 2999, glass: 799, insulated: 799 },
    { size: "16\u00d78", base: 3499, glass: 799, insulated: 799 },
    { size: "18\u00d78", base: 3899, glass: 799, insulated: 799 },
  ],
};

export const ESSENTIALS: ProductLineData = {
  id: "essentials",
  name: "MDO/LP",
  tagline: "MDO/SmartSide LP Door",
  description: "Available in all standard sizes.",
  rows: [
    { size: "8\u00d77", base: 1433, glass: 499, insulated: 399 },
    { size: "8\u00d78", base: 1522, glass: 499, insulated: 399 },
    { size: "9\u00d78", base: 1552, glass: 499, insulated: 399 },
    { size: "16\u00d77", base: 2164, glass: 799, insulated: 799 },
    { size: "16\u00d78", base: 2313, glass: 799, insulated: 799 },
    { size: "18\u00d78", base: 2818, glass: 799, insulated: 799 },
  ],
};

export const PRODUCT_LINES: ProductLineData[] = [SIGNATURE, ESSENTIALS];
