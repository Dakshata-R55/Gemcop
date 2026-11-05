import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cta, site } from "../data/site.js";
import Button from "./Button.jsx";

gsap.registerPlugin(ScrollTrigger);

export default function CinematicHero() {
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set([".cine-anim", ".cine-copy"], { clearProps: "all" });
    });

    mm.add("(max-width: 767px) and (prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "+=8%",
          pin: true,
          scrub: 0.25,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });

      tl.to(".cine-anim", { y: 6, ease: "none" }, 0);
    });

    mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "+=8%",
          pin: true,
          scrub: 0.25,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });

      tl.to(".cine-anim", { y: -8, scale: 0.98, ease: "none" }, 0);
      tl.to(".cine-copy", { y: -6, ease: "none" }, 0);
    });

    ScrollTrigger.refresh();

    return () => mm.revert();
  }, []);

  return (
    <div ref={rootRef} className="relative overflow-hidden">
      <div className="relative flex min-h-[82svh] lg:min-h-[85svh] items-end overflow-hidden pb-8 pt-4 lg:items-center lg:pb-12 lg:pt-6">
        {/* Animated Golden Logo GIF Background */}
        <div
          aria-hidden="true"
          className="cine-anim pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden lg:justify-end"
        >
          <img
            src="/assets/gemcop-animation.gif"
            alt=""
            className="h-auto w-[min(90vw,26rem)] object-contain mix-blend-screen opacity-90 sm:w-[min(75vw,32rem)] lg:w-[min(54vw,42rem)] lg:translate-x-[2%] select-none"
            style={{
              maskImage: "radial-gradient(circle at center, black 65%, transparent 98%)",
              WebkitMaskImage: "radial-gradient(circle at center, black 65%, transparent 98%)",
            }}
          />
        </div>

        <div className="cine-copy container-site relative z-20 w-full">
          <div className="max-w-xl lg:max-w-[36rem]">
            <h1 className="display-title text-[clamp(2.8rem,7.5vw,5.8rem)]">
              {site.brandLine}
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted sm:text-lg">
              Structured growth systems — not isolated marketing output.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button to={cta.to} variant="gold" className="rounded-full">
                {cta.label}
              </Button>
              <Button to="/case-studies" variant="secondary" className="rounded-full">
                Explore Our Work
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
