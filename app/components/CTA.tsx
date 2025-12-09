import Link from "next/link";

export function CTA() {
  return (
    <section className="bg-bg-primary">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            Ready to organize your thoughts?
            <br />
            Start using Inkdown today.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-text-secondary">
            Join thousands of developers and writers who trust Inkdown for their daily notes and documentation.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="#"
              className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors"
            >
              Download for macOS
            </Link>
            <Link href="#" className="text-sm font-semibold leading-6 text-text-primary hover:text-primary transition-colors">
              View on GitHub <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
