import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import {
  ButtonLink,
  Card,
  Container,
  Eyebrow,
  Lead,
  Section,
} from "@/components/ui";

export const metadata = pageMetadata({
  title: "Sustained Life, Inc. | Food Is Medicine",
  description:
    "Sustained Life equips people and communities to steward food, health, relationships, and resources for whole-person flourishing.",
  path: "/",
  absoluteTitle: true,
});

const pathways = [
  {
    icon: "●",
    title: "Nourishing Food",
    body: "Accessible education that makes fresh, whole, and nutrient-dense foods easier to understand and enjoy.",
    href: "/food-is-medicine",
    link: "Explore Food Is Medicine",
  },
  {
    icon: "✦",
    title: "Practical Knowledge",
    body: "Tools, workshops, and resources that turn good information into realistic everyday choices.",
    href: "/resources",
    link: "Browse resources",
  },
  {
    icon: "∞",
    title: "Community Partnership",
    body: "Collaboration with churches, pantries, schools, health partners, and local leaders to strengthen healthy systems.",
    href: "/contact",
    link: "Partner with us",
  },
];

const pillars = [
  ["01 · Nourishing Food", "Build a strong foundation."],
  ["02 · Practical Knowledge", "Turn information into action."],
  ["03 · Stewardship", "Care wisely for body and resources."],
  ["04 · Supportive Relationships", "Grow with dignity and encouragement."],
  ["05 · Healthy Systems", "Make healthier choices easier for all."],
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_82%_15%,rgba(197,138,42,0.33),transparent_30%),linear-gradient(135deg,var(--forest-dark),var(--forest))] py-[clamp(5rem,10vw,9rem)] text-white">
        <div className="pointer-events-none absolute -right-32 -bottom-48 h-[34rem] w-[34rem] rounded-full border border-white/18 shadow-[0_0_0_4rem_rgba(255,255,255,0.035),0_0_0_8rem_rgba(255,255,255,0.025)]" />
        <Container className="relative z-10 max-w-[59rem]">
          <Eyebrow light>Food Is Medicine • Body, Mind, Soul.</Eyebrow>
          <h1 className="animate-fade-up mb-4 font-display text-[clamp(2.65rem,7vw,5.75rem)] leading-[1.12] tracking-[-0.045em] text-balance text-paper">
            Nourishing lives. Strengthening communities.
          </h1>
          <Lead className="animate-fade-up-delay text-[#e7f0eb]">
            We help people and communities connect nourishing food, practical
            wisdom, supportive relationships, and responsible stewardship—so
            everyone has a credible pathway to thrive.
          </Lead>
          <div className="animate-fade-up-delay-2 mt-7 flex flex-wrap gap-3">
            <ButtonLink href="/method" variant="gold">
              Explore the Sustained Life Method
            </ButtonLink>
            <ButtonLink href="/donate" variant="outline-light">
              Support the Mission
            </ButtonLink>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="grid gap-8 md:grid-cols-2 md:gap-10">
            <div>
              <Eyebrow>A whole-person approach</Eyebrow>
              <h2 className="mb-4 font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.12] tracking-[-0.03em] text-forest-dark text-balance">
                Food matters. So does everything around it.
              </h2>
            </div>
            <div>
              <Lead>
                Lasting well-being grows when nutritious food is paired with
                knowledge, dignity, healthy habits, supportive relationships,
                and community systems that make good choices more possible.
              </Lead>
              <Link
                href="/about"
                className="mt-4 inline-block font-bold text-forest no-underline hover:text-forest-dark"
              >
                Learn why Sustained Life exists →
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      <Section tint>
        <Container>
          <Eyebrow>How we help</Eyebrow>
          <h2 className="mb-8 font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.12] tracking-[-0.03em] text-forest-dark text-balance">
            Practical pathways to flourishing
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            {pathways.map((item) => (
              <Card key={item.title}>
                <span
                  aria-hidden="true"
                  className="mb-4 grid h-12 w-12 place-items-center rounded-[0.8rem] bg-sage text-[1.4rem] text-forest"
                >
                  {item.icon}
                </span>
                <h3 className="mb-3 font-display text-[1.45rem] text-forest-dark">
                  {item.title}
                </h3>
                <p className="mb-4">{item.body}</p>
                <Link
                  href={item.href}
                  className="font-bold text-forest no-underline hover:text-forest-dark"
                >
                  {item.link}
                </Link>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <Eyebrow>Our signature framework</Eyebrow>
              <h2 className="mb-4 font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.12] tracking-[-0.03em] text-forest-dark text-balance">
                The Sustained Life Method
              </h2>
              <Lead>
                A practical, whole-person framework designed to help individuals
                and organizations move from short-term response toward sustained
                flourishing.
              </Lead>
              <div className="mt-7">
                <ButtonLink href="/method">See how the method works</ButtonLink>
              </div>
            </div>
            <div className="grid gap-3">
              {pillars.map(([title, body]) => (
                <div key={title} className="border-l-[3px] border-gold py-2 pl-5">
                  <strong className="block font-display text-[1.35rem] text-forest">
                    {title}
                  </strong>
                  <span className="text-muted">{body}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section dark>
        <Container className="text-center">
          <Eyebrow light>Join the movement</Eyebrow>
          <h2 className="mx-auto mb-4 max-w-3xl font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.12] tracking-[-0.03em] text-balance text-paper">
            Healthy communities are built together.
          </h2>
          <Lead className="mx-auto text-[#e2eee8]">
            Learn with us, invite a speaker, explore a partnership, or invest in
            practical tools that help people flourish.
          </Lead>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/contact" variant="gold">
              Start a Conversation
            </ButtonLink>
            <ButtonLink href="/donate" variant="outline-light">
              Make a Difference
            </ButtonLink>
          </div>
        </Container>
      </Section>
    </>
  );
}
