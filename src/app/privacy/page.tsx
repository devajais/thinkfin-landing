"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ParticlesBackground } from "@/components/animations/ParticlesBackground";
import { LaserBackground } from "@/components/animations/LaserBackground";

export default function PrivacyPolicyPage() {
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
                  Privacy Policy
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
                  <h2 className="text-3xl font-bold text-white mb-4">Introduction</h2>
                  <p className="leading-relaxed">
                    ThinkFin AI ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website at thinkfin.co and our services.
                  </p>
                  <p className="leading-relaxed">
                    By using ThinkFin, you agree to the collection and use of information in accordance with this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please do not access our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-white mb-4">Information We Collect</h2>

                  <h3 className="text-2xl font-semibold text-purple-300 mb-3">Personal Information</h3>
                  <p className="leading-relaxed mb-4">We collect information that you provide directly to us, including:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Email address (when you join our waitlist)</li>
                    <li>Name and contact information (when you create an account)</li>
                    <li>Financial information you choose to share (income, expenses, assets, liabilities, goals)</li>
                    <li>Payment information (processed securely through third-party payment processors)</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-purple-300 mb-3 mt-6">Financial Persona Data</h3>
                  <p className="leading-relaxed mb-4">To provide personalized financial advice, we collect:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Income profile (salary, freelance income, other income sources)</li>
                    <li>Expense profile (fixed and variable expenses)</li>
                    <li>Asset profile (savings, investments, property)</li>
                    <li>Liability profile (loans, debts, EMIs)</li>
                    <li>Career and skills information</li>
                    <li>Financial goals and timelines</li>
                    <li>Risk tolerance and investment preferences</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-purple-300 mb-3 mt-6">Automatically Collected Information</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Device information (browser type, operating system)</li>
                    <li>Usage data (pages visited, time spent, features used)</li>
                    <li>IP address and location data</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-white mb-4">How We Use Your Information</h2>
                  <p className="leading-relaxed mb-4">We use the information we collect to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide personalized financial recommendations and advice</li>
                    <li>Calculate your Financial Health Score and Net Worth</li>
                    <li>Generate decision verdicts for your financial questions</li>
                    <li>Send proactive alerts about regulatory changes affecting you</li>
                    <li>Recommend investments, insurance, and other financial products</li>
                    <li>Process your transactions and manage your account</li>
                    <li>Communicate with you about our services, updates, and promotions</li>
                    <li>Improve our services and develop new features</li>
                    <li>Comply with legal obligations and prevent fraud</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-white mb-4">Data Security</h2>
                  <p className="leading-relaxed mb-4">
                    We implement industry-standard security measures to protect your information:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Data encryption in transit (SSL/TLS) and at rest</li>
                    <li>Secure database storage with access controls</li>
                    <li>Regular security audits and vulnerability assessments</li>
                    <li>Limited employee access to personal data</li>
                    <li>Multi-factor authentication for account access</li>
                  </ul>
                  <p className="leading-relaxed mt-4">
                    However, no method of transmission over the internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-white mb-4">Information Sharing</h2>
                  <p className="leading-relaxed mb-4">
                    We do not sell your personal information. We may share your information in the following circumstances:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Service Providers:</strong> With third-party vendors who perform services on our behalf (payment processing, analytics, hosting)</li>
                    <li><strong>Financial Partners:</strong> When you choose to invest or purchase products through our platform, we share necessary information with mutual fund houses, insurance companies, or banks</li>
                    <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                    <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                    <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-white mb-4">Your Rights and Choices</h2>
                  <p className="leading-relaxed mb-4">You have the right to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Access:</strong> Request a copy of your personal information</li>
                    <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                    <li><strong>Deletion:</strong> Request deletion of your account and data</li>
                    <li><strong>Portability:</strong> Receive your data in a structured format</li>
                    <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                    <li><strong>Object:</strong> Object to certain processing of your data</li>
                  </ul>
                  <p className="leading-relaxed mt-4">
                    To exercise these rights, contact us at <a href="mailto:devashishjaiswal84@gmail.com" className="text-purple-400 hover:text-purple-300">devashishjaiswal84@gmail.com</a>
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-white mb-4">Cookies and Tracking</h2>
                  <p className="leading-relaxed mb-4">
                    We use cookies and similar tracking technologies to improve your experience. You can control cookies through your browser settings. Disabling cookies may limit some functionality of our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-white mb-4">Data Retention</h2>
                  <p className="leading-relaxed">
                    We retain your information for as long as your account is active or as needed to provide services. After account deletion, we may retain certain information as required by law or for legitimate business purposes.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-white mb-4">Children's Privacy</h2>
                  <p className="leading-relaxed">
                    ThinkFin is not intended for users under 18 years of age. We do not knowingly collect information from children. If we discover we have collected information from a child, we will delete it immediately.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-white mb-4">Changes to This Policy</h2>
                  <p className="leading-relaxed">
                    We may update this Privacy Policy from time to time. We will notify you of material changes by posting the new policy on this page and updating the "Last updated" date. Your continued use of our services after changes constitutes acceptance of the updated policy.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold text-white mb-4">Contact Us</h2>
                  <p className="leading-relaxed mb-4">
                    If you have questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="p-6 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                    <p className="mb-2"><strong>ThinkFin AI</strong></p>
                    <p className="mb-2">Email: <a href="mailto:devashishjaiswal84@gmail.com" className="text-purple-400 hover:text-purple-300">devashishjaiswal84@gmail.com</a></p>
                    <p>Website: <a href="https://thinkfin.co" className="text-purple-400 hover:text-purple-300">thinkfin.co</a></p>
                  </div>
                </section>

                <section className="mt-12 p-6 bg-fuchsia-500/10 border border-fuchsia-500/20 rounded-lg">
                  <p className="text-sm text-gray-400 italic">
                    This Privacy Policy is governed by Indian law. By using ThinkFin, you consent to the processing of your information as described in this policy.
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
