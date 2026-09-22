import { site, WHATSAPP_DISPLAY, WHATSAPP_NUMBER } from "../data/site.js";
import Seo from "../components/Seo.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import ContactForm from "../components/ContactForm.jsx";

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact — GEMCOP"
        description="Contact GEMCOP by email or WhatsApp."
      />
      <section className="container-site grid gap-14 py-16 sm:py-24 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Start a project."
            description="Reach GEMCOP by email or WhatsApp. The form is UI-only."
          />
          <dl className="mt-10 space-y-6">
            <div>
              <dt className="eyebrow">Email</dt>
              <dd className="mt-2 text-paper/80">
                <a
                  href={`mailto:${site.contact.email}`}
                  className="hover:text-gold"
                >
                  {site.contact.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow">WhatsApp</dt>
              <dd className="mt-2 text-paper/80">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gold"
                >
                  {WHATSAPP_DISPLAY}
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow">Social</dt>
              <dd className="mt-3 flex flex-wrap gap-4">
                {site.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-paper/80 hover:text-gold"
                    aria-label={social.label}
                  >
                    {social.label}
                  </a>
                ))}
              </dd>
            </div>
          </dl>
        </div>
        <div className="surface-card p-6 sm:p-10">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
