"use client";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function PrivacyPolicy() {
  const sections = [
    {
      id: "personal-info",
      title: "1. Personal Information We Collect",
      content: (
        <ul className="list-disc pl-6 space-y-2">
          <li>Full name, Email address, and Phone number</li>
          <li>Country of residence</li>
          <li>Employment history, skills details, and qualifications</li>
          <li>Resume/CV (where voluntarily provided)</li>
          <li>Visa or migration-related information</li>
          <li>
            Information submitted through website forms, WhatsApp, or other
            channels
          </li>
        </ul>
      ),
    },
    {
      id: "collection-method",
      title: "2. How We Collect Information",
      content:
        "We collect personal information directly from you when you submit forms on our website, contact us via phone or WhatsApp, request consultations, or interact with our website through cookies and analytics tools.",
    },
    {
      id: "purpose",
      title: "3. Purpose of Collection",
      content:
        "We use your information to assess eligibility for work or migration pathways, respond to enquiries, and improve our services. We do not sell or rent your personal information to third parties.",
    },
    {
      id: "disclosure",
      title: "4. Disclosure of Personal Information",
      content:
        "We may disclose information to Registered Migration Agents, professional partners, or employers (with your consent) to facilitate your application. We also share data with technology providers like hosting and analytics services.",
    },
    {
      id: "security",
      title: "5. Data Storage and Security",
      content:
        "We take reasonable steps to protect personal information from misuse or unauthorized access using secure hosting platforms, restricted access controls, and administrative safeguards.",
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[var(--color-paper)]">
        {/* Hero Section */}
        <section className="bg-[var(--color-navy)] pt-32 pb-20 text-center">
          <div className="container mx-auto px-4">
            <span className="text-[var(--color-brand)] font-bold text-sm uppercase tracking-widest mb-4 block">
              Legal Documentation
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-white/80 max-w-xl mx-auto text-sm">
              Last updated: 19 December 2025 • Mansys Mantra is committed to
              protecting your privacy in accordance with the Australian Privacy
              Act 1988 (Cth).
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-[var(--color-secondary)]/10">
              <div className="prose prose-slate max-w-none text-[var(--color-navy)]">
                <p className="text-lg leading-relaxed mb-10 text-[var(--color-muted)]">
                  This Privacy Policy explains how we collect, use, store and
                  disclose personal information. By using our services, you
                  agree to the practices described herein.
                </p>

                <div className="space-y-12">
                  {sections.map((section) => (
                    <div key={section.id} className="group">
                      <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                        <span className="w-1 h-6 bg-[var(--color-brand)] rounded-full group-hover:h-8 transition-all"></span>
                        {section.title}
                      </h2>
                      <div className="text-[var(--color-muted)] leading-relaxed pl-4">
                        {section.content}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-16 pt-10 border-t border-[var(--color-secondary)]/10">
                  <h2 className="text-xl font-bold mb-4">Contact Details</h2>
                  <p className="text-[var(--color-muted)]">
                    If you have questions about this policy or your data, please
                    contact us:
                    <br />
                    <strong className="text-[var(--color-navy)]">
                      Email:
                    </strong>{" "}
                    mantra@mansysmantra.com
                    <br />
                    <strong className="text-[var(--color-navy)]">
                      Website:
                    </strong>{" "}
                    mansysmantra.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
