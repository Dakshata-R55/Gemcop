import { useEffect, useRef } from "react";
import { bookingConfig } from "../data/booking.js";

function loadCalendlyAssets() {
  if (!document.querySelector(`link[href="${bookingConfig.widgetCss}"]`)) {
    const stylesheet = document.createElement("link");
    stylesheet.rel = "stylesheet";
    stylesheet.href = bookingConfig.widgetCss;
    document.head.appendChild(stylesheet);
  }

  const existing = document.querySelector(
    `script[src="${bookingConfig.widgetScript}"]`,
  );

  if (existing) {
    return existing.dataset.loaded === "true"
      ? Promise.resolve()
      : new Promise((resolve) => {
          existing.addEventListener("load", () => resolve(), { once: true });
        });
  }

  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = bookingConfig.widgetScript;
    script.async = true;
    script.onload = () => {
      script.dataset.loaded = "true";
      resolve();
    };
    document.body.appendChild(script);
  });
}

export default function BookingCalendar() {
  const containerRef = useRef(null);

  useEffect(() => {
    const parent = containerRef.current;
    if (!parent) return undefined;

    let cancelled = false;

    loadCalendlyAssets().then(() => {
      if (cancelled || !window.Calendly || !parent) return;
      parent.innerHTML = "";
      window.Calendly.initInlineWidget({
        url: bookingConfig.url,
        parentElement: parent,
      });
    });

    return () => {
      cancelled = true;
      if (parent) parent.innerHTML = "";
    };
  }, []);

  return (
    <div className="w-full min-w-0 overflow-x-hidden">
      <div
        ref={containerRef}
        className="calendly-inline-widget w-full min-w-0 overflow-x-hidden"
        data-url={bookingConfig.url}
        style={{ minWidth: 0, minHeight: 720 }}
        title="Book a call with GEMCOP"
      />
    </div>
  );
}
