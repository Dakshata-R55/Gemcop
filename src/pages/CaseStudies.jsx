import { caseStudyPlaceholders } from "../data/caseStudies.js";
import Seo from "../components/Seo.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import CaseStudyCard from "../components/CaseStudyCard.jsx";

export default function CaseStudies() {
  return (
    <>
      <Seo
        title="Case Studies — GEMCOP"
        description="GEMCOP case studies. Client stories and results will be added when provided by GEMCOP."
      />
      <section className="container-site py-20 sm:py-28 lg:py-32">
        <SectionHeading
          eyebrow="Case studies"
          title="Case studies"
          description="Visual work. Written case-study details will be added when provided by GEMCOP."
        />
        <div className="mt-16 grid gap-5">
          {caseStudyPlaceholders.map((study, index) => (
            <CaseStudyCard key={study.id} study={study} index={index} />
          ))}
        </div>
      </section>
    </>
  );
}
