import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useSmoothScroll } from "./SmoothScroll.jsx";

export default function PageTransition() {
  const location = useLocation();
  const reduceMotion = useReducedMotion();
  const { lenis } = useSmoothScroll();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, lenis]);

  if (reduceMotion) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        className="pointer-events-none fixed inset-0 z-[46]"
        initial={{ opacity: 0.45 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 0.4 }}
        transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
        aria-hidden="true"
      >
        <div className="h-full w-full bg-ink" />
        <div className="absolute inset-x-0 top-0 h-px bg-gold/70" />
      </motion.div>
    </AnimatePresence>
  );
}
