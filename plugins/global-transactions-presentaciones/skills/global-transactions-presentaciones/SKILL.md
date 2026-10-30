---
name: global-transactions-presentaciones
description: Crea presentaciones HTML de Global Transactions / Karpay (pagos inmediatos, rieles, propuestas a bancos) con el sistema editorial aprobado de Praxis, animación segura y exportación offline/PDF.
---

# Presentaciones Global Transactions · Karpay

Claude hace todo el trabajo: estructura la historia, arma las diapositivas sobre la plantilla, las revisa, las empaqueta en un solo HTML offline y exporta el PDF. El equipo solo aporta el contenido (cliente, objetivo, datos) y revisa.

## Flujo (síguelo en orden)

1. **Brief.** Si falta, pregunta en una sola ronda: cliente, objetivo de la reunión, audiencia, idioma, nº de diapositivas (por defecto 8–12), datos/cifras con fuente, logo del cliente (opcional). No inventes cifras: usa las del usuario o las de `references/narrativa.md` marcadas como reutilizables.
2. **Guion.** Escribe primero el guion en 1 línea por diapositiva siguiendo el arco **oportunidad → solución → cómo → prueba → próximos pasos** (`references/narrativa.md`). Asigna a cada diapositiva un layout del catálogo (`references/layouts.md`) respetando las reglas de alternancia. Muéstralo al usuario si el pedido es ambiguo; si no, sigue.
3. **Construcción.** Copia `templates/plantilla.html` a la carpeta de trabajo **dentro de la carpeta de la skill o con `--root` apuntando a ella** (las rutas son `assets/...` y `templates/...`). Conserva `<head>`, estilos, HUD y los dos `<script>`; reemplaza/duplica las `<section class="slide">` usando los fragmentos de `references/layouts.md`. Usa solo tokens y clases de `references/sistema-visual.md`.
4. **Marca.** Verifica la jerarquía de `references/marca-y-jerarquia.md`: GT lidera, Karpay es el producto, Praxis solo como endoso, slot de cliente en portada/cierre.
5. **Movimiento.** Usa solo los 4 movimientos de `references/animacion.md` (máscara de título, números que cuentan, anillos que respiran, trazado de rutas con pulsos). Máximo un elemento protagonista animado por diapositiva.
6. **Empaquetar.** `python3 scripts/empaquetar.py deck.html "GT_<Cliente>.html" --root <carpeta-skill>` → un solo archivo autocontenido (imágenes, SVG, videos y scripts embebidos). Si avisa "no encontrados", corrige rutas.
7. **Verificar.** Renderiza con Chromium (`python3 scripts/exportar.py GT_<Cliente>.html --png capturas/`) en claro y oscuro; mira cada captura: textos sin desbordes, nada superpuesto, logos visibles, sin placeholders `{{...}}`. Corrige y repite.
8. **Entregar.** PDF: `python3 scripts/exportar.py GT_<Cliente>.html --pdf GT_<Cliente>.pdf`. Entrega HTML + PDF (en Claude.ai, como archivos descargables o publicado como Artifact; en Claude Code, en la carpeta del proyecto). Detalle en `references/exportar-y-entregar.md`.

## Reglas que no se rompen

- Lienzo 1920×1080, retícula de 12 columnas (margen 96, columna 122, medianil 24). Tipografía **Helvetica Neue / Helvetica / Arial**, nada más.
- Paleta Karpay DS: morado `#241542`/`#5c2d91`, papel `#f8f9fb`, tinta `#1c1626`, teal `#3dbfa0` solo para estados positivos y pulsos. Flama naranja solo dentro del logo Karpay.
- El contenido debe verse completo **sin** animación (todo visible en el HTML; la animación solo parte desde oculto). Nada de iframes, transiciones 3D, "magic move" ni librerías externas.
- Fondos con color explícito y `color-scheme: light only` (seguro en modo oscuro).
- Un mensaje por diapositiva; títulos ≤ 2 líneas; cuerpo ≥ 22 px; fuentes citadas en `.small`.
- Español neutro, sin superlativos vacíos. Datos de cliente: no publicar sin permiso del usuario.

## Referencias

| Archivo | Para qué |
|---|---|
| `references/sistema-visual.md` | Tokens, tipografía, retícula, componentes |
| `references/layouts.md` | Catálogo L1–L10 con código y reglas de alternancia |
| `references/animacion.md` | Los 4 movimientos seguros y cómo usarlos |
| `references/marca-y-jerarquia.md` | GT / Karpay / Praxis / cliente |
| `references/narrativa.md` | Arco narrativo, guion tipo y textos reutilizables |
| `references/recursos.md` | Inventario de logos, rieles, íconos, ilustraciones |
| `references/exportar-y-entregar.md` | Empaquetado offline, PDF, publicación |
| `assets/design-system/` | Karpay Design System completo (tokens, componentes, guías) |
