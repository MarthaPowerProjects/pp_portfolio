import { site } from "@/app/content/site";
import cn from "@/app/utils/className";
import Reveal from "./Reveal";

export default function Steps() {
  return (
    <section aria-labelledby="steps-heading" className="py-[clamp(5rem,10vw,8.5rem)]">
      <div className="mx-auto w-[min(1120px,calc(100%-48px))] md:w-[min(1120px,calc(100%-80px))]">
        <Reveal>
          <h2
            id="steps-heading"
            className="scroll-mt-22 text-[clamp(2.1rem,4vw,3.6rem)] font-medium leading-[0.96] tracking-[-0.035em] text-paper"
          >
            {site.steps.title}
          </h2>
          <ol className="mt-12 grid border-y border-line md:grid-cols-3">
            {site.steps.items.map((step, index) => (
              <li
                key={step.index}
                className={cn(
                  "py-8 md:px-8 md:py-10",
                  index > 0 && "border-t border-line md:border-t-0 md:border-l",
                  index === 0 && "md:pl-0",
                  index === site.steps.items.length - 1 && "md:pr-0",
                )}
              >
                <p className="font-mono text-[12px] tracking-[0.18em] text-glow">
                  {step.index}
                </p>
                <h3 className="mt-6 text-[clamp(1.75rem,2.5vw,2.25rem)] font-medium tracking-[-0.03em] text-paper">
                  {step.title}
                </h3>
                <p className="mt-3 text-[17px] leading-[1.6] text-mute">{step.body}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
