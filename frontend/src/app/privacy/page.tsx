import type { Metadata } from "next";
import Link from "next/link";
import {
  Container,
  Notice,
  PageHero,
  Section,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read the Sustained Life, Inc. website privacy policy.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
        title="Privacy Policy"
        lead="Effective August 4, 2026"
      />

      <Section>
        <Container narrow className="space-y-6 [&_h2]:mb-2 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:text-forest-dark">
          <Notice>
            <strong>Review before launch:</strong> This starter policy should be
            reviewed and updated after your final form, newsletter, analytics,
            donation, and email services are chosen.
          </Notice>
          <div>
            <h2>Our approach</h2>
            <p>
              Sustained Life, Inc. respects your privacy. This policy describes
              the information our website may collect, why it may be used, and
              the choices available to you.
            </p>
          </div>
          <div>
            <h2>Information you provide</h2>
            <p>
              You may choose to provide information such as your name, email
              address, phone number, organization, interests, and message when
              using a contact, information-request, or newsletter form. Please
              do not submit private medical, financial, or other sensitive
              information.
            </p>
          </div>
          <div>
            <h2>Information collected automatically</h2>
            <p>
              Our hosting provider may process basic technical information, such
              as IP address, browser type, device type, pages visited, and
              timestamps, to deliver and secure the website. If analytics or
              cookies are added later, this policy and any consent tools should
              be updated before they are activated.
            </p>
          </div>
          <div>
            <h2>How information may be used</h2>
            <ul>
              <li>To respond to requests and questions.</li>
              <li>To provide requested updates or resources.</li>
              <li>To operate, protect, and improve the website.</li>
              <li>To comply with applicable law and protect rights and safety.</li>
            </ul>
          </div>
          <div>
            <h2>Sharing</h2>
            <p>
              We do not sell personal information. Information may be shared with
              service providers that help operate the website, communications,
              forms, or donations, subject to appropriate agreements. It may
              also be disclosed when legally required.
            </p>
          </div>
          <div>
            <h2>Retention and security</h2>
            <p>
              Information should be retained only as long as reasonably necessary
              for the purpose collected and protected with reasonable
              administrative and technical safeguards. No online system can
              guarantee absolute security.
            </p>
          </div>
          <div>
            <h2>Your choices</h2>
            <p>
              You may ask to update or delete information you provided, or
              unsubscribe from nonessential email, by using the{" "}
              <Link href="/contact">contact form</Link>. Certain information may
              be retained when required by law or legitimate operational needs.
            </p>
          </div>
          <div>
            <h2>Children</h2>
            <p>
              This website is intended for a general audience and is not directed
              to children under 13. We do not knowingly seek personal information
              from children under 13 through this website.
            </p>
          </div>
          <div>
            <h2>External services and links</h2>
            <p>
              Third-party websites and services have their own privacy practices.
              Review their policies before providing information.
            </p>
          </div>
          <div>
            <h2>Changes to this policy</h2>
            <p>
              We may update this policy as our services change. The effective
              date at the top identifies the latest version.
            </p>
          </div>
          <div>
            <h2>Contact</h2>
            <p>
              Questions about this policy may be submitted through our{" "}
              <Link href="/contact">Contact page</Link>.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
