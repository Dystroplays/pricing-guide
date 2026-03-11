import { ExternalLink } from "lucide-react";

const GALLERY_PLACEHOLDERS = [
  { id: 1, label: "Signature Cedar Install" },
  { id: 2, label: "Modern Farmhouse" },
  { id: 3, label: "Classic Carriage Style" },
  { id: 4, label: "Custom with Glass" },
];

export function GalleryPreview() {
  return (
    <div className="border border-t-0 border-border rounded-b-xl bg-card p-6">
      <p className="text-sm text-muted-foreground mb-4">
        See real Doorvana installations from our customers.
      </p>

      {/* Preview grid */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        {GALLERY_PLACEHOLDERS.map((item) => (
          <div
            key={item.id}
            className="aspect-[4/3] rounded-lg border border-border bg-muted/30 flex items-center justify-center"
          >
            <div className="text-center px-4">
              <div className="text-3xl text-muted-foreground/20 mb-1">
                {"\ud83d\udcf7"}
              </div>
              <p className="text-xs text-muted-foreground">{item.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Link to full gallery */}
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
  );
}
