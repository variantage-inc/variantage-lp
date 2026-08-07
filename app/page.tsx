import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import HelpingLocals from "@/components/sections/HelpingLocals";
import BrandingSolutions from "@/components/sections/BrandingSolutions";
import ClientShowcase from "@/components/sections/ClientShowcase";
import Industries from "@/components/sections/Industries";
import Problems from "@/components/sections/Problems";
import Testimonials from "@/components/sections/Testimonials";
import LeadForm from "@/components/sections/LeadForm";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <HelpingLocals />
      <Problems />
      <BrandingSolutions />
      <ClientShowcase />
      <Industries />
      <Testimonials />
      <LeadForm />
      <Footer />
    </main>
  );
}