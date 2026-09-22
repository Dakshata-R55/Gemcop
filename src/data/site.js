/**
 * Site-wide configuration.
 * Replace placeholder values when GEMCOP supplies official details.
 */

export const WHATSAPP_NUMBER = "919486644311";
export const WHATSAPP_MESSAGE =
  "Hello GEMCOP, I would like to know more about your services.";

export const site = {
  name: "GEMCOP",
  logo: "/assets/gemcop-logo.png",
  descriptionPlaceholder:
    "A short company description will be provided by GEMCOP.",
  contact: {
    email: "Email will be provided by GEMCOP.",
    phone: "Phone number will be provided by GEMCOP.",
    location: "Location will be provided by GEMCOP.",
  },
  socials: [
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "X", href: "#" },
  ],
};

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "Contact", to: "/contact" },
];

export const cta = {
  label: "Start a Project",
  to: "/contact",
};
