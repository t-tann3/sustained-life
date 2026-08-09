import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import {
  Card,
  Container,
  Eyebrow,
  Lead,
  PageHero,
  Section,
} from "@/components/ui";

export const metadata = pageMetadata({
  title: 'Blog',
  description:
    'Read practical reflections on nourishing food, whole-person wellness, stewardship, faith-sensitive support, and community health.',
  path: '/blog',
});

const posts = [
  {
    theme: "Nourishing Food",
    title: "Why Progress Matters More Than a Perfect Plate",
    body: "Small, repeatable choices can create a more sustainable approach to healthy eating.",
    status: "Article coming soon",
  },
  {
    theme: "Stewardship",
    title: "Caring for Your Energy, Time, and Attention",
    body: "Whole-person wellness includes the everyday resources we often overlook.",
    status: "Article coming soon",
  },
  {
    theme: "Community",
    title: "Making Healthy Choices Easier Together",
    body: "How shared environments can support—or complicate—the goals people value.",
    status: "Article coming soon",
  },
  {
    theme: "Faith & Wellness",
    title: "A Gentle Practice of Gratitude",
    body: "Simple reflection can help reconnect nourishment, dignity, and care.",
    status: "Article coming soon",
  },
  {
    theme: "Food Access",
    title: "What Makes a Pantry Feel Healthy and Welcoming?",
    body: "Choice, respect, clarity, and collaboration can transform an experience.",
    status: "Article coming soon",
  },
  {
    theme: "The Method",
    title: "Five Pillars, One Connected Framework",
    body: "A plain-language introduction to the Sustained Life Method.",
    href: "/method",
    link: "Read the framework now",
  },
];

export default function BlogPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
        eyebrow="Ideas for sustained living"
        title="Thoughtful guidance for one step at a time."
        lead="Stories, reflections, and practical education on food, health, relationships, stewardship, and the systems that shape well-being."
      />

      <Section>
        <Container>
          <Eyebrow>Featured themes</Eyebrow>
          <h2 className="mb-8 font-display text-[clamp(2rem,4vw,3.5rem)] text-forest-dark">
            Explore the conversation
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            {posts.map((post) => (
              <Card key={post.title}>
                <Eyebrow>{post.theme}</Eyebrow>
                <h3 className="mb-2 font-display text-[1.45rem] text-forest-dark">
                  {post.title}
                </h3>
                <p>{post.body}</p>
                {"href" in post && post.href ? (
                  <Link
                    href={post.href}
                    className="font-bold text-forest no-underline hover:text-forest-dark"
                  >
                    {post.link}
                  </Link>
                ) : (
                  <span className="text-muted">{post.status}</span>
                )}
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section tint>
        <Container className="text-center">
          <Eyebrow>Stay connected</Eyebrow>
          <h2 className="mb-4 font-display text-[clamp(2rem,4vw,3.5rem)] text-forest-dark">
            New articles are on the way.
          </h2>
          <Lead className="mx-auto">
            Use the newsletter form in the footer to receive future education
            and organization updates.
          </Lead>
        </Container>
      </Section>
    </>
  );
}
