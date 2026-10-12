# GFS · Arquitectura y guía de desarrollo

## Objetivo
Sitio comercial para descubrir materiales para impresión digital y comenzar una cotización por WhatsApp. Propuesta visual independiente del WordPress actual.

## Arquitectura de información
1. Inicio: logo original, navegación, hero animado GFS y entrada a materiales.
2. Materiales: viniles, lonas y materiales especiales; detalle y enlace a cotización.
3. Aplicaciones: publicidad, espacios comerciales y rotulación.
4. Nosotros: presentación de la empresa basada en el contexto del cliente.
5. Clientes: SVG originales, oscurecidos con CSS, carrete de derecha a izquierda.
6. Preguntas frecuentes: orientación previa a la cotización.
7. Contacto: WhatsApp y correo del sitio original.

## Tecnología y organización
React + TypeScript + Vite. Tailwind CSS 4 instalado mediante su plugin Vite. Estructura compatible con shadcn y alias `@/*` en TypeScript. El componente suministrado vive en `src/components/ui/murmuration-wordmark.tsx`; esta carpeta centraliza los componentes reutilizables de interfaz. `components.json` contiene los alias para futuras incorporaciones con shadcn.

- `src/App.tsx`: composición de secciones.
- `src/content.ts`: contenido de productos y enlace de WhatsApp.
- `src/components/`: encabezado, hero, catálogo y WhatsApp.
- `src/components/ui/`: componente canvas del adjunto, conservado.
- `src/styles.css`: estilos organizados por sección y breakpoints.
- `public/assets/`: marca, SVG originales y fotografía generada.

## Ejecutar
`npm install`, `npm run dev`. Compilar: `npm run build`. Vista de compilación: `npm run preview`.

## Datos y validación editorial
Fuente original: https://granformatoysoluciones.mx/ y /contact/. Se recuperaron logo, SVG en “Nuestros clientes”, WhatsApp 5218118247217 y correo maritza@granformatoysoluciones.mx. Los SVG de clientes son recursos genéricos del sitio original (algunos tipo Logoipsum), por lo que se indica que sus identidades están pendientes de validación. No se atribuyen clientes reales nuevos.

Se redactó contenido comercial propuesto. Categorías, presentaciones, compatibilidad, disponibilidad y logística necesitan aprobación del negocio. No se inventaron precios, testimonios, antigüedad ni estadísticas. La fotografía es ilustrativa, no un registro del inventario.

## Imágenes
Generadas mediante la herramienta integrada ImageGen. Prompt: fotografía editorial realista de rollos de vinil blanco y lona marfil, núcleos de cartón, vinil coral parcialmente desenrollado y muestras rígidas gris carbón; plataforma de piedra clara, luz lateral suave, paleta crema, durazno y azul nocturno, sin texto, logos ni marcas de agua. Archivo: `public/assets/materials.png`. Se reutiliza en tres recortes de catálogo y en la sección de empresa.

## Responsive y accesibilidad
Diseños para escritorio, tablet y móvil; menú móvil con estado expandido; etiquetas semánticas y navegación por teclado; prefers-reduced-motion para animaciones; canvas con texto accesible; imágenes locales para evitar hotlinking.

## Antes de producción en el dominio del cliente
Validar contenido, imágenes ilustrativas, contactos y clientes. Reemplazar SVG genéricos por marcas autorizadas y completar catálogo real. No hay formulario ni backend de pedidos; la cotización se realiza directamente por WhatsApp.

Segunda imagen generada con ImageGen: escena editorial de un taller contemporáneo de impresión, impresora de rollo y gráfico abstracto coral y azul, luz natural, sin personas ni marcas. Archivo: public/assets/workshop.png. Imagen ilustrativa, no fotografía de las instalaciones reales.
