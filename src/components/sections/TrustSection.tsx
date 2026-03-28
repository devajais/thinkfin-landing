import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { TRUST_PILLARS } from "@/lib/constants";
import { Globe, Heart, Zap } from "lucide-react";

const iconMap: Record<number, React.ReactNode> = {
  1: <Globe size={40} />,
  2: <Heart size={40} />,
  3: <Zap size={40} />,
};

export function TrustSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
              Why ThinkFin is Different
            </h2>
            <p className="text-xl text-slate-600">
              No product combines a live persona + decision engine + investment + insurance + regulatory intelligence in one app.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TRUST_PILLARS.map((pillar, index) => (
              <ScrollReveal key={pillar.id} delay={index * 0.1}>
                <Card hover className="h-full text-center">
                  <CardHeader>
                    <div className={`
                      w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4
                      ${index === 0 ? 'bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] text-white' : ''}
                      ${index === 1 ? 'bg-gradient-to-br from-[#ea580c] to-[#f97316] text-white' : ''}
                      ${index === 2 ? 'bg-gradient-to-br from-[#059669] to-[#10b981] text-white' : ''}
                    `}>
                      {iconMap[pillar.id]}
                    </div>
                    <CardTitle className="text-2xl mb-3">{pillar.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-lg">
                      {pillar.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Beta Stats */}
        <ScrollReveal delay={0.3}>
          <div className="max-w-4xl mx-auto mt-16">
            <div className="bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] text-white rounded-2xl p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl md:text-5xl font-bold mb-2 text-[#ea580c]">✓</div>
                  <div className="text-lg md:text-xl font-semibold mb-1">MVP Complete</div>
                  <div className="text-slate-200 text-sm">Core persona engine built and tested</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold mb-2 text-[#ea580c]">✓</div>
                  <div className="text-lg md:text-xl font-semibold mb-1">Beta Users Live</div>
                  <div className="text-slate-200 text-sm">Verdict cards being shared organically</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold mb-2 text-[#ea580c]">✓</div>
                  <div className="text-lg md:text-xl font-semibold mb-1">The Loop Works</div>
                  <div className="text-slate-200 text-sm">Organic growth engine validated</div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
