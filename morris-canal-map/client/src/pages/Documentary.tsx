import { ArticlePageShell } from "@/components/ArticlePageShell";

const EMBED_SRC = import.meta.env.VITE_DOCUMENTARY_EMBED_SRC as
  | string
  | undefined;

function youtubeWatchToEmbed(url: string): string | null {
  try {
    const u = new URL(url.trim());
    if (u.hostname.includes("youtube.com") && u.pathname === "/watch") {
      const id = u.searchParams.get("v");
      if (id) return `https://www.youtube.com/embed/${id}`;
    }
    if (u.hostname === "youtu.be") {
      const id = u.pathname.replace(/^\//, "");
      if (id) return `https://www.youtube.com/embed/${id}`;
    }
  } catch {
    /* ignore */
  }
  return null;
}

function resolveEmbedSrc(): string | null {
  const raw = EMBED_SRC?.trim();
  if (!raw) return null;
  if (raw.includes("youtube.com/embed/") || raw.includes("player.vimeo.com")) {
    return raw;
  }
  return youtubeWatchToEmbed(raw);
}

export default function Documentary() {
  const embedSrc = resolveEmbedSrc();

  return (
    <ArticlePageShell
      title="Documentary"
      subtitle="The companion film to this centennial project—full narrative for viewers at home."
    >
      <section className="space-y-8">
        {embedSrc ? (
          <div className="overflow-hidden rounded-lg border-2 border-[#B8962E]/50 shadow-lg">
            <div className="relative aspect-video w-full bg-black">
              <iframe
                title="Morris Canal documentary"
                src={embedSrc}
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        ) : (
          <div
            className="flex min-h-[min(56vw,420px)] flex-col items-center justify-center rounded-lg border-2 border-[#B8962E]/40 bg-black px-6 py-16 text-center sm:min-h-[360px]"
            role="img"
            aria-label="Documentary video placeholder"
          >
            <p className="font-cinzel text-lg tracking-[0.2em] text-[#B8962E] uppercase sm:text-xl">
              Documentary
            </p>
            <p className="font-playfair mt-3 text-2xl text-white/90 sm:text-3xl">
              Film placeholder
            </p>
            <p className="font-body mt-4 max-w-md text-sm text-white/50 sm:text-base">
              The documentary will appear here when available.
            </p>
          </div>
        )}

        <section className="border-t border-[#B8962E]/30 pt-8">
          <h2 className="font-cinzel mb-4 text-lg font-bold tracking-wide text-[#2D5016] sm:text-xl">
            About the documentary
          </h2>
          <div className="font-body space-y-4 text-base leading-relaxed text-[#2C1A0E] sm:text-lg">
            <p>
              This film is the narrative heart of the Morris Canal centennial and is a
              single, continuous story that carries viewers from the Delaware
              River to the Hudson, across locks, inclined planes, and the lives
              of the people who built and worked the waterway.
            </p>
            <p>
              Through archival images, maps, and on-the-ground footage of surviving
              sites, it explains{" "}
              <strong className="font-semibold text-[#2D5016]">
                why the canal mattered
              </strong>{" "}
              to New Jersey and the nation: moving coal and iron when America was
              industrializing, and doing it over terrain that engineers once
              thought impossible for a canal.
            </p>
            <p>
              The documentary also introduces the{" "}
              <strong className="font-semibold text-[#2D5016]">
                mountain-climbing technology
              </strong>{" "}
              that made the Morris famous - water-powered planes and long levels
              through the highlands - in terms that land on whether you have read a
              single history book or not.
            </p>
            <p>
              It also follows the canal into{" "}
              <strong className="font-semibold text-[#2D5016]">
                decline, abandonment, and rediscovery
              </strong>
              , so audiences who never visit an exhibit still understand how the
              corridor was lost, how pieces were saved, and why the National
              Register and engineering landmarks still celebrate the achievement
              today.
            </p>
          </div>
        </section>
      </section>
    </ArticlePageShell>
  );
}
