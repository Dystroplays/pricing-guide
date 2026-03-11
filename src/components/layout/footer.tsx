import { Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border mt-16 bg-card">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center mb-6">
          <p className="text-muted-foreground text-sm mb-5">
            For custom sizes or design options, please contact us.
          </p>
          <p className="text-sm font-medium text-foreground mb-4">
            Pickup Location: 5001 Mosson Rd. Fort Worth, TX 76119
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
            <a
              href="tel:2146053376"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-price transition-colors"
            >
              <Phone className="h-4 w-4" />
              214.605.3376
            </a>
            <a
              href="mailto:Hello@doorvana.com"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-price transition-colors"
            >
              <Mail className="h-4 w-4" />
              Hello@doorvana.com
            </a>
          </div>
        </div>
        <div className="border-t border-border pt-5 text-center text-xs text-muted-foreground">
          <p>Prices subject to change without notice. &copy; 2026 Doorvana</p>
        </div>
      </div>
    </footer>
  );
}
