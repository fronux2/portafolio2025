# Portafolio — Marcos Muñoz

Portafolio web personal de **Marcos Muñoz**, desarrollador web en San Bernardo, Chile. Especializado en tiendas online, páginas producto y catálogos digitales.

🌐 **Sitio en vivo:** [portafoliomarcosm.netlify.app](https://portafoliomarcosm.netlify.app/)

---

## Stack

| Tecnología | Versión |
|---|---|
| [Astro](https://astro.build) | 5 |
| [Tailwind CSS](https://tailwindcss.com) | 4 |
| TypeScript | — |

Desplegado en **Netlify** con auto-deploy desde GitHub.

---

## Características

- **Single-page** con navegación hash (`#sobre-mi`, `#proyectos`, etc.)
- **SEO** con meta tags, Open Graph y canonical URL
- **Modo oscuro** nativo (clase `dark` en `<html>`)
- **Formulario de contacto** funcional con Netlify Forms
- **Botón flotante de WhatsApp**
- **Diseño responsive** y optimizado para rendimiento

---

## Estructura del proyecto

```
/
├── public/                # Archivos estáticos (favicon, imágenes)
├── src/
│   ├── components/
│   │   └── icons/         # Iconos SVG (Astro, React, Tailwind, etc.)
│   ├── data/
│   │   └── proyectos.json # Datos de los proyectos
│   ├── layouts/
│   │   └── Layout.astro   # Shell HTML con SEO y OG tags
│   ├── pages/
│   │   └── index.astro    # Página única del portafolio
│   └── styles/
│       └── global.css     # Tailwind v4 (@import "tailwindcss", @theme)
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

---

## Comandos

| Comando | Acción |
|---|---|
| `npm install` | Instalar dependencias |
| `npm run dev` | Servidor local en `localhost:4321` |
| `npm run build` | Build producción en `dist/` |
| `npm run preview` | Vista previa del build local |

---

## Agregar / modificar proyectos

Editar `src/data/proyectos.json`. Cada entrada requiere:

```json
{
  "title": "Nombre del proyecto",
  "image": "/ruta-a-imagen.jpg",
  "description": "Descripción del proyecto",
  "category": "web | ecommerce | landing",
  "tags": ["Astro", "React"],
  "links": {
    "website": "https://...",
    "github": "https://..."
  }
}
```

Los badges de categoría se renderizan automáticamente según el valor de `category`.

---

## Despliegue

El sitio se despliega automáticamente en **Netlify** al hacer push a `main` en [GitHub](https://github.com/fronux2/portafolio2025).

---

## Contacto

- [GitHub](https://github.com/fronux2)
- [LinkedIn](https://www.linkedin.com/in/marcos-mu%C3%B1oz-gonzalez-a32888270/)
- [WhatsApp](https://wa.me/56926475227)
