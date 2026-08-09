import Image from "next/image";
import Link from "next/link";
import { NewsletterForm } from "@/components/NewsletterForm";
import { Container } from "@/components/ui";

const footerLinkClass =
  "!text-white no-underline hover:!text-white focus:!text-white visited:!text-white";

const exploreLinks = [
  { href: "/about", label: "About us" },
  { href: "/method", label: "The Sustained Life Method" },
  { href: "/food-is-medicine", label: "Food Is Medicine" },
  { href: "/speaking", label: "Speaking & Advocacy" },
] as const;

const takePartLinks = [
  { href: "/resources", label: "Resources" },
  { href: "/blog", label: "Blog" },
  { href: "/newsletters", label: "Newsletters" },
  { href: "/donate", label: "Donate" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest-dark px-0 pb-6 pt-16 text-white">
      <Container>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          <div>
            <Link href="/" className="inline-flex no-underline" aria-label="Sustained Life home">
              <Image
                src="/images/logo-header.png"
                alt="Sustained Life, Inc."
                width={200}
                height={50}
                className="mb-4 h-11 w-auto brightness-0 invert"
              />
            </Link>
            <p>
              Equipping people and communities to steward food, health,
              relationships, and resources for whole-person flourishing.
            </p>
            <p className="font-extrabold tracking-[0.03em]">
              Food Is Medicine • Body, Mind, Soul.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-base font-extrabold text-white">Explore</h2>
            <ul className="m-0 list-none space-y-2 p-0">
              {exploreLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={footerLinkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-base font-extrabold text-white">Take part</h2>
            <ul className="m-0 list-none space-y-2 p-0">
              {takePartLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={footerLinkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div id="stay-connected">
            <h2 className="mb-3 text-base font-extrabold text-white">
              Stay connected
            </h2>
            <p>
              Receive practical ideas and updates from Sustained Life.
            </p>
            <p className="mt-3">
              <Link
                href="/newsletters"
                className={`${footerLinkClass} font-bold underline underline-offset-2`}
              >
                View past newsletters →
              </Link>
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-3 border-t border-white/17 pt-5 text-sm text-white md:flex-row">
          <span>© {year} Sustained Life, Inc. All rights reserved.</span>
          <span className="space-x-2">
            <Link href="/privacy" className={footerLinkClass}>
              Privacy
            </Link>
            <span>·</span>
            <Link href="/terms" className={footerLinkClass}>
              Terms
            </Link>
            <span>·</span>
            <Link href="/accessibility" className={footerLinkClass}>
              Accessibility
            </Link>
          </span>
        </div>
      </Container>
    </footer>
  );
}
