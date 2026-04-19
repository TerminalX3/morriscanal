import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { SiteNavBar } from "@/components/SiteNavBar";

interface ArticlePageShellProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export function ArticlePageShell({
  title,
  subtitle,
  children,
}: ArticlePageShellProps) {
  return (
    <div className="flex min-h-screen flex-col bg-[#F8F3E8]">
      <header
        className="flex-shrink-0 border-b border-[#B8962E]/40"
        style={{
          background: "linear-gradient(135deg, #1A3A0A 0%, #2D5016 40%, #1A3A0A 100%)",
        }}
      >
        <div className="px-5 py-5 sm:py-6">
          <Link href="/">
            <span className="font-cinzel mb-3 inline-flex items-center gap-2 text-sm text-[#B8962E] hover:text-white sm:text-base">
              <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden />
              Back to map
            </span>
          </Link>
          <h1 className="font-display text-2xl leading-tight tracking-wide text-white sm:text-3xl">
            {title}
          </h1>
          {subtitle ? (
            <p className="font-fell mt-2 max-w-3xl text-sm italic text-white/80 sm:text-base">
              {subtitle}
            </p>
          ) : null}
        </div>
      </header>

      <SiteNavBar />

      <main className="flex-1">
        <div className="container mx-auto max-w-3xl px-4 py-6 sm:px-6 sm:py-8 md:max-w-4xl">
          <div className="prose-heritage space-y-8">{children}</div>
        </div>
      </main>

      <footer
        className="flex-shrink-0 border-t border-[#B8962E]/30 px-4 py-3"
        style={{ backgroundColor: "#1A3A0A" }}
      >
        <div className="container mx-auto flex flex-col items-center justify-between gap-2 text-center sm:flex-row sm:text-left">
          <span className="font-cinzel text-xs tracking-widest text-[#B8962E]/80 uppercase sm:text-sm">
            Morris Canal · 1824–1924 · New Jersey
          </span>
          <span className="font-body text-xs italic text-white/40 sm:text-sm">
            National Register of Historic Places · 1974
          </span>
        </div>
      </footer>
    </div>
  );
}
