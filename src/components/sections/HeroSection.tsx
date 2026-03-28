"use client";

import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-white px-4 py-16 md:py-24">
      <div className="w-full max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-[1.2]">
          Financial advice that <br className="hidden md:block" />
          actually understands you
        </h1>

        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Get personalized recommendations based on your income, goals, and life - not generic advice from the internet.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <Button
            variant="primary"
            size="lg"
            onClick={scrollToWaitlist}
            className="w-full sm:w-auto inline-flex items-center justify-center"
          >
            Get Started Free <ArrowRight className="ml-2" size={18} />
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}
            className="w-full sm:w-auto inline-flex items-center justify-center"
          >
            How It Works
          </Button>
        </div>

        <div className="mt-10 flex flex-wrap justify-center items-center gap-4 md:gap-6 text-sm text-slate-500">
          <span className="inline-flex items-center">✓ Free to use</span>
          <span className="inline-flex items-center">✓ No credit card</span>
          <span className="inline-flex items-center">✓ Built for India</span>
        </div>
      </div>
    </section>
  );
}
