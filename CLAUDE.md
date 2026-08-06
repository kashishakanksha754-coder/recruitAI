# Hyrix recruitAI — Claude Project Rules

## Deployment Rules

### Before Every Push
1. Check all branches for pending changes: `git branch -r`
2. If any branch (e.g. Priyanshu's `new-test`) has changes that need merging, review them first
3. Merge the relevant changes into `main` carefully — never overwrite existing fixes (active-state nav, grid layout, translation keys, etc.)
4. Then push to `main` — this is the only branch that triggers production deployment on Vercel

### Only `main` triggers Vercel production
- All work should land on `main` before being considered deployed
- Branch `claude/quirky-newton-pdelrh` is a dev/working branch — delete it when done to avoid duplicate Vercel preview deployments
- Never push 100+ times in a day — Vercel free tier allows 100 deployments/day; avoid empty "force rebuild" commits

### After Every Push — Monitor Deployment
1. Wait 2–3 minutes for Vercel to build
2. Check build status via Vercel dashboard or build logs
3. If build fails, fix the error immediately and push again
4. Confirm the live site at `https://recruit-ai-ochre.vercel.app` reflects the changes

### Common Build Errors to Watch
- Missing translation keys: always add new keys to BOTH `en` and `ar` sections in `src/lib/translations.ts`
- TypeScript errors: run `npx tsc --noEmit` locally before pushing if making type-sensitive changes

## Branch Strategy
- `main` — production, Vercel auto-deploys from this
- `new-test` — Priyanshu's branch; check for logo/CSS changes before merging
- `claude/quirky-newton-pdelrh` — Claude's working branch; keep in sync with main, delete when unused

## Key Files
- `src/lib/translations.ts` — all UI text, both EN and AR
- `src/components/Navbar.tsx` — has active-state underline + CSS Grid centering (do not revert)
- `src/components/AriaHub.tsx` — center sphere shows only "Hyrix" text (no subtext)
- `src/app/page.tsx` — homepage
- `src/components/HyrixLogo.tsx` — uses `src/assests/Logo.svg`
