import React from "react";

type Props = {
  text: string;
  colors: string[];
};

export default function Banner({ text, colors }: Props) {
  return (
    <div className="relative overflow-hidden rounded-2xl p-[1px] shadow-[0_12px_40px_rgba(34,211,238,0.15)] mb-8 select-none">
      <div 
        className="absolute inset-0 opacity-50"
        style={{
          background: `linear-gradient(90deg, ${colors.join(", ")})`,
        }}
      />
      <div className="relative flex min-h-[60px] items-center justify-center rounded-[15px] bg-slate-950/80 px-6 py-4 text-center font-bold tracking-widest text-white backdrop-blur-md transition-all duration-500 hover:bg-slate-950/60">
        <span className="bg-clip-text text-transparent drop-shadow-md" style={{
          backgroundImage: `linear-gradient(90deg, ${colors.join(", ")})`,
        }}>
          {text}
        </span>
      </div>
    </div>
  );
}
