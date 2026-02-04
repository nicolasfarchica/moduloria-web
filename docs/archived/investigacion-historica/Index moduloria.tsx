import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Problems } from "@/components/Problems";
import { About } from "@/components/About";
import { Solutions } from "@/components/Solutions";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { CursorEffects } from "@/components/CursorEffects";

const Index = () => {
  return (
    <div className="min-h-screen cursor-none">
      <CursorEffects />
      <Navigation />
      <Hero />
      <Problems />
      <About />
      <Solutions />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
