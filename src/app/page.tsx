import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { AICompetencies } from "@/components/sections/AICompetencies";
import { HowIBuild } from "@/components/sections/HowIBuild";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <FeaturedProducts />
        <AICompetencies />
        <HowIBuild />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
