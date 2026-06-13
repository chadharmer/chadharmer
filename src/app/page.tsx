import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { HowIBuild } from "@/components/sections/HowIBuild";
import { Experience } from "@/components/sections/Experience";
import { Writing } from "@/components/sections/Writing";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <FeaturedProducts />
        <HowIBuild />
        <Experience />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
