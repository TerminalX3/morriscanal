import { ArticleFigure } from "@/components/ArticleFigure";
import { ArticlePageShell } from "@/components/ArticlePageShell";
import { TIMELINE_EVENTS } from "@/lib/canalData";
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

export default function Legacy() {
  const lease = TIMELINE_EVENTS.find((e) => e.year === 1871);
  const state = TIMELINE_EVENTS.find((e) => e.year === 1922);
  const abandoned = TIMELINE_EVENTS.find((e) => e.year === 1924);
  const nrhp = TIMELINE_EVENTS.find((e) => e.year === 1974);
  const asce = TIMELINE_EVENTS.find((e) => e.year === 1980);
  const landmark = TIMELINE_EVENTS.find(
    (e) => e.year === 1880 && e.title.includes("Historic Landmark"),
  );

  return (
    <ArticlePageShell
      title="After the Last Boat"
      subtitle="Decline, abandonment, and how the Morris Canal is remembered today."
    >
      <Section title="Railroads and slow decline">
        {lease ? (
          <p>
            <strong>{lease.year}.</strong> {lease.description}
          </p>
        ) : null}
        <p>
          Railroads could move bulk cargoes faster year-round. Even at peak
          tonnage, the canal’s owners faced mounting competition. Maintenance of
          planes, aqueducts, and embankments remained costly as traffic softened.
        </p>
        <ArticleFigure
          src={img("canal-boat").src}
          alt={img("canal-boat").title}
          caption={img("canal-boat").caption}
        />
      </Section>

      <Section title="State takeover and closure">
        {state ? (
          <p>
            <strong>{state.year}.</strong> {state.description}
          </p>
        ) : null}
        {abandoned ? (
          <p>
            <strong>{abandoned.year}.</strong> {abandoned.description}
          </p>
        ) : null}
        <p>
          Within a few years, water was drained and much of the line dismantled.
          Some structures were lost to development; others survived as bridges,
          road fills, or forgotten stone walls in the woods.
        </p>
        <ArticleFigure
          src={img("canal-aha").src}
          alt={img("canal-aha").title}
          caption={img("canal-aha").caption}
        />
      </Section>

      <Section title="Recognition and preservation">
        {landmark ? (
          <p>
            <strong>{landmark.year}.</strong> {landmark.description}
          </p>
        ) : null}
        {nrhp ? (
          <p>
            <strong>{nrhp.year}.</strong> {nrhp.description}
          </p>
        ) : null}
        {asce ? (
          <p>
            <strong>{asce.year}.</strong> {asce.description}
          </p>
        ) : null}
        <p>
          Hikers, local historians, and statewide groups continue to interpret
          canal remnants, publish walking guides, and mark anniversaries. This
          centennial project joins that long effort—using the map and archive to
          orient newcomers who may never walk the full corridor.
        </p>
        <ArticleFigure
          src={img("waterloo").src}
          alt={img("waterloo").title}
          caption="Places like Waterloo Village help visitors imagine canal-era streetscapes long after the water was drawn off."
        />
      </Section>
    </ArticlePageShell>
  );
}
