/* Global Transactions · motor de presentación (no editar salvo para corregir bugs)
   - Escenario fijo 1920×1080 escalado al viewport
   - Navegación: flechas, espacio, clic, swipe, Inicio/Fin, F = pantalla completa
   - 4 movimientos seguros. Regla de oro: el contenido es VISIBLE por defecto en el HTML;
     la animación solo "parte" de un estado oculto mediante fill:'backwards'. Si el JS falla,
     o el navegador no anima, todo se ve igual (estático). */
(function () {
  var O = 'cubic-bezier(.16,1,.3,1)', E = 'cubic-bezier(.65,0,.15,1)';
  var RM = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var NS = 'http://www.w3.org/2000/svg';
  var slides = [].slice.call(document.querySelectorAll('.slide'));
  var stage = document.getElementById('stage'), cur = -1, loops = [];
  function $$(el, s) { return [].slice.call(el.querySelectorAll(s)); }
  function anim(el, k, o) { try { if (RM || !el.animate) return null; o.fill = o.fill || 'backwards'; o.easing = o.easing || O; return el.animate(k, o); } catch (e) { return null; } }

  /* ---------- generadores (se ejecutan una vez; dibujan estado FINAL visible) ---------- */
  // Anillos Praxis: <svg data-rings="16" data-color="#8b6bc0" data-dot="#3dbfa0"></svg>
  $$(document, 'svg[data-rings]').forEach(function (svg) {
    var n = +svg.dataset.rings || 14, col = svg.dataset.color || '#8b6bc0', c = 300, r0 = 36, st = (c - 2 - r0) / (n - 1), h = '';
    svg.setAttribute('viewBox', '0 0 600 600');
    for (var i = 0; i < n; i++) h += '<circle class="ring" cx="300" cy="300" r="' + (r0 + i * st).toFixed(1) + '" pathLength="1" transform="rotate(-90 300 300)" fill="none" stroke="' + col + '" stroke-width="1.4" opacity="' + (1 - i / n * .75).toFixed(2) + '"/>';
    if (svg.dataset.dot) h += '<circle class="ring-dot" cx="300" cy="300" r="7" fill="' + svg.dataset.dot + '"/>';
    svg.innerHTML = h;
  });
  // Skyline lineal: <svg data-skyline data-color="#d8cbef" viewBox="0 0 816 320"></svg>
  $$(document, 'svg[data-skyline]').forEach(function (svg) {
    var vb = (svg.getAttribute('viewBox') || '0 0 816 320').split(/\s+/), w = +vb[2], h = +vb[3], base = h - 2, x = 0, P = [];
    var sp = [[70,.30,'f'],[54,.48,'f'],[90,.62,'t'],[40,.36,'f'],[110,.44,'b'],[60,.80,'s'],[84,.54,'f'],[46,.40,'f'],[120,.70,'t'],[64,.34,'f'],[52,.58,'p'],[96,.46,'f'],[58,.90,'s'],[78,.50,'p'],[60,.32,'f']];
    var tot = 0; sp.forEach(function (s) { tot += s[0] + 10; }); var k = w / tot;
    sp.forEach(function (s) {
      var bw = s[0] * k, top = base - s[1] * (h - 30), f = function (v) { return v.toFixed(1); };
      if (s[2] === 'p') P.push('M' + f(x) + ' ' + base + 'V' + f(top + 40) + 'H' + f(x + bw * .2) + 'V' + f(top) + 'H' + f(x + bw * .8) + 'V' + f(top + 40) + 'H' + f(x + bw) + 'V' + base);
      else if (s[2] === 'b') { P.push('M' + f(x) + ' ' + base + 'V' + f(top + 30) + 'L' + f(x + bw / 2) + ' ' + f(top) + 'L' + f(x + bw) + ' ' + f(top + 30) + 'V' + base); for (var j = 1; j < 6; j++) P.push('M' + f(x + bw * j / 6) + ' ' + base + 'V' + f(top + 46)); P.push('M' + f(x) + ' ' + f(top + 38) + 'H' + f(x + bw)); }
      else { P.push('M' + f(x) + ' ' + base + 'V' + f(top) + 'H' + f(x + bw) + 'V' + base); if (s[2] === 's') P.push('M' + f(x + bw / 2) + ' ' + f(top) + 'V' + f(top - 46)); if (s[2] === 't') P.push('M' + f(x + bw * .25) + ' ' + f(top) + 'V' + f(top - 24) + 'H' + f(x + bw * .75) + 'V' + f(top)); for (var y = top + 22; y < base - 16; y += 26) P.push('M' + f(x + 8) + ' ' + f(y) + 'H' + f(x + bw - 8)); }
      x += bw + 10 * k;
    });
    P.push('M0 ' + base + 'H' + w);
    svg.innerHTML = '<g fill="none" stroke="' + (svg.dataset.color || '#d8cbef') + '" stroke-width="1.3" stroke-linecap="round">' + P.map(function (d) { return '<path class="trace" pathLength="1" d="' + d + '"/>'; }).join('') + '</g>';
  });
  // Globo / mapa con rutas: <svg data-globe data-hub="327,284" data-pts="FedNow:327,284;SPEI:151,415" data-land="#8b6bc0" data-node="#3dbfa0" data-route="#3dbfa0"></svg>
  $$(document, 'svg[data-globe]').forEach(function (svg) {
    var lc = svg.dataset.land || '#8b6bc0', nc = svg.dataset.node || '#3dbfa0', rc = svg.dataset.route || nc;
    var hub = (svg.dataset.hub || '327,284').split(',').map(Number), h = '';
    svg.setAttribute('viewBox', '0 0 1000 1000');
    if (svg.dataset.grat !== 'no') { h += '<circle cx="500" cy="500" r="490" fill="none" stroke="' + lc + '" stroke-width="1.2" opacity=".55"/>'; [-60, -30, 0, 30, 60].forEach(function (a) { var r = 490 * Math.cos(a * Math.PI / 180), cy = 500 - 490 * Math.sin(a * Math.PI / 180) * .97; h += '<ellipse cx="500" cy="' + cy.toFixed(0) + '" rx="' + r.toFixed(0) + '" ry="' + (r * .24).toFixed(0) + '" fill="none" stroke="' + lc + '" stroke-width=".8" opacity=".22"/>'; }); }
    h += '<path class="trace slow" pathLength="1" d="' + (window.GT_LAND || '') + '" fill="none" stroke="' + lc + '" stroke-width="1.3" stroke-linejoin="round"/>';
    var nodes = '', routes = '';
    (svg.dataset.pts || '').split(';').filter(Boolean).forEach(function (t) {
      var a = t.split(':'), q = a[1].split(',').map(Number), px = q[0], py = q[1];
      if (px !== hub[0] || py !== hub[1]) { var dx = px - hub[0], dy = py - hub[1], mx = (hub[0] + px) / 2 - dy * .28, my = (hub[1] + py) / 2 + dx * .28; routes += '<path class="trace route" pathLength="1" d="M' + hub[0] + ' ' + hub[1] + 'Q' + mx.toFixed(0) + ' ' + my.toFixed(0) + ' ' + px + ' ' + py + '" fill="none" stroke="' + rc + '" stroke-width="2"/>'; }
      nodes += '<circle class="node" cx="' + px + '" cy="' + py + '" r="9" fill="' + nc + '"/>';
      if (svg.dataset.labels !== 'no') nodes += '<text x="' + (px + 18) + '" y="' + (py + 9) + '" fill="' + nc + '" font-size="26" font-weight="700" letter-spacing="1" font-family="Helvetica Neue,Helvetica,Arial,sans-serif">' + a[0].toUpperCase() + '</text>';
    });
    svg.innerHTML = h + routes + nodes;
  });

  /* ---------- movimientos al entrar a una diapositiva ---------- */
  function enter(s) {
    // 0) entradas sencillas: data-in="1..9" (orden)  → sube y aparece
    $$(s, '[data-in]').forEach(function (el) { var n = +el.dataset.in || 1; anim(el, [{ opacity: 0, transform: 'translateY(28px)' }, { opacity: 1, transform: 'none' }], { duration: 900, delay: 120 + (n - 1) * 160 }); });
    // 1) TÍTULO CON MÁSCARA: .mask > .ln  (blur → nítido, sube desde la máscara)
    $$(s, '.mask .ln').forEach(function (l, i) { anim(l, [{ transform: 'translateY(105%) skewY(4deg)', filter: 'blur(8px)', opacity: .2 }, { transform: 'none', filter: 'blur(0)', opacity: 1 }], { duration: 1500, delay: 150 + i * 90 }); });
    // 2) NÚMEROS QUE CUENTAN: <span data-count="50">50</span> (el texto final ya está escrito)
    $$(s, '[data-count]').forEach(function (el) {
      if (RM) return; var to = parseFloat(el.dataset.count), dec = +(el.dataset.dec || 0), fin = el.dataset.fin || (el.dataset.fin = el.textContent), t0 = null, D = 1800;
      anim(el, [{ transform: 'translateY(45%)', filter: 'blur(14px)', opacity: 0 }, { transform: 'none', filter: 'blur(0)', opacity: 1 }], { duration: 1500 });
      function f(t) { if (!t0) t0 = t; var p = Math.min(1, (t - t0) / D), e = 1 - Math.pow(1 - p, 4); el.textContent = p < 1 ? (to * e).toFixed(dec) : fin; if (p < 1) requestAnimationFrame(f); }
      requestAnimationFrame(f);
    });
    // 3) ANILLOS PRAXIS QUE RESPIRAN
    $$(s, 'svg[data-rings]').forEach(function (svg) {
      var R = $$(svg, '.ring');
      R.forEach(function (r, i) { anim(r, [{ strokeDasharray: '1', strokeDashoffset: 1 }, { strokeDasharray: '1', strokeDashoffset: 0 }], { duration: 2400, delay: 150 + i * 55 }); });
      if (!RM) setTimeout(function () { if (s.classList.contains('on')) R.forEach(function (r, i) { var o = r.getAttribute('opacity'); loops.push(r.animate([{ opacity: o }, { opacity: 1 }, { opacity: o }], { duration: 2600, delay: i * 120, iterations: Infinity, easing: 'ease-in-out' })); }); }, 1800 + R.length * 70);
    });
    // 4) TRAZADO DE RUTAS / LÍNEAS + PULSOS DE LUZ
    $$(s, 'svg .trace').forEach(function (p, i) { anim(p, [{ strokeDasharray: '1', strokeDashoffset: 1 }, { strokeDasharray: '1', strokeDashoffset: 0 }], { duration: p.classList.contains('slow') ? 3600 : 1600, delay: 300 + (i % 40) * 35, easing: E }); });
    $$(s, 'svg .node').forEach(function (n, i) { n.style.transformOrigin = 'center'; n.style.transformBox = 'fill-box'; anim(n, [{ transform: 'scale(0)' }, { transform: 'scale(1)' }], { duration: 700, delay: 1400 + i * 140 }); });
    if (!RM) setTimeout(function () {
      if (!s.classList.contains('on')) return;
      $$(s, 'svg .route, svg .pulse').forEach(function (r, i) {
        var c = document.createElementNS(NS, 'circle'); c.setAttribute('r', r.dataset.r || 6); c.setAttribute('fill', r.dataset.light || '#ffffff'); c.setAttribute('class', 'gt-pulse'); r.parentNode.appendChild(c);
        var L = r.getTotalLength(), P = 2600 + i * 230, t0 = null, alive = true;
        loops.push({ cancel: function () { alive = false; c.remove(); } });
        (function f(t) { if (!alive) return; if (!t0) t0 = t - i * 400; var u = ((t - t0) % P) / P, e = u < .5 ? 2 * u * u : 1 - Math.pow(-2 * u + 2, 2) / 2, q = r.getPointAtLength(e * L); c.setAttribute('cx', q.x); c.setAttribute('cy', q.y); c.style.opacity = Math.sin(u * Math.PI); requestAnimationFrame(f); })(performance.now());
      });
    }, 2600);
    // videos
    $$(s, 'video').forEach(function (v) { try { v.currentTime = 0; var p = v.play(); if (p && p.catch) p.catch(function () {}); } catch (e) {} });
  }
  function leave(s) { loops.forEach(function (a) { try { a.cancel(); } catch (e) {} }); loops = []; $$(s, 'video').forEach(function (v) { v.pause(); }); }

  /* ---------- impresión / PDF: termina todo y deja el estado final ---------- */
  function settle() {
    loops.forEach(function (a) { try { a.cancel(); } catch (e) {} }); loops = [];
    try { document.getAnimations().forEach(function (a) { try { a.finish(); } catch (e) { a.cancel(); } }); } catch (e) {}
    $$(document, '[data-count]').forEach(function (el) { if (el.dataset.fin) el.textContent = el.dataset.fin; });
    $$(document, '.gt-pulse').forEach(function (c) { c.remove(); });
  }
  addEventListener('beforeprint', settle);
  try { matchMedia('print').addListener(function (e) { if (e.matches) settle(); }); } catch (e) {}

  /* ---------- navegación ---------- */
  function fit() { var k = Math.min(innerWidth / 1920, innerHeight / 1080); stage.style.transform = 'scale(' + k + ')'; }
  addEventListener('resize', fit); fit();
  function go(i) {
    i = Math.max(0, Math.min(slides.length - 1, i)); if (i === cur) return;
    if (cur >= 0) { slides[cur].classList.remove('on'); leave(slides[cur]); }
    cur = i; slides[i].classList.add('on'); enter(slides[i]);
    var ct = document.getElementById('ct'); if (ct) ct.textContent = (i + 1) + ' / ' + slides.length;
    try { history.replaceState(null, '', '#' + (i + 1)); } catch (e) {}
  }
  function fs() { var d = document, el = d.documentElement; if (d.fullscreenElement || d.webkitFullscreenElement) (d.exitFullscreen || d.webkitExitFullscreen).call(d); else (el.requestFullscreen || el.webkitRequestFullscreen || function () {}).call(el); }
  addEventListener('keydown', function (e) {
    var k = e.key;
    if (k === 'ArrowRight' || k === 'ArrowDown' || k === 'PageDown' || k === ' ' || k === 'Enter') { e.preventDefault(); go(cur + 1); }
    else if (k === 'ArrowLeft' || k === 'ArrowUp' || k === 'PageUp' || k === 'Backspace') { e.preventDefault(); go(cur - 1); }
    else if (k === 'Home') go(0); else if (k === 'End') go(slides.length - 1);
    else if (k === 'f' || k === 'F') fs();
  });
  addEventListener('click', function (e) { if (e.target.closest('#hud') || e.target.closest('video[controls]')) return; go(e.clientX < innerWidth / 3 ? cur - 1 : cur + 1); });
  var tx = null; addEventListener('touchstart', function (e) { tx = e.touches[0].clientX; }, { passive: true });
  addEventListener('touchend', function (e) { if (tx === null) return; var dx = e.changedTouches[0].clientX - tx; if (Math.abs(dx) > 40) go(dx < 0 ? cur + 1 : cur - 1); tx = null; });
  var b = function (id, f) { var el = document.getElementById(id); if (el) el.onclick = function (e) { e.stopPropagation(); f(); }; };
  b('pv', function () { go(cur - 1); }); b('nx', function () { go(cur + 1); }); b('fs', fs);
  window.__deck = { settle: settle, go: go, n: slides.length, cur: function () { return cur; } };
  var h = parseInt((location.hash || '').slice(1), 10); go(h > 0 ? h - 1 : 0);
})();
