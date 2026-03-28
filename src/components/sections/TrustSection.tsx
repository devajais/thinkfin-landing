export function TrustSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            Why Choose ThinkFin
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center mb-12 md:mb-16">
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
            <p className="text-slate-600">Transparent</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">Free</div>
            <p className="text-slate-600">To Start</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">Instant</div>
            <p className="text-slate-600">Answers</p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto bg-slate-50 p-6 md:p-8 rounded-lg border border-slate-200 text-center">
          <p className="text-lg md:text-xl text-slate-700 mb-4">
            "Finally someone who understands MY financial situation, not just generic advice."
          </p>
          <p className="text-slate-600">- Priya, Bangalore</p>
        </div>
      </div>
    </section>
  );
}
