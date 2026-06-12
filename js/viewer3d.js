/* ============================================================
   viewer3d.js — interactive 3D wooden jet (Three.js, lazy ES module)
   · orbit / zoom · hover-highlight parts · click → camera frames
     the part + info card · control surfaces oscillate · canopy opens
   · drop assets/jet.glb (parts named like PART_INFO keys) to replace
     the procedural stand-in with Luca's real CAD model.
   ============================================================ */
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

/* ---------- part metadata (selection units) ---------- */
const PART_INFO = {
  fuselage: {
    title: "Fuselage",
    text: "The spine of the jet — one continuous piece of beech that every other part attaches to. Building it as a single piece (a lesson from the foam model) halves the glue joints that could fail under rough play, and gives the toy its strength when it's inevitably thrown.",
  },
  canopy: {
    title: "Canopy", moving: "Click again to open / close",
    text: "The cockpit canopy is hinged at the rear edge so it pops up and tilts open, just like the real F-16's. It's shaped from a solid block and sanded smooth — a moving part that rewards curiosity without any small pieces that could come free.",
    action: "canopy",
  },
  wingL: {
    title: "Left Wing + Aileron", moving: "Aileron animating",
    text: "The swept main wing, cut from 12 mm beech using a template so both wings match exactly. The aileron is cut free from the trailing edge and remounted on a hardwood dowel that runs through the wing — the rod-and-cutout mechanism proven in my foam additional model. The 1–2 mm clearance around the flap comes straight from that test: any tighter and it jams.",
    action: "aileronL",
  },
  wingR: {
    title: "Right Wing + Aileron", moving: "Aileron animating",
    text: "Mirror of the left wing. Each aileron pivots on its own dowel, so if one is ever damaged it slides off and a replacement slides on — that's the repairability specification working: fix one part, not bin the whole toy.",
    action: "aileronR",
  },
  tail: {
    title: "Tailplane + Elevators", moving: "Elevators animating",
    text: "The horizontal tailplane carries the two elevators — the surfaces that would pitch a real jet up and down. Both flaps share the same dowel mechanism as the ailerons, drilled in one pass with the flap taped in its cutout so the rod lines up perfectly (the alignment fix discovered in development).",
    action: "elevators",
  },
  fin: {
    title: "Fin + Rudder", moving: "Rudder animating",
    text: "My original sketch had twin tail fins, but the foam model showed they were too fiddly at this scale — so the final design uses a single vertical fin with a working rudder. It pivots on a vertical dowel, completing the full set of real control surfaces: ailerons, elevators and rudder.",
    action: "rudder",
  },
  gear: {
    title: "Undercarriage", moving: "Wheels spinning",
    text: "Three beech wheels turned on the lathe, running on dowel axles. Plain wooden wheels won the wheel research — eco-friendly, strong, and replaceable. A future development is folding gear on a sprung pivot so the jet can 'fly' clean.",
    action: "wheels",
  },
};

/* ---------- module-level state ---------- */
let renderer, scene, camera, controls, raf, root;
let jet, selectable = {}, movers = {};
let hovered = null, selected = null;
let canopyOpen = false, canopyT = 0;
let camAnim = null;
const HOME_POS = new THREE.Vector3(5.2, 2.6, 5.6);
const HOME_TGT = new THREE.Vector3(0, 0.1, 0);

/* ============================================================
   procedural stand-in jet (replaced by assets/jet.glb when present)
   ============================================================ */
function woodMat(c, r = 0.78) { return new THREE.MeshStandardMaterial({ color: c, roughness: r, metalness: 0.05 }); }
const M = {
  body: () => woodMat(0xc9a169),
  accent: () => woodMat(0xb04a3a),
  blue: () => woodMat(0x4a6fa8),
  dark: () => woodMat(0x6e4b2c),
  canopy: () => new THREE.MeshStandardMaterial({ color: 0x7fb0d8, roughness: 0.25, metalness: 0.1, transparent: true, opacity: 0.6 }),
};

function tagAll(obj, key) { obj.traverse((o) => { if (o.isMesh) o.userData.part = key; }); return obj; }

function wingShape(span, rootC, tipC, sweep) {
  const s = new THREE.Shape();
  s.moveTo(0, 0); s.lineTo(sweep, span); s.lineTo(sweep + tipC, span); s.lineTo(rootC, 0); s.closePath();
  return s;
}
function plate(shape, th, mat) {
  const g = new THREE.ExtrudeGeometry(shape, { depth: th, bevelEnabled: false });
  g.rotateX(-Math.PI / 2);            // shape XY → ground plane XZ (y = thickness)
  return new THREE.Mesh(g, mat);
}

function buildProceduralJet() {
  const g = new THREE.Group();

  /* fuselage: tapered box + nose cone */
  const fus = new THREE.Group();
  const bodyGeo = new THREE.BoxGeometry(3.0, 0.5, 0.56);
  const body = new THREE.Mesh(bodyGeo, M.body());
  fus.add(body);
  const nose = new THREE.Mesh(new THREE.ConeGeometry(0.27, 0.8, 4), M.accent());
  nose.rotation.z = -Math.PI / 2; nose.rotation.y = Math.PI / 4;
  nose.scale.set(1, 1, 1.05); nose.position.set(1.9, 0, 0);
  fus.add(nose);
  const spine = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.16, 0.4), M.body());
  spine.position.set(0.65, 0.32, 0); fus.add(spine);
  g.add(tagAll(fus, "fuselage")); selectable.fuselage = fus;

  /* canopy (hinged at rear edge) */
  const canopyPivot = new THREE.Group(); canopyPivot.position.set(0.62, 0.4, 0);
  const cano = new THREE.Mesh(new THREE.SphereGeometry(0.34, 18, 14), M.canopy());
  cano.scale.set(1.5, 0.72, 0.62); cano.position.set(0.55, 0.05, 0);
  canopyPivot.add(cano);
  g.add(tagAll(canopyPivot, "canopy")); selectable.canopy = canopyPivot; movers.canopy = canopyPivot;

  /* wings + ailerons */
  function makeWing(side) {  // side: 1 = left (+z), -1 = right (−z)
    const wing = new THREE.Group();
    const wgeo = plate(wingShape(1.55, 1.15, 0.45, 0.78), 0.085, M.body());
    wgeo.scale.z = side; wing.add(wgeo);
    wing.position.set(-0.45, 0, 0.27 * side);
    /* aileron on dowel at trailing edge, outboard */
    const hinge = new THREE.Group();
    hinge.position.set(1.32, 0, 0.95 * side);
    hinge.rotation.y = side * -0.32;                 // align with swept trailing edge
    const fl = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.06, 0.62), M.accent());
    fl.position.set(0.16, 0, 0);
    hinge.add(fl);
    const rod = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.74), M.dark());
    rod.rotation.x = Math.PI / 2; hinge.add(rod);
    wing.add(hinge);
    const key = side === 1 ? "wingL" : "wingR";
    g.add(tagAll(wing, key)); selectable[key] = wing;
    movers[side === 1 ? "aileronL" : "aileronR"] = hinge;
    return wing;
  }
  makeWing(1); makeWing(-1);

  /* tailplane + elevators */
  const tail = new THREE.Group();
  [1, -1].forEach((side) => {
    const tp = plate(wingShape(0.62, 0.55, 0.26, 0.38), 0.07, M.body());
    tp.scale.z = side; tp.position.set(-1.62, 0.05, 0.2 * side); tail.add(tp);
    const hinge = new THREE.Group();
    hinge.position.set(-1.06 - 0.04, 0.05, 0.52 * side);
    hinge.rotation.y = side * -0.3;
    const fl = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.05, 0.4), M.accent());
    fl.position.set(0.11, 0, 0); hinge.add(fl);
    tail.add(hinge);
    movers[side === 1 ? "elevL" : "elevR"] = hinge;
  });
  g.add(tagAll(tail, "tail")); selectable.tail = tail;

  /* fin + rudder */
  const finGrp = new THREE.Group();
  const finShape = new THREE.Shape();
  finShape.moveTo(0, 0); finShape.lineTo(0.5, 0.78); finShape.lineTo(0.78, 0.78); finShape.lineTo(0.95, 0); finShape.closePath();
  const finGeo = new THREE.ExtrudeGeometry(finShape, { depth: 0.06, bevelEnabled: false });
  finGeo.translate(0, 0, -0.03);
  const fin = new THREE.Mesh(finGeo, M.blue());
  fin.position.set(-1.95, 0.25, 0); finGrp.add(fin);
  const rudderHinge = new THREE.Group(); rudderHinge.position.set(-1.0 - 0.04, 0.6, 0);
  const rud = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.5, 0.05), M.accent());
  rud.position.set(0.12, 0, 0); rudderHinge.add(rud);
  finGrp.add(rudderHinge);
  g.add(tagAll(finGrp, "fin")); selectable.fin = finGrp; movers.rudder = rudderHinge;

  /* undercarriage */
  const gear = new THREE.Group();
  const wheelGeo = new THREE.CylinderGeometry(0.16, 0.16, 0.1, 20);
  const positions = [[1.2, -0.45, 0], [-0.35, -0.5, 0.42], [-0.35, -0.5, -0.42]];
  movers.wheels = [];
  positions.forEach(([x, y, z]) => {
    const strut = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.34), M.dark());
    strut.position.set(x, y + 0.16, z); gear.add(strut);
    const wh = new THREE.Mesh(wheelGeo, M.dark());
    wh.rotation.x = Math.PI / 2; wh.position.set(x, y, z);
    gear.add(wh); movers.wheels.push(wh);
  });
  g.add(tagAll(gear, "gear")); selectable.gear = gear;

  g.position.y = 0.25;
  return g;
}

/* ============================================================
   optional GLB swap — assets/jet.glb with nodes named like
   fuselage / canopy / wingL / wingR / tail / fin / gear and
   movers named aileronL / aileronR / elevL / elevR / rudder
   ============================================================ */
async function tryLoadGLB() {
  try {
    const head = await fetch("assets/jet.glb", { method: "HEAD" });
    if (!head.ok) return null;
    const gltf = await new GLTFLoader().loadAsync("assets/jet.glb");
    const g = gltf.scene;
    const keys = Object.keys(PART_INFO);
    g.traverse((o) => {
      const n = (o.name || "").toLowerCase();
      const k = keys.find((key) => n === key.toLowerCase() || n.startsWith(key.toLowerCase()));
      if (k) { selectable[k] = o; tagAll(o, k); }
      ["aileronL", "aileronR", "elevL", "elevR", "rudder", "canopy"].forEach((mk) => {
        if (n === mk.toLowerCase()) movers[mk] = o;
      });
    });
    if (!selectable.fuselage) { selectable = {}; movers = {}; return null; } // names don't match — fall back
    return g;
  } catch { return null; }
}

/* ============================================================
   mount / unmount
   ============================================================ */
export function mount(appRoot) {
  root = appRoot;
  root.innerHTML = `
    <div class="view viewer"><canvas id="v3d"></canvas></div>
    <div class="v-hint" id="vHint">DRAG TO ROTATE · SCROLL TO ZOOM · CLICK A PART</div>
    <div class="v-label" id="vLabel"></div>
    <div class="v-card glass" id="vCard">
      <p class="eyebrow">PART</p>
      <h3 id="vcTitle"></h3>
      <div id="vcText"></div>
      <span class="v-moving" id="vcMoving" hidden><i></i><span></span></span><br>
      <button class="v-back" id="vcBack">← BACK TO OVERVIEW</button>
    </div>`;

  const canvas = root.querySelector("#v3d");
  const label = document.getElementById("vLabel");
  const card = document.getElementById("vCard");

  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.setSize(innerWidth, innerHeight);

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(42, innerWidth / innerHeight, 0.1, 100);
  camera.position.copy(HOME_POS);

  scene.add(new THREE.HemisphereLight(0xbfd6ff, 0x2a2018, 1.1));
  const key = new THREE.DirectionalLight(0xfff2dd, 2.0); key.position.set(4, 6, 3); scene.add(key);
  const rim = new THREE.DirectionalLight(0x7fb0ff, 0.8); rim.position.set(-5, 2, -4); scene.add(rim);

  /* ground shadow disc (soft anchor) */
  const disc = new THREE.Mesh(
    new THREE.CircleGeometry(2.6, 48),
    new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.28 })
  );
  disc.rotation.x = -Math.PI / 2; disc.position.y = -0.62; scene.add(disc);

  selectable = {}; movers = {};
  jet = buildProceduralJet();
  scene.add(jet);
  tryLoadGLB().then((glb) => {
    if (glb) { scene.remove(jet); jet = glb; jet.position.y = 0.25; scene.add(jet); }
  });

  controls = new OrbitControls(camera, canvas);
  controls.target.copy(HOME_TGT);
  controls.enableDamping = true; controls.dampingFactor = 0.06;
  controls.minDistance = 2.2; controls.maxDistance = 14; controls.enablePan = false;

  /* ---------- raycasting ---------- */
  const ray = new THREE.Raycaster(); const mouse = new THREE.Vector2(-9, -9);
  let mx = 0, my = 0, moved = false, downAt = 0;

  function partAt() {
    ray.setFromCamera(mouse, camera);
    const hits = ray.intersectObject(jet, true);
    for (const h of hits) { if (h.object.userData.part) return h.object.userData.part; }
    return null;
  }
  function setEmissive(key, on) {
    const grp = selectable[key]; if (!grp) return;
    grp.traverse((o) => {
      if (o.isMesh && o.material && "emissive" in o.material) {
        o.material.emissive = new THREE.Color(on ? 0x2a6a9c : 0x000000);
        o.material.emissiveIntensity = on ? 0.9 : 0;
      }
    });
  }

  function onMove(e) {
    mx = e.clientX; my = e.clientY;
    mouse.x = (mx / innerWidth) * 2 - 1; mouse.y = -(my / innerHeight) * 2 + 1;
    label.style.left = mx + "px"; label.style.top = my + "px";
  }
  canvas.addEventListener("pointermove", onMove);
  canvas.addEventListener("pointerdown", () => { downAt = performance.now(); moved = false; });
  canvas.addEventListener("pointermove", () => { if (performance.now() - downAt > 120) moved = true; });
  canvas.addEventListener("pointerup", (e) => {
    if (moved && performance.now() - downAt > 220) return;       // it was a drag
    onMove(e);
    const key = partAt();
    if (key) select(key);
    else deselect();
  });

  /* ---------- selection / camera framing ---------- */
  const FOCUS = {  // [camera offset dir, distance, target offset]
    fuselage: [new THREE.Vector3(0.4, 0.55, 1), 4.4],
    canopy:   [new THREE.Vector3(0.8, 0.7, 1), 2.6],
    wingL:    [new THREE.Vector3(0.3, 0.9, 1), 3.2],
    wingR:    [new THREE.Vector3(0.3, 0.9, -1), 3.2],
    tail:     [new THREE.Vector3(-1, 0.7, 0.7), 3.0],
    fin:      [new THREE.Vector3(-1, 0.5, 0.9), 2.9],
    gear:     [new THREE.Vector3(0.7, -0.25, 1), 3.4],
  };

  function flyTo(pos, tgt) {
    camAnim = {
      p0: camera.position.clone(), p1: pos.clone(),
      t0: controls.target.clone(), t1: tgt.clone(),
      start: performance.now(), dur: 950,
    };
  }

  function select(key) {
    if (selected === key) {
      if (key === "canopy") { canopyOpen = !canopyOpen; }       // toggle on re-click
      return;
    }
    if (selected) setEmissive(selected, false);
    selected = key; setEmissive(key, true);
    if (key === "canopy") canopyOpen = true;

    const grp = selectable[key];
    const box = new THREE.Box3().setFromObject(grp);
    const center = box.getCenter(new THREE.Vector3());
    const [dir, dist] = FOCUS[key] || [new THREE.Vector3(1, 0.6, 1), 3.2];
    flyTo(center.clone().add(dir.clone().normalize().multiplyScalar(dist)), center);

    const info = PART_INFO[key];
    document.getElementById("vcTitle").textContent = info.title;
    document.getElementById("vcText").innerHTML = `<p>${info.text}</p>`;
    const mv = document.getElementById("vcMoving");
    if (info.moving) { mv.hidden = false; mv.querySelector("span").textContent = info.moving; }
    else mv.hidden = true;
    card.classList.add("on");
    document.getElementById("vHint").textContent = key === "canopy"
      ? "CLICK THE CANOPY AGAIN TO OPEN / CLOSE" : "CLICK EMPTY SPACE OR BACK TO RETURN";
  }

  function deselect() {
    if (!selected) return;
    setEmissive(selected, false); selected = null;
    card.classList.remove("on");
    canopyOpen = false;
    flyTo(HOME_POS, HOME_TGT);
    document.getElementById("vHint").textContent = "DRAG TO ROTATE · SCROLL TO ZOOM · CLICK A PART";
  }
  document.getElementById("vcBack").addEventListener("click", deselect);

  /* ESC: deselect first; only leave viewer when nothing selected */
  function onKey(e) {
    if (e.key === "Escape" && selected) { e.stopImmediatePropagation(); deselect(); }
  }
  addEventListener("keydown", onKey, true);

  function onResize() {
    camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight);
  }
  addEventListener("resize", onResize);

  /* ---------- render loop ---------- */
  const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
  let last = performance.now();

  function frame(now) {
    raf = requestAnimationFrame(frame);
    const dt = Math.min((now - last) / 1000, 0.05); last = now;
    const t = now / 1000;

    /* idle bob + slow turn when nothing selected */
    if (!selected && jet) { jet.rotation.y += dt * 0.12; jet.position.y = 0.25 + Math.sin(t * 0.8) * 0.03; }

    /* hover highlight (skip while a part is selected) */
    if (!selected) {
      const key = partAt();
      if (key !== hovered) {
        if (hovered) setEmissive(hovered, false);
        hovered = key;
        if (key) { setEmissive(key, true); label.textContent = PART_INFO[key].title; label.style.opacity = 1; canvas.style.cursor = "pointer"; }
        else { label.style.opacity = 0; canvas.style.cursor = "grab"; }
      }
    } else { label.style.opacity = 0; }

    /* control-surface oscillation for the selected part */
    const osc = Math.sin(t * 2.4) * 0.45;
    const act = selected ? PART_INFO[selected].action : null;
    if (movers.aileronL) movers.aileronL.rotation.z = act === "aileronL" ? osc : (movers.aileronL.rotation.z * 0.9);
    if (movers.aileronR) movers.aileronR.rotation.z = act === "aileronR" ? -osc : (movers.aileronR.rotation.z * 0.9);
    if (movers.elevL && movers.elevR) {
      const v = act === "elevators" ? osc : movers.elevL.rotation.z * 0.9;
      movers.elevL.rotation.z = v; movers.elevR.rotation.z = act === "elevators" ? osc : movers.elevR.rotation.z * 0.9;
    }
    if (movers.rudder) movers.rudder.rotation.y = act === "rudder" ? Math.sin(t * 2.0) * 0.4 : movers.rudder.rotation.y * 0.9;
    if (movers.wheels) movers.wheels.forEach((w) => { if (act === "wheels") w.rotation.y += dt * 4; });

    /* canopy open/close */
    canopyT += ((canopyOpen ? 1 : 0) - canopyT) * Math.min(dt * 5, 1);
    if (movers.canopy) movers.canopy.rotation.z = canopyT * 0.85;

    /* camera tween */
    if (camAnim) {
      const k = Math.min((now - camAnim.start) / camAnim.dur, 1), e = ease(k);
      camera.position.lerpVectors(camAnim.p0, camAnim.p1, e);
      controls.target.lerpVectors(camAnim.t0, camAnim.t1, e);
      if (k >= 1) camAnim = null;
    }

    controls.update();
    renderer.render(scene, camera);
  }
  raf = requestAnimationFrame(frame);

  /* ---------- cleanup ---------- */
  return () => {
    cancelAnimationFrame(raf);
    removeEventListener("resize", onResize);
    removeEventListener("keydown", onKey, true);
    controls.dispose();
    renderer.dispose();
    scene.traverse((o) => {
      if (o.isMesh) { o.geometry?.dispose(); (Array.isArray(o.material) ? o.material : [o.material]).forEach((m) => m?.dispose()); }
    });
    selected = null; hovered = null; canopyOpen = false; camAnim = null;
  };
}
