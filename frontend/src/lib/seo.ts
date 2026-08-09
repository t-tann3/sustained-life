import type { Metadata } from "next";

export const siteUrl = "https://sustainedlife.org";

export const siteName = "Sustained Life, Inc.";

export const defaultDescription =
  "Sustained Life equips people and communities to steward food, health, relationships, and resources for whole-person flourishing.";

export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
}: {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
}): Metadata {
  const url = absoluteUrl(path);

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

/** Public pages included in the sitemap (highest priority first). */
export const sitemapEntries = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/about", changeFrequency: "monthly", priority: 0.9 },
  { path: "/method", changeFrequency: "monthly", priority: 0.9 },
  { path: "/food-is-medicine", changeFrequency: "monthly", priority: 0.9 },
  { path: "/resources", changeFrequency: "weekly", priority: 0.8 },
  { path: "/speaking", changeFrequency: "monthly", priority: 0.8 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.8 },
  { path: "/newsletters", changeFrequency: "weekly", priority: 0.8 },
  { path: "/donate", changeFrequency: "monthly", priority: 0.8 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
  { path: "/accessibility", changeFrequency: "yearly", priority: 0.3 },
] as const;

export function absoluteUrl(path = "/") {
  if (path === "/") return `${siteUrl}/`;
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: siteName,
    alternateName: "Sustained Life",
    url: absoluteUrl("/"),
    logo: absoluteUrl("/images/logo-header.png"),
    description: defaultDescription,
    slogan: "Food Is Medicine • Body, Mind, Soul.",
    founder: {
      "@type": "Person",
      name: "Sophia Loren Blake",
      jobTitle: "Founder and President",
    },
    sameAs: [],
    areaServed: "US",
    knowsAbout: [
      "Food Is Medicine",
      "Nutrition education",
      "Community health",
      "Whole-person wellness",
      "Healthy pantry initiatives",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      url: absoluteUrl("/contact"),
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: absoluteUrl("/"),
    description: defaultDescription,
    publisher: {
      "@type": "NGO",
      name: siteName,
      url: absoluteUrl("/"),
    },
    inLanguage: "en-US",
  };
}
