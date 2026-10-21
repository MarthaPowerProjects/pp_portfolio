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
import Container from "./ui/Container";

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

function Logo({ onClick }: { onClick?: (event: MouseEvent<HTMLAnchorElement>) => void }) {
  return (
    <a
      href="#top"
      onClick={onClick}
      className="font-head text-[20px] font-extrabold tracking-[-0.02em] text-white"
    >
      Power<b className="text-volt">Projects</b>
    </a>
  );
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
          className="fixed inset-0 z-[70] flex flex-col bg-ink text-white"
        >
          <Container className="flex h-[72px] items-center justify-between">
            <Logo onClick={closeAndGo("#top")} />
            <button
              ref={closeRef}
              type="button"
              className="text-[15px] text-white"
              onClick={() => setOpen(false)}
            >
              {site.menuClose}
            </button>
          </Container>
          <Container className="flex flex-1 flex-col justify-center gap-1">
            <nav className="flex flex-col gap-1" aria-label={site.menuOpen}>
              {site.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeAndGo(item.href)}
                  className="py-3 font-head text-[clamp(2.25rem,8vw,3.25rem)] leading-none font-extrabold tracking-[-0.03em] transition-colors hover:text-volt"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </Container>
          <Container className="pb-10">
            <ButtonLink
              href={site.bookCall.href}
              onClick={closeAndGo(site.bookCall.href)}
              size="lg"
              className="w-full"
            >
              {site.bookCall.label}
            </ButtonLink>
          </Container>
        </div>,
        document.body,
      )
    : null;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 h-[72px] text-white transition-[background-color,border-color,backdrop-filter] duration-200",
        scrolled
          ? "border-b border-edge bg-ink/85 backdrop-blur-md"
          : "border-b border-transparent bg-ink",
      )}
    >
      <Container className="flex h-full items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[15px] text-soft transition-colors duration-200 hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <ButtonLink href={site.bookCall.href}>{site.bookCall.label}</ButtonLink>
        </nav>
        <button
          type="button"
          className="text-[15px] text-white md:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen(true)}
        >
          {site.menuOpen}
        </button>
      </Container>
      {menu}
    </header>
  );
}
