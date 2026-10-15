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
      gsap.set([".cine-icon", ".cine-copy"], { clearProps: "all" });
    });

    mm.add("(max-width: 767px) and (prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "+=90%",
          pin: true,
          scrub: 0.7,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });

      tl.to(".cine-icon", { y: 18, rotate: 2, ease: "none" }, 0);
    });

    mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "+=160%",
          pin: true,
          scrub: 0.85,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });

      tl.fromTo(
        ".cine-icon",
        { scale: 1.04, rotate: -5 },
        { scale: 1, rotate: 1.5, ease: "none" },
        0,
      );

      tl.to(".cine-copy", { y: -16, ease: "none" }, 0);
    });

    ScrollTrigger.refresh();

    return () => mm.revert();
  }, []);

  return (
    <div ref={rootRef} className="relative overflow-hidden">
      <div className="relative flex min-h-[100svh] items-end overflow-hidden pb-20 pt-10 lg:items-center lg:pb-28 lg:pt-12">
        <div className="cine-stage pointer-events-none absolute inset-0">
          <div className="cine-icon absolute left-1/2 top-[38%] z-10 w-[min(70%,18rem)] -translate-x-1/2 -translate-y-1/2 sm:top-[42%] sm:w-[min(58%,22rem)] lg:left-auto lg:right-[-4%] lg:top-1/2 lg:w-[min(50vw,38rem)] lg:translate-x-0">
            <img
              src={site.icon}
              alt=""
              aria-hidden="true"
              className="absolute left-[-6%] top-[-4%] w-[112%] max-w-none object-contain opacity-[0.08]"
            />
            <div
              aria-hidden="true"
              className="absolute left-[10%] top-[12%] h-[76%] w-[76%] border border-white/10"
            />
            <img
              src={site.icon}
              alt="GEMCOP"
              className="relative z-[1] h-auto w-full object-contain"
            />
          </div>
        </div>

        <div className="cine-copy container-site relative z-20 w-full">
          <div className="max-w-xl lg:max-w-[36rem]">
            <p className="eyebrow">{site.name}</p>
            <h1 className="display-title mt-8 text-[clamp(3rem,8vw,6.4rem)]">
              {site.brandLine}
            </h1>
            <p className="mt-8 max-w-md text-base leading-relaxed text-muted sm:text-lg">
              Structured growth systems — not isolated marketing output.
            </p>
            <div className="mt-12 flex flex-wrap gap-4">
              <Button to={cta.to} variant="gold">
                {cta.label}
              </Button>
              <Button to="/portfolio" variant="secondary">
                Explore Our Work
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
