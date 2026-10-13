import { site } from "@/app/content/site";
import cn from "@/app/utils/className";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="scroll-mt-22 py-[clamp(5rem,10vw,8.5rem)]"
    >
      <div className="mx-auto w-[min(1120px,calc(100%-48px))] md:w-[min(1120px,calc(100%-80px))]">
        <Reveal>
          <h2
            id="services-heading"
            tabIndex={-1}
            className="scroll-mt-22 font-mono text-[12px] leading-[1.4] tracking-[0.18em] text-glow uppercase"
          >
            {site.services.eyebrow}
          </h2>
          <ol className="mt-12 border-b border-line">
            {site.services.items.map((item) => (
              <li
                key={item.index}
                className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-3 border-t border-line py-8 md:grid-cols-[4.5rem_16rem_1fr] md:items-baseline md:gap-x-8"
              >
                <span className="font-mono text-[12px] tracking-[0.18em] text-glow">
                  {item.index}
                </span>
                <h3 className="text-[clamp(1.5rem,2vw,1.85rem)] font-medium tracking-[-0.03em] text-paper">
                  {item.name}
                </h3>
                <p
                  className={cn(
                    "col-span-2 text-[17px] leading-[1.6] text-mute md:col-span-1",
                  )}
                >
                  {item.body}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
