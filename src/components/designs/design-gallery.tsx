"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SIGNATURE_DESIGNS, ESSENTIALS_DESIGNS, DesignEntry } from "@/data/designs";
import { DesignCard } from "./design-card";
import { DesignLightbox } from "./design-lightbox";

export function DesignGallery() {
  const [selectedDesign, setSelectedDesign] = useState<DesignEntry | null>(
    null
  );

  return (
    <>
      <Tabs defaultValue="signature" className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
          <TabsTrigger value="signature">Wood (Signature)</TabsTrigger>
          <TabsTrigger value="essentials">MDO/LP (Essentials)</TabsTrigger>
        </TabsList>

        <TabsContent value="signature">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {SIGNATURE_DESIGNS.map((design) => (
              <DesignCard
                key={design.id}
                design={design}
                onClick={() => setSelectedDesign(design)}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="essentials">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {ESSENTIALS_DESIGNS.map((design) => (
              <DesignCard
                key={design.id}
                design={design}
                onClick={() => setSelectedDesign(design)}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <DesignLightbox
        design={selectedDesign}
        onClose={() => setSelectedDesign(null)}
      />
    </>
  );
}
