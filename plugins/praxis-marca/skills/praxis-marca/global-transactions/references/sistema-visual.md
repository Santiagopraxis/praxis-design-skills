# Sistema visual · Global Transactions / Karpay

Fuente: Karpay Design System (`assets/design-system/tokens/colors.css`) + dirección editorial aprobada en los decks FedNow v27 y Redeban (**Magazine Spread + Swiss Ledger**, en Helvetica).

## Color (tokens CSS de la plantilla)

| Token | Hex | Uso |
|---|---|---|
| `--p950` | `#241542` | Página morada (spreads, divisores, cierre), fondo `.slide.dark` |
| `--p800` / `--p900` | `#3d2472` / `#2e1c58` | Variaciones de superficie oscura (rara vez) |
| `--p600` | `#5c2d91` | Acento principal: kicker de portada, 2ª línea de título, cifra destacada |
| `--p400` | `#8b6bc0` | Anillos Praxis y contorno de mapa sobre morado |
| `--p200` | `#d8cbef` | Skyline sobre morado, acento de texto en fondo oscuro, anillos suaves en papel |
| `--p100` | `#efe9f7` | Lavado suave (paneles) |
| `--teal` / `--teal7` | `#3dbfa0` / `#157a68` | Positivo, punto central de anillos, rutas y pulsos; `teal7` para texto sobre papel |
| `--paper` | `#f8f9fb` | Página blanca (fondo por defecto) |
| `--ink` | `#1c1626` | Texto principal, reglas fuertes |
| `--ink7` / `--ink5` / `--ink3` | `#3e3849` / `#6c6677` / `#aca8b3` | Cuerpo / kicker-folio-fuente / deshabilitado |
| `--rule` | `#dfe2e7` | Hairlines |
| `--inv` / `--invm` | `#f6f6f9` / `#cbc3dc` | Texto sobre morado / secundario sobre morado |
| Flama | `#fb8a2e → #d62839` | **Solo** dentro del logo Karpay. Nunca como fondo ni acento |
| Azul wordmark | `#3967b4 → #1b2d75` | **Solo** dentro del logo Karpay |

Proporción: ~70 % papel, ~25 % morado, ≤ 5 % acentos (teal / p600).

## Tipografía (Helvetica Neue → Helvetica → Arial)

| Clase | Tamaño / peso / tracking | Uso |
|---|---|---|
| `.display` | 136–150 px · 700 · −6 px · lh 1 | Título de portada y "Gracias." |
| `.h1` | 88–120 px · 700 · −0.04em | Divisores y manifiestos |
| `.h2` | 56 px · 700 · −2 px | Título de diapositiva de contenido (2 líneas máx.) |
| `.lead` | 40–52 px · 300 · −1 px | Antetítulo, bajadas, promesa |
| `.body` | 28 px · 400 · lh 1.35 | Texto de lectura |
| `.small` | 22 px | Fuentes, notas (nunca < 18 px) |
| `.kicker` | 22 px · 700 · +3 px · MAYÚSCULAS | Sección arriba-izquierda |
| `.folio` | 22 px · +2 px | "03 / 12" arriba-derecha |
| `.num` | 240 px · 700 · −12 px; sufijo `<small>` 300 | Cifra héroe |

Contraste de pesos: titulares 700 contra bajadas 300. La 2.ª línea del título va en `.accent` (morado) o la palabra clave en `.ok` (teal oscuro).

## Retícula 12 columnas (1920×1080)

Margen 96 px · columna 122 px · medianil 24 px → `x(c) = 96 + c·146`, `ancho(n) = n·146 − 24`.

| Columnas | x inicio | Ancho |
|---|---|---|
| 1 | 96 | 122 |
| 3 | — | 414 |
| 4 | 96 / 680 / 1264 | 560 |
| 6 | 96 / 972 | 852 |
| 7 (spread) | 96 | 998 |
| 8 | 826 (si empieza en col 5) | 1144 |
| 12 | 96 | 1728 |

Bandas verticales fijas: kicker/folio `top:56`, regla `top:100`, título `top:150`, pie: regla `top:960` + logo GT `top:986` (170×44).

## Componentes (HTML de la plantilla)

- **Regla**: `<div class="rule" style="left;top;width">` (1 px `--rule`); `.rule.strong` 2 px tinta, sobre títulos y tablas.
- **Ledger** (tabla Swiss): `.ledger` con filas `.r` en grid `--cols`; `.r.hi` resalta UNA fila en morado. Columnas típicas: logo · descripción · cifra (`.fig`, alineada a la derecha).
- **Nodo de proceso**: disco 140 px (papel con borde `--rule`, o morado lleno para el paso protagonista) + ícono 80 px centrado + título 34 px MAYÚSCULAS + texto 28 px centrado.
- **Panel morado**: `div` absoluto con `background:var(--p950)` ocupando una "página" del spread (816–960 px de ancho o 4 columnas).
- **Lockup de pie**: GT color (170×44) + Karpay color (190×36) a 40 px; en fondo morado usar versiones blancas.
- **Cliente**: `.client-slot` (texto 30 px 700) o `<img>` del logo del cliente máx. 238×57.
- **Componentes React del DS** (`assets/design-system/components/`: Badge, Card/StatCard, Callout, SectionHeader, Timeline, Table) sirven de referencia de estilo para documentos; en los decks se usan las versiones HTML de arriba.

## Prohibido

Sombras pesadas, bordes de color a la izquierda en tarjetas, píldoras en todo, degradados en fondos (excepto `fondo-degradado-oscuro.png` en casos puntuales), emojis, más de 2 pesos por diapositiva, tipografías web externas.
