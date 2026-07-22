import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import HelpingLocals from "@/components/sections/HelpingLocals";
import BrandingSolutions from "@/components/sections/BrandingSolutions";
import Industries from "@/components/sections/Industries";
import Problems from "@/components/sections/Problems";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <HelpingLocals />
      <BrandingSolutions />
      <Industries />
      <Problems />
      <Testimonials />
    </main>
  );
}