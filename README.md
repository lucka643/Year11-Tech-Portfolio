# Toys & Games — Year 11 Design Technology Portfolio

An interactive portfolio website for the **Toys & Games** Design Technology project
(King's College, Year 11): a sustainable **wooden fighter jet** with working control
surfaces, by Luca Carlisle.

Live: https://lucka643.github.io/Year11-Tech-Portfolio/

## How it works

A single-page app (no build step). The landing page lists the seven portfolio
sections as big numbered rows — click one to open that section as its own page,
scroll through it with animated reveals, and use **Back** to return. The final row
opens an **interactive 3D viewer** of the jet.

- **Live WebGL fog background** that changes colour per section.
- **Section pages** with scroll-triggered reveals, parallax media, tabbed decks,
  galleries with lightbox, tables and timelines.
- **3D viewer** (Three.js): orbit/zoom, hover-highlight parts, click a part to
  fly the camera to it and read about it; control surfaces oscillate, the canopy
  opens. Currently a procedural stand-in jet — drop the real CAD export at
  `assets/jet.glb` (nodes named `fuselage, canopy, wingL, wingR, tail, fin, gear`
  and movers `aileronL, aileronR, elevL, elevR, rudder`) and it swaps in.

## Files

| File | Purpose |
|------|---------|
| `index.html` | App shell |
| `css/styles.css` | Design system |
| `js/fog.js` | WebGL fog background |
| `js/router.js` | Hash routing + view transitions |
| `js/home.js` | Landing view |
| `js/section.js` | Section renderer + reveal engine |
| `js/content.js` | **All portfolio content (edit text here)** |
| `js/viewer3d.js` | Three.js jet viewer (lazy-loaded) |
| `assets/` | Photos, sketches, model images |

## Run locally

```bash
python3 -m http.server 8099
```
Open <http://localhost:8099>.

## Still needed (placeholders in the site)

- Exploded drawing (Section 3) · working drawing (Section 5)
- Build/diary photos + finished-product photos (Sections 5–6)
- Two real reviewers (Section 7) · `assets/jet.glb` (3D viewer)
