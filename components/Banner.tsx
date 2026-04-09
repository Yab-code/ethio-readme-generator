type Props = {
  text: string;
  colors: string[];
};

export default function Banner({ text, colors }: Props) {
  return (
    <div className="relative overflow-hidden rounded-[1.75rem] border border-white/12 p-[1px] shadow-[0_24px_60px_rgba(8,47,73,0.18)]">
      <div
        className="absolute inset-0 opacity-80"
        style={{
          background: `linear-gradient(120deg, ${colors.join(", ")})`,
        }}
      />
      <div className="relative overflow-hidden rounded-[calc(1.75rem-1px)] bg-slate-950/82 px-6 py-5 backdrop-blur-xl">
        <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18),transparent_60%)]" />
        <div
          className="relative text-center text-lg font-semibold tracking-[0.26em] text-transparent sm:text-xl"
          style={{
            backgroundImage: `linear-gradient(120deg, ${colors.join(", ")})`,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
          }}
        >
          {text}
        </div>
      </div>
    </div>
  );
}
