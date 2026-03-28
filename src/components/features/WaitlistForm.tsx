"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useState } from "react";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address");
      return;
    }

    // Simulate API call (replace with actual backend integration)
    setTimeout(() => {
      setStatus("success");
      setMessage("🎉 You're on the waitlist! We'll reach out soon.");
      setEmail("");
    }, 1000);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === "loading" || status === "success"}
            className="flex-1"
            required
          />
          <Button
            type="submit"
            variant="primary"
            size="md"
            disabled={status === "loading" || status === "success"}
            className="sm:w-auto whitespace-nowrap"
          >
            {status === "loading" ? "Joining..." : "Join Waitlist"}
          </Button>
        </div>

        {message && (
          <div className={`
            p-4 rounded-lg text-center font-medium
            ${status === "success" ? "bg-[#059669]/10 text-[#059669]" : ""}
            ${status === "error" ? "bg-[#ea580c]/10 text-[#ea580c]" : ""}
          `}>
            {message}
          </div>
        )}
      </form>

      <p className="text-sm text-slate-500 text-center mt-4">
        We respect your privacy. No spam, ever. Unsubscribe anytime.
      </p>
    </div>
  );
}
