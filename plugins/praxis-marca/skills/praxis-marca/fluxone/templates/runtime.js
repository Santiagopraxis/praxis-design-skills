/* fluXOne · runtime de presentación. Íconos, haces ortogonales (LINES) y motor extraídos de los decks fluXOne aprobados.
   No editar salvo para añadir íconos (ICONS) o trazos de líneas (LINES). */
(() => {
const ICONS = {
"servicio":'<path d="M9 18h6"/><path d="M10 21h4"/><path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z"/>',
"persona":'<circle cx="12" cy="8" r="3.5"/><path d="M5 20c0-3.9 3.1-7 7-7s7 3.1 7 7"/>',
"empresa":'<path d="M4 20V8l8-4 8 4v12"/><path d="M9 20v-5h6v5"/><path d="M8 10h.01"/><path d="M12 10h.01"/><path d="M16 10h.01"/>',
"rieles":'<circle cx="12" cy="12" r="2.5"/><circle cx="4.5" cy="5" r="1.5"/><circle cx="19.5" cy="5" r="1.5"/><circle cx="4.5" cy="19" r="1.5"/><circle cx="19.5" cy="19" r="1.5"/><path d="M10.3 10.3L5.6 6.1"/><path d="M13.7 10.3l4.7-4.2"/><path d="M10.3 13.7l-4.7 4.2"/><path d="M13.7 13.7l4.7 4.2"/>',
"conciliacion":'<path d="M4 6h6"/><path d="M4 10h6"/><path d="M14 6h6"/><path d="M14 10h6"/><path d="M8 17l3 3 5-6"/>',
"domiciliacion":'<path d="M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"/><path d="M8 3v4"/><path d="M16 3v4"/><path d="M4 10h16"/><path d="M9 15l2 2 4-4"/>',
"transferencia":'<path d="M4 8h15"/><path d="M16 5l3 3-3 3"/><path d="M20 16H5"/><path d="M8 13l-3 3 3 3"/>',
"qr":'<path d="M4 4h6v6H4z"/><path d="M14 4h6v6h-6z"/><path d="M4 14h6v6H4z"/><path d="M14 14h2v2h-2z"/><path d="M18 18h2v2h-2z"/><path d="M18 14h2"/><path d="M14 20h2"/>',
"link":'<path d="M10 14a4.5 4.5 0 0 0 6.4 0l3-3a4.5 4.5 0 0 0-6.4-6.4l-1 1"/><path d="M14 10a4.5 4.5 0 0 0-6.4 0l-3 3a4.5 4.5 0 0 0 6.4 6.4l1-1"/>',
"whatsapp":'<path d="M4 20l1.4-4.1A8 8 0 1 1 8.2 19z"/><path d="M9 11.5h.01"/><path d="M12 11.5h.01"/><path d="M15 11.5h.01"/>',
"erp":'<ellipse cx="12" cy="6" rx="7" ry="2.5"/><path d="M5 6v12c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V6"/><path d="M5 12c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5"/>',
"validacion":'<circle cx="9" cy="8" r="3.5"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><path d="M15 11l2 2 4-4"/>',
"dispersion":'<path d="M12 18.5v-5.5"/><path d="M12 13L6.2 6.2"/><path d="M12 13l5.8-6.8"/><path d="M12 13V5.4"/><circle cx="12" cy="20" r="1.5"/><circle cx="5.2" cy="5" r="1.5"/><circle cx="18.8" cy="5" r="1.5"/><circle cx="12" cy="3.8" r="1.5"/>',
"recaudo":'<path d="M4 15v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3"/><path d="M12 4v10"/><path d="M8 10l4 4 4-4"/>',
"api":'<path d="M8 7l-5 5 5 5"/><path d="M16 7l5 5-5 5"/><path d="M14 5l-4 14"/>',
"seguridad":'<path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
"tiemporeal":'<path d="M13 3L5 13h6l-1 8 8-10h-6l1-8z"/>',
"liquidez":'<path d="M3 17l5-5 4 3 8-8"/><path d="M15 7h5v5"/>',
"banco":'<path d="M3 10l9-6 9 6"/><path d="M5 10v8"/><path d="M9.7 10v8"/><path d="M14.3 10v8"/><path d="M19 10v8"/><path d="M3 20h18"/>',
"reporte":'<path d="M5 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z"/><path d="M9 16v-3"/><path d="M12 16V9"/><path d="M15 16v-5"/>',
"checkout":'<path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M3 10h18"/><path d="M7 15h4"/>',
"reglas":'<path d="M4 8h9"/><path d="M17 8h3"/><circle cx="15" cy="8" r="2"/><path d="M4 16h3"/><path d="M11 16h9"/><circle cx="9" cy="16" r="2"/>',
"ledger":'<path d="M5 5a2 2 0 0 1 2-2h12v16H7a2 2 0 0 0-2 2z"/><path d="M5 19V5"/><path d="M9 7h6"/><path d="M9 11h6"/>',
"glifo-cobrar_color":'<path d="M3 5c6 0 7 7 12 7"/><path d="M3 12h12"/><path d="M3 19c6 0 7-7 12-7"/><path d="M15 12h4"/><circle cx="20.5" cy="12" r="1.5"/>',
"glifo-conciliar_color":'<path d="M3 6c8 0 10 12 18 12"/><path d="M3 18c8 0 10-12 18-12"/><circle cx="12" cy="12" r="1.8"/>',
"glifo-pagar_color":'<path d="M9 12c5 0 6-7 12-7"/><path d="M9 12h12"/><path d="M9 12c5 0 6 7 12 7"/><path d="M5 12h4"/><circle cx="3.5" cy="12" r="1.5"/>',
"glifo-decidir_color":'<path d="M3 6h18"/><path d="M3 6h5a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h9"/><path d="M3 6h10a2 2 0 0 1 2 2v8a2 2 0 0 0 2 2h4"/>'
};
const NS = "http://www.w3.org/2000/svg";
document.querySelectorAll("svg[data-i]").forEach(s => { s.innerHTML = ICONS[s.dataset.i] || ""; s.classList.add("ico"); s.querySelectorAll("*").forEach(e => e.setAttribute("pathLength", "1")); });

// ---------- haces ortogonales ----------
const R = {
  cobrar:["#3CB8EB","#52BFEC","#408EC3","#6BCBF0","#3CB8EB","#8AD6F3"],
  espectro:["#3CB8EB","#408EC3","#87367A","#AB4B96","#C97BB4","#F5B5D2"],
  conciliar:["#AB4B96","#87367A","#C97BB4","#AB4B96","#4E154F","#D79CC6"],
  pagar:["#F5B5D2","#E59AC2","#DC92BE","#F5B5D2","#C97BB4"],
  decidir:["#4E154F","#87367A","#AB4B96","#6A2A68","#4E154F"]
};
function ortho(P, r, d) {
  P = P.filter((p, i) => i === 0 || p[0] !== P[i-1][0] || p[1] !== P[i-1][1]);
  const n = P.length, seg = [], nor = [];
  for (let i = 0; i < n - 1; i++) { const dx = P[i+1][0]-P[i][0], dy = P[i+1][1]-P[i][1], L = Math.hypot(dx, dy); seg.push([dx/L, dy/L]); nor.push([-dy/L, dx/L]); }
  const Q = P.map((p, i) => i === 0 ? [p[0]+nor[0][0]*d, p[1]+nor[0][1]*d] : i === n-1 ? [p[0]+nor[n-2][0]*d, p[1]+nor[n-2][1]*d] : [p[0]+(nor[i-1][0]+nor[i][0])*d, p[1]+(nor[i-1][1]+nor[i][1])*d]);
  let s = `M${Q[0][0].toFixed(1)} ${Q[0][1].toFixed(1)}`;
  for (let i = 1; i < n - 1; i++) {
    const u1 = seg[i-1], u2 = seg[i], cr = u1[0]*u2[1]-u1[1]*u2[0];
    const l1 = Math.hypot(Q[i][0]-Q[i-1][0], Q[i][1]-Q[i-1][1]), l2 = Math.hypot(Q[i+1][0]-Q[i][0], Q[i+1][1]-Q[i][1]);
    const rr = Math.max(0, Math.min(r + (cr > 0 ? -d : d), l1 / 2, l2 / 2)), B = Q[i];
    const S = [B[0]-u1[0]*rr, B[1]-u1[1]*rr], E = [B[0]+u2[0]*rr, B[1]+u2[1]*rr];
    s += ` L${S[0].toFixed(1)} ${S[1].toFixed(1)} Q${B[0].toFixed(1)} ${B[1].toFixed(1)} ${E[0].toFixed(1)} ${E[1].toFixed(1)}`;
  }
  return s + ` L${Q[n-1][0].toFixed(1)} ${Q[n-1][1].toFixed(1)}`;
}
// spec: {p:[[x,y]...], r, n, gap, ramp, w, dots:"color"|null, dur, delay}
const LINES = {
  bienvenida:[{p:[[0,880],[1220,880],[1220,0]],r:170,n:6,gap:11,ramp:R.cobrar,dots:"#3CB8EB",dur:6},
    {p:[[1920,200],[1720,200],[1720,1080]],r:150,n:5,gap:11,ramp:R.conciliar,dots:"#D79CC6",dur:5,delay:.4},
    {p:[[1470,1080],[1470,520],[1920,520]],r:140,n:5,gap:11,ramp:R.espectro,dots:"#8AD6F3",dur:4.5,delay:.8}],
  portada:[{p:[[0,187],[1310,187],[1310,684],[1920,684]],r:180,n:5,gap:10,ramp:R.espectro,dots:"#3CB8EB",dur:7},
           {p:[[1044,0],[1044,374],[1920,374]],r:140,n:4,gap:10,ramp:["#408EC3","#3CB8EB","#87367A","#6BCBF0"],w:1.1,dots:"#AB4B96",dur:6,delay:.4}],
  oscuro:[{p:[[0,940],[460,940],[460,1080]],r:80,n:4,gap:10,ramp:R.cobrar,dots:"#3CB8EB",dur:4},
          {p:[[1920,130],[1530,130],[1530,0]],r:80,n:4,gap:10,ramp:R.conciliar,dots:"#C97BB4",dur:4,delay:.3}],
  oscuro2:[{p:[[0,940],[460,940],[460,1080]],r:80,n:4,gap:10,ramp:R.cobrar,dots:"#3CB8EB",dur:4},
          {p:[[1920,130],[1530,130],[1530,0]],r:80,n:4,gap:10,ramp:R.conciliar,dots:"#C97BB4",dur:4,delay:.3}],
  div1:[{p:[[1100,0],[1100,330],[1920,330]],r:140,n:5,gap:10,ramp:R.cobrar,dots:"#3CB8EB",dur:5},
        {p:[[1920,890],[1380,890],[1380,1080]],r:120,n:4,gap:10,ramp:R.espectro,dots:"#87367A",dur:4.5,delay:.3}],
  div2:[{p:[[990,0],[990,250],[1480,250],[1480,700],[1920,700]],r:110,n:5,gap:10,ramp:R.conciliar,dots:"#AB4B96",dur:7},
        {p:[[1920,150],[1710,150],[1710,0]],r:80,n:4,gap:10,ramp:R.pagar,dots:"#DC92BE",dur:3.5,delay:.4},
        {p:[[1920,920],[1210,920],[1210,1080]],r:90,n:4,gap:10,ramp:R.cobrar,dots:"#3CB8EB",dur:5,delay:.2}],
  div3:[{p:[[864,0],[864,749],[1920,749]],r:120,n:4,gap:10,ramp:R.cobrar,dots:"#3CB8EB",dur:6},
        {p:[[1920,878],[994,878],[994,1080]],r:90,n:4,gap:10,ramp:R.conciliar,dots:"#AB4B96",dur:5,delay:.3},
        {p:[[1920,331],[1354,331],[1354,0]],r:100,n:4,gap:10,ramp:R.pagar,dots:"#DC92BE",dur:4,delay:.5},
        {p:[[1094,0],[1094,540],[1920,540]],r:100,n:4,gap:10,ramp:R.decidir,dots:"#87367A",dur:5,delay:.6}],
  intro:[{p:[[907,1080],[907,980],[1920,980]],r:110,n:5,gap:10,ramp:R.espectro,dots:"#408EC3",dur:5}],
  cierre:[{p:[[1920,120],[1380,120],[1380,0]],r:100,n:5,gap:11,ramp:R.cobrar,dots:"#3CB8EB",dur:4},
          {p:[[1920,900],[1600,900],[1600,1080]],r:70,n:4,gap:11,ramp:R.conciliar,dots:"#C97BB4",dur:3.5,delay:.4}],
  puntas:[{p:[[640,580],[1280,580]],r:0,n:5,gap:10,ramp:R.espectro,dots:"#3CB8EB",dur:3.2}],
  preguntas:[{p:[[1920,250],[1420,250],[1420,780],[1920,780]],r:160,n:5,gap:10,ramp:R.espectro,dots:"#3CB8EB",dur:7},
             {p:[[0,900],[700,900],[700,1080]],r:100,n:4,gap:10,ramp:R.conciliar,dots:"#AB4B96",dur:4,delay:.3}],
  gracias:[{p:[[1920,180],[1300,180],[1300,900],[1920,900]],r:180,n:5,gap:11,ramp:R.espectro,dots:"#3CB8EB",dur:7},
           {p:[[1920,0],[1600,0],[1600,560],[1920,560]],r:110,n:4,gap:11,ramp:R.conciliar,dots:"#C97BB4",dur:5,delay:.4}],
  tl:[], cobro:[], diag1:[], diag2:[]
};

function build(svg, specs) {
  svg.setAttribute("viewBox","0 0 1920 1080");
  let k = 0;
  specs.forEach((sp, si) => {
    const n = sp.n || 1, g = document.createElementNS(NS,"g");
    let mid = null;
    for (let i = 0; i < n; i++) {
      const d = (i - (n-1)/2) * (sp.gap || 0), path = document.createElementNS(NS,"path");
      path.setAttribute("d", ortho(sp.p, sp.r || 0, d));
      path.setAttribute("stroke", sp.ramp[i % sp.ramp.length]);
      path.setAttribute("stroke-width", sp.w || 1.35);
      g.appendChild(path);
      if (i === Math.floor((n-1)/2)) mid = path;
      requestAnimationFrame(() => { const L = path.getTotalLength(); path.style.setProperty("--len", L); path.classList.add("draw"); path.style.setProperty("--d", ((sp.delay||0) + i*0.06) + "s"); });
    }
    svg.appendChild(g);
    if (sp.dots) {
      const dd = mid.getAttribute("d");
      [[6,0,1],[4.5,.16,.7],[3.2,.3,.45]].forEach(([rad, lag, op]) => {
        const c = document.createElementNS(NS,"circle");
        c.setAttribute("r", rad); c.setAttribute("fill", sp.dots); c.setAttribute("class","dot"); c.style.color = sp.dots; c.setAttribute("fill-opacity", op);
        const m = document.createElementNS(NS,"animateMotion");
        m.setAttribute("dur", (sp.dur||5)+"s"); m.setAttribute("repeatCount","indefinite"); m.setAttribute("path", dd);
        m.setAttribute("begin", (-(lag*(sp.dur||5)/4) + (sp.delay||0)*0) + "s");
        m.setAttribute("keyPoints","0;1"); m.setAttribute("keyTimes","0;1"); m.setAttribute("calcMode","linear");
        c.appendChild(m); svg.appendChild(c);
        if (sp.n > 1) { const c2 = c.cloneNode(true); c2.querySelector("animateMotion").setAttribute("begin", (-(lag*(sp.dur||5)/4) - (sp.dur||5)/2) + "s"); svg.appendChild(c2); }
      });
    }
  });
}
document.querySelectorAll("svg[data-lines]").forEach(s => build(s, LINES[s.dataset.lines] || []));


/* ---------- motor de presentación (simplificado de los decks fluXOne) ---------- */
const deck = document.getElementById("deck"), stage = document.getElementById("stage"), slides = [...document.querySelectorAll(".slide")].filter(s => !s.hasAttribute("data-hidden"));
document.querySelectorAll(".slide[data-hidden]").forEach(s => s.remove());
const count = document.getElementById("count"), bar = document.getElementById("bar");
slides.forEach((s, i) => { const n = s.querySelector(".num"); if (n) n.textContent = String(i+1).padStart(2,"0") + " / " + slides.length; });
let cur = 0, step = 0;
function fit() { const sc = Math.min(deck.clientWidth/1920, deck.clientHeight/1080); stage.style.transform = `translate(${-960*sc}px, ${-540*sc}px) scale(${sc})`; }
function counters(s) {
  s.querySelectorAll(".count[data-to]").forEach(el => {
    const to = parseFloat(el.dataset.to), dec = +(el.dataset.dec||0), t0 = performance.now(), dur = 1600;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) { el.textContent = to.toFixed(dec); return; }
    const tick = now => { const p = Math.min(1, (now-t0)/dur), e = 1 - Math.pow(1-p, 4); el.textContent = (to*e).toFixed(dec); if (p < 1) requestAnimationFrame(tick); else el.textContent = to.toFixed(dec); };
    requestAnimationFrame(tick);
  });
}
function restart(s) { s.querySelectorAll(".draw").forEach(p => { p.style.animation = "none"; p.offsetWidth; p.style.animation = ""; }); }
function show(i, st = 0) {
  i = Math.max(0, Math.min(slides.length-1, i));
  const changed = i !== cur || !slides[i].classList.contains("is-on");
  slides.forEach((s, k) => s.classList.toggle("is-on", k === i));
  cur = i; step = st; const s = slides[i];
  const bg = s.classList.contains("dark") ? "#000" : "#fff"; deck.style.background = bg; document.body.style.background = bg;
  s.querySelectorAll("[data-f]").forEach(el => el.classList.toggle("f-on", +el.dataset.f <= step));
  if (changed) { restart(s); counters(s); }
  deck.classList.toggle("dark", s.classList.contains("dark"));
  if (count) count.textContent = (i+1) + " / " + slides.length;
  if (bar) bar.style.width = ((i+1)/slides.length*100) + "%";
  try { history.replaceState(null, "", "#" + (i+1)); } catch(e) {}
}
function next() { const max = +(slides[cur].dataset.steps||0); if (step < max) show(cur, step+1); else if (cur < slides.length-1) show(cur+1, 0); }
function prev() { if (step > 0) show(cur, step-1); else if (cur > 0) show(cur-1, +(slides[cur-1].dataset.steps||0)); }
function fs() { const el = document.documentElement, d = document; try { if (!(d.fullscreenElement || d.webkitFullscreenElement)) { const r = el.requestFullscreen ? el.requestFullscreen() : (el.webkitRequestFullscreen && el.webkitRequestFullscreen()); if (r && r.catch) r.catch(()=>{}); } else (d.exitFullscreen || d.webkitExitFullscreen).call(d); } catch(e) {} }
document.addEventListener("keydown", e => {
  if (["ArrowRight","ArrowDown","PageDown"," ","Enter"].includes(e.key)) { e.preventDefault(); next(); }
  else if (["ArrowLeft","ArrowUp","PageUp","Backspace"].includes(e.key)) { e.preventDefault(); prev(); }
  else if (e.key === "Home") show(0); else if (e.key === "End") show(slides.length-1);
  else if (e.key.toLowerCase() === "f") fs();
});
deck.addEventListener("click", e => { const x = e.clientX / innerWidth; x < .25 ? prev() : next(); });
let tx = null; deck.addEventListener("touchstart", e => tx = e.touches[0].clientX, {passive:true});
deck.addEventListener("touchend", e => { if (tx === null) return; const dx = e.changedTouches[0].clientX - tx; if (Math.abs(dx) > 40) dx < 0 ? next() : prev(); tx = null; });
const B = (id, f) => { const el = document.getElementById(id); if (el) el.onclick = e => { e.stopPropagation(); f(); }; };
B("next", next); B("prev", prev); B("fsBtn", fs);
addEventListener("resize", fit); document.addEventListener("fullscreenchange", fit); fit();
let idleT = null; addEventListener("mousemove", () => { document.body.classList.remove("idle"); clearTimeout(idleT); idleT = setTimeout(() => document.body.classList.add("idle"), 2000); });
/* impresión / PDF: todo visible, pasos abiertos, cifras finales */
function settle() { document.querySelectorAll("[data-f]").forEach(el => el.classList.add("f-on")); document.querySelectorAll(".count[data-to]").forEach(el => el.textContent = parseFloat(el.dataset.to).toFixed(+(el.dataset.dec||0))); }
addEventListener("beforeprint", settle); try { matchMedia("print").addListener(e => { if (e.matches) settle(); }); } catch(e) {}
window.__flx = { go: i => show(i, +(slides[i] && slides[i].dataset.steps || 0)), n: slides.length, next, prev, settle };
const h = parseInt((location.hash||"").slice(1)); show(isNaN(h) ? 0 : h-1, 0);
})();
