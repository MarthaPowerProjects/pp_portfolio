"use client";

import { site } from "@/app/content/site";
import cn from "@/app/utils/className";
import {
  useEffect,
  useId,
  useRef,
  useState,
  useSyncExternalStore,
  type MouseEvent,
} from "react";
import { createPortal } from "react-dom";
import { ButtonLink } from "./ui/Button";

function scrollToHref(href: string) {
  const id = href.slice(1);
  const section = document.getElementById(id);
  if (!section) return;

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  section.scrollIntoView({
    behavior: reduce ? "auto" : "smooth",
    block: "start",
  });

  const headingId = id === "top" ? "top" : `${id}-heading`;
  const heading = document.getElementById(headingId);
  if (heading instanceof HTMLElement) {
    heading.focus({ preventScroll: true });
  }
}

function subscribeToScroll(onStoreChange: () => void) {
  window.addEventListener("scroll", onStoreChange, { passive: true });
  return () => window.removeEventListener("scroll", onStoreChange);
}

function scrolledSnapshot() {
  return window.scrollY > 8;
}

function scrolledServerSnapshot() {
  return false;
}

export default function Navbar() {
  const scrolled = useSyncExternalStore(
    subscribeToScroll,
    scrolledSnapshot,
    scrolledServerSnapshot,
  );
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const restoreFocus = useRef(true);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;

    restoreFocus.current = true;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        return;
      }

      if (event.key !== "Tab" || !menuRef.current) return;

      const items = Array.from(
        menuRef.current.querySelectorAll<HTMLElement>(
          "a[href], button:not([disabled])",
        ),
      );
      if (items.length === 0) return;

      const first = items[0];
      const last = items[items.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    const main = document.querySelector("main");
    const footer = document.querySelector("footer");
    main?.setAttribute("inert", "");
    footer?.setAttribute("inert", "");
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      main?.removeAttribute("inert");
      footer?.removeAttribute("inert");
      document.body.style.overflow = previousOverflow;
      if (restoreFocus.current) previouslyFocused?.focus();
    };
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const closeAndGo = (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    restoreFocus.current = false;
    setOpen(false);
    scrollToHref(href);
  };

  const menu = open
      ? createPortal(
          <div
            ref={menuRef}
            id={menuId}
            role="dialog"
            aria-modal="true"
            aria-label={site.menuOpen}
            className="fixed inset-0 z-[70] flex flex-col bg-ink"
          >
            <div className="mx-auto w-[min(1120px,calc(100%-48px))] md:w-[min(1120px,calc(100%-80px))] flex h-[72px] items-center justify-between">
              <a
                href="#top"
                onClick={closeAndGo("#top")}
                className="inline-flex items-center gap-2 text-[16px] font-medium tracking-[-0.03em]"
              >
                <span aria-hidden="true" className="size-1.5 rounded-full bg-cobalt" />
                {site.name}
              </a>
              <button
                ref={closeRef}
                type="button"
                className="text-[15px] text-paper"
                onClick={() => setOpen(false)}
              >
                {site.menuClose}
              </button>
            </div>
            <nav className="mx-auto w-[min(1120px,calc(100%-48px))] md:w-[min(1120px,calc(100%-80px))] flex flex-1 flex-col justify-center gap-2" aria-label={site.menuOpen}>
              {site.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeAndGo(item.href)}
                  className="py-3 text-[clamp(2.5rem,8vw,3.5rem)] font-medium leading-none tracking-[-0.035em]"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="mx-auto w-[min(1120px,calc(100%-48px))] md:w-[min(1120px,calc(100%-80px))] pb-10">
              <ButtonLink
                href={site.bookCall.href}
                onClick={closeAndGo(site.bookCall.href)}
                className="w-full"
              >
                {site.bookCall.label}
              </ButtonLink>
            </div>
          </div>,
          document.body,
        )
      : null;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 h-[72px] transition-[background-color,border-color,backdrop-filter] duration-200",
        scrolled
          ? "border-b border-line bg-ink/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto w-[min(1120px,calc(100%-48px))] md:w-[min(1120px,calc(100%-80px))] flex h-full items-center justify-between">
        <a
          href="#top"
          className="inline-flex items-center gap-2 text-[16px] font-medium tracking-[-0.03em]"
        >
          <span aria-hidden="true" className="size-1.5 rounded-full bg-cobalt" />
          {site.name}
        </a>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[15px] text-mute transition-colors duration-200 hover:text-paper"
            >
              {item.label}
            </a>
          ))}
          <ButtonLink href={site.bookCall.href}>{site.bookCall.label}</ButtonLink>
        </nav>
        <button
          type="button"
          className="text-[15px] text-paper md:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen(true)}
        >
          {site.menuOpen}
        </button>
      </div>
      {menu}
    </header>
  );
}
