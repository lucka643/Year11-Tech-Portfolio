/* ============================================================
   scroll.js — scroll engine
   · per-element parallax (data-speed) so layers travel at
     different rates even at constant scroll speed
   · slides rise in from below, fade + lift out through the top
   · colour journey: eases the fog + UI accent between the
     palette of the two slides bracketing the viewport centre
   · builds the right-hand progress rail
   ============================================================ */
(function () {
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const slides = [...document.querySelectorAll(".slide")];

  // ---- parse each slide's palette ----
  const hexToRGB = (h) => {
    h = h.replace("#", "");
    return [
      parseInt(h.slice(0, 2), 16) / 255,
      parseInt(h.slice(2, 4), 16) / 255,
      parseInt(h.slice(4, 6), 16) / 255,
    ];
  };
  const data = slides.map((s) => ({
    el: s,
    deep: hexToRGB(s.dataset.deep || "#05070f"),
    light: hexToRGB(s.dataset.light || "#2b4a7a"),
    accent: s.dataset.accent || "#7fd4ff",
    label: s.dataset.label || "",
    // collect children that should parallax
    layers: [...s.querySelectorAll("[data-speed]")].map((c) => ({
      node: c,
      speed: parseFloat(c.dataset.speed) || 1,
    })),
    content: s.querySelector(".content"),
  }));

  // ---- drop background images into frames (if files exist) ----
  document.querySelectorAll(".frame[data-img]").forEach((f) => {
    // resolve relative to the PAGE, not the stylesheet, so the url() in CSS
    // doesn't get re-resolved against /css/
    const abs = new URL(f.dataset.img, location.href).href;
    const img = new Image();
    img.onload = () => f.style.setProperty("--frame-img", `url("${abs}")`);
    img.src = abs;
  });

  // ---- build progress rail ----
  const ticks = document.getElementById("railTicks");
  const railFill = document.getElementById("railFill");
  data.forEach((d, i) => {
    const li = document.createElement("li");
    li.textContent = String(i + 1).padStart(2, "0");
    li.title = d.label;
    li.addEventListener("click", () =>
      reduce ? d.el.scrollIntoView() : goTo(i)
    );
    ticks.appendChild(li);
  });
  const tickEls = [...ticks.children];

  // ---- helpers ----
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const smooth = (t) => t * t * (3 - 2 * t); // smoothstep
  const lerp = (a, b, t) => a + (b - a) * t;
  const lerpRGB = (a, b, t) => [lerp(a[0], b[0], t), lerp(a[1], b[1], t), lerp(a[2], b[2], t)];
  const toCss = (c) =>
    `rgb(${Math.round(c[0] * 255)},${Math.round(c[1] * 255)},${Math.round(c[2] * 255)})`;

  const root = document.documentElement;
  let vh = innerHeight;
  let ticking = false;

  let lastActive = -1;
  let docHeight = 1;

  // ---- measure geometry ONCE (and on resize) — no per-frame layout reads ----
  function measure() {
    vh = innerHeight;
    docHeight = document.body.scrollHeight - vh;
    for (let i = 0; i < data.length; i++) {
      const r = data[i].el.getBoundingClientRect();
      data[i].top = r.top + scrollY;
      data[i].h = r.height;
      data[i].center = data[i].top + data[i].h / 2;
    }
  }

  function update() {
    ticking = false;
    const docCenter = scrollY + vh / 2;

    let activeIdx = 0;
    let nearestDist = Infinity;

    for (let i = 0; i < data.length; i++) {
      const d = data[i];
      const dNorm = (d.center - docCenter) / vh; // 0 = centred
      const ad = dNorm < 0 ? -dNorm : dNorm;
      if (ad < nearestDist) { nearestDist = ad; activeIdx = i; }

      if (reduce) continue;

      // cull anything well off-screen: hide it so it costs zero paint/blur
      if (ad > 1.15) {
        if (!d.parked) {
          if (d.content) d.content.style.visibility = "hidden";
          d.parked = true;
        }
        continue;
      }
      if (d.parked) {
        if (d.content) d.content.style.visibility = "visible";
        d.parked = false;
      }

      const vis = clamp(1 - ad / 0.85, 0, 1);
      const op = smooth(vis);
      const baseShift = dNorm * vh * 0.18;
      if (d.content) {
        d.content.style.opacity = op;
        d.content.style.transform =
          `translate3d(0, ${(-baseShift).toFixed(1)}px, 0) scale(${(0.96 + 0.04 * op).toFixed(3)})`;
      }
      const layers = d.layers;
      for (let j = 0; j < layers.length; j++) {
        const extra = dNorm * vh * 0.16 * (layers[j].speed - 1);
        layers[j].node.style.transform = `translate3d(0, ${extra.toFixed(1)}px, 0)`;
      }
    }

    // ---- colour journey (cached centres) ----
    const a = data[activeIdx];
    const dir = docCenter > a.center ? 1 : -1;
    const nb = data[clamp(activeIdx + dir, 0, data.length - 1)];
    let t = 0;
    if (nb !== a) t = clamp(Math.abs(docCenter - a.center) / Math.abs(nb.center - a.center || 1), 0, 1);
    t = smooth(t);

    if (window.FogBG) window.FogBG.setColors(lerpRGB(a.deep, nb.deep, t), lerpRGB(a.light, nb.light, t));
    root.style.setProperty("--accent", t < 0.5 ? a.accent : nb.accent);

    railFill.style.height = (clamp(scrollY / docHeight, 0, 1) * 100).toFixed(2) + "%";
    if (activeIdx !== lastActive) {
      if (tickEls[lastActive]) tickEls[lastActive].classList.remove("is-active");
      tickEls[activeIdx].classList.add("is-active");
      lastActive = activeIdx;
    }
  }

  function onScroll() {
    if (animating) return;          // our own transition drives update() directly
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }

  // ============================================================
  //  CONTROLLED NAVIGATION — one section per gesture, smooth glide
  // ============================================================
  let current = 0;
  let animating = false;
  let lockUntil = 0;
  const DURATION = 780; // ms per transition

  const easeInOutCubic = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);

  function nearestIndex() {
    const c = scrollY + vh / 2;
    let best = 0, bd = Infinity;
    for (let i = 0; i < data.length; i++) {
      const dist = Math.abs(data[i].center - c);
      if (dist < bd) { bd = dist; best = i; }
    }
    return best;
  }
  const targetY = (i) => clamp(data[i].center - vh / 2, 0, docHeight);

  function goTo(i) {
    i = clamp(i, 0, data.length - 1);
    if (animating) return;
    const from = scrollY;
    const to = targetY(i);
    current = i;
    if (Math.abs(to - from) < 2) return;
    animating = true;
    const t0 = performance.now();
    function tick(now) {
      let p = (now - t0) / DURATION;
      if (p > 1) p = 1;
      window.scrollTo(0, from + (to - from) * easeInOutCubic(p));
      update();
      if (p < 1) requestAnimationFrame(tick);
      else { animating = false; lockUntil = performance.now() + 180; }
    }
    requestAnimationFrame(tick);
  }

  if (!reduce) {
    // wheel / trackpad — one step per CONTINUOUS gesture, no matter how hard.
    // A swipe + its inertia is one unbroken stream of events; we fire on the
    // first and stay disarmed until the stream goes quiet (gesture ended).
    let wheelArmed = true;
    let wheelIdle;
    addEventListener("wheel", (e) => {
      e.preventDefault();
      clearTimeout(wheelIdle);
      wheelIdle = setTimeout(() => { wheelArmed = true; }, 140); // re-arm once scrolling stops
      if (!wheelArmed || animating) return;
      if (Math.abs(e.deltaY) < 4) return;
      wheelArmed = false;
      goTo(current + (e.deltaY > 0 ? 1 : -1));
    }, { passive: false });

    // touch
    let touchY = 0;
    addEventListener("touchstart", (e) => { touchY = e.touches[0].clientY; }, { passive: true });
    addEventListener("touchmove", (e) => { e.preventDefault(); }, { passive: false });
    addEventListener("touchend", (e) => {
      if (animating || performance.now() < lockUntil) return;
      const dy = touchY - e.changedTouches[0].clientY;
      if (Math.abs(dy) > 40) goTo(current + (dy > 0 ? 1 : -1));
    }, { passive: false });

    // keyboard
    addEventListener("keydown", (e) => {
      if (animating || e.repeat) return;
      if (["ArrowDown", "PageDown", " "].includes(e.key)) { e.preventDefault(); goTo(current + 1); }
      else if (["ArrowUp", "PageUp"].includes(e.key)) { e.preventDefault(); goTo(current - 1); }
      else if (e.key === "Home") { e.preventDefault(); goTo(0); }
      else if (e.key === "End") { e.preventDefault(); goTo(data.length - 1); }
    });
  }

  addEventListener("scroll", onScroll, { passive: true });
  addEventListener("resize", () => { measure(); current = nearestIndex(); update(); }, { passive: true });
  addEventListener("load", () => { measure(); current = nearestIndex(); update(); });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { measure(); current = nearestIndex(); update(); });

  measure();
  current = nearestIndex();
  update();
})();
