import type { ChangeEventHandler, ReactNode } from "react";

type FilterSelectProps = {
  label: string;
  value: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
  children: ReactNode;
};

export function FilterSelect({
  label,
  value,
  onChange,
  children,
}: FilterSelectProps) {
  return (
    <label className="grid gap-2 font-mono text-[0.7rem] leading-[1.3] font-semibold tracking-[0.02em]">
      {label}
      <select
        className="min-h-12 rounded-editorial border border-ink/70 bg-paper px-2.5 text-[0.95rem] leading-[1.4] transition-[border-color,box-shadow] duration-200 ease-editorial hover:border-accent"
        value={value}
        onChange={onChange}
      >
        {children}
      </select>
    </label>
  );
}
