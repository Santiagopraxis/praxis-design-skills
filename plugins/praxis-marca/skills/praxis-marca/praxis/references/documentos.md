# Documentos · Praxis

Propuestas técnicas y comerciales, informes, cartas y fichas con la marca **Praxis** (la empresa madre). Hoja carta (816×1056 px). Estilo tomado de las presentaciones aprobadas de Praxis (propuestas Kyndryl, account review BBVA).

Plantilla: `templates/documento.html` (propuesta, 9 páginas) + `templates/documento.css`. Ejemplo: `ejemplos/Praxis_BancoAndino_PropuestaAMS.pdf`.

## Es un DOCUMENTO, no una presentación
No copies la diagramación de las diapositivas (cifras gigantes, bloques centrados, gráficos en cada página). Se escribe como una propuesta formal: texto corrido, títulos numerados (1, 1.1), tablas con su leyenda, notas destacadas y página de aceptación con firmas. La identidad de Praxis se aplica en tipografía, color y detalles; los gráficos (arcos, esfera, ciudad) **solo en portada y contraportada**.

## Identidad
- **Tipografía:** Helvetica Neue (Inter incluida como respaldo). Cuerpo 14 px (10.5 pt), nunca menos de 8.5 px.
- **Color:** naranja `#E96326` (número de sección, filete bajo el título, viñetas, rótulos, cifras), azul marino `#1A2347` (títulos, encabezado de tablas, banda de portada, contraportada), azul Praxis `#2F3E87` (cifras alternas, borde de cajas).
- **Logos:** Praxis (`assets/logos/praxis-color.png`, blanco en contraportada) **y el logo del cliente** en la portada (uno al lado del otro, separados por un filete) y en el encabezado de cada página (Praxis a la izquierda, cliente a la derecha). Pide al usuario el logo del cliente (PNG/SVG con fondo transparente). Si no lo tiene, escribe el nombre del cliente en texto y avísale. `assets/ejemplo/logo-cliente-ejemplo.svg` es ficticio, nunca lo dejes en una pieza real.
- Logos del 30 aniversario (`praxis-30-*`) solo si la pieza lo pide.

## Estructura de la plantilla (`templates/documento.html`)
1. **Portada** `.cover`: logos Praxis + cliente, arcos con esfera arriba a la derecha, bloque de título con filete naranja a la izquierda (tipo de documento, título, bajada), fila de metadatos (cliente, fecha, versión, clasificación), ciudad en línea y banda azul marino al pie.
2. **Control del documento + Contenido** (`.kv` y `.toc` con puntos guía).
3. **Secciones numeradas** (una o más páginas cada una): `.h1` con número naranja y filete, `.h2` para subsecciones (`3.1`), `.h3` rótulo naranja, `.p` párrafos, `ul.l` / `ol.l` listas, `.facts` fila discreta de cifras, `table.t` + `.cap` ("Tabla N."), `.note` (destacado naranja), `.box` (recuadro con borde azul), `.cols` / `.cols3`.
4. **Aceptación** con bloque de firmas `.sign`, próximos pasos y contacto.
5. **Contraportada** `.back` azul marino con mensaje de cierre, contacto y logo blanco.

Páginas internas: `.hd` (encabezado) + `<div class="content">` (el texto fluye) + `.ft` (pie con "Página N de T"). Actualiza el total de páginas y los números del contenido.

## Textos aprobados de Praxis (de las propuestas)
- Propuesta de valor: "En Praxis atendemos las necesidades y los proyectos estratégicos de cada cliente. Ofrecemos las mejores soluciones tecnológicas con nuestros servicios, herramientas y fábricas de software."
- Cifras: 30 años en el mercado · 10+ países · 1.300+ colaboradores · 190+ aliados · 15+ especialidades · 3 fábricas de software · 6 modalidades de servicio · 20+ años en proyectos de misión crítica y alta transaccionalidad. **Confirmar vigencia antes de enviar.**
- Esencia: "Praxis es una empresa líder en transformación digital, dedicada a fortalecer las estrategias tecnológicas de las empresas…"
- Servicios: líneas (AMS, consultoría especializada, proyectos, cloud, capacitación, licencias de software); soluciones (plataforma de APIs, ciberseguridad, Solution Center, PM & BPM, pruebas, análisis de datos, IA); productos (Global Transactions, Karpay, SAP, productos y servicios financieros, E-Factura, gestión de procesos de TI, soluciones mobile).
- Estructura general: estructura matricial de atención; gerente de negocio; Praxis Project Office; aseguramiento de calidad.

## Reglas
- Una idea por bloque; si no cabe, otra página. Nunca bajar la letra (cuerpo 12 px, nada por debajo de 8.5 px).
- No inventar precios ni niveles de servicio: dejar `$[monto]` / `[x] h` y avisar.
- Idioma: el del cliente (las propuestas a Brasil van en portugués).
- Revisa `_revision.png`: ningún texto cortado al pie de `.content` (si se corta, pasa el resto a otra página), páginas internas llenas al menos a 2/3 salvo la de aceptación, logo del cliente correcto.

## Armar
`python3 <skill>/scripts/armar.py pieza.html --marca praxis` → HTML único + PDF + `_revision.png`.
