import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { SiteNavBar } from "@/components/SiteNavBar";
import { SiteFooter } from "@/components/SiteFooter";
import {
  SECTION_LABELS,
  getBibliographyBySection,
  type BibliographyEntry,
  type BibliographySection,
} from "@/lib/bibliographyData";

const SECTION_ORDER: BibliographySection[] = ["primary", "secondary", "site"];

function BibliographyList({ entries }: { entries: BibliographyEntry[] }) {
  return (
    <ol className="bibliography-list list-none space-y-4 pl-0">
      {entries.map((entry) => (
        <li
          key={entry.id}
          id={`ref-${entry.id}`}
          className="bibliography-entry scroll-mt-24 font-body text-base leading-relaxed text-[#2C1A0E] sm:text-lg"
        >
          <span className="font-cinzel mr-1 font-semibold text-[#2D5016]">
            [{entry.number}]
          </span>
          {entry.url ? (
            <>
              {entry.cmos.split(entry.url)[0]}
              <a
                href={entry.url}
                target="_blank"
                rel="noreferrer"
                className="break-all text-[#2D5016] underline decoration-[#B8962E]/60 underline-offset-2 hover:text-[#1A3A0A]"
              >
                {entry.url}
              </a>
              {entry.cmos.split(entry.url)[1] ?? ""}
            </>
          ) : (
            entry.cmos
          )}
        </li>
      ))}
    </ol>
  );
}

export default function Bibliography() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F8F3E8]">
      <header
        className="flex-shrink-0 border-b border-[#B8962E]/40"
        style={{
          background:
            "linear-gradient(135deg, #1A3A0A 0%, #2D5016 40%, #1A3A0A 100%)",
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
            Bibliography
          </h1>
        </div>
      </header>

      <SiteNavBar />

      <main className="flex-1">
        <div className="container mx-auto max-w-3xl px-4 py-6 sm:px-6 sm:py-8 md:max-w-4xl">
          <div className="prose-heritage space-y-10">
            {SECTION_ORDER.map((section) => {
              const entries = getBibliographyBySection(section);
              if (entries.length === 0) return null;
              return (
                <section
                  key={section}
                  className="border-b border-[#B8962E]/25 pb-10 last:border-0"
                >
                  <h2 className="font-cinzel mb-5 text-lg font-bold tracking-wide text-[#2D5016] sm:text-xl">
                    {SECTION_LABELS[section]}
                  </h2>
                  <BibliographyList entries={entries} />
                </section>
              );
            })}
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
