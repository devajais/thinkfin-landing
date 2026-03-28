import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { WaitlistForm } from "@/components/features/WaitlistForm";

export function CTASection() {
  return (
    <section id="waitlist" className="py-20 bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#1e3a8a] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to take control of your financial future?
            </h2>
            <p className="text-xl md:text-2xl text-slate-200 mb-4">
              Join thousands of Indians building better financial lives with ThinkFin.
            </p>
            <p className="text-lg text-slate-300">
              Be among the first to experience India&apos;s First Personal Financial Operating System.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <WaitlistForm />
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="max-w-3xl mx-auto mt-16 pt-12 border-t border-white/20">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                The Google Maps of Personal Finance.
              </h3>
              <p className="text-lg md:text-xl text-slate-200 italic">
                Not because there&apos;s no alternative - but because the personalised
                intelligence ThinkFin provides is so clearly superior that checking it before
                any financial decision becomes the obvious default.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
