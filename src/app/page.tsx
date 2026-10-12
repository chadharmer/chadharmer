import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Background } from "@/components/sections/Background";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Capabilities } from "@/components/sections/Capabilities";
import { Experience } from "@/components/sections/Experience";
import { HowIBuild } from "@/components/sections/HowIBuild";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Background />
        <SelectedWork />
        <Capabilities />
        <Experience />
        <HowIBuild />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
