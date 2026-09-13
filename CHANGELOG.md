# Changelog

Todos los cambios principales del proyecto documentados aquí.

---

## [En Progreso] — SEO y Blog

### Sesión: 12 de Septiembre 2025

**Objetivo:** Mejorar visibilidad en Google. El sitio tenía solo 5 impresiones en Search Console y necesitaba contenido para posicionar.

#### ✅ Completado

1. **Creación del Blog** 
   - Agregada carpeta `/src/pages/blog/`
   - Creado `BlogLayout.astro` con estilos personalizados
   - Creada página principal del blog `/blog`

2. **3 Posts SEO Optimizados** (~5,000 palabras totales)
   
   - **Post 1:** "Cómo Crear una Tienda Online en 2025" (1,800 palabras)
     - Palabras clave: tienda online, crear ecommerce, vender online
     - Secciones: qué es, pasos, plataformas, costos, errores comunes
     - URL: `/blog/como-crear-tienda-online`
   
   - **Post 2:** "¿Cuánto Cuesta Una Página Web en Chile?" (1,600 palabras)
     - Palabras clave: precio web Chile, costo desarrollo, presupuesto
     - Secciones: tipos de webs, costos, qué incluye, factores
     - URL: `/blog/cuanto-cuesta-pagina-web`
   
   - **Post 3:** "Landing Page vs Sitio Web: ¿Cuál Necesitas?" (1,400 palabras)
     - Palabras clave: landing page, sitio web, diferencia
     - Secciones: definiciones, características, comparación, recomendaciones
     - URL: `/blog/landing-page-vs-sitio-web`

3. **Mejoras SEO**
   - Agregado enlace a blog en navegación principal
   - Meta descriptions optimizadas por post
   - Estructura H2/H3 correcta
   - CTAs para conversión en cada post
   - Links internos a página principal

4. **Correcciones Técnicas**
   - ✅ Reemplazado `@apply` con CSS puro para Tailwind CSS v4
   - ✅ Ajustados colores de texto a blanco (#ffffff) para mejor contraste en tema oscuro
   - ✅ Verificado build local sin errores

#### 📊 Impacto Esperado

- Contenido enfocado en búsquedas reales que hacen los clientes
- ~5,000 palabras de contenido nuevo
- Posicionamiento esperado en 2-4 semanas para palabras clave como:
  - "cómo crear tienda online Chile"
  - "precio desarrollo web"
  - "landing page vs sitio web"

#### 🔧 Commits Realizados

```
3af5014 - Mejora: Cambia todo el texto a blanco (#ffffff) para mejor contraste
ecf17dd - Mejora: Aumenta contraste de texto en blog para mejor legibilidad
005ee4b - Fix: Reemplaza @apply con CSS puro para Tailwind v4 en BlogLayout
f789e6d - Agrega blog con 3 posts optimizados para SEO
```

#### 📝 Próximos Pasos

1. **Monitorear en Google Search Console** (2-4 semanas)
   - Verificar que los posts se indexen
   - Ver palabras clave que traen tráfico
   - Ajustar contenido según datos

2. **Crear más posts** (regularmente)
   - Objetivo: 1 post cada 2-4 semanas
   - Temas sugeridos:
     - "10 errores al crear tu primera web"
     - "SEO para pequeños negocios: guía práctica"
     - "Hosting vs dominio: qué es cada uno"
     - "Cómo elegir colores para tu web"

3. **Optimizaciones Adicionales**
   - Crear página de servicios detallada por tipo
   - Expandir FAQ con más preguntas
   - Agregar testimonios/casos de éxito (si hay clientes)

---

## [v1.0.0] — Lanzamiento Base

### Características Iniciales
- Single-page design con scroll navigation
- Portafolio con proyectos destacados
- Formulario de contacto funcional
- Integración con WhatsApp
- SEO base (meta tags, Open Graph)
- Diseño responsive
- Modo oscuro

### Stack
- Astro 5
- Tailwind CSS 4
- TypeScript
- Netlify Deploy

---

## Notas de Desarrollo

### Tailwind CSS v4
- Los `@apply` en estilos de componentes requieren CSS puro
- Usar equivalentes directo: `@apply text-3xl` → `font-size: 1.875rem; line-height: 2.25rem;`

### Estructura de Blog
- Usar `BlogLayout.astro` como template para todos los posts
- Los posts son archivos `.astro` con contenido HTML
- Las URLs se generan automáticamente según el nombre del archivo

### SEO
- Todos los posts deben tener meta description clara
- Estructura: H1 (título), H2 (secciones principales), H3 (subsecciones)
- Incluir CTAs al final de cada post
- Links internos ayudan al SEO interno
