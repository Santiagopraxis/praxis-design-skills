# Documentos · Praxis › fluXOne

Propuestas, informes, one-pagers, cartas y actas de fluXOne. Hoja carta (816×1056 px). Misma retícula editorial que Global Transactions (columna de margen + columna principal), con la identidad de fluXOne.

Plantillas: `templates/documento.html` (propuesta, 6 páginas X1–X6), `templates/one-pager.html`, `templates/carta.html`; estilos en `templates/documento.css`.
Ejemplos: `ejemplos/fluXOne_ServiciosAndinos_Propuesta.pdf`, `fluXOne_OnePager_Recaudo.pdf`, `fluXOne_Carta_ServiciosAndinos.pdf`.

## Marca
- **Jerarquía:** Praxis es la empresa madre, fluXOne el producto. Portada y contraportada con la escalera `.ladder` (Praxis · fluXOne). Páginas internas: fluXOne en el encabezado y "by Praxis" en el pie.
- Escribir siempre **fluXOne**.
- Voz: cercana, LATAM, sin "disruptivo", "sin fricción" ni "seamless". Firma: "Fluye a tu manera."

## Páginas de la propuesta (en la plantilla)
| Código | Página |
|---|---|
| X1 | Portada con `assets/documentos/portada-lineas.jpg` (tarjeta gris con líneas de flujo), "Preparado para" en Conciliar, título 200 con remate en Cobrar, escalera de marca |
| X2 | Resumen: número de sección, cifras con fuente en el margen, texto con capitular, cita de recomendación |
| X3 | Los 4 pilares (`.pl.cobrar/.conciliar/.pagar/.decidir`) + medios de pago del país + cita |
| X4 | Arquitectura por capas (ingesta=Cobrar, proceso=Conciliar, salida=Pagar, reglas=Decidir) + tabla hoy vs. con fluXOne |
| X5 | Cronograma (`.gantt` con color de pilar) + qué incluye + inversión (solo cifras aprobadas) |
| X6 | Contraportada negra: "Fluye a tu manera", línea de flujo `.flowline`, pasos, escalera blanca |

## Reglas
- Fondos blanco puro o negro puro. Plus Jakarta Sans (incluida), peso máximo 600; titulares en 200–300.
- El color vive en líneas finas, cifras y una palabra del título. Cobrar `#3CB8EB` (texto `#1E9FD6`) · Conciliar `#AB4B96` · Pagar `#F5B5D2` (texto `#C9679A`) · Decidir `#4E154F`. Nunca cambiar el color de un pilar; el rosa solo existe para Pagar.
- **Nunca mezclar países** en un componente: Colombia = Recaudo, Bre-B, PSE, Nequi · México = Cobranza, SPEI, CLABE, CoDi. Logos de medios en `assets/medios-pago/`.
- Escala del DS para texto corrido: cuerpo 11.5–12 px, nunca menos de 8.5 px; si no cabe, otra página.
- No inventar cifras ni precios. Datos reutilizables y fuentes en `references/marca-y-voz.md`.
- Imágenes JPG nuevas: re-guardarlas con PIL antes de usarlas (los JPG de Adobe salen rosados en algunos visores).

## Armar
`python3 <skill>/scripts/armar.py pieza.html --marca fluxone` → HTML único + PDF + `_revision.png`. Mira la hoja de revisión antes de entregar.
