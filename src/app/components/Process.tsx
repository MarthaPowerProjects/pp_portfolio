"use client";

import { site } from "@/app/content/site";
import { motion, useReducedMotion } from "motion/react";
import Reveal from "./Reveal";
import Container from "./ui/Container";
import SectionHead from "./ui/SectionHead";

export default function Process() {
  const reduce = useReducedMotion();

  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="bg-ink py-[clamp(4rem,8vw,6.5rem)] text-white"
    >
      <Container>
        <Reveal>
          <SectionHead
            id="process"
            title={site.process.title}
            lead={site.process.lead}
            tone="dark"
          />
          <div className="relative mt-14">
            <div
              aria-hidden="true"
              className="absolute top-[11px] right-0 left-0 hidden h-0.5 bg-edge md:block"
            >
              <motion.div
                className="h-full origin-left bg-volt"
                initial={reduce ? false : { scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "0px 0px -80px 0px" }}
                transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
            <ol className="grid md:grid-cols-4 md:gap-8">
              {site.process.items.map((step, index) => (
                <li
                  key={step.title}
                  className="relative ml-3 border-l-2 border-edge pb-10 pl-9 last:border-l-transparent last:pb-0 md:ml-0 md:border-l-0 md:pt-12 md:pb-0 md:pl-0"
                >
                  <span className="absolute -left-3 flex size-6 items-center justify-center rounded-full bg-volt font-head text-[12px] font-extrabold text-ink md:top-0 md:left-0">
                    {index + 1}
                  </span>
                  <h3 className="font-head text-[28px] leading-none font-bold tracking-[-0.02em]">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-[30ch] text-[15.5px] text-mute">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
