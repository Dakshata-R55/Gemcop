import { site } from "../data/site.js";

import WorkMedia from "./WorkMedia.jsx";

import Reveal from "./Reveal.jsx";



export default function ServiceVisual({ visual, title }) {

  if (!visual) return null;



  if (visual.type === "video") {

    return (

      <Reveal>

        <figure className="relative overflow-hidden border border-gold/25 bg-ink">

          <div className="mx-auto aspect-[9/16] w-full max-h-[min(86vh,52rem)] max-w-[28rem] sm:max-w-[32rem]">

            <WorkMedia

              video={visual.src}

              poster={visual.poster}

              alt={visual.alt || title}

              className="h-full w-full object-cover"

            />

          </div>

        </figure>

      </Reveal>

    );

  }



  if (visual.type === "brand") {

    return (

      <Reveal>

        <div className="relative overflow-hidden border border-gold/25 bg-ink">

          <div

            aria-hidden="true"

            className="pointer-events-none absolute inset-0 flex items-center justify-center"

          >

            <img

              src={site.icon}

              alt=""

              className="h-[88%] w-auto max-w-none object-contain opacity-[0.14]"

            />

          </div>

          <div className="relative grid gap-px bg-gold/20 md:grid-cols-2">

            {(visual.images || []).map((image) => (

              <div key={image.src} className="bg-ink">

                <img

                  src={image.src}

                  alt={image.alt || ""}

                  loading="lazy"

                  className="aspect-square h-auto w-full object-cover"

                />

              </div>

            ))}

          </div>

        </div>

      </Reveal>

    );

  }



  return null;

}

