# Propuestas de mejora — Portafolio Marcos Muñoz

Revisión del código y contenido actual (`src/`) hecha el 2026-08-25. Va dividido en 4 partes: errores reales de código, opinión sobre los colores, qué le falta y qué sobra.

---

## 🐞 Errores de código encontrados

### 1. El ícono de GitHub en "Ver Código" es invisible
`src/pages/index.astro:329`
```astro
<IconGithub class="w-10 h-10 bg-black" />
```
El SVG de `IconGithub` no tiene `fill="currentColor"`, así que su relleno por defecto es **negro**. Al agregarle `bg-black` como fondo, queda un ícono negro sobre un fondo negro → **invisible**. En los otros dos usos del mismo ícono (círculos de redes sociales) no pasa porque no llevan `bg-black`.
**Fix sugerido:** sacar `bg-black` de esa línea, o agregarle `fill-current text-white` si querías un cuadrado negro con el logo en blanco.

### 2. "Demo no disponible" es un link roto (clickeable, no lleva a ningún lado)
`src/pages/index.astro:319-326`
```astro
{proyecto.links.website ? (
  <a href={proyecto.links.website} ...>Ver Demo</a>
): 
<a href={proyecto.links.website} ...>Demo no disponible</a>}
```
Cuando el proyecto no tiene `website` (le pasa a "Generador de Certificados" en `proyectos.json`), el `else` **sigue siendo un `<a>`** con `href={undefined}`. Visualmente parece un link normal (mismo estilo, `hover:underline`) pero al hacer clic no hace nada útil, o en algunos navegadores recarga la página actual. Debería ser un `<span>` sin estilo de link, o directamente no mostrar nada.

### 3. El email de contacto tiene una "ñ" — probablemente inválido
`src/pages/index.astro:420` (y también en `Layout.astro`, `AGENTS.md`)
```
marcosantonio.muñozg@gmail.com
```
Gmail no permite tildes ni "ñ" en la parte antes del `@`. Ese correo, tal como está escrito, no existe / nadie te puede escribir ahí. Probablemente se coló un error de tipeo o de codificación de caracteres en algún momento. Revisa cuál es tu Gmail real y corrígelo en las 3 partes del código donde aparece.

### 4. El menú móvil no se cierra al tocar un link
`src/pages/index.astro:34-52`
El menú hamburguesa usa el truco de `<input type="checkbox">` + CSS (`peer-checked`), sin JavaScript. Funciona para abrir/cerrar con el botón, pero si el usuario toca "Proyectos" desde el menú abierto, el menú **se queda abierto** tapando la pantalla hasta que lo cierra a mano. Se arregla con una línea de JS que desmarque el checkbox al hacer clic en un `<a>`, o cambiando a un checkbox por link.

### 5. Dato "sobrante" que puede confundir: `docs: "#"` en cada proyecto
`src/data/proyectos.json` — todas las entradas tienen `"docs": "#"`, un campo que **el template nunca lee**. No rompe nada, pero es código muerto en los datos; si mañana alguien lo intenta usar pensando que ya está conectado, no va a pasar nada.

---

## 🎨 Sobre los colores

Mirando `src/styles/global.css`, hay una desconexión entre lo que dicen los comentarios y lo que realmente se ve en pantalla:

| Variable | Comentario dice | Color real (oklch) | Lo que se ve en verdad |
|---|---|---|---|
| `--color-primary` | "rojo vino oscuro" | `oklch(0.58 0.20 300)` | Magenta/púrpura — el hue 300 no es rojo, es violeta-magenta |
| `--color-accent` | "violeta vibrante" | `oklch(0.70 0.16 180)` | **Cian/turquesa** — hue 180 es celeste-verdoso, no violeta |
| `--color-secondary` | "púrpura clásico" | `oklch(0.72 0.14 340)` | Rosado/magenta, más cerca de fucsia que de púrpura |

`--color-accent` es el que más se usa en todo el sitio (44 veces: botones "Contáctame", precios, bordes, íconos de servicios). Si tu intención era que el sitio se viera "violeta", en realidad hoy el color protagonista es **turquesa/cian**, no violeta. Puede que te guste igual (turquesa + magenta puede quedar bien), pero vale la pena que lo mires en el navegador y confirmes si es el resultado que querías — hoy el código y la intención original no coinciden.

Además, quedaron **4 colores definidos y nunca usados**: `--color-dark`, `--color-light`, `--color-text`, `--color-text-light`, y `--color-mint-500`. Es paleta muerta — no afecta el sitio, pero ensucia el archivo de tema.

**Mi opinión:** el sitio ya tiene una paleta usable (magenta + cian + gris), pero conviene decidir una paleta a propósito (2-3 colores, no 9 variables de las que solo usás 3) y renombrar/actualizar los comentarios para que digan lo que realmente es. Si querés, en el próximo paso te armo 2-3 paletas nuevas para elegir.

---

## ➕ Qué le falta

Pensando en que el sitio ahora vive de vender desarrollo web a pequeños negocios en San Bernardo, esto es lo que más ayudaría a convertir visitas en clientes:

- **Testimonios / reseñas de clientes.** Es lo que más falta — sin `formateo` que generaba confianza rápida (arreglo tu PC = resultado tangible), ahora todo depende de que confíen en un desarrollador para un proyecto más caro. 2-3 testimonios (aunque sean cortos, de WhatsApp) suben mucho la conversión.
- **Botones de contacto clickeables:** el email y el teléfono en "Información de contacto" son texto plano, no `mailto:` ni `tel:`. En celular, la gente espera tocar el número y que abra WhatsApp/marcador.
- **Tiempos de entrega estimados** en cada tarjeta de precio (ej. "Landing Page — Desde $80.000 · Entrega en 5-7 días"). Ayuda a que la gente no tenga que preguntar.
- **Página 404 personalizada** — hoy usa la de Astro por defecto.
- **Google Analytics / Plausible** o algo similar — hoy no hay forma de saber cuánta gente visita el sitio o de dónde viene.
- **Favicon más completo** (apple-touch-icon, manifest.json) para que se vea bien si alguien agrega el sitio a su pantalla de inicio en el celular.
- Opcional: una sección corta de **"Cómo trabajo"** (3-4 pasos: cotización → diseño → desarrollo → entrega) — genera confianza mostrando que hay un proceso, no que se improvisa.

## ➖ Qué sobra

- `categoryColors` en el frontmatter de `index.astro` — está definido pero nunca se usa; el template repite la misma lógica a mano con un ternario largo (líneas ~197-210). Sobra uno de los dos.
- `public/favicon.svg` — está en el proyecto pero `Layout.astro` usa `/icono-portafolio2.svg`, no ese archivo. Archivo huérfano.
- Los 5 colores del tema que nunca se usan (ver tabla arriba).
- El campo `"docs": "#"` en cada proyecto de `proyectos.json` (ver error #5).

---

## Prioridad sugerida

1. **Ahora (son bugs reales, 10 min):** ícono de GitHub invisible, link "Demo no disponible" roto, email con "ñ".
2. **Esta semana:** decidir la paleta de color a propósito, agregar `mailto:`/`tel:`, arreglar el menú móvil.
3. **Cuando tengas tiempo:** testimonios, sección "cómo trabajo", analytics, favicon completo, limpiar el CSS/datos muertos.

¿Querés que arregle ahora los 3 bugs de la sección 1?
