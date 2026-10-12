import {
  ArrowUpRight,
  MoveRight,
  Layers,
  Store,
  Truck,
  Mail,
  Check,
  Plus,
} from "lucide-react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Materials from "./components/Materials";
import WhatsApp from "./components/WhatsApp";
import Clients from "./components/Clients";
import { applications, quoteLink } from "./content";
export default function App() {
  return (
    <>
      <a className="skip-link" href="#materiales">
        Saltar al contenido
      </a>
      <Header />
      <main>
        <Hero />
        <div className="intro-strip">
          <span>Materiales que inspiran.</span>
          <span>Ideas que trascienden.</span>
          <span>
            Soluciones a tu medida. <MoveRight size={22} />
          </span>
        </div>
        <Materials />
        <section id="aplicaciones" className="applications section">
          <span className="eyebrow">02 / DE LA IDEA A LA APLICACIÓN</span>
          <div className="application-heading">
            <h2>
              Piensa en grande.
              <br />
              <span>Imagina dónde.</span>
            </h2>
            <p>
              Un material. Muchas posibilidades.
              <br />
              Encuentra el punto de partida para tu siguiente proyecto.
            </p>
          </div>
          <div className="application-grid">
            {applications.map((a, i) => {
              const Icon = [Layers, Store, Truck][i];
              return (
                <article key={a.title}>
                  <Icon size={30} strokeWidth={1.3} />
                  <span className="application-number">0{i + 1}</span>
                  <h3>{a.title}</h3>
                  <p>{a.text}</p>
                  <a href={quoteLink(a.title)} target="_blank" rel="noreferrer">
                    Encuentra tu material <ArrowUpRight size={17} />
                  </a>
                </article>
              );
            })}
          </div>
        </section>
        <section id="nosotros" className="about section">
          <div className="about-image">
            <img
              src="./assets/workshop.png"
              alt="Escena ilustrativa de un taller de impresión digital de gran formato"
              loading="lazy"
            />
            <span>EL INICIO DE ALGO GRANDE.</span>
          </div>
          <div className="about-copy">
            <span className="eyebrow">03 / SOMOS GFS</span>
            <h2>
              Detrás de cada
              <br />
              gran impresión,
              <br />
              <span>una buena elección.</span>
            </h2>
            <p>
              Somos Gran Formato y Soluciones, especialistas en materiales para
              impresión digital. Creemos que una idea cobra fuerza cuando
              encuentra el soporte adecuado.
            </p>
            <p>
              Cuéntanos qué quieres crear. Empecemos por tu aplicación, el
              acabado que buscas y las necesidades de tu proyecto.
            </p>
            <div className="about-values">
              <span>
                <Check size={17} /> Materiales para tus ideas
              </span>
              <span>
                <Check size={17} /> Una conversación, una solución
              </span>
            </div>
            <a className="text-link" href="#contacto">
              Conoce cómo podemos ayudarte <ArrowUpRight size={18} />
            </a>
          </div>
        </section>
        <Clients />
        <section className="faq section">
          <div>
            <span className="eyebrow">ANTES DE IMPRIMIR</span>
            <h2>
              Buenas preguntas.
              <br />
              <span>Mejores decisiones.</span>
            </h2>
          </div>
          <div className="faq-list">
            {[
              [
                "¿Cómo elijo el material para mi proyecto?",
                "Empieza por el lugar de instalación, el tipo de superficie, la duración esperada y tu sistema de impresión. Comparte estos detalles con un asesor para revisar las opciones.",
              ],
              [
                "¿Qué información necesito para cotizar?",
                "Indica el material o aplicación, las medidas, la cantidad y el acabado que buscas. Si aún no sabes qué elegir, cuéntanos tu idea y tu equipo de impresión.",
              ],
              [
                "¿Puedo consultar disponibilidad y entrega?",
                "Sí. Escríbenos por WhatsApp para confirmar existencias, presentaciones, precios y opciones de entrega para tu pedido.",
              ],
            ].map(([q, a]) => (
              <details key={q}>
                <summary>
                  {q}
                  <Plus size={19} />
                </summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </section>
        <section id="contacto" className="contact section">
          <div>
            <span className="eyebrow">04 / HAGAMOS QUE SUCEDA</span>
            <h2>
              Tu próxima gran idea
              <br />
              empieza <em>aquí.</em>
            </h2>
            <p>
              Cuéntanos qué tienes en mente.
              <br />
              Encontremos juntos el material para hacerlo realidad.
            </p>
          </div>
          <div className="contact-actions">
            <a
              className="button peach"
              href={quoteLink()}
              target="_blank"
              rel="noreferrer"
            >
              Conversemos por WhatsApp <ArrowUpRight size={20} />
            </a>
            <a href="mailto:maritza@granformatoysoluciones.mx">
              <Mail size={18} /> maritza@granformatoysoluciones.mx
            </a>
            <span>Consulta materiales, disponibilidad y cotizaciones.</span>
          </div>
        </section>
      </main>
      <footer>
        <a href="#inicio">
          <img src="./assets/logo.png" alt="GFS" />
        </a>
        <p>Materiales para ideas sin límites.</p>
        <span>© {new Date().getFullYear()} Gran Formato y Soluciones</span>
        <a href="#inicio">Volver arriba ↑</a>
      </footer>
      <WhatsApp />
    </>
  );
}
