/**
 * Official GEMCOP booking configuration.
 * Change `url` here if the Calendly event link is updated.
 */
export const bookingConfig = {
  path: "/book-a-call",
  provider: "calendly",
  url: "https://calendly.com/gem-connect/30min",
  widgetScript: "https://assets.calendly.com/assets/external/widget.js",
  widgetCss: "https://assets.calendly.com/assets/external/widget.css",
};

export function isBookingConfigured() {
  return Boolean(bookingConfig.url);
}
