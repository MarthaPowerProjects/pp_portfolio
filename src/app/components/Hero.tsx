import { site } from "@/app/content/site";
import cn from "@/app/utils/className";
import Reveal from "./Reveal";
import { ButtonLink } from "./ui/Button";
import Container from "./ui/Container";
import { Arrow, ServiceIcon } from "./ui/Icons";

const nodes = [
  { x: 22, y: 24, delay: "0s" },
  { x: 80, y: 27, delay: "-1.5s" },
  { x: 77, y: 77, delay: "-3s" },
  { x: 24, y: 75, delay: "-4.5s" },
] as const;

function Orbit() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto aspect-square w-full max-w-[460px] select-none"
    >
      <svg viewBox="0 0 100 100" className="absolute inset-0 size-full">
        <circle cx="50" cy="50" r="27" fill="none" stroke="var(--color-edge)" strokeWidth="0.3" strokeDasharray="1 1.6" />
        <circle cx="50" cy="50" r="44" fill="none" stroke="var(--color-edge)" strokeWidth="0.3" strokeDasharray="1 1.6" />
        {nodes.map((node) => (
          <line
            key={`${node.x}-${node.y}`}
            x1="50"
            y1="50"
            x2={node.x}
            y2={node.y}
            stroke="var(--color-volt)"
            strokeOpacity="0.75"
            strokeWidth="0.45"
            strokeDasharray="2 5"
            className="animate-flow"
          />
        ))}
      </svg>
      <div className="absolute top-1/2 left-1/2 flex size-[26%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-volt text-center font-head text-[clamp(0.8rem,2.4vw,1.15rem)] leading-[1.05] font-extrabold tracking-[-0.02em] text-ink shadow-[0_0_80px_-8px_rgba(255,194,26,0.55)]">
        <span>
          {site.hero.orbitCenter[0]}
          <br />
          {site.hero.orbitCenter[1]}
        </span>
      </div>
      {site.services.items.map((item, index) => (
        <div
          key={item.verb}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${nodes[index].x}%`, top: `${nodes[index].y}%` }}
        >
          <div
            className="animate-float flex items-center gap-2.5 rounded-xl border border-edge bg-panel px-3 py-2 shadow-[0_18px_40px_-18px_rgba(0,0,0,0.7)] sm:px-3.5 sm:py-2.5"
            style={{ animationDelay: nodes[index].delay }}
          >
            <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-ink text-volt">
              <ServiceIcon name={item.icon} className="size-[18px]" />
            </span>
            <span className="leading-tight">
              <span className="block font-head text-[15px] font-bold text-white">
                {item.verb}
              </span>
              <span className="hidden text-[12px] text-mute sm:block">{item.hook}</span>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="top"
      className="relative overflow-x-clip bg-ink text-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(70%_80%_at_75%_30%,black,transparent)] bg-[linear-gradient(var(--color-edge)_1px,transparent_1px),linear-gradient(90deg,var(--color-edge)_1px,transparent_1px)] bg-[size:56px_56px] opacity-40"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-[-10%] h-[520px] w-[min(46rem,90vw)] bg-[radial-gradient(closest-side,rgba(255,194,26,0.16),transparent)]"
      />
      <Container className="relative pt-[clamp(2.5rem,6vw,4.5rem)]">
        <Reveal immediate>
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
            <div>
              <p className="inline-flex items-center gap-2.5 rounded-full border border-edge bg-panel/70 py-1.5 pr-4 pl-3 text-[14px] text-soft">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full rounded-full bg-volt opacity-60 motion-safe:animate-ping" />
                  <span className="relative inline-flex size-2 rounded-full bg-volt" />
                </span>
                {site.hero.eyebrow}
              </p>
              <h1
                id="top"
                tabIndex={-1}
                className="mt-7 scroll-mt-22 font-head text-[clamp(2.75rem,7vw,4.75rem)] leading-[1] font-extrabold tracking-[-0.035em]"
              >
                {site.hero.headline.map((part) =>
                  "accent" in part ? (
                    <span key={part.text} className="text-volt">
                      {part.text}
                    </span>
                  ) : (
                    part.text
                  ),
                )}
              </h1>
              <p className="mt-6 max-w-[48ch] text-soft">{site.hero.subcopy}</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <ButtonLink
                  href={site.hero.primary.href}
                  size="lg"
                  className="group w-full sm:w-auto"
                >
                  {site.hero.primary.label}
                  <Arrow className="size-4 transition-transform group-hover:motion-safe:translate-x-0.5" />
                </ButtonLink>
                <ButtonLink
                  href={site.hero.secondary.href}
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  {site.hero.secondary.label}
                </ButtonLink>
              </div>
            </div>
            <Orbit />
          </div>

          <ul className="mt-[clamp(3rem,7vw,5rem)] grid grid-cols-2 border-t border-edge lg:grid-cols-4">
            {site.hero.trust.map((item, index) => (
              <li
                key={item.title}
                className={cn(
                  "py-6 pr-4 lg:px-6",
                  index % 2 === 1 && "pl-4 max-lg:border-l max-lg:border-edge",
                  index > 1 && "max-lg:border-t max-lg:border-edge",
                  index > 0 && "lg:border-l lg:border-edge",
                  index === 0 && "lg:pl-0",
                )}
              >
                <p className="font-head text-[clamp(1.25rem,2.4vw,1.6rem)] leading-tight font-bold text-white">
                  {item.title}
                </p>
                <p className="mt-1.5 max-w-[26ch] text-[14px] leading-snug text-mute">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
      <div className="h-[clamp(2rem,5vw,3.5rem)]" />
    </section>
  );
}
