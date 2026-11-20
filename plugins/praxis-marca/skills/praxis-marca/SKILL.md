---
name: praxis-marca
description: Viste cualquier pieza con la marca de Global Transactions / Karpay o de fluXOne (empresas de Praxis) — presentaciones animadas, propuestas técnicas o comerciales, informes, one-pagers, fichas de producto, cartas, memos y actas — y la entrega en HTML y PDF. Úsala siempre que alguien pida algo "de Karpay", "de Global Transactions", "de GT", "de fluXOne" o "de Praxis" (incluidas propuestas de staffing, AMS o consultoría de Praxis).
---

# Praxis · marca para cualquier pieza

Claude hace todo: escribe, arma sobre la plantilla, revisa y entrega HTML + PDF. El usuario solo da el contenido.

## 1. Elige marca y pieza (sin leer nada más todavía)

| Si piden… | Marca → carpeta |
|---|---|
| Global Transactions, GT, Karpay, Instapay, Bre-B para bancos, rieles (FedNow, SPEI, Pix, SEPA) | `global-transactions/` (`--marca gt`) |
| fluXOne, cobrar/pagar/conciliar/decidir, recaudo para empresas, NexaPay | `fluxone/` (`--marca fluxone`) |
| Praxis como empresa: staffing, AMS, consultoría, propuestas corporativas, "sobre Praxis" | `praxis/` (`--marca praxis`) — por ahora solo documentos |

| Pieza | Plantilla (en la carpeta de la marca) | Guía que debes leer (solo esa) |
|---|---|---|
| Presentación / deck / slides | `templates/plantilla.html` | `guia-presentaciones.md` |
| Propuesta, informe, documento largo | `templates/documento.html` (GT: editorial · fluXOne: template aprobado del DS) | `references/documentos.md` |
| One-pager, ficha de producto, hoja de venta | `templates/one-pager.html` | `references/documentos.md` |
| Carta, memo, correo formal en PDF, acta | `templates/carta.html` | `references/documentos.md` |

Si no sabes la marca o la pieza, pregunta **una sola vez** y en una línea. Si piden algo fuera de la tabla (post para redes, banner, invitación), usa la pieza más cercana (one-pager) y avisa en una línea.

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
Genera el HTML único (offline), el PDF y `pieza_revision.png` (todas las páginas en miniatura). **Mira solo esa imagen** para revisar: textos que se salen, choques con imágenes, páginas medio vacías, logos que faltan, `{{…}}`. Corrige y vuelve a correr. En presentaciones, el detalle de revisión está en `guia-presentaciones.md`.

Entrega el PDF (y el HTML si es un deck) como archivos descargables. Nombre: `<Marca>_<Cliente>_<pieza>.pdf`.

## Reglas comunes

- **Jerarquía:** Praxis es la empresa madre. Global Transactions es un producto de Praxis y Karpay es un servicio de Global Transactions; en documentos GT van los 3 logos. En fluXOne van solo los logos (sin etiquetas de jerarquía) y Praxis como "by Praxis".
- Escritura: "fluXOne", "Global Transactions", "Karpay", "Karpay Instapay", "Bre-B".
- No mezclar marcas en una pieza (los colores de una no van en la otra). En GT no usar rosados ni lilas; en fluXOne el rosa es solo del pilar Pagar.
- Si la pieza es de muestra o borrador, decirlo en la portada.
