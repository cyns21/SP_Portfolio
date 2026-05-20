import { CategoryCards } from "@/components/CategoryCards";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { GalleryPreview } from "@/components/GalleryPreview";
import { Hero } from "@/components/Hero";
import { JournalPreview } from "@/components/JournalPreview";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-powder text-ink">
      <div className="site-backdrop" aria-hidden="true" />
      <Navbar />
      <Hero />
      <CategoryCards />
      <GalleryPreview />
      <JournalPreview />
      <ContactSection />
      <Footer />
    </main>
  );
}
