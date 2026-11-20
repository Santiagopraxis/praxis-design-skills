# Documentos · Praxis › Global Transactions › Karpay

Para todo lo que NO es una presentación: propuestas técnicas y comerciales, informes de estado, one-pagers, cartas, memos, actas y fichas de producto. Hoja **carta 8.5×11 in (816×1056 px)**.

**Los documentos NO son el deck impreso.** Tienen su propia dirección editorial (informe anual / revista de negocios): tipografía grande y ligera, columna de notas al margen, aperturas de sección con número gigante, citas destacadas, figuras numeradas con pie. No uses anillos Praxis, skyline ni el spread papel/morado de los decks.

Ejemplo terminado: `ejemplos/GT_BancoAndino_PropuestaTecnica.pdf`. Plantilla: `templates/documento.html` + `templates/documento.css`.

## Jerarquía de marca en documentos (obligatoria, los 3 logos)

| Nivel | Marca | Dónde |
|---|---|---|
| Marca madre | **Praxis** | Arriba-izquierda en portada y contraportada; encabezado de todas las páginas internas |
| Producto de Praxis | **Global Transactions** | Escalera de marca, nombre del documento en el encabezado, pie de página, firma de la carta |
| Servicio de Global Transactions | **Karpay** (Karpay Instapay) | Escalera de marca y pie de página, siempre después de GT |

La **escalera de marca** (`.ladder`) muestra las tres en orden con sus etiquetas "Una empresa de · Producto · Servicio". Va en la banda inferior de la portada y en la contraportada. Logos: `praxis-color.png` / `praxis-blanco.png`, `global-transactions-color.png` / `-blanco.png`, `karpay-color.svg` / `karpay-blanco.svg`. Sobre morado, siempre blancos.

## Retícula

Margen 64 · columna de margen 148 (x = 64) · medianil 28 · columna principal 512 (x = 240). Clases: `.side` (notas, cifras, rótulos), `.main` (texto), `.full` (figuras y tablas a todo el ancho). Posiciona por `top` en px y deja 96 px libres arriba (encabezado) y abajo (pie).

## Tipos de página (en la plantilla)

| Código | Página | Elementos |
|---|---|---|
| E1 | Portada | Imagen oficial `portada-mapa-divisas.jpg` a sangre con degradado morado a la izquierda, Praxis arriba, "Preparado para {Cliente}" en teal, título `.title.xl` (ligero + remate en negrita), bajada, banda blanca con escalera de marca |
| E2 | Sumario + carta | Sumario con números grandes (`.toc`), carta de presentación firmada |
| E3 | Apertura de sección | Rótulo + `.secnum` en el margen, título y bajada en la columna principal; cifras apiladas en el margen; texto con capitular (`.dropcap`); cita de decisión (`.pull`) |
| E4 | Contenido con figura | Tres columnas de rótulo + texto, figura en `.panel` con `.route` (flujo) y pie `.cap` "Figura N", nota al margen + cita |
| E5 | Arquitectura | `.panel.layers` (capas con chips; la capa Karpay en morado) + tabla de rieles con logos |
| E6 | Plan | `.gantt` por semanas + tabla de entregables + gobierno |
| E7 | Alcance y riesgos | Dos listas `ol.num` (incluido / no incluido), supuestos `ul.dash`, tabla de riesgos con `.tag` |
| E8 | Contraportada | Imagen a 600 px de alto con el título "Próximos pasos" sobre la zona oscura izquierda (nunca dejar esa zona vacía), pasos con fecha, escalera de marca en blanco, "Preparado para {Cliente}" |

Encabezado interno `.hd` (Praxis + "Global Transactions · Tipo") y pie `.ft` (folio grande, nombre del documento, GT + Karpay).

## Recetas

| Documento | Páginas |
|---|---|
| Propuesta técnica | E1 · E2 · E3 · E4 · E5 · E6 · E7 · E8 |
| Propuesta comercial | E1 · E2 · E3 · E4 · página de inversión (`table.t` con cifras del usuario, columna `.r .big`) · E7 · E8 |
| Informe de estado | E1 · E3 (cifras = avance) · E6 (estados reales con `.tag`) · E7 (solo riesgos) · E8 |
| One-pager / ficha | 1 página: Praxis arriba, título `.title`, 3 columnas rótulo + texto, figura o tabla, escalera de marca al pie |
| Carta / memo | `.hd` + destinatario, fecha, asunto, cuerpo `.txt` (máx. 1 página), firma con logo GT; sin portada |
| Acta | `.hd` + asistentes (`table.t`), decisiones (`ol.num`), compromisos (`table.t` con responsable y fecha) |

## Flujo

1. Brief en una sola ronda (tipo, cliente, objetivo, destinatario, datos con fuente, fecha/versión). No inventes cifras ni precios.
2. Decide las páginas con la receta. Una idea por página; si no cabe, otra página — nunca bajes la letra.
3. Copia `templates/documento.html`, conserva `<head>`, reemplaza las `<section class="pg">`.
4. `python3 scripts/empaquetar.py doc.html "GT_<Cliente>_<tipo>.html" --root <skill>`
5. `python3 scripts/exportar.py "GT_<Cliente>_<tipo>.html" --pdf "GT_<Cliente>_<tipo>.pdf"`
6. Revisa cada página (`pdftoppm -r 70 -png doc.pdf p`): nada encima del encabezado/pie, el título de portada no choca con el mapa, ninguna página con más de ~1/4 vacío, los 3 logos presentes, sin `{{…}}`.
7. Entrega PDF + HTML. Si piden Word, usa la skill docx respetando estos colores, la jerarquía de marca y el orden de secciones.

## Reglas

- Tipografía `'Helvetica Neue','Inter GT',Helvetica,Arial` (Inter embebida). Contraste: títulos 300 con remate 700. Cuerpo 11.5 px; nada por debajo de 8.5 px.
- Color: papel `#fbfbfc`, tinta `#1c1626`, morado `#5c2d91` / `#241542`, lavanda `#f6f2fb` para paneles, teal solo para positivo y "Preparado para". Rojo/ámbar solo dentro de `.tag`.
- Los números de sección y las cifras van en peso ligero y morado; las tablas con regla negra arriba y hairlines.
- Figuras siempre con pie "Figura N"; cifras siempre con fuente en `.note`.
- Si es muestra o borrador, dilo en la portada.
- **Sin rosados ni lilas.** Nada de lavanda (`#efe9f7`, `#d8cbef`) en fondos, barras o etiquetas: se ven rosados al imprimir. Paneles en gris frío `#f2f3f6`; estados con `.tag` de contorno (sin fondo de color); texto secundario sobre morado en `#cbc3dc`.
- **Imágenes JPG limpias.** Algunos JPG exportados desde Adobe traen un marcador de color que ciertos visores de PDF leen mal (la imagen sale rosada/magenta). Antes de usar un JPG nuevo, re-guárdalo: `python3 -c "from PIL import Image; Image.open('f.jpg').convert('RGB').save('f.jpg', quality=90)"`.
