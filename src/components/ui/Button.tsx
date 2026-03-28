import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-lg font-medium transition-colors",
          "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          {
            primary: "bg-blue-600 text-white hover:bg-blue-700",
            secondary: "bg-slate-600 text-white hover:bg-slate-700",
            outline: "border-2 border-slate-300 text-slate-700 hover:border-slate-400 bg-white",
          }[variant],
          {
            sm: "text-sm px-4 py-2",
            md: "text-base px-6 py-2.5",
            lg: "text-base px-8 py-3",
          }[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
