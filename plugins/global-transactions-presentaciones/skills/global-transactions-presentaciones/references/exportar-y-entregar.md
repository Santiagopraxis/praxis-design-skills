# Exportar y entregar

## 1. Carpeta de trabajo

La plantilla usa rutas relativas a la carpeta de la skill (`assets/...`, `templates/runtime.js`). Dos formas válidas:
- Trabajar el `deck.html` en cualquier carpeta y empaquetar con `--root <carpeta-de-la-skill>`.
- O copiar la carpeta de la skill completa a una carpeta de trabajo y crear el deck en su raíz.

En Claude.ai la skill suele estar montada en una ruta de solo lectura (p. ej. `/mnt/skills/user/global-transactions-presentaciones/`): crea el deck en tu carpeta de trabajo y usa `--root` apuntando ahí.

## 2. Empaquetar (HTML único offline)

```bash
python3 <skill>/scripts/empaquetar.py deck.html "GT_Cliente.html" --root <skill>
```
Resultado: un solo `.html` con todo embebido (imágenes, SVG, MP4, JS). Funciona sin internet, por correo o USB. Controles: ← → / espacio / clic / swipe, Inicio/Fin, **F** o botón = pantalla completa, `#5` en la URL abre la diapositiva 5. Si el script imprime "no encontrados", arregla esas rutas antes de entregar. Tamaño objetivo < 15 MB.

## 3. Verificar con Chromium

```bash
python3 <skill>/scripts/exportar.py "GT_Cliente.html" --png capturas/
```
Genera `light-NN.png` y `dark-NN.png` tras dejar terminar las animaciones. Revisa cada imagen (ábrela y mírala): desbordes, superposiciones, logos invisibles (¿versión blanca sobre papel?), placeholders `{{…}}` y que claro/oscuro se vean idénticos. Requiere `playwright` de Python (`pip install playwright`); si no hay, usa cualquier Chromium headless con `--screenshot`.

## 4. PDF

```bash
python3 <skill>/scripts/exportar.py "GT_Cliente.html" --pdf "GT_Cliente.pdf"
```
Usa el modo impresión de la plantilla: una diapositiva por página 1920×1080, sin animaciones (por eso todo debe ser visible por defecto). Los videos salen como su `poster`. Sin Chromium disponible: abrir el HTML en Chrome → Imprimir → Guardar como PDF, márgenes "Ninguno", "Gráficos de fondo" activado.

## 5. Entrega

- **Claude.ai**: entrega el `.html` y el `.pdf` como archivos descargables. Si el usuario quiere un enlace, publícalo como Artifact (privado por defecto) — no lo publiques si contiene datos confidenciales del cliente sin que el usuario lo pida.
- **Claude Code**: deja `GT_Cliente.html`, `GT_Cliente.pdf` y `capturas/` en la carpeta del proyecto e indica las rutas.
- Nombra los archivos `GT_<Cliente>_<tema>_<AAAA-MM>.html/pdf`.
