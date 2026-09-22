import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";

export default function ServiceCard({ service, index = 0 }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ delay: index * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="group surface-card p-6 transition-colors duration-300 hover:border-gold/40 sm:p-8"
    >
      <Link to="/services" className="flex h-full flex-col">
        <span className="text-xs tracking-[0.2em] text-gold">{service.number}</span>
        <h3 className="mt-6 flex-1 font-display text-3xl leading-tight">
          {service.name}
        </h3>
        {service.description ? (
          <p className="mt-4 text-sm leading-relaxed text-muted">
            {service.description}
          </p>
        ) : null}
        <span className="mt-8 text-[0.7rem] uppercase tracking-[0.2em] text-muted transition-colors group-hover:text-gold">
          View services
        </span>
      </Link>
    </motion.article>
  );
}
