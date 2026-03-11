"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { GALLERY_IMAGES, GalleryEntry } from "@/data/designs";

export function GalleryPreview({
  category,
}: {
  category: "signature" | "essentials";
}) {
  const [selected, setSelected] = useState<GalleryEntry | null>(null);
  const images = GALLERY_IMAGES[category];

  return (
    <>
      <div className="border border-t-0 border-border rounded-b-xl bg-card p-4 sm:p-6">
        <p className="text-sm text-muted-foreground mb-4">
          Real Doorvana installations from our customers. Click any photo for a closer look.
        </p>

        <div className="grid grid-cols-2 gap-3 mb-6">
          {images.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelected(item)}
              className="group relative aspect-[4/3] rounded-lg border border-border bg-white overflow-hidden transition-all duration-200 hover:border-price/50 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-price"
            >
              <Image
                src={item.imagePath}
                alt={item.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 45vw, 30vw"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-2">
                <p className="text-xs font-medium text-white">{item.name}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://www.doorvana.com/garage-door-gallery"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-2.5 rounded-lg transition-colors text-sm"
          >
            View Full Gallery
            <ExternalLink className="h-4 w-4" />
          </a>
          <p className="text-xs text-muted-foreground mt-2">
            Opens doorvana.com in a new tab
          </p>
        </div>
      </div>

      {/* Lightbox */}
      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-w-2xl bg-card border-border">
          <DialogHeader>
            <DialogTitle>{selected?.name}</DialogTitle>
          </DialogHeader>
          <div className="relative aspect-[4/3] bg-black rounded-lg overflow-hidden">
            {selected && (
              <Image
                src={selected.imagePath}
                alt={selected.name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 90vw, 640px"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
