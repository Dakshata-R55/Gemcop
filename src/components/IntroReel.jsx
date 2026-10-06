import { useCallback, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { intro } from "../data/intro.js";
import { useSmoothScroll } from "./SmoothScroll.jsx";

function hasPlayed() {
  try {
    return sessionStorage.getItem(intro.storageKey) === "1";
  } catch {
    return false;
  }
}

function markPlayed() {
  try {
    sessionStorage.setItem(intro.storageKey, "1");
  } catch {
    // Ignore private-mode storage failures.
  }
}

export default function IntroReel() {
  const location = useLocation();
  const reduceMotion = useReducedMotion();
  const { lenis } = useSmoothScroll();
  const videoRef = useRef(null);
  const [open, setOpen] = useState(
    () => location.pathname === "/" && !reduceMotion && !hasPlayed(),
  );

  const finish = useCallback(() => {
    markPlayed();
    setOpen(false);
  }, []);

  useEffect(() => {
    if (location.pathname !== "/" || reduceMotion || hasPlayed()) {
      setOpen(false);
    }
  }, [location.pathname, reduceMotion]);

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      lenis?.start();
      return undefined;
    }

    document.body.style.overflow = "hidden";
    lenis?.stop();

    const video = videoRef.current;
    const safety = window.setTimeout(finish, intro.maxDurationMs);

    if (video) {
      video.play().catch(() => {});
    }

    return () => {
      window.clearTimeout(safety);
      document.body.style.overflow = "";
      lenis?.start();
    };
  }, [open, lenis, finish]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-ink"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          role="dialog"
          aria-modal="true"
          aria-label="GEMCOP intro"
        >
          <video
            ref={videoRef}
            src={intro.src}
            poster={intro.poster}
            muted
            playsInline
            preload="auto"
            autoPlay
            className="h-full w-full object-cover"
            onEnded={finish}
            onError={finish}
          />
          <button
            type="button"
            onClick={finish}
            className="absolute bottom-8 right-6 text-[0.7rem] uppercase tracking-[0.2em] text-paper/70 transition-colors hover:text-gold"
          >
            Skip
          </button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
