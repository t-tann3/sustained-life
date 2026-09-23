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

const team = [
  {
    name: "Rebecca Brown",
    body: "Rebecca Brown, retired college professor, brings a career of researching the food/health connection and a genuine love of cooking to the program — she’s the one making sure “nourishing food” isn’t an abstraction, but something people can actually make simply, sustainably, and with confidence in their own kitchens.",
  },
  {
    name: "Mayron Platt Shumpert, MSN, RN, CNOR, NPD-BC",
    body: "Mayron Platt Shumpert, MSN, RN, CNOR, NPD-BC, brings 36 years of nursing experience, including 27 years in perioperative care and 18 years in clinical education and leadership. She keeps our health guidance grounded in evidence-based practice and clinical rigor — not just good intentions.",
  },
  {
    name: "Katrina Dill",
    body: "Katrina Dill, a Master Medical Qigong Practitioner and co-founder of Yes to Holistic Health, brings a background in adult education and program design, plus a live connection to the Unitarian Universalist Fellowship of Fredericksburg’s emerging Community Wellness Hub — turning “whole-person wellness” from a phrase on our website into an actual pipeline of programs and partners.",
  },
  {
    name: "Yvette Anderson, PMP",
    body: "Yvette Anderson, PMP, brings more than 35 years of project management and strategic leadership on complex federal government initiatives, plus a bachelor’s degree in accounting from Jackson State University. She is the one making sure programs are planned, resourced, and delivered on time and within budget — the same discipline and financial rigor she applies as owner of her own business, Crafts by Yvette, LLC.",
  },
];

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
                  Before Sustained Life, Sophia Loren Blake spent 39 years in
                  public service, retiring in March 2023 as an Investigator with
                  the Defense Contract Audit Agency, U.S. Department of War,
                  where she specialized in fraud, waste, and abuse investigations
                  and digital forensics. The same principles that governed that
                  work — justice, integrity, and accountability — now anchor her
                  nonprofit leadership.
                </p>
                <p>
                  She founded Sustained Life in 2018 to advance a simple
                  conviction: food is medicine, and health is holistic —
                  nurturing body, mind, and soul. In December 2023, she was
                  licensed as a minister with New Vision Ministries, pairing
                  institutional discipline with ministerial care.
                </p>
                <p>
                  Since 2023, she has volunteered as Executive Director of New
                  Vision Community Outreach Association FXBG, showing up every
                  2nd and 4th Saturday to lead its healthy pantry initiative.
                  That commitment is not just administrative. It has put her in
                  direct, ongoing conversation with neighbors about food
                  insecurity and diet-related disease — the conversations that
                  shaped how Sustained Life approaches this work in the first
                  place. In 2025, the pantry initiative served 655 families —
                  4,318 individuals. In March 2026, she was named one of Central
                  Virginia’s Most Influential Women by ACT Enough, Inc. for her
                  advocacy on food insecurity.
                </p>
                <blockquote className="border-l-[3px] border-gold py-1 pl-5">
                  <p className="mb-0">
                    “From the federal halls of justice to the frontlines of
                    faith and food equity” — her work traces a direct line from
                    investigating institutional failure to building the systems
                    that prevent it.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section tint>
        <Container>
          <h2 className="mb-4 font-display text-[clamp(2rem,4vw,3.5rem)] text-forest-dark">
            Our Team
          </h2>
          <Lead className="mb-8">
            Sophia built Sustained Life around people whose expertise fills in
            exactly where hers does not:
          </Lead>
          <div className="grid gap-5 md:grid-cols-2">
            {team.map(({ name, body }) => (
              <Card key={name}>
                <h3 className="mb-3 font-display text-[1.45rem] text-forest-dark">
                  {name}
                </h3>
                <p className="mb-0">{body}</p>
              </Card>
            ))}
          </div>
          <p className="mt-8 max-w-[52rem]">
            This is not a founder claiming to be the expert in everything. It’s
            a founder who knows how to trace a systemic problem to its source,
            paired with a professor who makes the food itself approachable, a
            36-year nursing veteran who keeps the health claims honest, a
            project management professional who keeps programs on schedule and
            on budget, and an educator already building community wellness
            infrastructure elsewhere in Fredericksburg.
          </p>
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
