---
name: fluxone-presentaciones
description: Crea presentaciones HTML de fluXOne (orquestación financiera MX/CO: cobrar, pagar, conciliar, decidir) con su design system, líneas Stroke & Glow, imágenes oficiales y exportación offline/PDF.
---

# Presentaciones fluXOne

Claude hace todo: guion, diapositivas sobre la plantilla, revisión visual, empaquetado en un solo HTML offline y PDF. El equipo aporta objetivo, audiencia, país y datos; luego revisa.

## Flujo

1. **Brief** (una sola ronda de preguntas si falta): objetivo y tipo (presentación general, white label, rueda de prensa, propuesta), audiencia, **país (México o Colombia, o ambos en columnas separadas)**, nº de diapositivas (8–14), datos con fuente, cliente/logo. No inventes cifras.
2. **Guion** de 1 línea por diapositiva con el arco de `references/narrativa.md`; asigna a cada una un layout F1–F16 de `references/layouts.md` y respeta las reglas de alternancia blanco/negro.
3. **Construcción**: parte de `templates/plantilla.html` (rutas relativas a la carpeta de la skill: `assets/…`, `templates/…`). Conserva `<head>`, CSS, UI y `runtime.js`; duplica/edita `<section class="slide">` copiando el marcado del catálogo. Para piezas complejas (dashboard Control Tower, checkout, app NexaPay, WhatsApp) copia la diapositiva desde `referencia/decks-originales/` (ver tabla en layouts.md).
4. **Imágenes**: usa SOLO las de `assets/` y exactamente como en los decks (posición, recorte, tratamiento): `references/imagenes.md`.
5. **Marca y voz**: `references/marca-y-voz.md` — 4 pilares con su color fijo, regla bi-país, lockup Praxis | fluXOne, "by Praxis", palabras prohibidas.
6. **Movimiento**: solo el vocabulario de `references/animacion.md` (haces de líneas con puntos de luz, `rise`, `float`, íconos que se dibujan, cifras que cuentan, pasos `data-f`).
7. **Empaquetar**: `python3 scripts/empaquetar.py deck.html "fluXOne_<Cliente>.html" --root <carpeta-skill>`.
8. **Verificar**: `python3 scripts/exportar.py fluXOne_<Cliente>.html --png capturas/`; mira cada captura (claro y oscuro deben ser idénticos; sin desbordes ni `{{…}}`). Corrige y repite.
9. **Entregar**: `python3 scripts/exportar.py fluXOne_<Cliente>.html --pdf fluXOne_<Cliente>.pdf`; entrega HTML + PDF (ver `references/exportar-y-entregar.md`).

## Reglas que no se rompen

- Lienzo 1920×1080, margen lateral 120 px. Fondos **solo** blanco puro `#FFFFFF` o negro puro `#000000`. Nada de degradados de relleno.
- **Plus Jakarta Sans** (incluida en `assets/fuentes`), pesos 200–400 en titulares de presentación, nunca > 600. Onest solo dentro de demos NexaPay.
- El color vive en líneas finas, cifras y una palabra del título (`<em class="c-…">`). Pilares: Cobrar `#3CB8EB` · Conciliar `#AB4B96` · Pagar `#F5B5D2` (texto `#C9679A`) · Decidir `#4E154F`. Nunca cambies el color de un pilar.
- Nunca mezcles México (Cobranza, SPEI, CLABE, CoDi) y Colombia (Recaudo, Bre-B, PSE, Nequi) en un mismo componente.
- Un mensaje por diapositiva; título ≤ 2 líneas; cuerpo ≥ 19 px; fuentes de datos al pie en `.src`.
- Sin librerías externas ni fuentes por CDN: todo local para que el HTML funcione offline.

## Referencias

| Archivo | Contenido |
|---|---|
| `references/sistema-visual.md` | Tokens (DS + decks), tipografía, retícula, componentes |
| `references/layouts.md` | Catálogo F1–F16 con marcado y alternancia |
| `references/imagenes.md` | Cada imagen: qué es, en qué layout, posición/recorte/tratamiento |
| `references/animacion.md` | Vocabulario de movimiento y `LINES` disponibles |
| `references/marca-y-voz.md` | Pilares, voz, bi-país, logos |
| `references/narrativa.md` | Arcos por tipo de deck y textos reutilizables |
| `references/exportar-y-entregar.md` | Empaquetado, PDF, entrega |
| `assets/design-system/` | Design system fluXOne original (README, tokens CSS, plantillas de documentos) |
| `referencia/decks-originales/` | Los 3 decks aprobados (abrir en navegador para ver el resultado esperado) |
