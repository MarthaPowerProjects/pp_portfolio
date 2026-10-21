"use client";

import { site } from "@/app/content/site";
import { work, workTags, type WorkTag } from "@/app/content/work";
import cn from "@/app/utils/className";
import { AnimatePresence, MotionConfig, motion } from "motion/react";
import { useState } from "react";
import Reveal from "./Reveal";
import Container from "./ui/Container";
import { ServiceIcon } from "./ui/Icons";
import SectionHead from "./ui/SectionHead";
import WorkArt from "./WorkArt";

const tagIcon = {
  Build: "build",
  Integrate: "integrate",
  Maintain: "maintain",
} as const;

type Filter = "All" | WorkTag;

export default function Work() {
  const [filter, setFilter] = useState<Filter>("All");
  const visible = work.filter((item) => filter === "All" || item.tag === filter);
  const filters: Filter[] = ["All", ...workTags];

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="py-[clamp(4rem,8vw,6.5rem)]"
    >
      <Container>
        <Reveal>
          <SectionHead id="work" title={site.work.title} lead={site.work.lead} />

          <div
            role="group"
            aria-label={site.work.filterLabel}
            className="mt-10 flex gap-1 overflow-x-auto border-b border-line [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {filters.map((name) => {
              const active = filter === name;
              return (
                <button
                  key={name}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setFilter(name)}
                  className={cn(
                    "relative flex shrink-0 cursor-pointer items-center gap-2 px-4 py-3.5 text-[15px] font-medium transition-colors",
                    active ? "text-ink" : "text-steel hover:text-ink",
                  )}
                >
                  {name !== "All" ? (
                    <ServiceIcon name={tagIcon[name]} className="size-[18px]" />
                  ) : null}
                  {name === "All" ? site.work.all : name}
                  {active ? (
                    <motion.span
                      layoutId="work-filter"
                      className="absolute inset-x-3 -bottom-px h-0.5 bg-ink"
                    />
                  ) : null}
                </button>
              );
            })}
          </div>

          <MotionConfig reducedMotion="user">
            <ul
              aria-live="polite"
              className="mt-10 grid gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3"
            >
              <AnimatePresence mode="popLayout" initial={false}>
                {visible.map((item) => (
                  <motion.li
                    key={item.title}
                    layout
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <article className="group">
                      <div className="relative aspect-[4/3] overflow-hidden rounded-card bg-[linear-gradient(135deg,#0f1b2d,#1d3556)]">
                        <WorkArt tag={item.tag} />
                        <span className="absolute top-4 left-4 rounded-full bg-volt px-3 py-1 text-[13px] font-medium text-ink">
                          {item.tag}
                        </span>
                      </div>
                      <h3 className="mt-5 font-head text-[22px] leading-[1.1] font-bold tracking-[-0.02em]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-[15.5px] text-steel">{item.outcome}</p>
                    </article>
                  </motion.li>
                ))}
              </AnimatePresence>
            </ul>
          </MotionConfig>

          <p className="mt-10 text-[14px] text-steel">{site.work.note}</p>
        </Reveal>
      </Container>
    </section>
  );
}
