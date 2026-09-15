import Link from "next/link";
import { Frame } from "./frame";
import { MobileMenu } from "./mobile-menu";
import { NavigationLinks } from "./navigation-links";

export function Masthead() {
  return (
    <header className="border-b border-ink/40">
      <Frame className="flex min-h-16 items-center justify-between min-[641px]:min-h-[72px]">
        <Link
          className="font-editorial text-[1.75rem] leading-none font-semibold tracking-[-0.04em]"
          href="/"
        >
          Offscript<span className="text-accent">.</span>
        </Link>
        <nav
          className="hidden gap-7 font-mono text-[0.72rem] leading-[1.2] font-semibold tracking-[0.04em] uppercase min-[641px]:flex"
          aria-label="Primary navigation"
        >
          <NavigationLinks />
        </nav>
        <MobileMenu />
      </Frame>
    </header>
  );
}
