# lab-website

Astro site for the **Lasisi Lab** (Dr. Tina Lasisi, University of Michigan) —
a single-page holding site. Built on the same design system and patterns as
[`personal-website`](https://github.com/tinalasisi/personal-website)
(shared `tokens.css`, pre-paint theme bootstrap, Netlify deploy), but with a
full-width top-nav layout instead of the personal site's sidebar shell.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # production build → ./dist
npm run preview  # serve the production build
```

## Structure

```
src/
  layouts/Base.astro     # <html> shell, font + icon CDN links, theme bootstrap
  pages/index.astro      # the one-pager (hero → research → team → publications → news → contact → footer)
  data/team.ts           # lab members (name, role, badge, group, photo)
  styles/
    tokens.css           # design system — colors, type, spacing (shared with personal-website)
    lab.css              # page styles (header, hero, sections, team grid, panels, contact, footer)
public/
  favicon.svg
  assets/
    mark-*.png, pattern-branches*.png, branch-anchor.png   # marks + branch motif
    team/*.jpg                                              # square (512×512) headshots
    headshot-tina.jpg
```

## Notes

- **Design is locked / high-fidelity** — adapted from the Lasisi Lab design
  handoff. Colors come from CSS variables in `tokens.css`; don't hard-code hex.
- **Theme toggle** cycles system → light → dark, persisted in `localStorage`
  under `ll-theme`; applied before paint to avoid a flash.
- **Team layout** ships in the `grid` variant (`<html data-team-layout="grid">`):
  one responsive grid with role badges. The grouped-by-role layout still exists
  in `lab.css` if you switch the attribute.
- **Icons** load from Font Awesome 6 + Academicons via CDN (in `Base.astro`).
- **Team photos** are temporary headshots; drop final versions in
  `public/assets/team/` at the same paths.
- **Deploy:** set the production domain in `astro.config.mjs` (`site`, currently
  `https://lasisilab.com`) and add a `public/CNAME` for a custom domain.
