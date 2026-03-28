"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ParticlesBackground } from "@/components/animations/ParticlesBackground";
import { LaserBackground } from "@/components/animations/LaserBackground";
import { Check, X } from "lucide-react";

export default function PricingPage() {
  const plans = [
    {
      name: "Free",
      price: "₹0",
      period: "forever",
      description: "Perfect to get started and explore ThinkFin",
      features: [
        { included: true, text: "Financial Persona setup" },
        { included: true, text: "Financial Health Score" },
        { included: true, text: "Net Worth Dashboard" },
        { included: true, text: "Decision Engine (10 queries/month)" },
        { included: true, text: "Basic investment recommendations" },
        { included: true, text: "Basic alerts" },
        { included: false, text: "Law & Tax Intelligence" },
        { included: false, text: "Unlimited Decision Engine" },
        { included: false, text: "Advanced portfolio analytics" },
        { included: false, text: "Stock screener" },
        { included: false, text: "Goal simulation tools" },
        { included: false, text: "CA consultation credits" }
      ],
      cta: "Start Free",
      popular: false
    },
    {
      name: "Premium",
      price: "₹199",
      period: "per month",
      annualPrice: "₹999/year (save ₹1,389)",
      description: "For serious users who want full financial intelligence",
      features: [
        { included: true, text: "Everything in Free, plus:" },
        { included: true, text: "Law & Tax Intelligence module" },
        { included: true, text: "Unlimited Decision Engine queries" },
        { included: true, text: "Advanced portfolio analytics" },
        { included: true, text: "Detailed stock screener" },
        { included: true, text: "Portfolio gap analysis" },
        { included: true, text: "Goal simulation tools" },
        { included: true, text: "Personalized Budget impact reports" },
        { included: true, text: "LTCG timing guidance" },
        { included: true, text: "TDS management for freelancers" },
        { included: true, text: "CA consultation credits" },
        { included: true, text: "Priority support" }
      ],
      cta: "Join Waitlist for Premium",
      popular: true
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <Header />

      <main className="pt-24 relative">
        <ParticlesBackground />
        <LaserBackground />

        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-fuchsia-900/20" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-purple-200 to-fuchsia-200 bg-clip-text text-transparent">
                  Pricing
                </span>
              </h1>
              <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
                Start free. Upgrade anytime.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {plans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className={`h-full p-8 rounded-3xl backdrop-blur-sm ${
                    plan.popular
                      ? 'bg-gradient-to-br from-purple-900/50 to-fuchsia-900/50 border-2 border-purple-500/50'
                      : 'bg-gradient-to-br from-purple-900/30 to-fuchsia-900/30 border border-purple-500/20'
                  }`}>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                    {plan.annualPrice && (
                      <p className="text-purple-300 mb-4 font-medium">{plan.annualPrice}</p>
                    )}
                    <p className="text-gray-300 mb-6">{plan.description}</p>

                    <button
                      onClick={() => window.location.href = '/#waitlist'}
                      className={`w-full py-3 rounded-lg font-semibold transition-all mb-8 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-white glow-purple'
                          : 'bg-white/10 hover:bg-white/20 border border-white/20 text-white'
                      }`}
                    >
                      {plan.cta}
                    </button>

                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          {feature.included ? (
                            <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                          ) : (
                            <X className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" />
                          )}
                          <span className={feature.included ? 'text-gray-300' : 'text-gray-600'}>
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Premium Section */}
        <section className="py-20 bg-gradient-to-br from-purple-900/10 to-transparent">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
                <span className="bg-gradient-to-r from-purple-200 to-fuchsia-200 bg-clip-text text-transparent">
                  Why Premium is worth it
                </span>
              </h2>

              <div className="space-y-6">
                <div className="p-6 rounded-xl bg-purple-500/10 border border-purple-500/20">
                  <h3 className="text-xl font-bold text-white mb-3">Law & Tax Intelligence alone is worth ₹199/month</h3>
                  <p className="text-gray-300">
                    Every Budget, RBI decision, or SEBI rule change gets translated into YOUR specific
                    rupee impact. You don't get news headlines - you get personalized action items.
                    One avoided tax mistake pays for a year of Premium.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-purple-500/10 border border-purple-500/20">
                  <h3 className="text-xl font-bold text-white mb-3">Unlimited Decision Engine queries</h3>
                  <p className="text-gray-300">
                    Ask as many questions as you want. Before every purchase, before every investment,
                    before every financial decision. No limits.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-purple-500/10 border border-purple-500/20">
                  <h3 className="text-xl font-bold text-white mb-3">Advanced analytics & tools</h3>
                  <p className="text-gray-300">
                    Portfolio gap analysis, stock screener, goal simulations, and CA consultation
                    credits. Everything you need for serious financial planning.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-fuchsia-500/10 border border-fuchsia-500/20">
                  <h3 className="text-xl font-bold text-white mb-3">Annual plan = Best value</h3>
                  <p className="text-gray-300">
                    ₹999/year = ₹83/month. That's less than one Netflix subscription for a complete
                    financial operating system tailored to you.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Transparency Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-200 to-fuchsia-200 bg-clip-text text-transparent">
                  Full transparency
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We also earn commission from mutual fund investments and insurance referrals.
                Every single commission is disclosed in the UI. You can always choose zero-commission
                direct plans. Transparency is our brand.
              </p>
              <p className="text-lg text-gray-400">
                No hidden fees. No surprise charges. What you see is what you pay.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
