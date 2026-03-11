"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PricingTable } from "./pricing-table";
import { PricingCards } from "./pricing-cards";
import { DesignOptionsGrid } from "./design-options-grid";
import { GalleryPreview } from "./gallery-preview";
import { SIGNATURE, ESSENTIALS, ProductLineData } from "@/data/pricing";
import { Paintbrush, Images } from "lucide-react";

type ViewMode = "pricing" | "designs" | "gallery";

function ProductLineContent({ data }: { data: ProductLineData }) {
  const [view, setView] = useState<ViewMode>("pricing");

  const toggleView = (target: ViewMode) => {
    setView((prev) => (prev === target ? "pricing" : target));
  };

  return (
    <div>
      {/* Dark header bar */}
      <div className="rounded-t-xl bg-table-header text-table-header-foreground px-4 sm:px-6 py-4">
        <div className="flex items-start justify-between gap-4">
          {/* Left: title + tagline */}
          <div className="min-w-0">
            <h2 className="text-lg font-semibold">{data.name} Pricing</h2>
            <p className="text-sm text-table-header-foreground/70">
              {data.tagline}. {data.description}
            </p>
          </div>

          {/* Right: pill buttons */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => toggleView("designs")}
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
                view === "designs"
                  ? "bg-price text-white shadow-sm"
                  : "bg-white/10 text-table-header-foreground/80 hover:bg-white/20"
              }`}
            >
              <Paintbrush className="h-3 w-3" />
              <span className="hidden sm:inline">Design Options</span>
              <span className="sm:hidden">Designs</span>
            </button>
            <button
              onClick={() => toggleView("gallery")}
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
                view === "gallery"
                  ? "bg-price text-white shadow-sm"
                  : "bg-white/10 text-table-header-foreground/80 hover:bg-white/20"
              }`}
            >
              <Images className="h-3 w-3" />
              Gallery
            </button>
          </div>
        </div>
      </div>

      {/* Content area */}
      {view === "pricing" && (
        <>
          <div className="hidden sm:block">
            <PricingTable data={data} />
          </div>
          <div className="sm:hidden">
            <PricingCards data={data} />
          </div>
        </>
      )}

      {view === "designs" && (
        <DesignOptionsGrid category={data.id} />
      )}

      {view === "gallery" && (
        <GalleryPreview />
      )}
    </div>
  );
}

export function PricingSection() {
  return (
    <Tabs defaultValue="signature" className="w-full">
      <TabsList className="grid w-full max-w-sm mx-auto grid-cols-2 mb-8">
        <TabsTrigger value="signature">STK Cedar</TabsTrigger>
        <TabsTrigger value="essentials">MDO/LP</TabsTrigger>
      </TabsList>

      <TabsContent value="signature">
        <ProductLineContent data={SIGNATURE} />
      </TabsContent>

      <TabsContent value="essentials">
        <ProductLineContent data={ESSENTIALS} />
      </TabsContent>
    </Tabs>
  );
}
