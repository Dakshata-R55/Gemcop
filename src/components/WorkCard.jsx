import { Link } from "react-router-dom";
import WorkMedia from "./WorkMedia.jsx";

export default function WorkCard({
  item,
  featured = false,
  placeholderLabel = "Visual pending",
}) {
  const hasMedia = Boolean(item.image || item.video);

  return (
    <article className={`group surface-card overflow-hidden ${featured ? "md:col-span-2" : ""}`}>
      <Link to={item.href || "/portfolio"} className="block">
        <div
          className={`relative overflow-hidden bg-ink ${
            featured ? "aspect-[4/5] md:aspect-[16/10]" : "aspect-[3/4]"
          }`}
        >
          {hasMedia ? (
            <WorkMedia
              image={item.image}
              video={item.video}
              poster={item.poster}
              alt={item.name}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <span className="text-xs uppercase tracking-[0.22em] text-muted">
                {placeholderLabel}
              </span>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-2 p-6 sm:p-7">
          {item.category ? (
            <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gold">
              {item.category}
            </p>
          ) : null}
          <h3 className="font-display text-3xl">{item.name}</h3>
          {item.description ? (
            <p className="text-sm leading-relaxed text-muted">{item.description}</p>
          ) : null}
        </div>
      </Link>
    </article>
  );
}
