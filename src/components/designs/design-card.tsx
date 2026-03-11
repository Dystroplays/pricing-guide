import type { DesignEntry } from "@/data/designs";

interface DesignCardProps {
  design: DesignEntry;
  onClick: () => void;
}

export function DesignCard({ design, onClick }: DesignCardProps) {
  return (
    <button
      onClick={onClick}
      className="group relative aspect-[4/3] rounded-xl border border-border bg-card overflow-hidden transition-all duration-200 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 focus:outline-none focus:ring-2 focus:ring-primary"
    >
      {/* Placeholder — replace with next/image when real images arrive */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary to-background flex items-center justify-center">
        <span className="text-5xl font-bold text-muted-foreground/20 group-hover:text-primary/30 transition-colors duration-200">
          {design.id}
        </span>
      </div>

      {/* Label */}
      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-3">
        <p className="text-sm font-medium text-white">{design.name}</p>
      </div>
    </button>
  );
}
