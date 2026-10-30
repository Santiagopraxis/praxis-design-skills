# Skills de presentaciones Praxis — guía para el equipo

Hay dos skills. Cada una le enseña a Claude a hacer presentaciones completas de una marca, con su diseño, imágenes, animaciones y exportación:

| Skill | Para qué |
|---|---|
| `global-transactions-presentaciones.zip` | Decks de Global Transactions / Karpay (pagos inmediatos, rieles, propuestas a bancos) |
| `fluxone-presentaciones.zip` | Decks de fluXOne (orquestación financiera México/Colombia, white label, prensa) |

Claude hace todo el trabajo: arma la historia, diseña las diapositivas, las revisa con capturas, entrega un **HTML que funciona sin internet** (pantalla completa con la tecla F, flechas para avanzar) y un **PDF**. Tú solo das el contenido y revisas.

---

## Opción A · Claude.ai (web o app de escritorio)

**Requisitos** (según la ayuda oficial de Anthropic): las skills están en los planes Free, Pro, Max, Team y Enterprise, y necesitan la ejecución de código activada.

1. Activa la ejecución de código: **Configuración → Capacidades → "Ejecución de código y creación de archivos"** (en el diseño nuevo se llama **"Crear y editar archivos"**).
   - En Team/Enterprise, si no la ves, pídele al Owner que la active en **Configuración de la organización → Plugins & skills → pestaña Policy** (código y **Skills** encendidos).
2. Ve a **Personalizar → Skills**.
3. Pulsa **"+"** → **"+ Create skill"** → **"Upload a skill"** y sube el `.zip` tal cual (no lo descomprimas).
4. Verifica que la skill aparezca en la lista y esté **activada**. Repite con la otra skill.
5. Abre un chat nuevo y pide, por ejemplo:
   > Haz una presentación de Global Transactions para Banco X sobre Bre-B, 8 diapositivas. Datos: … Entrégame el HTML y el PDF.

   > Haz un deck de fluXOne para una empresa de logística en México, 10 diapositivas, tono de venta.

Claude detecta la skill solo; si no, di "usa la skill global-transactions-presentaciones" (o "fluxone-presentaciones").

**Compartir con todo el equipo (Team / Enterprise):** un Owner puede subirlas una sola vez para todos en **Configuración de la organización → Plugins & skills → Add → Upload a skill**. Quedan disponibles al instante para todos en **Personalizar → Skills → Organization skills** (activadas por defecto; cada persona puede apagarlas pero no borrarlas). También se cargan en Claude Code para quien inicie sesión con su cuenta de Claude.

> Las skills que subes tú son privadas hasta que las compartas.

## Opción B · Claude Code

1. Descomprime cada zip dentro de tu carpeta personal de skills:
   - macOS / Linux: `~/.claude/skills/` → quedan `~/.claude/skills/global-transactions-presentaciones/SKILL.md` y `~/.claude/skills/fluxone-presentaciones/SKILL.md`.
   - Windows: `C:\Users\<tu-usuario>\.claude\skills\`.
   - Para un solo proyecto (y compartirlo por git): `.claude/skills/` dentro del repo.
2. Abre Claude Code y pide la presentación en lenguaje normal, o invócala directo: `/global-transactions-presentaciones Banco X, Bre-B, 8 diapositivas` · `/fluxone-presentaciones …`.
3. Claude deja el HTML, el PDF y las capturas de revisión en tu carpeta de trabajo. Para exportar necesita Python 3 y Chrome/Chromium (para capturas también `pip install playwright`).

## Qué pedir y qué revisar

- Dale: cliente, objetivo, audiencia, país, número de diapositivas, cifras **con fuente** y el logo del cliente si lo hay.
- Revisa: nombres y cifras, que no queden textos `{{…}}`, y que el PDF tenga una diapositiva por página.
- Para cambios: "en la diapositiva 4 cambia X por Y y vuelve a exportar".
- Datos confidenciales del cliente: pide que te entregue los archivos; no publiques enlaces sin autorización.

## Fuentes oficiales (verificadas el 30-oct-2026)

- Usar skills en Claude: https://support.claude.com/en/articles/12512180-use-skills-in-claude
- Crear skills personalizadas (estructura y zip): https://support.claude.com/en/articles/12512198-how-to-create-custom-skills
- Provisionar skills para la organización: https://support.claude.com/en/articles/13119606-provision-and-manage-skills-for-your-organization
- Skills en Claude Code: https://code.claude.com/docs/en/skills
- Agent Skills (visión general): https://docs.claude.com/en/docs/agents-and-tools/agent-skills/overview
