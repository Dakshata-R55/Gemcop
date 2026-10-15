import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";

export default function ServiceCard({ service, index = 0 }) {
  const reduceMotion = useReducedMotion();
  const href = service.href || `/services/${service.id}`;

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.06, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="border-b border-line"
    >
      <Link
        to={href}
        className="group grid items-center gap-6 py-8 sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:gap-10 sm:py-12 lg:py-14"
      >
        <span className="text-[0.68rem] tracking-[0.24em] text-gold">
          {service.number}
        </span>
        <div className="min-w-0">
          <h3 className="display-title text-[clamp(2.1rem,5.2vw,4.6rem)] transition-colors duration-500 group-hover:text-gold">
            {service.name}
          </h3>
          {service.description ? (
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
              {service.description}
            </p>
          ) : null}
        </div>
        <div className="flex items-center gap-6 sm:justify-end">
          {service.media ? (
            <div className="hidden overflow-hidden md:block md:w-36 lg:w-44">
              <img
                src={service.media}
                alt={service.mediaAlt || ""}
                loading="lazy"
                className="aspect-[16/10] h-auto w-full object-cover opacity-60 transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 group-hover:opacity-100"
              />
            </div>
          ) : null}
          <span className="text-[0.68rem] uppercase tracking-[0.22em] text-muted transition-colors duration-500 group-hover:text-gold">
            View Service
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
