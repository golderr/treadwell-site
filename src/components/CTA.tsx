import { Icon } from "./icons";

const PHONE = "(909) 340-3888";
const PHONE_HREF = "tel:9093403888";

export function CallButton({ variant = "primary", size = "md", className = "" }: {
  variant?: "primary" | "dark" | "light";
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const variants = {
    primary: "bg-cherry text-white hover:bg-cherry-dark",
    dark: "bg-navy text-white hover:bg-navy-deep",
    light: "bg-white text-navy hover:bg-surface",
  };
  const sizes = {
    sm: "px-4 py-2 text-sm gap-1.5",
    md: "px-6 py-3.5 text-[15px] gap-2",
    lg: "px-8 py-4 text-base gap-2",
  };
  return (
    <a
      href={PHONE_HREF}
      className={`inline-flex items-center font-body font-bold rounded-md transition-colors ${variants[variant]} ${sizes[size]} ${className}`}
    >
      <Icon.Phone size={size === "lg" ? 18 : 16} />
      {PHONE}
    </a>
  );
}

export function GhostButton({ href, children, className = "" }: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 font-body font-semibold text-[15px] border-2 border-white/15 text-white hover:bg-white/5 rounded-md px-5 py-3 transition-colors ${className}`}
    >
      {children}
      <Icon.Arrow size={14} />
    </a>
  );
}

export function SectionLabel({ children, color = "cherry", className = "" }: {
  children: React.ReactNode;
  color?: "cherry" | "powder" | "silver";
  className?: string;
}) {
  const colors = {
    cherry: "text-cherry",
    powder: "text-powder",
    silver: "text-silver-dark",
  };
  return (
    <div className={`font-display font-extrabold text-[10px] tracking-[0.12em] uppercase mb-2 ${colors[color]} ${className}`}>
      {children}
    </div>
  );
}
