import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { AlertCircle, TrendingDown, HelpCircle, Ban } from "lucide-react";

export function ProblemSection() {
  const problems = [
    {
      icon: <AlertCircle size={32} />,
      title: "Generic Advice Everywhere",
      description: "Finance influencers give the same advice to everyone. But your ₹50K salary is different from someone earning ₹2L.",
      color: "blue",
    },
    {
      icon: <TrendingDown size={32} />,
      title: "Commission-Driven Advisors",
      description: "Most advisors earn from selling products. They recommend what pays them, not what helps you.",
      color: "orange",
    },
    {
      icon: <HelpCircle size={32} />,
      title: "Confusing Financial News",
      description: "Budget changes, RBI updates, new tax rules - what does it mean for YOUR money? Nobody explains.",
      color: "green",
    },
    {
      icon: <Ban size={32} />,
      title: "No One to Ask",
      description: "Should I take that ₹5L loan? Buy that insurance? Switch jobs? You ask Instagram and get 200 opinions.",
      color: "red",
    },
  ];

  const colorClasses = {
    blue: "from-blue-500 to-blue-600",
    orange: "from-orange-500 to-orange-600",
    green: "from-green-500 to-green-600",
    red: "from-red-500 to-red-600",
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
              The Problem: Everyone's Lost
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Millions of Indians earn well but have no idea where to go for honest, personalized financial guidance.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {problems.map((problem, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 hover:-translate-y-1">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colorClasses[problem.color as keyof typeof colorClasses]} flex items-center justify-center text-white mb-6`}>
                    {problem.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-900">{problem.title}</h3>
                  <p className="text-slate-600 text-lg leading-relaxed">{problem.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
