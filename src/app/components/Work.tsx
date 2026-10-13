import { site } from "@/app/content/site";
import { work } from "@/app/content/work";
import Reveal from "./Reveal";

export default function Work() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="scroll-mt-22 py-[clamp(5rem,10vw,8.5rem)]"
    >
      <div className="mx-auto w-[min(1120px,calc(100%-48px))] md:w-[min(1120px,calc(100%-80px))]">
        <Reveal>
          <h2
            id="work-heading"
            tabIndex={-1}
            className="scroll-mt-22 font-mono text-[12px] leading-[1.4] tracking-[0.18em] text-glow uppercase"
          >
            {site.work.eyebrow}
          </h2>
          <ol className="mt-12 border-b border-line">
            {work.map((item) => (
              <li key={item.title} className="group border-t border-line py-10 md:py-14">
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                  <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-glow">
                    {item.label}
                  </p>
                  <ul className="flex gap-4">
                    {item.tags.map((tag) => (
                      <li
                        key={tag}
                        className="font-mono text-[12px] uppercase tracking-[0.18em] text-mute"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
                <h3 className="mt-5 text-[clamp(1.85rem,3.2vw,2.75rem)] font-medium leading-[1.08] tracking-[-0.035em] text-paper">
                  <span className="bg-[linear-gradient(var(--color-cobalt),var(--color-cobalt))] bg-size-[0_1px] bg-bottom bg-no-repeat transition-[background-size] duration-200 group-hover:bg-size-[100%_1px] motion-reduce:transition-none">
                    {item.title}
                  </span>
                </h3>
                <p className="mt-4 max-w-[62ch] text-[17px] leading-[1.6] text-mute">
                  {item.outcome}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
