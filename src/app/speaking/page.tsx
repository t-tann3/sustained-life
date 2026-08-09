import type { Metadata } from "next";
import {
  ButtonLink,
  Card,
  Container,
  Eyebrow,
  Lead,
  PageHero,
  Section,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Speaking & Workshops",
  description:
    "Invite Sustained Life founder Sophia Loren Blake for a practical, hopeful conversation about food, stewardship, wellness, and community.",
};

const topics = [
  [
    "Food Is Medicine—And Food Is Not Enough",
    "A whole-person look at nutrition, health, relationships, and the environments that shape daily choices.",
  ],
  [
    "Stewarding Body, Mind, and Soul",
    "Practical and faith-sensitive principles for caring for what sustains life.",
  ],
  [
    "From Crisis Response to Flourishing",
    "How organizations can pair urgent support with education, dignity, and healthier systems.",
  ],
  [
    "Healthy Pantry, Healthy Community",
    "Ideas for strengthening choice, access, and education in food assistance settings.",
  ],
  [
    "Small Changes That Last",
    "An encouraging workshop that helps participants identify one meaningful next step.",
  ],
  [
    "Custom Programs",
    "Keynotes, workshops, panels, trainings, and facilitated conversations shaped around your goals.",
  ],
];

export default function SpeakingPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Speaking" }]}
        eyebrow="Speaking & workshops"
        title="Start a conversation that leads to practical action."
        lead="Invite Sustained Life to help your audience connect nourishing food, stewardship, supportive relationships, and healthier community systems."
        actions={
          <ButtonLink href="#invite" variant="gold">
            Request a Speaker
          </ButtonLink>
        }
      />

      <Section>
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <Eyebrow>Meet the speaker</Eyebrow>
              <h2 className="mb-2 font-display text-[clamp(2rem,4vw,3.5rem)] text-forest-dark">
                Sophia Loren Blake
              </h2>
              <Lead className="mb-4">
                Founder and President of Sustained Life, Inc.
              </Lead>
              <p>
                Sophia brings 39 years of federal public service, nonprofit
                executive leadership, ministry, and community advocacy to every
                room. Her style is warm, grounded, faith-sensitive, and focused
                on realistic next steps.
              </p>
            </div>
            <blockquote className="m-0 border-l-4 border-gold bg-paper p-8 font-display text-[1.35rem] text-forest-dark">
              “Healthy lives are strengthened when nourishing food, practical
              wisdom, supportive relationships, and stewardship work together.”
            </blockquote>
          </div>
        </Container>
      </Section>

      <Section tint>
        <Container>
          <Eyebrow>Featured topics</Eyebrow>
          <h2 className="mb-8 font-display text-[clamp(2rem,4vw,3.5rem)] text-forest-dark">
            Designed for your audience
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            {topics.map(([title, body]) => (
              <Card key={title}>
                <h3 className="mb-2 font-display text-[1.45rem] text-forest-dark">
                  {title}
                </h3>
                <p className="mb-0">{body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="invite">
        <Container>
          <div className="rounded-[1.5rem] bg-[linear-gradient(120deg,var(--forest),var(--forest-dark))] p-[clamp(2rem,6vw,4rem)] text-white">
            <Eyebrow light>Plan an event</Eyebrow>
            <h2 className="mb-3 font-display text-[clamp(2rem,4vw,3.2rem)] text-paper">
              Bring Sustained Life to your community.
            </h2>
            <p className="mb-6 max-w-[46rem] text-[#e2eee8]">
              Share your audience, format, location, dates, and goals. We will
              follow up to discuss fit and availability.
            </p>
            <ButtonLink href="/contact#contact-form" variant="gold">
              Request Speaking Information
            </ButtonLink>
          </div>
        </Container>
      </Section>
    </>
  );
}
