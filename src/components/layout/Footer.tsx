import { Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-purple-500/20 py-12 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 font-bold text-xl mb-4">
              <Sparkles className="w-6 h-6 text-purple-400" />
              <span className="bg-gradient-to-r from-purple-200 to-fuchsia-200 bg-clip-text text-transparent">
                ThinkFin
              </span>
            </div>
            <p className="text-gray-400">
              AI-powered financial advice for every Indian
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/about" className="hover:text-purple-300 transition-colors">About</a></li>
              <li><a href="/features" className="hover:text-purple-300 transition-colors">Features</a></li>
              <li><a href="/how-it-works" className="hover:text-purple-300 transition-colors">How It Works</a></li>
              <li><a href="/pricing" className="hover:text-purple-300 transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <div>devashishjaiswal84@gmail.com</div>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-500/20 pt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} ThinkFin. Built with AI for India.
        </div>
      </div>
    </footer>
  );
}
