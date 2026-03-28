"use client";

import { Button } from "@/components/ui/Button";
import Link from "next/link";

export function Header() {
  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-xl text-slate-900">
            ThinkFin
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-slate-600 hover:text-slate-900">
              How It Works
            </a>
            <a href="#features" className="text-slate-600 hover:text-slate-900">
              Features
            </a>
          </nav>

          <Button
            variant="primary"
            size="sm"
            onClick={scrollToWaitlist}
          >
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}
