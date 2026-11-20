#!/usr/bin/env python3
"""Un solo paso: empaqueta la pieza (HTML offline), exporta el PDF y crea una hoja de revisión.

Uso:
  python3 scripts/armar.py PIEZA.html --marca gt|fluxone [--salida carpeta] [--sin-pdf]

Genera en la carpeta de salida (por defecto, junto a la pieza):
  <nombre>.html   → archivo único, funciona sin internet
  <nombre>.pdf    → para enviar/imprimir (decks: 1 diapositiva por página; documentos: carta)
  <nombre>_revision.png → todas las páginas en miniatura; MÍRALA antes de entregar
Revisar UNA imagen de miniaturas cuesta mucho menos que abrir cada página.
"""
import os, subprocess, sys, glob, shutil, tempfile

AQUI = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MARCAS = {'gt': 'global-transactions', 'global-transactions': 'global-transactions', 'karpay': 'global-transactions', 'fluxone': 'fluxone'}


def main():
    a = sys.argv[1:]
    if not a or '--marca' not in a:
        print(__doc__); sys.exit(1)
    src = os.path.abspath(a[0])
    marca = MARCAS.get(a[a.index('--marca') + 1].lower())
    if not marca:
        sys.exit('Marca no válida: usa gt o fluxone')
    root = os.path.join(AQUI, marca)
    out = os.path.abspath(a[a.index('--salida') + 1]) if '--salida' in a else os.path.dirname(src)
    os.makedirs(out, exist_ok=True)
    name = os.path.splitext(os.path.basename(src))[0]
    html = os.path.join(out, name + '.html') if os.path.dirname(src) != out else os.path.join(out, name + '_final.html')
    r = subprocess.run([sys.executable, os.path.join(root, 'scripts', 'empaquetar.py'), src, html, '--root', root])
    if r.returncode:
        sys.exit('Corrige las rutas no encontradas y vuelve a correr.')
    if '--sin-pdf' in a:
        return
    pdf = os.path.join(out, name + '.pdf')
    subprocess.run([sys.executable, os.path.join(root, 'scripts', 'exportar.py'), html, '--pdf', pdf], check=True)
    # hoja de revisión (miniaturas)
    if shutil.which('pdftoppm'):
        tmp = tempfile.mkdtemp()
        subprocess.run(['pdftoppm', '-r', '40', '-png', pdf, os.path.join(tmp, 'p')], stderr=subprocess.DEVNULL)
        fs = sorted(glob.glob(os.path.join(tmp, 'p-*.png')))
        try:
            from PIL import Image
            ims = [Image.open(f) for f in fs]
            w, h = ims[0].size
            cols = 4 if w < h else 3
            rows = (len(ims) + cols - 1) // cols
            S = Image.new('RGB', (cols * w + (cols - 1) * 8, rows * h + (rows - 1) * 8), '#888')
            for i, im in enumerate(ims):
                S.paste(im, ((i % cols) * (w + 8), (i // cols) * (h + 8)))
            S.save(os.path.join(out, name + '_revision.png'))
            print('Revisión →', os.path.join(out, name + '_revision.png'), '(%d páginas)' % len(ims))
        except Exception as e:
            print('Sin hoja de revisión:', e)
        shutil.rmtree(tmp, ignore_errors=True)


if __name__ == '__main__':
    main()
