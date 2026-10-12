import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";

export default function Clients() {
  const track = useRef<HTMLDivElement>(null);
  const group = useRef<HTMLDivElement>(null);
  const offset = useRef(0);
  const [paused, setPaused] = useState(false);
  const [direction, setDirection] = useState(-1);

  function move(distance: number) {
    const width = group.current?.getBoundingClientRect().width ?? 0;
    if (!width || !track.current) return;
    offset.current = (((offset.current + distance) % width) + width) % width;
    track.current.style.transform = `translateX(${-offset.current}px)`;
  }

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let previous = 0;
    function animate(time: number) {
      if (previous && !paused && !preference.matches) {
        move(-direction * Math.min(time - previous, 50) * 0.032);
      }
      previous = time;
      frame = requestAnimationFrame(animate);
    }
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [paused, direction]);

  function changeDirection(next: number) {
    setDirection(next);
    move(next === -1 ? 160 : -160);
  }

  return (
    <section
      className="clients"
      aria-label="Recursos de clientes del sitio original"
    >
      <div className="clients-title">
        <span className="eyebrow">CONEXIONES QUE NOS INSPIRAN</span>
        <h2>Nuestros clientes</h2>
      </div>
      <div className="marquee">
        <div className="marquee-track controlled" ref={track}>
          {[0, 1, 2].map((copy) => (
            <div
              className="logo-group"
              key={copy}
              ref={copy === 0 ? group : undefined}
              aria-hidden={copy !== 0}
            >
              {[1, 2, 3, 4].map((number) => (
                <img
                  src={`/assets/client-${number}.svg`}
                  alt={
                    copy
                      ? ""
                      : `Recurso de cliente ${number} del sitio original`
                  }
                  key={number}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="carousel-controls" aria-label="Controles del carrete">
        <button
          onClick={() => changeDirection(-1)}
          aria-label="Mover carrete a la izquierda"
          title="Mover a la izquierda"
        >
          <ArrowLeft size={16} strokeWidth={1.4} />
        </button>
        <button
          onClick={() => setPaused(!paused)}
          aria-label={paused ? "Reproducir carrete" : "Pausar carrete"}
          title={paused ? "Reproducir" : "Pausar"}
          aria-pressed={paused}
        >
          {paused ? (
            <Play size={15} strokeWidth={1.4} />
          ) : (
            <Pause size={15} strokeWidth={1.4} />
          )}
        </button>
        <button
          onClick={() => changeDirection(1)}
          aria-label="Mover carrete a la derecha"
          title="Mover a la derecha"
        >
          <ArrowRight size={16} strokeWidth={1.4} />
        </button>
      </div>
      <p className="client-note">
        Recursos gráficos del sitio actual. Identidades de clientes pendientes
        de validación.
      </p>
    </section>
  );
}
