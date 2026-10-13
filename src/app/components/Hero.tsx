import { site } from "@/app/content/site";
import cn from "@/app/utils/className";
import { ButtonLink } from "./ui/Button";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      aria-labelledby="top"
      className="flex min-h-[calc(100svh-72px)] flex-col overflow-x-clip py-[clamp(5rem,10vw,8.5rem)]"
    >
      <div className="mx-auto w-[min(1120px,calc(100%-48px))] md:w-[min(1120px,calc(100%-80px))] flex flex-1 flex-col">
        <Reveal immediate className="flex flex-1 flex-col">
          <div className="relative isolate">
            <div
              className="pointer-events-none absolute -top-14 -left-8 -z-10 h-96 w-[min(40rem,78vw)] bg-[radial-gradient(closest-side,color-mix(in_oklch,var(--color-cobalt)_32%,transparent),color-mix(in_oklch,var(--color-cobalt-deep)_12%,transparent)_56%,transparent_72%)]"
              aria-hidden="true"
            />
            <p className="font-mono text-[12px] leading-[1.4] tracking-[0.18em] text-glow uppercase">
              {site.hero.eyebrow}
            </p>
            <h1
              id="top"
              tabIndex={-1}
              className="mt-6 scroll-mt-22 text-[clamp(3.25rem,7vw,6.75rem)] font-medium leading-[0.92] tracking-[-0.045em] text-paper"
            >
              {site.hero.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p className="mt-8 max-w-[62ch] text-[17px] leading-[1.6] text-mute">
              {site.hero.subcopy}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href={site.hero.primary.href} className="w-full sm:w-auto">
                {site.hero.primary.label}
              </ButtonLink>
              <ButtonLink
                href={site.hero.secondary.href}
                variant="secondary"
                className="w-full sm:w-auto"
              >
                {site.hero.secondary.label}
              </ButtonLink>
            </div>
            <p className="mt-6 text-[15px] text-mute">{site.hero.note}</p>
          </div>
          <ul className="mt-auto grid border-t border-line pt-0 md:grid-cols-3">
            {site.hero.facts.map((fact, index) => (
              <li
                key={fact.index}
                className={cn(
                  "py-8 md:px-8",
                  index > 0 && "border-t border-line md:border-t-0 md:border-l",
                  index === 0 && "md:pl-0",
                  index === site.hero.facts.length - 1 && "md:pr-0",
                )}
              >
                <p className="flex items-baseline gap-3">
                  <span className="font-mono text-[12px] tracking-[0.18em] text-glow">
                    {fact.index}
                  </span>
                  <span className="text-[1.35rem] font-medium tracking-[-0.03em] text-paper">
                    {fact.title}
                  </span>
                </p>
                <p className="mt-3 max-w-[28ch] text-[17px] leading-[1.6] text-mute">
                  {fact.body}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
