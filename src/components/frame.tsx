import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type FrameProps = ComponentPropsWithoutRef<"div"> & {
  as?: ElementType;
  children: ReactNode;
};

export function Frame({
  as: Component = "div",
  children,
  className = "",
  ...props
}: FrameProps) {
  return (
    <Component
      className={`mx-auto w-[calc(100%-40px)] max-w-[1184px] min-[641px]:w-[calc(100%-64px)] lg:w-[calc(100%-112px)] ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
