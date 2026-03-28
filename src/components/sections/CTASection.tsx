import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { WaitlistForm } from "@/components/features/WaitlistForm";
import { CheckCircle } from "lucide-react";

export function CTASection() {
  const benefits = [
    "Free to start",
    "No credit card required",
    "Cancel anytime",
    "Works in Hindi & English",
  ];

  return (
    <section id="waitlist" className="py-20 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Start Making Smarter Money Decisions Today
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Join 1000+ Indians who are already using ThinkFin to take control of their finances.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <WaitlistForm />
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="max-w-2xl mx-auto mt-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center justify-center gap-2 text-sm md:text-base text-blue-100">
                  <CheckCircle size={18} className="text-green-400 flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="max-w-3xl mx-auto mt-16 pt-12 border-t border-white/20 text-center">
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
              Stop making financial decisions based on generic advice. Get answers computed specifically for YOUR income, YOUR goals, YOUR life.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
