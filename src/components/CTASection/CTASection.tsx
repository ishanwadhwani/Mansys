import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-12">
      <div className="container grid md:grid-cols-2 gap-6">
        {/* <div className="p-6 rounded-lg bg-white border shadow-soft-md text-center">
          <h3 className="text-lg font-semibold text-brand-700">Employers: Find Skilled Workers</h3>
          <p className="text-sm text-neutral-600 mt-2">Access a pipeline of vetted candidates ready to work.</p>
          <div className="mt-4">
            <Link href="/employer" className="btn-brand">Find Your Workforce</Link>
          </div>
        </div> */}

        <div className="p-6 rounded-lg bg-white border shadow-soft-md text-center">
          <h3 className="text-lg font-semibold text-brand-700">Candidates: Start Your Journey</h3>
          <p className="text-sm text-neutral-600 mt-2">Register your skills and let employers find you.</p>
          <div className="mt-4">
            <Link href="/candidate" className="btn-outline">Start Your Journey</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
