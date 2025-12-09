"use client";

import Link from "next/link";
import { PenTool } from "lucide-react";
import { useState, useEffect } from "react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full bg-bg-primary/80 backdrop-blur-sm transition-all duration-200 ${isScrolled ? "border-b border-border-color" : "border-b border-transparent"}`}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="flex items-center gap-2">
            <PenTool className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold text-text-primary">Inkdown</span>
          </Link>
        </div>
        <nav className="hidden md:flex gap-x-8">
          <Link href="/docs" className="text-sm font-semibold leading-6 text-text-primary hover:text-primary transition-colors">
            Docs
          </Link>
          <Link href="/releases" className="text-sm font-semibold leading-6 text-text-primary hover:text-primary transition-colors">
            Releases
          </Link>
          <Link href="#" className="text-sm font-semibold leading-6 text-text-primary hover:text-primary transition-colors">
            Roadmap
          </Link>
        </nav>
        <div className="flex flex-1 justify-end items-center gap-4">
          <Link href="#" className="rounded-md bg-primary px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors">
            Download
          </Link>
        </div>
      </div>
    </header>
  );
}