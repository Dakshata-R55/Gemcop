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
        description="Book a call with GEMCOP."
      />
      <section className="container-site overflow-x-hidden py-16 sm:py-24">
        <button
          type="button"
          onClick={handleBack}
          className="text-[0.72rem] uppercase tracking-[0.18em] text-muted transition-colors hover:text-gold"
        >
          ← Back
        </button>

        <div className="mt-10 max-w-3xl">
          <SectionHeading
            eyebrow="Book a call"
            title="Book a call."
            description="Select a date and time to schedule a call with GEMCOP. For email or WhatsApp, use Contact."
          />
        </div>

        <div className="mt-12 w-full min-w-0 overflow-x-hidden">
          <BookingCalendar />
        </div>
      </section>
    </>
  );
}
