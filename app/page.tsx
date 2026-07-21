import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import HelpingLocals from "@/components/sections/HelpingLocals";
import BrandingSolutions from "@/components/sections/BrandingSolutions";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <HelpingLocals />
      <BrandingSolutions />
    </main>
  );
}