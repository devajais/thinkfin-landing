"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { User, DollarSign, TrendingUp, CreditCard, Briefcase, Target, Activity } from "lucide-react";

export default function HowItWorksPage() {
  const dimensions = [
    {
      icon: DollarSign,
      title: "Income Profile",
      description: "Monthly salary, freelance income, rental income, dividends. We track both amount and stability."
    },
    {
      icon: CreditCard,
      title: "Expense Profile",
      description: "Fixed expenses (rent, EMIs, insurance) and variable spending (food, transport, entertainment). We distinguish between necessary and discretionary."
    },
    {
      icon: TrendingUp,
      title: "Asset Profile",
      description: "Savings, FDs, mutual funds, stocks, gold, real estate. Classified as appreciating or depreciating."
    },
    {
      icon: CreditCard,
      title: "Liability Profile",
      description: "All loans - home, car, personal, education. Tracked with outstanding amount, EMI, interest rate, and tenure."
    },
    {
      icon: Briefcase,
      title: "Career & Skills",
      description: "Occupation, industry, experience, current skills. Powers income growth projections."
    },
    {
      icon: Target,
      title: "Goals Profile",
      description: "Short-term (< 1 year), medium-term (1-5 years), and long-term (5+ years) goals with target amounts and timelines."
    },
    {
      icon: Activity,
      title: "Risk Profile",
      description: "Investment risk tolerance based on scenarios, not labels. How would you react to a 20% portfolio drop?"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <Header />

      <main className="pt-24">
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
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-200 to-fuchsia-200 bg-clip-text text-transparent">
                  How ThinkFin works
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Everything starts with your Financial Persona - a living, dynamic profile
                that captures your complete financial life.
              </p>
            </motion.div>
          </div>
        </section>

        {/* The Persona Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
                <span className="bg-gradient-to-r from-purple-200 to-fuchsia-200 bg-clip-text text-transparent">
                  Your Financial Persona
                </span>
              </h2>
              <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-8">
                This is the foundation of everything. Every recommendation, verdict, alert,
                and insight is computed from this profile.
              </p>
              <p className="text-lg text-gray-400 text-center max-w-3xl mx-auto">
                Unlike other apps that just track transactions, ThinkFin captures context, goals,
                and judgments that no bank statement contains. Setup takes under 5 minutes.
                You can complete it incrementally - the app works with partial information
                and improves as you add more.
              </p>
            </motion.div>

            {/* Seven Dimensions */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dimensions.map((dimension, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/30 to-fuchsia-900/30 border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-fuchsia-500 flex items-center justify-center mb-4">
                    <dimension.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{dimension.title}</h3>
                  <p className="text-gray-400">{dimension.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Financial Health Score */}
        <section className="py-20 bg-gradient-to-br from-purple-900/10 to-transparent">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
                <span className="bg-gradient-to-r from-purple-200 to-fuchsia-200 bg-clip-text text-transparent">
                  Financial Health Score
                </span>
              </h2>
              <p className="text-xl text-gray-300 text-center mb-8">
                From your persona, ThinkFin computes a single score from 0 to 100.
                Updated in real-time whenever your persona changes.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="p-6 rounded-xl bg-purple-500/10 border border-purple-500/20">
                  <h3 className="text-lg font-bold text-white mb-3">Built from six factors:</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Savings Rate - % of income saved/invested</li>
                    <li>• Debt-to-Income Ratio - monthly debt vs income</li>
                    <li>• Emergency Fund Coverage - months covered</li>
                    <li>• Asset Quality - appreciating vs depreciating ratio</li>
                    <li>• Insurance Adequacy - coverage vs exposure</li>
                    <li>• Investment Consistency - regular investing?</li>
                  </ul>
                </div>

                <div className="p-6 rounded-xl bg-fuchsia-500/10 border border-fuchsia-500/20">
                  <h3 className="text-lg font-bold text-white mb-3">What you get:</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Single number you track week-over-week</li>
                    <li>• Each factor shows your current score</li>
                    <li>• Specific one-action improvement for each</li>
                    <li>• Always know what would move your score most</li>
                  </ul>
                </div>
              </div>

              <p className="text-lg text-gray-400 text-center">
                The Financial Health Score is your primary engagement metric.
                It's the single number that tells you: "Am I getting better at money?"
              </p>
            </motion.div>
          </div>
        </section>

        {/* How Decisions Work */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
                <span className="bg-gradient-to-r from-purple-200 to-fuchsia-200 bg-clip-text text-transparent">
                  How decisions work
                </span>
              </h2>

              <div className="space-y-8">
                <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-900/30 to-fuchsia-900/30 border border-purple-500/20">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-fuchsia-500 flex items-center justify-center font-bold text-white">
                      1
                    </div>
                    <h3 className="text-2xl font-bold text-white">You ask a question</h3>
                  </div>
                  <p className="text-gray-300 pl-14">
                    Type anything in plain Hindi or English. "Should I buy a ₹4L bike on EMI?" -
                    No forms, no structured input.
                  </p>
                </div>

                <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-900/30 to-fuchsia-900/30 border border-purple-500/20">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-fuchsia-500 flex items-center justify-center font-bold text-white">
                      2
                    </div>
                    <h3 className="text-2xl font-bold text-white">ThinkFin analyzes</h3>
                  </div>
                  <p className="text-gray-300 pl-14">
                    The engine retrieves your persona, identifies the category, and runs multi-dimensional
                    analysis: asset classification, financial impact, opportunity cost, risk assessment.
                  </p>
                </div>

                <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-900/30 to-fuchsia-900/30 border border-purple-500/20">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-fuchsia-500 flex items-center justify-center font-bold text-white">
                      3
                    </div>
                    <h3 className="text-2xl font-bold text-white">You get a verdict card</h3>
                  </div>
                  <ul className="space-y-2 text-gray-300 pl-14">
                    <li>• Asset type: Appreciating, depreciating, or neutral</li>
                    <li>• Financial impact on YOUR profile (savings rate, health score)</li>
                    <li>• Opportunity cost: what else could you do with that money?</li>
                    <li>• 2-3 specific alternatives at different price points</li>
                    <li>• Verdict score out of 10 (financial + emotional value)</li>
                  </ul>
                  <p className="text-fuchsia-200 mt-4 pl-14 font-medium">
                    Every verdict card is screenshot-worthy. Share it with family, friends, spouse.
                    It tells the complete story without extra context.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* The Power */}
        <section className="py-20 bg-gradient-to-br from-purple-900/20 to-fuchsia-900/20">
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
                  The compound effect
                </span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                Every day you update your persona, every decision you run through the engine,
                every goal you track makes your profile more accurate and more valuable.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed">
                Your financial history becomes locked in. Switching to anything else means
                starting from zero. This is lock-in through value creation, not friction.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
