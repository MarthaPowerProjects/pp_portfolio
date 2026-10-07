import { site } from "@/app/content/site";
import ContactForm from "./ContactForm";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-22 py-[clamp(5rem,10vw,8.5rem)]"
    >
      <div className="mx-auto w-[min(1120px,calc(100%-48px))] md:w-[min(1120px,calc(100%-80px))]">
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <h2
                id="contact-heading"
                tabIndex={-1}
                className="scroll-mt-22 font-mono text-[12px] leading-[1.4] tracking-[0.18em] text-glow uppercase"
              >
                {site.contact.eyebrow}
              </h2>
              <p className="mt-8 max-w-[62ch] text-[clamp(1.35rem,2vw,1.75rem)] font-medium leading-[1.35] tracking-[-0.03em] text-paper">
                {site.contact.line}
              </p>
            </div>
            <div className="rounded-card border border-line bg-panel p-6 md:p-10">
              <ContactForm />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
