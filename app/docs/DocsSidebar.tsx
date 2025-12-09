"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { docs } from "./content/docs";

export function DocsSidebar() {
  const pathname = usePathname();
  const [activeSlug, setActiveSlug] = useState<string>("");

  useEffect(() => {
    // Extract slug from pathname
    const slug = pathname.split("/").pop() || "getting-started";
    setActiveSlug(slug);
  }, [pathname]);

  return (
    <aside className="w-64 shrink-0 border-r border-border-color bg-bg-primary h-[calc(100vh-64px)] sticky top-16 overflow-y-auto">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-6">
          <h2 className="text-lg font-semibold text-text-primary">Documentation</h2>
        </div>

        <nav className="space-y-1">
          {docs.map((doc) => (
            <Link
              key={doc.slug}
              href={`/docs/${doc.slug}`}
              className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                activeSlug === doc.slug
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-text-secondary hover:bg-bg-secondary hover:text-text-primary"
              }`}
            >
              <span>{doc.title}</span>
              {activeSlug === doc.slug && (
                <ChevronRight className="w-4 h-4" />
              )}
            </Link>
          ))}
        </nav>

        <div className="mt-8 pt-6 border-t border-border-color">
          <h3 className="text-xs font-semibold text-text-muted uppercase tracking-wide mb-3">
            Community
          </h3>
          <div className="space-y-1">
            <a
              href="https://github.com/inkdown/inkdown"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 text-sm text-text-secondary hover:bg-bg-secondary hover:text-text-primary rounded-lg transition-all"
            >
              GitHub
            </a>
            <a
              href="https://github.com/inkdown/inkdown/discussions"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 text-sm text-text-secondary hover:bg-bg-secondary hover:text-text-primary rounded-lg transition-all"
            >
              Discussions
            </a>
            <a
              href="https://github.com/inkdown/inkdown/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 text-sm text-text-secondary hover:bg-bg-secondary hover:text-text-primary rounded-lg transition-all"
            >
              Issues
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
