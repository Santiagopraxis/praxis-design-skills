# Piezas del día a día (flujos, informe/acta, posts)

Todas usan `nucleo/piezas.css` + `templates/tema.css` de la marca, así que el mismo HTML cambia de marca con solo cambiar logos y textos.

## Flujo o proceso — `templates/flujo.html` (hoja horizontal)
- `.fases` (añade `xl` para iconos grandes) con `--n:` = número de pasos (hasta 7). `.fase.on` resalta el paso actual o el actor principal; `<span class="badge">` pone un hito ("1 mes", "Semanas 1–2").
- `.hub`: entradas → nodo central → salidas. Cada caja `<div class="it"><b></b><i></i>Texto</div>` (el `<b>` dibuja el corchete; no lo borres).
- `.lanes`: carriles por responsable con pasos numerados en columnas (`grid-column`).
- `.entrega` con `--n:`: fila al pie con entregables o notas por fase.
- Iconos: SVG de línea de 24×24 dentro de `.ico`.

## Informe de estado + acta — `templates/informe-acta.html` (carta)
- Informe: periodo, responsable, fase, próximo comité; semáforo `.sem.ok|.warn|.bad`; `.kpis`; avance por frente `.av` (ancho de la barra = %); tabla de riesgos; próxima semana.
- Acta: datos de la reunión, asistentes, temas, decisiones, compromisos con estado. Lleva el logo del cliente arriba a la derecha (pídelo; el de ejemplo es ficticio).

## Posts para redes — `post-cuadrado.html` (1080×1080) y `post-vertical.html` (1080×1350)
- Un `<section>` por post. Máximo 12 palabras de titular; una cifra o una pregunta por post.
- Exporta con `--png`: sale un PNG por post (`Archivo-1.png`, `Archivo-2.png`…). Entrega los PNG.
- GT: claro con panel morado y anillos, o fondo oscuro; Karpay como "Powered by". fluXOne: blanco o negro con la línea de flujo y los 4 pilares. Praxis: navy/naranja con ciudad y arcos.
