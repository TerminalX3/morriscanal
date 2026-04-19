import { useState } from "react";
import { TIMELINE_EVENTS, type TimelineEvent } from "@/lib/canalData";

const TYPE_STYLES: Record<
  TimelineEvent["type"],
  { color: string; label: string; dot: string }
> = {
  construction: { color: "#2D5016", label: "Construction", dot: "bg-[#2D5016]" },
  operation: { color: "#4A7C8E", label: "Operation", dot: "bg-[#4A7C8E]" },
  engineering: { color: "#B8962E", label: "Engineering", dot: "bg-[#B8962E]" },
  decline: { color: "#6B1F2A", label: "Decline", dot: "bg-[#6B1F2A]" },
  legacy: { color: "#5C3A1E", label: "Legacy", dot: "bg-[#5C3A1E]" },
};

export default function Timeline() {
  const [activeYear, setActiveYear] = useState<number | null>(null);
  const [filter, setFilter] = useState<TimelineEvent["type"] | "all">("all");

  const filtered =
    filter === "all"
      ? TIMELINE_EVENTS
      : TIMELINE_EVENTS.filter((e) => e.type === filter);

  return (
    <div className="flex h-full flex-col bg-[#F8F3E8]">
      <div className="flex-shrink-0 border-b border-[#B8962E]/30 px-5 pb-3 pt-5">
        <h2 className="font-cinzel text-lg font-bold tracking-wide text-[#2D5016]">
          Chronicle of the Canal
        </h2>
        <p className="font-body mt-1 text-sm text-[#4a3520]/70">
          Key events from 1822 to the present
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          <button
            type="button"
            onClick={() => setFilter("all")}
            className={`rounded border px-2.5 py-1 font-cinzel text-[10px] tracking-wide transition-colors ${
              filter === "all"
                ? "border-[#2D5016] bg-[#2D5016] text-white"
                : "border-[#B8962E]/50 bg-transparent text-[#4a3520] hover:border-[#B8962E]"
            }`}
          >
            All
          </button>
          {(
            Object.entries(TYPE_STYLES) as [
              TimelineEvent["type"],
              (typeof TYPE_STYLES)[TimelineEvent["type"]],
            ][]
          ).map(([type, style]) => (
            <button
              key={type}
              type="button"
              onClick={() => setFilter(type)}
              className={`rounded border px-2.5 py-1 font-cinzel text-[10px] tracking-wide transition-colors ${
                filter === type
                  ? "border-transparent text-white"
                  : "border-[#B8962E]/50 bg-transparent text-[#4a3520] hover:border-[#B8962E]"
              }`}
              style={
                filter === type
                  ? { backgroundColor: style.color, borderColor: style.color }
                  : {}
              }
            >
              {style.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-4">
        <div className="relative">
          <div className="absolute bottom-0 left-[28px] top-0 w-px bg-gradient-to-b from-[#B8962E]/60 via-[#B8962E]/40 to-transparent" />

          <div className="space-y-1">
            {filtered.map((event, idx) => {
              const style = TYPE_STYLES[event.type];
              const isActive = activeYear === event.year;

              return (
                <div
                  key={`${event.year}-${idx}`}
                  className={`group relative cursor-pointer pl-14 transition-all duration-200 ${
                    isActive ? "pb-4" : "pb-2"
                  }`}
                  onClick={() => setActiveYear(isActive ? null : event.year)}
                >
                  <div
                    className={`absolute left-5 top-1.5 flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#F8F3E8] transition-transform duration-200 ${style.dot} ${
                      isActive ? "scale-125" : "group-hover:scale-110"
                    }`}
                  >
                    <div className="h-2 w-2 rounded-full bg-white/60" />
                  </div>

                  <div
                    className="font-cinzel text-xs font-bold tracking-wider transition-colors"
                    style={{ color: isActive ? style.color : "#8B6914" }}
                  >
                    {event.year}
                  </div>

                  <div
                    className={`font-playfair text-sm font-semibold leading-snug transition-colors ${
                      isActive
                        ? "text-[#2C1A0E]"
                        : "text-[#4a3520] group-hover:text-[#2C1A0E]"
                    }`}
                  >
                    {event.title}
                  </div>

                  {isActive && (
                    <div className="mt-2 animate-fade-in-up">
                      <p className="font-body text-sm leading-relaxed text-[#4a3520]">
                        {event.description}
                      </p>
                      <div
                        className="mt-2 inline-block rounded px-2 py-0.5 font-cinzel text-[9px] tracking-widest text-white"
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
