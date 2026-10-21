import { site } from "@/app/content/site";
import Container from "./ui/Container";

export default function Footer() {
  return (
    <footer className="bg-ink-deep py-10 text-[14px] text-mute">
      <Container className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-head text-[18px] font-extrabold tracking-[-0.02em] text-white">
            Power<b className="text-volt">Projects</b>
          </p>
          <p className="mt-1">
            &copy; {site.year} {site.name}.
          </p>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {site.nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="transition-colors hover:text-white">
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a href={`mailto:${site.email}`} className="transition-colors hover:text-white">
              {site.email}
            </a>
          </li>
        </ul>
      </Container>
    </footer>
  );
}
