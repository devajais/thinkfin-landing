export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="font-bold text-xl mb-4">ThinkFin</div>
            <p className="text-slate-400">
              Personalized financial advice for every Indian.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#how-it-works" className="hover:text-white">How It Works</a></li>
              <li><a href="#features" className="hover:text-white">Features</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-slate-400">
              <div>devashishjaiswal84@gmail.com</div>
              <div>+91 9653088918</div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm">
          &copy; {new Date().getFullYear()} ThinkFin. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
