# Animación segura · 4 movimientos

Todo vive en `templates/runtime.js` (ya incluido en la plantilla). No escribas JS nuevo para animar: marca el HTML con los atributos de abajo.

## Principio: "visible por defecto"

El HTML se escribe en su **estado final** (texto escrito, números finales, líneas dibujadas). El motor anima *desde* oculto con Web Animations `fill:'backwards'`. Si el JS falla, el navegador no anima, el usuario tiene "reducir movimiento" o se imprime a PDF, la diapositiva se ve completa. Por eso:

- Nunca pongas `opacity:0`, `visibility:hidden` ni `stroke-dashoffset` iniciales en el HTML/CSS.
- Nunca uses iframes/`srcdoc` para animaciones (rompían el render en exportaciones anteriores).
- Transición entre diapositivas: solo fundido de opacidad (0.5 s). Prohibido: 3D, "magic move", deslizamientos, zoom de página.
- Colores siempre explícitos → seguro en modo oscuro (`<meta name="color-scheme" content="light only">`).

## 1 · Título con máscara (blur → nítido)

```html
<h2 class="a h2 mask" style="left:96px;top:150px;width:1300px">
  <span class="row"><span class="ln">Primera línea</span></span>
  <span class="row"><span class="ln accent">segunda línea.</span></span>
</h2>
```
Cada `.ln` sube desde debajo de su máscara (`translateY(105%) skewY(4deg)`, blur 8 px → 0) en 1.5 s, escalonado 90 ms. Úsalo en el título principal de cada diapositiva (uno por diapositiva).

## 2 · Números que cuentan

```html
<p class="a num" style="left:88px;top:250px"><span data-count="20">20</span><small class="accent">segundos</small></p>
```
Cuenta de 0 al valor en 1.8 s (ease-out quart) con blur de entrada; al final restaura el texto original (puedes escribir "1.000" y `data-count="1000"`). Decimales: `data-dec="1"`. Máximo 3 contadores por diapositiva.

## 3 · Anillos Praxis que respiran

```html
<svg class="a" data-rings="16" data-color="#8b6bc0" data-dot="#3dbfa0" style="left:1212px;top:120px;width:600px;height:600px"></svg>
```
Se dibujan anillo a anillo (2.4 s) y luego "respiran" (ola de opacidad infinita, 2.6 s). `data-rings` 9–18; `data-dot` opcional (punto teal central = "aquí estamos"). Firma de Praxis: **uno por diapositiva** como máximo, nunca como fondo de texto. Colores: `#8b6bc0` o `#5c2d91` sobre morado, `#d8cbef` sobre papel.

## 4 · Trazado de rutas / líneas con pulsos de luz

- Cualquier `path` con `class="trace"` (y `pathLength="1"`) se dibuja al entrar. `class="trace slow"` = 3.6 s (contornos de mapa).
- `class="pulse"` o `class="route"` además hace viajar un punto de luz en bucle (`data-light` color, `data-r` radio).
- Los generadores `data-globe` (mapa con rutas desde un hub) y `data-skyline` (ciudad lineal) ya marcan sus trazos.

```html
<svg class="a" viewBox="0 0 1728 80" style="left:96px;top:460px;width:1728px;height:80px">
  <path d="M216 40H1512" stroke="#dfe2e7" stroke-width="4" fill="none"/>
  <path class="trace pulse" d="M216 40H1512" stroke="#3dbfa0" stroke-width="4" fill="none" pathLength="1" data-light="#3dbfa0" data-r="9"/>
</svg>
```

## Entrada simple (apoyo)

`data-in="1..9"` = sube 28 px + aparece, en el orden indicado (160 ms entre pasos). Úsalo para kicker, bajadas, filas de tabla, logos. Orden típico: 1 kicker/folio → 2–4 contenido → 5–9 pies y logos.

## Ritmo

Una diapositiva no debería tardar más de ~2.5 s en quedar completa. Un protagonista animado por diapositiva (mapa, anillos, cifra o ruta); lo demás, `data-in`. `prefers-reduced-motion` desactiva todo automáticamente.
