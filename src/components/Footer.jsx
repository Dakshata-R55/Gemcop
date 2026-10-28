import { Link } from "react-router-dom";
import { navLinks, site, WHATSAPP_DISPLAY, WHATSAPP_NUMBER } from "../data/site.js";
import { services as serviceItems } from "../data/services.js";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-ink">
      <div className="container-site grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div className="max-w-xs">
          <Link to="/" className="inline-block">
            <img
              src={site.logo}
              alt="GEMCOP"
              className="h-9 w-auto object-contain object-left"
              style={{ filter: "invert(1)" }}
            />
          </Link>
          <p className="mt-5 text-sm leading-relaxed text-muted">
            {site.descriptionPlaceholder}
          </p>
        </div>

        <div>
          <p className="eyebrow">Navigate</p>
          <ul className="mt-5 space-y-3">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm text-paper/80 transition-colors duration-500 hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow">Services</p>
          <ul className="mt-5 space-y-3">
            {serviceItems.map((service) => (
              <li key={service.id}>
                <Link
                  to={service.href || `/services/${service.id}`}
                  className="text-sm text-paper/80 transition-colors duration-500 hover:text-gold"
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow">Contact</p>
          <ul className="mt-5 space-y-3 text-sm text-muted">
            <li>
              <a
                href={`mailto:${site.contact.email}`}
                className="text-paper/80 transition-colors hover:text-gold"
              >
                {site.contact.email}
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="text-paper/80 transition-colors hover:text-gold"
              >
                WhatsApp {WHATSAPP_DISPLAY}
              </a>
            </li>
          </ul>
          <ul className="mt-6 flex flex-wrap gap-4">
            {site.socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-paper/80 transition-colors duration-500 hover:text-gold"
                  aria-label={social.label}
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Animated Montserrat wordmark ── */}
      <style>{`
        @keyframes dashMove {
          from { stroke-dashoffset: 0; }
          to   { stroke-dashoffset: -48; }
        }
        .gemcop-march {
          animation: dashMove 6s linear infinite;
        }
      `}</style>

      {/* Wordmark block — no top border, sits flush after nav grid */}
      <div className="relative overflow-hidden" aria-hidden="true">
        {/* SVG wordmark */}
        <svg
          viewBox="0 0 1400 280"
          className="w-full block"
          style={{ height: "clamp(5rem,22vw,17rem)" }}
          preserveAspectRatio="xMidYMax meet"
        >
          <defs>
            <filter id="gemcop-shadow" x="-5%" y="-5%" width="110%" height="140%">
              {/* Drop shadow 20% below the text baseline */}
              <feDropShadow
                dx="0"
                dy="0.2em"
                stdDeviation="6"
                floodColor="rgba(0,0,0,0.85)"
              />
            </filter>
          </defs>

          {/* White marching dashes — square-ended for crisp edges */}
          <text
            x="50%"
            y="92%"
            textAnchor="middle"
            fill="none"
            stroke="rgba(255,255,255,0.45)"
            strokeWidth="1.8"
            strokeDasharray="14 10"
            strokeLinecap="butt"
            fontFamily="'Archivo', sans-serif"
            fontWeight="800"
            fontSize="260"
            letterSpacing="-4"
            filter="url(#gemcop-shadow)"
            className="gemcop-march"
          >
            GEMCOP
          </text>
        </svg>

        {/* Bottom shadow fade — increased to 75% for deeper fade */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 w-full"
          style={{
            height: "75%",
            background: "linear-gradient(to bottom, transparent 0%, #0a0a0a 100%)",
          }}
        />
      </div>

      {/* ── Legal bar — below the wordmark ── */}
      <div className="container-site relative z-[1] flex flex-col gap-4 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} GEMCOP. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="/privacy" className="hover:text-gold">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-gold">
            Terms &amp; Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
