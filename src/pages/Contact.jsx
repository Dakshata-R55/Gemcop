import { site } from "../data/site.js";
import Seo from "../components/Seo.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import ContactForm from "../components/ContactForm.jsx";

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact — GEMCOP"
        description="Contact GEMCOP. Email, phone, and location details will be added when provided."
      />
      <section className="container-site grid gap-14 py-16 sm:py-24 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Start a project."
            description="Contact details below are placeholders until GEMCOP provides official information. The form is UI-only."
          />
          <dl className="mt-10 space-y-6">
            <div>
              <dt className="eyebrow">Email</dt>
              <dd className="mt-2 text-paper/80">{site.contact.email}</dd>
            </div>
            <div>
              <dt className="eyebrow">Phone</dt>
              <dd className="mt-2 text-paper/80">{site.contact.phone}</dd>
            </div>
            <div>
              <dt className="eyebrow">Location</dt>
              <dd className="mt-2 text-paper/80">{site.contact.location}</dd>
            </div>
            <div>
              <dt className="eyebrow">Social</dt>
              <dd className="mt-3 flex flex-wrap gap-4">
                {site.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="text-sm text-paper/80 hover:text-gold"
                    aria-label={`${social.label} — placeholder link`}
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
