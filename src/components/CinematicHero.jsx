import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cta, site } from "../data/site.js";
import Button from "./Button.jsx";

gsap.registerPlugin(ScrollTrigger);

const panels = [
  { id: "a", label: "Visual pending", x: "-42vw", y: "-18vh", rotate: -8, z: 2 },
  { id: "b", label: "Visual pending", x: "38vw", y: "-22vh", rotate: 7, z: 3 },
  { id: "c", label: "Visual pending", x: "-36vw", y: "24vh", rotate: 5, z: 4 },
  { id: "d", label: "Visual pending", x: "34vw", y: "20vh", rotate: -6, z: 2 },
];

export default function CinematicHero() {
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set([".cine-panel", ".cine-icon", ".cine-copy"], { clearProps: "all" });
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
      gsap.utils.toArray(root.querySelectorAll(".cine-panel")).forEach((panel, index) => {
        if (index > 1) {
          gsap.set(panel, { autoAlpha: 0 });
          return;
        }
        tl.to(
          panel,
          {
            x: index === 0 ? -28 : 32,
            y: index === 0 ? 36 : -20,
            rotate: index === 0 ? -4 : 3,
            ease: "none",
          },
          0,
        );
      });
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

      gsap.utils.toArray(root.querySelectorAll(".cine-panel")).forEach((panel, index) => {
        const from = panels[index];
        tl.fromTo(
          panel,
          {
            x: from.x,
            y: from.y,
            rotate: from.rotate,
            autoAlpha: 0.35,
          },
          {
            x: index % 2 === 0 ? -48 : 56,
            y: index < 2 ? 28 : -24,
            rotate: from.rotate * 0.35,
            autoAlpha: 1,
            ease: "none",
          },
          0,
        );
      });

      tl.to(".cine-copy", { y: -16, ease: "none" }, 0);
    });

    ScrollTrigger.refresh();

    return () => mm.revert();
  }, []);

  return (
    <div ref={rootRef} className="relative overflow-hidden">
      <div className="relative flex min-h-[100svh] items-end overflow-hidden pb-16 pt-8 lg:items-center lg:pb-24 lg:pt-10">
        <div className="cine-stage pointer-events-none absolute inset-0">
          {panels.map((panel, index) => (
            <article
              key={panel.id}
              className={`cine-panel absolute overflow-hidden border border-line bg-ink-soft ${
                index > 1 ? "hidden md:block" : ""
              }`}
              style={{
                width: index % 2 === 0 ? "min(22vw, 15rem)" : "min(18vw, 12.5rem)",
                aspectRatio: "4 / 5",
                left: index % 2 === 0 ? "8%" : "auto",
                right: index % 2 === 1 ? "6%" : "auto",
                top: index < 2 ? "14%" : "auto",
                bottom: index >= 2 ? "12%" : "auto",
                zIndex: panel.z,
              }}
            >
              <div className="flex h-full items-center justify-center">
                <p className="text-[0.65rem] uppercase tracking-[0.2em] text-muted">
                  {panel.label}
                </p>
              </div>
            </article>
          ))}

          <div className="cine-icon absolute left-1/2 top-[38%] z-10 w-[min(70%,18rem)] -translate-x-1/2 -translate-y-1/2 sm:top-[42%] sm:w-[min(58%,22rem)] lg:left-auto lg:right-[-4%] lg:top-1/2 lg:w-[min(50vw,38rem)] lg:translate-x-0">
            <img
              src={site.icon}
              alt=""
              aria-hidden="true"
              className="absolute left-[-6%] top-[-4%] w-[112%] max-w-none object-contain opacity-[0.08]"
            />
            <div
              aria-hidden="true"
              className="absolute left-[10%] top-[12%] h-[76%] w-[76%] border border-gold/25"
            />
            <img
              src={site.icon}
              alt="GEMCOP"
              className="relative z-[1] h-auto w-full object-contain"
            />
          </div>
        </div>

        <div className="cine-copy container-site relative z-20 w-full">
          <div className="max-w-xl lg:max-w-[34rem]">
            <p className="eyebrow">{site.name}</p>
            <h1 className="display-title mt-6 text-[clamp(2.6rem,7vw,5.6rem)]">
              {site.brandLine}
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
              Structured growth systems — not isolated marketing output.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
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
