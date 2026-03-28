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

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address");
      return;
    }

    setTimeout(() => {
      setStatus("success");
      setMessage("Thanks! You're on the waitlist.");
      setEmail("");
    }, 1000);
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <Input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === "loading" || status === "success"}
            className="flex-1"
            required
          />
          <Button
            type="submit"
            variant="secondary"
            size="md"
            disabled={status === "loading" || status === "success"}
            className="sm:w-auto whitespace-nowrap bg-white text-blue-600 hover:bg-slate-50"
          >
            {status === "loading" ? "Joining..." : "Join Waitlist"}
          </Button>
        </div>

        {message && (
          <div className={`p-3 rounded-lg text-center text-sm ${
            status === "success" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
          }`}>
            {message}
          </div>
        )}
      </form>

      <p className="text-sm text-blue-100 text-center mt-4">
        No spam. Unsubscribe anytime.
      </p>
    </div>
  );
}
