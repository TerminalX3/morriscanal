import { Link } from "wouter";
import { getCitationNumbers } from "@/lib/bibliographyData";
import { cn } from "@/lib/utils";

const citeLinkClass =
  "font-cinzel text-[10px] tracking-wide text-[#2D5016] no-underline hover:text-[#1A3A0A] sm:text-xs";

/**
 * In-text CMOS-style numbered reference(s), e.g. [1] or [1][4].
 * Links to the matching entry on the Bibliography page.
 */
export function Cite({
  ids,
  className,
}: {
  ids: string | string[];
  className?: string;
}) {
  const refs = getCitationNumbers(ids);
  if (refs.length === 0) return null;

  return (
    <span className={cn("whitespace-nowrap", className)}>
      {refs.map(({ id, number }, index) => (
        <span key={id}>
          {index > 0 ? "\u2009" : null}
          <Link href={`/bibliography#ref-${id}`}>
            <span
              className={cn(citeLinkClass, className)}
              title={`Bibliography entry ${number}`}
            >
              [{number}]
            </span>
          </Link>
        </span>
      ))}
    </span>
  );
}
