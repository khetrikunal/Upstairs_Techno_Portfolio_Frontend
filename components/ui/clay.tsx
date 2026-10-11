"use client";

import React, { type ReactNode } from "react";
import Link from "next/link";

/**
 * Puffy clay surface card.
 * Features multi-layer soft drop shadow + top inset highlight + bottom inset shade.
 */
export function ClayCard({
  children,
  className = "",
  hover = false,
  dark = false,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  dark?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl transition-all ${
        dark ? "clay-card-dark text-paper" : "clay-card text-ink"
      } ${hover ? "clay-card-hover" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

/**
 * Clay Button.
 * Supports Next.js Link when `href` is provided, otherwise standard <button>.
 */
export function ClayButton({
  children,
  href,
  onClick,
  disabled,
  type = "button",
  variant = "primary",
  className = "",
  target,
  rel,
}: {
  children: ReactNode;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "brass" | "ghost" | "ghost-dark";
  className?: string;
  target?: string;
  rel?: string;
}) {
  const variantClass =
    variant === "primary"
      ? "clay-btn-primary"
      : variant === "brass"
      ? "clay-btn-brass"
      : variant === "ghost-dark"
      ? "clay-btn-ghost-dark"
      : "clay-btn-ghost";

  const classes = `clay-btn ${variantClass} disabled:opacity-50 disabled:pointer-events-none ${className}`;

  if (href) {
    if (href.startsWith("http") || target === "_blank") {
      return (
        <a
          href={href}
          target={target}
          rel={rel || (target === "_blank" ? "noopener noreferrer" : undefined)}
          className={classes}
          aria-disabled={disabled}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} aria-disabled={disabled}>
        {children}
      </Link>
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
 * Clay Pill Badge (e.g. status tag, category badge)
 */
export function ClayPill({
  children,
  variant = "default",
  className = "",
}: {
  children: ReactNode;
  variant?: "default" | "accent" | "brass";
  className?: string;
}) {
  const variantClass =
    variant === "accent"
      ? "clay-pill-accent"
      : variant === "brass"
      ? "clay-pill-brass"
      : "";

  return (
    <span className={`clay-pill ${variantClass} ${className}`}>
      {children}
    </span>
  );
}
