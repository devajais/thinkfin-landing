export function SolutionSection() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            How ThinkFin Works
          </h2>
          <p className="text-lg md:text-xl text-slate-600">
            Simple setup. Personalized advice. Always in your pocket.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-12 md:space-y-16">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-xl">
              1
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-2">
                Tell us about yourself
              </h3>
              <p className="text-lg text-slate-600">
                Share your income, expenses, goals, and current financial situation. Takes just 5 minutes.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-xl">
              2
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-2">
                We build your financial profile
              </h3>
              <p className="text-lg text-slate-600">
                Our AI creates a complete picture of your financial life - understanding your unique situation and goals.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-xl">
              3
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-2">
                Ask anything, anytime
              </h3>
              <p className="text-lg text-slate-600">
                Get instant, personalized advice on loans, investments, insurance, or any financial decision - computed specifically for you.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-slate-50 px-6 py-3 rounded-full border border-slate-200">
            <span className="text-slate-700">✓ No bank linking required</span>
          </div>
        </div>
      </div>
    </section>
  );
}
