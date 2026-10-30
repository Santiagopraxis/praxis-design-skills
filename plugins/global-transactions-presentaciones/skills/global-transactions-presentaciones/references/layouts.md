# Catálogo de layouts (Magazine Spread + Swiss Ledger)

Dos ideas combinadas:
- **Magazine Spread**: la diapositiva es una doble página — una página morada (`--p950`) para la imagen o la gran idea (anillos, ciudad, mapa) y una página papel para la lectura.
- **Swiss Ledger**: retícula de 12 columnas visible en el orden, alineación a la izquierda, hairlines, tablas tipo libro contable, una sola cifra/fila destacada en color.

Los layouts con código completo están en `templates/plantilla.html` (busca el `id`). Los demás, abajo.

| ID | Nombre | Estructura | Protagonista animado | En plantilla |
|---|---|---|---|---|
| L1 | Portada spread | Papel cols 1–7 (logo GT, kicker cliente, título display, promesa, "Powered by Karpay") + página morada derecha 816 px (anillos + skyline) | máscara + anillos | `#portada` |
| L2 | Divisor / manifiesto | Todo morado; kicker "0N · Capítulo"; título 120 px 2 líneas (2.ª en `--p200`); anillos sangrando a la derecha | máscara | `#divisor` |
| L3 | Ledger | Kicker+folio; título h2 cols 1–6; tabla `.ledger` 12 col (o cols 5–12) con una fila `.hi` | entradas por fila | abajo |
| L4 | Globo + ledger | Mapa/globo `data-globe` cols 1–4; título + tabla cols 5–12 | trazado de rutas | `#rieles` |
| L5 | Cifra héroe | Número 240 px cols 1–7 + bajada; specs en cols 8–12 bajo regla fuerte; anillos chicos | números que cuentan | `#cifra` |
| L6 | Proceso / quiénes somos | Título; ruta horizontal con pulso; 3–5 nodos (disco + ícono) con título y texto centrados | ruta + pulso | `#proceso` |
| L7 | Spread de producto | Página morada angosta cols 1–4 con el claim; 3 columnas de detalle en papel (A/B/C) | máscara | abajo |
| L8 | Demo | Papel; texto cols 1–5; video/captura del producto en marco cols 7–12; pie GT + Karpay | video en bucle | abajo |
| L9 | Cierre spread | Morado izquierda (anillos con punto teal) + "Gracias." + siguiente paso + lockup GT·Karpay·Cliente + endoso Praxis | máscara + anillos | `#cierre` |
| L10 | Cita / manifiesto papel | Papel; cita 64–88 px 300 cols 2–10; autor en kicker; una regla fuerte | máscara | variante de L2 con `class="slide"` |

## Reglas de alternancia

1. Nunca dos diapositivas moradas completas seguidas (L2/L9). Entre ellas, al menos una papel.
2. Alterna el lado de la página morada: si L1 la pone a la derecha, L7/L9 la ponen a la izquierda.
3. No repitas el mismo layout más de 2 veces seguidas; tras 2 ledgers, cambia a cifra, proceso o divisor.
4. Cada bloque narrativo abre con un layout "fuerte" (L2, L5 o L7) y sigue con layouts de lectura (L3, L4, L6, L8).
5. Un protagonista animado por diapositiva y una sola firma de anillos.
6. Proporción en un deck de 10–12: ~3 con morado (portada, 1–2 divisores, cierre), el resto papel.
7. Folio "NN / TT" y kicker en todas las de contenido; nunca en portada, divisores ni cierre.

## L3 · Ledger (código)

```html
<section class="slide" id="ledger">
  <p class="a kicker" data-in="1" style="left:96px;top:56px;width:1000px">Funcionalidades</p>
  <p class="a folio" data-in="1" style="left:1624px;top:56px">07 / 12</p>
  <div class="rule" style="left:96px;top:100px;width:1728px"></div>
  <h2 class="a h2 mask" style="left:96px;top:150px;width:1000px"><span class="row"><span class="ln">Cada flujo que un banco</span></span><span class="row"><span class="ln accent">necesita.</span></span></h2>
  <div class="ledger" style="left:96px;top:360px;width:1728px;--cols:420px 1fr 260px">
    <div class="r" data-in="2"><b>Transferencias</b><span>Crédito, devoluciones, solicitudes de pago</span><div class="fig">A2A · P2P</div></div>
    <div class="r hi" data-in="3"><b>Conciliación</b><span>Automática, por referencia</span><div class="fig">24×7</div></div>
    <div class="r" data-in="4"><b>Canales</b><span>App móvil y portal web</span><div class="fig">2</div></div>
  </div>
  <div class="rule" style="left:96px;top:960px;width:1728px"></div>
  <img class="logo" src="assets/logos/global-transactions-color.png" alt="Global Transactions" style="left:96px;top:986px;width:170px;height:44px">
</section>
```

## L7 · Spread de producto (código)

```html
<section class="slide" id="producto">
  <div class="a" style="left:0;top:0;width:656px;height:1080px;background:var(--p950)"></div>
  <p class="a kicker" data-in="1" style="left:96px;top:56px;width:500px;color:var(--invm)">04 · Funcionalidad</p>
  <h2 class="a h2 mask" style="left:96px;top:380px;width:480px;color:var(--inv);font-size:64px"><span class="row"><span class="ln">Todo lo que</span></span><span class="row"><span class="ln" style="color:var(--p200)">un banco necesita.</span></span></h2>
  <img class="logo" src="assets/logos/karpay-blanco.svg" alt="Karpay" style="left:96px;top:986px;width:190px;height:36px">
  <!-- 3 columnas de 4 en cols 5–12: x = 754 / 1110 / 1466, ancho 334 -->
  <div class="a" data-in="2" style="left:754px;top:150px;width:334px"><div class="rule strong" style="position:relative;width:100%"></div><p class="h2" style="font-size:40px;margin:20px 0 16px" >A · Negocio</p><p class="body">Transferencias de crédito, solicitudes de pago, devoluciones, conciliación.</p></div>
  <div class="a" data-in="3" style="left:1110px;top:150px;width:334px"><div class="rule strong" style="position:relative;width:100%"></div><p class="h2" style="font-size:40px;margin:20px 0 16px">B · Complementos</p><p class="body">App móvil, portal web, integrador, riesgo y fraude, reportes.</p></div>
  <div class="a" data-in="4" style="left:1466px;top:150px;width:358px"><div class="rule strong" style="position:relative;width:100%"></div><p class="h2" style="font-size:40px;margin:20px 0 16px">C · Soporte</p><p class="body">Histórico, KYC/KYB, orquestación, monitoreo.</p></div>
  <p class="a folio" data-in="1" style="left:1624px;top:56px">09 / 12</p>
</section>
```

## L8 · Demo (código)

```html
<section class="slide" id="demo">
  <p class="a kicker" data-in="1" style="left:96px;top:56px;width:1000px">Demo · App móvil</p>
  <div class="rule" style="left:96px;top:100px;width:1728px"></div>
  <h2 class="a h2 mask" style="left:96px;top:150px;width:760px"><span class="row"><span class="ln">Enviar dinero</span></span><span class="row"><span class="ln accent">en 3 toques.</span></span></h2>
  <p class="a body" data-in="2" style="left:96px;top:330px;width:700px">Texto de 2–3 líneas que explica lo que se ve.</p>
  <!-- Teléfono: marco 420×860, radio 56, borde 14 px tinta. Video MP4 muted loop (se reproduce al entrar). -->
  <div class="a" data-in="2" style="left:1150px;top:130px;width:420px;height:860px;border-radius:56px;background:var(--ink);padding:14px">
    <video src="RUTA/demo.mp4" poster="RUTA/demo.png" muted loop playsinline preload="auto" style="width:100%;height:100%;border-radius:44px;object-fit:cover;display:block"></video>
  </div>
  <div class="rule" style="left:96px;top:960px;width:960px"></div>
  <img class="logo" src="assets/logos/global-transactions-color.png" alt="Global Transactions" style="left:96px;top:986px;width:170px;height:44px">
  <img class="logo" src="assets/logos/karpay-color.svg" alt="Karpay Instapay" style="left:306px;top:990px;width:190px;height:36px">
</section>
```
El poster es obligatorio (se ve en PDF y si el video no carga). Videos ≤ 2–3 MB cada uno (el empaquetador los embebe).

## Coordenadas útiles del mapa (`data-globe`, viewBox 1000×1000)

FedNow/EE. UU. 327,284 · SPEI/MX 151,415 · CR 230,515 · PA 262,528 · Bre-B/CO 301,569 · EC 266,606 · PE 282,702 · Pix/BR 517,743 · AR 441,867 · SEPA 769,175 · FR 755,189 · Swift 752,215 · ES 770,254.
Formato `data-pts="Etiqueta:x,y;Etiqueta:x,y"`; `data-hub` = origen de las rutas; `data-labels="no"` oculta etiquetas.
