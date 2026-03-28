import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Target, Users, Lightbulb, Heart } from "lucide-react";

export const metadata = {
  title: "About ThinkFin - Your Personal Financial OS",
  description: "Learn about ThinkFin's mission to make personalized financial advice accessible to every earning Indian.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">About ThinkFin</h1>
              <p className="text-xl md:text-2xl text-blue-100">
                We're building India's first truly personalized financial operating system.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">Our Mission</h2>
                <p className="text-xl text-slate-700 leading-relaxed mb-6">
                  Every day, millions of Indians earn good salaries but make bad financial decisions. Not because they're careless, but because they have nowhere to go for honest, personalized guidance.
                </p>
                <p className="text-xl text-slate-700 leading-relaxed mb-6">
                  Finance influencers give generic advice. Advisors push commission-heavy products. Apps just track spending. Nobody actually helps YOU make better decisions.
                </p>
                <p className="text-xl text-slate-700 leading-relaxed font-semibold text-blue-600">
                  ThinkFin changes this. We're your personal financial operating system - understanding YOUR complete financial life and computing every answer specifically for YOU.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">What We Stand For</h2>
            </ScrollReveal>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              <ScrollReveal delay={0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white mb-6">
                    <Heart size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Honesty First</h3>
                  <p className="text-slate-600 leading-relaxed">
                    We disclose all commissions. We recommend what's best for YOU, not what pays us. Trust is earned, not bought.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-white mb-6">
                    <Users size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Built for India</h3>
                  <p className="text-slate-600 leading-relaxed">
                    We understand Indian financial products, regulations, and most importantly - Indian lives. Hindi, English, ₹ symbols, Indian context.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mb-6">
                    <Target size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Truly Personal</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Your ₹50K salary is different from ₹2L. Your goals are different. Your advice should be too. No templates, only personalization.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center text-white mb-6">
                    <Lightbulb size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Simple & Smart</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Complex AI behind the scenes. Simple answers in front. You shouldn't need a finance degree to make good money decisions.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">Why We Built This</h2>
                <div className="prose prose-lg mx-auto text-slate-700">
                  <p className="text-xl leading-relaxed mb-6">
                    We saw friends earning ₹1L+ per month but taking terrible financial decisions. Taking expensive loans for depreciating assets. Buying commission-heavy insurance. Missing out on simple tax savings.
                  </p>
                  <p className="text-xl leading-relaxed mb-6">
                    When we asked why, the answer was always: "I didn't know who to ask."
                  </p>
                  <p className="text-xl leading-relaxed mb-6">
                    Financial advisors push products. Influencers give generic advice. Apps just show you what you already know. Nobody actually HELPS.
                  </p>
                  <p className="text-xl leading-relaxed font-semibold text-blue-600">
                    So we built ThinkFin - the financial advisor India deserves. Honest, personalized, and always in your pocket.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Join Us</h2>
                <p className="text-xl text-blue-100 mb-8">
                  Be part of the movement to make good financial advice accessible to every earning Indian.
                </p>
                <a
                  href="/#waitlist"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full bg-orange-500 text-white hover:bg-orange-600 transition-all shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Get Started Free
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
