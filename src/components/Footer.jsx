import { Link } from "react-router-dom";
import { navLinks, site, WHATSAPP_DISPLAY, WHATSAPP_NUMBER } from "../data/site.js";
import { services as serviceItems } from "../data/services.js";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink">
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
                  className="text-sm text-paper/80 transition-colors hover:text-gold"
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
                  to="/services"
                  className="text-sm text-paper/80 transition-colors hover:text-gold"
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
                  className="text-sm text-paper/80 transition-colors hover:text-gold"
                  aria-label={social.label}
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container-site flex flex-col gap-4 border-t border-line py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} GEMCOP. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="/privacy" className="hover:text-gold">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-gold">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
