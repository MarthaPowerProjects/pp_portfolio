import { site } from "@/app/content/site";
import ContactForm from "./ContactForm";
import Reveal from "./Reveal";
import Container from "./ui/Container";
import SectionHead from "./ui/SectionHead";

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-ink pb-[clamp(4rem,8vw,6.5rem)] text-white"
    >
      <Container>
        <Reveal>
          <div className="grid gap-12 border-t border-edge pt-[clamp(3rem,6vw,5rem)] lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <SectionHead
                id="contact"
                title={site.contact.title}
                lead={site.contact.lead}
                tone="dark"
              />
              <dl className="mt-10 grid gap-5 text-[15px]">
                <div>
                  <dt className="text-mute">Email</dt>
                  <dd>
                    <a
                      href={`mailto:${site.email}`}
                      className="border-b border-edge transition-colors hover:border-volt"
                    >
                      {site.email}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
            <div className="rounded-card border border-edge bg-panel p-6 md:p-10">
              <ContactForm />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
