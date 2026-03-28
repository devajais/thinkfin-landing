export function ProblemSection() {
  return (
    <section id="problem" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            The Problem
          </h2>
          <p className="text-lg md:text-xl text-slate-600">
            Generic advice doesn't work when your situation is unique.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 md:p-8 rounded-lg border border-slate-200">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">
              Everyone gives the same advice
            </h3>
            <p className="text-slate-600">
              YouTube videos and Instagram reels tell everyone to "invest in mutual funds" - but which ones? How much? Based on what?
            </p>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-lg border border-slate-200">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">
              Advisors push products
            </h3>
            <p className="text-slate-600">
              Traditional advisors earn commissions. They recommend what pays them, not necessarily what's best for you.
            </p>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-lg border border-slate-200">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">
              Financial news is confusing
            </h3>
            <p className="text-slate-600">
              Budget changes, new tax rules, RBI updates - what does any of this mean for YOUR specific situation?
            </p>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-lg border border-slate-200">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">
              No one to ask
            </h3>
            <p className="text-slate-600">
              When facing a big financial decision, there's no trusted source that knows YOUR income, goals, and constraints.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
