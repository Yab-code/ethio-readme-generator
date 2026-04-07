export type Theme = {
  name: string;
  greeting: string;
  colors: string[];
  banner: string;
  slogan: string;
};

export const themes: Record<string, Theme> = {
  Ethiopia: {
    name: "Ethiopia",
    greeting: "ሰላም",
    colors: ["#078930", "#F4B400", "#DB4437"],
    banner: "🟩🟨🟥 ETHIOPIA 🟥🟨🟩",
    slogan: "Unity. Strength. Heritage.",
  },
  Kenya: {
    name: "Kenya",
    greeting: "Habari",
    colors: ["#000000", "#BB0000", "#006600"],
    banner: "🟥⬛🟥 KENYA 🟥⬛🟥",
    slogan: "Strong. Bold. Innovative.",
  },
  Japan: {
    name: "Japan",
    greeting: "こんにちは",
    colors: ["#ffffff", "#d60000"],
    banner: "⚪ JAPAN ⚪",
    slogan: "Minimal. Precise. Powerful.",
  },
  Nigeria: {
    name: "Nigeria",
    greeting: "Ẹ n lẹ",
    colors: ["#008751", "#ffffff"],
    banner: "🟩⬜🟩 NIGERIA 🟩⬜🟩",
    slogan: "Fast. Bold. Growing.",
  },
  USA: {
    name: "USA",
    greeting: "Hello",
    colors: ["#0A3161", "#ffffff", "#B31942"],
    banner: "🔵⚪🔴 USA 🔴⚪🔵",
    slogan: "Innovation at scale.",
  },
};
