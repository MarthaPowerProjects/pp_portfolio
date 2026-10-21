"use client";

import { site } from "@/app/content/site";
import cn from "@/app/utils/className";
import { useEffect, useState } from "react";
import { ButtonLink } from "./ui/Button";

export default function StickyCta() {
  const [pastHero, setPastHero] = useState(false);
  const [atContact, setAtContact] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    const contact = document.getElementById("contact");
    if (!hero || !contact) return;

    const heroObserver = new IntersectionObserver(([entry]) =>
      setPastHero(!entry.isIntersecting),
    );
    const contactObserver = new IntersectionObserver(([entry]) =>
      setAtContact(entry.isIntersecting),
    );
    heroObserver.observe(hero);
    contactObserver.observe(contact);
    return () => {
      heroObserver.disconnect();
      contactObserver.disconnect();
    };
  }, []);

  const visible = pastHero && !atContact;

  return (
    <div
      inert={!visible}
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-edge bg-ink/95 backdrop-blur-md transition-transform duration-300 md:hidden",
        visible ? "translate-y-0" : "translate-y-full",
      )}
    >
      <div className="flex items-center justify-between gap-4 px-6 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <p className="text-[14px] leading-tight text-soft">{site.contact.sticky}</p>
        <ButtonLink href={site.bookCall.href} className="shrink-0">
          {site.bookCall.label}
        </ButtonLink>
      </div>
    </div>
  );
}
