# Sistema visual fluXOne

Fuentes: `assets/design-system/colors_and_type.css` + README del DS (fuente de verdad) y el CSS real de los 3 decks (`templates/estilos-base.css`, `templates/componentes.css`).

## Color

| Token deck | Hex | Token DS | Uso |
|---|---|---|---|
| `--blanco` | `#FFFFFF` | `--flx-l-bg` | Fondo de diapositivas claras |
| `--negro` | `#000000` | `--flx-d-bg` | Fondo `.slide.dark` |
| `--tinta` | `#0A0A0A` | `--flx-l-fg-1` | Texto principal, reglas de columnas |
| `--t2` / `--t3` / `--t4` | `#55555B` / `#8C8C92` / `#C4C4C9` | fg-2/3/4 | Lead/cuerpo · eyebrow, fuentes, folio · deshabilitado |
| `--linea` | `#E8E8EC` | `--flx-l-line` | Hairlines, bordes de tarjetas |
| `--niebla` | `#F6F6F7` | `--flx-l-surface-1` | Bandas suaves (p. ej. franja Praxis), tarjeta "¿Tu industria?" |
| `--cobrar` / `--cobrar-t` | `#3CB8EB` / `#1E9FD6` | `--flx-cobrar` | Pilar Cobrar (texto sobre blanco usa `-t`) |
| `--azul` | `#408EC3` | — | Paso intermedio cian→violeta |
| `--conciliar` | `#AB4B96` | `--flx-conciliar` | Pilar Conciliar |
| `--pagar` / `--pagar-t` | `#F5B5D2` / `#C9679A` | `--flx-pagar` | Pilar Pagar (texto usa `-t`) |
| `--decidir` / `--e4` | `#4E154F` / `#87367A` | `--flx-decidir` | Pilar Decidir / paso 4 |

Clases de texto: `.c-cobrar .c-conciliar .c-pagar .c-decidir .c-azul`. Glows del DS (`--flx-glow-*`) solo como acento en negro.

## Tipografía (presentación, px a 1920×1080)

| Elemento | Estilo |
|---|---|
| Título de portada | 76 px · 200 · −0.025em · lh 1.06, última línea en color peso 300 |
| Frase en negro | 92–120 px · 200 · 2.ª línea `--cobrar` 300 |
| `.h1` (título de contenido) | 64 px (56 si largo) · 300 · −0.022em · `top:140` · palabra clave en `<em class="c-…">` peso 400 |
| `.eyebrow` | 15 px · 500 · +0.24em · MAYÚSCULAS · `--t3` · `left:120 top:92` |
| `.lead` | 26 px · 300 · lh 1.45 · `--t2` |
| `.small` | 19–22 px · 300 · `--t2` |
| Cifras (`.rs-n`, `.st-n`) | 96–110 px · 200 · −0.05em; unidad `<small>` 40 px |
| `.lbl` | 14 px · 500 · +0.22em MAYÚSCULAS |
| `.src` / `.num` | 14 px `--t3`, abajo a 52 px |
| Documentos (no decks) | Escala fija DS: 30 / 14 / 12 / 10 px (`--flx-doc-*`) |

Techo de peso 600 (DS). En decks se usan sobre todo 200 y 300 → aspecto ligero y editorial.

## Retícula

Escenario 1920×1080; margen 120 px a ambos lados (área útil 1680). Logo arriba a la derecha (`.logo`: right 120, top 84, ancho 150). Contenido entre `top:320` y `top:930`. Columnas con CSS grid: `.cols3` (gap 72), `.cols4` (gap 56), `.sg` 3×2 (gap 28). Bloque mitad/mitad: texto `left:120 width≈760`, gráfico/pilares desde `left:1040`.

## Componentes (clases listas en `templates/`)

| Clase | Qué es |
|---|---|
| `.chip` | Etiqueta flotante blanca 62 px alto, radio 12, sombra suave, ícono 28 px + texto 21 px; se coloca sobre las líneas |
| `.col` (+`.col-t`) | Columna con regla tinta arriba, ícono 48 px, título 32 px, texto 22 px |
| `.rs` (+`.rs-n`) | Cifra grande + explicación + fuente |
| `.pil-r` (+`.pil-t`) | Fila de pilar: glifo 52 px + nombre 34 px en color + texto |
| `.step` (+`.st-n`, `.st-t`) | Paso numerado 01–04 con número 96 px en color de pilar |
| `.px-h/.px-r` | Tabla comparativa México/Colombia (encabezados cian/violeta) |
| `.cp-h/.cp-r` (+`.cp-f`) | Tabla competitiva; columna fluXOne resaltada en Decidir con fondo 5 % |
| `.sg-c` (+`.sg-x`) | Tarjeta de segmento; la última punteada "¿Tu industria?" |
| `.cb` | Paso 1-2-3 con número en círculo |
| `.panel` + `.mv` + `.st` | Panel de movimientos con estado "Conciliado" |
| `.hub` + `.hub-r` | Caja fluXOne con los 4 pilares (punto de color) en diagramas |
| `.tr` | Columna de confianza (ISO 27001, PCI DSS…) |
| `.ico` + `data-i` | Ícono lineal 1.5 px dibujado por JS (ver lista en animacion.md) |
| `svg.lines` + `data-lines` | Haces de líneas ortogonales con puntos de luz |
| `.render` (+`.float`) | Render 3D posicionado (ver imagenes.md) |

## Prohibido

Rellenos sólidos grandes de color, gradientes de fondo, glassmorphism estructural, pesos 700+, sombras duras, bordes de color a la izquierda, emojis en titulares, mezclar países, íconos rellenos.
