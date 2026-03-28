import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { VerdictCard } from "@/components/features/VerdictCard";
import { FEATURES } from "@/lib/constants";
import { Target, TrendingUp, Shield, Scale, Bell } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  target: <Target size={32} />,
  "trending-up": <TrendingUp size={32} />,
  shield: <Shield size={32} />,
  scale: <Scale size={32} />,
  bell: <Bell size={32} />,
};

export function FeaturesSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
              Five Modules. One Ecosystem.
            </h2>
            <p className="text-xl text-slate-600">
              Each module feeds from the Financial Persona. Each makes the others smarter.
            </p>
          </div>
        </ScrollReveal>

        {/* Features Grid */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.map((feature, index) => (
              <ScrollReveal key={feature.id} delay={index * 0.1}>
                <Card hover className="h-full">
                  <CardHeader>
                    <div className={`
                      w-16 h-16 rounded-2xl flex items-center justify-center mb-4
                      ${index === 0 ? 'bg-[#1e3a8a]/10 text-[#1e3a8a]' : ''}
                      ${index === 1 ? 'bg-[#1e40af]/10 text-[#1e40af]' : ''}
                      ${index === 2 ? 'bg-[#059669]/10 text-[#059669]' : ''}
                      ${index === 3 ? 'bg-[#ea580c]/10 text-[#ea580c]' : ''}
                      ${index === 4 ? 'bg-[#1e3a8a]/10 text-[#1e3a8a]' : ''}
                    `}>
                      {iconMap[feature.icon]}
                    </div>
                    <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Decision Engine Example */}
        <ScrollReveal>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-4xl font-bold mb-4 text-slate-900">
                The Decision Engine
              </h3>
              <p className="text-lg text-slate-600">
                Type anything. Get a verdict built from your numbers.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-white p-6 rounded-xl border-2 border-slate-200 mb-4">
                  <p className="text-lg text-slate-700 italic">
                    &quot;Should I buy a ₹4L bike on EMI?&quot;
                  </p>
                </div>
                <p className="text-slate-600 mb-6">Plain Hindi or English. No forms.</p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#ea580c] rounded-full mt-2 flex-shrink-0" />
                    <p className="text-slate-700"><strong>Handles:</strong> Small purchases, EMI decisions, Real estate, Job changes, Investments, Life events</p>
                  </div>
                </div>
              </div>

              <div>
                <VerdictCard />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
