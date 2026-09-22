import { useLocation } from "react-router-dom";
import { services } from "../data/services.js";
import { portfolioPlaceholders } from "../data/portfolio.js";
import { caseStudyPlaceholders } from "../data/caseStudies.js";
import Button from "../components/Button.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import Reveal from "../components/Reveal.jsx";
import Seo from "../components/Seo.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import WorkCard from "../components/WorkCard.jsx";
import CaseStudyCard from "../components/CaseStudyCard.jsx";

export default function Home() {
  const location = useLocation();

  return (
    <>
      <Seo
        title="GEMCOP"
        description="GEMCOP is a digital marketing and creative agency. Homepage copy will be updated when official content is provided."
      />

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,148,74,0.12),transparent_36%)]" />
        <div className="container-site relative flex min-h-[88vh] flex-col justify-end pb-16 pt-10 sm:pb-24">
          <Reveal>
            <p className="eyebrow">Placeholder copy</p>
            <h1 className="display-title mt-6 max-w-5xl text-[clamp(4rem,14vw,10.5rem)] text-paper">
              GEMCOP
            </h1>
            <p className="mt-6 max-w-xl font-display text-2xl italic text-paper/80 sm:text-3xl">
              Engineered Growth. Built on Systems.
            </p>
            <p className="mt-4 max-w-lg text-sm text-muted">
              Temporary placeholder headline until GEMCOP supplies official hero
              copy.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button to="/contact" variant="gold">
                Start a Project
              </Button>
              <Button to="/portfolio" variant="secondary">
                Explore Our Work
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line py-20 sm:py-28">
        <div className="container-site grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            eyebrow="Introduction"
            title="About GEMCOP"
          />
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-paper/80 sm:text-xl">
              About copy will be provided by GEMCOP.
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
              This introduction is a structural placeholder. It will be replaced
              with GEMCOP’s official positioning when supplied.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line py-20 sm:py-28">
        <div className="container-site">
          <div className="mb-12 flex flex-col gap-6 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Services"
              title="Our services"
              description="Service descriptions will be provided by GEMCOP."
            />
            <Button to="/services" variant="secondary" className="self-start sm:self-auto">
              All services
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line py-20 sm:py-28">
        <div className="container-site">
          <div className="mb-12 flex flex-col gap-6 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Selected work"
              title="Portfolio"
              description="Selected projects will be added when GEMCOP supplies them. These cards are placeholders only."
            />
            <Button to="/portfolio" variant="secondary">
              View portfolio
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {portfolioPlaceholders.slice(0, 3).map((item, index) => (
              <WorkCard
                key={`${item.id}-${location.pathname}-${index}`}
                item={item}
                featured={index === 0}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line py-20 sm:py-28">
        <div className="container-site">
          <div className="mb-12 sm:mb-16">
            <SectionHeading
              eyebrow="Case studies"
              title="Case studies"
              description="Case studies will be published when GEMCOP provides client, challenge, strategy, execution, and result details. No results are claimed here."
            />
          </div>
          <div className="grid gap-4">
            {caseStudyPlaceholders.slice(0, 2).map((study, index) => (
              <CaseStudyCard key={study.id} study={study} index={index} />
            ))}
          </div>
          <div className="mt-10">
            <Button to="/case-studies" variant="secondary">
              All case studies
            </Button>
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="container-site py-20 sm:py-28">
          <Reveal>
            <p className="eyebrow">Start a conversation</p>
            <h2 className="display-title mt-5 max-w-4xl text-[clamp(2.6rem,7vw,6rem)]">
              Start a project
            </h2>
            <p className="mt-5 max-w-lg text-muted">
              CTA copy will be provided by GEMCOP. This section is a visual
              placeholder for the next step.
            </p>
            <div className="mt-10">
              <Button to="/contact" variant="gold">
                Start a Project
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
