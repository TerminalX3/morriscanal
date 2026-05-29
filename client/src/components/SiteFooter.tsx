import { Link } from "wouter";

interface SiteFooterProps {
  className?: string;
}

export function SiteFooter({ className = "" }: SiteFooterProps) {
  return (
    <footer
      className={`flex-shrink-0 border-t border-[#B8962E]/30 px-4 py-3 ${className}`}
      style={{ backgroundColor: "#1A3A0A" }}
    >
      <div className="container mx-auto flex flex-col items-center justify-between gap-2 text-center sm:flex-row sm:text-left">
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 sm:justify-start">
          <span className="font-cinzel text-xs tracking-widest text-[#B8962E]/80 uppercase sm:text-sm">
            Morris Canal · 1824–1924 · New Jersey
          </span>
          <span className="hidden h-3 w-px bg-[#B8962E]/40 sm:block" aria-hidden />
          <Link href="/bibliography">
            <span className="font-cinzel text-xs tracking-wide text-[#B8962E] underline-offset-2 hover:text-white hover:underline sm:text-sm">
              Bibliography
            </span>
          </Link>
        </div>
        <span className="font-body text-xs italic text-white/40 sm:text-sm">
          National Register of Historic Places · 1974
        </span>
      </div>
    </footer>
  );
}
