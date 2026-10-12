import { quoteLink } from "../content";
export default function WhatsApp() {
  return (
    <a
      className="whatsapp"
      href={quoteLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Cotizar por WhatsApp"
    >
      <span className="whatsapp-tooltip">¿Qué vas a crear? Hablemos.</span>
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path
          fill="currentColor"
          d="M16 .8A15.1 15.1 0 0 0 3 23.6L1 31l7.6-2a15.1 15.1 0 1 0 7.4-28.2Zm0 27.2a12 12 0 0 1-6.1-1.7l-.4-.2-4.5 1.2 1.2-4.4-.3-.5A12.1 12.1 0 1 1 16 28Zm6.6-9.1c-.4-.2-2.2-1.1-2.6-1.2-.3-.1-.6-.2-.8.2-.3.4-1 1.2-1.2 1.4-.2.3-.4.3-.8.1-.4-.2-1.6-.6-3-1.9-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.2-.8l.6-.7.4-.6c.1-.2 0-.5 0-.7l-1.2-2.8c-.3-.7-.6-.6-.8-.6h-.7c-.3 0-.7.1-.9.4-.3.3-1.1 1.1-1.1 2.7s1.1 3.1 1.3 3.3c.1.2 2.3 3.6 5.5 5 .8.3 1.4.6 1.9.7.8.3 1.5.2 2.1.2.7-.1 2.2-.9 2.5-1.8.3-.9.3-1.6.2-1.8-.1-.2-.3-.3-.7-.5Z"
        />
      </svg>
    </a>
  );
}
