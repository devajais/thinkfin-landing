"use client";

import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-4 py-20 md:py-0">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
          Financial advice that <br className="hidden md:block" />
          actually understands you
        </h1>

        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
          Get personalized recommendations based on your income, goals, and life - not generic advice from the internet.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="primary"
            size="lg"
            onClick={scrollToWaitlist}
            className="w-full sm:w-auto"
          >
            Get Started Free <ArrowRight className="ml-2" size={18} />
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}
            className="w-full sm:w-auto"
          >
            How It Works
          </Button>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-slate-500">
          <span>✓ Free to use</span>
          <span>✓ No credit card</span>
          <span>✓ Built for India</span>
        </div>
      </div>
    </section>
  );
}
