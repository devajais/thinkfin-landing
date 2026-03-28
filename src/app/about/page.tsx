"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ParticlesBackground } from "@/components/animations/ParticlesBackground";
import { LaserBackground } from "@/components/animations/LaserBackground";
import { AlertCircle, Users, Target, TrendingUp } from "lucide-react";

export default function AboutPage() {
  const problems = [
    {
      icon: AlertCircle,
      title: "The Advice Gap",
      description: "Generic financial advice doesn't work for your specific situation. A software engineer earning ₹75,000 and a teacher earning ₹30,000 need different advice - but most financial content treats everyone the same."
    },
    {
      icon: Users,
      title: "The Trust Gap",
      description: "Most financial advisors are commission-driven, recommending what earns them the most, not what helps you the most. You deserve unbiased advice."
    },
    {
      icon: Target,
      title: "The Complexity Gap",
      description: "Budget changes, RBI rate decisions, tax rule updates - these affect you directly. But nobody tells you: 'This specific change will cost you ₹9,200 if you don't act before March 31.'"
    },
    {
      icon: TrendingUp,
      title: "The Decision Gap",
      description: "When you're about to make a big financial decision, you have nowhere to go for fast, honest, personalized answers. Until now."
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
                  About ThinkFin
                </span>
              </h1>
              <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
                India's first AI-powered personal financial operating system.
                Every answer computed from your reality.
              </p>
            </motion.div>
          </div>
        </section>

        {/* The Problem Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-200 to-fuchsia-200 bg-clip-text text-transparent">
                  Why we built ThinkFin
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                India has 500 million+ internet users consuming financial content daily.
                Yet financial health remains poor. Here's why:
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-8 rounded-2xl bg-gradient-to-br from-purple-900/30 to-fuchsia-900/30 border border-purple-500/20 backdrop-blur-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-fuchsia-500 flex items-center justify-center mb-4">
                    <problem.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white">{problem.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{problem.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-20 bg-gradient-to-br from-purple-900/10 to-transparent">
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
                  Our solution is simple
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Every financial question deserves an answer computed from <strong>your</strong> reality -
                your income, your expenses, your goals, your life.
              </p>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                ThinkFin creates a <strong>Living Financial Persona</strong> for you - a complete picture
                of your financial life. Every recommendation, every alert, every piece of advice is
                personalized to this profile.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed">
                The more you use ThinkFin, the smarter it gets about your specific situation.
                It's like having a financial advisor in your pocket who knows everything about
                your money and has zero conflicts of interest.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Vision Section */}
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
                  Our vision
                </span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                We want ThinkFin to become the first thing you check before making any financial decision -
                the way you check Google Maps before going somewhere. Not because there's no alternative,
                but because the personalized intelligence is so clearly superior that it becomes the obvious default.
              </p>
              <p className="text-xl text-gray-300 mt-6 leading-relaxed">
                ThinkFin is not just another fintech app. It's a <strong>financial operating system</strong> for
                every earning Indian.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
