import Link from "next/link";
import { PartnershipRequestForm } from "@/components/PartnershipRequestForm";
import {
  ButtonLink,
  Card,
  CheckList,
  Container,
  Eyebrow,
  Lead,
  Notice,
  PageHero,
  Section,
} from "@/components/ui";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Sustained Life Partnerships",
  description:
    "Explore Sustained Life community partnerships and request spa-inspired Well Within Boxes for events supporting the mind, body, and soul.",
  path: "/partnerships",
});

const partners = [
  {
    name: "The Gospel Worship Experience Scholarship Program, Inc.",
    focus:
      "Sustained Life partnered with Gospel Worship Experience Scholarship Program, Inc. to recognize its top four finalists with thoughtfully curated Well Within Boxes. Each box included practical nutrition information, a healthy snack, spa-inspired facial products, and bath and personal-care items. The experience reflected Sustained Life’s whole-person approach by connecting nourishment, practical education, intentional rest, personal stewardship, and encouragement.",
    community: "United States wide",
    href: "https://gospelworshipexperience.org",
    link: "Gospel Worship Experience",
  },
  {
    name: "Abundant Roots Healing and Wellness",
    focus: "Abundant Roots sponsored seasonal teas.",
    community: "United States wide",
    href: "https://www.abundantrootswellness.com/",
    link: "Abundant Roots Healing and Wellness",
  },
  {
    name: "Unitarian Universalist Church",
    focus: "Culinary Program",
    community: "Fredericksburg, VA",
    href: "https://uuffxbg.org",
    link: "Unitarian Universalist Church",
  },
];

const opportunities = [
  [
    "Community Education",
    "Host a workshop, learning session, panel, or practical wellness experience for your members, staff, volunteers, or neighbors.",
  ],
  [
    "Event Collaboration",
    "Include Sustained Life in a community fair, conference, retreat, staff appreciation day, caregiver gathering, or health-focused event.",
  ],
  [
    "The Well Within Sponsorship",
    "Sponsor boxes for participants who may benefit from a tangible reminder to pause, reflect, and practice healthy self-care.",
  ],
  [
    "Resource and Program Support",
    "Contribute approved products, professional knowledge, volunteers, meeting space, printing, transportation, or other resources that support a defined project.",
  ],
  [
    "Healthy Community Initiatives",
    "Work with Sustained Life on a community need related to food access, practical wellness education, stewardship, or supportive systems.",
  ],
];

const collections = [
  [
    "Mind Reset Box",
    "Encourages rest, reflection, and a quieter moment during a busy season.",
    "Journal, pen, herbal tea, eye mask, breathing or reflection card",
  ],
  [
    "Body Reset Box",
    "Supports practical hydration, nourishment, comfort, and gentle movement.",
    "Reusable water bottle, shelf-stable snack, hand lotion, resistance band, movement card",
  ],
  [
    "Soul Reset Box",
    "Creates space for gratitude, encouragement, meaning, and faith-sensitive reflection.",
    "Gratitude cards, battery-operated candle, reflection booklet, affirmation card, tea",
  ],
  [
    "Whole Person Box",
    "Combines selected items for the mind, body, and soul in one event-ready experience.",
    "Curated mix based on the event, recipient group, quantity, budget, and approved theme",
  ],
];

const eventUses = [
  "Community wellness fairs and health education events",
  "Church conferences, retreats, and ministry gatherings",
  "Caregiver appreciation and support programs",
  "Employee, volunteer, and partner appreciation events",
  "Women’s gatherings, leadership events, and community celebrations",
  "Food access, nutrition education, and Healthy Pantry events",
];

const steps = [
  [
    "01",
    "Share the Event Details",
    "Tell us the event date, location, audience, expected quantity, theme, accessibility needs, and budget range.",
  ],
  [
    "02",
    "Confirm the Box Plan",
    "Sustained Life will review product availability, timing, packaging, delivery needs, and any customization. A request is not confirmed until the scope, price, payment terms, and fulfillment details are accepted in writing.",
  ],
  [
    "03",
    "Prepare and Deliver",
    "After confirmation, the boxes are assembled for the agreed event and delivery or pickup plan. Substitutions may be necessary when an item is unavailable, but any replacement should remain consistent with the approved purpose and budget.",
  ],
];

const faqs = [
  [
    "Who can partner with Sustained Life?",
    "Potential partners may include nonprofits, churches, health organizations, schools, community groups, businesses, foundations, event planners, and professionals whose work aligns with the Sustained Life mission.",
  ],
  [
    "Can The Well Within Boxes be customized?",
    "Customization may be available based on quantity, timing, product availability, audience, budget, and the approved event theme. Requests should be discussed before any order is confirmed.",
  ],
  [
    "Is there a minimum order?",
    "Minimum quantities, production timelines, and pricing are confirmed after the final sourcing and fulfillment process is established.",
  ],
  [
    "Can a business sponsor boxes for a community event?",
    "Yes. Sponsorship options may include full or partial event support, approved sponsor recognition, or contributed products. All terms and recognition are confirmed in writing.",
  ],
  [
    "Can dietary preferences and allergies be considered?",
    "Sustained Life can collect relevant preferences when planning a box. Products may be prepared in facilities that handle common allergens. Final packaging retains manufacturer labels and includes an allergy notice.",
  ],
  [
    "Are the boxes medical or therapeutic products?",
    "No. The Well Within Boxes are general wellness and appreciation items. They do not diagnose, treat, cure, or prevent a health condition and do not replace professional care.",
  ],
  [
    "How much do the boxes cost?",
    "Pricing depends on the selected items, quantity, packaging, customization, delivery, and event timeline. A written quote is provided after the request is reviewed.",
  ],
  [
    "How far in advance should an event request be submitted?",
    "Submit requests 30 days before the event.",
  ],
];

export default function PartnershipsPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Partnerships" },
        ]}
        eyebrow="Community partnerships"
        title="Partnerships that support whole-person well-being."
        lead="Sustained Life works with community organizations, churches, wellness professionals, businesses, health partners, and event leaders who want to make practical care more accessible. Together, we create experiences and resources that encourage people to care for the mind, body, and soul with dignity and intention."
        actions={
          <>
            <ButtonLink href="#opportunities" variant="gold">
              Explore Partnership Opportunities
            </ButtonLink>
            <ButtonLink href="#request" variant="outline-light">
              Request The Well Within Boxes
            </ButtonLink>
          </>
        }
      />

      <Section>
        <Container narrow>
          <Eyebrow>Partnership overview</Eyebrow>
          <h2 className="mb-4 font-display text-[clamp(2rem,4vw,3.5rem)] text-forest-dark text-balance">
            Community progress grows through shared work.
          </h2>
          <Lead>
            No single organization can meet every need. Sustained Life
            partnerships bring together local knowledge, trusted relationships,
            practical resources, and a shared commitment to community
            well-being. Each collaboration is shaped around the people being
            served and the strengths of the participating organizations.
          </Lead>
          <p className="mt-4">
            Partnerships may include community education, wellness events,{" "}
            <Link href="/speaking">speaking engagements</Link>,{" "}
            <Link href="/method">Healthy Pantry initiatives</Link>, resource
            sharing, sponsored Well Within Boxes, volunteer engagement, or other
            projects aligned with the{" "}
            <Link href="/about">Sustained Life mission</Link>.
          </p>
        </Container>
      </Section>

      <Section tint id="partners">
        <Container>
          <Eyebrow>Community partner directory</Eyebrow>
          <h2 className="mb-4 font-display text-[clamp(2rem,4vw,3.5rem)] text-forest-dark text-balance">
            Our community partners
          </h2>
          <Lead>
            We are grateful for the organizations and community leaders who
            contribute time, knowledge, services, space, and resources to this
            work.
          </Lead>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {partners.map((partner) => (
              <Card key={partner.name} className="flex h-full flex-col">
                <h3 className="mb-3 font-display text-[1.55rem] leading-tight text-forest-dark">
                  {partner.name}
                </h3>
                <p className="mb-4">{partner.focus}</p>
                <p className="mb-4 text-sm font-bold text-forest">
                  Community served: {partner.community}
                </p>
                <a
                  href={partner.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto font-extrabold text-forest no-underline hover:text-gold-dark"
                >
                  {partner.link}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </Card>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted">
            Partner profiles are added as collaborations are confirmed. Contact
            Sustained Life if your organization would like to explore a shared
            initiative.
          </p>
        </Container>
      </Section>

      <Section id="opportunities">
        <Container>
          <Eyebrow>Partnership opportunities</Eyebrow>
          <h2 className="mb-8 font-display text-[clamp(2rem,4vw,3.5rem)] text-forest-dark text-balance">
            Ways to partner with Sustained Life
          </h2>
          <div className="grid gap-5 md:grid-cols-2">
            {opportunities.map(([title, body]) => (
              <Card key={title}>
                <h3 className="mb-2 font-display text-[1.55rem] text-forest-dark">
                  {title}
                </h3>
                <p className="mb-0">{body}</p>
              </Card>
            ))}
          </div>
          <p className="mt-6">
            Sponsorship conversations can also begin on the{" "}
            <Link href="/donate">Donate</Link> page. Wellness education lives
            in <Link href="/resources">Resources</Link> and{" "}
            <Link href="/food-is-medicine">Food Is Medicine</Link>.
          </p>
        </Container>
      </Section>

      <Section tint id="well-within">
        <Container>
          <Eyebrow>The Well Within Box</Eyebrow>
          <h2 className="mb-4 font-display text-[clamp(2rem,4vw,3.5rem)] text-forest-dark text-balance">
            A thoughtful pause for the mind, body, and soul.
          </h2>
          <Lead>
            The Well Within Boxes are spa-inspired wellness boxes created for
            community events, retreats, appreciation programs, conferences,
            caregiver gatherings, and other group experiences. Each box
            combines practical items that invite recipients to pause, recharge,
            and care for themselves in simple ways.
          </Lead>
          <p className="mt-4 max-w-3xl">
            Boxes can be curated around an event theme, audience, sponsor, or
            budget. Items may include shelf-stable snacks, herbal tea,
            hydration items, journals, reflection cards, eye masks, hand-care
            products, gentle movement tools, or other approved wellness items.
            Selection and availability may vary.
          </p>

          <h3 className="mt-12 mb-6 font-display text-[clamp(1.6rem,3vw,2.4rem)] text-forest-dark">
            The Well Within Box collections
          </h3>
          <div className="grid gap-5 md:grid-cols-2">
            {collections.map(([name, purpose, items]) => (
              <Card key={name}>
                <h4 className="mb-2 font-display text-[1.45rem] text-forest-dark">
                  {name}
                </h4>
                <p>{purpose}</p>
                <p className="mb-0 text-sm">
                  <span className="font-extrabold text-forest">
                    Possible items:{" "}
                  </span>
                  {items}
                </p>
              </Card>
            ))}
          </div>

          <h3 className="mt-12 mb-4 font-display text-[clamp(1.6rem,3vw,2.4rem)] text-forest-dark">
            Events that may benefit
          </h3>
          <CheckList items={eventUses} />
          <div className="mt-8">
            <ButtonLink href="#request">Request The Well Within Boxes</ButtonLink>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Eyebrow>Request process</Eyebrow>
          <h2 className="mb-8 font-display text-[clamp(2rem,4vw,3.5rem)] text-forest-dark text-balance">
            How a Well Within Box request works
          </h2>
          <div className="grid gap-5 lg:grid-cols-3">
            {steps.map(([number, title, body]) => (
              <Card key={number}>
                <p className="mb-2 text-sm font-extrabold tracking-[0.12em] text-gold-dark">
                  {number}
                </p>
                <h3 className="mb-2 font-display text-[1.45rem] text-forest-dark">
                  {title}
                </h3>
                <p className="mb-0">{body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section tint id="request">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <Eyebrow>Request form</Eyebrow>
              <h2 className="mb-4 font-display text-[clamp(2rem,4vw,3.5rem)] text-forest-dark text-balance">
                Request a partnership or Well Within Box information.
              </h2>
              <p>
                Use this form for partnership inquiries and Well Within Box
                requests. Event name, date, and location are required for box
                and event requests. Submit event requests at least 30 days in
                advance.
              </p>
            </div>
            <PartnershipRequestForm />
          </div>
        </Container>
      </Section>

      <Section>
        <Container narrow>
          <Eyebrow>Frequently asked questions</Eyebrow>
          <h2 className="mb-6 font-display text-[clamp(2rem,4vw,3.5rem)] text-forest-dark">
            Partnership and Well Within Box questions
          </h2>
          <div>
            {faqs.map(([question, answer]) => (
              <details
                key={question}
                className="border-t border-line last:border-b"
              >
                <summary className="cursor-pointer py-[1.15rem] pr-1 font-extrabold text-forest">
                  {question}
                </summary>
                <p className="m-0 px-1 pb-[1.1rem]">{answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </Section>

      <Section compact>
        <Container>
          <Notice>
            <strong>Important information: </strong>
            The Well Within Boxes are designed for general wellness,
            appreciation, and educational purposes. They are not medical
            treatment, nutrition therapy, or a substitute for care from a
            qualified professional. Contents may vary based on availability.
            Recipients should review all ingredient, allergy, age, pregnancy,
            medication interaction, and product safety information before use.
          </Notice>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="rounded-[1.5rem] bg-[linear-gradient(120deg,var(--forest),var(--forest-dark))] p-[clamp(2rem,6vw,4rem)] text-white">
            <Eyebrow light>Start a conversation</Eyebrow>
            <h2 className="mb-3 font-display text-[clamp(2rem,4vw,3.2rem)] text-paper">
              Create a meaningful community experience.
            </h2>
            <p className="max-w-[46rem] text-[#e2eee8]">
              Whether you want to host an educational event, support a
              community initiative, sponsor a group of Well Within Boxes, or
              explore a new collaboration, we welcome the opportunity to learn
              about your goals.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonLink href="#request" variant="gold">
                Start a Partnership Conversation
              </ButtonLink>
              <ButtonLink href="#request" variant="outline-light">
                Request The Well Within Boxes
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
