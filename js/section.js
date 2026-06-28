/* ============================================================
   section.js — renders one section's blocks + scroll reveals.
   All content comes from our own static content.js (no user input).
   ============================================================ */
(function () {
  const esc = (s) => String(s); // content is author-controlled static data

  /* ---------- block templates ---------- */
  const T = {
    intro(b) {
      return `<div class="blk rv"><p class="body lead" style="max-width:56ch">${b.lead}</p></div>`;
    },

    prose(b) {
      return `<div class="blk" id="${b.id}">
        <p class="eyebrow rv">${b.eyebrow}</p>
        <h3 class="head rv" style="--d:.06s">${b.head}</h3>
        ${b.body.map((p, i) => `<p class="body rv" style="--d:${0.1 + i * 0.05}s">${p}</p>`).join("")}
      </div>`;
    },

    split(b) {
      return `<div class="blk split ${b.flip ? "split--flip" : ""}" id="${b.id}">
        <div class="split-text">
          <p class="eyebrow rv">${b.eyebrow}</p>
          <h3 class="head rv" style="--d:.06s">${b.head}</h3>
          ${b.body.map((p, i) => `<p class="body rv" style="--d:${0.1 + i * 0.05}s">${p}</p>`).join("")}
        </div>
        <div class="split-media rv" style="--d:.15s">
          <figure class="figure"><img src="${b.img}" alt="${b.cap || ""}" loading="lazy"><figcaption>${b.cap || ""}</figcaption></figure>
        </div>
      </div>`;
    },

    cards(b) {
      return `<div class="blk" id="${b.id}">
        <p class="eyebrow rv">${b.eyebrow}</p>
        <h3 class="head rv" style="--d:.06s">${b.head}</h3>
        ${b.body ? `<p class="body rv" style="--d:.1s">${b.body}</p>` : ""}
        <div class="cards ${b.imgFit ? "cards--" + b.imgFit : ""}" data-cols="${b.cols || 2}">
          ${b.cards.map((c, i) => `
            <article class="card glass rv" style="--d:${0.08 + i * 0.07}s">
              ${c.img ? `<img src="${c.img}" alt="${c.title}" loading="lazy">` : ""}
              ${c.meta ? `<span class="meta">${c.meta}</span>` : ""}
              <h4>${c.title}</h4>
              ${c.body ? `<p>${c.body}</p>` : ""}
              ${c.dl ? `<dl>${c.dl.map(([dt, dd]) => `<dt>${dt}</dt><dd>${dd}</dd>`).join("")}</dl>` : ""}
            </article>`).join("")}
        </div>
      </div>`;
    },

    deck(b) {
      const thumbs = !!b.thumbs, text = !!b.text;
      const bar = b.tabs.map((tab, i) =>
        `<button class="deck-tab ${i === 0 ? "is-active" : ""}" role="tab" aria-selected="${i === 0}" title="${tab.label}">
           ${thumbs ? `<img src="${tab.img}" alt="${tab.label}" decoding="async">` : tab.label}
         </button>`).join("");
      const panels = b.tabs.map((tab, i) => `
        <article class="deck-panel ${i === 0 ? "is-active" : ""} ${text ? "deck-panel--text" : ""}">
          ${!text ? `<div class="deck-media"><img src="${tab.img}" alt="${tab.label}" decoding="async"><span class="cap">${tab.cap || tab.label}</span></div>` : ""}
          <div class="deck-info">
            ${thumbs ? `<p class="eyebrow" style="margin-bottom:8px">Machine ${String(i + 1).padStart(2, "0")} / ${b.tabs.length}</p>` : ""}
            <h4>${tab.title}</h4>
            ${tab.lead ? `<p class="lead2">${tab.lead}</p>` : ""}
            ${tab.cols ? `<div class="deck-cols">${tab.cols.map((c) =>
              c.items
                ? `<div><h5>${c.h}</h5><ul>${c.items.map((li) => `<li>${li}</li>`).join("")}</ul></div>`
                : `<div class="${c.boxed ? "boxed glass" : ""}"><h5>${c.h}</h5><p>${c.p}</p></div>`
            ).join("")}</div>` : ""}
            ${tab.note ? `<p class="deck-note">${tab.note}</p>` : ""}
          </div>
        </article>`).join("");
      return `<div class="blk deck ${thumbs ? "deck--thumbs" : ""}" id="${b.id}">
        <p class="eyebrow rv">${b.eyebrow}</p>
        <h3 class="head rv" style="--d:.06s">${b.head}</h3>
        ${thumbs
          ? `<div class="deck-stage rv" style="--d:.12s">${panels}</div><div class="deck-bar rv" style="--d:.18s" role="tablist">${bar}</div>`
          : `<div class="deck-bar rv" style="--d:.12s" role="tablist">${bar}</div><div class="deck-stage rv" style="--d:.18s">${panels}</div>`}
      </div>`;
    },

    gallery(b) {
      return `<div class="blk" id="${b.id}">
        <p class="eyebrow rv">${b.eyebrow}</p>
        <h3 class="head rv" style="--d:.06s">${b.head}</h3>
        ${b.body ? `<p class="body rv" style="--d:.1s">${b.body}</p>` : ""}
        <div class="gal ${b.wide ? "gal--wide" : ""}">
          ${b.imgs.map((im, i) => `
            <figure class="rv" style="--d:${0.06 + i * 0.05}s" data-full="${im.src}">
              <img src="${im.src}" alt="${im.cap || ""}" loading="lazy">
              ${im.cap ? `<figcaption>${im.cap}</figcaption>` : ""}
            </figure>`).join("")}
        </div>
      </div>`;
    },

    matrix(b) {
      return `<div class="blk" id="${b.id}">
        <p class="eyebrow rv">${b.eyebrow}</p>
        <h3 class="head rv" style="--d:.06s">${b.head}</h3>
        ${b.body ? `<p class="body rv" style="--d:.1s">${b.body}</p>` : ""}
        <div class="matrix glass rv" style="--d:.14s">
          <table>
            <thead><tr><th>Design</th>${b.criteria.map((c) => `<th>${c}</th>`).join("")}<th>Total</th></tr></thead>
            <tbody>
              ${b.rows.map((r) => `
                <tr class="${r.win ? "m-win" : ""}">
                  <td><span class="m-design"><img src="${r.img}" alt="${r.name}" loading="lazy"><b>${r.name}</b></span></td>
                  ${r.scores.map((s) => `<td><span class="m-score">${s.s}<small>/5</small></span><br>${s.why}</td>`).join("")}
                  <td><span class="m-total">${r.total}<small style="color:var(--ink-faint);font-size:10px">/25</small></span></td>
                </tr>`).join("")}
            </tbody>
          </table>
        </div>
        ${b.note ? `<p class="deck-note rv" style="--d:.18s;margin-top:22px">${b.note}</p>` : ""}
      </div>`;
    },

    table(b) {
      return `<div class="blk" id="${b.id}">
        <p class="eyebrow rv">${b.eyebrow}</p>
        <h3 class="head rv" style="--d:.06s">${b.head}</h3>
        <div class="dtable glass rv" style="--d:.12s">
          <table>
            <thead><tr>${b.columns.map((c) => `<th>${c}</th>`).join("")}</tr></thead>
            <tbody>${b.rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join("")}</tr>`).join("")}</tbody>
          </table>
        </div>
      </div>`;
    },

    timeline(b) {
      return `<div class="blk" id="${b.id}">
        <p class="eyebrow rv">${b.eyebrow}</p>
        <h3 class="head rv" style="--d:.06s">${b.head}</h3>
        ${b.body ? `<p class="body rv" style="--d:.1s">${b.body}</p>` : ""}
        <div class="tl">
          ${b.steps.map((s, i) => `
            <div class="tl-item rv" style="--d:${0.05 + i * 0.04}s">
              <span class="tl-meta">${s.meta}</span>
              <h4>${s.title}</h4>
              <p>${s.p}</p>
            </div>`).join("")}
        </div>
      </div>`;
    },

    duo(b) {
      return `<div class="blk" id="${b.id}">
        <p class="eyebrow rv">${b.eyebrow}</p>
        <h3 class="head rv" style="--d:.06s">${b.head}</h3>
        <div class="duo">
          ${b.cols.map((c, i) => `
            <div class="duo-col rv" style="--d:${0.1 + i * 0.08}s">
              <h4>${c.h}</h4>
              ${c.ps.map((p) => `<p>${p}</p>`).join("")}
              ${c.eg ? `<div class="duo-eg"><img src="${c.eg.img}" alt="" loading="lazy"><p>${c.eg.text}</p></div>` : ""}
            </div>`).join("")}
        </div>
      </div>`;
    },

    ph(b) {
      return `<div class="blk" id="${b.id}">
        <p class="eyebrow rv">${b.eyebrow}</p>
        <h3 class="head rv" style="--d:.06s">${b.head}</h3>
        <div class="ph rv" style="--d:.12s">
          <span class="ph-tag">${b.tag || "Waiting on asset"}</span>
          ${b.body ? `<p style="margin-top:8px">${b.body}</p>` : ""}
          ${b.need ? `<p style="margin-top:14px"><b style="color:var(--accent)">Needed:</b> ${b.need}</p>` : ""}
        </div>
      </div>`;
    },

    stack(b) {
      const n = b.items.length;
      return `<div class="blk stack-blk" id="${b.id}">
        <p class="eyebrow rv">${b.eyebrow}</p>
        <h3 class="head rv" style="--d:.06s">${b.head}</h3>
        ${b.body ? `<p class="body rv" style="--d:.1s">${b.body}</p>` : ""}
        <div class="stack rv" data-n="${n}" style="--d:.14s">
          <div class="stack-deck">
            ${b.items.map((it, i) =>
              `<figure class="stack-img" data-i="${i}"><img src="${it.img}" alt="${it.title}" draggable="false" loading="lazy"></figure>`).join("")}
          </div>
          <div class="stack-side">
            <p class="stack-count"><span class="sc-cur">01</span> / ${String(n).padStart(2, "0")}</p>
            <div class="stack-texts">
              ${b.items.map((it, i) => `<div class="stack-text ${i === 0 ? "on" : ""}" data-i="${i}">
                  <h4>${it.title}</h4><p>${it.text}</p>
                </div>`).join("")}
            </div>
            <p class="stack-hint"></p>
            <button type="button" class="stack-reset">Go to front</button>
          </div>
        </div>
      </div>`;
    },

    quotes(b) {
      return `<div class="blk" id="${b.id}">
        <p class="eyebrow rv">${b.eyebrow}</p>
        <h3 class="head rv" style="--d:.06s">${b.head}</h3>
        <div class="quotes">
          ${b.people.map((p, i) => `
            <article class="quote glass rv" style="--d:${0.08 + i * 0.07}s">
              <div class="q-head">
                <span class="q-avatar">${p.img ? `<img src="${p.img}" alt="${p.name}">` : "?"}</span>
                <span><span class="q-name" style="display:block">${p.name}</span><span class="q-role">${p.role}</span></span>
              </div>
              ${p.quotes.map((q) => `<p>“${q}”</p>`).join("")}
            </article>`).join("")}
        </div>
        <div class="quote glass rv" style="--d:.2s;padding:clamp(20px,2.2vw,30px)">
          <span class="q-role">${b.personal.head}</span>
          <p style="margin-top:10px;font-style:normal">${b.personal.p}</p>
        </div>
      </div>`;
    }
  };

  /* ---------- render a section view ---------- */
  window.renderSection = function (root, sec) {
    const idx = window.SECTIONS.indexOf(sec);
    const prev = window.SECTIONS[idx - 1], next = window.SECTIONS[idx + 1];

    const chips = sec.blocks.filter((b) => b.id && b.eyebrow)
      .map((b) => `<a class="sec-chip" href="#/section/${sec.id}" data-anchor="${b.id}">${b.eyebrow.replace(/^[\d\w]+[a-e]? · /, "")}</a>`).join("");

    root.innerHTML = `
    <div class="view sec">
      <header class="sec-head">
        <span class="sec-head-num">0${sec.id}</span>
        <p class="sec-head-kicker stag" style="--d:.05s">SECTION 0${sec.id} / 07</p>
        <h2 class="sec-head-title stag" style="--d:.12s">${sec.title}</h2>
        <div class="sec-head-pages stag" style="--d:.2s">${chips}</div>
      </header>
      ${sec.blocks.map((b) => T[b.t] ? T[b.t](b) : "").join("")}
      <nav class="sec-nav">
        ${prev
          ? `<a href="#/section/${prev.id}"><span class="nav-k">← Previous</span><span class="nav-t">0${prev.id} · ${prev.title}</span></a>`
          : `<a href="#/"><span class="nav-k">← Back to</span><span class="nav-t">Home</span></a>`}
        ${next
          ? `<a class="next" href="#/section/${next.id}"><span class="nav-k">Next →</span><span class="nav-t">0${next.id} · ${next.title}</span></a>`
          : `<a class="next" href="#/viewer"><span class="nav-k">Finale →</span><span class="nav-t">08 · 3D Model Viewer</span></a>`}
      </nav>
    </div>`;

    /* chip anchors scroll within page */
    root.querySelectorAll(".sec-chip").forEach((chip) => {
      chip.addEventListener("click", (e) => {
        e.preventDefault();
        const el = document.getElementById(chip.dataset.anchor);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });

    /* deck tab behaviour + preload (instant switching) + swipe */
    root.querySelectorAll(".deck").forEach((deck) => {
      const tabs = [...deck.querySelectorAll(".deck-tab")];
      const panels = [...deck.querySelectorAll(".deck-panel")];
      let cur = Math.max(0, panels.findIndex((p) => p.classList.contains("is-active")));

      /* preload every panel image up-front so switching is instant */
      deck.querySelectorAll(".deck-media img").forEach((im) => {
        const pre = new Image(); pre.decoding = "async"; pre.src = im.currentSrc || im.src;
      });

      const show = (i) => {
        i = (i + panels.length) % panels.length;
        cur = i;
        tabs.forEach((t, j) => { t.classList.toggle("is-active", j === i); t.setAttribute("aria-selected", j === i); });
        panels.forEach((p, j) => p.classList.toggle("is-active", j === i));
      };
      tabs.forEach((tab, i) => tab.addEventListener("click", () => show(i)));

      /* swipe left/right on the image area to change part (great on phones) */
      const stage = deck.querySelector(".deck-stage");
      if (stage) {
        let sx = 0, sy = 0, t0 = 0;
        stage.addEventListener("touchstart", (e) => {
          sx = e.touches[0].clientX; sy = e.touches[0].clientY; t0 = Date.now();
        }, { passive: true });
        stage.addEventListener("touchend", (e) => {
          const dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy;
          if (Date.now() - t0 < 600 && Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.6) {
            show(cur + (dx < 0 ? 1 : -1));
          }
        }, { passive: true });
      }
    });

    /* gallery lightbox */
    const lb = document.getElementById("lightbox"), lbImg = lb.querySelector("img");
    root.querySelectorAll(".gal figure").forEach((f) => {
      f.addEventListener("click", () => { lbImg.src = f.dataset.full; lb.hidden = false; });
    });

    /* reveal engine — one-time fade-in only (no scroll-linked movement) */
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let io = null;
    if (!reduce) {
      io = new IntersectionObserver((entries) => {
        entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
      }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
      root.querySelectorAll(".rv").forEach((el) => io.observe(el));
    } else {
      root.querySelectorAll(".rv").forEach((el) => el.classList.add("in"));
    }

    /* ---- 3b · swipe-through card DECK (no scroll-locking) ----
       A pile of drawings. Swipe the top card away in any direction (touch) or click
       it (mouse, flings a random way); the swiped card goes to the BACK of the deck
       and the next drawing is revealed. It loops. The "Go to front" button and
       scrolling the deck out of view both reset it to the first drawing. */
    const coarse = matchMedia("(pointer: coarse)").matches;
    const decks = [...root.querySelectorAll(".stack")].map((el) => {
      const cards = [...el.querySelectorAll(".stack-img")].map((im) => {
        let rot = Math.random() * 4 + 1.5; if (Math.random() < 0.5) rot = -rot;   // gentle pile tilt
        return { el: im, rot };
      });
      const s = {
        el, cards, n: cards.length,
        deckEl: el.querySelector(".stack-deck"),
        order: cards.map((_, i) => i),       // order[0] = top of the deck
        texts: [...el.querySelectorAll(".stack-text")],
        curEl: el.querySelector(".sc-cur"),
        animating: false,
      };
      const hint = el.querySelector(".stack-hint");
      if (hint) hint.textContent = coarse ? "Swipe the drawing away to see the next one"
                                          : "Click the drawing to see the next one";
      const rb = el.querySelector(".stack-reset");
      if (rb) rb.addEventListener("click", () => resetDeck(s));
      return s;
    });

    const renderDeck = (s, snapIdx) => {
      s.order.forEach((ci, p) => {
        const c = s.cards[ci], el = c.el, top = p === 0, depth = Math.min(p, 4);
        const tf = `translate(0px, ${depth * 12}px) scale(${(1 - depth * 0.05).toFixed(3)}) rotate(${(top ? c.rot : c.rot * 0.5).toFixed(2)}deg)`;
        el.classList.toggle("top", top);
        el.style.zIndex = String(s.n - p);
        if (ci === snapIdx) {                  // just-swiped card: snap to the back, no animation
          el.style.transition = "none";
          el.style.transform = tf; el.style.opacity = "0";
          void el.offsetWidth;                 // reflow so the snap isn't animated
          el.style.transition = "";
        } else {
          el.style.transform = tf;
          el.style.opacity = p <= 4 ? "1" : "0";
        }
      });
      const topIdx = s.order[0];
      s.texts.forEach((tx, k) => tx.classList.toggle("on", k === topIdx));
      if (s.curEl) s.curEl.textContent = String(topIdx + 1).padStart(2, "0");
    };
    const dismiss = (s, dx, dy) => {
      if (s.animating || s.n <= 1) return;
      if (reduce) { s.order.push(s.order.shift()); renderDeck(s); return; }   // no motion
      s.animating = true;
      const topIdx = s.order[0], el = s.cards[topIdx].el;
      const ang = Math.atan2(dy, dx);
      const fx = Math.cos(ang) * 165, fy = Math.sin(ang) * 165;       // fling off the deck that way
      const spin = (dx >= 0 ? 1 : -1) * (14 + Math.random() * 16);
      el.classList.remove("top");
      el.style.transition = "transform .42s cubic-bezier(.4,0,.7,1), opacity .42s ease";
      el.style.transform = `translate(${fx.toFixed(0)}%, ${fy.toFixed(0)}%) rotate(${spin.toFixed(1)}deg)`;
      el.style.opacity = "0";
      setTimeout(() => {
        s.order.push(s.order.shift());          // front -> back; next drawing rises to top
        renderDeck(s, topIdx);
        s.animating = false;
      }, 430);
    };
    const resetDeck = (s) => {
      s.order = s.cards.map((_, i) => i);
      s.animating = false;
      renderDeck(s);
    };
    for (const s of decks) {
      renderDeck(s);
      requestAnimationFrame(() => s.cards.forEach((c) => c.el.classList.add("anim")));   // transitions on after first paint
    }

    /* swipe / drag / click the top card — Pointer Events cover mouse + touch */
    let drag = null;
    const topCard = (s) => s.cards[s.order[0]].el;
    const onPointerDown = (e) => {
      const s = decks.find((d) => d.deckEl && d.deckEl.contains(e.target));
      if (!s || s.animating || !topCard(s).contains(e.target)) return;     // must start on the top card
      drag = { s, id: e.pointerId, x0: e.clientX, y0: e.clientY, type: e.pointerType };
      topCard(s).style.transition = "none";                                // follow the pointer 1:1
    };
    const onPointerMove = (e) => {
      if (!drag || e.pointerId !== drag.id) return;
      const dx = e.clientX - drag.x0, dy = e.clientY - drag.y0;
      topCard(drag.s).style.transform = `translate(${dx}px, ${dy}px) rotate(${(dx * 0.04).toFixed(2)}deg)`;
    };
    const onPointerUp = (e) => {
      if (!drag || e.pointerId !== drag.id) return;
      const d = drag; drag = null;
      const dx = e.clientX - d.x0, dy = e.clientY - d.y0, dist = Math.hypot(dx, dy);
      topCard(d.s).style.transition = "";                                  // .anim takes over again
      if (d.type !== "touch" && dist < 8) {                                // a click: fling a random way
        const a = Math.random() * Math.PI * 2; dismiss(d.s, Math.cos(a), Math.sin(a));
      } else if (dist >= 64) {                                             // a real swipe: fling that way
        dismiss(d.s, dx, dy);
      } else {                                                             // too small: settle back
        renderDeck(d.s);
      }
    };

    /* reset the deck when it scrolls out of view, ready for next time */
    let deckIO = null;
    if (decks.length && "IntersectionObserver" in window) {
      deckIO = new IntersectionObserver((ents) => {
        ents.forEach((en) => { if (!en.isIntersecting) { const s = decks.find((d) => d.deckEl === en.target); if (s) resetDeck(s); } });
      }, { threshold: 0 });
      decks.forEach((s) => s.deckEl && deckIO.observe(s.deckEl));
    }
    if (decks.length) {
      addEventListener("pointerdown", onPointerDown);
      addEventListener("pointermove", onPointerMove);
      addEventListener("pointerup", onPointerUp);
      addEventListener("pointercancel", onPointerUp);
    }

    /* scroll progress bar */
    const bar = document.querySelector("#progress i");
    const onScroll = () => {
      const max = document.body.scrollHeight - innerHeight;
      bar.style.width = (max > 0 ? (scrollY / max) * 100 : 0) + "%";
    };
    addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      if (io) io.disconnect();
      if (deckIO) deckIO.disconnect();
      removeEventListener("scroll", onScroll);
      removeEventListener("pointerdown", onPointerDown);
      removeEventListener("pointermove", onPointerMove);
      removeEventListener("pointerup", onPointerUp);
      removeEventListener("pointercancel", onPointerUp);
    };
  };

  /* lightbox close (global, bound once) */
  const lb = document.getElementById("lightbox");
  lb.addEventListener("click", () => { lb.hidden = true; lb.querySelector("img").src = ""; });
  addEventListener("keydown", (e) => { if (e.key === "Escape" && !lb.hidden) lb.hidden = true; });
})();
