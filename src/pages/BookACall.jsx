import { useNavigate } from "react-router-dom";
import Seo from "../components/Seo.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import BookingCalendar from "../components/BookingCalendar.jsx";

export default function BookACall() {
  const navigate = useNavigate();

  function handleBack() {
    const referrer = document.referrer;
    if (referrer) {
      try {
        if (new URL(referrer).origin === window.location.origin) {
          navigate(-1);
          return;
        }
      } catch {
        // Fall back to home.
      }
    }
    navigate("/");
  }

  return (
    <>
      <Seo
        title="Book a Call — GEMCOP"
        description="Book a call with GEMCOP. The scheduling calendar will be connected when GEMCOP provides its official booking details."
      />
      <section className="container-site py-16 sm:py-24">
        <button
          type="button"
          onClick={handleBack}
          className="text-[0.72rem] uppercase tracking-[0.18em] text-muted transition-colors hover:text-gold"
        >
          ← Back
        </button>

        <div className="mt-10 grid items-start gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <SectionHeading
              eyebrow="Book a call"
              title="Book a call."
              description="Choose a date, then a time. Live availability will appear when GEMCOP’s official calendar is connected."
            />
            <p className="mt-8 max-w-md text-sm leading-relaxed text-muted">
              This is a dedicated scheduling page, separate from Contact. For
              email or WhatsApp, use the Contact page in the menu.
            </p>
          </div>
          <BookingCalendar />
        </div>
      </section>
    </>
  );
}
