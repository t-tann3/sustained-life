import type { Metadata } from "next";
import { Inter, Libre_Baskerville } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import {
  absoluteUrl,
  defaultDescription,
  organizationJsonLd,
  siteName,
  websiteJsonLd,
} from "@/lib/seo";
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
  metadataBase: new URL(absoluteUrl("/")),
  title: {
    default: `${siteName} | Food Is Medicine`,
    template: `%s | Sustained Life`,
  },
  description: defaultDescription,
  applicationName: siteName,
  keywords: [
    "Sustained Life",
    "Food Is Medicine",
    "nonprofit",
    "nutrition education",
    "community health",
    "healthy pantry",
    "whole-person wellness",
  ],
  authors: [{ name: siteName, url: absoluteUrl("/") }],
  creator: siteName,
  publisher: siteName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteName,
    description: "Food Is Medicine • Body, Mind, Soul.",
    type: "website",
    locale: "en_US",
    url: absoluteUrl("/"),
    siteName,
    images: [
      {
        url: absoluteUrl("/images/logo-header.png"),
        width: 600,
        height: 200,
        alt: `${siteName} logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: "Food Is Medicine • Body, Mind, Soul.",
    images: [absoluteUrl("/images/logo-header.png")],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "nonprofit",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${libreBaskerville.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
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
