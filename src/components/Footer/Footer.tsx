import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="text-lg font-semibold text-brand-700">MANSYS</div>
          <div className="text-sm text-neutral-500 mt-1">
            Connecting Australian employers with global talent
          </div>
        </div>

        <div className="text-sm text-neutral-500">
          <div>© {new Date().getFullYear()} MANSYS. All rights reserved.</div>
          <div className="mt-2">
            Email:{" "}
            <Link className="text-accent" href="mailto:hello@example.com">
              hello@example.com
            </Link>{" "}
            • Phone:{" "}
            <Link className="text-accent" href="tel:+6123456789">
              +61 2 3456 789
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
