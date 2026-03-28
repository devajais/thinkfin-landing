import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { PROBLEMS, PRIYA_STORY } from "@/lib/constants";

export function ProblemSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Meet Priya */}
        <ScrollReveal>
          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-slate-900">
              Meet Priya.
            </h2>
            <p className="text-xl md:text-2xl text-center text-slate-600 mb-12">
              {PRIYA_STORY.age} years old. {PRIYA_STORY.profession}. {PRIYA_STORY.income}.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PRIYA_STORY.problems.map((problem, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <Card className={index % 2 === 0 ? "border-l-4 border-l-[#1e3a8a]" : "border-l-4 border-l-[#ea580c]"}>
                    <CardHeader>
                      <CardTitle className="text-lg">{problem.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {problem.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.4}>
              <div className="mt-12 bg-[#ea580c] text-white rounded-2xl p-8 text-center">
                <p className="text-xl md:text-2xl font-bold">
                  {PRIYA_STORY.conclusion}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </ScrollReveal>

        {/* Four Structural Failures */}
        <ScrollReveal>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-slate-900">
              Four Structural Failures of Indian Finance
            </h2>
            <p className="text-xl text-center text-slate-600 mb-12">
              Financial literacy isn&apos;t the problem. Personalized, unbiased context is.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {PROBLEMS.map((problem, index) => (
                <ScrollReveal key={problem.id} delay={index * 0.1}>
                  <Card hover className="h-full">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className={`
                          w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-xl
                          ${index === 0 ? 'bg-[#1e3a8a]' : ''}
                          ${index === 1 ? 'bg-[#ea580c]' : ''}
                          ${index === 2 ? 'bg-[#1e40af]' : ''}
                          ${index === 3 ? 'bg-[#059669]' : ''}
                        `}>
                          {String(problem.id).padStart(2, '0')}
                        </div>
                        <CardTitle className="text-2xl">{problem.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">
                        {problem.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
