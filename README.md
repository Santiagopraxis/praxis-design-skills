# Praxis · Skills de diseño

Marketplace privado con dos skills para que Claude arme presentaciones con la identidad de Praxis:

| Plugin | Para qué sirve |
| --- | --- |
| `global-transactions-presentaciones` | Propuestas de Global Transactions / Karpay (pagos inmediatos, rieles, bancos) |
| `fluxone-presentaciones` | Presentaciones de fluXOne (cobrar, pagar, conciliar, decidir) |

Cada skill trae su guía, design system, iconos, fuentes, plantilla y un ejemplo.

> **Uso interno.** Este repo contiene logos e identidad de Praxis y sus marcas. Mantenerlo **privado**.

## Instalar en Claude Code

Necesitas acceso a este repo y GitHub configurado en tu equipo (por ejemplo `gh auth login` y luego `gh auth setup-git`).

```
/plugin marketplace add OWNER/praxis-design-skills
/plugin install global-transactions-presentaciones@praxis-design
/plugin install fluxone-presentaciones@praxis-design
```

Para recibir actualizaciones: `/plugin marketplace update praxis-design`, o activa **Enable auto-update** en `/plugin` → Marketplaces.

## Instalar en claude.ai / Cowork

Customize → Plugins → Add → Add marketplace → Add from a repository → `OWNER/praxis-design-skills`.

Alternativa sin GitHub: descarga la carpeta de la skill (`plugins/<nombre>/skills/<nombre>`), comprímela en .zip y súbela en Customize → Skills → "+" → Upload a skill.

## Actualizar las skills

Edita los archivos dentro de `plugins/<nombre>/skills/<nombre>/` y haz push. Quien tenga el marketplace instalado recibe los cambios al actualizar.
