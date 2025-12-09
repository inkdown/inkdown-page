import { Navbar } from "../components/Navbar";
import { Releases } from "../components/Releases";

export default function ReleasesPage() {
  return (
    <main className="min-h-screen bg-bg-primary">
      <Navbar/>
      <Releases />
    </main>
  );
}
