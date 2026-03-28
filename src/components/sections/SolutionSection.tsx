"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { motion } from "framer-motion";
import { User, DollarSign, TrendingUp, CreditCard, Target, Briefcase, Gauge, CheckCircle2 } from "lucide-react";

export function SolutionSection() {
  const dimensions = [
    { icon: <DollarSign size={20} />, label: "Income", color: "bg-gradient-to-br from-green-500 to-emerald-600" },
    { icon: <CreditCard size={20} />, label: "Expenses", color: "bg-gradient-to-br from-red-500 to-pink-600" },
    { icon: <TrendingUp size={20} />, label: "Assets", color: "bg-gradient-to-br from-blue-500 to-cyan-600" },
    { icon: <Gauge size={20} />, label: "Liabilities", color: "bg-gradient-to-br from-orange-500 to-amber-600" },
    { icon: <Target size={20} />, label: "Goals", color: "bg-gradient-to-br from-purple-500 to-violet-600" },
    { icon: <Briefcase size={20} />, label: "Career", color: "bg-gradient-to-br from-indigo-500 to-blue-600" },
    { icon: <User size={20} />, label: "Risk", color: "bg-gradient-to-br from-rose-500 to-red-600" },
  ];

  const benefits = [
    { icon: <CheckCircle2 size={24} />, title: "Answers in Seconds", desc: "Not hours of research" },
    { icon: <CheckCircle2 size={24} />, title: "100% Transparent", desc: "All commissions disclosed" },
    { icon: <CheckCircle2 size={24} />, title: "Always Updated", desc: "Latest tax & regulatory changes" },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Our Solution
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 leading-tight">
              Your Financial Twin, <br />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Powered by AI
              </span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              ThinkFin creates a living digital model of your financial life - your income, expenses, goals, and more. Every recommendation is computed specifically for YOU.
            </p>
          </div>
        </ScrollReveal>

        {/* How it works */}
        <div className="max-w-6xl mx-auto mb-16">
          <ScrollReveal>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12 border border-blue-100">
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-slate-900">
                7 Dimensions of Your Financial Life
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                {dimensions.map((dim, index) => (
                  <ScrollReveal key={index} delay={index * 0.05}>
                    <motion.div
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all"
                    >
                      <div className={`w-12 h-12 rounded-xl ${dim.color} flex items-center justify-center text-white mb-3 mx-auto`}>
                        {dim.icon}
                      </div>
                      <p className="text-sm font-semibold text-center text-slate-700">{dim.label}</p>
                    </motion.div>
                  </ScrollReveal>
                ))}
              </div>

              <div className="mt-12 text-center">
                <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                  We understand YOUR complete financial picture. Not just what you earn, but what you spend, save, owe, and dream of achieving.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Benefits */}
        <ScrollReveal delay={0.2}>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border border-slate-100 text-center hover:shadow-lg transition-all">
                  <div className="text-green-600 flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-slate-900">{benefit.title}</h4>
                  <p className="text-slate-600">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
