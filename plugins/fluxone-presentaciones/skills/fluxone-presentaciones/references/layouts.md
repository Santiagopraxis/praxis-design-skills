# Catálogo de layouts fluXOne

Fuente: los 3 decks de `referencia/decks-originales/` (G = Presentación general, W = White Label MX/CO, P = Rueda de prensa). F1–F4 y F12 están listos en `templates/plantilla.html`. Para el resto, copia el marcado indicado (los estilos ya están en `templates/componentes.css`).

| ID | Layout | Fondo | Estructura | Origen |
|---|---|---|---|---|
| F1 | Portada | blanco | Líneas `portada` + render `barras-cian` + 3 chips + lockup Praxis|fluXOne + título 76 px + lead + meta | plantilla, G1, P2 |
| F2 | Frase | negro | Logo blanco arriba-izq., frase 92 px 200 con 2.ª línea cian, líneas `oscuro` | plantilla, G2, P3 |
| F3 | Reto | blanco | Eyebrow + logo + `.h1`; `.cols3` con íconos; fila de 3 cifras `.rs` | plantilla, G3 |
| F4 | Qué es | blanco | Logo grande + claim 52 px izq.; 4 `.pil-r` a la derecha; líneas `intro` | plantilla, G4 |
| F5 | Diagrama de orquestación | blanco | Chips de canales a la izq. → `.hub` central con 4 pilares → chips "Su empresa" a la der.; conectores en codo; `data-steps="2"` | G5, P "hace las dos cosas" (ids `canales`, `empresa`; JS en el deck) |
| F6 | Pasos 01–04 | blanco | `.cols4` de `.step` con número 96 px en color de pilar progresivo (cobrar → azul → conciliar → e4) | G6 |
| F7 | México vs Colombia | blanco | Tabla `.px` (encabezados México cian / Colombia violeta); filas con etiqueta MAYÚSCULAS | G7 |
| F8 | Segmentos | blanco | `.sg` 3×2 tarjetas; última punteada `sg-x` | G8 |
| F9 | Así se ve un cobro | blanco | 3 pasos `.cb` izq. + `.panel` der. con movimientos `.mv` y estado `.st`; líneas `cobro` | G9 |
| F10 | Comparativa | blanco | Tabla `.cp` 4 columnas; columna fluXOne `.cp-f` | G10 |
| F11 | Divisor de acto | blanco | "01 / El contexto": número grande + título; líneas `div1/2/3` | P5, P11, P15 |
| F12 | Cierre | negro | Logo blanco, "¿Y si todo fuera más fácil?" 120 px, pilares, firma, URL, "by Praxis"; líneas `gracias` | plantilla, G último |
| F13 | Confianza | blanco | `.cols4` de `.tr` (ISO 27001, PCI DSS, Monitoreo, Neutralidad) + franja niebla con logo Praxis | G penúltima |
| F14 | Línea de tiempo | blanco | `#tl` con hitos (día grande + punto con glow + título + texto), `data-steps` para hitos futuros | P6 |
| F15 | Cifra gigante | blanco | Número 300 px peso 200 a la izquierda + render `barras-cian-alto` a la derecha + fuente | P (ENIF) |
| F16 | Medios de pago por país | blanco | Columnas México / Colombia / En los dos países con grillas de logos `.pm` | W "Canales" |
| D1–D4 | Demos | — | D1 App NexaPay (`.nx`, teléfono con recorrido), D2 WhatsApp (`.wa-s`), D3 Control Tower (`#s-ct`, dashboard `.db-*`), D4 Checkout white label (`#s-ck`, `.ck-*`) | G/P (D1, D2), W (D3, D4) |

## Alternancia y ritmo

1. Arranca en blanco (F1) y usa negro (F2/F12/bienvenida) como respiro: nunca dos negras seguidas, ~1 de cada 4–5.
2. Después de una diapositiva densa (F7, F10, F16) pon una ligera (F2, F11, F15).
3. Máximo un render 3D y un haz de líneas por diapositiva; las tablas no llevan líneas decorativas.
4. Cada acto abre con F11 (rueda de prensa) o F2 (venta).
5. Todas las blancas de contenido llevan eyebrow + logo arriba-der. + `<div class="num"></div>` (folio automático).

## Fragmentos

**F6 · Pasos**
```html
<section class="slide">
  <div class="eyebrow">Orquestación en la práctica</div>
  <img class="logo" src="assets/logos/fluxone-negro.png" alt="fluXOne">
  <h2 class="h1">Cada peso, <em class="c-cobrar">identificado, conciliado y en su lugar</em></h2>
  <div class="abs cols4" style="left:120px;right:120px;top:360px">
    <div class="rise step" style="--d:.1s"><div class="st-n c-cobrar">01</div><svg class="ico anim" viewBox="0 0 24 24" stroke="#3CB8EB" data-i="validacion" style="--d:.3s"></svg><div class="st-t">Cuentas únicas</div><p class="small">…</p></div>
    <div class="rise step" style="--d:.25s"><div class="st-n c-azul">02</div><svg class="ico anim" viewBox="0 0 24 24" stroke="#408EC3" data-i="erp" style="--d:.5s"></svg><div class="st-t">Conciliación al ERP</div><p class="small">…</p></div>
    <div class="rise step" style="--d:.4s"><div class="st-n c-conciliar">03</div><svg class="ico anim" viewBox="0 0 24 24" stroke="#AB4B96" data-i="rieles" style="--d:.7s"></svg><div class="st-t">Smart Splitting</div><p class="small">…</p></div>
    <div class="rise step" style="--d:.55s"><div class="st-n" style="color:var(--e4)">04</div><svg class="ico anim" viewBox="0 0 24 24" stroke="#87367A" data-i="dispersion" style="--d:.9s"></svg><div class="st-t">Dispersión 24/7</div><p class="small">…</p></div>
  </div>
  <div class="num"></div>
</section>
```

**F7 · México vs Colombia**
```html
<div class="abs px" style="left:120px;right:120px;top:320px">
  <div class="px-h"><span></span><b>México</b><b>Colombia</b></div>
  <div class="rise px-r" style="--d:.05s"><span>Lo llamamos</span><div>Cobranza</div><div>Recaudo</div></div>
  <div class="rise px-r" style="--d:.12s"><span>Transferencia inmediata</span><div>SPEI, 24/7</div><div>Bre-B, 24/7</div></div>
</div>
```

**F10 · Comparativa**
```html
<div class="abs cp" style="left:120px;right:120px;top:320px">
  <div class="cp-h"><span></span><b>Banca tradicional</b><b>Pasarelas de pago</b><b class="cp-f">fluXOne</b></div>
  <div class="rise cp-r" style="--d:.05s"><span>Conciliación al ERP</span><div>Manual</div><div>Básica</div><div class="cp-f">Automática y en tiempo real</div></div>
</div>
```

**F8 · Segmentos** → `.sg` con 6 `.rise sg-c` (`<b>Título</b><p>Texto</p>`), la última `sg-c sg-x`.

**F13 · Confianza** → `.cols4` de `<div class="rise tr"><svg class="ico anim" … data-i="seguridad"></svg><div class="tr-t">ISO 27001</div><p class="small">…</p></div>` + franja:
```html
<div class="abs rise" style="--d:.6s;left:120px;right:120px;top:780px;height:150px;background:var(--niebla);border-radius:18px;display:flex;align-items:center;gap:48px;padding:0 48px">
  <img src="assets/logos/praxis.webp" alt="Praxis" style="height:70px"><p class="lead" style="color:var(--tinta)">fluXOne es desarrollado y respaldado por Praxis, su empresa matriz.</p></div>
```

Para F5, F9, F14, F16 y las demos, abre el deck original, busca la sección y cópiala entera (incluido su `<style>` interno y, si lo tiene, el bloque de JS correspondiente al final del deck), reemplazando las imágenes `data:` por las rutas de `assets/` según `imagenes.md`.
