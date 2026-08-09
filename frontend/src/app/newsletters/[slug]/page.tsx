import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ButtonLink,
  Container,
  Eyebrow,
  PageHero,
  Section,
} from "@/components/ui";
import {
  formatNewsletterDate,
  getNewsletter,
  getNewsletters,
} from "@/lib/newsletters";
import { pageMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getNewsletters().map((edition) => ({ slug: edition.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const edition = getNewsletter(slug);
  if (!edition) {
    return pageMetadata({
      title: "Newsletter",
      description: "Sustained Life newsletter edition.",
      path: "/newsletters",
    });
  }

  return pageMetadata({
    title: edition.title,
    description: edition.summary,
    path: `/newsletters/${edition.slug}`,
  });
}

export default async function NewsletterEditionPage({ params }: PageProps) {
  const { slug } = await params;
  const edition = getNewsletter(slug);
  if (!edition) notFound();

  return (
    <>
      <PageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Newsletters", href: "/newsletters" },
          { label: edition.title },
        ]}
        eyebrow="Newsletter edition"
        title={edition.title}
        lead={edition.summary}
      />

      <Section>
        <Container narrow>
          <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm font-semibold text-muted">
              {formatNewsletterDate(edition.publishedAt)}
            </p>
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

          <div className="space-y-5 text-lg leading-relaxed text-ink">
            {edition.body.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3 border-t border-line pt-8">
            <ButtonLink href="/newsletters" variant="outline">
              ← Back to all newsletters
            </ButtonLink>
            <ButtonLink href="/contact">Contact us</ButtonLink>
          </div>
        </Container>
      </Section>

      <Section tint>
        <Container className="text-center">
          <Eyebrow>Stay connected</Eyebrow>
          <h2 className="font-display text-[clamp(2rem,4vw,2.8rem)] text-forest-dark">
            Want future editions by email?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            Subscribe in the footer, or reach out if your organization would like
            to partner on community education.
          </p>
          <p className="mt-6">
            <Link
              href="/newsletters"
              className="font-bold text-forest no-underline hover:text-gold-dark"
            >
              Browse the full archive →
            </Link>
          </p>
        </Container>
      </Section>
    </>
  );
}
