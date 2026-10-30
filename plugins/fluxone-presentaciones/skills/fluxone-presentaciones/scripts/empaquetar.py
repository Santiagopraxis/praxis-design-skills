#!/usr/bin/env python3
"""Empaquetador offline: convierte un deck HTML con rutas relativas en UN solo archivo
autocontenido (imágenes, SVG, videos, fuentes, scripts y CSS embebidos como data URI / inline).

Uso:
  python3 scripts/empaquetar.py MI_DECK.html SALIDA.html [--root CARPETA_DE_LA_SKILL]

Las rutas se buscan primero junto al HTML y después en --root (por defecto, la carpeta
de la skill = carpeta padre de scripts/). Solo usa la biblioteca estándar de Python.
"""
import base64, mimetypes, os, re, sys

MIME = {'.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.gif': 'image/gif',
        '.svg': 'image/svg+xml', '.mp4': 'video/mp4', '.webm': 'video/webm', '.woff2': 'font/woff2', '.woff': 'font/woff',
        '.ttf': 'font/ttf', '.otf': 'font/otf', '.css': 'text/css', '.js': 'text/javascript'}


def main():
    a = sys.argv[1:]
    if len(a) < 2:
        print(__doc__); sys.exit(1)
    src, out = a[0], a[1]
    root = a[a.index('--root') + 1] if '--root' in a else os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    bases = [os.path.dirname(os.path.abspath(src)), os.path.abspath(root)]
    missing = []

    def find(p):
        p = p.split('#')[0].split('?')[0]
        for b in bases:
            f = os.path.normpath(os.path.join(b, p))
            if os.path.isfile(f):
                return f
        missing.append(p)
        return None

    def skip(u):
        return u.startswith(('data:', 'http:', 'https:', '//', '#', 'mailto:', 'javascript:')) or not u.strip()

    def uri(p):
        f = find(p)
        if not f:
            return p
        ext = os.path.splitext(f)[1].lower()
        m = MIME.get(ext) or mimetypes.guess_type(f)[0] or 'application/octet-stream'
        return 'data:%s;base64,%s' % (m, base64.b64encode(open(f, 'rb').read()).decode())

    def css_urls(css, css_dir=None):
        def r(m):
            u = m.group(2)
            if skip(u):
                return m.group(0)
            if css_dir:
                bases.insert(0, css_dir)
            d = uri(u)
            if css_dir:
                bases.pop(0)
            return 'url("%s")' % d
        return re.sub(r'url\(\s*([\'"]?)([^\'")]+)\1\s*\)', r, css)

    h = open(src, encoding='utf-8').read()

    # <script src="..."></script> → inline
    def js(m):
        u = m.group(1)
        if skip(u):
            return m.group(0)
        f = find(u)
        return '<script>\n%s\n</script>' % open(f, encoding='utf-8').read().replace('</script', '<\\/script') if f else m.group(0)
    h = re.sub(r'<script[^>]*\ssrc="([^"]+)"[^>]*>\s*</script>', js, h)

    # <link rel="stylesheet" href="..."> → <style>
    def css(m):
        u = re.search(r'href="([^"]+)"', m.group(0)).group(1)
        if skip(u):
            return m.group(0)
        f = find(u)
        return '<style>\n%s\n</style>' % css_urls(open(f, encoding='utf-8').read(), os.path.dirname(f)) if f else m.group(0)
    h = re.sub(r'<link[^>]*rel="stylesheet"[^>]*>', css, h)

    # src / poster / href de imágenes, videos, source
    h = re.sub(r'(\s(?:src|poster|xlink:href|href))="([^"]+\.(?:png|jpe?g|webp|gif|svg|mp4|webm|woff2?|ttf|otf))"',
               lambda m: m.group(0) if skip(m.group(2)) else '%s="%s"' % (m.group(1), uri(m.group(2))), h, flags=re.I)
    # url(...) en <style> y style=""
    h = css_urls(h)

    open(out, 'w', encoding='utf-8').write(h)
    print('OK → %s (%.2f MB)' % (out, os.path.getsize(out) / 1e6))
    if missing:
        print('ATENCIÓN, no encontrados:', sorted(set(missing)))
        sys.exit(2)


if __name__ == '__main__':
    main()
