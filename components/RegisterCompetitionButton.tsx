import { ArrowUpRight, Trophy } from "lucide-react";

interface RegisterCompetitionButtonProps {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  className?: string;
  showIcon?: boolean;
  label?: string;
}

/**
 * Reusable "Register for Coding Competition" CTA button.
 * Matches the exact design system of the "Apply for Job" button.
 */
export default function RegisterCompetitionButton({
  variant = "primary",
  size = "md",
  className = "",
  showIcon = true,
  label = "Register for Coding Competition",
}: RegisterCompetitionButtonProps) {
  const sizeClasses = {
    sm: "px-5 py-2.5 text-sm gap-2",
    md: "px-6 py-3 text-lg lg:text-[19px] gap-2.5",
    lg: "px-8 py-4 text-base sm:text-lg gap-2.5",
  };

  const variantClasses = {
    primary: "clay-btn-primary",
    secondary: "clay-btn-ghost-dark",
  };

  return (
    <a
      href="https://codenova.upstairstechno.com"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Register for Coding Competition"
      className={`clay-btn group relative inline-flex items-center rounded-full font-bold ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {showIcon && (
        <Trophy className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:scale-110" />
      )}
      <span>{label}</span>
      <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
    </a>
  );
}
