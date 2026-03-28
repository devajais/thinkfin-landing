"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { AlertTriangle, TrendingDown, TrendingUp, Info } from "lucide-react";
import { motion } from "framer-motion";

export function VerdictCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="max-w-2xl mx-auto shadow-2xl border-2">
        <CardHeader className="bg-[#ea580c] text-white rounded-t-xl">
          <div className="flex items-center gap-3">
            <AlertTriangle size={28} />
            <CardTitle className="text-2xl text-white">VERDICT: Not Recommended</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="p-6 space-y-4">
          <div>
            <h4 className="font-semibold text-slate-700 mb-1">Asset Type</h4>
            <div className="flex items-center gap-2 text-[#ea580c]">
              <TrendingDown size={20} />
              <p className="font-medium">Depreciating ↓ Value halves in 4 yrs</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-700 mb-1">Financial Impact</h4>
            <p className="text-slate-900">Savings rate drops 8%. Health Score ↓6</p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-700 mb-1">Opportunity Cost</h4>
            <div className="flex items-center gap-2 text-[#059669]">
              <TrendingUp size={20} />
              <p className="font-medium">Same EMI invested → ₹9.4L in 5 years</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-700 mb-1">Alternatives</h4>
            <p className="text-slate-900">₹1.8L scooter | ₹2.5L used bike</p>
          </div>

          <div className="pt-4 border-t border-slate-200">
            <h4 className="font-semibold text-slate-700 mb-2">Score</h4>
            <div className="flex items-center justify-between">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#ea580c]">3/10</div>
                <div className="text-sm text-slate-600">Financial</div>
              </div>
              <div className="text-slate-300">|</div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#059669]">8/10</div>
                <div className="text-sm text-slate-600">Emotional</div>
              </div>
            </div>
          </div>

          <div className="bg-[#1e3a8a]/5 p-4 rounded-lg flex items-start gap-3">
            <Info size={20} className="text-[#1e3a8a] flex-shrink-0 mt-0.5" />
            <p className="text-sm text-slate-700">
              <strong>Screenshot-ready verdict cards</strong> are ThinkFin&apos;s primary organic growth engine.
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
