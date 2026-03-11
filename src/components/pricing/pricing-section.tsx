"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PricingTable } from "./pricing-table";
import { PricingCards } from "./pricing-cards";
import { DesignOptionsGrid } from "./design-options-grid";
import { GalleryPreview } from "./gallery-preview";
import { SIGNATURE, ESSENTIALS, ProductLineData } from "@/data/pricing";
import { Paintbrush, Images, ArrowLeft } from "lucide-react";

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
              className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold cursor-pointer transition-all duration-150 hover:scale-105 active:scale-95 ${
                view === "designs"
                  ? "bg-price text-white border border-price shadow-md"
                  : "bg-white/10 text-white border-2 border-red-500 hover:bg-white/25 hover:border-red-400"
              }`}
            >
              <Paintbrush className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Design Options</span>
              <span className="sm:hidden">Designs</span>
            </button>
            <button
              onClick={() => toggleView("gallery")}
              className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold cursor-pointer transition-all duration-150 hover:scale-105 active:scale-95 ${
                view === "gallery"
                  ? "bg-price text-white border border-price shadow-md"
                  : "bg-white/10 text-white border-2 border-red-500 hover:bg-white/25 hover:border-red-400"
              }`}
            >
              <Images className="h-3.5 w-3.5" />
              Gallery
            </button>
          </div>
        </div>
      </div>

      {/* Back button */}
      {view !== "pricing" && (
        <div className="px-4 sm:px-6 pt-4">
          <button
            onClick={() => setView("pricing")}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Pricing
          </button>
        </div>
      )}

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
        <GalleryPreview category={data.id} />
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

      <p className="text-center text-sm text-muted-foreground mb-6">
        All prices are <span className="font-semibold text-foreground">pickup pricing</span> — shipping available and charged at cost.
      </p>

      <TabsContent value="signature">
        <ProductLineContent data={SIGNATURE} />
      </TabsContent>

      <TabsContent value="essentials">
        <ProductLineContent data={ESSENTIALS} />
      </TabsContent>
    </Tabs>
  );
}
