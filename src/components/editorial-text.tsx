import type { ComponentPropsWithoutRef, ReactNode } from "react";

type TextProps = ComponentPropsWithoutRef<"p"> & { children: ReactNode };

export function Eyebrow({ children, className = "", ...props }: TextProps) {
  return (
    <p
      className={`mb-3.5 text-[0.68rem] leading-[1.2] font-semibold tracking-[0.08em] text-accent uppercase font-mono ${className}`}
      {...props}
    >
      {children}
    </p>
  );
}

export function Byline({ children, className = "", ...props }: TextProps) {
  return (
    <p
      className={`m-0 text-[0.7rem] leading-[1.3] font-semibold tracking-[0.02em] font-mono ${className}`}
      {...props}
    >
      {children}
    </p>
  );
}

type DisplayHeadingProps = {
  as?: "h1" | "h2";
  children: ReactNode;
  className?: string;
};

export function DisplayHeading({
  as: Component = "h1",
  children,
  className = "",
}: DisplayHeadingProps) {
  return (
    <Component
      className={`m-0 font-editorial font-medium tracking-[-0.04em] leading-[1.02] text-balance ${className}`}
    >
      {children}
    </Component>
  );
}
