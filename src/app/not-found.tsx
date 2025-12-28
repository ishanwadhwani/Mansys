import Link from "next/link";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Page Not Found | Mansys Mantra",
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center bg-[var(--color-paper)] py-20 px-4">
        <div className="max-w-2xl w-full bg-white rounded-[2rem] shadow-xl border border-[var(--color-secondary)]/10 p-12 md:p-16 text-center relative overflow-hidden">
          {/* Subtle Background Decorative Element */}
          <div
            className="absolute -top-20 -left-20 w-64 h-64 bg-[var(--color-brand)]/5 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          ></div>
          <div
            className="absolute -bottom-20 -right-20 w-64 h-64 bg-[var(--color-navy)]/5 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          ></div>

          <div className="relative z-10">
            {/* Big 404 Text */}
            <h1 className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-navy)] to-[var(--color-brand)] mb-4">
              404
            </h1>

            <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-navy)] mb-6">
              Page not found
            </h2>

            <p className="text-[var(--color-muted)] text-lg mb-10 max-w-md mx-auto leading-relaxed">
              Sorry, we couldn’t find the page you’re looking for. It might have
              been moved or deleted.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/"
                className="px-8 py-3 rounded-full bg-[var(--color-brand)] text-white font-bold hover:bg-[var(--color-accent)] transition-colors shadow-sm w-full sm:w-auto"
              >
                Go back home
              </Link>
              <Link
                href="/blog"
                className="px-8 py-3 rounded-full bg-transparent border-2 border-[var(--color-navy)] text-[var(--color-navy)] font-bold hover:bg-[var(--color-navy)] hover:text-white transition-colors w-full sm:w-auto"
              >
                Read our blog
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
