import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Users, Star, TrendingUp, Shield, Heart, Zap } from "lucide-react";

export function TrustSection() {
  const stats = [
    { value: "1000+", label: "Happy Users", icon: <Users size={24} /> },
    { value: "10K+", label: "Decisions Made", icon: <TrendingUp size={24} /> },
    { value: "₹50Cr+", label: "Money Saved", icon: <Shield size={24} /> },
  ];

  const trust = [
    { icon: <Heart size={32} />, title: "Built for India", desc: "We speak your language. We understand your context." },
    { icon: <Shield size={32} />, title: "100% Honest", desc: "All commissions disclosed. Your interests first, always." },
    { icon: <Zap size={32} />, title: "Lightning Fast", desc: "Get answers in seconds, not days of research." },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <ScrollReveal>
          <div className="max-w-5xl mx-auto mb-20">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
                {stats.map((stat, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex justify-center text-orange-400">
                      {stat.icon}
                    </div>
                    <div className="text-4xl md:text-5xl font-bold">{stat.value}</div>
                    <div className="text-lg text-blue-100">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Why Trust Us */}
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
              Why Trust ThinkFin?
            </h2>
            <p className="text-xl text-slate-600">
              We're different from other financial apps. Here's how.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trust.map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 text-center border border-slate-100 hover:shadow-lg transition-all">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-slate-900">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <ScrollReveal delay={0.3}>
          <div className="max-w-4xl mx-auto mt-16">
            <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-2xl p-8 md:p-12 border border-orange-100">
              <div className="flex justify-center mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={24} className="text-orange-500 fill-orange-500" />
                ))}
              </div>
              <p className="text-xl md:text-2xl text-slate-700 text-center italic mb-6">
                &quot;Finally, someone who understands MY money situation. Not just generic advice!&quot;
              </p>
              <p className="text-center text-slate-600 font-medium">- Priya, Software Engineer from Bangalore</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
