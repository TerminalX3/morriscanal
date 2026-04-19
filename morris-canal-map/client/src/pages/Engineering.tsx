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

const ENGINEERS = [
  {
    name: "George P. MacCulloch",
    role: "Visionary & promoter",
    note: "Morristown businessman who conceived the canal idea while visiting Lake Hopatcong in 1822.",
  },
  {
    name: "Ephraim Beach",
    role: "Principal engineer",
    note: "Former assistant engineer on the Erie Canal, hired to survey and oversee construction.",
  },
  {
    name: "James Renwick",
    role: "Inclined plane designer",
    note: "Columbia University professor who devised the water-powered inclined plane system.",
  },
  {
    name: "David Bates Douglass",
    role: "Chief plane engineer",
    note: "West Point engineer who standardized plane designs and supervised construction.",
  },
] as const;

export default function Engineering() {
  const enlargement = TIMELINE_EVENTS.find((e) => e.year === 1841);
  const turbines = TIMELINE_EVENTS.find((e) => e.year === 1860);
  const orange = TIMELINE_EVENTS.find((e) => e.year === 1902);

  return (
    <ArticlePageShell
      title="Engineering the Mountain-Climbing Canal"
      subtitle="Locks, inclined planes, and the people who made a 1,674-foot climb possible."
    >
      <Section title="By the numbers">
        <ul className="list-inside list-disc space-y-2 marker:text-[#B8962E]">
          <li>
            <strong>Length:</strong> {CANAL_STATS.length}
          </li>
          <li>
            <strong>Total lift and fall:</strong> {CANAL_STATS.elevationChange}{" "}
            — a world-class challenge for canal builders.
          </li>
          <li>
            <strong>Inclined planes:</strong> {CANAL_STATS.inclinedPlanes}{" "}
            cable railways powered by water at the steepest grades.
          </li>
          <li>
            <strong>Locks:</strong> {CANAL_STATS.locks} conventional chambers
            where the slope was moderate enough for stair-stepping water levels.
          </li>
          <li>
            <strong>Summit:</strong> {CANAL_STATS.maxElevation} at Lake Hopatcong,
            dividing westward and eastward flows.
          </li>
          <li>
            <strong>Peak tonnage:</strong> {CANAL_STATS.peakTonnage}.
          </li>
        </ul>
        <ArticleFigure
          src={img("planes-diagram").src}
          alt={img("planes-diagram").title}
          caption={img("planes-diagram").caption}
        />
      </Section>

      <Section title="Locks and levels">
        <p>
          Like other canals of the era, the Morris used lift locks—pairs of
          gates trapping water so boats could move up or down a “staircase.”
          Where the terrain was too steep for practical lock flights, planners
          turned to a different machine entirely: the inclined plane.
        </p>
        <ArticleFigure
          src={img("inclined-plane").src}
          alt={img("inclined-plane").title}
          caption={img("inclined-plane").caption}
        />
      </Section>

      <Section title="Inclined planes">
        <p>
          A plane cradled a boat on a carriage, then hauled it on rails along a
          slope—think of a funicular for vessels. Water turbines (and in one
          late case, electric power) wound cable drums. Double-tracked planes
          could pass boats traveling in opposite directions, a major throughput
          advantage at busy sites.
        </p>
        {enlargement ? (
          <p>
            <strong>{enlargement.year}.</strong> {enlargement.description}
          </p>
        ) : null}
        {turbines ? (
          <p>
            <strong>{turbines.year}.</strong> {turbines.description}
          </p>
        ) : null}
        {orange ? (
          <p>
            <strong>{orange.year}.</strong> {orange.description}
          </p>
        ) : null}
        <ArticleFigure
          src={img("map-1827").src}
          alt={img("map-1827").title}
          caption="Early survey mapping helped engineers plan lifts, locks, and the summit crossing before construction advanced up the valleys."
        />
      </Section>

      <Section title="Counties and corridor">
        <p>
          The canal tied together communities across:{" "}
          {CANAL_STATS.counties.join(", ")} counties—linking the Lehigh and
          Delaware coal country to Newark, Jersey City, and seagoing trade.
        </p>
      </Section>

      <Section title="Designers and engineers">
        <ul className="space-y-5">
          {ENGINEERS.map((person) => (
            <li key={person.name} className="border-l-4 border-[#B8962E] pl-4">
              <p className="font-playfair text-lg font-semibold text-[#2C1A0E]">
                {person.name}
              </p>
              <p className="font-cinzel text-xs tracking-wide text-[#8B6914] uppercase">
                {person.role}
              </p>
              <p className="mt-1">{person.note}</p>
            </li>
          ))}
        </ul>
      </Section>
    </ArticlePageShell>
  );
}
