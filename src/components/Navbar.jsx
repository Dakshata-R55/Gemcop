import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { cta, getPageTheme, navLinks, site } from "../data/site.js";
import Button from "./Button.jsx";
import { useSmoothScroll } from "./SmoothScroll.jsx";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();
  const location = useLocation();
  const theme = getPageTheme(location.pathname);
  const solidNav = scrolled || theme === "light";
  const { lenis } = useSmoothScroll();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!lenis) {
      const onScroll = () => setScrolled(window.scrollY > 12);
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }

    const onScroll = ({ scroll }) => setScrolled(scroll > 12);
    onScroll({ scroll: lenis.scroll });
    lenis.on("scroll", onScroll);
    return () => lenis.off("scroll", onScroll);
  }, [lenis]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (lenis) {
      if (open) lenis.stop();
      else lenis.start();
    }
    return () => {
      document.body.style.overflow = "";
      lenis?.start();
    };
  }, [open, lenis]);

  return (
    <header className="sticky top-0 z-40">
      <div
        className={`border-b transition-colors duration-500 ${
          solidNav ? "border-line bg-ink/85 backdrop-blur-md" : "border-transparent bg-transparent"
        }`}
      >
        <div
          className={`container-site flex items-center justify-between ${
            scrolled ? "py-3.5" : "py-5"
          } transition-all duration-500`}
        >
          <Link to="/" className="relative z-50 flex items-center" onClick={() => setOpen(false)}>
            <img
              src={site.logo}
              alt="GEMCOP"
              className="h-8 w-auto object-contain object-left sm:h-9"
              style={{ filter: "invert(1)" }}
            />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `text-[0.72rem] uppercase tracking-[0.2em] transition-colors duration-500 ${
                    isActive ? "text-gold" : "text-paper/70 hover:text-paper"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button to={cta.to} variant="gold" className="px-5 py-2.5">
              {cta.label}
            </Button>
          </div>

          <button
            type="button"
            className="relative z-50 flex h-10 w-10 items-center justify-center border border-line text-paper lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span className="relative block h-3.5 w-5">
              <span
                className={`absolute left-0 h-px w-full bg-paper transition-all duration-500 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-px w-full bg-paper transition-opacity duration-500 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-px w-full bg-paper transition-all duration-500 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-30 bg-ink lg:hidden"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="container-site flex h-full flex-col pt-28">
              <nav className="flex flex-col" aria-label="Mobile">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.to}
                    initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * index, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <NavLink
                      to={link.to}
                      end={link.to === "/"}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `block border-b border-line py-5 font-display text-4xl ${
                          isActive ? "text-gold" : "text-paper"
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>
              <div className="mt-10">
                <Button to={cta.to} variant="gold" onClick={() => setOpen(false)}>
                  {cta.label}
                </Button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
