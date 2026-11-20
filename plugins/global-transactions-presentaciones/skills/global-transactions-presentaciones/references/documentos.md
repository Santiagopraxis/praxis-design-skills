# Documentos · Global Transactions / Karpay

Para todo lo que NO es una presentación: propuestas técnicas y comerciales, informes de estado, one-pagers, cartas, memos, actas y fichas de producto. Mismo ADN que los decks (Swiss Ledger + Magazine Spread, papel/morado, Helvetica), adaptado a hoja **carta 8.5×11 in (816×1056 px)**.

Ejemplo terminado: `ejemplos/GT_BancoAndino_PropuestaTecnica.pdf` (y `.html`). Plantilla: `templates/documento.html` + `templates/documento.css` + `templates/documento.js`.

## Flujo

1. **Brief** (una sola ronda): tipo de documento, cliente, objetivo, destinatario, idioma, datos con fuente, fecha/versión. No inventes cifras ni precios: si faltan, deja la sección con el dato pendiente marcado y avísalo.
2. **Índice**: decide las páginas (tabla abajo) y qué va en cada una. Una idea por página; si no cabe, crea otra página, **nunca** reduzcas la letra.
3. **Construcción**: copia `templates/documento.html` a la carpeta de trabajo, conserva `<head>` y el `<script>` final, y duplica/reemplaza las `<section class="pg">`. Usa solo las clases de `documento.css`.
4. **Empaquetar**: `python3 scripts/empaquetar.py doc.html "GT_<Cliente>_<tipo>.html" --root <skill>`.
5. **PDF**: `python3 scripts/exportar.py "GT_<Cliente>_<tipo>.html" --pdf "GT_<Cliente>_<tipo>.pdf"` (Chromium respeta `@page` carta).
6. **Verificar**: `pdftoppm -r 60 -png archivo.pdf p` y mira cada página: nada se sale del área (encabezado arriba, pie abajo), sin espacios muertos grandes al final de una página, logos visibles, sin `{{…}}`. Corrige y repite.
7. **Entregar**: PDF + HTML. Si piden Word, construye el .docx con la skill docx usando estos mismos colores, jerarquía y orden de secciones.

## Tipos de página (en `templates/documento.html`)

| Código | Página | Cuándo |
|---|---|---|
| D1 | Portada spread: papel + panel morado (anillos Praxis + skyline), GT arriba-izquierda, kicker "Tipo · Preparado para {Cliente}", título 2 líneas (2.ª en morado), promesa, versión/clasificación, "Powered by Karpay" | Toda propuesta o informe de más de 2 páginas |
| D2 | Contenido (ledger numerado) + resumen ejecutivo + 3 cifras clave + callout de decisión | Documentos de 4+ páginas |
| D3 | Sección con 3 tarjetas de ícono + flujo de 4 pasos + cita | Solución, oferta, cómo funciona |
| D4 | Diagrama de arquitectura (canales → núcleo morado → rieles) + ledger de rieles con logos | Técnica, arquitectura, cobertura |
| D5 | Cronograma (barra + fases con píldora de estado) + tabla de entregables + gobierno | Plan, implementación, estado de proyecto |
| D6 | Tabla dentro/fuera de alcance + supuestos + responsabilidades + riesgos | Alcance, condiciones, riesgos |
| D7 | Cierre morado: próximos pasos con fecha + lockup GT · Karpay · cliente + "Una solución de Praxis" | Última página de toda propuesta |

Todas las internas llevan `.run-h` (logo GT + "Tipo · Cliente") y `.run-f` ("GLOBAL TRANSACTIONS · Confidencial · año" + folio `NN / TT`). Contenido dentro de `.body-area`.

## Recetas por tipo de documento

| Documento | Páginas |
|---|---|
| Propuesta técnica | D1 · D2 · D3 · D4 · D5 · D6 · D7 |
| Propuesta comercial | D1 · D2 · D3 · tabla de inversión (`table.t`, cifras del usuario) · D6 · D7 |
| Informe de estado / avance | D1 · D2 (cifras = avance) · D5 (píldoras reales de estado) · D6 (solo riesgos) · D7 |
| One-pager / ficha de producto | 1 página: banda superior morada de 260 px con logo blanco + título, luego 3 tarjetas, ledger de rieles o cifras y pie con lockup |
| Carta / memo | `.run-h` + destinatario, fecha, asunto (`.h3`), cuerpo `.txt` (máx. 1 página), firma; sin portada |
| Acta de reunión | `.run-h` + tabla de asistentes, decisiones (`ul.list`), compromisos (`table.t` con responsable y fecha) |

## Reglas

- Tipografía: `'Helvetica Neue','Inter GT',Helvetica,Arial` (Inter va embebida como respaldo con peso light). Cuerpo 12.5 px (~9.5 pt), nunca menos de 9.5 px en nada. Títulos 700 contra bajadas 300.
- Color: papel `#f8f9fb`, tinta `#1c1626`, morado `#5c2d91`/`#241542`, teal solo positivo. Estructura (barras, teselas, nodos) siempre morada; rojo/ámbar **solo** dentro de `.pill`.
- Íconos junto a texto: `assets/iconos-lineales/` (blancos) sobre teja morada `.card .tile`. Los de `assets/iconos/` son ilustraciones grandes, no van en tarjetas.
- Marca: GT lidera (encabezados y portada), Karpay como "Powered by", Praxis solo como endoso en el cierre. Sobre morado, logos blancos.
- Cifras con unidad y fuente en `.small`. Si es muestra o borrador, dilo en la portada.
- Antes de entregar, ninguna página debe terminar con más de ~1/4 vacío: agrega una sección útil o reparte el contenido.
