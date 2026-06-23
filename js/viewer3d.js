/* ============================================================
   viewer3d.js — interactive 3D wooden jet (Three.js, lazy ES module)

   Loads Luca's real jet as 15 separate part GLBs (assets/jet-parts/)
   that share one design coordinate space, so they assemble exactly.
   Every part is individually hoverable/clickable, and the control
   surfaces (ailerons, elevators, rudders) really articulate on
   hinge pivots. Falls back to a procedural stand-in if loading fails.
   ============================================================ */
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

/* ---------- the 15 real parts ---------- */
const PART_FILES = [
  { key: "mainbody", file: "mainbody.glb" },
  { key: "wingL", file: "wing-l.glb" },
  { key: "wingR", file: "wing-r.glb" },
  { key: "aileronL", file: "aileron-l.glb", mover: { axis: "y", kind: "flap" } },
  { key: "aileronR", file: "aileron-r.glb", mover: { axis: "y", kind: "flap" } },
  { key: "hstabL", file: "hstab-l.glb" },
  { key: "hstabR", file: "hstab-r.glb" },
  { key: "elevatorL", file: "elevator-l.glb", mover: { axis: "y", kind: "flap" } },
  { key: "elevatorR", file: "elevator-r.glb", mover: { axis: "y", kind: "flap" } },
  { key: "vstabL", file: "vstab-l.glb" },
  { key: "vstabR", file: "vstab-r.glb" },
  { key: "rudderL", file: "rudder-l.glb", mover: { axis: "z", kind: "rudder" } },
  { key: "rudderR", file: "rudder-r.glb", mover: { axis: "z", kind: "rudder" } },
  { key: "intakeL", file: "intake-l.glb" },
  { key: "intakeR", file: "intake-r.glb" },
];

/* selecting a part animates these movers */
const ACTION = {
  aileronL: ["aileronL"], aileronR: ["aileronR"],
  wingL: ["aileronL"], wingR: ["aileronR"],
  elevatorL: ["elevatorL"], elevatorR: ["elevatorR"],
  hstabL: ["elevatorL"], hstabR: ["elevatorR"],
  rudderL: ["rudderL"], rudderR: ["rudderR"],
  vstabL: ["rudderL"], vstabR: ["rudderR"],
};

/* ---------- part info cards (written as Luca) ---------- */
const PART_INFO = {
  mainbody: { title: "Main Body",
    text: "The main body of the jet. I made it from two pieces of pine, a bottom piece and a top piece, because I could not find one piece the right size. That worked out well, because the canopy is part of that top piece, so I did not have to cut the canopy out separately. The whole thing gets sanded smooth so there is no sharp edge anywhere." },
  wingL: { title: "Left Wing", moving: "Watch the aileron",
    text: "The swept main wing, cut from MDF to the sizes on my working drawing so it matches the right wing exactly. It carries the left aileron on a metal nail. The wings are held on by a metal beam that goes all the way through the wings, intakes and body, so they do not come loose or snap off under force." },
  wingR: { title: "Right Wing", moving: "Watch the aileron",
    text: "The mirror twin of the left wing, cut from MDF to the same sizes. The wings take the biggest forces when a kid grips the jet by one side, which is why they are pinned on with a metal beam instead of just glue." },
  aileronL: { title: "Left Aileron / Flap", moving: "Aileron animating",
    text: "A working control surface, cut out and mounted on a metal nail so it tilts up and down. The front edge is sanded into a half circle so it can rotate freely instead of jamming. I left 2 mm of clearance in the cutout, a lesson from my foam model where a tight flap jammed solid. On a real jet, ailerons roll the aircraft." },
  aileronR: { title: "Right Aileron / Flap", moving: "Aileron animating",
    text: "The right side working flap, on its own metal nail. Because each control surface sits on its own nail, a damaged one can be pulled off and a new one fitted, which is the repairability my specification asked for." },
  hstabL: { title: "Left Horizontal Stabilizer", moving: "Watch the elevator",
    text: "The left tailplane, cut from MDF. It keeps the jet's nose steady in flight and carries the left elevator on its trailing edge. It joins onto the body with two cut nails used like metal dowels." },
  hstabR: { title: "Right Horizontal Stabilizer", moving: "Watch the elevator",
    text: "The right tailplane, mirroring the left. I drew the line for the nail channel first so it would be centred, which keeps the elevator turning without a wobble." },
  elevatorL: { title: "Left Elevator", moving: "Elevator animating",
    text: "A working elevator on the left tailplane. On a real aircraft the elevators control pitch, nose up and nose down, and on my toy they tilt on their nail just like the ailerons. It is the same mechanism repeated across the jet." },
  elevatorR: { title: "Right Elevator", moving: "Elevator animating",
    text: "The right working elevator. Building the same nail and cutout mechanism six times is exactly why I proved it on the foam wing first, so by the time I cut the real material the tolerances were already known." },
  vstabL: { title: "Left Vertical Stabilizer", moving: "Watch the rudder",
    text: "One of the twin fins. My first sketch had a single tail, but I went to twin tails like my foam model because I liked how they looked, and each one carries a working rudder on its trailing edge." },
  vstabR: { title: "Right Vertical Stabilizer", moving: "Watch the rudder",
    text: "The right fin, cut from MDF. Both fins are joined to the body with cut nails used like metal dowels, the same way as the horizontal stabilizers." },
  rudderL: { title: "Left Rudder", moving: "Rudder animating",
    text: "A working rudder on a metal nail. It swings side to side, which on a real jet steers the nose left and right (yaw). With ailerons, elevators and rudders all moving, the toy has the complete set of real control surfaces." },
  rudderR: { title: "Right Rudder", moving: "Rudder animating",
    text: "The right rudder, completing the pair. Two fins means two rudders, so there are twice the moving parts to play with and a spare mechanism if one is ever damaged." },
  intakeL: { title: "Left Intake",
    text: "The angled intake along the side of the body. On a real aircraft this feeds air to the engine. On mine it is the detail that makes the shape read as a jet and not a glider. I cut it from MDF and drilled pilot holes so the small nails would not split the MDF when I joined the parts." },
  intakeR: { title: "Right Intake",
    text: "The right side intake. The intakes also do a structural job, because the metal beam that holds the wings on runs straight through them, tying the wings, intakes and body together." },
  /* fallback (procedural stand-in) keys */
  fuselage: { title: "Fuselage", text: "The main body of the jet that every other part attaches to." },
  canopy: { title: "Canopy", text: "The cockpit canopy, cut as part of the top piece of pine.", action: "canopy", moving: "Click again to open / close" },
  tail: { title: "Tailplane", text: "The horizontal tail surfaces." },
  fin: { title: "Fin", text: "The vertical fin." },
  gear: { title: "Undercarriage", text: "Wheels turned on the lathe." },
};

/* ---------- module state ---------- */
let renderer, scene, camera, controls, raf, root;
let jet, selectable = {}, movers = {};
let proceduralMovers = null;       // fallback-only
let hovered = null, selected = null;
let canopyOpen = false, canopyT = 0;
let camAnim = null;
const HOME_POS = new THREE.Vector3(4.8, 2.2, 5.2);
const HOME_TGT = new THREE.Vector3(0, 0, 0);

/* ============================================================
   multi-part loader — parts share one design space, so they
   assemble exactly. Order of operations matters:
   1) build assembly + hinge pivots in RAW space
   2) rotate (Z-up → Y-up, nose forward) via nested groups
   3) scale  4) centre LAST (translate only after all rotation)
   ============================================================ */
async function loadPartsJet() {
  const loader = new GLTFLoader();
  const head = await fetch("assets/jet-parts/mainbody.glb", { method: "HEAD" }).catch(() => null);
  if (!head || !head.ok) return null;

  const scenes = await Promise.all(
    PART_FILES.map((p) => loader.loadAsync("assets/jet-parts/" + p.file).then((g) => ({ p, node: g.scene })))
  );

  /* probe the loaded space first — Tinkercad GLBs may already be
     Y-up (conversion baked into their nodes) or still Z-up. */
  const probe = new THREE.Group();
  scenes.forEach(({ node }) => probe.add(node));
  probe.updateMatrixWorld(true);
  let pbox = new THREE.Box3().setFromObject(probe);
  let psize = pbox.getSize(new THREE.Vector3());
  const yUp = psize.y <= psize.x && psize.y <= psize.z;   // up = smallest extent

  /* which X end is the tail? (the vertical stabilizers live there) */
  const vstabs = scenes.filter(({ p }) => p.key.startsWith("vstab"));
  const centreX = (pbox.min.x + pbox.max.x) / 2;
  const tailX = vstabs.reduce((a, { node }) => {
    const b = new THREE.Box3().setFromObject(node);
    return a + (b.min.x + b.max.x) / 2;
  }, 0) / Math.max(1, vstabs.length);
  const tailAtPlusX = tailX > centreX;
  const noseDir = new THREE.Vector3(tailAtPlusX ? -1 : 1, 0, 0);

  /* sample a part's vertices in assembly space */
  function sampleVerts(node, max = 3000) {
    const out = [];
    node.traverse((o) => {
      if (!o.isMesh) return;
      const pos = o.geometry.attributes.position;
      const step = Math.max(1, Math.floor(pos.count / max));
      const v = new THREE.Vector3();
      for (let i = 0; i < pos.count; i += step) {
        out.push(v.fromBufferAttribute(pos, i).applyMatrix4(o.matrixWorld).clone());
      }
    });
    return out;
  }

  /* hinge for a swept control surface: rotation axis = the part's own
     long axis (dominant eigenvector of its vertex cloud), through the
     leading (nose-facing) edge. Rotating about a global axis instead
     makes swept flaps "flap like a bird" — pitch + roll mixed. */
  function computeHinge(node) {
    const verts = sampleVerts(node);
    const c = new THREE.Vector3();
    verts.forEach((v) => c.add(v)); c.divideScalar(verts.length);
    /* covariance */
    let xx = 0, xy = 0, xz = 0, yy = 0, yz = 0, zz = 0;
    for (const v of verts) {
      const dx = v.x - c.x, dy = v.y - c.y, dz = v.z - c.z;
      xx += dx * dx; xy += dx * dy; xz += dx * dz; yy += dy * dy; yz += dy * dz; zz += dz * dz;
    }
    /* dominant eigenvector by power iteration */
    let d = new THREE.Vector3(1, 0.31, 0.71).normalize();
    for (let i = 0; i < 30; i++) {
      d.set(
        xx * d.x + xy * d.y + xz * d.z,
        xy * d.x + yy * d.y + yz * d.z,
        xz * d.x + yz * d.y + zz * d.z
      ).normalize();
    }
    /* leading edge: most nose-ward cluster, measured perpendicular to d */
    const n0 = noseDir.clone().sub(d.clone().multiplyScalar(noseDir.dot(d)));
    if (n0.lengthSq() < 1e-6) n0.copy(noseDir); else n0.normalize();
    let sMax = -Infinity;
    const sVals = verts.map((v) => {
      const s = v.clone().sub(c).dot(n0);
      if (s > sMax) sMax = s;
      return s;
    });
    const p0 = new THREE.Vector3(); let nLead = 0;
    verts.forEach((v, i) => { if (sVals[i] >= sMax * 0.82) { p0.add(v); nLead++; } });
    p0.divideScalar(Math.max(1, nLead));
    return { p0, axis: d };
  }

  /* part colours matching Luca's Tinkercad design */
  const COLOURS = {
    mainbody: 0x3d59a8,
    wingL: 0x4caf50, wingR: 0x4caf50,
    hstabL: 0x4caf50, hstabR: 0x4caf50,
    vstabL: 0x43a047, vstabR: 0x43a047,
    aileronL: 0xe53935, aileronR: 0xe53935,
    elevatorL: 0xe53935, elevatorR: 0xe53935,
    rudderL: 0xe53935, rudderR: 0xe53935,
    intakeL: 0xf5921e, intakeR: 0xf5921e,
  };

  /* build into LOCAL maps; mount() adopts them on resolve (avoids
     races with cleanup/fallback resetting the module-level maps) */
  const mySelectable = {}, myMovers = {};
  const assembly = new THREE.Group();
  for (const { p, node } of scenes) {
    node.traverse((o) => {
      if (o.isMesh) {
        o.userData.part = p.key;
        if (!o.geometry.attributes.normal) o.geometry.computeVertexNormals();
        o.material = new THREE.MeshStandardMaterial({
          color: COLOURS[p.key] || 0xcccccc, roughness: 0.62, metalness: 0.05,
        });
      }
    });
    if (p.mover) {
      node.updateMatrixWorld(true);
      const { p0, axis } = computeHinge(node);
      const pivot = new THREE.Group();
      pivot.position.copy(p0);
      node.position.sub(p0);
      pivot.add(node);
      assembly.add(pivot);
      myMovers[p.key] = { pivot, axisVec: axis, angle: 0 };
      mySelectable[p.key] = node;
    } else {
      assembly.add(node);
      mySelectable[p.key] = node;
    }
  }

  /* orient: make Y up if needed, then face the nose along +X */
  const rotX = new THREE.Group();
  if (!yUp) rotX.rotation.x = -Math.PI / 2;
  rotX.add(assembly);
  const rotY = new THREE.Group();
  if (tailAtPlusX) rotY.rotation.y = Math.PI;
  rotY.add(rotX);

  /* scale to ~3.6 long */
  let box = new THREE.Box3().setFromObject(rotY);
  let size = box.getSize(new THREE.Vector3());
  rotY.scale.setScalar(3.6 / Math.max(size.x, size.z));

  /* centre LAST — float in the middle, rotate about its own centre */
  const model = new THREE.Group();
  model.add(rotY);
  box = new THREE.Box3().setFromObject(rotY);
  const centre = box.getCenter(new THREE.Vector3());
  rotY.position.sub(centre);

  return { model, selectable: mySelectable, movers: myMovers, size: box.getSize(new THREE.Vector3()) };
}

/* ============================================================
   procedural stand-in (fallback only)
   ============================================================ */
function woodMat(c, r = 0.78) { return new THREE.MeshStandardMaterial({ color: c, roughness: r, metalness: 0.05 }); }
function tagAll(obj, key) { obj.traverse((o) => { if (o.isMesh) o.userData.part = key; }); return obj; }
function buildProceduralJet() {
  const g = new THREE.Group();
  const fus = new THREE.Group();
  fus.add(new THREE.Mesh(new THREE.BoxGeometry(3.0, 0.5, 0.56), woodMat(0xc9a169)));
  const nose = new THREE.Mesh(new THREE.ConeGeometry(0.27, 0.8, 4), woodMat(0xb04a3a));
  nose.rotation.z = -Math.PI / 2; nose.rotation.y = Math.PI / 4; nose.position.set(1.9, 0, 0);
  fus.add(nose);
  g.add(tagAll(fus, "fuselage")); selectable.fuselage = fus;
  [1, -1].forEach((side) => {
    const wing = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.08, 1.4), woodMat(0xc9a169));
    wing.position.set(-0.2, 0, 0.9 * side);
    const key = side === 1 ? "wingL" : "wingR";
    g.add(tagAll(wing, key)); selectable[key] = wing;
  });
  const fin = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.8, 0.06), woodMat(0x4a6fa8));
  fin.position.set(-1.5, 0.55, 0);
  g.add(tagAll(fin, "fin")); selectable.fin = fin;
  proceduralMovers = null;
  return g;
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

  scene.add(new THREE.HemisphereLight(0xbfd6ff, 0x2a2018, 1.15));
  const key = new THREE.DirectionalLight(0xfff2dd, 2.0); key.position.set(4, 6, 3); scene.add(key);
  const rim = new THREE.DirectionalLight(0x7fb0ff, 0.85); rim.position.set(-5, 2, -4); scene.add(rim);

  selectable = {}; movers = {};

  jet = null;
  loadPartsJet()
    .then((res) => {
      if (res) {
        selectable = res.selectable; movers = res.movers;
        jet = res.model; scene.add(jet);
        window.__v3d = res;
      } else { selectable = {}; movers = {}; jet = buildProceduralJet(); scene.add(jet); }
    })
    .catch((e) => {
      console.warn("Part GLBs failed, using stand-in:", e);
      selectable = {}; movers = {}; jet = buildProceduralJet(); scene.add(jet);
    });

  controls = new OrbitControls(camera, canvas);
  controls.target.copy(HOME_TGT);
  controls.enableDamping = true; controls.dampingFactor = 0.06;
  controls.minDistance = 1.6; controls.maxDistance = 14; controls.enablePan = false;

  /* ---------- raycasting ---------- */
  const ray = new THREE.Raycaster(); const mouse = new THREE.Vector2(-9, -9);
  let moved = false, downAt = 0;

  function partAt() {
    if (!jet) return null;
    ray.setFromCamera(mouse, camera);
    const hits = ray.intersectObject(jet, true);
    for (const h of hits) { if (h.object.userData.part) return h.object.userData.part; }
    return null;
  }

  function highlight(keyName, on, strong) {
    const grp = selectable[keyName]; if (!grp) return;
    grp.traverse((o) => {
      if (o.isMesh && o.material && "emissive" in o.material) {
        if (!o.userData.__origEmissive) o.userData.__origEmissive = o.material.emissive?.clone?.() || new THREE.Color(0);
        o.material.emissive = on ? new THREE.Color(strong ? 0x3a86c8 : 0x2a6a9c) : o.userData.__origEmissive.clone();
        o.material.emissiveIntensity = on ? (strong ? 0.55 : 0.4) : 0;
      }
    });
  }

  function onMove(e) {
    mouse.x = (e.clientX / innerWidth) * 2 - 1; mouse.y = -(e.clientY / innerHeight) * 2 + 1;
    label.style.left = e.clientX + "px"; label.style.top = e.clientY + "px";
  }
  canvas.addEventListener("pointermove", onMove);
  canvas.addEventListener("pointerdown", () => { downAt = performance.now(); moved = false; });
  canvas.addEventListener("pointermove", () => { if (performance.now() - downAt > 120) moved = true; });
  canvas.addEventListener("pointerup", (e) => {
    if (moved && performance.now() - downAt > 220) return;
    onMove(e);
    const k = partAt();
    if (k) select(k);
    else deselect();
  });

  /* ---------- selection / camera framing ---------- */
  const FOCUS_DIR = {
    mainbody: new THREE.Vector3(0.45, 0.6, 1),
    wingL: new THREE.Vector3(0.25, 0.85, -1), wingR: new THREE.Vector3(0.25, 0.85, 1),
    aileronL: new THREE.Vector3(-0.4, 0.9, -1), aileronR: new THREE.Vector3(-0.4, 0.9, 1),
    hstabL: new THREE.Vector3(-1, 0.7, -0.8), hstabR: new THREE.Vector3(-1, 0.7, 0.8),
    elevatorL: new THREE.Vector3(-1, 0.8, -0.7), elevatorR: new THREE.Vector3(-1, 0.8, 0.7),
    vstabL: new THREE.Vector3(-1, 0.45, -0.9), vstabR: new THREE.Vector3(-1, 0.45, 0.9),
    rudderL: new THREE.Vector3(-1, 0.5, -0.8), rudderR: new THREE.Vector3(-1, 0.5, 0.8),
    intakeL: new THREE.Vector3(0.5, 0.35, -1), intakeR: new THREE.Vector3(0.5, 0.35, 1),
    fuselage: new THREE.Vector3(0.4, 0.55, 1), fin: new THREE.Vector3(-1, 0.5, 0.9),
  };

  function flyTo(pos, tgt) {
    camAnim = {
      p0: camera.position.clone(), p1: pos.clone(),
      t0: controls.target.clone(), t1: tgt.clone(),
      start: performance.now(), dur: 950,
    };
  }

  function select(keyName) {
    if (selected === keyName) return;
    if (selected) highlight(selected, false);
    selected = keyName; highlight(keyName, true, true);

    const grp = selectable[keyName];
    const sphere = new THREE.Box3().setFromObject(grp).getBoundingSphere(new THREE.Sphere());
    const dir = FOCUS_DIR[keyName] || new THREE.Vector3(1, 0.6, 1);
    const dist = Math.min(6, Math.max(1.6, sphere.radius * 3.4));
    flyTo(sphere.center.clone().add(dir.clone().normalize().multiplyScalar(dist)), sphere.center);

    const info = PART_INFO[keyName];
    document.getElementById("vcTitle").textContent = info.title;
    document.getElementById("vcText").innerHTML = `<p>${info.text}</p>`;
    const mv = document.getElementById("vcMoving");
    const hasAction = !!ACTION[keyName];
    if (info.moving && hasAction) { mv.hidden = false; mv.querySelector("span").textContent = info.moving; }
    else mv.hidden = true;
    card.classList.add("on");
    document.getElementById("vHint").textContent = "TAP EMPTY SPACE OR BACK TO RETURN";
    applyFraming();
  }

  function deselect() {
    if (!selected) return;
    highlight(selected, false); selected = null;
    card.classList.remove("on");
    flyTo(HOME_POS, HOME_TGT);
    document.getElementById("vHint").textContent = "DRAG TO ROTATE · PINCH/SCROLL TO ZOOM · TAP A PART";
    applyFraming();
  }
  document.getElementById("vcBack").addEventListener("click", deselect);
  window.__v3dSelect = select; window.__v3dDeselect = deselect;   // debug/testing hooks

  /* On phones a part's info appears as a bottom sheet (~half the screen),
     so shift the render UP while a part is selected to keep the jet clear
     of the sheet. Desktop is unaffected (full-screen card on the side). */
  function applyFraming() {
    const mobile = innerWidth <= 760;
    if (mobile && selected) {
      camera.setViewOffset(innerWidth, innerHeight, 0, Math.round(innerHeight * 0.26), innerWidth, innerHeight);
    } else {
      camera.clearViewOffset();
    }
  }

  function onKey(e) {
    if (e.key === "Escape" && selected) { e.stopImmediatePropagation(); deselect(); }
  }
  addEventListener("keydown", onKey, true);

  function onResize() {
    camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight);
    applyFraming();
  }
  addEventListener("resize", onResize);

  /* ---------- render loop ---------- */
  const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
  let last = performance.now();

  function frame(now) {
    raf = requestAnimationFrame(frame);
    const dt = Math.min((now - last) / 1000, 0.05); last = now;
    const t = now / 1000;

    /* idle: float + slow turn about its own centre */
    if (!selected && jet) { jet.rotation.y += dt * 0.12; jet.position.y = Math.sin(t * 0.8) * 0.04; }

    if (!selected) {
      const k = partAt();
      if (k !== hovered) {
        if (hovered) highlight(hovered, false);
        hovered = k;
        if (k) { highlight(k, true); label.textContent = PART_INFO[k].title; label.style.opacity = 1; canvas.style.cursor = "pointer"; }
        else { label.style.opacity = 0; canvas.style.cursor = "grab"; }
      }
    } else { label.style.opacity = 0; }

    /* articulate the selected part's control surfaces — each rotates
       ONLY about its own hinge line (single axis, no flapping) */
    const active = selected ? (ACTION[selected] || []) : [];
    const osc = Math.sin(t * 2.2) * 0.38;
    for (const mk in movers) {
      const m = movers[mk];
      const target = active.includes(mk) ? osc : 0;
      m.angle += (target - m.angle) * Math.min(dt * 6, 1);
      m.pivot.setRotationFromAxisAngle(m.axisVec, m.angle);
    }

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
    selected = null; hovered = null; camAnim = null; jet = null; movers = {};
  };
}
