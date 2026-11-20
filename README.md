# Praxis · Skill de marca

Una sola skill, `praxis-marca`, para que cualquiera del equipo le pida a Claude piezas con la identidad de **Global Transactions / Karpay** o de **fluXOne**, sin depender de una persona.

> **Uso interno.** Este repo contiene logos e identidad de Praxis y sus marcas. Mantenerlo **privado**.

## Qué puede hacer

| Pieza | Global Transactions / Karpay | fluXOne |
|---|---|---|
| Presentación animada (HTML + PDF) | ✓ | ✓ |
| Propuesta técnica o comercial, informe | ✓ | ✓ |
| One-pager / ficha de producto | ✓ | ✓ |
| Carta, memo, acta | ✓ | ✓ |

Ejemplos de cada uno en `plugins/praxis-marca/skills/praxis-marca/<marca>/ejemplos/`.

## Instalar

**claude.ai / Cowork:** Customize → Plugins → Add → Add marketplace → Add from a repository → `Santiagopraxis/praxis-design-skills` → instala **praxis-marca**.

**Claude Code:**
```
/plugin marketplace add Santiagopraxis/praxis-design-skills
/plugin install praxis-marca@praxis-design
```
Si tenías instaladas las skills anteriores (`global-transactions-presentaciones`, `fluxone-presentaciones`), desinstálalas: `praxis-marca` las reemplaza.

## Cómo pedir (y gastar menos)

Escribe todo en **un solo mensaje**, así Claude no tiene que preguntar:

> Hazme un **one-pager de Karpay Instapay** para **Banco X**. Objetivo: que aprueben una reunión técnica. Datos: [cifras con fuente]. Contacto: [nombre, correo]. Solo PDF.

> Hazme una **propuesta comercial de fluXOne** para **Empresa Y en México**, 6 páginas. Problema: concilian a mano. Fecha de la próxima reunión: 3 de diciembre.

Consejos para que alcancen los tokens:
- **Un chat nuevo por pieza.** Los chats largos gastan más en cada mensaje.
- **Brief completo desde el primer mensaje**: marca, pieza, cliente, país, objetivo, datos y fecha.
- **Pide los cambios todos juntos** en un mensaje, no uno por uno.
- **Pide solo el PDF** si no necesitas el HTML animado.
- **Reutiliza:** adjunta un PDF que ya te guste y pide "igual, pero para el cliente Z".

## Actualizar la skill

Edita los archivos en `plugins/praxis-marca/skills/praxis-marca/` y haz push. Quien tenga el marketplace instalado recibe los cambios al actualizar (`/plugin marketplace update praxis-design` en Claude Code).

Estructura:
```
praxis-marca/
  SKILL.md                 ← guía de entrada: elige marca y pieza
  scripts/armar.py         ← un paso: HTML offline + PDF + hoja de revisión
  global-transactions/     ← plantillas, guías, logos, ejemplos de GT/Karpay
  fluxone/                 ← plantillas, guías, logos, ejemplos de fluXOne
```
