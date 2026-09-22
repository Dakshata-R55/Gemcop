import { useEffect, useRef, useState } from "react";
import { bookingConfig } from "../data/booking.js";

const INITIAL_HEIGHT = 1100;

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

function isCalendlyEvent(event) {
  return (
    event.origin === "https://calendly.com" &&
    typeof event.data === "object" &&
    event.data?.event?.startsWith("calendly.")
  );
}

export default function BookingCalendar() {
  const containerRef = useRef(null);
  const [height, setHeight] = useState(INITIAL_HEIGHT);

  useEffect(() => {
    const parent = containerRef.current;
    if (!parent) return undefined;

    let cancelled = false;

    function onMessage(event) {
      if (!isCalendlyEvent(event)) return;
      const nextHeight = event.data?.payload?.height;
      if (event.data.event === "calendly.page_height" && nextHeight) {
        setHeight(Math.max(INITIAL_HEIGHT, Number(nextHeight)));
      }
    }

    window.addEventListener("message", onMessage);

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
      window.removeEventListener("message", onMessage);
      if (parent) parent.innerHTML = "";
    };
  }, []);

  return (
    <div className="surface-card w-full min-w-0">
      <div
        ref={containerRef}
        className="calendly-inline-widget w-full min-w-0"
        data-url={bookingConfig.url}
        style={{ minWidth: 0, height, minHeight: INITIAL_HEIGHT }}
        title="Book a call with GEMCOP"
      />
    </div>
  );
}
