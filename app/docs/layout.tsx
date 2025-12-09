import { Navbar } from "../components/Navbar";
import { DocsSidebar } from "./DocsSidebar";
import { TableOfContents } from "./TableOfContents";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Navbar />
      <div className="flex max-w-[1600px] mx-auto px-20 gap-12">
        <DocsSidebar />
        <main className="flex-1 min-w-0">
          <div className="flex gap-12 justify-center">
            <div className="w-full max-w-3xl py-12">
              {children}
            </div>
            <TableOfContents />
          </div>
        </main>
      </div>
    </div>
  );
}
