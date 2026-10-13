import { site } from "@/app/content/site";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto w-[min(1120px,calc(100%-48px))] md:w-[min(1120px,calc(100%-80px))] flex flex-col gap-10 py-12 md:flex-row md:items-end md:justify-between md:py-16">
        <div>
          <p className="text-[16px] font-medium tracking-[-0.03em] text-paper">
            {site.name}
          </p>
          <p className="mt-3 max-w-[36ch] text-[15px] leading-[1.6] text-mute">
            {site.footerLine}
          </p>
          <p className="mt-6 font-mono text-[12px] tracking-[0.18em] text-mute">
            {site.year}
          </p>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-3">
          {site.nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-[15px] text-mute transition-colors duration-200 hover:text-paper"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
