/* ============================================================
   fog.js — real-time volumetric smoke background (WebGL1)
   Domain-warped fractal noise. Colours ease toward targets
   set by the scroll engine via FogBG.setColors(deep, light).
   ============================================================ */
(function () {
  const canvas = document.getElementById("fog");
  const gl = canvas.getContext("webgl", { antialias: false, alpha: false });

  // graceful fallback: if no WebGL, paint a static gradient
  if (!gl) {
    document.body.style.background =
      "radial-gradient(120% 90% at 30% 20%, #2b4a7a 0%, #05070f 70%)";
    window.FogBG = { setColors() {}, setContrast() {}, getContrast() { return 1.7; }, current: { deep: [0, 0, 0], light: [0, 0, 0] } };
    return;
  }

  const VERT = `
    attribute vec2 p;
    void main(){ gl_Position = vec4(p, 0.0, 1.0); }
  `;

  const FRAG = `
    precision highp float;
    uniform vec2  uRes;
    uniform float uTime;
    uniform vec3  uDeep;
    uniform vec3  uLight;
    uniform float uContrast;

    vec2 hash(vec2 p){
      p = vec2(dot(p, vec2(127.1,311.7)), dot(p, vec2(269.5,183.3)));
      return -1.0 + 2.0*fract(sin(p)*43758.5453123);
    }
    float noise(vec2 p){
      vec2 i = floor(p), f = fract(p);
      vec2 u = f*f*(3.0-2.0*f);
      return mix(mix(dot(hash(i+vec2(0.0,0.0)), f-vec2(0.0,0.0)),
                     dot(hash(i+vec2(1.0,0.0)), f-vec2(1.0,0.0)), u.x),
                 mix(dot(hash(i+vec2(0.0,1.0)), f-vec2(0.0,1.0)),
                     dot(hash(i+vec2(1.0,1.0)), f-vec2(1.0,1.0)), u.x), u.y);
    }
    float fbm(vec2 p){
      float v = 0.0, a = 0.5;
      mat2 m = mat2(1.6, 1.2, -1.2, 1.6);
      for(int i=0;i<6;i++){ v += a*noise(p); p = m*p; a *= 0.5; }
      return v;
    }
    void main(){
      vec2 uv = gl_FragCoord.xy / uRes.xy;
      vec2 p  = (gl_FragCoord.xy - 0.5*uRes.xy) / uRes.y;
      p *= 1.55;
      float t = uTime * 0.035;

      // domain warp for that wispy, smoky look
      vec2 q = vec2(fbm(p + vec2(0.0, t)), fbm(p + vec2(5.2, 1.3 - t)));
      vec2 r = vec2(fbm(p + 1.6*q + vec2(1.7, 9.2) + 0.15*t),
                    fbm(p + 1.6*q + vec2(8.3, 2.8) - 0.12*t));
      float f = fbm(p + 2.0*r);
      f = clamp(f*0.5 + 0.5, 0.0, 1.0);

      float density = pow(f, 1.6);
      // Contrast pivots around the midpoint between the two colours:
      // higher = darks darker & lights lighter (bigger gap), brightness steady.
      vec3 mid    = (uDeep + uLight) * 0.5;
      vec3 deepC  = mid + (uDeep  - mid) * uContrast;
      vec3 lightC = mid + (uLight - mid) * uContrast;
      vec3 col = mix(deepC, lightC, density);
      col += 0.05 * vec3(0.6,0.8,1.0) * r.x;   // subtle cool curl highlight

      float vig = smoothstep(1.3, 0.25, length(uv - 0.5));
      col *= vig*0.82 + 0.18;

      // triangular-PDF dither — breaks up 8-bit banding on the smooth
      // dark gradient far better than uniform noise
      vec2 seed = gl_FragCoord.xy + fract(t) * 17.0;
      float r1 = fract(sin(dot(seed, vec2(12.9898, 78.233))) * 43758.5453);
      float r2 = fract(sin(dot(seed, vec2(39.3460, 11.135))) * 24634.6345);
      float tri = (r1 + r2) - 1.0;          // triangular in [-1, 1]
      col += tri * (2.5 / 255.0);

      gl_FragColor = vec4(col, 1.0);
    }
  `;

  function compile(type, src) {
    const s = gl.createShader(type);
    gl.shaderSource(s, src);
    gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS))
      console.error(gl.getShaderInfoLog(s));
    return s;
  }
  const prog = gl.createProgram();
  gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT));
  gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG));
  gl.linkProgram(prog);
  gl.useProgram(prog);

  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  const loc = gl.getAttribLocation(prog, "p");
  gl.enableVertexAttribArray(loc);
  gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

  const uRes = gl.getUniformLocation(prog, "uRes");
  const uTime = gl.getUniformLocation(prog, "uTime");
  const uDeep = gl.getUniformLocation(prog, "uDeep");
  const uLight = gl.getUniformLocation(prog, "uLight");
  const uContrast = gl.getUniformLocation(prog, "uContrast");

  let DPR = Math.min(window.devicePixelRatio || 1, 2);
  function resize() {
    DPR = Math.min(window.devicePixelRatio || 1, 2);
    // Size the drawing buffer from the canvas's ACTUAL rendered size (set by CSS:
    // 100lvh/100vw). Don't pin it to innerHeight px — on iOS that leaves a gap at
    // the top/bottom when the Safari toolbars show or hide.
    const w = canvas.clientWidth || innerWidth;
    const h = canvas.clientHeight || innerHeight;
    canvas.width = Math.floor(w * DPR);
    canvas.height = Math.floor(h * DPR);
    gl.viewport(0, 0, canvas.width, canvas.height);
  }
  window.addEventListener("resize", resize);
  window.addEventListener("orientationchange", resize);
  if (window.visualViewport) window.visualViewport.addEventListener("resize", resize);
  resize();

  // colour state — current eases toward target each frame
  const cur = { deep: [0.02, 0.027, 0.06], light: [0.17, 0.29, 0.48] };
  const tgt = { deep: cur.deep.slice(), light: cur.light.slice() };

  // contrast: 1.0 = original. Higher = more separation between dark & wisps.
  let contrast = 1.75;

  window.FogBG = {
    setColors(deep, light) {
      tgt.deep = deep;
      tgt.light = light;
    },
    setContrast(v) { contrast = v; },
    getContrast() { return contrast; },
    get current() { return cur; },
  };

  const start = performance.now();
  function ease(a, b, k) {
    a[0] += (b[0] - a[0]) * k;
    a[1] += (b[1] - a[1]) * k;
    a[2] += (b[2] - a[2]) * k;
  }
  function frame(now) {
    ease(cur.deep, tgt.deep, 0.04);
    ease(cur.light, tgt.light, 0.04);
    gl.uniform2f(uRes, canvas.width, canvas.height);
    gl.uniform1f(uTime, (now - start) / 1000);
    gl.uniform3fv(uDeep, cur.deep);
    gl.uniform3fv(uLight, cur.light);
    gl.uniform1f(uContrast, contrast);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();
