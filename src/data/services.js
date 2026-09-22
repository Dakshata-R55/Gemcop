/**
 * Service names supplied by the client.
 * Descriptions are placeholders until GEMCOP provides official copy.
 */
export const services = [
  { id: "social-media-marketing", name: "Social Media Marketing" },
  { id: "performance-marketing", name: "Performance Marketing" },
  { id: "lead-generation", name: "Lead Generation" },
  { id: "content-strategy", name: "Content Strategy" },
  { id: "copywriting", name: "Copywriting" },
  { id: "video-editing", name: "Video Editing" },
  { id: "graphic-design", name: "Graphic Design" },
  { id: "web-development", name: "Web Development" },
  { id: "brand-marketing", name: "Brand Marketing" },
].map((service, index) => ({
  ...service,
  number: String(index + 1).padStart(2, "0"),
  description: "Service description will be provided by GEMCOP.",
}));
