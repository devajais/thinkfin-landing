"use client";

import { Button } from "@/components/ui/Button";
import { SITE_CONFIG } from "@/lib/constants";
import { motion } from "framer-motion";

export function Header() {
  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <h1 className="text-xl md:text-2xl font-bold text-[#1e3a8a]">
              {SITE_CONFIG.name}
            </h1>
          </div>
          <Button
            variant="primary"
            size="sm"
            onClick={scrollToWaitlist}
            className="text-sm md:text-base"
          >
            Join Waitlist
          </Button>
        </div>
      </div>
    </motion.header>
  );
}
