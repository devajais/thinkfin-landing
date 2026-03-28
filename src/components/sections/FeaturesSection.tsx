export function FeaturesSection() {
  return (
    <section id="features" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            What You Can Do
          </h2>
          <p className="text-lg md:text-xl text-slate-600">
            Get answers to all your financial questions in seconds.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 md:p-8 rounded-lg border border-slate-200">
            <div className="text-3xl mb-4">💬</div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">
              Ask Questions
            </h3>
            <p className="text-slate-600 mb-3">
              Should I buy this? Take that loan? Change jobs? Just ask in plain language.
            </p>
            <p className="text-sm text-slate-500 italic">
              "Should I buy a ₹4L bike on EMI?"
            </p>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-lg border border-slate-200">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">
              Investment Advice
            </h3>
            <p className="text-slate-600 mb-3">
              Get fund recommendations tailored to your goals and risk appetite.
            </p>
            <p className="text-sm text-slate-500 italic">
              "Best mutual funds for me?"
            </p>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-lg border border-slate-200">
            <div className="text-3xl mb-4">🛡️</div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">
              Insurance Check
            </h3>
            <p className="text-slate-600 mb-3">
              Know exactly how much coverage you need based on your situation.
            </p>
            <p className="text-sm text-slate-500 italic">
              "Is my insurance enough?"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
