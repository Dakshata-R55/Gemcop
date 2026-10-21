import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import ServiceVideo from "./ServiceVideo.jsx";

export default function ServiceCard({ service, index = 0, className = "" }) {
  const reduceMotion = useReducedMotion();
  const href = service.href || `/services/${service.id}`;
  const description = service.summary || service.description || "";

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        delay: index * 0.08,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      <Link
        to={href}
        className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-[#111] p-6 text-paper transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-white/25 sm:p-8"
      >
        <div className="mb-8 flex items-start justify-between gap-4">
          <div className="min-w-0">
            <span className="text-[0.68rem] tracking-[0.24em] text-white/40">
              {service.number}
            </span>
            <h3 className="display-title mt-4 text-[clamp(2rem,4vw,3.4rem)] leading-[0.95] transition-colors duration-500 group-hover:text-white">
              {service.name}
            </h3>
            {description ? (
              <p className="mt-4 max-w-md text-sm leading-relaxed text-white/55 sm:text-base">
                {description}
              </p>
            ) : null}
          </div>
          <span className="mt-2 shrink-0 text-[0.65rem] uppercase tracking-[0.2em] text-white/35 transition-colors duration-500 group-hover:text-white">
            View
          </span>
        </div>
        <ServiceVideo
          src={service.promoVideo}
          poster={service.promoPoster}
          title={service.name}
          className="mt-auto"
        />
      </Link>
    </motion.article>
  );
}
