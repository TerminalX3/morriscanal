import { Link } from "wouter";
import { ArticleFigure } from "@/components/ArticleFigure";
import { ArticlePageShell } from "@/components/ArticlePageShell";
import { CANAL_STATS, TIMELINE_EVENTS } from "@/lib/canalData";
import { GALLERY_IMAGES } from "@/lib/galleryData";

const img = (id: string) => GALLERY_IMAGES.find((g) => g.id === id)!;

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-b border-[#B8962E]/25 pb-8 last:border-0">
      <h2 className="font-cinzel mb-3 text-lg font-bold tracking-wide text-[#2D5016] sm:text-xl">
        {title}
      </h2>
      <div className="font-body space-y-3 text-base leading-relaxed text-[#2C1A0E] sm:text-lg">
        {children}
      </div>
    </section>
  );
}

export default function Overview() {
  const charter = TIMELINE_EVENTS.find((e) => e.year === 1822);
  const opening = TIMELINE_EVENTS.find((e) => e.year === 1831);
  const peak = TIMELINE_EVENTS.find((e) => e.year === 1866);
  const end = TIMELINE_EVENTS.find((e) => e.year === 1924);
  const register = TIMELINE_EVENTS.find((e) => e.year === 1974);

  return (
    <ArticlePageShell
      title="What Was the Morris Canal?"
      subtitle="A short introduction for visitors exploring this site on its own—without the exhibit hall or the film."
    >
      <Section title="Why it mattered">
        <p>
          The Morris Canal was a 107-mile waterway across New Jersey—from the
          Delaware River at Phillipsburg to the Hudson River at Jersey City. It
          climbed and dropped about {CANAL_STATS.elevationChange}, an
          extraordinary feat for the 1820s and 1830s. For much of the 19th
          century it moved coal, iron ore, and farm goods between Pennsylvania’s
          mines, New Jersey’s growing cities, and New York Harbor.
        </p>
        <p>
          If you are new to the story, think of it as part industrial highway,
          part mountain railway—only with boats, mules, locks, and{" "}
          <strong>inclined planes</strong> instead of steam on rails.
        </p>
        <ArticleFigure
          src={img("hero").src}
          alt={img("hero").title}
          caption={img("hero").caption}
        />
      </Section>

      <Section title="Dream and charter">
        {charter ? (
          <p>
            <strong>{charter.year}.</strong> {charter.description}
          </p>
        ) : null}
        <p>
          Promoters imagined a reliable route over the “backbone” of northern
          New Jersey. Surveyors and engineers mapped a line through Warren,
          Sussex, Morris, Passaic, Essex, and Hudson counties—terrain that would
          have broken a conventional canal.
        </p>
      </Section>

      <Section title="Opening and everyday life">
        {opening ? (
          <p>
            <strong>{opening.year}.</strong> {opening.description}
          </p>
        ) : null}
        <p>
          Families lived in canal towns. Boatmen poled and mule-drove long,
          narrow vessels. Lock tenders timed gates. Plane crews managed the
          cable railways that lifted boats up and lowered them down the steepest
          slopes. The canal was noisy, muddy, and essential to the regional
          economy.
        </p>
        <ArticleFigure
          src={img("waterloo").src}
          alt={img("waterloo").title}
          caption={img("waterloo").caption}
        />
      </Section>

      <Section title="Peak years">
        {peak ? (
          <p>
            <strong>{peak.year}.</strong> {peak.description}
          </p>
        ) : null}
        <p>
          Improvements—wider chambers, stronger cables, and eventually more
          efficient turbines—kept traffic moving until railroads began to
          outcompete the water route.
        </p>
      </Section>

      <Section title="Closure and memory">
        {end ? (
          <p>
            <strong>{end.year}.</strong> {end.description}
          </p>
        ) : null}
        {register ? (
          <p>
            <strong>{register.year}.</strong> {register.description}
          </p>
        ) : null}
        <p>
          Much of the prism was filled or built over, yet segments, structures,
          and place names survive. Local historians, hiking trails, and
          commemorations like this centennial map help new audiences find the
          canal again.
        </p>
        <ArticleFigure
          src={img("map-1827").src}
          alt={img("map-1827").title}
          caption={img("map-1827").caption}
        />
      </Section>

      <Section title="How to use this website">
        <p>
          Use the <strong>Interactive Map</strong> to explore numbered sites and
          read longer articles in the side panel. The <strong>Timeline</strong>{" "}
          and <strong>Statistics</strong> tabs recycle the same research in
          different formats—pick whichever suits you. For
          deeper engineering detail, see{" "}
          <Link href="/engineering">
            <span className="font-semibold text-[#2D5016] underline">
              Engineering
            </span>
          </Link>
          ; for abandonment and preservation, see{" "}
          <Link href="/legacy">
            <span className="font-semibold text-[#2D5016] underline">Legacy</span>
          </Link>
          .
        </p>
      </Section>
    </ArticlePageShell>
  );
}
