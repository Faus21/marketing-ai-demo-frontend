import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — MarketFit AI",
  description: "Privacy Policy for the MarketFit AI platform.",
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-24 md:py-32">
      <header className="mb-16">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
        >
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Back to home
        </Link>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Privacy Policy</h1>
        <p className="mt-4 text-muted">Last updated: March 26, 2026</p>
      </header>

      <div className="space-y-12 text-sm leading-relaxed text-muted [&_h2]:mb-4 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h3]:mb-2 [&_h3]:mt-6 [&_h3]:text-base [&_h3]:font-medium [&_h3]:text-foreground [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2">
        <section>
          <h2>1. Introduction</h2>
          <p>
            MarketFit AI Inc. (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to
            protecting your privacy. This Privacy Policy explains how we collect, use, disclose,
            and safeguard your information when you use the MarketFit AI platform
            (&quot;the Service&quot;).
          </p>
          <p>
            By using the Service, you consent to the data practices described in this policy. If
            you do not agree with these practices, please do not use the Service.
          </p>
        </section>

        <section>
          <h2>2. Information We Collect</h2>

          <h3>2.1 Information You Provide</h3>
          <ul>
            <li>
              <strong className="text-foreground">Account information:</strong> name, email
              address, and payment details when you register or place a pre-order.
            </li>
            <li>
              <strong className="text-foreground">Waitlist information:</strong> name and email
              address when you join our free waitlist. No payment information is collected for
              waitlist signups.
            </li>
            <li>
              <strong className="text-foreground">Business information:</strong> data about your
              business, products, target audience, and marketing activities that you submit to the
              Service.
            </li>
            <li>
              <strong className="text-foreground">Communications:</strong> messages, feedback, and
              support requests you send to us.
            </li>
          </ul>

          <h3>2.2 Information Collected Automatically</h3>
          <ul>
            <li>
              <strong className="text-foreground">Usage data:</strong> pages visited, features
              used, actions taken, timestamps, and session duration.
            </li>
            <li>
              <strong className="text-foreground">Device information:</strong> browser type,
              operating system, device type, screen resolution, and language preferences.
            </li>
            <li>
              <strong className="text-foreground">Log data:</strong> IP address, referring URLs,
              and access times.
            </li>
            <li>
              <strong className="text-foreground">Cookies and similar technologies:</strong> we use
              cookies, pixels, and local storage to maintain sessions, remember preferences, and
              analyze usage patterns.
            </li>
          </ul>
        </section>

        <section>
          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, maintain, and improve the Service.</li>
            <li>Process your pre-order, manage your waitlist signup, and manage your account.</li>
            <li>
              Generate AI-powered insights, recommendations, and analysis based on the business
              data you provide.
            </li>
            <li>
              Communicate with you about your account, updates, and promotional materials (you can
              opt out of marketing communications at any time).
            </li>
            <li>Monitor and analyze usage trends to improve user experience.</li>
            <li>Detect, prevent, and address technical issues and security threats.</li>
            <li>Comply with legal obligations.</li>
          </ul>
        </section>

        <section>
          <h2>4. How We Share Your Information</h2>
          <p>
            We do not sell your personal information. We may share your information in the
            following circumstances:
          </p>
          <ul>
            <li>
              <strong className="text-foreground">Service providers:</strong> with trusted
              third-party vendors who assist us in operating the Service (e.g., payment processors,
              hosting providers, analytics services). These providers are contractually obligated
              to protect your data.
            </li>
            <li>
              <strong className="text-foreground">Legal requirements:</strong> when required by
              law, subpoena, or other legal process, or to protect our rights, property, or safety.
            </li>
            <li>
              <strong className="text-foreground">Business transfers:</strong> in connection with a
              merger, acquisition, reorganization, or sale of assets, your information may be
              transferred as part of the transaction.
            </li>
            <li>
              <strong className="text-foreground">With your consent:</strong> when you explicitly
              authorize us to share your information.
            </li>
          </ul>
        </section>

        <section>
          <h2>5. Data Retention</h2>
          <p>
            We retain your personal information for as long as your account is active or as needed
            to provide the Service. We may also retain information as necessary to comply with
            legal obligations, resolve disputes, and enforce our agreements. When data is no longer
            needed, we securely delete or anonymize it.
          </p>
        </section>

        <section>
          <h2>6. Data Security</h2>
          <p>
            We implement industry-standard security measures to protect your information, including:
          </p>
          <ul>
            <li>Encryption of data in transit (TLS/SSL) and at rest (AES-256).</li>
            <li>Regular security audits and vulnerability assessments.</li>
            <li>Access controls limiting employee access to personal data on a need-to-know basis.</li>
            <li>Secure cloud infrastructure with redundancy and backup systems.</li>
          </ul>
          <p>
            However, no method of transmission over the internet or electronic storage is 100%
            secure. While we strive to protect your data, we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2>7. Your Rights</h2>
          <p>Depending on your jurisdiction, you may have the following rights:</p>
          <ul>
            <li>
              <strong className="text-foreground">Access:</strong> request a copy of the personal
              data we hold about you.
            </li>
            <li>
              <strong className="text-foreground">Correction:</strong> request that we correct
              inaccurate or incomplete data.
            </li>
            <li>
              <strong className="text-foreground">Deletion:</strong> request that we delete your
              personal data, subject to certain legal exceptions.
            </li>
            <li>
              <strong className="text-foreground">Portability:</strong> request a copy of your data
              in a structured, machine-readable format.
            </li>
            <li>
              <strong className="text-foreground">Opt-out:</strong> unsubscribe from marketing
              communications at any time via the unsubscribe link in our emails.
            </li>
            <li>
              <strong className="text-foreground">Withdraw consent:</strong> where processing is
              based on consent, you may withdraw it at any time.
            </li>
          </ul>
          <p>
            To exercise any of these rights, please contact us at privacy@marketfitai.com.
          </p>
        </section>

        <section>
          <h2>8. Cookies</h2>
          <p>We use the following types of cookies:</p>
          <ul>
            <li>
              <strong className="text-foreground">Essential cookies:</strong> required for the
              Service to function properly (e.g., session management, authentication).
            </li>
            <li>
              <strong className="text-foreground">Analytics cookies:</strong> help us understand
              how visitors interact with the Service so we can improve the user experience.
            </li>
            <li>
              <strong className="text-foreground">Preference cookies:</strong> remember your
              settings and preferences for future visits.
            </li>
          </ul>
          <p>
            You can manage cookie preferences through your browser settings. Disabling certain
            cookies may affect the functionality of the Service.
          </p>
        </section>

        <section>
          <h2>9. Third-Party Links</h2>
          <p>
            The Service may contain links to third-party websites or services. We are not
            responsible for the privacy practices of these third parties. We encourage you to read
            the privacy policies of any third-party services you visit.
          </p>
        </section>

        <section>
          <h2>10. Children&apos;s Privacy</h2>
          <p>
            The Service is not intended for individuals under the age of 18. We do not knowingly
            collect personal information from children. If we become aware that we have collected
            data from a child under 18, we will take steps to delete that information promptly.
          </p>
        </section>

        <section>
          <h2>11. International Data Transfers</h2>
          <p>
            Your information may be transferred to and processed in countries other than your
            country of residence. These countries may have different data protection laws. We take
            appropriate safeguards to ensure your data is protected in accordance with this Privacy
            Policy, including standard contractual clauses and other approved transfer mechanisms.
          </p>
        </section>

        <section>
          <h2>12. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of material
            changes by posting the updated policy on our website and updating the &quot;Last
            updated&quot; date. We encourage you to review this policy periodically.
          </p>
        </section>

        <section>
          <h2>13. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy, please contact us at:
          </p>
          <p>
            <strong className="text-foreground">MarketFit AI Inc.</strong>
            <br />
            Email: privacy@marketfitai.com
          </p>
        </section>
      </div>
    </article>
  );
}
