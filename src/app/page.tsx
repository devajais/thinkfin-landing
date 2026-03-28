import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <TrustSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
