import Link from "next/link";
import {
  ButtonLink,
  Container,
  Eyebrow,
  Lead,
  PageHero,
  Section,
} from "@/components/ui";
import {
  formatNewsletterDate,
  getNewsletters,
} from "@/lib/newsletters";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Past Newsletters",
  description:
    "Read past Sustained Life newsletters with practical ideas for nourishing food, dignity-centered support, and healthier communities.",
  path: "/newsletters",
});

export default function NewslettersPage() {
  const editions = getNewsletters();

  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Newsletters" }]}
        eyebrow="Stay connected"
        title="Past newsletters"
        lead="Browse previous editions for practical ideas, community updates, and encouragement you can carry into everyday life."
        actions={
          <ButtonLink href="#stay-connected" variant="gold">
            Subscribe in the footer
          </ButtonLink>
        }
      />

      <Section>
        <Container>
          <div className="mb-10 max-w-2xl">
            <Eyebrow>Archive</Eyebrow>
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] text-forest-dark">
              Newest first
            </h2>
            <Lead className="mt-4">
              Each newsletter is a short, readable edition. Open any title to read
              the full message.
            </Lead>
          </div>

          {editions.length === 0 ? (
            <p className="text-muted">
              Newsletter editions will appear here as they are published.
            </p>
          ) : (
            <ul className="m-0 list-none space-y-4 p-0">
              {editions.map((edition) => (
                <li key={edition.slug}>
                  <article className="border border-line bg-paper p-6 transition-colors hover:bg-sage/30 sm:p-7">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold text-muted">
                          {formatNewsletterDate(edition.publishedAt)}
                        </p>
                        <h3 className="mt-1 font-display text-2xl text-forest-dark">
                          <Link
                            href={`/newsletters/${edition.slug}`}
                            className="text-forest-dark no-underline hover:text-forest"
                          >
                            {edition.title}
                          </Link>
                        </h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {edition.topics.map((topic) => (
                          <span
                            key={topic}
                            className="border border-line bg-sage/40 px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-forest"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="mt-3 max-w-3xl text-muted">{edition.summary}</p>
                    <Link
                      href={`/newsletters/${edition.slug}`}
                      className="mt-4 inline-flex font-bold text-forest no-underline hover:text-gold-dark"
                    >
                      Read this edition →
                    </Link>
                  </article>
                </li>
              ))}
            </ul>
          )}
        </Container>
      </Section>

      <Section tint>
        <Container className="text-center">
          <Eyebrow>Never miss an edition</Eyebrow>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] text-forest-dark">
            Get future newsletters by email
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            Use the subscribe form in the site footer to receive practical ideas
            and updates from Sustained Life.
          </p>
          <div className="mt-7">
            <ButtonLink href="/contact">Contact Sustained Life</ButtonLink>
          </div>
        </Container>
      </Section>
    </>
  );
}
