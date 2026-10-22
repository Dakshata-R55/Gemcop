import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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

const quickNavItems = [
  { label: "Services", to: "/services", description: "What we offer" },
  { label: "Case Studies", to: "/case-studies", description: "Real results" },
  { label: "Portfolio", to: "/portfolio", description: "Selected work" },
  { label: "Contact", to: "/contact", description: "Get in touch" },
];

function HorizontalNav() {
  return (
    <div className="border-t border-b border-line bg-ink">
      <div className="container-site">
        <nav
          aria-label="Quick navigation"
          className="flex flex-wrap divide-x divide-line"
        >
          {quickNavItems.map((item, index) => (
            <motion.div
              key={item.to}
              className="flex-1 min-w-[140px]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
            >
              <Link
                to={item.to}
                className="group relative flex flex-col gap-1 px-6 py-6 sm:px-8 sm:py-7 transition-colors duration-300 hover:bg-ink-soft"
              >
                {/* gold underline slide animation */}
                <span
                  className="absolute bottom-0 left-0 h-[2px] w-0 bg-gold transition-all duration-400 group-hover:w-full"
                  aria-hidden="true"
                />
                <span className="flex items-center gap-2">
                  <span className="text-[0.65rem] uppercase tracking-[0.22em] text-gold font-medium">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {/* arrow icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="w-3 h-3 text-gold opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="font-display text-xl sm:text-2xl text-paper transition-colors duration-300 group-hover:text-gold" style={{ fontWeight: 500, letterSpacing: "-0.02em" }}>
                  {item.label}
                </span>
                <span className="text-[0.72rem] text-muted tracking-wide uppercase">
                  {item.description}
                </span>
              </Link>
            </motion.div>
          ))}
        </nav>
      </div>
    </div>
  );
}

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

      <HorizontalNav />

      <HomeBand tone="light" className="pt-2 pb-24 sm:pb-32 lg:pb-40">
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

      <HomeBand tone="dark" className="py-24 sm:py-32 lg:py-40">
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
          <div className="grid gap-5 md:grid-cols-2">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
                className={index === 2 ? "md:col-span-2" : ""}
              />
            ))}
          </div>
        </div>
      </HomeBand>

      <HomeBand tone="light" className="py-24 sm:py-32 lg:py-40">
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

      <HomeBand tone="dark" className="py-24 sm:py-32 lg:py-40">
        <div className="container-site">
          <SectionHeading
            eyebrow="Method"
            title="A disciplined approach"
            description="GEMCOP says it works closely with clients to understand their business, challenges, and goals, then applies a clear and disciplined approach focused on execution and meaningful results."
          />
          <ol className="mt-16 border-t border-line">
            {approachSteps.map((step, index) => (
              <li key={step} className="border-b border-line">
                <Reveal delay={index * 0.04} className="flex items-baseline justify-between gap-6 py-6 sm:py-8">
                  <p className="display-title text-[clamp(1.8rem,3.5vw,3rem)]">{step}</p>
                  <span className="text-[0.68rem] tracking-[0.22em] text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </HomeBand>

      <HomeBand tone="light" className="py-24 sm:py-32 lg:py-40">
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
          <div className="grid gap-5 md:grid-cols-2">
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

      <HomeBand tone="dark" className="py-24 sm:py-32 lg:py-40">
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
        <div className="container-site py-24 sm:py-32 lg:py-40">
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
