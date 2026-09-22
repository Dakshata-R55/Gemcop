/**
 * Confirmed GEMCOP services.
 * A third service exists but has not been named yet — keep a reserved slot only.
 */
export const services = [
  { id: "brand-building", name: "Brand Building", number: "01" },
  { id: "performance-marketing", name: "Performance Marketing", number: "02" },
];

export const serviceSlots = [
  ...services,
  { id: "service-03", number: "03", reserved: true },
];
