#!/usr/bin/env python3
"""Exporta un deck HTML (ya empaquetado) a PDF y/o capturas PNG por diapositiva con Chromium.

Uso:
  python3 scripts/exportar.py DECK.html --pdf SALIDA.pdf
  python3 scripts/exportar.py DECK.html --png CARPETA_CAPTURAS     (requiere playwright)

PDF: usa el modo impresión del deck (@media print = una diapositiva por página 1920×1080,
sin animaciones). Busca Chromium/Chrome instalado (o el de Playwright).
PNG: navega diapositiva por diapositiva (window.__deck.go) y guarda capturas para revisar.
"""
import glob, os, shutil, subprocess, sys


def chrome():
    for n in ('chromium', 'chromium-browser', 'google-chrome', 'google-chrome-stable', 'chrome'):
        p = shutil.which(n)
        if p:
            return p
    for pat in ('/opt/pw-browsers/chromium-*/chrome-linux/chrome', os.path.expanduser('~/.cache/ms-playwright/chromium-*/chrome-linux/chrome'),
                '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'):
        g = sorted(glob.glob(pat))
        if g:
            return g[-1]
    return None


def pdf(src, out):
    c = chrome()
    if not c:
        sys.exit('No encontré Chromium/Chrome. Alternativa: abrir el HTML en Chrome → Imprimir → Guardar como PDF (márgenes: ninguno, gráficos de fondo: sí).')
    subprocess.run([c, '--headless=new', '--no-sandbox', '--disable-gpu', '--no-pdf-header-footer', '--virtual-time-budget=4000',
                    '--print-to-pdf=' + os.path.abspath(out), 'file://' + os.path.abspath(src)], check=True,
                   stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    print('PDF →', out)


def png(src, outdir, wait=3500):
    from playwright.sync_api import sync_playwright
    os.makedirs(outdir, exist_ok=True)
    with sync_playwright() as p:
        kw = {'args': ['--no-sandbox']}
        if chrome():
            kw['executable_path'] = chrome()
        b = p.chromium.launch(**kw)
        for scheme in ('light', 'dark'):
            pg = b.new_page(viewport={'width': 1920, 'height': 1080}, color_scheme=scheme)
            pg.goto('file://' + os.path.abspath(src))
            pg.wait_for_timeout(500)
            n = pg.evaluate('window.__deck ? window.__deck.n : document.querySelectorAll(".slide").length')
            for i in range(n):
                pg.evaluate('i => window.__deck ? window.__deck.go(i) : (window.__flx && window.__flx.go(i))', i)
                pg.wait_for_timeout(wait)
                pg.screenshot(path=os.path.join(outdir, '%s-%02d.png' % (scheme, i + 1)))
            pg.close()
        b.close()
    print('PNG →', outdir)


if __name__ == '__main__':
    a = sys.argv[1:]
    if not a or ('--pdf' not in a and '--png' not in a):
        sys.exit(__doc__)
    if '--pdf' in a:
        pdf(a[0], a[a.index('--pdf') + 1])
    if '--png' in a:
        png(a[0], a[a.index('--png') + 1])
