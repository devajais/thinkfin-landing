import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ThinkFin AI - India's First Personal Financial Operating System",
  description: "AI-powered, hyper-personalized financial advice built for every earning Indian. Get personalized decisions, proactive alerts, and unbiased guidance for your financial journey.",
  keywords: ["personal finance", "financial advisor", "India", "AI", "investment", "insurance", "financial planning"],
  authors: [{ name: "ThinkFin AI" }],
  openGraph: {
    title: "ThinkFin AI - India's First Personal Financial Operating System",
    description: "AI-powered, hyper-personalized financial advice built for every earning Indian.",
    type: "website",
    locale: "en_IN",
    siteName: "ThinkFin AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "ThinkFin AI - India's First Personal Financial Operating System",
    description: "AI-powered, hyper-personalized financial advice built for every earning Indian.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      className={`${inter.variable} ${poppins.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-white text-slate-900 antialiased">{children}</body>
    </html>
  );
}
