import { motion, useReducedMotion } from "framer-motion";
import WorkMedia from "./WorkMedia.jsx";

const fields = [
  ["Client", "client"],
  ["Challenge", "challenge"],
  ["Strategy", "strategy"],
  ["Execution", "execution"],
  ["Result", "result"],
];

export default function CaseStudyCard({ study, index = 0 }) {
  const reduceMotion = useReducedMotion();
  const hasMedia = Boolean(study.image || study.video);
  const detailFields = fields.filter(([, key]) => key !== "client" && study[key]);

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.06, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="surface-card grid gap-0 overflow-hidden lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]"
    >
      <div className="flex min-h-[260px] items-center justify-center bg-ink lg:min-h-[360px]">
        {hasMedia ? (
          <WorkMedia
            image={study.image}
            video={study.video}
            poster={study.poster}
            alt={study.alt || study.client}
            className="max-h-[28rem] w-full object-contain lg:max-h-[36rem]"
          />
        ) : (
          <p className="p-8 text-center text-xs uppercase tracking-[0.24em] text-muted">
            Case study media pending
          </p>
        )}
      </div>
      <div className="p-6 sm:p-8">
        <p className="eyebrow">Work</p>
        <h3 className="mt-4 font-display text-3xl">{study.client}</h3>
        {detailFields.length > 0 ? (
          <dl className="mt-6 space-y-4">
            {detailFields.map(([label, key]) => (
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
        ) : (
          <p className="mt-6 text-sm leading-relaxed text-muted">
            Case study details will be added when provided by GEMCOP.
          </p>
        )}
      </div>
    </motion.article>
  );
}
