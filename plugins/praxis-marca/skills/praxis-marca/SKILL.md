---
name: praxis-marca
description: Viste cualquier pieza con la marca de Global Transactions / Karpay, fluXOne o Praxis — presentaciones (animadas en HTML o editables en PowerPoint/Google Slides), propuestas, one-pagers, cartas, diagramas de flujo, informes de estado, actas y posts para redes — y la entrega en HTML, PDF o PNG. Úsala siempre que alguien pida algo "de Karpay", "de Global Transactions", "de GT", "de fluXOne" o "de Praxis" (incluidas propuestas de staffing, AMS o consultoría de Praxis).
---

# Praxis · marca para cualquier pieza

Claude hace todo: escribe, arma sobre la plantilla, revisa y entrega HTML + PDF. El usuario solo da el contenido.

## 1. Elige marca y pieza (sin leer nada más todavía)

| Si piden… | Marca → carpeta |
|---|---|
| Global Transactions, GT, Karpay, Instapay, Bre-B para bancos, rieles (FedNow, SPEI, Pix, SEPA) | `global-transactions/` (`--marca gt`) |
| fluXOne, cobrar/pagar/conciliar/decidir, recaudo para empresas, NexaPay | `fluxone/` (`--marca fluxone`) |
| Praxis como empresa: staffing, AMS, consultoría, propuestas corporativas, "sobre Praxis" | `praxis/` (`--marca praxis`) |

| Pieza | Plantilla (en la carpeta de la marca) | Guía que debes leer (solo esa) |
|---|---|---|
| Presentación **animada** (HTML) | `templates/presentacion-animada.html` | `nucleo/presentaciones-animadas.md` |
| Presentación **editable** (PowerPoint / Google Slides) | skill `pptx` o conector de Google Slides | `nucleo/presentaciones-editables.md` |
| Propuesta, documento largo | `templates/documento.html` | `references/documentos.md` |
| One-pager, ficha de producto | `templates/one-pager.html` | `references/documentos.md` |
| Carta, memo | `templates/carta.html` | `references/documentos.md` |
| Diagrama de flujo / proceso | `templates/flujo.html` | `nucleo/piezas-dia-a-dia.md` |
| Informe de estado / acta de reunión | `templates/informe-acta.html` | `nucleo/piezas-dia-a-dia.md` |
| Post o banner para redes | `templates/post-cuadrado.html` (1080×1080) · `post-vertical.html` (1080×1350) | `nucleo/piezas-dia-a-dia.md` |

### Presentaciones: pregunta siempre antes

Antes de hacer cualquier presentación pregunta en una línea (con AskUserQuestion si está disponible):
**¿La quieres animada (HTML que se presenta en el navegador; no se puede editar en PowerPoint) o editable (PowerPoint o Google Slides)?**
- Animada → plantilla `presentacion-animada.html` de la marca (GT = estilo Redeban, fluXOne = presentación general, Praxis = editorial). Entrega HTML + PDF.
- Editable → .pptx con la skill `pptx`, o Google Slides si el conector está conectado, con la identidad de `nucleo/presentaciones-editables.md`.
- `guia-presentaciones.md` (GT, fluXOne) es el método anterior de deck HTML por layouts; úsalo solo si piden un deck HTML a la medida que no encaje en la plantilla animada.

Si no sabes la marca o la pieza, pregunta **una sola vez** y en una línea. Si piden algo fuera de la tabla (invitación, firma de correo), usa la pieza más cercana y avisa en una línea.

## 2. Brief en una ronda

Cliente, objetivo, a quién va, país, datos con fuente, fecha. **No inventes cifras, precios ni nombres**: usa los del usuario o los "datos reutilizables" de la guía de la marca, y marca lo pendiente.

## 3. Construye barato

- Copia la plantilla a la carpeta de trabajo y **edita solo textos y datos**. No reescribas CSS ni cambies la estructura salvo que algo no quepa.
- Lee solo la guía de la fila elegida. No abras `assets/design-system/`, `referencia/` ni los ejemplos salvo que el usuario pida algo que la guía no cubra.
- Si no cabe, agrega una página; nunca reduzcas la letra.

## 4. Arma, revisa y entrega

```bash
python3 <esta-skill>/scripts/armar.py pieza.html --marca gt|fluxone|praxis --salida <carpeta>
```
Genera el HTML único (offline), el PDF y `pieza_revision.png`. Con `--png` además saca un PNG por página (úsalo en posts). Si la pieza es una presentación animada, el PDF sale de capturas de cada paso (todas las páginas en miniatura). **Mira solo esa imagen** para revisar: textos que se salen, choques con imágenes, páginas medio vacías, logos que faltan, `{{…}}`. Corrige y vuelve a correr. En presentaciones, el detalle de revisión está en `guia-presentaciones.md`.

Entrega el PDF (el HTML si es presentación animada, los PNG si son posts) como archivos descargables. Nombre: `<Marca>_<Cliente>_<pieza>.pdf`.

## Reglas comunes

- **Jerarquía:** Praxis es la empresa madre. Global Transactions es un producto de Praxis y Karpay es un servicio de Global Transactions; en documentos GT van los 3 logos. En fluXOne van solo los logos (sin etiquetas de jerarquía) y Praxis como "by Praxis".
- Escritura: "fluXOne", "Global Transactions", "Karpay", "Karpay Instapay", "Bre-B".
- No mezclar marcas en una pieza (los colores de una no van en la otra). En GT no usar rosados ni lilas; en fluXOne el rosa es solo del pilar Pagar.
- Si la pieza es de muestra o borrador, decirlo en la portada.
