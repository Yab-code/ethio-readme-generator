"use client";

import React from "react";
import { themes } from "@/lib/themes";

type Props = {
  selected: string;
  onChange: (value: string) => void;
};

export default function CountrySelector({ selected, onChange }: Props) {
  const countries = Object.keys(themes);

  return (
    <div className="flex flex-wrap justify-center gap-3">
      {countries.map((c) => {
        const isSelected = selected === c;
        const theme = themes[c];
        
        return (
          <button
            key={c}
            type="button"
            onClick={() => onChange(c)}
            className={`flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
              isSelected
                ? "border-cyan-300/40 bg-cyan-400 text-slate-950 shadow-[0_12px_30px_rgba(34,211,238,0.22)] scale-105"
                : "border-white/10 bg-slate-950/65 text-slate-300 hover:-translate-y-0.5 hover:border-cyan-300/25 hover:text-white"
            }`}
          >
            <div className="flex h-4 w-4 items-center justify-center overflow-hidden rounded-full font-bold">
              <div
                className="h-full w-full"
                style={{
                  background: `linear-gradient(135deg, ${theme.colors.join(", ")})`,
                }}
              />
            </div>
            {c}
          </button>
        );
      })}
    </div>
  );
}
