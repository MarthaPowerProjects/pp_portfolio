import { site } from "@/app/content/site";
import cn from "@/app/utils/className";
import { ButtonLink } from "./ui/Button";
import Reveal from "./Reveal";

export default function Pricing() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="scroll-mt-22 py-[clamp(5rem,10vw,8.5rem)]"
    >
      <div className="mx-auto w-[min(1120px,calc(100%-48px))] md:w-[min(1120px,calc(100%-80px))]">
        <Reveal>
          <h2
            id="pricing-heading"
            tabIndex={-1}
            className="scroll-mt-22 font-mono text-[12px] leading-[1.4] tracking-[0.18em] text-glow uppercase"
          >
            {site.pricing.eyebrow}
          </h2>
          <p className="mt-8 max-w-[36ch] text-[clamp(1.35rem,2vw,1.75rem)] font-medium leading-[1.35] tracking-[-0.03em] text-paper">
            {site.pricing.intro}
          </p>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {site.pricing.plans.map((plan) => (
              <article
                key={plan.name}
                className={cn(
                  "flex h-full flex-col rounded-card p-8 md:p-10",
                  plan.recommended
                    ? "order-first border-x border-b border-line border-t-2 border-t-gold bg-ink-soft lg:order-none"
                    : "border border-line bg-panel",
                )}
              >
                <p
                  className={cn(
                    "font-mono text-[12px] uppercase tracking-[0.18em] text-gold",
                    plan.recommended ? "" : "invisible max-lg:hidden",
                  )}
                >
                  {site.pricing.recommended}
                </p>
                <h3 className="mt-3 font-mono text-[12px] uppercase tracking-[0.18em] text-mute">
                  {plan.name}
                </h3>
                <p className="mt-8 font-mono text-[clamp(2.75rem,4vw,3.75rem)] font-medium leading-[0.95] tracking-[-0.045em] text-paper tabular-nums">
                  {plan.price}
                </p>
                {"cadence" in plan && plan.cadence ? (
                  <p className="mt-3 font-mono text-[12px] uppercase tracking-[0.18em] text-mute">
                    {plan.cadence}
                  </p>
                ) : null}
                <p className="mt-3 text-[15px] text-mute">{plan.time}</p>
                <p className="mt-8 text-[17px] leading-[1.6] text-paper">{plan.audience}</p>
                <p className="mt-8 font-mono text-[12px] uppercase tracking-[0.18em] text-mute">
                  {site.pricing.includes}
                </p>
                <ul className="mt-3 border-t border-line">
                  {plan.includes.map((item) => (
                    <li
                      key={item}
                      className="border-b border-line py-3 text-[15px] leading-snug text-paper"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <ButtonLink href={plan.href} className="mt-auto w-full pt-8">
                  {plan.cta}
                </ButtonLink>
              </article>
            ))}
          </div>
          <p className="mt-12 max-w-[62ch] text-[17px] leading-[1.6] text-mute">
            {site.pricing.build}
          </p>
          <ButtonLink href={site.pricing.buildHref} variant="text" className="mt-6">
            {site.pricing.buildCta}
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
