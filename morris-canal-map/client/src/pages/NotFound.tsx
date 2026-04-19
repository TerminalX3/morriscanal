import { Link } from "wouter";
import { AlertCircle, Home } from "lucide-react";
import { SiteNavBar } from "@/components/SiteNavBar";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F8F3E8]">
      <header
        className="flex-shrink-0 border-b border-[#B8962E]/40 px-5 py-6"
        style={{
          background:
            "linear-gradient(135deg, #1A3A0A 0%, #2D5016 40%, #1A3A0A 100%)",
        }}
      >
        <h1 className="font-display text-2xl text-white sm:text-3xl">404</h1>
        <p className="font-fell mt-2 text-base italic text-white/80 sm:text-lg">
          Page not found
        </p>
      </header>
      <SiteNavBar />
      <main className="flex flex-1 flex-col items-center justify-center px-6 py-12 text-center">
        <div className="mb-6 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 animate-pulse rounded-full bg-[#B8962E]/25" />
            <AlertCircle className="relative h-14 w-14 text-[#6B1F2A] sm:h-16 sm:w-16" />
          </div>
        </div>
        <p className="font-body max-w-lg text-lg leading-relaxed text-[#4a3520] sm:text-xl">
          Sorry — that address does not exist. It may have been moved or typed
          incorrectly.
        </p>
        <Link href="/">
          <span className="mt-6 inline-flex items-center gap-2 rounded-lg border-2 border-[#2D5016] bg-[#2D5016] px-5 py-2.5 font-cinzel text-sm text-white transition-colors hover:bg-[#1A3A0A] sm:text-base">
            <Home className="h-5 w-5" />
            Back to map
          </span>
        </Link>
      </main>
    </div>
  );
}
