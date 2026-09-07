# Bath restaurant demos

Unofficial Next.js (App Router) + TypeScript + Tailwind demos for cafes and restaurants in Bath, UK.
Deployed as a **static export** to Cloudflare Pages.

> These pages are demo redesigns — **not** official venue websites.

## Stack

- Next.js 15 App Router, TypeScript, Tailwind CSS v4
- Static export (`output: "export"`) → `out/` for Cloudflare Pages
- Content-driven venues under `src/data/venues/`

## Local development

```bash
# Install
bun install
# or: npm install

# Dev server
bun run dev
# or: npm run dev

# Production build (writes static files to out/)
bun run build
# or: npm run build
```

Open http://localhost:3000 — hub at `/`. First demo: `/demos/rosarios`.

## How to add a venue

1. Create `src/data/venues/<slug>.ts` exporting a `Venue` object (see `rosarios.ts` and `types.ts`).
2. Register it in `src/data/venues/index.ts` (`venues` array).
3. Add a page at `src/app/demos/<slug>/page.tsx`.
4. Always include the banner: **Demo redesign — not the official site**.
5. Use verified public info only; label unknowns as placeholders. Do **not** invent reviews, prices, or metrics.

## Cloudflare Pages deploy

This project uses **static export** (not `@opennextjs/cloudflare`) so Pages can serve `out/` with no Workers adapter.

### Option A — Dashboard (git connected)

1. Cloudflare → Workers & Pages → Create → Pages → Connect to Git.
2. Select `zhoule/bath-restaurant-demos`.
3. Build settings:
   - **Build command:** `npm run build` (or `bun run build`)
   - **Build output directory:** `out`
   - **Node version:** 20+ (set `NODE_VERSION=20` in Pages env if needed)
4. Deploy. This static site needs no private app configuration in the repo.

`wrangler.toml` sets `pages_build_output_dir = "out"` for CLI deploys.

### Option B — CLI

```bash
bun run build
bunx wrangler pages deploy out --project-name=bath-restaurant-demos
```

Log in to Cloudflare with Wrangler locally. Keep cloud account material out of git.

### OpenNext / Workers (optional later)

For SSR or middleware on Cloudflare Workers, migrate to `@opennextjs/cloudflare`,
remove `output: "export"`, add `open-next.config.ts`, and point Wrangler at `.open-next/worker.js`.
Static export was chosen here because it builds cleanly for a content-only demo hub.

## Key paths

| Path | Purpose |
|------|---------|
| `src/app/page.tsx` | Hub listing demos |
| `src/app/demos/rosarios/page.tsx` | Rosario’s Cafe demo |
| `src/data/venues/` | Typed venue content |
| `src/components/DemoBanner.tsx` | Required demo disclaimer banner |
| `wrangler.toml` | Pages output dir hint |
| `next.config.ts` | `output: "export"` |

## Rosario’s Cafe (first demo)

Public Bath Italian cafe — content from https://www.rosarioscafe.co.uk/
(hours may differ across their pages — the demo notes this).
Address: 18 Northumberland Place, Bath BA1 5AR.

## Affiliation

Unofficial portfolio demos. Not affiliated with or endorsed by the venues.


## Old York Tea Room (flagship sample)

Quoteable single-venue deepen at `/demos/old-york-tea-room`.

- **Inbound table requests** use [FormSubmit](https://formsubmit.co) AJAX → `jack.zxzhou@gmail.com` (no API key). Owner can change the FormSubmit recipient email later by editing `TableRequestForm.tsx` (`FORMSUBMIT_ENDPOINT`). First live submit may require confirming the address via FormSubmit’s activation email.
- Hours, menu names, and the £43.99 Afternoon Experience offer are from public press/aggregators — confirm with the venue. No invented prices; no fake ResDiary.
- Photo credits and research: `research/old-york-tea-room.md`.
