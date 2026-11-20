# Karpay Design System

Karpay is a fintech/payments brand (Colombia). This system is built for **decks, documents and brand pieces** — kickoffs, proposals, reports, banners — for B2B clients (e.g. banks, payment participants like SUMASPAY).

## Source material
- `uploads/Kick-off SUMASPAY BRE-B.pptx` — a client kickoff deck (12 slides) for integrating SUMASPAY into BRE-B (Colombia's instant-payments rail) via **Karpay Instapay**. This was the only brand material provided; its cover/hero slide carries the real Karpay logo and the **Global Transactions** product mark. The rest of the deck used a generic PowerPoint template (light-blue pill badges, plain white cards) — this system replaces that with an identity that matches the real brand mark.
- No brand guide, vector logo, or additional decks were available. If more source material shows up (brand guide, other decks, product screenshots), re-run this system against it.

## Products
- **Karpay Instapay** — the platform integrating clients into BRE-B.
- **Global Transactions** — cross-border/global payments product (only product referenced so far).

## Visual foundations
- **Palette**: cool near-white neutrals for everyday content. **Purple** (`--purple-*`, from the Praxis/Karpay brand family) is the primary accent — used for kickers, UI accents and dark cover surfaces (`--gradient-brand`, a clean two-stop purple gradient). **Teal-green** is the secondary accent, for positive states and soft background washes (`--tint-teal`). **Flame** (the orange→red gradient from the Karpay "K" mark) is reserved for the logo itself and critical-status highlights only — never a general background or accent. `--tint-purple` / `--tint-teal` give content pages soft color-blocked panels beyond plain white, without competing with the two cover treatments (paper, gradient-brand).
- **Type**: display headings are **Plus Jakarta Sans** at semibold (`--fw-title`, 600) — not extrabold — per direction; body text is **Public Sans**. Both load from Google Fonts in `tokens/fonts.css`. *Note:* the brand asked for "Kabrio" for headings — no such font exists on Google Fonts (likely means Cabrito, a paid Latin American typeface); Plus Jakarta Sans was substituted as the closest free match. Swap `tokens/fonts.css` + `--font-display` if the real font file becomes available.
- **Shape**: moderate corner radii (8–32px), no pill-everything, no colored left-border cards.
- **Motion**: not defined yet (static decks/docs) — `--ease-standard` / duration tokens are seeded for future use.

## Structure
- `styles.css` — root import list. Link this one file.
- `tokens/` — colors, typography, spacing/radii/shadow tokens.
- `assets/logo/karpay-logo.svg` — the official vector logo (fixed: the source file was missing its `<style>` class-to-gradient mapping, added back from the gradient defs already in the file). Confirms the real brand gradients: the "K" mark is orange→red, and the "ARPAY" wordmark itself is a navy-blue gradient (`#3967b4 → #1b2d75`) — separate from the purple/teal UI palette. Treat the wordmark blue the same way as the flame orange: it belongs to the logo lockup, not the general UI palette.
- `assets/logo/global-transactions-logo.png` / `global-transactions-icon-white.png` — the official Global Transactions lockup (orange-gold ring + "Global Transactions" wordmark in deep purple) and its white-on-transparent variant for dark backgrounds. The wordmark's purple matches this system's primary UI purple — confirms purple as a real brand color, not just an invented UI choice.
- `assets/brand/` — the original Global Transactions hero image, the navy gradient background, and the partner **Praxis** logo (a third party mentioned in the deck — not a Karpay asset, kept for reference only).
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand, Docs).
- `components/` — reusable primitives sized to deck/doc work: Badge, Card + StatCard, Callout, SectionHeader, Timeline, Table.
- `documents/propuesta-tecnica.html` — a 3-page printable document (cover + 2 content pages) with running header/footer and a client-logo slot on the cover, built on the paged-document shell.
- `slides/` — 5 slide templates (Title, Section divider, Content/cards, Cronograma/Timeline, Cierre) rebuilding the kickoff deck's content in the new system, with color-blocked panels and icons.

## Iconography
- `assets/icons/` — a custom line-icon set (API, base de datos, transferencia, mundo/divisas, persona/banco, sitio) covering the technical/product concepts that show up across kickoff decks and proposals. Each icon ships in gray (light backgrounds) and white (dark backgrounds). No icon font or SVG sprite — these are flat PNGs; use them at their given size, don't recolor via CSS filters.

## Intentional additions
No component library or Figma file defined an inventory, so the component set above was authored from scratch, sized to what a kickoff/status deck and client document actually need (no generic app-UI primitives like Input/Select/Tabs, since this system doesn't cover product UI).

## Caveats
- Karpay's own vector logo (`karpay-logo.svg` / `karpay-logo-white.svg`) and the Global Transactions PNG lockups are now confirmed against real brand files the user provided — no longer placeholders.
- Palette accents (purple, teal, flame) are grounded in these real assets; flag anything that still looks off-brand.
