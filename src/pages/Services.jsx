import { services } from "../data/services.js";
import Seo from "../components/Seo.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import ServiceCard from "../components/ServiceCard.jsx";

export default function Services() {
  return (
    <>
      <Seo
        title="Services — GEMCOP"
        description="GEMCOP services. Detailed descriptions will be added when provided by GEMCOP."
      />
      <section className="container-site py-16 sm:py-24">
        <SectionHeading
          eyebrow="Our services"
          title="Our services"
          description="The service list below was provided by GEMCOP. Descriptions are placeholders only."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </section>
    </>
  );
}
