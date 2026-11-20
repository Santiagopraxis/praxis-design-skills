# Flux One — Design System

> **¿Y si todo fuera más fácil?** Pagar, Cobrar, Conciliar y Decidir.
> **Flux One. Fluye a tu manera.**

Flux One es una plataforma fintech **B2B2C (IaaS / API gateway)** que centraliza el ciclo completo del dinero para empresas en Colombia (Bre-B, PSE) y México (SPEI, CoDi). Este sistema fue **reconstruido desde cero** (v2) sobre una dirección clara/oscura, paleta de 4 pilares, y un lenguaje de diagramas de arquitectura "Stroke & Glow".

---

## Los 4 pilares (nunca reordenar, nunca fusionar colores)

| Pilar | Color | Uso |
|---|---|---|
| **Cobrar** | Cian `#3CB8EB` | Recaudo, entrada de dinero |
| **Conciliar** | Violeta `#AB4B96` | Matching, ledger, back-office |
| **Pagar** | Rosa `#F5B5D2` | Dispersión, salida de dinero |
| **Decidir** | Morado profundo `#4E154F` | Analítica, reglas, automatización |

Cada pilar es un módulo real del producto — el color identifica la función, no es decorativo. Un diagrama de "Cobrar" nunca usa rosa; un botón de "Pagar" nunca usa cian.

---

## Voz y tono

**Slogan de campaña:** "¿Y si todo fuera más fácil? Pagar, Cobrar, Conciliar y Decidir."
**Firma de marca:** "Flux One. Fluye a tu manera."

- Nunca insinuar que el cliente lo hacía mal. Encuadre: *el mundo transaccional cambió, y ahora hay algo a tu ritmo.*
- Registro coloquial LATAM: "por fin", "sin vueltas", "de una".
- **Prohibido:** democratizar, disruptivo, sin fricción, seamless.
- Sin exclamaciones forzadas ni superlativos vacíos.

## Regla bi-país — NUNCA mezclar en un mismo componente

- **Colombia:** Recaudo · Bre-B · PSE · Nequi
- **México:** Cobranza · SPEI · CLABE · CoDi

Un mismo componente (card, tabla, badge) se etiqueta para un solo país. Si hay que mostrar ambos, se separan en secciones/columnas claramente rotuladas — nunca una lista mezclando "Recaudo" y "Cobranza".

---

## Escala tipográfica de documentos (propuestas, decks, PDFs, reportes)

Regla fija para cualquier pieza tipo documento (propuesta comercial, deck, PDF, reporte con texto corrido) — **nunca reducir estos tamaños aunque haya que meter mucho contenido**; si sobra texto se ajusta el layout (más páginas, columnas), no la fuente:

| Uso | Tamaño |
|---|---|
| Título (sección/portada) | 30px |
| Subtítulo | 14px |
| Texto largo / cuerpo | 12px (tope) |
| Texto largo denso (mucho texto en poco espacio) | 10px |

En `colors_and_type.css` estos valores ya están como tokens listos: `--flx-doc-title`, `--flx-doc-subtitle`, `--flx-doc-body`, `--flx-doc-body-dense`. Los templates `propuesta-comercial-co/mx` ya los usan en sus clases `.pc-h2/.pc-h3/.pc-p/.pc-note` — copiarlos como base en vez de escribir tamaños de fuente a mano.

Esta escala es solo para documentos; piezas de marketing (quote cards, banners) siguen con tamaños fluidos (`clamp()`) porque su formato es de imagen fija, no de texto que se lee de corrido.

## Reglas visuales no negociables

1. **Tipografía:** Plus Jakarta Sans, peso máximo 600 (nunca bold pesado/700+).
2. **Fondos:** negro puro `#000000` o blanco puro `#FFFFFF`. Cero grises "casi negros/blancos" como base, cero gradientes en fills.
3. **Glassmorphism:** solo acento decorativo (bordes de vidrio, blur puntual) — nunca como fondo estructural de una sección completa.
4. **Stroke & Glow:** el color vive en líneas finas (1px) y resplandores (`box-shadow` glow), no en rellenos sólidos grandes.
5. **Iconografía:** compatible con Lucide Icons, 1.5–1.75px stroke, sin relleno.

---

## Índice

```
README.md                      ← este archivo
SKILL.md
colors_and_type.css             ← tokens: paleta 4 pilares, tipografía, stroke & glow
assets/
  logo-fluxone-blanco.png       ← lockup completo, para fondo oscuro
  logo-fluxone-negro.png        ← lockup completo, para fondo claro
  xo-icon.png                   ← isotipo "X" dentro de círculo, a color
  brand-flow-lines.png          ← líneas de flujo cian→violeta→rosa (accent gráfico)
  render-01…09*.png             ← renders 3D de marca (vidrio/cinta cian-violeta)
  competitor-ref-deck.pdf        ← referencia de competencia (solo inspiración de layout)
fonts/                          ← Plus Jakarta Sans (variable + estáticas)
preview/                        ← specimens light + dark
uploads/                        ← originales, no editar
```

## Uso del isotipo (XO)

El isotipo (la "X" sola) es **solo para casos muy específicos**: dentro de un círculo en diagramas de arquitectura, o para firmar/sellar un elemento pequeño donde el lockup completo no cabe o se ve mal. Nunca reemplaza el lockup completo en headers, portadas o firmas de documento.

## Diagramas de arquitectura — sistema "Stroke & Glow"

Todo diagrama de arquitectura (cómo fluye el dinero, cómo se conecta la API, etc.) se construye con 3 piezas reutilizables:

- **Caja de nodo** — rectángulo `border-radius: var(--flx-r-md)`, borde 1px del color de su capa/pilar, fondo transparente o `surface-1/2`, texto en weight 500-600.
- **Conector / flecha** — línea 1–1.5px del color de origen o neutro, terminando en punta de flecha simple (SVG marker), con opción de glow sutil si representa un flujo "vivo".
- **Grupo / contenedor** — caja punteada o de borde muy sutil (`--flx-line`) que agrupa nodos relacionados, con una etiqueta eyebrow arriba a la izquierda.

Reglas: nunca rellenar una caja a color sólido (solo contorno + 8-14% tint de fondo si hace falta separar visualmente); usar el color del pilar correspondiente para diferenciar capas (ingesta=Cobrar, procesamiento=Conciliar, salida=Pagar, reglas/analítica=Decidir); funciona igual en negro puro y blanco puro (mismo contorno, glow más visible en negro).

## Sustituciones / flags

- **Iconografía:** Lucide (CDN), sin set propio provisto salvo el isotipo XO.
- **Plantilla Word:** el usuario tiene una plantilla en PDF (hecha en Illustrator) pendiente de convertir — ver `assets/competitor-ref-deck.pdf` como referencia de layout mientras tanto.
