import { notFound } from "next/navigation";
import { docs } from "../content/docs";
import { MDXWrapper } from "@/app/components/MDXWrapper";
import { ArrowRight, Github } from "lucide-react";
import Link from "next/link";

interface DocPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return docs.map((doc) => ({
    slug: doc.slug,
  }));
}

export default async function DocPage({ params }: DocPageProps) {
  const { slug } = await params;
  const doc = docs.find((d) => d.slug === slug);

  if (!doc) {
    notFound();
  }

  const currentIndex = docs.findIndex((d) => d.slug === slug);
  const prevDoc = currentIndex > 0 ? docs[currentIndex - 1] : null;
  const nextDoc = currentIndex < docs.length - 1 ? docs[currentIndex + 1] : null;

  return (
    <article className="w-full">
      {/* Header */}
      <header className="mb-6">
        
        {doc.slug === "getting-started" && (
          <div className="bg-bg-secondary border border-border-color rounded-lg p-6 mb-8">
            <h2 className="text-lg font-semibold text-text-primary mb-3">
              Welcome to Inkdown Documentation 👋
            </h2>
            <p className="text-text-secondary mb-4">
              Inkdown is an open-source markdown editor built for developers and writers. 
              This documentation will help you get started and make the most of its features.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/inkdown/inkdown"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-text-primary text-bg-primary rounded-lg hover:bg-text-secondary transition-all"
              >
                <Github className="w-4 h-4" />
                View on GitHub
              </a>
              <a
                href="https://github.com/inkdown/inkdown-page"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-border-color text-text-primary rounded-lg hover:bg-bg-secondary transition-all"
              >
                Contribute to Docs
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Content */}
      <div className="doc-content prose prose-slate max-w-none">
        <MDXWrapper>
          <doc.component />
        </MDXWrapper>
      </div>

      {/* Navigation */}
      <nav className="mt-12 pt-8 border-t border-border-color">
        <div className="grid grid-cols-2 gap-4">
          {prevDoc ? (
            <Link
              href={`/docs/${prevDoc.slug}`}
              className="group p-4 border border-border-color rounded-lg hover:border-primary hover:bg-primary/5 transition-all"
            >
              <div className="text-xs text-text-muted mb-1">Previous</div>
              <div className="flex items-center gap-2 text-text-primary group-hover:text-primary">
                <ArrowRight className="w-4 h-4 rotate-180" />
                <span className="font-medium">{prevDoc.title}</span>
              </div>
            </Link>
          ) : (
            <div />
          )}
          
          {nextDoc && (
            <Link
              href={`/docs/${nextDoc.slug}`}
              className="group p-4 border border-border-color rounded-lg hover:border-primary hover:bg-primary/5 transition-all text-right ml-auto"
            >
              <div className="text-xs text-text-muted mb-1">Next</div>
              <div className="flex items-center justify-end gap-2 text-text-primary group-hover:text-primary">
                <span className="font-medium">{nextDoc.title}</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          )}
        </div>
      </nav>

      {/* Contribute Footer */}
      <div className="mt-12 p-6 bg-bg-secondary border border-border-color rounded-lg">
        <h3 className="text-sm font-semibold text-text-primary mb-2">
          Help us improve this page
        </h3>
        <p className="text-sm text-text-secondary mb-4">
          Found a typo or want to add more examples? This documentation is open source!
        </p>
        <a
          href={`https://github.com/inkdown/inkdown-page/edit/main/app/docs/content/${doc.slug}.mdx`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
        >
          Edit this page on GitHub
          <ArrowRight className="w-3 h-3" />
        </a>
      </div>
    </article>
  );
}
