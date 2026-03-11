import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { PricingSection } from "@/components/pricing/pricing-section";
import { InfoCards } from "@/components/pricing/info-cards";

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero */}
      <section className="text-center mb-12">
        <Image
          src="/Doorvana D Icon Blk.png"
          alt="Doorvana"
          width={56}
          height={56}
          className="mx-auto mb-4"
        />
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
          Doorvana Dealer Pricing
        </h1>
        <Badge
          variant="outline"
          className="text-price border-price/30 bg-price/5"
        >
          Effective January 2026
        </Badge>
      </section>

      {/* Pricing with Design Options + Gallery sub-tabs */}
      <PricingSection />

      {/* Info cards */}
      <InfoCards />
    </div>
  );
}
