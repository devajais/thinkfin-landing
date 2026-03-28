"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ParticlesBackground } from "@/components/animations/ParticlesBackground";
import { LaserBackground } from "@/components/animations/LaserBackground";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <Header />

      <main className="pt-24 relative">
        <ParticlesBackground />
        <LaserBackground />

        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-fuchsia-900/20" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-purple-200 to-fuchsia-200 bg-clip-text text-transparent">
                  Terms of Service
                </span>
              </h1>
              <p className="text-lg text-gray-400">Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="prose prose-invert prose-purple max-w-none"
            >
              <div className="space-y-8 text-gray-300">
                <section>
                  <h2 className="text-3xl font-bold text-white mb-4">Acceptance of Terms</h2>
                  <p className="leading-relaxed">
                    By accessing or using ThinkFin AI's services at thinkfin.co ("Service," "Platform," "we," "our," or "us"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Service.
                  </p>
                  <p className="leading-relaxed">
                    These Terms constitute a legally binding agreement between you ("User," "you," or "your") and ThinkFin AI.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-white mb-4">Description of Service</h2>
                  <p className="leading-relaxed mb-4">
                    ThinkFin AI provides an AI-powered personal financial operating system that offers:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Personalized financial advice based on your Financial Persona</li>
                    <li>Decision Engine for financial questions</li>
                    <li>Investment recommendations and mutual fund distribution services</li>
                    <li>Insurance advisory services</li>
                    <li>Law and Tax Intelligence updates</li>
                    <li>Proactive financial alerts and insights</li>
                  </ul>
                  <p className="leading-relaxed mt-4">
                    We reserve the right to modify, suspend, or discontinue any part of the Service at any time without prior notice.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-white mb-4">User Accounts</h2>

                  <h3 className="text-2xl font-semibold text-purple-300 mb-3">Account Creation</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>You must be at least 18 years old to use ThinkFin</li>
                    <li>You must provide accurate and complete information</li>
                    <li>You are responsible for maintaining the confidentiality of your account credentials</li>
                    <li>You are responsible for all activities that occur under your account</li>
                    <li>You must notify us immediately of any unauthorized use</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-purple-300 mb-3 mt-6">Account Termination</h3>
                  <p className="leading-relaxed">
                    We reserve the right to suspend or terminate your account if you violate these Terms or engage in fraudulent, abusive, or illegal activity.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-white mb-4">Financial Advice Disclaimer</h2>
                  <div className="p-6 bg-yellow-500/10 border border-yellow-500/30 rounded-lg mb-4">
                    <p className="leading-relaxed font-semibold text-yellow-200">
                      IMPORTANT: ThinkFin provides personalized financial information and recommendations, but this does not constitute professional financial advice. We are not licensed financial advisors, chartered accountants, or legal professionals.
                    </p>
                  </div>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Our AI-generated recommendations are based on the information you provide and general financial principles</li>
                    <li>All investment decisions carry risk. Past performance does not guarantee future results</li>
                    <li>You should conduct your own research and consult qualified professionals before making financial decisions</li>
                    <li>We are not liable for any financial losses resulting from decisions made based on our recommendations</li>
                    <li>Market conditions, regulations, and personal circumstances can change, affecting the validity of recommendations</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-white mb-4">AMFI Registration & Commissions</h2>
                  <p className="leading-relaxed mb-4">
                    ThinkFin operates as an AMFI-registered mutual fund distributor. We may earn commissions on products recommended through our platform:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>All commissions are disclosed transparently in the user interface</li>
                    <li>You always have the option to choose direct plans with zero commission</li>
                    <li>Our recommendations are based on suitability for your profile, not commission amounts</li>
                    <li>Commission rates vary by fund house and product type (typically 0.3-0.8% per year for mutual funds)</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-white mb-4">Subscription and Payments</h2>

                  <h3 className="text-2xl font-semibold text-purple-300 mb-3">Free Tier</h3>
                  <p className="leading-relaxed mb-4">
                    Our free tier provides limited access to core features. We reserve the right to modify free tier features at any time.
                  </p>

                  <h3 className="text-2xl font-semibold text-purple-300 mb-3">Premium Subscription</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Premium subscription is billed monthly (₹199/month) or annually (₹999/year)</li>
                    <li>Payment is processed through secure third-party payment processors</li>
                    <li>Subscriptions auto-renew unless cancelled before the renewal date</li>
                    <li>Refunds are provided only as required by applicable law</li>
                    <li>We reserve the right to change pricing with 30 days notice to existing subscribers</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-purple-300 mb-3 mt-6">Cancellation</h3>
                  <p className="leading-relaxed">
                    You can cancel your subscription at any time through your account settings. Cancellation takes effect at the end of the current billing period. No partial refunds are provided for unused time.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-white mb-4">User Responsibilities</h2>
                  <p className="leading-relaxed mb-4">You agree to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide accurate and complete financial information</li>
                    <li>Keep your Financial Persona updated</li>
                    <li>Use the Service only for lawful purposes</li>
                    <li>Not attempt to hack, reverse engineer, or disrupt the Service</li>
                    <li>Not share your account credentials with others</li>
                    <li>Not use automated tools to scrape or extract data from the Service</li>
                    <li>Not impersonate others or provide false information</li>
                    <li>Comply with all applicable laws and regulations</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-white mb-4">Intellectual Property</h2>
                  <p className="leading-relaxed mb-4">
                    All content, features, and functionality of ThinkFin (including but not limited to text, graphics, logos, algorithms, and software) are owned by ThinkFin AI and protected by copyright, trademark, and other intellectual property laws.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>You may not copy, modify, distribute, or create derivative works without our permission</li>
                    <li>The ThinkFin name and logo are trademarks of ThinkFin AI</li>
                    <li>Your Financial Persona data remains your property, but you grant us a license to use it to provide services</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-white mb-4">Limitation of Liability</h2>
                  <div className="p-6 bg-red-500/10 border border-red-500/30 rounded-lg mb-4">
                    <p className="leading-relaxed font-semibold text-red-200">
                      TO THE MAXIMUM EXTENT PERMITTED BY LAW, THINKFIN AI SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
                    </p>
                  </div>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>We provide the Service "as is" without warranties of any kind</li>
                    <li>We do not guarantee uninterrupted, secure, or error-free service</li>
                    <li>We are not liable for financial losses resulting from your decisions</li>
                    <li>Our total liability is limited to the amount you paid us in the past 12 months</li>
                    <li>Some jurisdictions do not allow these limitations, so they may not apply to you</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-white mb-4">Indemnification</h2>
                  <p className="leading-relaxed">
                    You agree to indemnify and hold ThinkFin AI, its affiliates, officers, directors, employees, and agents harmless from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Your use of the Service</li>
                    <li>Your violation of these Terms</li>
                    <li>Your violation of any rights of another party</li>
                    <li>Your provision of inaccurate information</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-white mb-4">Third-Party Services</h2>
                  <p className="leading-relaxed">
                    ThinkFin integrates with third-party services (mutual fund houses, insurance companies, payment processors). We are not responsible for the practices, policies, or performance of these third parties. Your interactions with third parties are governed by their terms and conditions.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-white mb-4">Regulatory Compliance</h2>
                  <p className="leading-relaxed mb-4">
                    ThinkFin operates in compliance with Indian financial regulations:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>AMFI registration for mutual fund distribution</li>
                    <li>SEBI regulations for investment advice (where applicable)</li>
                    <li>IRDAI guidelines for insurance referrals</li>
                    <li>RBI regulations for payment services</li>
                    <li>Income Tax Act provisions for tax-related information</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-white mb-4">Data Privacy</h2>
                  <p className="leading-relaxed">
                    Your privacy is important to us. Our collection and use of personal information is governed by our <a href="/privacy" className="text-purple-400 hover:text-purple-300">Privacy Policy</a>, which is incorporated into these Terms by reference.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-white mb-4">Dispute Resolution</h2>

                  <h3 className="text-2xl font-semibold text-purple-300 mb-3">Governing Law</h3>
                  <p className="leading-relaxed mb-4">
                    These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in [Your City], India.
                  </p>

                  <h3 className="text-2xl font-semibold text-purple-300 mb-3">Arbitration</h3>
                  <p className="leading-relaxed">
                    Any dispute arising from these Terms shall first be attempted to be resolved through good-faith negotiation. If unresolved, disputes may be subject to binding arbitration under Indian Arbitration and Conciliation Act, 1996.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-white mb-4">Changes to Terms</h2>
                  <p className="leading-relaxed">
                    We reserve the right to modify these Terms at any time. We will notify users of material changes via email or through the Service. Your continued use after changes constitutes acceptance of the modified Terms. If you do not agree to the changes, you must stop using the Service and close your account.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-white mb-4">Severability</h2>
                  <p className="leading-relaxed">
                    If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-white mb-4">Entire Agreement</h2>
                  <p className="leading-relaxed">
                    These Terms, together with our Privacy Policy, constitute the entire agreement between you and ThinkFin AI regarding the Service and supersede all prior agreements and understandings.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-white mb-4">Contact Us</h2>
                  <p className="leading-relaxed mb-4">
                    If you have questions about these Terms, please contact us:
                  </p>
                  <div className="p-6 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                    <p className="mb-2"><strong>ThinkFin AI</strong></p>
                    <p className="mb-2">Email: <a href="mailto:devashishjaiswal84@gmail.com" className="text-purple-400 hover:text-purple-300">devashishjaiswal84@gmail.com</a></p>
                    <p>Website: <a href="https://thinkfin.co" className="text-purple-400 hover:text-purple-300">thinkfin.co</a></p>
                  </div>
                </section>

                <section className="mt-12 p-6 bg-fuchsia-500/10 border border-fuchsia-500/20 rounded-lg">
                  <p className="text-sm text-gray-400 italic">
                    By using ThinkFin, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                  </p>
                </section>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
