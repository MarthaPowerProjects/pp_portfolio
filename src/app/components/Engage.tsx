import { site } from "@/app/content/site";
import cn from "@/app/utils/className";
import Reveal from "./Reveal";
import { ButtonLink } from "./ui/Button";
import Container from "./ui/Container";
import SectionHead from "./ui/SectionHead";

export default function Engage() {
  return (
    <section
      id="engage"
      aria-labelledby="engage-heading"
      className="bg-ink pt-[clamp(4rem,8vw,6.5rem)] pb-[clamp(3rem,6vw,5rem)] text-white"
    >
      <Container>
        <Reveal>
          <SectionHead
            id="engage"
            title={site.engage.title}
            lead={site.engage.lead}
            tone="dark"
          />
          <ul className="mt-12 grid gap-5 md:grid-cols-3">
            {site.engage.items.map((item) => (
              <li key={item.title}>
                <article
                  className={cn(
                    "relative flex h-full flex-col rounded-card bg-white p-8 text-ink transition-transform duration-300 hover:motion-safe:-translate-y-1.5",
                    item.featured && "ring-[3px] ring-volt",
                  )}
                >
                  {item.featured ? (
                    <span className="absolute -top-3.5 left-8 rounded-full bg-volt px-3 py-1 text-[13px] font-medium text-ink">
                      {site.engage.featured}
                    </span>
                  ) : null}
                  <h3 className="font-head text-[26px] leading-[1.05] font-bold tracking-[-0.02em]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[15.5px] text-steel">{item.body}</p>
                  <div className="mt-auto pt-8">
                    <ButtonLink
                      href="#contact"
                      variant={item.featured ? "primary" : "secondary"}
                      className="w-full"
                    >
                      {item.cta}
                    </ButtonLink>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
