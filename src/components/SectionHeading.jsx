import { motion, useReducedMotion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}) {
  const reduceMotion = useReducedMotion();
  const alignment =
    align === "center" ? "text-center mx-auto items-center" : "text-left";

  return (
    <motion.div
      className={`flex max-w-3xl flex-col gap-5 ${alignment}`}
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="display-title text-[clamp(2.4rem,5.4vw,5rem)]">
        {title}
      </h2>
      {description ? (
        <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
