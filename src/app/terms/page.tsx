import type { Metadata } from "next";
import Link from "next/link";
import {
  Container,
  Notice,
  PageHero,
  Section,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Read the terms governing use of the Sustained Life, Inc. website.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Terms of Service" }]}
        title="Terms of Service"
        lead="Effective August 4, 2026"
      />

      <Section>
        <Container narrow className="space-y-6 [&_h2]:mb-2 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:text-forest-dark">
          <Notice>
            <strong>Review before launch:</strong> These starter terms are not
            legal advice. Have qualified counsel review them alongside your final
            donation, event, resource, and service practices.
          </Notice>
          <div>
            <h2>Acceptance</h2>
            <p>
              By using this website, you agree to these terms. If you do not
              agree, please do not use the website.
            </p>
          </div>
          <div>
            <h2>Educational information only</h2>
            <p>
              Website content is provided for general educational and
              informational purposes. It is not medical, nutrition, legal,
              financial, or other professional advice. It does not create a
              professional-client relationship and should not replace guidance
              from a qualified professional.
            </p>
          </div>
          <div>
            <h2>No medical claims</h2>
            <p>
              Sustained Life does not represent that a food, resource, program,
              or practice will diagnose, treat, cure, or prevent a disease or
              guarantee any outcome. Seek appropriate professional care for
              individual questions and emergencies.
            </p>
          </div>
          <div>
            <h2>Permitted use</h2>
            <p>
              You may use the website for lawful, personal, and noncommercial
              purposes. You may not disrupt the website, attempt unauthorized
              access, introduce malicious code, misrepresent your identity, or
              use content in a way that violates law or another person’s rights.
            </p>
          </div>
          <div>
            <h2>Intellectual property</h2>
            <p>
              Unless otherwise stated, the website’s original text, design,
              branding, and materials belong to Sustained Life, Inc. or are used
              with permission. No rights are granted except the limited right to
              view and use the website under these terms.
            </p>
          </div>
          <div>
            <h2>External links</h2>
            <p>
              Links to other websites may be provided for convenience. Sustained
              Life does not control and is not responsible for third-party
              content, security, availability, or practices.
            </p>
          </div>
          <div>
            <h2>No warranties</h2>
            <p>
              The website is provided “as is” and “as available” to the fullest
              extent permitted by law. We do not guarantee that it will always be
              available, accurate, complete, secure, or error-free.
            </p>
          </div>
          <div>
            <h2>Limitation of liability</h2>
            <p>
              To the fullest extent permitted by applicable law, Sustained Life
              and its leaders, staff, volunteers, and service providers will not
              be liable for indirect, incidental, special, consequential, or
              punitive damages arising from use of this website.
            </p>
          </div>
          <div>
            <h2>Changes</h2>
            <p>
              We may update the website and these terms. Continued use after
              changes take effect means you accept the revised terms.
            </p>
          </div>
          <div>
            <h2>Contact</h2>
            <p>
              Questions may be submitted through our{" "}
              <Link href="/contact">Contact page</Link>.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
