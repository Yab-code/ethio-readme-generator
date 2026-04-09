"use client";

import { themes } from "@/lib/themes";

type Props = {
  selected: string;
  onChange: (value: string) => void;
};

export default function CountrySelector({ selected, onChange }: Props) {
  const countries = Object.keys(themes);

  return (
    <div className="flex flex-wrap gap-3">
      {countries.map((country) => {
        const isSelected = selected === country;
        const theme = themes[country];

        return (
          <button
            key={country}
            type="button"
            onClick={() => onChange(country)}
            className={`group inline-flex items-center gap-3 rounded-full border px-4 py-3 text-sm font-medium transition-all duration-300 ${
              isSelected
                ? "border-cyan-300/45 bg-cyan-400 text-slate-950 shadow-[0_14px_34px_rgba(34,211,238,0.22)]"
                : "border-white/10 bg-white/6 text-slate-200 hover:-translate-y-0.5 hover:border-cyan-300/24 hover:bg-white/8 hover:text-white"
            }`}
          >
            <span
              className="h-4 w-4 rounded-full ring-2 ring-white/10"
              style={{
                background: `linear-gradient(135deg, ${theme.colors.join(", ")})`,
              }}
            />
            <span>{country}</span>
            <span
              className={`text-[11px] uppercase tracking-[0.24em] ${
                isSelected ? "text-slate-900/70" : "text-slate-500 group-hover:text-slate-300"
              }`}
            >
              Theme
            </span>
          </button>
        );
      })}
    </div>
  );
}
