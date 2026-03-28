"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ParticlesBackground } from "@/components/animations/ParticlesBackground";
import { LaserBackground } from "@/components/animations/LaserBackground";
import { MessageSquare, TrendingUp, Shield, Scale, Bell } from "lucide-react";

export default function FeaturesPage() {
  const features = [
    {
      icon: MessageSquare,
      title: "Decision Engine",
      subtitle: "Ask anything. Get personalized answers.",
      description: "Type any financial question in plain Hindi or English:",
      examples: [
        "Should I buy a ₹4L bike on EMI?",
        "I got ₹2L bonus - what should I do with it?",
        "Should I take a personal loan to renovate my house?",
        "Is buying a flat in Noida right now a good idea?"
      ],
      output: "You get a detailed verdict card showing asset classification, financial impact on YOUR profile, opportunity cost, alternatives, and a score out of 10. Every card is designed to be screenshot-worthy and shareable."
    },
    {
      icon: TrendingUp,
      title: "Investment Advisor",
      subtitle: "Unbiased recommendations tailored to you.",
      features: [
        "Specific mutual fund schemes ranked by performance, not commission",
        "Every commission we earn is displayed transparently",
        "Stock screener based on YOUR portfolio gaps",
        "FD rate comparison across all major banks",
        "Gold Bond vs Physical Gold analysis for YOUR timeline",
        "Portfolio gap analysis - shows what you're missing"
      ],
      note: "You can always choose zero-commission direct plans. We'll tell you exactly what the trade-off is."
    },
    {
      icon: Shield,
      title: "Insurance Advisor",
      subtitle: "Know exactly how much coverage you need.",
      features: [
        "Calculates exact term cover amount based on YOUR income, liabilities, and dependents",
        "Health insurance matched to your family size, city, and needs",
        "Underinsurance alert with exact gap in rupees",
        "Top plans ranked by claim settlement ratio",
        "Renewal reminders with rate comparisons"
      ],
      note: "Most Indians are severely underinsured. We fix that by showing you the exact numbers."
    },
    {
      icon: Scale,
      title: "Law & Tax Intelligence",
      subtitle: "Budget changes translated into YOUR rupee impact.",
      features: [
        "Every Union Budget announcement processed through YOUR profile",
        "Shows exactly how tax changes affect YOUR take-home pay",
        "RBI rate changes = exact EMI change for YOUR loans",
        "SEBI rules affecting YOUR specific investments",
        "Deadline alerts with specific recommended actions",
        "TDS management for freelancers"
      ],
      note: "This is our most powerful feature. You don't get news headlines - you get personalized impact reports in rupees."
    },
    {
      icon: Bell,
      title: "Proactive Alerts",
      subtitle: "We watch your back 24/7.",
      features: [
        "Lifestyle Inflation Detector - alerts when spending categories spike",
        "Opportunity Alerts - when FD rates rise or tax deadlines approach",
        "Goal Progress Tracking - are you on pace?",
        "Weekly One-Action Nudge - single best step to improve your Financial Health Score"
      ],
      note: "ThinkFin runs in the background analyzing your profile and external events. You get intelligence you didn't know to ask for."
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
                  Features
                </span>
              </h1>
              <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
                Five powerful modules. All personalized to you.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Features List */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="space-y-16">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-purple-900/30 to-fuchsia-900/30 border border-purple-500/20 backdrop-blur-sm">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-fuchsia-500 flex items-center justify-center flex-shrink-0 glow-purple">
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-white mb-2">{feature.title}</h2>
                        <p className="text-lg text-purple-300">{feature.subtitle}</p>
                      </div>
                    </div>

                    {feature.description && (
                      <div className="mb-6">
                        <p className="text-gray-300 text-lg mb-4">{feature.description}</p>
                        {feature.examples && (
                          <ul className="space-y-2">
                            {feature.examples.map((example, i) => (
                              <li key={i} className="text-gray-400 pl-4 border-l-2 border-purple-500/50">
                                "{example}"
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )}

                    {feature.output && (
                      <p className="text-gray-300 mb-6 p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
                        <strong className="text-white">What you get:</strong> {feature.output}
                      </p>
                    )}

                    {feature.features && (
                      <ul className="space-y-3 mb-6">
                        {feature.features.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-300">
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {feature.note && (
                      <div className="mt-6 p-4 bg-fuchsia-500/10 rounded-lg border border-fuchsia-500/20">
                        <p className="text-fuchsia-200 text-sm font-medium">{feature.note}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-purple-900/20 to-fuchsia-900/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-200 to-fuchsia-200 bg-clip-text text-transparent">
                  Ready to try it?
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start with the free tier. Upgrade to Premium when you're ready for full Law & Tax Intelligence.
              </p>
              <button
                onClick={() => window.location.href = '/#waitlist'}
                className="bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-white px-8 py-4 rounded-full text-lg font-semibold glow-purple transition-all"
              >
                Join Waitlist
              </button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
