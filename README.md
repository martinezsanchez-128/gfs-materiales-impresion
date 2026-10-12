# GFS · Gran Formato y Soluciones

Propuesta de sitio web responsive para un proveedor de materiales de impresión digital.

## Desarrollo

Requiere Node.js 20.19+ o 22.12+.

```sh
npm ci
npm run dev
```

## Producción

```sh
npm run build
npm run preview
```

El resultado se genera en `dist/` y puede alojarse en un servicio de hosting estático.

## Organización

- `src/components/`: navegación, hero, catálogo, carrete y WhatsApp.
- `src/components/ui/`: componente canvas de bandada que forma GFS.
- `src/content.ts`: textos, materiales y enlaces de cotización.
- `src/styles.css`: diseño, animaciones y responsive.
- `public/assets/`: logo original y recursos gráficos.
- `ARCHITECTURE.md`: arquitectura, fuentes y contenido pendiente de validar.

React, TypeScript, Vite y Tailwind CSS 4. Estructura preparada para shadcn.

El contenido comercial y las imágenes generadas son una propuesta. Las identidades de clientes, el catálogo y las condiciones de venta necesitan validación del negocio.
