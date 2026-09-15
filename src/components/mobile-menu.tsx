import { NavigationLinks } from "./navigation-links";

export function MobileMenu() {
  return (
    <details className="group relative min-[641px]:hidden">
      <summary className="flex min-h-11 min-w-11 cursor-pointer list-none items-center justify-center rounded-editorial border border-ink/70 bg-transparent font-mono text-[0.72rem] leading-[1.2] font-semibold text-ink transition-colors duration-200 ease-editorial hover:bg-ink hover:text-paper group-open:bg-ink group-open:text-paper [&::-webkit-details-marker]:hidden">
        <span className="group-open:hidden">Menu</span>
        <span className="hidden group-open:inline">Close</span>
      </summary>
      <nav
        className="absolute top-[52px] right-0 z-20 grid w-45 rounded-editorial border border-ink/70 bg-surface p-2 shadow-[0_16px_32px_rgb(100_47_38_/_16%)]"
        id="mobile-navigation"
        aria-label="Mobile navigation"
      >
        <NavigationLinks mobile />
      </nav>
    </details>
  );
}
