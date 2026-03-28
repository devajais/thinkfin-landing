import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { UserPlus, Brain, MessageSquare, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata = {
  title: "How ThinkFin Works - Simple, Personalized Financial Advice",
  description: "Understand how ThinkFin creates your Financial Persona and delivers personalized advice in seconds.",
};

export default function HowItWorksPage() {
  const steps = [
    {
      number: "01",
      icon: <UserPlus size={32} />,
      title: "Tell Us About You",
      description: "In just 5 minutes, share your income, expenses, goals, and financial situation. No bank linking required - you're in control.",
      details: [
        "Monthly income and sources",
        "Fixed and variable expenses",
        "Current assets and liabilities",
        "Short & long-term goals",
        "Risk tolerance",
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      number: "02",
      icon: <Brain size={32} />,
      title: "We Build Your Financial Twin",
      description: "Our AI creates a living model of your financial life - understanding your unique situation, constraints, and aspirations.",
      details: [
        "7-dimensional financial profile",
        "Real-time financial health score",
        "Opportunity detection",
        "Risk assessment",
        "Goal tracking",
      ],
      color: "from-purple-500 to-purple-600",
    },
    {
      number: "03",
      icon: <MessageSquare size={32} />,
      title: "Ask Anything",
      description: "Type your question in plain Hindi or English. No forms, no complicated menus. Just ask like you'd ask a friend.",
      details: [
        "Natural language understanding",
        "Context-aware responses",
        "Instant calculations",
        "Scenario comparisons",
        "Visual explanations",
      ],
      color: "from-green-500 to-green-600",
    },
    {
      number: "04",
      icon: <CheckCircle2 size={32} />,
      title: "Get Personalized Answers",
      description: "Receive clear, actionable advice computed specifically for YOUR numbers - with reasoning you can understand and trust.",
      details: [
        "Personalized recommendations",
        "Financial impact analysis",
        "Alternative suggestions",
        "Risk & benefit breakdown",
        "Next steps guidance",
      ],
      color: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">How ThinkFin Works</h1>
              <p className="text-xl md:text-2xl text-blue-100">
                Financial advice that actually understands YOU. Here's how we do it.
              </p>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              {steps.map((step, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className="mb-16 last:mb-0">
                    <div className={`grid grid-cols-1 ${index % 2 === 0 ? 'lg:grid-cols-2' : 'lg:grid-cols-2'} gap-12 items-center`}>
                      <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                        <div className="relative">
                          <div className="text-9xl font-bold text-slate-100 absolute -top-8 -left-4 -z-10">
                            {step.number}
                          </div>
                          <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-white mb-6`}>
                            {step.icon}
                          </div>
                          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                            {step.title}
                          </h3>
                          <p className="text-xl text-slate-600 mb-6 leading-relaxed">
                            {step.description}
                          </p>
                          <ul className="space-y-3">
                            {step.details.map((detail, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                                <span className="text-slate-700">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                        <div className={`bg-gradient-to-br ${step.color} rounded-3xl p-8 md:p-12 h-80 flex items-center justify-center text-white`}>
                          <div className="text-center">
                            <div className="text-6xl mb-4">{step.icon}</div>
                            <div className="text-2xl font-bold">Step {step.number}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="flex justify-center my-12">
                        <ArrowRight size={40} className="text-slate-300" />
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Example */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">See It In Action</h2>
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white">
                    <h3 className="text-xl font-bold">Example Question</h3>
                  </div>
                  <div className="p-8">
                    <div className="mb-8">
                      <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                        <p className="text-lg text-slate-700 italic">
                          &quot;Should I buy a ₹4 lakh bike on EMI or wait and buy later?&quot;
                        </p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-2xl p-6 border border-orange-100">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold">
                          TF
                        </div>
                        <div>
                          <div className="font-bold text-slate-900">ThinkFin AI</div>
                          <div className="text-sm text-slate-600">Personalized for you</div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-bold text-slate-900 mb-2">My Recommendation: Wait & Save</h4>
                          <p className="text-slate-700">
                            Based on your ₹65K salary and existing EMIs, adding this bike loan will drop your savings rate from 18% to 6%. That's risky.
                          </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-white rounded-lg p-4">
                            <div className="text-2xl font-bold text-red-600">-₹8.2K</div>
                            <div className="text-sm text-slate-600">Monthly EMI</div>
                          </div>
                          <div className="bg-white rounded-lg p-4">
                            <div className="text-2xl font-bold text-orange-600">₹9.4L</div>
                            <div className="text-sm text-slate-600">If invested instead</div>
                          </div>
                        </div>

                        <div>
                          <h5 className="font-semibold text-slate-900 mb-2">Better Options:</h5>
                          <ul className="space-y-2 text-slate-700">
                            <li>• Save for 8 months → Buy cash (saves ₹45K in interest)</li>
                            <li>• Consider a ₹2L used bike instead</li>
                            <li>• Use Ola/Uber for now, invest the ₹8K monthly</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
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
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Try?</h2>
                <p className="text-xl text-blue-100 mb-8">
                  Get personalized financial advice in minutes. Free to start.
                </p>
                <a
                  href="/#waitlist"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full bg-orange-500 text-white hover:bg-orange-600 transition-all shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Get Started Free
                  <ArrowRight className="ml-2" size={20} />
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
