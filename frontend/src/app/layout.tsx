import type { Metadata } from "next";
import { Inter, Libre_Baskerville } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Sustained Life, Inc. | Food Is Medicine",
    template: "%s | Sustained Life",
  },
  description:
    "Sustained Life equips people and communities to steward food, health, relationships, and resources for whole-person flourishing.",
  metadataBase: new URL("https://sustainedlife.org"),
  openGraph: {
    title: "Sustained Life, Inc.",
    description: "Food Is Medicine • Body, Mind, Soul.",
    type: "website",
    url: "https://sustainedlife.org/",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${libreBaskerville.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <a
          href="#main-content"
          className="fixed left-4 top-[-5rem] z-[9999] rounded-md bg-paper px-4 py-3 text-forest focus:top-4"
        >
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
