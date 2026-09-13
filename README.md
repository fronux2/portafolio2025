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
- **Blog** con 3 posts optimizados para SEO (nuevos 12/09/2025)

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
│   │   ├── Layout.astro           # Shell HTML con SEO y OG tags
│   │   └── BlogLayout.astro       # Layout para posts del blog
│   ├── pages/
│   │   ├── index.astro            # Página única del portafolio
│   │   ├── 404.astro              # Página 404
│   │   └── blog/
│   │       ├── index.astro        # Lista de posts del blog
│   │       ├── como-crear-tienda-online.astro
│   │       ├── cuanto-cuesta-pagina-web.astro
│   │       └── landing-page-vs-sitio-web.astro
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

## Blog (SEO)

**Agregado:** 12 de septiembre de 2025

El blog está en `/src/pages/blog/` y contiene 3 posts optimizados para SEO:

### Posts publicados:
1. **"Cómo Crear una Tienda Online en 2025"** (1,800 palabras)
   - URL: `/blog/como-crear-tienda-online`
   - Palabras clave: tienda online, crear ecommerce, vender online Chile
   - Tiempo de lectura: 8 minutos

2. **"¿Cuánto Cuesta Una Página Web en Chile?"** (1,600 palabras)
   - URL: `/blog/cuanto-cuesta-pagina-web`
   - Palabras clave: precio web Chile, costo desarrollo, presupuesto
   - Tiempo de lectura: 6 minutos

3. **"Landing Page vs Sitio Web: ¿Cuál Necesitas?"** (1,400 palabras)
   - URL: `/blog/landing-page-vs-sitio-web`
   - Palabras clave: landing page, sitio web, diferencia
   - Tiempo de lectura: 5 minutos

### Agregar nuevos posts:
Crear un archivo `.astro` en `/src/pages/blog/` usando `BlogLayout.astro`:

```astro
---
import BlogLayout from '../../layouts/BlogLayout.astro';
---

<BlogLayout 
  title="Título del post"
  description="Descripción del post"
  publishedDate="2025-09-12"
  readingTime="5 min"
>
  <h2>Sección 1</h2>
  <p>Contenido...</p>
</BlogLayout>
```

---

## Despliegue

El sitio se despliega automáticamente en **Netlify** al hacer push a `main` en [GitHub](https://github.com/fronux2/portafolio2025).

---

## Contacto

- [GitHub](https://github.com/fronux2)
- [LinkedIn](https://www.linkedin.com/in/marcos-mu%C3%B1oz-gonzalez-a32888270/)
- [WhatsApp](https://wa.me/56926475227)
