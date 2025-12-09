import Link from "next/link";
import { PenTool } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-bg-secondary border-t border-border-color" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-2">
              <PenTool className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-text-primary">Inkdown</span>
            </Link>
              <p className="text-xs leading-5 text-text-muted">
                &copy; {new Date().getFullYear()} Inkdown
              </p>
            <div className="flex space-x-6">
              {/* Social links can go here later */}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-text-primary">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link href="#" className="text-sm leading-6 text-text-secondary hover:text-primary transition-colors">
                      About us
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-text-primary">Learn</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link href="#" className="text-sm leading-6 text-text-secondary hover:text-primary transition-colors">
                      Docs
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm leading-6 text-text-secondary hover:text-primary transition-colors">
                      Roadmap
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm leading-6 text-text-secondary hover:text-primary transition-colors">
                      Releases
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
