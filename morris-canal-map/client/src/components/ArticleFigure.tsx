import { cn } from "@/lib/utils";

export function ArticleFigure({
  src,
  alt,
  caption,
  className,
}: {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}) {
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
        </figcaption>
      ) : null}
    </figure>
  );
}
