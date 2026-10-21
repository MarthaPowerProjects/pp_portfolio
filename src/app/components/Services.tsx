"use client";

import { site } from "@/app/content/site";
import cn from "@/app/utils/className";
import { useReducedMotion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import Container from "./ui/Container";
import { Arrow, ServiceIcon } from "./ui/Icons";
import SectionHead from "./ui/SectionHead";

export default function Services() {
  const track = useRef<HTMLUListElement>(null);
  const reduce = useReducedMotion();
  const [edge, setEdge] = useState({ start: true, end: false });

  const update = useCallback(() => {
    const el = track.current;
    if (!el) return;
    setEdge({
      start: el.scrollLeft <= 4,
      end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4,
    });
  }, []);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, [update]);

  const slide = (direction: 1 | -1) => {
    const el = track.current;
    const card = el?.querySelector("li");
    if (!el || !card) return;
    el.scrollBy({
      left: direction * (card.clientWidth + 20),
      behavior: reduce ? "auto" : "smooth",
    });
  };

  const controlClass =
    "flex size-11 items-center justify-center rounded-full border border-line bg-white text-ink transition-[opacity,border-color,background-color] hover:border-ink disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-line";

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="overflow-x-clip py-[clamp(4rem,8vw,6.5rem)]"
    >
      <Container>
        <Reveal>
          <div className="flex items-end justify-between gap-6">
            <SectionHead
              id="services"
              title={site.services.title}
              lead={site.services.lead}
            />
            <div className="hidden shrink-0 gap-2 md:flex">
              <button
                type="button"
                aria-label={site.services.prev}
                disabled={edge.start}
                onClick={() => slide(-1)}
                className={controlClass}
              >
                <Arrow direction="left" className="size-5" />
              </button>
              <button
                type="button"
                aria-label={site.services.next}
                disabled={edge.end}
                onClick={() => slide(1)}
                className={controlClass}
              >
                <Arrow className="size-5" />
              </button>
            </div>
          </div>

          <ul
            ref={track}
            onScroll={update}
            tabIndex={0}
            aria-label={site.services.title}
            className="mt-12 -mb-8 mr-[calc(50%-50vw)] flex snap-x snap-mandatory gap-5 overflow-x-auto pt-2 pr-[calc(50vw-50%)] pb-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {site.services.items.map((item) => (
              <li
                key={item.index}
                className="w-[82%] shrink-0 snap-start sm:w-[340px]"
              >
                <article
                  className={cn(
                    "group relative flex h-full flex-col overflow-hidden rounded-card border border-line bg-white p-7",
                    "transition-[transform,box-shadow,border-color] duration-300 hover:border-ink hover:shadow-[0_28px_48px_-28px_rgba(15,27,45,0.45)] hover:motion-safe:-translate-y-1.5",
                  )}
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-volt transition-transform duration-300 group-hover:scale-x-100"
                  />
                  <div className="flex items-start justify-between">
                    <span className="flex size-12 items-center justify-center rounded-xl bg-ink text-volt">
                      <ServiceIcon name={item.icon} className="size-6" />
                    </span>
                    <span className="font-head text-[40px] leading-none font-extrabold text-line">
                      {item.index}
                    </span>
                  </div>
                  <h3 className="mt-8 font-head text-[24px] leading-[1.08] font-bold tracking-[-0.02em]">
                    {item.name}
                  </h3>
                  <p className="mt-3 text-steel">{item.body}</p>
                  <ul className="mt-5 grid gap-2.5 border-t border-line pt-5 text-[15px]">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span
                          aria-hidden="true"
                          className="mt-[0.6em] size-1.5 shrink-0 rounded-full bg-volt"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className="mt-auto inline-flex items-center gap-2 pt-7 text-[15px] font-medium"
                  >
                    <span className="border-b border-transparent group-hover:border-ink">
                      {site.services.cta}
                    </span>
                    <Arrow className="size-4 transition-transform group-hover:motion-safe:translate-x-1" />
                  </a>
                </article>
              </li>
            ))}
          </ul>
          <p className="mt-2 text-[14px] text-steel md:hidden">{site.services.scrollHint}</p>
        </Reveal>
      </Container>
    </section>
  );
}
