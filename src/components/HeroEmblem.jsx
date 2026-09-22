import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { site } from "../data/site.js";

export default function HeroEmblem() {
  const stageRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: stageRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, 64]);
  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [-5, -5] : [-5, 1.5],
  );

  return (
    <div
      ref={stageRef}
      className="pointer-events-none relative h-[40vh] min-h-[16rem] overflow-hidden sm:h-[44vh] lg:absolute lg:inset-0 lg:h-auto lg:min-h-0"
    >
      <motion.div
        style={{ y, rotate }}
        className="absolute left-1/2 top-[58%] w-[min(118%,28rem)] -translate-x-1/2 -translate-y-1/2 sm:w-[min(100%,32rem)] lg:left-auto lg:right-[-8%] lg:top-1/2 lg:w-[min(58vw,46rem)] lg:translate-x-0"
      >
        <motion.img
          src={site.icon}
          alt=""
          aria-hidden="true"
          className="absolute left-[-8%] top-[-6%] w-[118%] max-w-none object-contain opacity-[0.09]"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 0.09 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        />

        <div
          aria-hidden="true"
          className="absolute left-[9%] top-[11%] h-[78%] w-[78%] border border-gold/25"
        />

        <motion.img
          src={site.icon}
          alt="GEMCOP"
          className="relative z-[1] h-auto w-full object-contain"
          initial={reduceMotion ? false : { opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.div>
    </div>
  );
}
