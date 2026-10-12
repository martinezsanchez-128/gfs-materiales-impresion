import { useState } from "react";
import { Menu, X } from "lucide-react";
const links = [
  ["Materiales", "#materiales"],
  ["Aplicaciones", "#aplicaciones"],
  ["Nosotros", "#nosotros"],
  ["Contacto", "#contacto"],
];
export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <a href="#inicio" className="logo" aria-label="GFS, inicio">
        <img src="./assets/logo.png" alt="Gran Formato y Soluciones" />
      </a>
      <nav
        aria-label="Navegación principal"
        className={open ? "nav open" : "nav"}
      >
        {links.map(([name, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {name}
          </a>
        ))}
      </nav>
      <button
        className="menu-toggle"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
      >
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}
