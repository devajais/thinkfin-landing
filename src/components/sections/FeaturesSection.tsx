import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { MessageSquare, TrendingUp, Shield, Newspaper, Bell } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: <MessageSquare size={32} />,
      title: "Ask Anything",
      description: "Should I take this loan? Buy insurance? Change jobs? Just ask in plain English or Hindi.",
      color: "from-blue-500 to-blue-600",
      example: "\"Should I buy a ₹4L bike on EMI?\"",
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Smart Investments",
      description: "Get personalized mutual fund recommendations based on your goals and risk tolerance.",
      color: "from-green-500 to-emerald-600",
      example: "Top 3 funds for your goals",
    },
    {
      icon: <Shield size={32} />,
      title: "Insurance Made Simple",
      description: "Know exactly how much life and health insurance you need. No guesswork.",
      color: "from-purple-500 to-purple-600",
      example: "Your recommended cover: ₹1.5Cr",
    },
    {
      icon: <Newspaper size={32} />,
      title: "Budget Updates",
      description: "New tax rules? RBI changes? We tell you what it means for YOUR wallet in rupees.",
      color: "from-orange-500 to-amber-600",
      example: "New tax regime saves you ₹15K",
    },
    {
      icon: <Bell size={32} />,
      title: "Smart Alerts",
      description: "Get notified when you're spending too much, saving too little, or missing opportunities.",
      color: "from-red-500 to-pink-600",
      example: "Spending up 15% this month",
    },
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
              Everything You Need,<br />One Place
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              From daily decisions to life-changing choices, ThinkFin has you covered.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 group hover:-translate-y-2">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-slate-900">{feature.title}</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">{feature.description}</p>
                  <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
                    <p className="text-sm text-slate-500 italic">{feature.example}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Example Section */}
        <ScrollReveal delay={0.4}>
          <div className="max-w-4xl mx-auto mt-20">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12 text-white text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Try asking:
              </h3>
              <div className="space-y-3 max-w-2xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <p className="text-lg">&quot;Should I buy a ₹4L bike on EMI?&quot;</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <p className="text-lg">&quot;Is this health insurance enough for my family?&quot;</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <p className="text-lg">&quot;Which mutual fund is best for me?&quot;</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
