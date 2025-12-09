import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { PluginShowcase } from "./components/PluginShowcase";
import { BentoGrid } from "./components/BentoGrid";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-primary">
      <Navbar />
      <Hero />
      <Features />
      <BentoGrid />
      <PluginShowcase />
      <CTA />
      <Footer />
    </main>
  );
}