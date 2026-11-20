#!/usr/bin/env python3
"""Exporta una presentación animada (HTML con <section class="slide">) a PDF y PNG:
recorre cada diapositiva (y cada paso), espera a que termine la animación y captura 1920×1080.
Uso: python3 deck_pdf.py DECK.html SALIDA.pdf [--png CARPETA] [--espera 2.2]"""
import os, sys, tempfile
from playwright.sync_api import sync_playwright
from PIL import Image

def main():
    a = sys.argv[1:]
    src, out = os.path.abspath(a[0]), os.path.abspath(a[1])
    wait = float(a[a.index('--espera') + 1]) if '--espera' in a else 2.2
    pngdir = a[a.index('--png') + 1] if '--png' in a else None
    shots = []
    with sync_playwright() as p:
        b = p.chromium.launch(args=['--no-sandbox'])
        pg = b.new_page(viewport={'width': 1920, 'height': 1080})
        pg.goto('file://' + src); pg.wait_for_timeout(int(wait * 1000))
        pg.add_style_tag(content='#hud,.hud,[class*="hud"],#nav,.nav-ui{display:none !important}')
        # vistas = diapositivas + pasos internos (data-steps); las animaciones de fondo nunca se quedan quietas
        views = pg.evaluate("[...document.querySelectorAll('section.slide')].reduce((t,s)=>t+1+(+s.dataset.steps||0),0)")
        tmp = tempfile.mkdtemp()
        for i in range(views):
            f = os.path.join(tmp, '%03d.png' % i)
            pg.screenshot(path=f); shots.append(f)
            if i < views - 1:
                pg.keyboard.press('ArrowRight'); pg.wait_for_timeout(int(wait * 1000))
        b.close()
    ims = [Image.open(f).convert('RGB') for f in shots]
    ims[0].save(out, save_all=True, append_images=ims[1:], resolution=96)
    print('PDF →', out, '(%d vistas)' % len(ims))
    if pngdir:
        os.makedirs(pngdir, exist_ok=True)
        base = os.path.splitext(os.path.basename(out))[0]
        for n, im in enumerate(ims, 1): im.save(os.path.join(pngdir, '%s-%02d.png' % (base, n)))

if __name__ == '__main__':
    main()
