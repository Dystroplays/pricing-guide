"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { SIGNATURE_DESIGNS, ESSENTIALS_DESIGNS, DesignEntry } from "@/data/designs";

export function DesignOptionsGrid({
  category,
}: {
  category: "signature" | "essentials";
}) {
  const [selected, setSelected] = useState<DesignEntry | null>(null);
  const designs =
    category === "signature" ? SIGNATURE_DESIGNS : ESSENTIALS_DESIGNS;

  return (
    <>
      <div className="border border-t-0 border-border rounded-b-xl bg-card p-4 sm:p-6">
        <p className="text-sm text-muted-foreground mb-4">
          Click any design for a closer look. All designs available in standard
          sizes.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {designs.map((design) => (
            <button
              key={design.id}
              onClick={() => setSelected(design)}
              className="group relative aspect-[4/3] rounded-lg border border-border bg-white overflow-hidden transition-all duration-200 hover:border-price/50 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-price"
            >
              <Image
                src={design.imagePath}
                alt={design.name}
                fill
                className="object-contain p-1"
                sizes="(max-width: 640px) 45vw, 30vw"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-2">
                <p className="text-xs font-medium text-white">{design.name}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-w-2xl bg-card border-border">
          <DialogHeader>
            <DialogTitle>{selected?.name}</DialogTitle>
          </DialogHeader>
          <div className="relative aspect-[4/3] bg-white rounded-lg border border-border overflow-hidden">
            {selected && (
              <Image
                src={selected.imagePath}
                alt={selected.name}
                fill
                className="object-contain p-2"
                sizes="(max-width: 768px) 90vw, 640px"
              />
            )}
          </div>
          <p className="text-sm text-muted-foreground text-center">
            {category === "signature"
              ? "Full Wood STK Cedar Door"
              : "MDO/SmartSide LP Door"}
          </p>
        </DialogContent>
      </Dialog>
    </>
  );
}
