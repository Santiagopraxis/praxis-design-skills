# Recursos incluidos

Rutas relativas a la carpeta de la skill (úsalas tal cual en el HTML: `assets/...`).

## Logos — `assets/logos/`
| Archivo | Fondo | Uso |
|---|---|---|
| `global-transactions-color.png` | papel | Portada (250×65), pies (170×44), cierre (220×57) |
| `global-transactions-blanco.png` | morado | Divisores, spreads morados |
| `karpay-color.svg` | papel | "Powered by", pies de producto, cierre |
| `karpay-blanco.svg` | morado | Página morada de L7 |
| `karpay-instapay-blanco.png` | oscuro | Lockup Instapay sobre morado |
| `karpay-k.png` | cualquiera | Solo la "K", uso excepcional (favicon, sello) |
| `praxis-endoso.png` | papel | Solo diapositiva "Quiénes somos" |

## Rieles — `assets/rieles/`
`fednow`, `spei`, `breb`, `pix`, `sepa`, `swift`, `upi` en dos versiones: `-tinta.svg` (sobre papel) y `-blanco.svg` (sobre morado). Altura recomendada 40 px en tablas, 56–72 px en "roll-call" de logos.

## Íconos — `assets/iconos/` (set lineal del Karpay DS)
`api`, `base-de-datos`, `mundo-divisas`, `persona-banco`, `sitio`, `transferencia` × `-gray` (papel) / `-white` (morado). Tamaño 80 px dentro de disco 140 px. No recolorear con filtros.

## Ilustraciones — `assets/ilustraciones/` y generadores
| Recurso | Cómo se usa |
|---|---|
| Anillos Praxis | Generador `<svg data-rings>` (ver animacion.md). Firma de Praxis, 1 por diapositiva |
| Ciudad / skyline lineal | Generador `<svg data-skyline viewBox="0 0 816 320">` al pie de la página morada (L1). Alternativa estática: `ciudad-praxis-blanco.png` |
| Globo / mapa lineal con rutas | Generador `<svg data-globe>` (contorno en `templates/land.js`). Estático: `mapa-mundo-lineal.svg` |
| `fondo-degradado-oscuro.png` | Fondo excepcional para una diapositiva de impacto; nunca bajo texto largo |

## Design System completo — `assets/design-system/`
`readme.md` (fundamentos y advertencias), `tokens/` (colors, typography, spacing), `components/` (Badge, Card/StatCard, Callout, SectionHeader, Table, Timeline — JSX + tarjeta HTML de muestra), `guidelines/` (manuales de marca, color, tipografía, iconografía), `slides/` (plantillas del DS original). Nota: el DS original usa Ubuntu/Source Sans para documentos; **en presentaciones manda Helvetica** (decisión editorial aprobada).

## Fotos / capturas del cliente
Si el usuario aporta capturas o videos, guárdalos junto al deck (p. ej. `media/`) y referéncialos con ruta relativa; el empaquetador los embebe. Comprime: PNG/JPG ≤ 1 MB, MP4 ≤ 3 MB.
