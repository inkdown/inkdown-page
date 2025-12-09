"use client";

import { useState, useEffect, useRef } from "react";
import { releases } from "../releases/data/releases";
import { MDXWrapper } from "./MDXWrapper";


export function Releases() {
  const [activeVersion, setActiveVersion] = useState(releases[0].version);
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Cleanup previous observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    // Create new observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Find the most visible entry
        let mostVisibleEntry = entries[0];
        let maxRatio = entries[0].intersectionRatio;

        entries.forEach((entry) => {
          if (entry.intersectionRatio > maxRatio) {
            mostVisibleEntry = entry;
            maxRatio = entry.intersectionRatio;
          }
        });

        if (mostVisibleEntry && mostVisibleEntry.isIntersecting) {
          const version = mostVisibleEntry.target.getAttribute("data-version");
          if (version) {
            setActiveVersion(version);
          }
        }
      },
      { 
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
        rootMargin: "-20% 0px -40% 0px" 
      }
    );

    // Observe all sections
    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) {
        observerRef.current?.observe(ref);
      }
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, [releases]); // Re-run if releases change

  const scrollToVersion = (version: string) => {
    const element = sectionRefs.current[version];
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="py-24 bg-bg-primary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-primary">Changelog</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            What's New in Inkdown
          </p>
          <p className="mt-6 text-lg leading-8 text-text-secondary">
            Follow our journey as we build the best markdown editor for you.
          </p>
        </div>

        <div className="relative flex gap-12 lg:gap-16">
          {/* Timeline Sidebar */}
          <div className="hidden lg:block sticky top-24 self-start w-64 shrink-0">
            <div className="space-y-4">
              {releases.map((release) => (
                <button
                  key={release.version}
                  onClick={() => scrollToVersion(release.version)}
                  className={`w-full text-left transition-all duration-300 ${
                    activeVersion === release.version
                      ? "opacity-100"
                      : "opacity-40 hover:opacity-70"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-1">
                    <div
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        activeVersion === release.version
                          ? "bg-primary w-3 h-3"
                          : "bg-border-color"
                      }`}
                    />
                    <span
                      className={`font-mono text-sm font-semibold transition-all duration-300 ${
                        activeVersion === release.version
                          ? "text-primary text-base"
                          : "text-text-secondary"
                      }`}
                    >
                      {release.version}
                    </span>
                  </div>
                  <div className="ml-5 pl-4">
                    <p className="text-xs text-text-muted">{release.date}</p>
                    {release.platforms.map(platform => (
                      <span
                      key={platform}
                      className={`inline-block mt-1 px-2 py-0.5 text-xs rounded-full ${
                        platform === "Desktop"
                          ? "bg-primary/10 text-primary"
                          : platform === "Mobile"
                          ? "bg-syntax-function/10 text-syntax-function"
                          : "bg-syntax-class/10 text-syntax-class"
                      }`}
                    >
                      {platform}
                    </span>
                    ))}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 space-y-16">
            {releases.map((release) => (
              <div
                key={release.version}
                ref={(el) => {
                  sectionRefs.current[release.version] = el;
                }}
                data-version={release.version}
                className="scroll-mt-24"
              >
                {/* Mobile Header */}
                <div className="lg:hidden mb-6 flex items-center gap-3">
                  <span className="font-mono text-lg font-bold text-primary">
                    {release.version}
                  </span>
                  <span className="text-sm text-text-muted">{release.date}</span>
                  <div className="flex gap-2">
                    {release.platforms.map(platform => (
                      <span
                      key={platform}
                      className={`px-2 py-1 text-xs rounded-full ${
                        platform === "Desktop"
                          ? "bg-primary/10 text-primary"
                          : platform === "Mobile"
                          ? "bg-syntax-function/10 text-syntax-function"
                          : "bg-syntax-class/10 text-syntax-class"
                      }`}
                      >
                      {platform}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-bg-primary p-8">
                  <h3 className="text-3xl font-bold text-text-primary mb-6">
                    {release.title}
                  </h3>

                  <MDXWrapper>
                    <release.component />
                  </MDXWrapper>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
