import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { getPageTheme } from "../data/site.js";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import WhatsAppButton from "./WhatsAppButton.jsx";
import PageTransition from "./PageTransition.jsx";

export default function Layout() {
  const location = useLocation();
  const reduceMotion = useReducedMotion();
  const theme = getPageTheme(location.pathname);
  const isLight = theme === "light";

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-ink">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-gold focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <Navbar />
      <PageTransition />
      <main
        id="main-content"
        data-theme={theme}
        className={`flex-1 ${isLight ? "bg-paper text-ink" : "bg-ink text-paper"}`}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
