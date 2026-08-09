import { pageMetadata } from "@/lib/seo";
import { ContactForm } from "@/components/ContactForm";
import {
  Card,
  CheckList,
  Container,
  Eyebrow,
  PageHero,
  Section,
} from "@/components/ui";

export const metadata = pageMetadata({
  title: 'Contact Sustained Life, Inc.',
  description:
    'Contact Sustained Life about partnerships, speaking, workshops, the Sustained Life Method, resources, or general questions.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        eyebrow="Start a conversation"
        title="How can we support your next step?"
        lead="We welcome questions about the Sustained Life Method, speaking, workshops, community partnerships, resources, and ways to support the mission."
      />

      <Section id="contact-form">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <Eyebrow>Contact Sustained Life</Eyebrow>
              <h2 className="mb-4 font-display text-[clamp(2rem,4vw,3.5rem)] text-forest-dark text-balance">
                Tell us what brings you here.
              </h2>
              <p className="mb-6">
                Complete the form and a member of the Sustained Life team can
                follow up. Please do not include private medical, financial, or
                other sensitive information.
              </p>
              <Card>
                <h3 className="mb-3 font-display text-[1.45rem] text-forest-dark">
                  Common reasons to connect
                </h3>
                <CheckList
                  items={[
                    "Partnerships and Healthy Pantry initiatives",
                    "Speaking engagements and workshops",
                    "The Sustained Life Method",
                    "Educational resources",
                    "Volunteer or giving questions",
                  ]}
                />
              </Card>
            </div>
            <ContactForm />
          </div>
        </Container>
      </Section>

      <Section tint compact>
        <Container narrow>
          <p className="mb-0">
            <strong>Website launch note:</strong> Submissions are sent to the
            separate API server and saved locally for development. Before
            go-live, connect email delivery (such as Resend) or a durable
            database so the team receives and retains messages reliably.
          </p>
        </Container>
      </Section>
    </>
  );
}
