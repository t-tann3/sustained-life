import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
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
  title: 'About Sustained Life, Inc.',
  description:
    'Meet Sustained Life, Inc. and discover our mission, values, whole-person approach, and founder Sophia Loren Blake.',
  path: '/about',
});

const values = [
  ["Dignity", "We see people as partners with strengths, insight, and agency."],
  [
    "Stewardship",
    "We care thoughtfully for the body, relationships, and shared resources.",
  ],
  [
    "Evidence",
    "We pair lived wisdom with credible, research-informed education.",
  ],
  ["Compassion", "We meet people without shame, judgment, or fear."],
  [
    "Faith",
    "We welcome faith-sensitive reflection while respecting each person.",
  ],
  ["Community", "We build with people, not merely for them."],
  ["Learning", "We listen, measure, adapt, and continue growing."],
  ["Hope", "We believe practical change is possible, one choice at a time."],
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        eyebrow="About Sustained Life"
        title="A healthier future starts with dignity, wisdom, and community."
        lead="Sustained Life, Inc. equips people and communities to steward food, health, relationships, and resources in ways that support whole-person flourishing."
      />

      <Section>
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <Eyebrow>Our story</Eyebrow>
              <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.12] tracking-[-0.03em] text-forest-dark text-balance">
                From crisis response to sustained flourishing
              </h2>
            </div>
            <div className="space-y-4">
              <p>
                Food insecurity and diet-related health challenges are rarely
                isolated problems. They are shaped by access, knowledge, time,
                relationships, resources, and the systems around us.
              </p>
              <p>
                Sustained Life was created to help communities connect those
                pieces. We bring nourishing food together with practical
                education, faith-sensitive support, stewardship, and
                collaboration—always honoring the dignity and lived experience
                of each person.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section tint>
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            <Card>
              <Eyebrow>Our mission</Eyebrow>
              <h2 className="mb-3 font-display text-[clamp(1.8rem,3vw,2.6rem)] text-forest-dark">
                Equip people to steward what sustains life.
              </h2>
              <p>
                To equip people and communities to steward food, health,
                relationships, and resources in ways that support whole-person
                flourishing.
              </p>
            </Card>
            <Card>
              <Eyebrow>Our vision</Eyebrow>
              <h2 className="mb-3 font-display text-[clamp(1.8rem,3vw,2.6rem)] text-forest-dark">
                A credible pathway to thrive.
              </h2>
              <p>
                Communities where nourishing food, practical wisdom, dignity,
                faith-sensitive support, and sustainable systems work together
                so every person has a credible pathway to thrive.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Eyebrow>What guides us</Eyebrow>
          <h2 className="mb-8 font-display text-[clamp(2rem,4vw,3.5rem)] text-forest-dark">
            Values expressed through action
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(([title, body]) => (
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

      <Section dark>
        <Container>
          <div>
            <Eyebrow light>Meet our founder</Eyebrow>
            <h2 className="mb-2 font-display text-[clamp(2rem,4vw,3.5rem)] text-paper">
              Sophia Loren Blake
            </h2>
            <Lead className="mb-8 text-[#e2eee8]">
              Founder and President
            </Lead>
            <div className="grid items-start gap-10 lg:grid-cols-2">
              <Image
                src="/images/sophia-loren-blake.jpg"
                alt="Sophia Loren Blake"
                width={720}
                height={900}
                className="h-auto w-full max-w-md rounded-xl object-cover"
              />
              <div className="space-y-4 text-[#e6eee9]">
                <p>
                  Sophia Loren Blake brings a life of public service, ministry,
                  and community leadership to Sustained Life. She is the Executive
                  Director of New Vision Community Outreach Association FXBG, a
                  licensed minister, and a retired federal investigator with 39
                  years of public service.
                </p>
                <p>
                  Her advocacy for Food Is Medicine and whole-person wellness
                  grows from a conviction that nourishing food is vital—and that
                  lasting change also requires practical wisdom, supportive
                  relationships, stewardship, and healthy community systems.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="rounded-[1.5rem] bg-[linear-gradient(120deg,var(--forest),var(--forest-dark))] p-[clamp(2rem,6vw,4rem)] text-white">
            <Eyebrow light>Your place in the story</Eyebrow>
            <h2 className="mb-3 font-display text-[clamp(2rem,4vw,3.2rem)] text-paper">
              Help create pathways that last.
            </h2>
            <p className="max-w-[46rem] text-[#e2eee8]">
              Learn, volunteer, partner, give, or share resources with someone
              who needs encouragement.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonLink href="/contact" variant="gold">
                Connect with Sustained Life
              </ButtonLink>
              <ButtonLink href="/donate" variant="outline-light">
                Support our work
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
