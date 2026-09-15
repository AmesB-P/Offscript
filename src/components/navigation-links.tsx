import Link from "next/link";

const navigationItems = [
  { href: "/topics/culture", label: "Culture" },
  { href: "/topics/design", label: "Design" },
  { href: "/topics/people", label: "People" },
  { href: "/search", label: "Search" },
];

type NavigationLinksProps = {
  mobile?: boolean;
  onNavigate?: () => void;
};

export function NavigationLinks({
  mobile = false,
  onNavigate,
}: NavigationLinksProps) {
  const className = mobile
    ? "rounded-md p-3 font-mono text-[0.75rem] leading-[1.2] font-semibold hover:bg-paper"
    : "grid min-h-11 place-items-center transition-colors duration-200 ease-editorial hover:text-accent";

  return navigationItems.map(({ href, label }) => (
    <Link className={className} href={href} key={href} onClick={onNavigate}>
      {label}
    </Link>
  ));
}
