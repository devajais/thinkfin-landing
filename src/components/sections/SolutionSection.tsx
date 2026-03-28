"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/Card";
import { PERSONA_DIMENSIONS } from "@/lib/constants";
import { motion } from "framer-motion";
import { User, DollarSign, TrendingUp, CreditCard, Target, Briefcase, AlertTriangle } from "lucide-react";

const iconMap: Record<number, React.ReactNode> = {
  1: <DollarSign size={24} />,
  2: <CreditCard size={24} />,
  3: <TrendingUp size={24} />,
  4: <AlertTriangle size={24} />,
  5: <Target size={24} />,
  6: <Briefcase size={24} />,
  7: <User size={24} />,
};

export function SolutionSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-[#059669] text-sm font-semibold uppercase tracking-wider mb-4 block">
              The Solution
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
              Every financial answer, <br />
              <span className="text-[#1e3a8a]">computed for your reality.</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              ThinkFin maintains a living Financial Persona for every user — and runs
              every question, decision, and regulatory change through it in real-time.
            </p>
          </div>
        </ScrollReveal>

        {/* Financial Persona Visualization */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="relative">
            {/* Center circle */}
            <ScrollReveal>
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
              >
                <div className="w-32 h-32 md:w-48 md:h-48 bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] rounded-full flex items-center justify-center shadow-2xl">
                  <div className="text-center text-white">
                    <div className="text-xl md:text-2xl font-bold">Financial</div>
                    <div className="text-xl md:text-2xl font-bold">Persona</div>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>

            {/* Dimension cards in a circle */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-32 md:pt-0">
              {PERSONA_DIMENSIONS.map((dimension, index) => (
                <ScrollReveal key={dimension.id} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="md:col-span-1"
                  >
                    <Card hover className="h-full bg-gradient-to-br from-slate-50 to-white">
                      <CardContent className="p-4 md:p-6">
                        <div className={`
                          w-12 h-12 rounded-full flex items-center justify-center mb-3
                          ${index % 3 === 0 ? 'bg-[#ea580c]/10 text-[#ea580c]' : ''}
                          ${index % 3 === 1 ? 'bg-[#1e3a8a]/10 text-[#1e3a8a]' : ''}
                          ${index % 3 === 2 ? 'bg-[#059669]/10 text-[#059669]' : ''}
                        `}>
                          {iconMap[dimension.id]}
                        </div>
                        <CardTitle className="text-base md:text-lg mb-2">{dimension.name}</CardTitle>
                        <CardDescription className="text-xs md:text-sm">
                          {dimension.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <ScrollReveal delay={0.4}>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-6 bg-[#1e3a8a]/5 rounded-xl">
                <div className="text-[#1e3a8a] text-3xl font-bold mb-2">✓</div>
                <h3 className="font-bold mb-2 text-slate-900">Personalized decisions</h3>
                <p className="text-sm text-slate-600">Not templates</p>
              </div>
              <div className="p-6 bg-[#ea580c]/5 rounded-xl">
                <div className="text-[#ea580c] text-3xl font-bold mb-2">✓</div>
                <h3 className="font-bold mb-2 text-slate-900">Proactive alerts</h3>
                <p className="text-sm text-slate-600">Not just tracking</p>
              </div>
              <div className="p-6 bg-[#059669]/5 rounded-xl">
                <div className="text-[#059669] text-3xl font-bold mb-2">✓</div>
                <h3 className="font-bold mb-2 text-slate-900">Unbiased advice</h3>
                <p className="text-sm text-slate-600">Commissions disclosed</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
