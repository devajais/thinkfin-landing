import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ThinkFin - AI-Powered Personal Finance for Every Indian",
  description: "India's first AI-powered personal financial operating system. Get personalized financial advice, investment recommendations, and smart alerts tailored to your income, goals, and life.",
  keywords: ["personal finance", "AI advisor", "financial planning", "India", "investment", "mutual funds", "insurance", "financial health"],
  metadataBase: new URL('https://thinkfin.co'),
  openGraph: {
    title: "ThinkFin - AI-Powered Personal Finance for Every Indian",
    description: "India's first AI-powered personal financial operating system. Get personalized advice tailored to your reality.",
    type: "website",
    url: "https://thinkfin.co",
    siteName: "ThinkFin",
  },
  twitter: {
    card: "summary_large_image",
    title: "ThinkFin - AI-Powered Personal Finance",
    description: "Personalized financial advice for every Indian. Built with AI.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable}`}>
      <body className="min-h-screen bg-[#0a0a0f] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
