"use client";

import { motion } from "framer-motion";
import { UserPlus, Sparkles, MessageSquare } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      icon: UserPlus,
      number: "01",
      title: "Create your profile",
      description: "Tell us about your income, expenses, and financial goals. Takes just 5 minutes.",
    },
    {
      icon: Sparkles,
      number: "02",
      title: "AI learns your situation",
      description: "Our AI builds a complete understanding of your unique financial life.",
    },
    {
      icon: MessageSquare,
      number: "03",
      title: "Get personalized advice",
      description: "Ask anything, anytime. Get instant answers tailored to your situation.",
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-200 to-fuchsia-200 bg-clip-text text-transparent">
              How it works
            </span>
          </h2>
          <p className="text-xl text-gray-400">Simple setup, powerful results</p>
        </motion.div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0 relative">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-purple-500 to-fuchsia-500 flex items-center justify-center glow-purple">
                    <step.icon className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-fuchsia-500 flex items-center justify-center text-xs font-bold">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-2 text-white">{step.title}</h3>
                  <p className="text-lg text-gray-400">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
