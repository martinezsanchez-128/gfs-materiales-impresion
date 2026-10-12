export const whatsapp = "https://wa.me/5218118247217";
export function quoteLink(material = "materiales para impresión digital") {
  return `${whatsapp}?text=${encodeURIComponent(`Hola GFS, me gustaría recibir asesoría y cotizar ${material}.`)}`;
}
export const materials = [
  {
    id: "vinil",
    number: "01",
    title: "Viniles",
    label: "VERSATILIDAD QUE SE ADHIERE",
    text: "Dale vida a tus gráficos sobre muros, cristales y superficies. Explora opciones de vinil para comunicación visual y proyectos de rotulación.",
    tags: ["Rotulación", "Decoración", "Publicidad"],
    position: "20% 50%",
  },
  {
    id: "lona",
    number: "02",
    title: "Lonas",
    label: "IDEAS QUE SE VEN EN GRANDE",
    text: "Un soporte para mensajes que necesitan destacar. Elige el material adecuado para banners, anuncios y comunicación de gran formato.",
    tags: ["Banners", "Exteriores", "Eventos"],
    position: "50% 50%",
  },
  {
    id: "especiales",
    number: "03",
    title: "Materiales especiales",
    label: "EL ACABADO HACE LA DIFERENCIA",
    text: "Cada aplicación tiene sus propios retos. Te ayudamos a explorar soportes y acabados para llevar tu proyecto al siguiente nivel.",
    tags: ["Exhibición", "Señalética", "Acabados"],
    position: "85% 50%",
  },
];
export const applications = [
  {
    title: "Publicidad que destaca",
    text: "Banners, anuncios y gráficos de gran formato que hacen visible tu mensaje.",
    icon: "billboard",
  },
  {
    title: "Espacios con identidad",
    text: "Gráficos para interiores, escaparates y puntos de venta con personalidad.",
    icon: "store",
  },
  {
    title: "Marcas en movimiento",
    text: "Materiales para explorar proyectos de rotulación y comunicación vehicular.",
    icon: "truck",
  },
];
