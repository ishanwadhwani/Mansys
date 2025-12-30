"use client";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import PageHeader from "@/components/PageHeader";

export default function TermsAndConditions() {
  const sections = [
    {
      title: "1. About Mansys Mantra",
      content:
        "Mansys Mantra provides information, guidance, and referral services relating to employment pathways and migration-related matters. We are not a government authority. Migration advice is provided through authorized professionals.",
    },
    {
      title: "2. No Legal or Migration Guarantee",
      content:
        "Information on this website is general and does not constitute legal advice. Visa decisions are made solely by the Australian Government; outcomes may vary based on individual circumstances.",
    },
    {
      title: "3. User Responsibilities",
      content: (
        <ul className="list-disc pl-6 space-y-2">
          <li>Ensure all provided information is accurate and complete.</li>
          <li>Do not use the website for unlawful or misleading purposes.</li>
          <li>Understand that eligibility assessments are indicative only.</li>
        </ul>
      ),
    },
    {
      title: "4. Consultations and Services",
      content:
        "Any assessments provided are based on information supplied by you and do not guarantee employment, sponsorship, or visa approval. Fees will be communicated separately before engagement.",
    },
    {
      title: "5. Intellectual Property",
      content:
        "All content, logos, and branding are the property of Mansys Mantra. You may not reproduce or reuse content without prior written permission.",
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[var(--color-paper)]">
        {/* Hero Section */}
        <PageHeader
          title="Terms and Conditions"
          description="By accessing this website, you agree to be bound by these legal terms governing our services."
          badge="Legal Documentation"
        />

        {/* Content Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-[var(--color-secondary)]/10">
              <div className="prose prose-slate max-w-none text-[var(--color-navy)]">
                <p className="text-lg leading-relaxed mb-10 text-[var(--color-muted)]">
                  These Terms and Conditions govern your use of the Mansys
                  Mantra website and services.
                </p>

                <div className="space-y-12">
                  {sections.map((section) => (
                    <div key={section.title} className="group">
                      <h1 className="text-2xl font-bold mb-4 flex items-center gap-3">
                        <span className="w-1 h-10 bg-[var(--color-brand)] rounded-full mt-1"></span>
                        {section.title}
                      </h1>
                      <div className="text-[var(--color-muted)] leading-relaxed pl-4">
                        {section.content}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-16 p-8 bg-[var(--color-navy)] rounded-2xl text-white">
                  <h2 className="text-xl font-bold mb-2">Governing Law</h2>
                  <p className="text-sm opacity-80">
                    These Terms are governed by the laws of New South Wales and
                    the Commonwealth of Australia. Any disputes will be handled
                    within these jurisdictions.
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
