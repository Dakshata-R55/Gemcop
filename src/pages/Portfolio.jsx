import { portfolioPlaceholders } from "../data/portfolio.js";
import Seo from "../components/Seo.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import WorkCard from "../components/WorkCard.jsx";

export default function Portfolio() {
  return (
    <>
      <Seo
        title="Portfolio — GEMCOP"
        description="GEMCOP portfolio. Project details will be added when provided by GEMCOP."
      />
      <section className="container-site py-16 sm:py-24">
        <SectionHeading
          eyebrow="Portfolio"
          title="Portfolio"
          description="These cards are structural placeholders. No projects have been invented."
        />
        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {portfolioPlaceholders.map((item, index) => (
            <WorkCard key={item.id} item={item} featured={index === 0} />
          ))}
        </div>
      </section>
    </>
  );
}
