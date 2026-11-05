/**
 * Site-wide configuration.
 * Replace placeholder values when GEMCOP supplies official details.
 */

export const WHATSAPP_NUMBER = "919486644311";
export const WHATSAPP_DISPLAY = "+91 94866 44311";
export const WHATSAPP_MESSAGE =
  "Hello GEMCOP, I would like to know more about your services.";

export const site = {
  name: "GEMCOP",
  logo: "/assets/gemcop-logo.png",
  icon: "/assets/gemcop-icon.png",
  descriptionPlaceholder:
    "GEMCOP is a growth and digital transformation company that helps startups and enterprises bring clarity to their growth efforts and build systems that perform.",
  brandLine: "Gemcop Growth isn’t guessed. It’s engineered.",
  contact: {
    email: "gemcop.in@gmail.com",
  },
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/gemcop" },
    { label: "LinkedIn", href: "https://in.linkedin.com/company/gemcop" },
  ],
};

export const approachSteps = [
  "Understand",
  "Strategize",
  "Build",
  "Execute",
  "Measure",
  "Improve",
];

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "Contact", to: "/contact" },
];

export const cta = {
  label: "Book a Call",
  to: "/book-a-call",
};

/** Entire theme is light, except where videos/pics are showcased (case studies). */
export const pageThemes = {
  "/": "light",
  "/services": "light",
  "/case-studies": "dark",
  "/contact": "light",
  "/book-a-call": "light",
  "/privacy": "light",
  "/terms": "light",
};

export function getPageTheme(pathname) {
  if (pathname.startsWith("/services/")) return "dark";
  return pageThemes[pathname] ?? "dark";
}
