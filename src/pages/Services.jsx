import { services } from "../data/services.js";
import Seo from "../components/Seo.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import ServiceCard from "../components/ServiceCard.jsx";

export default function Services() {
  return (
    <>
      <Seo
        title="Services — GEMCOP"
        description="GEMCOP provides Brand Building, Performance Marketing, and Web & AI Solutions."
      />
      <section className="container-site py-20 sm:py-28 lg:py-32">
        <SectionHeading
          eyebrow="Our services"
          title="Our services"
          description="Brand Building, Performance Marketing, and Web & AI Solutions."
        />
        <div className="mt-16 border-t border-line">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </section>
    </>
  );
}
