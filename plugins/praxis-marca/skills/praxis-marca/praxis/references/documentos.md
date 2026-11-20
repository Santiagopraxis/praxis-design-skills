# Documentos · Praxis

Propuestas técnicas y comerciales, informes, cartas y fichas con la marca **Praxis** (la empresa madre). Hoja carta (816×1056 px). Estilo tomado de las presentaciones aprobadas de Praxis (propuestas Kyndryl, account review BBVA).

Plantilla: `templates/documento.html` (propuesta, 7 páginas) + `templates/documento.css`. Ejemplo: `ejemplos/Praxis_BancoAndino_PropuestaAMS.pdf`.

## Identidad
- **Tipografía:** Helvetica Neue 300 / 400 / 700 (Inter incluida como respaldo).
- **Color:** blanco de fondo; naranja `#E96326` (remate de títulos, cifras, rótulos); azul Praxis `#2F3E87` (cifras alternas); azul marino `#0B1430` / `#1A2347` (encabezado de tablas, páginas oscuras); grises `#434343`, `#8A93A8`.
- **Títulos:** primera parte en peso normal o ligero, remate en **negrita** ("Nuestra propuesta **de valor**"). En portada y cierre, título grande ligero + remate naranja en negrita con **punto naranja** ("Propuesta de **Servicios AMS.**").
- **Rótulo** (kicker) arriba del título: mayúsculas pequeñas, espaciadas, naranja.
- **Gráficos de marca** (`assets/graficos/`): `arcos-esfera.png` (portada y cierre, esquina superior derecha), `arcos.png` (páginas internas, esquina, suave), `ciudad-lineal.png` (pie de portada y cierre), `ciudad-binaria.png` (acento en "Sobre Praxis").
- **Logos** (`assets/logos/`): `praxis-color.png` (siempre en papel), `praxis-blanco.png` (fondo oscuro), `praxis-vertical-color.png`, y las versiones del **30 aniversario** (`praxis-30-*`) solo cuando la pieza lo pida.
- **Cliente:** su nombre o logo al lado del logo de Praxis en portada y cierre, y en el pie de cada página.

## Componentes (`documento.css`)
`.hero` (título de portada/cierre) · `.stats` (cifras con separadores verticales) · `.big` (cifras grandes naranja/azul) · `.cards` (tarjetas blancas con ícono en círculo y línea de acento abajo) · `.steps` (columnas 01–04) · `.cols3` + `ul.dots` (listas) · `table.t` (encabezado azul marino) · `.callout` (caja naranja suave) · `.banda` (frase destacada con barra naranja) · `.contacto`.
Páginas internas: `.hd` (rótulo + título + logo) y `<div class="body">`, que reparte los bloques en el alto de la página. Pie `.ft` con nombre del documento y folio.

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
- Revisa `_revision.png`: ninguna página con más de ~1/4 vacío, los títulos de portada no chocan con los arcos.

## Armar
`python3 <skill>/scripts/armar.py pieza.html --marca praxis` → HTML único + PDF + `_revision.png`.
