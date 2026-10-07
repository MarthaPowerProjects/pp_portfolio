import { site } from "@/app/content/site";
import Reveal from "./Reveal";

export default function TwoPaths() {
  return (
    <section aria-labelledby="paths-heading" className="py-[clamp(5rem,10vw,8.5rem)]">
      <div className="mx-auto w-[min(1120px,calc(100%-48px))] md:w-[min(1120px,calc(100%-80px))]">
        <Reveal>
          <h2
            id="paths-heading"
            className="scroll-mt-22 font-mono text-[12px] leading-[1.4] tracking-[0.18em] text-glow uppercase"
          >
            {site.paths.eyebrow}
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {site.paths.items.map((item) => (
              <article
                key={item.title}
                className="flex flex-col rounded-card border border-line bg-panel p-8 md:p-10"
              >
                <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-mute">
                  {item.label}
                </p>
                <h3 className="mt-8 text-[clamp(2.1rem,4vw,3.6rem)] font-medium leading-[0.96] tracking-[-0.035em] text-paper">
                  {item.title}
                </h3>
                <p className="mt-6 text-[17px] leading-[1.6] text-mute">{item.body}</p>
                <a
                  href={item.href}
                  className="mt-auto w-fit bg-[linear-gradient(currentColor,currentColor)] bg-size-[100%_1px] bg-bottom bg-no-repeat pt-10 pb-0.5 text-[15px] text-paper transition-[color,background-size] duration-200 hover:bg-[linear-gradient(var(--color-cobalt),var(--color-cobalt))] hover:text-paper motion-reduce:transition-none"
                >
                  {item.link}
                </a>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
