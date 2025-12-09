import Link from "next/link";

export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center px-4 py-24 text-center md:py-32 bg-bg-primary">
      <h1 className="text-4xl font-bold tracking-tight text-text-primary sm:text-6xl mb-6">
        Your thoughts, <span className="text-primary">organized.</span>
      </h1>
      <p className="max-w-2xl text-lg leading-8 text-text-secondary mb-10">
        Inkdown is a modern, extensible markdown editor designed for your workflow. 
        Write, organize, and sync your notes with ease.
      </p>
      <div className="flex items-center justify-center gap-x-6">
        <Link
          href="#"
          className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors"
        >
          Get Started
        </Link>
        <Link href="#" className="text-sm font-semibold leading-6 text-text-primary hover:text-primary transition-colors">
          Learn more <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
