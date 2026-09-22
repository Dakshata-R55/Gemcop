import { motion, useReducedMotion } from "framer-motion";

const fields = [
  ["Client", "client"],
  ["Challenge", "challenge"],
  ["Strategy", "strategy"],
  ["Execution", "execution"],
  ["Result", "result"],
];

export default function CaseStudyCard({ study, index = 0 }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.06, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="surface-card grid gap-0 overflow-hidden lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]"
    >
      <div className="flex min-h-[220px] items-center justify-center bg-gradient-to-br from-[#1c1c1c] to-[#0c0c0c] p-8">
        <p className="text-center text-xs uppercase tracking-[0.24em] text-muted">
          Case study media pending
        </p>
      </div>
      <div className="p-6 sm:p-8">
        <p className="eyebrow">Placeholder case study</p>
        <h3 className="mt-4 font-display text-3xl text-paper">{study.client}</h3>
        <dl className="mt-6 space-y-4">
          {fields.map(([label, key]) => (
            <div key={key}>
              <dt className="text-[0.68rem] uppercase tracking-[0.18em] text-gold">
                {label}
              </dt>
              <dd className="mt-1 text-sm leading-relaxed text-muted">
                {study[key]}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </motion.article>
  );
}
