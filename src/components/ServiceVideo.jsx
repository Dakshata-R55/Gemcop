import { useEffect, useRef } from "react";

export default function ServiceVideo({
  src,
  poster,
  title = "",
  className = "",
}) {
  const videoRef = useRef(null);

  useEffect(() => {
    const node = videoRef.current;
    if (!node || !src) return undefined;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.play().catch(() => {});
        } else {
          node.pause();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [src]);

  return (
    <div
      className={`relative overflow-hidden rounded-[1.4rem] bg-[#0c0c0c] ${className}`}
    >
      <div className="aspect-[16/10] w-full">
        {src ? (
          <video
            ref={videoRef}
            src={src}
            poster={poster}
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={title ? `${title} video` : "Service video"}
            className="h-full w-full object-cover"
          />
        ) : (
          <div
            className="relative h-full w-full overflow-hidden bg-[#111]"
            aria-hidden="true"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_58%)]" />
            <div className="absolute inset-x-[12%] top-1/2 h-px -translate-y-1/2 bg-white/10" />
            <div className="absolute inset-y-[18%] left-1/2 w-px -translate-x-1/2 bg-white/10" />
            <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/12" />
          </div>
        )}
      </div>
    </div>
  );
}
