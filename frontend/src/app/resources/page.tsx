import { pageMetadata } from "@/lib/seo";
import {
  ButtonLink,
  Card,
  Container,
  Eyebrow,
  Lead,
  PageHero,
  Section,
} from "@/components/ui";

export const metadata = pageMetadata({
  title: 'Healthy Living Resources',
  description:
    'Explore practical Sustained Life guides for nourishing food, healthy habits, stewardship, families, and community wellness.',
  path: '/resources',
});

const resources = [
  ["01", "Build a Balanced Plate", "A simple guide to combining vegetables, fruits, grains, proteins, and water.", "Guide coming soon"],
  ["02", "Budget-Friendly Staples", "Flexible ingredients that stretch across several nourishing meals.", "Checklist coming soon"],
  ["03", "Healthy Pantry Toolkit", "Ideas for dignity-centered food selection, displays, and nutrition education.", "Toolkit coming soon"],
  ["04", "Small Habit Planner", "Pick one goal, identify support, and reflect on what works.", "Worksheet coming soon"],
  ["05", "Faith & Stewardship Reflection", "Gentle prompts for connecting daily choices, gratitude, and care.", "Reflection coming soon"],
  ["06", "Community Conversation Guide", "Questions to help partners listen, learn, and plan together.", "Guide coming soon"],
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Resources" }]}
        eyebrow="Learn. Practice. Share."
        title="Practical wisdom for everyday flourishing."
        lead="Explore approachable tools designed to turn trustworthy information into small, realistic actions at home and in community."
      />

      <Section>
        <Container>
          <Eyebrow>Resource library</Eyebrow>
          <h2 className="mb-8 font-display text-[clamp(2rem,4vw,3.5rem)] text-forest-dark">
            Choose a place to begin
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            {resources.map(([num, title, body, status]) => (
              <Card key={title}>
                <span
                  aria-hidden="true"
                  className="mb-4 grid h-12 w-12 place-items-center rounded-[0.8rem] bg-sage font-display text-lg font-bold text-forest"
                >
                  {num}
                </span>
                <h3 className="mb-2 font-display text-[1.45rem] text-forest-dark">
                  {title}
                </h3>
                <p>{body}</p>
                <span className="text-muted">{status}</span>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section tint>
        <Container>
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <Eyebrow>For organizations</Eyebrow>
              <h2 className="mb-4 font-display text-[clamp(2rem,4vw,3.5rem)] text-forest-dark">
                Need a resource for your setting?
              </h2>
              <Lead>
                We welcome conversations with churches, food pantries,
                healthcare partners, schools, employers, and community
                coalitions.
              </Lead>
            </div>
            <div className="rounded-[1.5rem] bg-[linear-gradient(120deg,var(--forest),var(--forest-dark))] p-[clamp(2rem,6vw,3rem)] text-white">
              <h2 className="mb-3 font-display text-[clamp(1.8rem,3vw,2.6rem)] text-paper">
                Let’s build something useful.
              </h2>
              <p className="mb-6 text-[#e2eee8]">
                Tell us who you serve and what your community is trying to
                accomplish.
              </p>
              <ButtonLink href="/contact" variant="gold">
                Request Information
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
