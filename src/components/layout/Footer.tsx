import { Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <span className="text-2xl font-bold">ThinkFin</span>
            </div>
            <p className="text-slate-400 text-lg mb-6 max-w-md">
              Your personal financial operating system. Get AI-powered advice tailored to your life.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors text-sm font-bold">
                T
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors text-sm font-bold">
                in
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors text-sm font-bold">
                IG
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              <li><a href="#features" className="text-slate-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-slate-400 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href="mailto:devashishjaiswal84@gmail.com"
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
              >
                <Mail size={18} />
                <span className="text-sm">Support</span>
              </a>
              <a
                href="tel:+919653088918"
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
              >
                <Phone size={18} />
                <span className="text-sm">Call Us</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} ThinkFin. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
