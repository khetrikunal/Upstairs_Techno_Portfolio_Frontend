import React, { type ReactNode } from "react";

/**
 * Puffy clay surface card.
 * Features 3-layer soft drop shadow + top inset highlight + bottom inset shade.
 */
export function ClayCard({
  children,
  className = "",
  hover = false,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div className={`clay-card ${hover ? "clay-card-hover" : ""} ${className}`}>
      {children}
    </div>
  );
}

/**
 * Clay Button.
 * Renders an <a> tag when `href` is provided, otherwise a standard <button>.
 */
export function ClayButton({
  children,
  href,
  onClick,
  disabled,
  type = "button",
  variant = "primary",
  className = "",
}: {
  children: ReactNode;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "brass" | "ghost";
  className?: string;
}) {
  const classes = `clay-btn clay-btn-${variant} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} aria-disabled={disabled}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}

/**
 * Clay Pill Badge (e.g. status tag)
 */
export function ClayPill({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={`clay-pill ${className}`}>
      {children}
    </span>
  );
}
