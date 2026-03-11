import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { DesignEntry } from "@/data/designs";

interface DesignLightboxProps {
  design: DesignEntry | null;
  onClose: () => void;
}

export function DesignLightbox({ design, onClose }: DesignLightboxProps) {
  return (
    <Dialog open={!!design} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-2xl bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-foreground">
            {design?.name}
          </DialogTitle>
        </DialogHeader>
        <div className="aspect-[4/3] bg-background rounded-lg flex items-center justify-center border border-border">
          {/* Placeholder — replace with next/image when real images arrive */}
          <span className="text-7xl font-bold text-muted-foreground/15">
            {design?.id}
          </span>
        </div>
        <p className="text-sm text-muted-foreground text-center">
          {design?.category === "signature"
            ? "Full Wood STK Cedar Door"
            : "MDO/SmartSide LP Door"}
        </p>
      </DialogContent>
    </Dialog>
  );
}
