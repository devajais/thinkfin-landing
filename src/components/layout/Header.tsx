"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Sparkles } from "lucide-react";

export function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-lg border-b border-purple-500/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-2 font-bold text-xl cursor-pointer">
            <Sparkles className="w-6 h-6 text-purple-400" />
            <span className="bg-gradient-to-r from-purple-200 to-fuchsia-200 bg-clip-text text-transparent">
              ThinkFin
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="/about" className="text-gray-300 hover:text-purple-300 transition-colors">
              About
            </a>
            <a href="/features" className="text-gray-300 hover:text-purple-300 transition-colors">
              Features
            </a>
            <a href="/how-it-works" className="text-gray-300 hover:text-purple-300 transition-colors">
              How It Works
            </a>
            <a href="/pricing" className="text-gray-300 hover:text-purple-300 transition-colors">
              Pricing
            </a>
          </nav>

          <Button
            onClick={() => window.location.href = '/#waitlist'}
            className="bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-white px-6 py-2 rounded-full text-sm font-semibold"
          >
            Get Started
          </Button>
        </div>
      </div>
    </motion.header>
  );
}
