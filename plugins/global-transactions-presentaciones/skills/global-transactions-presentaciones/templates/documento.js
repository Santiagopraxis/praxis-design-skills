/* Global Transactions · generadores estáticos para DOCUMENTOS (sin animación).
   <svg data-rings="14" data-color="#8b6bc0" data-dot="#3dbfa0"></svg>  → anillos Praxis
   <svg data-skyline data-color="#d8cbef" viewBox="0 0 816 320"></svg>  → ciudad lineal  */
(function () {
  function $$(el, s) { return [].slice.call(el.querySelectorAll(s)); }
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
})();
