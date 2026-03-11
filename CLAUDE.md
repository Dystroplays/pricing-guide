# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run lint     # Run ESLint
npm run start    # Start production server
```

## Architecture

This is a **B2B dealer pricing guide** for Doorvana, a premium wood garage door manufacturer. It's a single-page Next.js app displaying wholesale pricing, design options, and installation galleries for two product lines.

### Data Layer (`src/data/`)

All pricing and design content lives in two files:
- `pricing.ts` — Defines two `ProductLine` objects (STK Cedar / Signature and MDO/LP / Essentials), each with 8 door sizes, base prices, and add-on prices (glass, insulation).
- `designs.ts` — Defines 18 design options per product line and 4 gallery images per line.

When updating prices or adding designs, edit these files only.

### Component Structure

The app renders a single page (`src/app/page.tsx`) containing:
- `<PricingSection />` — the main interactive component (client component with `useState`)
- `<InfoCards />` — static info cards below pricing

`PricingSection` manages two layers of state:
1. **Active tab**: which product line (Signature vs Essentials)
2. **Active view**: `"pricing"` | `"designs"` | `"gallery"` — toggled via pill buttons in the dark header bar

The `"pricing"` view renders `<PricingTable />` on desktop and `<PricingCards />` on mobile (hidden/shown via Tailwind breakpoints).

### Styling

- **Tailwind CSS v4** with custom OKLch color tokens defined in `src/app/globals.css`:
  - `--price`: primary accent (teal-ish)
  - `--table-header`: dark navy for table/card headers
  - `--background`: light gray page background
- **shadcn/ui** components in `src/components/ui/` — do not edit these manually; regenerate via `npx shadcn add <component>`.
- Path alias `@/*` maps to `src/*`.

### Key Patterns

- `cn()` from `src/lib/utils.ts` is the standard utility for conditional class merging (wraps `clsx` + `tailwind-merge`).
- `formatPrice()` from `src/lib/format.ts` formats numbers as USD currency strings.
- Lightbox/modal dialogs use shadcn's `<Dialog>` component — see `design-lightbox.tsx` and `gallery-preview.tsx` for the pattern.
- Vercel Analytics and Speed Insights are included in `src/app/layout.tsx` and require no configuration.
