# Imágenes: cómo se usan (igual que en los decks aprobados)

Todas fueron extraídas de los 3 decks originales (`referencia/decks-originales/`) o del design system. Usa la ruta tal cual; posiciones en px sobre el escenario 1920×1080. **No recortes, recolorees ni cambies proporciones**: los renders se escalan solo por `height` o `width` y pueden salirse del borde (es intencional).

## Logos — `assets/logos/`

| Archivo | Uso en los decks |
|---|---|
| `fluxone-negro.png` | Diapositivas blancas: `class="logo"` arriba a la derecha (150 px de ancho, right 120, top 84). En portada, en el lockup `Praxis | fluXOne` a 46 px de alto. En "Qué es", grande a la izquierda (`left:120 top:150 width:520`). Dentro del `.hub` a 200 px. |
| `fluxone-blanco.png` | Diapositivas negras: `class="logo"` con `style="left:120px;right:auto"` (arriba a la izquierda) o en cierre/bienvenida a 46 px de alto. |
| `praxis.webp` | Lockup de portada: Praxis 68 px alto + separador vertical 1×52 px `--linea` + fluXOne 46 px (gap 28). En "Confianza": dentro de franja `--niebla` (radio 18, alto 150) a 70 px. Nunca solo, nunca mayor que fluXOne. |
| `nexapay.png` | Solo en diapositivas de NexaPay (`left:120 top:96 height:62`; 52 en la 2.ª). |
| `logo-negro.svg`, `logo-blanco.svg`, `logo-x.svg`, `xo-negro.svg`, `xo-blanco.svg`, `xo-color.png` | Vectoriales del DS. El isotipo XO solo dentro de círculos en diagramas o sellos pequeños, nunca en portada ni en lugar del lockup. |

## Renders 3D — `assets/renders/` (vidrio/cinta cian-violeta, fondo transparente)

| Archivo | Dónde y cómo |
|---|---|
| `barras-cian.webp` | **Portada** (presentación general y rueda de prensa): `class="render float"`, `right:0; bottom:-40px; height:560px`. Se sale por abajo; flota (9 s). Debajo pasan las líneas `portada` y los 3 chips. |
| `barras-cian-alto.webp` | Diapositiva de **cifra gigante** (rueda de prensa, cifra 300 px peso 200 a la izquierda): `class="render"`, `right:0; bottom:-20px; height:470px; opacity:.95`. Sin flotar. |
| `barras-ascendentes.webp` | Crecimiento / white label: `class="abs rise"` con `--d:.4s; right:-30px; bottom:-60px; height:600px` (white label) o `render float` `height:640px` (rueda de prensa, con chips encima a la izquierda). Sale por la esquina inferior derecha. |
| `capas-vidrio.webp` | "Capas"/plataforma (white label: lo que se licencia): `class="abs rise"` `--d:.3s; right:110px; top:190px; width:560px`; en rueda de prensa `render float` `left:1180px; top:330px; width:620px` con chips alrededor. |
| `cinta-ondulada.webp` | Diapositiva **WhatsApp/NexaPay** (fondo `#F1F3F2`): `class="abs wa-mark float"`, `left:-40px; top:560px; height:600px` — entra por el borde izquierdo inferior, detrás del texto. |
| `ds-pila-cian*.webp`, `ds-cubo-vidrio.webp`, `ds-pila-vidrio.webp` | Renders del DS (no usados en los 3 decks): alternativas para portadas o divisores con el mismo tratamiento (`render float`, sangrando por un borde, máx. 1 por diapositiva). |

Regla: máximo **un render por diapositiva**, siempre sangrando por un borde (derecha/abajo o izquierda/abajo), nunca centrado ni detrás de texto de lectura.

## Medios de pago — `assets/medios-pago/` (logos a color, fondo transparente)

Usados en la diapositiva "Canales/medios de pago" del deck White Label (grilla `.pmr` / `.pm`, tarjetas blancas con borde `--linea`, logo centrado con `max-height≈56px`). Agrupados por país, nunca mezclados:
- **México**: `spei`, `codi`, `oxxo-pay`, `dimo`.
- **Colombia**: (Bre-B en texto) `pse`, `nequi`, `paga-con-bancolombia`, `daviplata`, `efecty`, `red-aval`.
- **En los dos países**: `visa`, `mastercard`, `amex`, `diners`, `apple-pay`, `google-pay`, `samsung-pay`.
Respeta colores originales; no los pongas sobre negro sin tarjeta blanca.

## NexaPay — `assets/nexapay/` (capturas de la app, 788 px de ancho)

`01-mis-cuentas` (larga, se desplaza), `02-gastos`, `03-presupuestos`, `04-centro-de-pagos`, `05-facturas-seleccionadas`, `06-resumen-de-pago`, `07-pago-exitoso`, `barra-navegacion` (se superpone abajo). Van dentro del marco de teléfono `.ap-phone` (420×900, radio 64, bisel `#081A1C` 13 px) con el recorrido animado del deck "Presentación general" (diapositiva NexaPay). `avatar-whatsapp.svg`: avatar del chat en la demo de WhatsApp. `white-label-app-larga.webp`: captura completa de la app con la marca del banco (deck White Label, sección "Tu Banco"). Para reutilizar estas demos, copia la sección completa desde el deck original.

## Fondos, campaña, íconos, banderas

- `fondos/lineas-de-flujo.png`: acento gráfico cian→violeta→rosa del DS (bandas, separadores). Los `fondos/*.webp` (vidrio, aspas, barras) son del DS para piezas de campaña o una diapositiva de impacto en negro; nunca bajo texto largo.
- `campana/{cobrar,pagar,conciliar,decidir}.webp`: tarjetas de la campaña por pilar (4:5); úsalas en grilla de 4 con su pilar, `border-radius:20px`. `billboard.webp`: referencia de campaña.
- `iconos/Lu*.png`: íconos Lucide del DS (para documentos). En decks se prefieren los íconos SVG de `runtime.js` (`data-i`), que se dibujan solos.
- `banderas/mx.png`, `co.png`: rótulos de país (24–32 px) en encabezados de columnas MX/CO.
