import { WaitlistForm } from "@/components/features/WaitlistForm";

export function CTASection() {
  return (
    <section id="waitlist" className="py-16 md:py-24 bg-blue-600 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          Join the waitlist for early access to personalized financial advice.
        </p>

        <WaitlistForm />

        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-blue-100">
          <span>✓ Free to start</span>
          <span>✓ No credit card</span>
          <span>✓ Cancel anytime</span>
        </div>
      </div>
    </section>
  );
}
