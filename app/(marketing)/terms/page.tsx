import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — MarketFit AI",
  description: "Terms of Service for the MarketFit AI platform.",
};

export default function TermsPage() {
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
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Terms of Service</h1>
        <p className="mt-4 text-muted">Last updated: March 26, 2026</p>
      </header>

      <div className="space-y-12 text-sm leading-relaxed text-muted [&_h2]:mb-4 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h3]:mb-2 [&_h3]:mt-6 [&_h3]:text-base [&_h3]:font-medium [&_h3]:text-foreground [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2">
        <section>
          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing or using MarketFit AI (&quot;the Service&quot;), operated by MarketFit AI Inc.
            (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), you agree to be bound by these Terms of
            Service (&quot;Terms&quot;). If you do not agree to these Terms, you may not access or use
            the Service.
          </p>
          <p>
            We reserve the right to modify these Terms at any time. We will notify you of material
            changes by posting the updated Terms on our website and updating the &quot;Last
            updated&quot; date. Your continued use of the Service after changes are posted constitutes
            your acceptance of the modified Terms.
          </p>
        </section>

        <section>
          <h2>2. Description of Service</h2>
          <p>
            MarketFit AI is an AI-powered marketing intelligence platform that helps businesses find
            product-market fit, analyze target audiences, optimize marketing channels, and reduce
            customer acquisition costs. The Service includes web-based tools, analytics dashboards,
            AI-generated insights, and related features.
          </p>
        </section>

        <section>
          <h2>3. Pre-Order &amp; Early Access</h2>
          <p>
            The Service offers two early access options prior to our official launch on April 15,
            2026. By selecting either option, you agree to the applicable terms below.
          </p>

          <h3>3.1 Founding Member Pre-Order ($10)</h3>
          <ul>
            <li>
              A one-time payment of $10 USD reserves your spot as a founding member, limited to 100
              spots total.
            </li>
            <li>
              Founding members receive a 50% discount on their subscription fee for the first 3
              months following the official launch date.
            </li>
            <li>
              Founding members receive priority access to the platform on launch day and exclusive
              founding member benefits (badge, priority support).
            </li>
            <li>
              If the Service does not launch by the stated date, you are entitled to a full refund
              of your pre-order payment.
            </li>
            <li>
              You may cancel your pre-order and receive a full refund at any time before the
              official launch date.
            </li>
            <li>
              The 50% founding member discount applies only to the first 3 months of your
              subscription after launch and cannot be combined with other promotional offers unless
              explicitly stated.
            </li>
          </ul>

          <h3>3.2 Waitlist (Free)</h3>
          <ul>
            <li>
              You may join our waitlist at no cost by providing your name and email address.
            </li>
            <li>
              Waitlist members receive a 10% discount on their subscription fee, applied
              automatically when the platform launches.
            </li>
            <li>
              The 10% waitlist discount applies to your subscription after launch and cannot be
              combined with the founding member discount or other promotional offers unless
              explicitly stated.
            </li>
            <li>
              You may unsubscribe from the waitlist at any time by contacting us or using the
              unsubscribe link in our emails.
            </li>
            <li>
              Joining the waitlist does not guarantee a specific launch-day access slot; founding
              members receive priority access.
            </li>
          </ul>
        </section>

        <section>
          <h2>4. Account Registration</h2>
          <p>
            To use the Service, you must create an account by providing accurate and complete
            information, including your name and email address. You are responsible for:
          </p>
          <ul>
            <li>Maintaining the confidentiality of your account credentials.</li>
            <li>All activities that occur under your account.</li>
            <li>Notifying us immediately of any unauthorized use of your account.</li>
          </ul>
          <p>
            You must be at least 18 years old to create an account and use the Service.
          </p>
        </section>

        <section>
          <h2>5. Acceptable Use</h2>
          <p>You agree not to use the Service to:</p>
          <ul>
            <li>Violate any applicable laws, regulations, or third-party rights.</li>
            <li>
              Upload, transmit, or distribute any content that is unlawful, harmful, threatening,
              abusive, defamatory, or otherwise objectionable.
            </li>
            <li>
              Attempt to gain unauthorized access to the Service, other accounts, or any related
              systems or networks.
            </li>
            <li>
              Interfere with or disrupt the Service or servers or networks connected to the
              Service.
            </li>
            <li>
              Use automated systems (bots, scrapers, etc.) to access the Service without our prior
              written consent.
            </li>
            <li>
              Reverse engineer, decompile, or disassemble any aspect of the Service.
            </li>
          </ul>
        </section>

        <section>
          <h2>6. Intellectual Property</h2>
          <p>
            The Service, including all content, features, and functionality (such as text, graphics,
            logos, icons, images, audio, software, and algorithms), is owned by MarketFit AI Inc.
            and is protected by copyright, trademark, and other intellectual property laws.
          </p>
          <p>
            You retain ownership of any data or content you submit to the Service. By submitting
            content, you grant us a non-exclusive, worldwide, royalty-free license to use, process,
            and analyze your content solely for the purpose of providing and improving the Service.
          </p>
        </section>

        <section>
          <h2>7. AI-Generated Content</h2>
          <p>
            The Service uses artificial intelligence to generate insights, recommendations, and
            analysis. You acknowledge and agree that:
          </p>
          <ul>
            <li>
              AI-generated outputs are provided for informational purposes only and should not be
              considered as professional business, financial, or legal advice.
            </li>
            <li>
              We do not guarantee the accuracy, completeness, or reliability of AI-generated
              content.
            </li>
            <li>
              You are solely responsible for any decisions or actions you take based on
              AI-generated insights.
            </li>
          </ul>
        </section>

        <section>
          <h2>8. Payment &amp; Billing</h2>
          <p>
            Certain features of the Service may require payment. By providing payment information,
            you represent that you are authorized to use the payment method and authorize us to
            charge the applicable fees. All fees are stated in USD and are non-refundable except as
            expressly set forth in these Terms or as required by applicable law.
          </p>
        </section>

        <section>
          <h2>9. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, MarketFit AI Inc. shall not be liable for any
            indirect, incidental, special, consequential, or punitive damages, including but not
            limited to loss of profits, data, or business opportunities, arising out of or in
            connection with your use of the Service.
          </p>
          <p>
            Our total aggregate liability for all claims arising out of or relating to these Terms
            or the Service shall not exceed the amount you paid to us in the twelve (12) months
            preceding the event giving rise to the claim.
          </p>
        </section>

        <section>
          <h2>10. Disclaimer of Warranties</h2>
          <p>
            The Service is provided &quot;as is&quot; and &quot;as available&quot; without
            warranties of any kind, whether express, implied, or statutory. We disclaim all
            warranties, including but not limited to implied warranties of merchantability, fitness
            for a particular purpose, and non-infringement.
          </p>
        </section>

        <section>
          <h2>11. Termination</h2>
          <p>
            We may suspend or terminate your access to the Service at any time, with or without
            cause, with or without notice. Upon termination, your right to use the Service will
            immediately cease. Provisions of these Terms that by their nature should survive
            termination shall survive.
          </p>
        </section>

        <section>
          <h2>12. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the State
            of Delaware, United States, without regard to its conflict of law provisions. Any
            disputes arising under these Terms shall be resolved in the state or federal courts
            located in Delaware.
          </p>
        </section>

        <section>
          <h2>13. Contact Information</h2>
          <p>
            If you have any questions about these Terms, please contact us at:
          </p>
          <p>
            <strong className="text-foreground">MarketFit AI Inc.</strong>
            <br />
            Email: legal@marketfitai.com
          </p>
        </section>
      </div>
    </article>
  );
}
