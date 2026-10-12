import { useState } from "react";
import { ArrowUpRight, Check, X } from "lucide-react";
import { materials, quoteLink } from "../content";
export default function Materials() {
  const [selected, setSelected] = useState<(typeof materials)[number] | null>(
    null,
  );
  return (
    <section id="materiales" className="section materials">
      <div className="section-head">
        <div>
          <span className="eyebrow">01 / NUESTROS MATERIALES</span>
          <h2>
            Grandes ideas.
            <br />
            <span>El soporte perfecto.</span>
          </h2>
        </div>
        <p>
          Desde el primer boceto hasta la última impresión, todo empieza con
          elegir bien. Encuentra el material para lo que tienes en mente.
        </p>
      </div>
      <div className="material-grid">
        {materials.map((m) => (
          <button
            key={m.id}
            className="material-card"
            onClick={() => setSelected(m)}
          >
            <div className="material-image">
              <img
                src="./assets/materials.png"
                alt={`Composición ilustrativa de ${m.title.toLowerCase()} para impresión`}
                style={{ objectPosition: m.position }}
                loading="lazy"
              />
              <span>{m.number}</span>
              <div className="card-arrow">
                <ArrowUpRight />
              </div>
            </div>
            <div className="material-meta">
              <p>{m.label}</p>
              <h3>{m.title}</h3>
              <span>{m.tags.join(" / ")}</span>
            </div>
          </button>
        ))}
      </div>
      <p className="catalog-note">
        Selección orientativa. Consulta disponibilidad, medidas y compatibilidad
        con tu equipo.
      </p>
      {selected && (
        <div className="modal-backdrop" onClick={() => setSelected(null)}>
          <div
            role="dialog"
            aria-modal="true"
            aria-label={selected.title}
            className="material-dialog"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => {
              if (e.key === "Escape") setSelected(null);
            }}
          >
            <button
              autoFocus
              className="close-dialog"
              onClick={() => setSelected(null)}
              aria-label="Cerrar detalles"
            >
              <X />
            </button>
            <span className="eyebrow">MATERIALES / {selected.number}</span>
            <h2>{selected.title}</h2>
            <p>{selected.text}</p>
            <ul>
              {selected.tags.map((t) => (
                <li key={t}>
                  <Check size={16} />
                  {t}
                </li>
              ))}
            </ul>
            <p className="catalog-note">
              Confirma presentación, acabado, disponibilidad y compatibilidad
              con un asesor antes de comprar.
            </p>
            <a
              className="button dark"
              href={quoteLink(selected.title)}
              target="_blank"
              rel="noreferrer"
            >
              Cotizar por WhatsApp <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
