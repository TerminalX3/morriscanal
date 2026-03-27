// StatsPanel.tsx
// Heritage Broadside design — commemorative statistics display
// Shows key facts and figures about the Morris Canal

import { CANAL_STATS } from '@/lib/canalData';

const FREIGHT_DATA = [
  { year: 1845, tons: 58259 },
  { year: 1850, tons: 239682 },
  { year: 1855, tons: 553204 },
  { year: 1860, tons: 707631 },
  { year: 1865, tons: 716587 },
  { year: 1866, tons: 889220 },
  { year: 1870, tons: 707572 },
  { year: 1875, tons: 491816 },
  { year: 1880, tons: 503486 },
  { year: 1885, tons: 364554 },
  { year: 1890, tons: 394432 },
  { year: 1895, tons: 270931 },
  { year: 1900, tons: 125829 },
  { year: 1902, tons: 27392 },
];

const MAX_TONS = 889220;

export default function StatsPanel() {
  return (
    <div className="h-full overflow-y-auto bg-[#F8F3E8]">
      <div className="p-5">
        {/* Header */}
        <h2 className="font-cinzel font-bold text-[#2D5016] text-lg tracking-wide mb-1">
          Canal by the Numbers
        </h2>
        <p className="font-body text-[#4a3520]/70 text-sm mb-5">
          Key statistics and engineering achievements
        </p>

        {/* Key stats grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {[
            { label: 'Total Length', value: '107 miles', sub: '172 kilometers' },
            { label: 'Elevation Change', value: '1,674 ft', sub: 'World record at the time' },
            { label: 'Inclined Planes', value: '23', sub: 'Water-powered turbines' },
            { label: 'Canal Locks', value: '23', sub: 'Plus 23 planes = 46 total' },
            { label: 'Peak Tonnage', value: '889,220', sub: 'Long tons in 1866' },
            { label: 'Years Active', value: '95 years', sub: '1829 – 1924' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/60 border border-[#B8962E]/30 rounded p-3"
            >
              <div className="font-cinzel text-[9px] tracking-widest text-[#8B6914] uppercase mb-1">
                {stat.label}
              </div>
              <div className="font-playfair font-bold text-[#2D5016] text-xl leading-none">
                {stat.value}
              </div>
              <div className="font-body text-[#4a3520]/60 text-xs mt-1">{stat.sub}</div>
            </div>
          ))}
        </div>

        {/* Freight chart */}
        <div className="mb-6">
          <div className="divider-ornamental mb-3">
            <span className="font-cinzel text-[10px] tracking-widest text-[#B8962E] uppercase whitespace-nowrap">
              Annual Freight Tonnage
            </span>
          </div>
          <div className="space-y-1.5">
            {FREIGHT_DATA.map((d) => {
              const pct = (d.tons / MAX_TONS) * 100;
              const isPeak = d.year === 1866;
              return (
                <div key={d.year} className="flex items-center gap-2">
                  <div className="font-cinzel text-[10px] text-[#8B6914] w-10 text-right flex-shrink-0">
                    {d.year}
                  </div>
                  <div className="flex-1 h-4 bg-[#E8DCC8] rounded-sm overflow-hidden">
                    <div
                      className="h-full rounded-sm transition-all duration-500 flex items-center justify-end pr-1"
                      style={{
                        width: `${pct}%`,
                        backgroundColor: isPeak ? '#B8962E' : '#2D5016',
                      }}
                    >
                      {pct > 20 && (
                        <span className="text-white text-[8px] font-cinzel">
                          {(d.tons / 1000).toFixed(0)}k
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex items-center gap-4 mt-3">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-sm bg-[#2D5016]" />
              <span className="font-body text-[10px] text-[#4a3520]">Normal years</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-sm bg-[#B8962E]" />
              <span className="font-body text-[10px] text-[#4a3520]">Peak year (1866)</span>
            </div>
          </div>
        </div>

        {/* Counties traversed */}
        <div className="mb-6">
          <div className="divider-ornamental mb-3">
            <span className="font-cinzel text-[10px] tracking-widest text-[#B8962E] uppercase whitespace-nowrap">
              Counties Traversed
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {CANAL_STATS.counties.map((county) => (
              <div
                key={county}
                className="px-3 py-1.5 bg-[#2D5016]/10 border border-[#2D5016]/20 rounded font-cinzel text-[10px] tracking-wide text-[#2D5016]"
              >
                {county}
              </div>
            ))}
          </div>
        </div>

        {/* Engineering team */}
        <div>
          <div className="divider-ornamental mb-3">
            <span className="font-cinzel text-[10px] tracking-widest text-[#B8962E] uppercase whitespace-nowrap">
              The Engineers
            </span>
          </div>
          <div className="space-y-3">
            {[
              {
                name: 'George P. MacCulloch',
                role: 'Visionary & Promoter',
                note: 'Morristown businessman who conceived the canal idea while visiting Lake Hopatcong in 1822.',
              },
              {
                name: 'Ephraim Beach',
                role: 'Principal Engineer',
                note: 'Former assistant engineer on the Erie Canal, hired to survey and oversee construction.',
              },
              {
                name: 'James Renwick',
                role: 'Inclined Plane Designer',
                note: 'Columbia University professor who devised the revolutionary water-powered inclined plane system.',
              },
              {
                name: 'David Bates Douglass',
                role: 'Chief Plane Engineer',
                note: 'West Point engineer who standardized the inclined plane designs and supervised their construction.',
              },
            ].map((person) => (
              <div key={person.name} className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-[#2D5016]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="font-cinzel text-[#2D5016] text-xs font-bold">
                    {person.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </span>
                </div>
                <div>
                  <div className="font-playfair font-semibold text-[#2C1A0E] text-sm">{person.name}</div>
                  <div className="font-cinzel text-[9px] tracking-wide text-[#8B6914] uppercase">{person.role}</div>
                  <p className="font-body text-xs text-[#4a3520]/80 mt-0.5 leading-relaxed">{person.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
