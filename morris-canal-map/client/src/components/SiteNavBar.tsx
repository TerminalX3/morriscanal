import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";

const NAV: { href: string; label: string }[] = [
  { href: "/", label: "Interactive Map" },
  { href: "/overview", label: "Overview" },
  { href: "/engineering", label: "Engineering" },
  { href: "/legacy", label: "Legacy" },
  { href: "/documentary", label: "Documentary" },
];

export function SiteNavBar({ className }: { className?: string }) {
  return (
    <nav
        className={cn(
          "flex flex-wrap items-center justify-center gap-x-3 gap-y-2 border-b border-[#B8962E]/40 px-3 py-2 sm:justify-start sm:gap-x-6 sm:px-5 md:gap-x-8 lg:gap-x-10",
          className,
        )}
      style={{ backgroundColor: "#EDE0C4" }}
      aria-label="Main navigation"
    >
      {NAV.map(({ href, label }) => (
        <NavLink key={href} href={href}>
          {label}
        </NavLink>
      ))}
    </nav>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const [location] = useLocation();
  const isActive =
    href === "/" ? location === "/" : location === href;
  return (
    <Link href={href}>
      <span
        className={cn(
          "font-cinzel text-xs tracking-wide underline-offset-4 transition-colors sm:text-sm",
          isActive
            ? "font-semibold text-[#2D5016] underline decoration-[#B8962E] decoration-2"
            : "text-[#4a3520] hover:text-[#2D5016] hover:underline",
        )}
      >
        {children}
      </span>
    </Link>
  );
}
