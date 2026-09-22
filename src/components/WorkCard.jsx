import { Link } from "react-router-dom";

export default function WorkCard({
  item,
  featured = false,
  placeholderLabel = "Visual pending",
}) {
  return (
    <article className={`group surface-card overflow-hidden ${featured ? "md:col-span-2" : ""}`}>
      <Link to={item.href || "/portfolio"} className="block">
        <div
          className={`relative overflow-hidden bg-paper-muted ${
            featured ? "aspect-[16/9] md:aspect-[21/9]" : "aspect-[4/3]"
          }`}
        >
          {item.image ? (
            <img
              src={item.image}
              alt={item.name}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d]">
              <span className="text-xs uppercase tracking-[0.22em] text-muted">
                {placeholderLabel}
              </span>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-2 p-6 sm:p-7">
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gold">
            {item.category}
          </p>
          <h3 className="font-display text-3xl text-paper">{item.name}</h3>
          <p className="text-sm leading-relaxed text-muted">{item.description}</p>
        </div>
      </Link>
    </article>
  );
}
