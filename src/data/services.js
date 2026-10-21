/**
 * Confirmed GEMCOP services.
 * Page copy stays within official GEMCOP positioning — no extra claims.
 * promoVideo / promoPoster are empty until GEMCOP supplies promotional clips.
 */
export const services = [
  {
    id: "brand-building",
    name: "Brand Building",
    number: "01",
    href: "/services/brand-building",
    summary:
      "Clear positioning and strong narratives as part of structured growth systems.",
    promoVideo: "",
    promoPoster: "",
    media: "/assets/work/atm-7.jpg",
    mediaAlt: "Ashok Thanga Maaligai",
    intro:
      "GEMCOP’s work brings together strategy, content, technology, branding, and performance marketing. Brand Building is how that work develops clear positioning and strong narratives as part of structured growth systems.",
    provides: [
      "Branding as part of GEMCOP’s growth work — not isolated marketing output.",
      "Clear positioning for startups and enterprises.",
      "Strong narratives aligned to the business.",
      "A disciplined path from understanding the business through execution.",
    ],
    visual: {
      type: "brand",
      images: [
        { src: "/assets/work/atm-7.jpg", alt: "Ashok Thanga Maaligai" },
        { src: "/assets/work/atm-16.jpg", alt: "Ashok Thanga Maaligai" },
      ],
    },
  },
  {
    id: "performance-marketing",
    name: "Performance Marketing",
    number: "02",
    href: "/services/performance-marketing",
    summary:
      "Performance systems and distribution built for long-term business growth.",
    promoVideo: "",
    promoPoster: "",
    media: "/assets/work/sdm-service-madurai.jpg",
    mediaAlt: "Performance marketing visual",
    intro:
      "Performance marketing is one of the disciplines GEMCOP brings together to help businesses build sustainable growth systems. GEMCOP’s public messaging emphasizes performance systems, distribution systems, and long-term business growth.",
    provides: [
      "Performance marketing as part of GEMCOP’s growth work.",
      "Distribution systems, not one-off campaigns.",
      "Performance systems built to be measured and improved.",
      "Close work with clients to understand the business, then execute with discipline.",
    ],
    visual: {
      type: "video",
      src: "/assets/work/sdm-service-madurai.mp4",
      poster: "/assets/work/sdm-service-madurai.jpg",
      alt: "Performance marketing visual",
    },
  },
  {
    id: "web-ai-solutions",
    name: "Web & AI Solutions",
    number: "03",
    href: "/services/web-ai-solutions",
    summary:
      "Technology and digital transformation that help growth systems perform.",
    promoVideo: "",
    promoPoster: "",
    media: "/assets/work/pks-final.jpg",
    mediaAlt: "Web and AI solutions visual",
    intro:
      "GEMCOP is a growth and digital transformation company. Web & AI Solutions is the technology side of that work — helping startups and enterprises bring clarity to their growth efforts and build systems that perform.",
    provides: [
      "Technology as part of GEMCOP’s growth work.",
      "Digital transformation alongside strategy, content, branding, and performance marketing.",
      "Systems built to perform, rather than isolated output.",
      "Work that starts with the business, its challenges, and its goals.",
    ],
    visual: {
      type: "video",
      src: "/assets/work/pks-final.mp4",
      poster: "/assets/work/pks-final.jpg",
      alt: "Web and AI solutions visual",
    },
  },
];

export function getServiceById(id) {
  return services.find((service) => service.id === id);
}
