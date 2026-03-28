"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export function CTASection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1000);
  };

  return (
    <section id="waitlist" className="py-24 relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-fuchsia-900/20 to-purple-900/20" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-200 to-fuchsia-200 bg-clip-text text-transparent">
              Ready to get started?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Join thousands of Indians making smarter financial decisions with AI
          </p>

          {status === "success" ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="inline-flex items-center gap-2 px-6 py-4 bg-green-500/20 border border-green-500/30 rounded-full text-green-300"
            >
              <Check className="w-5 h-5" />
              <span className="font-semibold">You're on the list! We'll be in touch soon.</span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-white/5 border-white/10 focus:border-purple-500 text-white placeholder:text-gray-500"
                />
                <Button
                  type="submit"
                  disabled={status === "loading"}
                  className="bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-white px-6 py-3 rounded-lg font-semibold glow-purple whitespace-nowrap"
                >
                  {status === "loading" ? "Joining..." : "Join Waitlist"}
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </div>
            </form>
          )}

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-purple-400" /> Free to start
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-purple-400" /> No credit card
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-purple-400" /> Cancel anytime
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
