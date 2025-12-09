import { Database, Palette, Keyboard, Zap, Lock, Globe } from "lucide-react";

export function BentoGrid() {
  return (
    <section className="py-24 bg-bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-primary">Why Inkdown?</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            Built for performance and ownership.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {/* Large Item - Local First */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2 relative overflow-hidden rounded-2xl bg-bg-primary p-8 border border-border-color shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-2 rounded-lg bg-bg-secondary text-primary">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary">Local First & Private</h3>
            </div>
            <p className="text-text-secondary max-w-xl">
              Your notes are just Markdown files on your disk. No proprietary formats, no database lock-in. 
              You own your data completely, forever. Sync it how you want.
            </p>
          </div>

          {/* Small Item - Fast */}
          <div className="col-span-1 relative overflow-hidden rounded-2xl bg-bg-primary p-8 border border-border-color shadow-sm hover:shadow-md transition-shadow">
             <div className="flex items-center gap-4 mb-4">
              <div className="p-2 rounded-lg bg-bg-secondary text-primary">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary">Blazing Fast</h3>
            </div>
            <p className="text-text-secondary">
              Built with Rust and Tauri for native performance and a tiny memory footprint.
            </p>
          </div>

          {/* Small Item - Theming */}
          <div className="col-span-1 relative overflow-hidden rounded-2xl bg-bg-primary p-8 border border-border-color shadow-sm hover:shadow-md transition-shadow">
             <div className="flex items-center gap-4 mb-4">
              <div className="p-2 rounded-lg bg-bg-secondary text-primary">
                <Palette className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary">Fully Themeable</h3>
            </div>
            <p className="text-text-secondary">
              Customize every aspect of the UI with CSS variables and themes.
            </p>
          </div>

           {/* Large Item - Keyboard Centric */}
           <div className="col-span-1 sm:col-span-2 lg:col-span-2 relative overflow-hidden rounded-2xl bg-bg-primary p-8 border border-border-color shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-2 rounded-lg bg-bg-secondary text-primary">
                <Keyboard className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary">Keyboard Centric</h3>
            </div>
            <p className="text-text-secondary max-w-xl">
              Keep your hands on the keyboard. Powerful shortcuts and a command palette let you navigate and edit without touching the mouse.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
