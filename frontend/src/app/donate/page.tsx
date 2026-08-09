import { pageMetadata } from "@/lib/seo";
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

export const metadata = pageMetadata({
  title: 'Donate',
  description:
    'Support Sustained Life education, resources, partnerships, and whole-person community wellness initiatives.',
  path: '/donate',
});

export default function DonatePage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Donate" }]}
        eyebrow="Support the mission"
        title="Your generosity can nourish change that lasts."
        lead="Help Sustained Life create practical education, community partnerships, and dignity-centered resources that support whole-person flourishing."
      />

      <Section>
        <Container>
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <Eyebrow>Why give</Eyebrow>
              <h2 className="mb-4 font-display text-[clamp(2rem,4vw,3.5rem)] text-forest-dark">
                Invest in pathways, not just moments.
              </h2>
              <Lead className="mb-6">
                Your support helps connect urgent needs with lasting knowledge,
                relationships, stewardship, and stronger community systems.
              </Lead>
              <CheckList
                items={[
                  "Develop accessible nutrition and wellness resources.",
                  "Support community workshops and learning opportunities.",
                  "Strengthen Healthy Pantry and partner initiatives.",
                  "Expand practical tools for churches, families, and organizations.",
                ]}
              />
            </div>
            <Card>
              <Eyebrow>Secure giving</Eyebrow>
              <h2 className="mb-3 font-display text-[clamp(1.8rem,3vw,2.4rem)] text-forest-dark">
                Donation checkout
              </h2>
              <p>
                Connect this button to your approved donation platform before
                launch. A secure third-party provider can handle payment
                information and receipts.
              </p>
              <div className="mt-6">
                <ButtonLink href="/contact">Ask About Giving</ButtonLink>
              </div>
              <div className="mt-6">
                <Notice>
                  <strong>Launch note:</strong> No payment information is
                  collected by this starter site.
                </Notice>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      <Section tint>
        <Container>
          <Eyebrow>Other ways to help</Eyebrow>
          <h2 className="mb-8 font-display text-[clamp(2rem,4vw,3.5rem)] text-forest-dark">
            Generosity takes many forms
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            <Card>
              <h3 className="mb-2 font-display text-[1.45rem] text-forest-dark">
                Partner
              </h3>
              <p className="mb-0">
                Bring resources, expertise, reach, or shared learning to a
                community initiative.
              </p>
            </Card>
            <Card>
              <h3 className="mb-2 font-display text-[1.45rem] text-forest-dark">
                Invite
              </h3>
              <p className="mb-0">
                Host a workshop or conversation for your organization, church,
                or coalition.
              </p>
            </Card>
            <Card>
              <h3 className="mb-2 font-display text-[1.45rem] text-forest-dark">
                Share
              </h3>
              <p className="mb-0">
                Introduce Sustained Life to someone who believes in
                dignity-centered wellness.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      <Section>
        <Container narrow>
          <Notice>
            <strong>Transparency note:</strong> Add Sustained Life’s current
            charitable registration, tax-deductibility language, EIN, and
            donation/refund policies after confirmation by the organization’s
            legal or tax advisor.
          </Notice>
        </Container>
      </Section>
    </>
  );
}
