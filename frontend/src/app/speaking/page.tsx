import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import {
  ButtonLink,
  Container,
  Eyebrow,
  Lead,
  Section,
} from "@/components/ui";
import { absoluteUrl, pageMetadata, siteName } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Invite Sophia Loren Blake to Speak",
  description:
    "Explore Sophia Loren Blake’s speaking engagements, Healthy Pantry recognition, community partnerships, and hunger-relief advocacy through Sustained Life.",
  path: "/speaking",
});

const topics = [
  [
    "01",
    "Food Is Medicine • Body, Mind, Soul.",
    "How nourishment, spirituality, relationships, and daily habits work together to support whole-person wellness.",
    "Keynote • Workshop • Faith and community audiences",
  ],
  [
    "02",
    "Hunger Has No Face",
    "A dignity-centered look at food insecurity, hidden need, and why every community must listen before it acts.",
    "Keynote • Panel • Nonprofit and civic audiences",
  ],
  [
    "03",
    "From Food Assistance to Sustainable Health",
    "Moving beyond crisis response by connecting nourishing food, useful knowledge, and healthier community systems.",
    "Keynote • Training • Healthcare and food-access partners",
  ],
  [
    "04",
    "Stewardship of the Body",
    "A practical, faith-sensitive invitation to care for health without shame, perfectionism, or simplistic answers.",
    "Workshop • Retreat • Church and wellness audiences",
  ],
  [
    "05",
    "Community Collaboration That Lasts",
    "How partners can align strengths, protect dignity, and build solutions that remain useful after the event ends.",
    "Facilitation • Workshop • Cross-sector teams",
  ],
  [
    "06",
    "Advocacy Rooted in Lived Experience",
    "Centering real stories and community knowledge while communicating responsibly with decision-makers.",
    "Training • Panel • Advocates and public leaders",
  ],
];

const engagements = [
  {
    month: "Jul",
    day: "18",
    year: "2026",
    type: "Keynote address",
    title: "Stepping Stone Mission of Franklin County, VA",
    body: "A keynote honoring 20 years of faithful service to the community.",
  },
  {
    month: "May",
    day: "21",
    year: "2026",
    type: "Community Collaboration Workshop",
    title: "Fredericksburg Regional Food Bank",
    body: "Keynote: Hunger Has No Face",
  },
  {
    month: "Aug",
    day: "29",
    year: "2025",
    type: "Employee Health & Wellness Fair",
    title: "Fredericksburg Regional Food Bank",
    body: "Topic: Food Is Medicine, Food Is Spirit: The Interconnection Between Nutrition, Spirituality, and Health",
  },
];

const photoReel = [
  {
    wide: true,
    label: "Photo 01",
    title: "Keynote address",
    note: "Suggested wide image",
    caption: "Sophia delivering a keynote on food, dignity, and community health.",
    aria: "Sophia Loren Blake keynote: Hunger Has No Face",
    src: "/images/hunger-has-no-face-keynote.png",
    alt: "Stage screen for the Hunger Has No Face keynote featuring Sophia Loren Blake",
  },
  {
    label: "Photo 02",
    title: "Community workshop",
    note: "Suggested portrait image",
    caption: "Turning shared concerns into practical next steps.",
    aria: "Sophia Loren Blake with a community partner at a workshop",
    src: "/images/community-workshop.png",
    alt: "Sophia Loren Blake standing with a community partner at an event",
  },
  {
    label: "Photo 03",
    title: "Partners at work",
    note: "Suggested candid image",
    caption: "Cross-sector partners building stronger local systems.",
    aria: "Sophia Loren Blake with a community partner at an event",
    src: "/images/partners-at-work.png",
    alt: "Sophia Loren Blake standing with a community partner after an event",
  },
  {
    tall: true,
    label: "Photo 04",
    title: "Advocacy in action",
    note: "Suggested vertical image",
    caption: "Bringing community realities into policy conversations.",
    aria: "Sophia Loren Blake with colleagues at the Russell Senate Office Building",
    src: "/images/advocacy-capitol-hill.png",
    alt: "Sophia Loren Blake with colleagues on the steps of the Russell Senate Office Building",
  },
  {
    label: "Photo 05",
    title: "Learning together",
    note: "Suggested candid image",
    caption: "Practical education designed for real life.",
    aria: "Sophia Loren Blake with a colleague in front of the U.S. Capitol",
    src: "/images/learning-together-capitol.png",
    alt: "Sophia Loren Blake and a colleague standing in front of the U.S. Capitol",
  },
];

const expectItems = [
  [
    "01",
    "Audience-centered preparation",
    "The message is shaped around your audience, goals, setting, and available time.",
  ],
  [
    "02",
    "Clear, usable language",
    "Complex public health and policy ideas are translated into plain English without losing meaning.",
  ],
  [
    "03",
    "Dignity in every story",
    "People facing food insecurity or health challenges are never reduced to a statistic.",
  ],
  [
    "04",
    "Practical next steps",
    "Audiences leave with questions to consider, actions to take, and a stronger reason to collaborate.",
  ],
];

function speakingJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${absoluteUrl("/speaking")}#webpage`,
        url: absoluteUrl("/speaking"),
        name: "Speaking Engagements | Sustained Life",
        description:
          "Speaking engagements, partnerships, and advocacy work led by Sophia Loren Blake through Sustained Life.",
        isPartOf: { "@id": `${absoluteUrl("/")}#organization` },
        about: {
          "@id": `${absoluteUrl("/speaking")}#sophia-loren-blake`,
        },
      },
      {
        "@type": "NonprofitOrganization",
        "@id": `${absoluteUrl("/")}#organization`,
        name: siteName,
        url: absoluteUrl("/"),
        logo: absoluteUrl("/images/logo-header.png"),
        email: "connect@sustainedlife.net",
        sameAs: [
          "https://www.facebook.com/SustainedLife",
          "https://www.instagram.com/sustainedlif3/",
        ],
      },
      {
        "@type": "Person",
        "@id": `${absoluteUrl("/speaking")}#sophia-loren-blake`,
        name: "Sophia Loren Blake",
        jobTitle: "Founder and President",
        worksFor: { "@id": `${absoluteUrl("/")}#organization` },
        image: absoluteUrl("/images/sophia-loren-blake.jpg"),
        award:
          "Recognized as one of 25 Influential Women in Central Virginia, March 2026",
        knowsAbout: [
          "Food Is Medicine",
          "Whole-person wellness",
          "Food insecurity",
          "Community collaboration",
          "Nutrition advocacy",
          "Faith-sensitive health education",
        ],
      },
      {
        "@type": "Event",
        name: "Stepping Stone Mission 20th Anniversary Keynote",
        startDate: "2026-07-18",
        eventStatus: "https://schema.org/EventCompleted",
        location: {
          "@type": "Place",
          name: "Stepping Stone Mission of Franklin County",
          address: {
            "@type": "PostalAddress",
            addressRegion: "VA",
            addressCountry: "US",
          },
        },
        performer: {
          "@id": `${absoluteUrl("/speaking")}#sophia-loren-blake`,
        },
        description: "A keynote honoring 20 years of community service.",
      },
      {
        "@type": "Event",
        name: "Hunger Has No Face",
        startDate: "2026-05-21",
        eventStatus: "https://schema.org/EventCompleted",
        location: {
          "@type": "Place",
          name: "Fredericksburg Regional Food Bank Community Collaboration Workshop",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Fredericksburg",
            addressRegion: "VA",
            addressCountry: "US",
          },
        },
        performer: {
          "@id": `${absoluteUrl("/speaking")}#sophia-loren-blake`,
        },
        description:
          "A keynote about recognizing the human realities of hunger and strengthening community collaboration.",
      },
      {
        "@type": "Event",
        name: "Food Is Medicine, Food Is Spirit",
        startDate: "2025-08-29",
        eventStatus: "https://schema.org/EventCompleted",
        location: {
          "@type": "Place",
          name: "Fredericksburg Regional Food Bank Employee Health & Wellness Fair",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Fredericksburg",
            addressRegion: "VA",
            addressCountry: "US",
          },
        },
        performer: {
          "@id": `${absoluteUrl("/speaking")}#sophia-loren-blake`,
        },
        description:
          "A presentation exploring the interconnection between nutrition, spirituality, and health.",
      },
    ],
  };
}

export default function SpeakingPage() {
  return (
    <>
      <JsonLd data={speakingJsonLd()} />

      <section className="bg-[radial-gradient(circle_at_82%_15%,rgba(197,138,42,0.22),transparent_30%),linear-gradient(135deg,var(--forest-dark),var(--forest))] py-[clamp(4rem,8vw,7rem)] text-white">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <Eyebrow light>Speaking • Partnership • Advocacy</Eyebrow>
              <h1 className="font-display text-[clamp(2.6rem,6vw,4.6rem)] leading-[1.1] tracking-[-0.04em] text-balance text-paper">
                Conversations that move communities{" "}
                <em className="not-italic text-gold-soft">toward action.</em>
              </h1>
              <Lead className="mt-5 text-[#e7f0eb]">
                Sophia Loren Blake brings lived experience, public-service
                discipline, and faith-sensitive compassion to conversations about
                food, health, dignity, and the systems that shape daily life.
              </Lead>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/contact#contact-form" variant="gold">
                  Invite Sophia to speak
                </ButtonLink>
                <a
                  href="#engagements"
                  className="inline-flex items-center font-bold !text-white no-underline hover:!text-gold-soft focus:!text-white visited:!text-white"
                >
                  Explore past engagements →
                </a>
              </div>
              <p className="mt-6 text-sm text-white/80">
                ✦ Keynotes, panels, workshops, trainings, and community
                conversations
              </p>
            </div>
            <figure>
              <PhotoPlaceholder
                label="Featured speaking photograph"
                title="Ideas become powerful when communities can use them."
                src="/images/fredericksburg-regional-food-bank.png"
                alt="Sophia Loren Blake with a partner at the Fredericksburg Regional Food Bank"
                className="min-h-[22rem] rounded-[1.25rem]"
              />
              <figcaption className="mt-3 text-sm text-white/75">
                Food Is Medicine • Body, Mind, Soul.
              </figcaption>
            </figure>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="overflow-hidden rounded-[1.25rem]">
              <Image
                src="/images/sophia-loren-blake.jpg"
                alt="Sophia Loren Blake, founder and president of Sustained Life"
                width={720}
                height={720}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
            <div>
              <Eyebrow>Meet the speaker</Eyebrow>
              <h2 className="font-display text-[clamp(2rem,4vw,3.4rem)] text-forest-dark">
                Credibility grounded in service.
              </h2>
              <Lead className="mt-4">
                Sophia Loren Blake is the founder and president of Sustained Life,
                Inc. and Executive Director of New Vision Community Outreach
                Association FXBG.
              </Lead>
              <div className="mt-4 space-y-4 text-muted">
                <p>
                  A licensed minister and retired federal investigator with 39
                  years of public service, Sophia speaks with warmth, clarity, and
                  respect for the people closest to the issue. Her work connects
                  Food Is Medicine, whole-person wellness, hunger relief, and
                  practical community change.
                </p>
                <p>
                  Audiences leave with a fuller understanding of the challenge,
                  language that protects dignity, and practical next steps they can
                  carry into their own organizations and communities.
                </p>
              </div>
              <Link
                href="/about"
                className="mt-5 inline-flex font-bold text-forest no-underline hover:text-gold-dark"
              >
                Read Sophia’s full biography →
              </Link>
            </div>
          </div>
          <div className="mt-10 grid gap-3 border-t border-line pt-6 text-sm font-bold text-forest sm:grid-cols-2 lg:grid-cols-4">
            <p>39 years of public service</p>
            <p>Nonprofit executive leadership</p>
            <p>Licensed minister</p>
            <p>Food Is Medicine advocate</p>
          </div>
        </Container>
      </Section>

      <Section tint id="recognition">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.2fr_1fr]">
            <div className="flex min-h-56 flex-col items-center justify-center rounded-[1.25rem] bg-forest p-6 text-center text-white">
              <span className="font-display text-6xl font-bold text-gold-soft">
                25
              </span>
              <strong className="mt-2 font-display text-2xl leading-tight">
                Influential
                <br />
                Women
              </strong>
              <small className="mt-3 text-white/75">
                Central Virginia • 2026
              </small>
            </div>
            <div>
              <Eyebrow>Community recognition</Eyebrow>
              <p className="text-sm font-bold text-gold-dark">March 2026</p>
              <h2 className="mt-2 font-display text-[clamp(1.9rem,3.5vw,3rem)] text-forest-dark">
                Recognized among 25 influential women in Central Virginia.
              </h2>
              <Lead className="mt-4">
                Sophia Loren Blake was recognized for her leadership and impact
                through the Healthy Pantry initiative at New Vision Community
                Outreach Association FXBG.
              </Lead>
              <div className="mt-4 space-y-4 text-muted">
                <p>
                  The initiative helps move pantry service beyond food
                  distribution alone by connecting nourishing choices, practical
                  nutrition education, dignity-centered support, and community
                  partnerships.
                </p>
                <p>
                  This honor also reflects the shared work of pantry guests,
                  volunteers, staff, healthcare collaborators, food-access
                  partners, and neighbors committed to building a healthier
                  community.
                </p>
              </div>
              <a
                href="https://www.mostinfluentialwomen.org/about-us"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex font-bold text-forest no-underline hover:text-gold-dark"
              >
                Learn about the Most Influential Women awards ↗
              </a>
            </div>
            <figure>
              <PhotoPlaceholder
                label="Recognition photograph"
                title="Leadership that makes healthier choices possible."
                src="/images/influential-women-award.png"
                alt="Sophia Loren Blake holding the Most Influential Women award"
                className="min-h-64 rounded-[1.25rem]"
              />
              <figcaption className="mt-3 text-sm text-muted">
                Honored for leadership supporting the Healthy Pantry initiative at
                New Vision Community Outreach Association FXBG.
              </figcaption>
            </figure>
          </div>
        </Container>
      </Section>

      <Section id="topics">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>Signature topics</Eyebrow>
            <h2 className="font-display text-[clamp(2rem,4vw,3.4rem)] text-forest-dark">
              Messages tailored to the people in the room.
            </h2>
            <p className="mt-4 text-lg text-muted">
              Each engagement can be shaped for healthcare, faith, nonprofit,
              corporate, government, education, or community audiences.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {topics.map(([num, title, body, meta]) => (
              <article
                key={title}
                className="border border-line bg-paper p-6 shadow-[0_8px_30px_rgba(18,63,54,0.04)]"
              >
                <span className="font-display text-2xl font-bold text-gold-dark">
                  {num}
                </span>
                <h3 className="mt-3 font-display text-[1.35rem] text-forest-dark">
                  {title}
                </h3>
                <p className="mt-3 text-muted">{body}</p>
                <p className="mt-4 text-sm font-semibold text-forest">{meta}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section tint id="engagements">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <Eyebrow>Selected engagements</Eyebrow>
              <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] text-forest-dark">
                Speaking where service, health, and community meet.
              </h2>
              <p className="mt-4 text-lg text-muted">
                These engagements reflect a growing public conversation: health is
                personal, but the conditions that support health are built
                together.
              </p>
            </div>
            <div className="space-y-4">
              {engagements.map((item) => (
                <article
                  key={`${item.year}-${item.day}-${item.title}`}
                  className="grid gap-4 border border-line bg-paper p-5 sm:grid-cols-[5.5rem_1fr]"
                >
                  <div className="flex flex-col items-center justify-center bg-sage px-3 py-4 text-center text-forest">
                    <span className="text-xs font-extrabold uppercase tracking-[0.14em]">
                      {item.month}
                    </span>
                    <strong className="font-display text-3xl">{item.day}</strong>
                    <small className="text-sm">{item.year}</small>
                  </div>
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-gold-dark">
                      {item.type}
                    </p>
                    <h3 className="mt-1 font-display text-xl text-forest-dark">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-muted">{item.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="mb-8 grid gap-4 lg:grid-cols-[1.2fr_1fr] lg:items-end">
            <div>
              <Eyebrow>In the room</Eyebrow>
              <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] text-forest-dark">
                A growing record of shared work.
              </h2>
            </div>
            <p className="text-muted">
              This gallery is ready for approved photographs from keynotes,
              workshops, partner events, advocacy meetings, and community
              conversations.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {photoReel.map((photo) => (
              <figure
                key={photo.label}
                className={`${"wide" in photo && photo.wide ? "md:col-span-2" : ""} ${"tall" in photo && photo.tall ? "xl:row-span-2" : ""}`}
              >
                <PhotoPlaceholder
                  label={photo.label}
                  title={photo.title}
                  note={photo.note}
                  ariaLabel={photo.aria}
                  src={"src" in photo ? photo.src : undefined}
                  alt={"alt" in photo ? photo.alt : undefined}
                  className={`rounded-[1.1rem] ${"tall" in photo && photo.tall ? "min-h-[28rem]" : "min-h-56"}`}
                />
                <figcaption className="mt-2 text-sm text-muted">
                  {photo.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </Section>

      <Section tint id="partnerships">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <Eyebrow>Partnerships</Eyebrow>
              <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] text-forest-dark">
                No single organization can build lasting health alone.
              </h2>
            </div>
            <div>
              <Lead>
                Sustained Life collaborates across sectors because people
                experience food, health, faith, family, and community as one
                life—not separate programs.
              </Lead>
              <p className="mt-4 text-muted">
                Speaking engagements often become a starting point for deeper
                work: educational programs, professional training, Healthy Pantry
                initiatives, community wellness events, and shared advocacy.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "Food banks and pantries",
                  "Healthcare partners",
                  "Faith communities",
                  "Community organizations",
                  "Schools and educators",
                  "Corporate and civic leaders",
                ].map((item) => (
                  <span
                    key={item}
                    className="border border-line bg-paper px-3 py-1.5 text-sm font-semibold text-forest"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-6">
                <a
                  href="mailto:connect@sustainedlife.net?subject=Partnership%20with%20Sustained%20Life"
                  className="btn-lift inline-flex min-h-12 items-center justify-center rounded-full border-2 border-forest px-[1.15rem] py-3 text-sm font-extrabold text-forest no-underline transition-colors hover:bg-forest hover:text-white"
                >
                  Discuss a partnership
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section dark id="advocacy">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <Eyebrow light>Advocacy work</Eyebrow>
              <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] text-paper">
                Championing hunger relief and public policy.
              </h2>
              <div className="mt-6 space-y-3 text-[#e6eee9]">
                <p>
                  <strong className="text-white">March 3–4, 2026</strong>
                  <span className="ml-2">Feeding America Fly-In</span>
                </p>
                <p>
                  <strong className="text-white">March 4–5, 2025</strong>
                  <span className="ml-2">Feeding America Fly-In</span>
                </p>
              </div>
            </div>
            <div className="space-y-4 text-[#e6eee9]">
              <p className="text-sm font-extrabold uppercase tracking-[0.12em] text-gold-soft">
                Capitol Hill • Washington, DC
              </p>
              <Lead className="text-[#e2eee8]">
                Sophia works to bridge healthcare, nutrition, and public policy
                across the Commonwealth and beyond.
              </Lead>
              <p>
                As Executive Director of the New Vision Community Outreach
                Association FXBG food pantry and an active advocate with the
                Virginia Food Is Medicine Coalition, she brings community
                experience into conversations about access, dignity, and
                sustainable health.
              </p>
              <p>
                Partnering with the Fredericksburg Regional Food Bank at Feeding
                America’s Legislative Advocacy Fly-In, Sophia has engaged with
                lawmakers and congressional staff—including the offices of
                Senators Tim Kaine and Mark Warner and Representative Eugene
                Vindman. Her advocacy has focused on protecting vital SNAP and
                TEFAP resources in Farm Bill discussions, addressing the effects
                of federal workforce disruptions, and elevating stories from
                local families.
              </p>
              <p>
                In Virginia, her advocacy has included proposed measures such as
                HB 1434 and budget priorities related to Medicaid-covered
                nutrition services, pilot grant programs for diet-related chronic
                conditions, and local produce-prescription programs.
              </p>
              <div className="border-l-4 border-gold bg-white/10 px-4 py-3 text-sm">
                <strong className="text-white">Policy context:</strong> Legislative
                references describe advocacy priorities at the time of engagement
                and do not indicate enactment, endorsement, or a guaranteed policy
                outcome.
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="border border-line bg-paper p-6 sm:p-8">
              <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-gold-dark">
                Advocacy training
              </p>
              <p className="mt-2 text-sm font-semibold text-muted">
                July 2024 • March 2025
              </p>
              <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3rem)] text-forest-dark">
                Elevating Voices
              </h2>
              <div className="mt-4 space-y-4 text-muted">
                <p>
                  Elevating Voices is Feeding America’s platform for consistently
                  engaging with and amplifying the experience and expertise of
                  people who have lived through food insecurity.
                </p>
                <p>
                  The training strengthens how advocates listen, communicate, and
                  support new public understanding shaped by the people closest
                  to the issue. Sophia’s photograph was featured in the 2025
                  Elevating Voices annual report.
                </p>
              </div>
            </div>
            <div className="border border-line bg-sage/50 p-6 sm:p-8">
              <Eyebrow>What this work protects</Eyebrow>
              <ul className="mt-4 space-y-4">
                {[
                  [
                    "Lived expertise",
                    "People closest to the issue help shape the narrative.",
                  ],
                  [
                    "Dignity",
                    "Stories are shared with consent, care, and context.",
                  ],
                  [
                    "Accountability",
                    "Advocacy remains connected to real community needs.",
                  ],
                  [
                    "Shared power",
                    "People are partners in change—not illustrations of a problem.",
                  ],
                ].map(([title, body]) => (
                  <li key={title}>
                    <strong className="block text-forest">{title}</strong>
                    <span className="text-sm text-muted">{body}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section tint>
        <Container>
          <div className="grid gap-6 border border-line bg-paper p-6 sm:grid-cols-[7rem_1fr] sm:p-8">
            <div className="flex flex-col items-center justify-center bg-forest px-3 py-5 text-center text-white">
              <span className="text-xs font-extrabold uppercase tracking-[0.14em]">
                Oct
              </span>
              <strong className="font-display text-3xl">2026</strong>
            </div>
            <div>
              <Eyebrow>Future speaking engagement</Eyebrow>
              <h2 className="font-display text-[clamp(1.8rem,3vw,2.6rem)] text-forest-dark">
                Unitarian Universalist Church
              </h2>
              <p className="mt-1 font-semibold text-forest">
                Fredericksburg, Virginia
              </p>
              <p className="mt-3 text-muted">
                Sophia will join the congregation for a community-centered
                conversation. Program topic and event details are forthcoming.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>For event organizers</Eyebrow>
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] text-forest-dark">
              A thoughtful partner from first conversation to final question.
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {expectItems.map(([num, title, body]) => (
              <article key={title} className="border-t border-line pt-5">
                <span className="font-display text-2xl font-bold text-gold-dark">
                  {num}
                </span>
                <h3 className="mt-3 font-display text-xl text-forest-dark">
                  {title}
                </h3>
                <p className="mt-2 text-muted">{body}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section dark>
        <Container className="text-center">
          <Eyebrow light>Request Sophia to speak</Eyebrow>
          <h2 className="mx-auto max-w-3xl font-display text-[clamp(2rem,4vw,3.2rem)] text-paper">
            Bring a meaningful conversation to your next gathering.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#e2eee8]">
            Tell us about your event, audience, and goals through the contact
            form. We will follow up to discuss alignment, format, availability,
            accessibility needs, and next steps.
          </p>
          <div className="mt-7 flex flex-col items-center gap-4">
            <ButtonLink href="/contact#contact-form" variant="gold">
              Invite Sophia to speak
            </ButtonLink>
            <a
              href="mailto:connect@sustainedlife.net?subject=Speaking%20Engagement%20Request"
              className="font-bold text-gold-soft no-underline hover:text-white"
            >
              Or email connect@sustainedlife.net
            </a>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="text-center">
          <Eyebrow>One conversation can open a pathway</Eyebrow>
          <h2 className="mx-auto max-w-3xl font-display text-[clamp(2rem,4vw,3.2rem)] text-forest-dark">
            Invite people to see the whole picture—and their place in changing
            it.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
            Lasting health is strengthened through stewardship, knowledge,
            community, and compassionate action. Let’s begin with a conversation
            your audience can carry forward.
          </p>
          <div className="mt-7">
            <ButtonLink href="/contact#contact-form">
              Go to the contact form
            </ButtonLink>
          </div>
        </Container>
      </Section>
    </>
  );
}
