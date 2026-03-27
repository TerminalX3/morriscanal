// Home.tsx
// Morris Canal Centennial Interactive Map — Main Page
// Design: 19th-Century Commemorative Heritage Broadside
// Layout: Full-bleed map (left 60%) + right panel with tabs (40%)
// Colors: Parchment #F8F3E8, Forest Green #2D5016, Burgundy #6B1F2A, Aged Gold #B8962E
// Typography: Cinzel Decorative (display), Playfair Display (subheadings), Crimson Text (body)

import { useState, useCallback } from 'react';
import { Map, Clock, BarChart2, Image, ChevronDown, ChevronUp, Menu, X } from 'lucide-react';
import CanalMap from '@/components/CanalMap';
import LandmarkPanel from '@/components/LandmarkPanel';
import Timeline from '@/components/Timeline';
import StatsPanel from '@/components/StatsPanel';
import Gallery from '@/components/Gallery';
import { LANDMARKS, type Landmark } from '@/lib/canalData';

type TabId = 'landmark' | 'timeline' | 'stats' | 'gallery';

const TABS: { id: TabId; label: string; icon: React.ReactNode }[] = [
  { id: 'landmark', label: 'Landmark', icon: <Map className="w-3.5 h-3.5" /> },
  { id: 'timeline', label: 'Timeline', icon: <Clock className="w-3.5 h-3.5" /> },
  { id: 'stats', label: 'Statistics', icon: <BarChart2 className="w-3.5 h-3.5" /> },
  { id: 'gallery', label: 'Gallery', icon: <Image className="w-3.5 h-3.5" /> },
];

const FILTER_OPTIONS = [
  { value: 'all', label: 'All Sites' },
  { value: 'terminus', label: 'Termini' },
  { value: 'inclined-plane', label: 'Inclined Planes' },
  { value: 'lock', label: 'Locks' },
  { value: 'town', label: 'Towns' },
  { value: 'aqueduct', label: 'Aqueducts' },
  { value: 'summit', label: 'Summit' },
];

export default function Home() {
  const [selectedLandmark, setSelectedLandmark] = useState<Landmark | null>(null);
  const [activeTab, setActiveTab] = useState<TabId>('landmark');
  const [filterType, setFilterType] = useState('all');
  const [headerCollapsed, setHeaderCollapsed] = useState(false);
  const [mobilePanel, setMobilePanel] = useState(false);

  const handleLandmarkSelect = useCallback((landmark: Landmark | null) => {
    setSelectedLandmark(landmark);
    setActiveTab('landmark');
    setMobilePanel(true);
  }, []);

  const handleClose = useCallback(() => {
    setSelectedLandmark(null);
  }, []);

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-[#F8F3E8]">

      {/* ═══════════════════════════════════════════════════
          HEADER — Commemorative Banner
      ═══════════════════════════════════════════════════ */}
      <header
        className={`flex-shrink-0 relative overflow-hidden transition-all duration-300 ${
          headerCollapsed ? 'h-12' : 'h-auto'
        }`}
        style={{
          background: 'linear-gradient(135deg, #1A3A0A 0%, #2D5016 40%, #1A3A0A 100%)',
        }}
      >
        {/* Decorative texture */}
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

        {/* Collapsed state */}
        {headerCollapsed ? (
          <div className="relative z-10 h-full flex items-center justify-between px-4">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-[#B8962E]/30 border border-[#B8962E]/50 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#B8962E]" />
              </div>
              <span className="font-cinzel text-white/90 text-sm tracking-widest">
                MORRIS CANAL CENTENNIAL · 1824–1924
              </span>
            </div>
            <button
              onClick={() => setHeaderCollapsed(false)}
              className="text-white/60 hover:text-white/90 transition-colors"
            >
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div className="relative z-10 px-6 py-4">
            {/* Top decorative border */}
            <div className="flex items-center gap-3 mb-3">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#B8962E]/60 to-[#B8962E]/60" />
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#B8962E]/60" />
                ))}
              </div>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent via-[#B8962E]/60 to-[#B8962E]/60" />
            </div>

            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                {/* Centennial badge */}
                <div className="flex items-center gap-2 mb-2">
                  <div className="px-3 py-1 border border-[#B8962E]/50 bg-[#B8962E]/10 rounded">
                    <span className="font-cinzel text-[#B8962E] text-[10px] tracking-[0.2em] uppercase">
                      Centennial Commemoration · 1924–2024
                    </span>
                  </div>
                </div>

                {/* Main title */}
                <h1 className="font-display text-white text-2xl md:text-3xl leading-tight tracking-wide">
                  The Morris Canal
                </h1>
                <div className="font-cinzel text-[#B8962E] text-sm tracking-[0.15em] mt-0.5">
                  NEW JERSEY'S MOUNTAIN-CLIMBING WATERWAY
                </div>

                {/* Subtitle */}
                <p className="font-fell italic text-white/70 text-sm mt-2 max-w-xl leading-relaxed">
                  "This Morris canal is certainly an extraordinary work; it not only varies its level sixteen hundred feet,
                  but at one point runs along the side of a mountain thirty feet above the tops of the highest buildings."
                  <span className="not-italic text-white/50 text-xs"> — Fanny Trollope, 1832</span>
                </p>
              </div>

              {/* Right stats */}
              <div className="hidden md:flex flex-col items-end gap-2 flex-shrink-0">
                <div className="text-right">
                  <div className="font-cinzel text-[#B8962E] text-[9px] tracking-widest uppercase">Route</div>
                  <div className="font-playfair text-white text-sm">Phillipsburg → Jersey City</div>
                </div>
                <div className="text-right">
                  <div className="font-cinzel text-[#B8962E] text-[9px] tracking-widest uppercase">Length</div>
                  <div className="font-playfair text-white text-sm">107 Miles · 1,674 ft Elevation</div>
                </div>
                <div className="text-right">
                  <div className="font-cinzel text-[#B8962E] text-[9px] tracking-widest uppercase">Active</div>
                  <div className="font-playfair text-white text-sm">1829 – 1924</div>
                </div>
                <button
                  onClick={() => setHeaderCollapsed(true)}
                  className="mt-1 text-white/40 hover:text-white/70 transition-colors"
                >
                  <ChevronUp className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Bottom decorative border */}
            <div className="flex items-center gap-3 mt-3">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#B8962E]/60 to-[#B8962E]/60" />
              <div className="font-cinzel text-[#B8962E]/60 text-[8px] tracking-[0.3em]">✦ ✦ ✦</div>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent via-[#B8962E]/60 to-[#B8962E]/60" />
            </div>
          </div>
        )}
      </header>

      {/* ═══════════════════════════════════════════════════
          TOOLBAR — Filter & Navigation
      ═══════════════════════════════════════════════════ */}
      <div
        className="flex-shrink-0 flex items-center justify-between px-4 py-2 border-b border-[#B8962E]/30"
        style={{ backgroundColor: '#EDE0C4' }}
      >
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-cinzel text-[10px] tracking-widest text-[#8B6914] uppercase hidden sm:block">
            Filter:
          </span>
          {FILTER_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setFilterType(opt.value)}
              className={`px-2.5 py-1 text-[10px] font-cinzel tracking-wide rounded border transition-all duration-150 ${
                filterType === opt.value
                  ? 'bg-[#2D5016] text-white border-[#2D5016]'
                  : 'bg-transparent text-[#4a3520] border-[#B8962E]/40 hover:border-[#B8962E]'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Mobile panel toggle */}
        <button
          onClick={() => setMobilePanel(!mobilePanel)}
          className="md:hidden flex items-center gap-1.5 px-3 py-1.5 bg-[#2D5016] text-white rounded text-xs font-cinzel tracking-wide"
        >
          {mobilePanel ? <X className="w-3.5 h-3.5" /> : <Menu className="w-3.5 h-3.5" />}
          {mobilePanel ? 'Map' : 'Info'}
        </button>
      </div>

      {/* ═══════════════════════════════════════════════════
          MAIN CONTENT — Map + Right Panel
      ═══════════════════════════════════════════════════ */}
      <div className="flex-1 flex overflow-hidden min-h-0">

        {/* Left: Interactive Map */}
        <div className={`relative flex-1 min-w-0 ${mobilePanel ? 'hidden md:flex' : 'flex'} flex-col`}>
          {/* Decorative frame corners */}
          <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-[#B8962E]/40 z-10 pointer-events-none" />
          <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-[#B8962E]/40 z-10 pointer-events-none" />
          <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-[#B8962E]/40 z-10 pointer-events-none" />
          <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-[#B8962E]/40 z-10 pointer-events-none" />

          <CanalMap
            onLandmarkSelect={handleLandmarkSelect}
            selectedLandmark={selectedLandmark}
            filterType={filterType}
          />

          {/* Instruction overlay (shown when nothing selected) */}
          {!selectedLandmark && (
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 bg-[#F8F3E8]/95 border border-[#B8962E] rounded shadow-lg px-4 py-2.5 pointer-events-none z-10">
              <p className="font-fell italic text-[#4a3520] text-sm text-center whitespace-nowrap">
                Click any marker to explore a historical site
              </p>
            </div>
          )}
        </div>

        {/* Right: Information Panel */}
        <div
          className={`
            flex-shrink-0 flex flex-col border-l border-[#B8962E]/30
            ${mobilePanel ? 'flex w-full md:w-[400px]' : 'hidden md:flex md:w-[400px]'}
          `}
          style={{ backgroundColor: '#F8F3E8' }}
        >
          {/* Tab navigation */}
          <div
            className="flex-shrink-0 flex border-b border-[#B8962E]/30"
            style={{ backgroundColor: '#EDE0C4' }}
          >
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center gap-1.5 py-3 text-[10px] font-cinzel tracking-wide transition-all duration-150 border-b-2 ${
                  activeTab === tab.id
                    ? 'border-[#2D5016] text-[#2D5016] bg-[#F8F3E8]'
                    : 'border-transparent text-[#4a3520]/60 hover:text-[#4a3520] hover:bg-[#E8D8B8]/40'
                }`}
              >
                {tab.icon}
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="flex-1 overflow-hidden min-h-0">
            {activeTab === 'landmark' && (
              <LandmarkPanel landmark={selectedLandmark} onClose={handleClose} />
            )}
            {activeTab === 'timeline' && <Timeline />}
            {activeTab === 'stats' && <StatsPanel />}
            {activeTab === 'gallery' && <Gallery />}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════
          FOOTER — Commemorative
      ═══════════════════════════════════════════════════ */}
      <footer
        className="flex-shrink-0 px-4 py-2 border-t border-[#B8962E]/30 flex items-center justify-between"
        style={{ backgroundColor: '#1A3A0A' }}
      >
        <div className="flex items-center gap-3">
          <div className="w-1 h-1 rounded-full bg-[#B8962E]" />
          <span className="font-cinzel text-[#B8962E]/70 text-[9px] tracking-widest uppercase">
            Morris Canal · 1824–1924 · New Jersey
          </span>
          <div className="w-1 h-1 rounded-full bg-[#B8962E]" />
        </div>
        <div className="font-body text-white/30 text-[10px] italic">
          National Register of Historic Places · 1974
        </div>
      </footer>
    </div>
  );
}
