# Vocabulario de movimiento fluXOne

Todo lo implementa `templates/runtime.js` + `estilos-base.css` (extraídos de los decks). No escribas JS nuevo salvo para añadir trazos a `LINES` o íconos a `ICONS`.

## 1 · Haces de líneas "Stroke & Glow" (firma de marca)

`<svg class="lines" data-lines="NOMBRE"></svg>` como primer hijo de la diapositiva. Dibuja 4–6 líneas paralelas finas (1.35 px) con esquinas redondeadas que entran desde un borde, se dibujan (1.8 s) y llevan **puntos de luz** con brillo que recorren el haz en bucle.

| Nombre | Composición | Uso típico |
|---|---|---|
| `portada` | Espectro horizontal que baja en codo + haz secundario vertical | Portada (con chips sobre las líneas en y=187, 374, 684) |
| `bienvenida` | 3 haces (cian, violeta, espectro) | Pantalla de espera en negro |
| `oscuro` / `oscuro2` | Dos esquinas pequeñas (abajo-izq. cian, arriba-der. violeta) | Frases en negro |
| `div1` / `div2` / `div3` | 2–4 haces, cada uno de un pilar | Divisores de capítulo |
| `intro` | Haz espectro inferior derecho | "Qué es fluXOne" |
| `cierre`, `gracias`, `preguntas` | Haces que enmarcan la mitad derecha | Cierre / Q&A |
| `puntas` | Una línea horizontal corta | Conectar dos bloques |

Para un trazo nuevo añade a `LINES`: `{p:[[x,y],…], r:radio, n:líneas, gap:10, ramp:R.cobrar|R.conciliar|R.pagar|R.decidir|R.espectro, dots:"#color", dur:segundos, delay:s}`. Los puntos deben entrar/salir por los bordes y no cruzar texto.

## 2 · `rise` (entrada)
`class="rise"` + `style="--d:.15s"` → sube 18 px y aparece (0.9 s, `cubic-bezier(.2,.7,.1,1)`). Escalona 0.1–0.15 s. Es la entrada estándar de todo bloque.

## 3 · `float`
`class="render float"` → los renders flotan ±14 px en 9 s. Solo en renders.

## 4 · Íconos que se dibujan
`<svg class="ico anim" viewBox="0 0 24 24" stroke="#AB4B96" data-i="conciliacion" style="--d:.3s"></svg>` — trazo de 1.5 px que se dibuja. Íconos disponibles (`data-i`): servicio, persona, empresa, rieles, conciliacion, domiciliacion, transferencia, qr, link, whatsapp, erp, validacion, dispersion, recaudo, api, seguridad, tiemporeal, liquidez, banco, reporte, checkout, reglas, ledger, y glifos de pilar `glifo-cobrar_color`, `glifo-conciliar_color`, `glifo-pagar_color`, `glifo-decidir_color`. El color del trazo = color del pilar del contenido.

## 5 · Cifras que cuentan
`<span class="count" data-to="59">59</span>` (decimales: `data-dec="1"`). Cuenta en 1.6 s al entrar.

## 6 · Pasos dentro de una diapositiva
`<section data-steps="2">` y elementos con `data-f="1"` / `data-f="2"`: aparecen con cada avance (→) antes de pasar de diapositiva. Úsalo para diagramas que se construyen (ej. "Abre los canales de cobro → y concilia cada peso"). En PDF se muestran todos.

## 7 · Detalles
- `.st` (estado "Conciliado") aparece con pop 0.5 s tras su movimiento `.mv`.
- Bienvenida letra por letra (`.bv-word span` con `--i`), solo en pantallas de espera.
- Demos guionadas (app NexaPay, chat WhatsApp, dashboard Control Tower, checkout) viven en los decks originales con su JS propio: cópialas completas si se necesitan.

## Reglas
- Transición entre diapositivas: fundido 0.7 s, nada más.
- Un haz de líneas por diapositiva (dos como máximo en portada/cierre); no en tablas densas.
- `prefers-reduced-motion` desactiva dibujo, rise y float automáticamente.
- El texto nunca depende de la animación para leerse (en PDF todo queda visible).
