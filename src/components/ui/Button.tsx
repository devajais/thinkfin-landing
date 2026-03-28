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
          "inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 ease-out",
          "focus:outline-none focus:ring-2 focus:ring-offset-2",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          {
            primary: "bg-[#ea580c] text-white hover:bg-[#ea580c]/90 focus:ring-[#ea580c]/50 shadow-lg hover:shadow-xl hover:scale-105",
            secondary: "bg-[#1e3a8a] text-white hover:bg-[#1e40af] focus:ring-[#1e3a8a]/50",
            outline: "border-2 border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white focus:ring-[#1e3a8a]/50",
          }[variant],
          {
            sm: "text-sm px-4 py-2",
            md: "text-base px-6 py-3",
            lg: "text-lg px-8 py-4",
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
