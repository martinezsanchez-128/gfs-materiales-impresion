import { ArrowDown } from "lucide-react";
import MurmurationWordmark from "./ui/murmuration-wordmark";
import { quoteLink } from "../content";
export default function Hero() {
  return (
    <section
      id="inicio"
      className="hero"
      aria-label="Gran Formato y Soluciones"
    >
      <MurmurationWordmark
        word="GFS"
        preset="dusk"
        height="100%"
        birds={4200}
        flyFor={4}
        holdFor={6}
        reeds={false}
      />
      <div className="hero-top">
        <span className="eyebrow light">
          <i /> MATERIALES PARA IMPRESIÓN DIGITAL
        </span>
        <span className="hero-note">
          De una idea.
          <br />A infinitas posibilidades.
        </span>
      </div>
      <div className="hero-brand">
        <h1>Gran Formato y Soluciones</h1>
        <p>El material correcto transforma todo.</p>
      </div>
      <div className="hero-bottom">
        <p>
          Tu creatividad no tiene límites.
          <br />
          Tus materiales tampoco deberían.
        </p>
        <a className="button dark" href="#materiales">
          Explora los materiales
        </a>
        <a
          className="scroll-link"
          href="#materiales"
          aria-label="Descubrir materiales"
        >
          <ArrowDown size={18} />
        </a>
      </div>
      <a
        className="hero-consult"
        href={quoteLink()}
        target="_blank"
        rel="noreferrer"
      >
        Hablemos de tu proyecto ↗
      </a>
    </section>
  );
}
