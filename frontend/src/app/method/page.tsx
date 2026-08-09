import type { Metadata } from "next";
import { MethodRequestForm } from "@/components/MethodRequestForm";
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
  title: "The Sustained Life Method",
  description:
    "Discover a practical whole-person framework connecting nourishing food, knowledge, stewardship, relationships, and healthy community systems.",
};

const pillars = [
  ["01", "Nourishing Food", "Build meals and food environments around accessible, nutrient-dense choices."],
  ["02", "Practical Knowledge", "Translate trustworthy information into skills people can use in real life."],
  ["03", "Stewardship", "Care for the body, time, abilities, and resources with purpose and grace."],
  ["04", "Supportive Relationships", "Create encouragement, accountability, belonging, and shared learning."],
  ["05", "Healthy Community Systems", "Shape programs and partnerships that make healthy choices more available."],
];

const journey = [
  ["Listen and assess", "Understand strengths, barriers, goals, and the local context."],
  ["Learn and practice", "Build knowledge through small, relevant, repeatable actions."],
  ["Strengthen support", "Connect relationships and resources around shared goals."],
  ["Steward consistently", "Develop routines that honor progress instead of perfection."],
  ["Improve systems", "Align programs, environments, and partnerships for greater access."],
  ["Sustain and share", "Reflect on learning, adapt, and help healthier patterns spread."],
];

const audiences = [
  ["Individuals & Families", "Build confidence and practical routines."],
  ["Churches & Pantries", "Pair compassionate service with education."],
  ["Healthcare & Schools", "Complement existing wellness efforts."],
  ["Community Coalitions", "Connect partners around shared priorities."],
];

export default function MethodPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: "The Sustained Life Method" },
        ]}
        eyebrow="Our signature framework"
        title="Lasting change takes more than one intervention."
        lead="The Sustained Life Method helps people and organizations connect food, knowledge, stewardship, relationships, and systems in practical ways that support flourishing."
        actions={
          <>
            <ButtonLink href="#request-info" variant="gold">
              Request Information
            </ButtonLink>
            <ButtonLink href="/contact" variant="outline-light">
              Contact Us
            </ButtonLink>
          </>
        }
      />

      <Section>
        <Container narrow>
          <Eyebrow>Why the method exists</Eyebrow>
          <h2 className="mb-4 font-display text-[clamp(2rem,4vw,3.5rem)] text-forest-dark text-balance">
            Short-term help matters. A sustainable pathway matters, too.
          </h2>
          <Lead>
            Emergency food and health services can meet urgent needs, but
            information alone does not always translate into daily change.
            People also need realistic tools, supportive relationships,
            opportunities to practice, and environments that reinforce healthier
            choices.
          </Lead>
          <p className="mt-4">
            The Sustained Life Method is a flexible framework—not a
            one-size-fits-all curriculum. It can guide individual learning,
            organizational programs, and community partnerships.
          </p>
        </Container>
      </Section>

      <Section tint>
        <Container>
          <Eyebrow>Five connected pillars</Eyebrow>
          <h2 className="mb-8 font-display text-[clamp(2rem,4vw,3.5rem)] text-forest-dark">
            Whole-person stewardship in practice
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            {pillars.map(([num, title, body]) => (
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
                <p className="mb-0">{body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Eyebrow>The journey</Eyebrow>
          <h2 className="mb-8 font-display text-[clamp(2rem,4vw,3.5rem)] text-forest-dark">
            From awareness to sustained flourishing
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {journey.map(([title, body], index) => (
              <article key={title} className="relative pl-16">
                <span className="absolute left-0 top-0 font-display text-[1.55rem] font-extrabold text-forest">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mb-2 font-display text-[1.45rem] text-forest-dark">
                  {title}
                </h3>
                <p className="mb-0">{body}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section dark>
        <Container>
          <Eyebrow light>Who can use it</Eyebrow>
          <h2 className="mb-8 font-display text-[clamp(2rem,4vw,3.5rem)] text-paper">
            Flexible enough for many settings
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map(([title, body]) => (
              <div key={title}>
                <h3 className="mb-2 font-display text-[1.45rem] text-paper">
                  {title}
                </h3>
                <p className="mb-0 text-[#e6eee9]">{body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="request-info">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <Eyebrow>Bring the method to your community</Eyebrow>
              <h2 className="mb-4 font-display text-[clamp(2rem,4vw,3.5rem)] text-forest-dark text-balance">
                Let’s explore what fits your setting.
              </h2>
              <p>
                Tell us about your organization, community, or interest. We
                welcome conversations about workshops, partnerships, curriculum
                information, Healthy Pantry initiatives, and organizational
                consultation.
              </p>
            </div>
            <MethodRequestForm />
          </div>
        </Container>
      </Section>
    </>
  );
}
