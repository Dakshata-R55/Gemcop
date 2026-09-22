import { useLocation } from "react-router-dom";
import { approachSteps, cta } from "../data/site.js";
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
import CinematicHero from "../components/CinematicHero.jsx";

function HomeBand({ tone, first = false, className = "", children }) {
  const isLight = tone === "light";

  return (
    <section
      data-theme={isLight ? "light" : "dark"}
      className={`${isLight ? "bg-paper text-ink" : "bg-ink text-paper"} ${
        first ? "" : "border-t border-line"
      } ${className}`}
    >
      {children}
    </section>
  );
}

export default function Home() {
  const location = useLocation();

  return (
    <>
      <Seo
        title="GEMCOP"
        description="GEMCOP is a growth and digital transformation company that helps startups and enterprises bring clarity to their growth efforts and build systems that perform."
      />

      <HomeBand tone="dark" first className="relative">
        <CinematicHero />
      </HomeBand>

      <HomeBand tone="light" className="py-20 sm:py-28">
        <div className="container-site grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading eyebrow="Introduction" title="About GEMCOP" />
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed sm:text-xl">
              GEMCOP is a growth and digital transformation company that helps
              startups and enterprises bring clarity to their growth efforts and
              build systems that perform.
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
              Its work brings together strategy, content, technology, branding,
              and performance marketing to help businesses build sustainable
              growth systems.
            </p>
          </Reveal>
        </div>
      </HomeBand>

      <HomeBand tone="dark" className="py-20 sm:py-28">
        <div className="container-site">
          <div className="mb-12 flex flex-col gap-6 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Services"
              title="What we do"
              description="Brand Building, Performance Marketing, and Web & AI Solutions."
            />
            <Button to="/services" variant="secondary" className="self-start sm:self-auto">
              All services
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </HomeBand>

      <HomeBand tone="light" className="py-20 sm:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="Approach"
            title="Systems over noise"
            description="GEMCOP positions itself around building structured growth systems rather than simply producing marketing output."
          />
          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            <Reveal>
              <p className="font-display text-3xl leading-snug sm:text-4xl">
                Sustainable growth over isolated campaigns.
              </p>
              <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
                Its public messaging emphasizes positioning, content strategy,
                performance systems, digital transformation, and long-term
                business growth.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-base leading-relaxed sm:text-lg">
                GEMCOP describes growth as something that should be deliberately
                built through clear positioning, strong narratives, distribution
                systems, and business alignment.
              </p>
            </Reveal>
          </div>
        </div>
      </HomeBand>

      <HomeBand tone="dark" className="py-20 sm:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="Method"
            title="A disciplined approach"
            description="GEMCOP says it works closely with clients to understand their business, challenges, and goals, then applies a clear and disciplined approach focused on execution and meaningful results."
          />
          <ol className="mt-14 flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:items-end">
            {approachSteps.map((step, index) => (
              <li key={step} className="flex items-end gap-6">
                <Reveal delay={index * 0.05}>
                  <span className="text-xs tracking-[0.2em] text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-3 font-display text-3xl sm:text-4xl">{step}</p>
                </Reveal>
                {index < approachSteps.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className="mb-2 hidden font-display text-3xl text-gold sm:inline"
                  >
                    →
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
        </div>
      </HomeBand>

      <HomeBand tone="light" className="py-20 sm:py-28">
        <div className="container-site">
          <div className="mb-12 flex flex-col gap-6 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Selected work"
              title="Portfolio"
            description="Selected work."
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
      </HomeBand>

      <HomeBand tone="dark" className="py-20 sm:py-28">
        <div className="container-site">
          <div className="mb-12 sm:mb-16">
            <SectionHeading
              eyebrow="Case studies"
              title="Case studies"
              description="Visual work. Written case-study details will be added when provided by GEMCOP."
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
      </HomeBand>

      <HomeBand tone="light">
        <div className="container-site py-20 sm:py-28">
          <Reveal>
            <p className="eyebrow">Start a conversation</p>
            <h2 className="display-title mt-5 max-w-4xl text-[clamp(2.6rem,7vw,6rem)]">
              Start a project
            </h2>
            <p className="mt-5 max-w-lg text-muted">
              GEMCOP works closely with clients to understand their business,
              challenges, and goals, then applies a clear and disciplined
              approach focused on execution and meaningful results.
            </p>
            <div className="mt-10">
              <Button to={cta.to} variant="gold">
                {cta.label}
              </Button>
            </div>
          </Reveal>
        </div>
      </HomeBand>
    </>
  );
}
