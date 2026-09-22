import Seo from "../components/Seo.jsx";
import SectionHeading from "../components/SectionHeading.jsx";

export default function PlaceholderLegal({ title, note }) {
  return (
    <>
      <Seo title={`${title} — GEMCOP`} description={note} />
      <section className="container-site py-16 sm:py-24">
        <SectionHeading eyebrow="Legal" title={title} description={note} />
      </section>
    </>
  );
}
