import type { Metadata } from "next";
import { Bricolage_Grotesque, IBM_Plex_Sans } from "next/font/google";
import { site } from "./content/site";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const plex = IBM_Plex_Sans({
  variable: "--font-plex",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  openGraph: {
    title: site.title,
    description: site.description,
    type: "website",
    siteName: site.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${plex.variable} scroll-smooth bg-ink motion-reduce:scroll-auto [&_:focus]:outline-none [&_:focus-visible]:outline-3 [&_:focus-visible]:outline-offset-[3px] [&_:focus-visible]:outline-volt [&::-webkit-scrollbar]:w-2.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:border-[3px] [&::-webkit-scrollbar-thumb]:border-ink [&::-webkit-scrollbar-thumb]:bg-edge`}
    >
      <body className="min-h-screen bg-paper font-sans text-[17px] leading-[1.6] text-ink antialiased selection:bg-volt selection:text-ink">
        <a
          href="#top"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[80] focus:rounded-lg focus:bg-volt focus:px-4 focus:py-2 focus:text-ink"
        >
          {site.skip}
        </a>
        {children}
      </body>
    </html>
  );
}
