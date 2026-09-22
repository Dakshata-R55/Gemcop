import { useEffect, useRef } from "react";

export default function WorkMedia({
  image,
  video,
  poster,
  alt = "",
  className = "h-full w-full object-contain",
}) {
  const videoRef = useRef(null);

  useEffect(() => {
    const node = videoRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.play().catch(() => {});
        } else {
          node.pause();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [video]);

  if (video) {
    return (
      <video
        ref={videoRef}
        src={video}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
        className={className}
      />
    );
  }

  if (!image) return null;

  return <img src={image} alt={alt} loading="lazy" className={className} />;
}
