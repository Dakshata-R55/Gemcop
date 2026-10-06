import { Link, Navigate, useParams } from "react-router-dom";

import { cta } from "../data/site.js";

import { getServiceById, services } from "../data/services.js";

import Seo from "../components/Seo.jsx";

import Button from "../components/Button.jsx";

import Reveal from "../components/Reveal.jsx";

import ServiceVisual from "../components/ServiceVisual.jsx";



export default function ServiceDetail() {

  const { serviceId } = useParams();

  const service = getServiceById(serviceId);



  if (!service) {

    return <Navigate to="/services" replace />;

  }



  const others = services.filter((item) => item.id !== service.id);



  return (

    <>

      <Seo

        title={`${service.name} — GEMCOP`}

        description={service.intro}

      />



      <section className="container-site py-12 sm:py-16">

        <Link

          to="/services"

          className="text-[0.72rem] uppercase tracking-[0.18em] text-muted transition-colors hover:text-gold"

        >

          ← Back to Services

        </Link>



        <div className="mt-12 grid items-start gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">

          <div>

            <p className="eyebrow">{service.number}</p>

            <h1 className="display-title mt-5 text-[clamp(2.8rem,8vw,6.4rem)]">

              {service.name}

            </h1>

            <p className="mt-8 max-w-xl text-base leading-relaxed text-paper/80 sm:text-lg">

              {service.intro}

            </p>

          </div>

          <ServiceVisual visual={service.visual} title={service.name} />

        </div>

      </section>



      <section className="border-t border-line">

        <div className="container-site grid gap-12 py-16 sm:py-24 lg:grid-cols-[0.8fr_1.2fr]">

          <Reveal>

            <p className="eyebrow">What GEMCOP provides</p>

            <h2 className="display-title mt-5 text-[clamp(2rem,4vw,3.4rem)]">

              Under {service.name}

            </h2>

          </Reveal>

          <Reveal delay={0.08}>

            <ol className="divide-y divide-line border-t border-b border-line">

              {service.provides.map((item, index) => (

                <li key={item} className="flex gap-6 py-6">

                  <span className="text-xs tracking-[0.2em] text-gold">

                    {String(index + 1).padStart(2, "0")}

                  </span>

                  <p className="text-base leading-relaxed text-paper/85 sm:text-lg">

                    {item}

                  </p>

                </li>

              ))}

            </ol>

          </Reveal>

        </div>

      </section>



      <section className="border-t border-line">

        <div className="container-site flex flex-col gap-8 py-16 sm:flex-row sm:items-end sm:justify-between sm:py-24">

          <Reveal>

            <p className="eyebrow">Start a conversation</p>

            <h2 className="display-title mt-5 max-w-2xl text-[clamp(2.2rem,5vw,4.2rem)]">

              Talk with GEMCOP about {service.name}.

            </h2>

          </Reveal>

          <div className="flex flex-wrap gap-3">

            <Button to={cta.to} variant="gold">

              {cta.label}

            </Button>

            <Button to="/contact" variant="secondary">

              Contact

            </Button>

          </div>

        </div>

      </section>



      <section className="border-t border-line">

        <div className="container-site py-16 sm:py-20">

          <p className="eyebrow">Other services</p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">

            {others.map((item) => (

              <Link

                key={item.id}

                to={item.href}

                className="group surface-card flex items-end justify-between p-6 transition-colors hover:border-gold/40 sm:p-8"

              >

                <div>

                  <span className="text-xs tracking-[0.2em] text-gold">

                    {item.number}

                  </span>

                  <h3 className="mt-4 font-display text-3xl">{item.name}</h3>

                </div>

                <span className="text-[0.7rem] uppercase tracking-[0.2em] text-muted transition-colors group-hover:text-gold">

                  View Service

                </span>

              </Link>

            ))}

          </div>

        </div>

      </section>

    </>

  );

}

