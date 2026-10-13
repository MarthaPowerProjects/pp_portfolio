import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { site } from "./content/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth bg-ink scheme-dark motion-reduce:scroll-auto [&_:focus]:outline-none [&_:focus-visible]:outline-2 [&_:focus-visible]:outline-offset-[3px] [&_:focus-visible]:outline-glow [&::-webkit-scrollbar]:w-2.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:border-[3px] [&::-webkit-scrollbar-thumb]:border-ink [&::-webkit-scrollbar-thumb]:bg-line`}
    >
      <body className="min-h-screen bg-ink font-sans text-[17px] leading-[1.6] text-paper antialiased selection:bg-cobalt selection:text-ink">
        <a
          href="#top"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[80] focus:rounded-xl focus:bg-paper focus:px-4 focus:py-2 focus:text-ink"
        >
          {site.skip}
        </a>
        {children}
      </body>
    </html>
  );
}
