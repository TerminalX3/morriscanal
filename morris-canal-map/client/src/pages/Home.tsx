// Home.tsx — Morris Canal Centennial Interactive Map
// Layout: header → site nav → image strip → filters → map (narrower) + wider detail panel

import { useState, useCallback } from "react";
import {
  Map,
  Clock,
  BarChart2,
  ChevronDown,
  ChevronUp,
  Menu,
  X,
} from "lucide-react";
import CanalMap from "@/components/CanalMap";
import { HeaderImageStrip } from "@/components/HeaderImageStrip";
import LandmarkPanel from "@/components/LandmarkPanel";
import { SiteNavBar } from "@/components/SiteNavBar";
import Timeline from "@/components/Timeline";
import StatsPanel from "@/components/StatsPanel";
import { type Landmark } from "@/lib/canalData";

type TabId = "landmark" | "timeline" | "stats";

const TABS: { id: TabId; label: string; icon: React.ReactNode }[] = [
  { id: "landmark", label: "Landmark", icon: <Map className="h-3.5 w-3.5" /> },
  { id: "timeline", label: "Timeline", icon: <Clock className="h-3.5 w-3.5" /> },
  { id: "stats", label: "Statistics", icon: <BarChart2 className="h-3.5 w-3.5" /> },
];

const FILTER_OPTIONS = [
  { value: "all", label: "All Sites" },
  { value: "terminus", label: "Termini" },
  { value: "inclined-plane", label: "Inclined Planes" },
  { value: "lock", label: "Locks" },
  { value: "town", label: "Towns" },
  { value: "aqueduct", label: "Aqueducts" },
  { value: "summit", label: "Summit" },
];

export default function Home() {
  const [selectedLandmark, setSelectedLandmark] = useState<Landmark | null>(null);
  const [activeTab, setActiveTab] = useState<TabId>("landmark");
  const [filterType, setFilterType] = useState("all");
  const [headerCollapsed, setHeaderCollapsed] = useState(false);
  const [mobilePanel, setMobilePanel] = useState(false);

  const handleLandmarkSelect = useCallback((landmark: Landmark | null) => {
    setSelectedLandmark(landmark);
    setActiveTab("landmark");
    setMobilePanel(true);
  }, []);

  const handleClose = useCallback(() => {
    setSelectedLandmark(null);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-[#F8F3E8]">
      <header
        className={`relative flex-shrink-0 overflow-hidden transition-all duration-300 ${
          headerCollapsed ? "h-12" : "h-auto"
        }`}
        style={{
          background:
            "linear-gradient(135deg, #1A3A0A 0%, #2D5016 40%, #1A3A0A 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 8px,
              rgba(184,150,46,0.3) 8px,
              rgba(184,150,46,0.3) 9px
            )`,
          }}
        />

        {headerCollapsed ? (
          <div className="relative z-10 flex h-full items-center justify-between px-4">
            <div className="flex items-center gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full border border-[#B8962E]/50 bg-[#B8962E]/30">
                <div className="h-2 w-2 rounded-full bg-[#B8962E]" />
              </div>
              <span className="font-cinzel text-sm tracking-widest text-white/90">
                MORRIS CANAL CENTENNIAL · 1824–1924
              </span>
            </div>
            <button
              type="button"
              onClick={() => setHeaderCollapsed(false)}
              className="text-white/60 transition-colors hover:text-white/90"
              aria-label="Expand header"
            >
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
        ) : (
          <div className="relative z-10 px-6 py-4">
            <div className="mb-3 flex items-center gap-3">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#B8962E]/60 to-[#B8962E]/60" />
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-1.5 w-1.5 rounded-full bg-[#B8962E]/60" />
                ))}
              </div>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#B8962E]/60 to-[#B8962E]/60" />
            </div>

            <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-start">
              <div className="min-w-0 flex-1">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <div className="rounded border border-[#B8962E]/50 bg-[#B8962E]/10 px-3 py-1">
                    <span className="font-cinzel text-[10px] tracking-[0.2em] text-[#B8962E] uppercase">
                      Centennial Commemoration · 1924–2024
                    </span>
                  </div>
                </div>

                <h1 className="font-display text-2xl leading-tight tracking-wide text-white md:text-3xl">
                  The Morris Canal
                </h1>
                <div className="font-cinzel mt-0.5 text-sm tracking-[0.15em] text-[#B8962E]">
                  NEW JERSEY&apos;S MOUNTAIN-CLIMBING WATERWAY
                </div>

                <p className="font-fell mt-2 max-w-xl text-sm italic leading-relaxed text-white/70">
                  &ldquo;This Morris canal is certainly an extraordinary work; it
                  not only varies its level sixteen hundred feet, but at one
                  point runs along the side of a mountain thirty feet above the
                  tops of the highest buildings.&rdquo;
                  <span className="not-italic text-xs text-white/50">
                    {" "}
                    — Fanny Trollope, 1832
                  </span>
                </p>
              </div>

              <div className="hidden flex-shrink-0 flex-col items-end gap-2 md:flex">
                <div className="text-right">
                  <div className="font-cinzel text-[9px] tracking-widest text-[#B8962E] uppercase">
                    Route
                  </div>
                  <div className="font-playfair text-sm text-white">
                    Phillipsburg → Jersey City
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-cinzel text-[9px] tracking-widest text-[#B8962E] uppercase">
                    Length
                  </div>
                  <div className="font-playfair text-sm text-white">
                    107 Miles · 1,674 ft Elevation
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-cinzel text-[9px] tracking-widest text-[#B8962E] uppercase">
                    Active
                  </div>
                  <div className="font-playfair text-sm text-white">1829 – 1924</div>
                </div>
                <button
                  type="button"
                  onClick={() => setHeaderCollapsed(true)}
                  className="mt-1 text-white/40 transition-colors hover:text-white/70"
                  aria-label="Collapse header"
                >
                  <ChevronUp className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="mt-3 flex items-center gap-3">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#B8962E]/60 to-[#B8962E]/60" />
              <div className="font-cinzel text-[8px] tracking-[0.3em] text-[#B8962E]/60">
                ✦ ✦ ✦
              </div>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#B8962E]/60 to-[#B8962E]/60" />
            </div>
          </div>
        )}
      </header>

      <SiteNavBar />

      <HeaderImageStrip />

      <div
        className="flex flex-shrink-0 flex-wrap items-center justify-between gap-2 border-b border-[#B8962E]/30 px-4 py-2"
        style={{ backgroundColor: "#EDE0C4" }}
      >
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-cinzel hidden text-[10px] tracking-widest text-[#8B6914] uppercase sm:block">
            Filter:
          </span>
          {FILTER_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => setFilterType(opt.value)}
              className={`rounded border px-2.5 py-1 font-cinzel text-[10px] tracking-wide transition-all duration-150 ${
                filterType === opt.value
                  ? "border-[#2D5016] bg-[#2D5016] text-white"
                  : "border-[#B8962E]/40 bg-transparent text-[#4a3520] hover:border-[#B8962E]"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setMobilePanel(!mobilePanel)}
          className="flex items-center gap-1.5 rounded bg-[#2D5016] px-3 py-1.5 font-cinzel text-xs tracking-wide text-white md:hidden"
        >
          {mobilePanel ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          {mobilePanel ? "Map" : "Info"}
        </button>
      </div>

      {/* Map + panel: fills at least viewport below chrome; page scrolls if content is taller */}
      <div className="flex min-h-0 w-full flex-1 flex-col overflow-hidden md:min-h-[calc(100dvh-12rem)] md:flex-row">
        <div
          className={`relative flex min-h-0 min-w-0 flex-1 flex-col md:w-[44%] md:max-w-[46%] md:flex-none md:flex-shrink-0 lg:w-[42%] lg:max-w-[44%] ${
            mobilePanel ? "hidden md:flex" : "flex"
          }`}
        >
          <div className="pointer-events-none absolute left-2 top-2 z-10 h-6 w-6 border-l-2 border-t-2 border-[#B8962E]/40" />
          <div className="pointer-events-none absolute right-2 top-2 z-10 h-6 w-6 border-r-2 border-t-2 border-[#B8962E]/40" />
          <div className="pointer-events-none absolute bottom-2 left-2 z-10 h-6 w-6 border-b-2 border-l-2 border-[#B8962E]/40" />
          <div className="pointer-events-none absolute bottom-2 right-2 z-10 h-6 w-6 border-b-2 border-r-2 border-[#B8962E]/40" />

          <CanalMap
            onLandmarkSelect={handleLandmarkSelect}
            selectedLandmark={selectedLandmark}
            filterType={filterType}
            layoutKey={mobilePanel ? "info" : "map"}
          />

          {!selectedLandmark && (
            <div className="pointer-events-none absolute bottom-16 left-1/2 z-10 max-w-[90vw] -translate-x-1/2 rounded border border-[#B8962E] bg-[#F8F3E8]/95 px-4 py-2.5 shadow-lg">
              <p className="text-center font-fell text-sm italic text-[#4a3520]">
                Click any marker to explore a historical site
              </p>
            </div>
          )}
        </div>

        <div
          className={`
            flex min-h-0 min-w-0 flex-1 flex-col border-l border-[#B8962E]/30
            md:min-w-[min(100%,28rem)] lg:min-w-[32rem]
            ${mobilePanel ? "flex w-full" : "hidden md:flex"}
          `}
          style={{ backgroundColor: "#F8F3E8" }}
        >
          <div
            className="flex flex-shrink-0 border-b border-[#B8962E]/30"
            style={{ backgroundColor: "#EDE0C4" }}
          >
            {TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-1 items-center justify-center gap-1.5 py-3 font-cinzel text-[10px] tracking-wide transition-all duration-150 ${
                  activeTab === tab.id
                    ? "border-b-2 border-[#2D5016] bg-[#F8F3E8] text-[#2D5016]"
                    : "border-b-2 border-transparent text-[#4a3520]/65 hover:bg-[#E8D8B8]/40 hover:text-[#4a3520]"
                }`}
              >
                {tab.icon}
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>

          <div className="min-h-0 flex-1 overflow-hidden">
            {activeTab === "landmark" && (
              <LandmarkPanel landmark={selectedLandmark} onClose={handleClose} />
            )}
            {activeTab === "timeline" && <Timeline />}
            {activeTab === "stats" && <StatsPanel />}
          </div>
        </div>
      </div>

      <footer
        className="flex flex-shrink-0 flex-wrap items-center justify-between gap-2 border-t border-[#B8962E]/30 px-4 py-2"
        style={{ backgroundColor: "#1A3A0A" }}
      >
        <div className="flex items-center gap-3">
          <div className="h-1 w-1 rounded-full bg-[#B8962E]" />
          <span className="font-cinzel text-[9px] tracking-widest text-[#B8962E]/70 uppercase">
            Morris Canal · 1824–1924 · New Jersey
          </span>
          <div className="h-1 w-1 rounded-full bg-[#B8962E]" />
        </div>
        <div className="font-body text-[10px] italic text-white/30">
          National Register of Historic Places · 1974
        </div>
      </footer>
    </div>
  );
}
