# Documentos · fluXOne

Propuestas comerciales, informes, one-pagers, cartas y actas de fluXOne. **Réplica fiel del template aprobado del design system** (`assets/design-system/plantillas-documentos/propuesta-comercial-co` y `-mx`). Hoja A4 (794×1123 px). No usar la retícula editorial de Global Transactions.

Plantillas: `templates/documento.html` (propuesta, 5 páginas), `templates/one-pager.html`, `templates/carta.html`; estilos en `templates/documento.css`.
Ejemplos: `ejemplos/fluXOne_ServiciosAndinos_Propuesta.pdf`, `fluXOne_OnePager_Recaudo.pdf`, `fluXOne_Carta_ServiciosAndinos.pdf`.

## Estructura del template (no cambiarla)
- **Portada** `.pc-cover`: tarjeta gris con líneas de flujo y logo (`assets/documentos/portada-lineas.jpg`), título "PROPUESTA COMERCIAL" en 200 mayúsculas, bajada, "Preparado para {Cliente}", fecha y versión abajo.
- **Páginas internas**: franja de vidrio arriba (`.pc-header` + `.pc-doclabel` "Tipo · País"), cuerpo `.pc-body`, pie "Fluye a tu manera" + logo (`.pc-footer`).
- Orden de la propuesta: Tabla de contenidos → Sobre Praxis IT & Sobre fluXOne (texto aprobado, no reescribir) → Propuesta comercial (resumen ejecutivo + costos de implementación) → Mínimo mensual (SaaS), tabla transaccional y expiración (60 días).
- Tablas `.pc-table` con encabezado cian; etiqueta de país `.pc-tag` antes de cada tabla de precios.

## Marca
- **Solo logos**, sin etiquetas tipo "Una empresa de" o "Producto". fluXOne en portada y pie; Praxis aparece como "by Praxis" en el texto.
- Escribir siempre **fluXOne** (el template antiguo dice "fluX").
- Voz cercana, LATAM; sin "disruptivo", "sin fricción", "seamless".

## Reglas
- Escala fija del DS: título 30 px, subtítulo 14 px, cuerpo 12 px, denso 10 px. Si no cabe, otra página; nunca bajar la letra.
- Plus Jakarta Sans (incluida), peso máximo 600.
- Pilares con su color fijo (solo en líneas finas y rótulos): Cobrar `#3CB8EB` · Conciliar `#AB4B96` · Pagar `#F5B5D2` · Decidir `#4E154F`.
- **Nunca mezclar países**: Colombia = Recaudo, Bre-B, PSE, Nequi, COP · México = Cobranza, SPEI, CLABE, CoDi, MXN (ver `propuesta-comercial-mx` en el DS para los textos de México).
- **Precios:** nunca inventarlos. Dejar `$[monto]` y avisar si el usuario no los dio.
- Imágenes: no re-convertir `pie-fluye.jpg` ni `encabezado-vidrio.jpg` (ya están en RGB correcto). Cualquier JPG nuevo se revisa en la hoja de revisión: si sale rosado o con colores raros, venía en CMYK.

## Armar
`python3 <skill>/scripts/armar.py pieza.html --marca fluxone` → HTML único + PDF + `_revision.png`. Mira la hoja de revisión antes de entregar.
