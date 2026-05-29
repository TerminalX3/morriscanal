import { Cite } from "@/components/Cite";
import { cn } from "@/lib/utils";

export function ArticleFigure({
  src,
  alt,
  caption,
  citationId,
  citationIds,
  className,
}: {
  src: string;
  alt: string;
  caption?: string;
  /** Single bibliography entry id */
  citationId?: string;
  /** Multiple bibliography entry ids (shown in numeric order) */
  citationIds?: string[];
  className?: string;
}) {
  const ids = citationIds ?? (citationId ? [citationId] : []);

  return (
    <figure className={cn("my-6", className)}>
      <div className="overflow-hidden rounded-lg border border-[#B8962E]/45 shadow-md">
        <img
          src={src}
          alt={alt}
          className="max-h-[280px] w-full object-cover sm:max-h-[340px]"
          loading="lazy"
        />
      </div>
      {caption ? (
        <figcaption className="font-fell mt-2 text-sm italic leading-relaxed text-[#4a3520] sm:text-base">
          {caption}
          {ids.length > 0 ? (
            <>
              {" "}
              <Cite ids={ids} />
            </>
          ) : null}
        </figcaption>
      ) : null}
    </figure>
  );
}
