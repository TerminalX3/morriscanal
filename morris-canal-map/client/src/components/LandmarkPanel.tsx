// LandmarkPanel.tsx
// Heritage Broadside design — parchment card with forest green / burgundy accents
// Shows detailed historical information for the selected landmark

import { X, MapPin, Mountain, Anchor, Building2, Waves } from 'lucide-react';
import { type Landmark } from '@/lib/canalData';

interface LandmarkPanelProps {
  landmark: Landmark | null;
  onClose: () => void;
}

const TYPE_LABELS: Record<string, string> = {
  'terminus': 'Canal Terminus',
  'inclined-plane': 'Inclined Plane',
  'lock': 'Canal Lock',
  'town': 'Canal Town',
  'aqueduct': 'Aqueduct',
  'summit': 'Summit Level',
  'feeder': 'Feeder Canal',
};

const TYPE_COLORS: Record<string, string> = {
  'terminus': '#6B1F2A',
  'inclined-plane': '#2D5016',
  'lock': '#4A7C8E',
  'town': '#8B6914',
  'aqueduct': '#5C3A1E',
  'summit': '#B8962E',
  'feeder': '#4A7C8E',
};

const TYPE_ICONS: Record<string, React.ReactNode> = {
  'terminus': <Anchor className="w-4 h-4" />,
  'inclined-plane': <Mountain className="w-4 h-4" />,
  'lock': <Building2 className="w-4 h-4" />,
  'town': <MapPin className="w-4 h-4" />,
  'aqueduct': <Waves className="w-4 h-4" />,
  'summit': <Mountain className="w-4 h-4" />,
  'feeder': <Waves className="w-4 h-4" />,
};

export default function LandmarkPanel({ landmark, onClose }: LandmarkPanelProps) {
  if (!landmark) {
    return (
      <div className="h-full flex flex-col items-center justify-center p-6 text-center">
        <div className="w-16 h-16 rounded-full bg-[#2D5016]/10 flex items-center justify-center mb-4">
          <MapPin className="w-8 h-8 text-[#2D5016]/40" />
        </div>
        <p className="font-playfair text-[#4a3520]/60 text-lg italic">
          Select a marker on the map
        </p>
        <p className="font-body text-[#4a3520]/40 text-sm mt-2">
          Click any point along the canal route to explore its history
        </p>
      </div>
    );
  }

  const typeColor = TYPE_COLORS[landmark.type] || '#2D5016';
  const typeLabel = TYPE_LABELS[landmark.type] || landmark.type;
  const typeIcon = TYPE_ICONS[landmark.type];

  return (
    <div className="h-full flex flex-col overflow-hidden animate-fade-in-up">
      {/* Header */}
      <div
        className="relative p-5 flex-shrink-0"
        style={{ backgroundColor: typeColor }}
      >
        {/* Decorative pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 11px)`,
          }}
        />

        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors z-10"
          aria-label="Close panel"
        >
          <X className="w-4 h-4 text-white" />
        </button>

        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-2">
            <div className="text-white/80">{typeIcon}</div>
            <span className="font-cinzel text-[10px] tracking-widest text-white/80 uppercase">
              {typeLabel}
            </span>
            {landmark.county && (
              <span className="text-white/60 text-[10px] font-body">· {landmark.county} County</span>
            )}
          </div>
          <h2 className="font-playfair font-bold text-white text-xl leading-tight">
            {landmark.name}
          </h2>
          {landmark.elevation !== undefined && (
            <div className="flex items-center gap-1 mt-1">
              <Mountain className="w-3 h-3 text-white/60" />
              <span className="text-white/70 text-xs font-body">{landmark.elevation} ft elevation</span>
            </div>
          )}
        </div>
      </div>

      {/* Image (if available) */}
      {landmark.image && (
        <div className="flex-shrink-0 h-40 overflow-hidden">
          <img
            src={landmark.image}
            alt={landmark.name}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-5 bg-[#F8F3E8]">
        {/* Description */}
        <div className="mb-4">
          <div className="divider-ornamental mb-3">
            <span className="font-cinzel text-[10px] tracking-widest text-[#B8962E] uppercase whitespace-nowrap">
              About This Site
            </span>
          </div>
          <p className="font-body text-[#2C1A0E] text-base leading-relaxed">
            {landmark.description}
          </p>
        </div>

        {/* Historical Note */}
        {landmark.historicalNote && (
          <div className="mb-4">
            <div className="divider-ornamental mb-3">
              <span className="font-cinzel text-[10px] tracking-widest text-[#B8962E] uppercase whitespace-nowrap">
                Historical Dispatch
              </span>
            </div>
            <blockquote className="border-l-2 border-[#B8962E] pl-4 py-1">
              <p className="font-fell italic text-[#4a3520] text-sm leading-relaxed">
                {landmark.historicalNote}
              </p>
            </blockquote>
          </div>
        )}

        {/* Coordinates */}
        <div className="mt-4 pt-4 border-t border-[#B8962E]/30">
          <div className="flex items-center gap-2 text-xs text-[#8B6914] font-body">
            <MapPin className="w-3 h-3" />
            <span>{landmark.lat.toFixed(4)}°N, {Math.abs(landmark.lng).toFixed(4)}°W</span>
          </div>
        </div>
      </div>
    </div>
  );
}
