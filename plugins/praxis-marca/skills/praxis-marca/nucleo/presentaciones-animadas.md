# Presentaciones animadas (HTML)

Son un solo archivo HTML de 1920×1080 que se escala a la pantalla. Se presentan en el navegador:
→ / espacio / clic avanza, ← retrocede, F pantalla completa, `#3` en la URL abre la diapositiva 3.
**No se editan en PowerPoint ni en Google Slides.** Para editarlas hay que tocar el HTML (lo hace Claude).
El PDF que sale de `armar.py` es una captura de cada paso, solo para compartir o imprimir.

## Plantilla por marca

| Marca | Archivo | Estilo | Diapositivas |
|---|---|---|---|
| Global Transactions / Karpay | `global-transactions/templates/presentacion-animada.html` | Deck Redeban: papel claro, morado y verde, líneas que se dibujan | 6: portada · quiénes participan · proceso · entregables · próximos pasos · cierre |
| fluXOne | `fluxone/templates/presentacion-animada.html` | Presentación general fluXOne: blanco/negro, pilares de color, Jakarta | 14 (16 vistas): portada, problema, qué es fluXOne, hace las dos cosas, así se ve un cobro, NexaPay, agente de cobranza por WhatsApp, confianza, cierre… |
| Praxis | `praxis/templates/presentacion-animada.html` | Editorial Praxis: naranja/navy, arcos y ciudad | 6: portada · propuesta de valor (cifras) · servicios · proceso 01–04 · Project Office · cierre |

## Cómo editar (barato)

1. Copia la plantilla de la marca a la carpeta de trabajo con el nombre final.
2. Cambia **solo textos y cifras** dentro de cada `<section class="slide">`. No toques `<style>` ni `<script>`.
3. Para quitar una diapositiva borra su `<section>` completa. Para agregar una, duplica la más parecida y cambia sus textos.
4. Animación de entrada: `data-build-in="efecto orden"`. Efectos: `fade rise pop scale right left down`. El orden (1, 2, 3…) es la secuencia dentro de la diapositiva. Las líneas con clase `draw` / `draw-v` se dibujan solas.
5. fluXOne usa su propio motor: `data-steps="N"` en una diapositiva agrega N clics internos antes de pasar a la siguiente.
6. Imágenes y logos: rutas `assets/...` de la carpeta de la marca; `armar.py` los incrusta y el HTML queda offline.

## Armar y revisar

```bash
python3 <skill>/scripts/armar.py Deck.html --marca gt|fluxone|praxis --salida <carpeta>
```
Genera `Deck.html` (único, offline), `Deck.pdf` (una página por paso) y `Deck_revision.png`. Revisa solo la imagen: textos que se salen de 1920×1080, cifras que se pisan, logos que faltan.

Entrega el **HTML** (para presentar) y el **PDF** (para enviar). Recuérdale al usuario en una línea que el HTML se abre en el navegador y no se edita en PowerPoint.
