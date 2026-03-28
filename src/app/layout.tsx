import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ThinkFin - AI-Powered Personal Finance",
  description: "Your AI financial advisor. Get personalized financial advice tailored to your life, goals, and income.",
  keywords: ["personal finance", "AI advisor", "financial planning", "India"],
  openGraph: {
    title: "ThinkFin - AI-Powered Personal Finance",
    description: "Your AI financial advisor. Get personalized advice tailored to your life.",
    type: "website",
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
