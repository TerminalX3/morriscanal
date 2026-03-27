// Timeline.tsx
// Heritage Broadside design — vertical timeline with period-appropriate typography
// Displays key events in the Morris Canal's history

import { useState } from 'react';
import { TIMELINE_EVENTS, type TimelineEvent } from '@/lib/canalData';

const TYPE_STYLES: Record<TimelineEvent['type'], { color: string; label: string; dot: string }> = {
  construction: { color: '#2D5016', label: 'Construction', dot: 'bg-[#2D5016]' },
  operation: { color: '#4A7C8E', label: 'Operation', dot: 'bg-[#4A7C8E]' },
  engineering: { color: '#B8962E', label: 'Engineering', dot: 'bg-[#B8962E]' },
  decline: { color: '#6B1F2A', label: 'Decline', dot: 'bg-[#6B1F2A]' },
  legacy: { color: '#5C3A1E', label: 'Legacy', dot: 'bg-[#5C3A1E]' },
};

export default function Timeline() {
  const [activeYear, setActiveYear] = useState<number | null>(null);
  const [filter, setFilter] = useState<TimelineEvent['type'] | 'all'>('all');

  const filtered = filter === 'all'
    ? TIMELINE_EVENTS
    : TIMELINE_EVENTS.filter(e => e.type === filter);

  return (
    <div className="h-full flex flex-col bg-[#F8F3E8]">
      {/* Header */}
      <div className="flex-shrink-0 px-5 pt-5 pb-3 border-b border-[#B8962E]/30">
        <h2 className="font-cinzel font-bold text-[#2D5016] text-lg tracking-wide">
          Chronicle of the Canal
        </h2>
        <p className="font-body text-[#4a3520]/70 text-sm mt-1">
          Key events from 1822 to the present
        </p>

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          <button
            onClick={() => setFilter('all')}
            className={`px-2.5 py-1 text-[10px] font-cinzel tracking-wide rounded border transition-colors ${
              filter === 'all'
                ? 'bg-[#2D5016] text-white border-[#2D5016]'
                : 'bg-transparent text-[#4a3520] border-[#B8962E]/50 hover:border-[#B8962E]'
            }`}
          >
            All
          </button>
          {(Object.entries(TYPE_STYLES) as [TimelineEvent['type'], typeof TYPE_STYLES[keyof typeof TYPE_STYLES]][]).map(([type, style]) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-2.5 py-1 text-[10px] font-cinzel tracking-wide rounded border transition-colors ${
                filter === type
                  ? 'text-white border-transparent'
                  : 'bg-transparent text-[#4a3520] border-[#B8962E]/50 hover:border-[#B8962E]'
              }`}
              style={filter === type ? { backgroundColor: style.color, borderColor: style.color } : {}}
            >
              {style.label}
            </button>
          ))}
        </div>
      </div>

      {/* Timeline entries */}
      <div className="flex-1 overflow-y-auto px-5 py-4">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[28px] top-0 bottom-0 w-px bg-gradient-to-b from-[#B8962E]/60 via-[#B8962E]/40 to-transparent" />

          <div className="space-y-1">
            {filtered.map((event, idx) => {
              const style = TYPE_STYLES[event.type];
              const isActive = activeYear === event.year;

              return (
                <div
                  key={`${event.year}-${idx}`}
                  className={`relative pl-14 cursor-pointer group transition-all duration-200 ${
                    isActive ? 'pb-4' : 'pb-2'
                  }`}
                  onClick={() => setActiveYear(isActive ? null : event.year)}
                >
                  {/* Year dot */}
                  <div
                    className={`absolute left-5 top-1.5 w-6 h-6 rounded-full border-2 border-[#F8F3E8] flex items-center justify-center transition-transform duration-200 ${
                      style.dot
                    } ${isActive ? 'scale-125' : 'group-hover:scale-110'}`}
                  >
                    <div className="w-2 h-2 rounded-full bg-white/60" />
                  </div>

                  {/* Year label */}
                  <div
                    className="font-cinzel font-bold text-xs tracking-wider mb-0.5 transition-colors"
                    style={{ color: isActive ? style.color : '#8B6914' }}
                  >
                    {event.year}
                  </div>

                  {/* Title */}
                  <div className={`font-playfair font-semibold text-sm leading-snug transition-colors ${
                    isActive ? 'text-[#2C1A0E]' : 'text-[#4a3520] group-hover:text-[#2C1A0E]'
                  }`}>
                    {event.title}
                  </div>

                  {/* Description (expanded) */}
                  {isActive && (
                    <div className="mt-2 animate-fade-in-up">
                      <p className="font-body text-sm text-[#4a3520] leading-relaxed">
                        {event.description}
                      </p>
                      <div
                        className="inline-block mt-2 px-2 py-0.5 text-[9px] font-cinzel tracking-widest text-white rounded"
                        style={{ backgroundColor: style.color }}
                      >
                        {style.label}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
