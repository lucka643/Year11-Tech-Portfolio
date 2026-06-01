# Toys & Games — Year 11 Design Technology Portfolio

An interactive, scroll-driven website portfolio for the **Toys & Games** Design Technology
project (King's College, Year 11). Built as a single immersive page instead of a slide deck.

## Features

- **Section-by-section navigation** — one smooth glide per scroll gesture; you never rest
  between panels.
- **Live WebGL fog background** — a real-time volumetric smoke shader that slowly shifts
  colour as you move through the portfolio.
- **Layered parallax** — headings, body text, labels and images move at different speeds for
  depth.
- **Glassmorphic content panels** floating over the fog, with a HUD and a section progress rail.

## Sections (current)

1. **Brief** — Design Problem, Situation, Target Market, Design Brief
2. **Research** — Research Plan, Product Analysis ×2, Aesthetics Analysis, Materials

> Research Summary & a 3D interactive wooden-jet design section are planned next.

## Tech

Plain HTML, CSS and JavaScript — no build step, no dependencies.

| File | Purpose |
|------|---------|
| `index.html` | Page structure and all content |
| `css/styles.css` | Styling, layout, typography |
| `js/fog.js` | WebGL fog background shader |
| `js/scroll.js` | Scroll engine: navigation, parallax, colour journey |
| `assets/` | Images |

## Running locally

No build needed — just serve the folder:

```bash
python3 -m http.server 8099
```

Then open <http://localhost:8099>.

---

By Luca Carlisle.
