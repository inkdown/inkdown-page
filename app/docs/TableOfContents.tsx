"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { List } from "lucide-react";

interface Heading {
  id: string;
  text: string;
  level: number;
}

export function TableOfContents() {
  const pathname = usePathname();
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Reset state when pathname changes
    setHeadings([]);
    setActiveId("");
    
    // Wait for content to be fully rendered
    const timer = setTimeout(() => {
      const content = document.querySelector(".doc-content");
      if (!content) return;

      const headingElements = content.querySelectorAll("h2");
      const headingData: Heading[] = [];

      headingElements.forEach((heading) => {
        if (heading instanceof HTMLElement) {
          const text = heading.textContent || "";
          const id = heading.id || text.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
          
          // Ensure heading has an ID
          if (!heading.id) {
            heading.id = id;
          }
          
          headingData.push({
            id,
            text,
            level: parseInt(heading.tagName[1]),
          });
        }
      });

      setHeadings(headingData);

      // Setup IntersectionObserver
      if (observerRef.current) {
        observerRef.current.disconnect();
      }

      observerRef.current = new IntersectionObserver(
        (entries) => {
          // Find the most visible entry
          let mostVisible = entries[0];
          let maxRatio = 0;

          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
              maxRatio = entry.intersectionRatio;
              mostVisible = entry;
            }
          });

          if (mostVisible && mostVisible.isIntersecting) {
            setActiveId(mostVisible.target.id);
          }
        },
        {
          rootMargin: "-20% 0px -35% 0px",
          threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        }
      );

      headingElements.forEach((heading) => {
        if (heading) observerRef.current?.observe(heading);
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      observerRef.current?.disconnect();
    };
  }, [pathname]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for navbar
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
      setActiveId(id);
    }
  };

  if (headings.length === 0) return null;

  return (
    <aside className="w-64 shrink-0 h-[calc(100vh-64px)] sticky top-16 overflow-y-auto hidden lg:block">
      <div className="py-12 pr-8">
        <div className="flex items-center gap-2 mb-4">
          <List className="w-4 h-4 text-text-muted" />
          <h2 className="text-sm font-semibold text-text-primary">On This Page</h2>
        </div>

        <nav className="space-y-2">
          {headings.map((heading) => (
            <button
              key={heading.id}
              onClick={() => scrollToHeading(heading.id)}
              className={`block w-full text-left text-sm transition-all duration-200 ${
                activeId === heading.id
                  ? "text-primary font-medium"
                  : "text-text-muted hover:text-text-primary"
              }`}
            >
              {heading.text}
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
}
