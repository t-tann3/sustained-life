import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { Container, PageHero, Section } from "@/components/ui";

export const metadata = pageMetadata({
  title: 'Accessibility Statement',
  description:
    "Read Sustained Life's commitment to an inclusive and accessible website experience.",
  path: '/accessibility',
});

export default function AccessibilityPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Accessibility Statement" },
        ]}
        title="Accessibility Statement"
        lead="Last updated August 4, 2026"
      />

      <Section>
        <Container narrow className="space-y-6 [&_h2]:mb-2 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:text-forest-dark">
          <div>
            <h2>Our commitment</h2>
            <p>
              Sustained Life, Inc. is committed to making its website and
              information welcoming and usable for people with diverse abilities,
              technologies, and circumstances.
            </p>
          </div>
          <div>
            <h2>Our accessibility goals</h2>
            <p>
              We aim to follow the Web Content Accessibility Guidelines (WCAG)
              2.2 Level AA where reasonably possible. The website includes
              semantic page structure, keyboard-accessible navigation, visible
              focus states, a skip link, labeled form controls, responsive
              layouts, sufficient color contrast, and reduced-motion support.
            </p>
          </div>
          <div>
            <h2>Ongoing work</h2>
            <p>
              Accessibility is an ongoing practice. As new content, downloadable
              resources, third-party forms, donation tools, or media are added,
              we will work to evaluate and improve their accessibility.
            </p>
          </div>
          <div>
            <h2>Third-party content</h2>
            <p>
              Some linked or embedded services may be controlled by third
              parties. We encourage those providers to offer accessible
              experiences and will seek practical alternatives when barriers are
              identified.
            </p>
          </div>
          <div>
            <h2>Need help or found a barrier?</h2>
            <p>
              If you have difficulty using this website, need information in
              another format, or want to report an accessibility issue, please
              use our <Link href="/contact">Contact page</Link>. Include the
              page address, a description of the problem, and your preferred way
              to receive a response. Please do not include sensitive personal
              information.
            </p>
            <p>
              We welcome feedback and will make a good-faith effort to respond
              and provide reasonable assistance.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
