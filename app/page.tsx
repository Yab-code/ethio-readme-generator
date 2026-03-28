"use client";

import { useState } from "react";
import TechBackground from "@/components/TechBackground";

export default function Home() {
  const [step, setStep] = useState(1);
  const [username, setUsername] = useState("");

  const [githubStats, setGithubStats] = useState({
    theme: "dark",
    border: true,
    commits: true,
    privateCommits: false,
  });

  // 🔘 Toggle Component
  const Toggle = ({ label, value, onChange }: any) => (
    <div className="flex items-center justify-between p-4 bg-black/30 border border-white/10 rounded-xl">
      <span>{label}</span>
      <button
        onClick={onChange}
        className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
          value ? "bg-cyan-500" : "bg-gray-600"
        }`}
      >
        <div
          className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${
            value ? "translate-x-6" : ""
          }`}
        />
      </button>
    </div>
  );

  return (
    <div className="relative min-h-screen text-white overflow-hidden">

      {/* 🌐 Background */}
      <TechBackground />

      <div className="relative z-10 flex flex-col min-h-screen bg-gradient-to-br from-[#0a0f1c]/60 via-[#0f172a]/50 to-black/60">

{/* 🔥 TOP QUOTE BAR */}
<div className="w-full text-center py-2 text-sm text-gray-400 border-b border-white/10 backdrop-blur-md">
  ✨ "Make your GitHub professional."
</div>
{/* 🧠 NAVBAR */}
<div className="w-full flex items-center justify-between px-8 py-4 border-b border-white/10 backdrop-blur-md">

  {/* LOGO */}
  <div className="text-xl font-bold text-cyan-400 tracking-wide">
    GitHub Builder
  </div>

  {/* RIGHT SIDE (optional future links) */}
  <div className="text-sm text-gray-400">
    Build • Customize • Export
  </div>

</div>


        {/* STEP 1 */}
        {step === 1 && (
          <div className="flex flex-col md:flex-row items-center justify-between flex-1 px-10 py-16">

            <div className="space-y-8 max-w-xl">
              <h1 className="text-5xl md:text-6xl font-bold">
                Build Your <br />
                <span className="text-cyan-400">Developer Profile</span>
              </h1>

              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter GitHub username"
                className="w-full bg-transparent border-b border-cyan-400 py-3 text-lg outline-none"
              />

              <button
                onClick={() => setStep(2)}
                className="px-6 py-3 bg-cyan-500 rounded-lg"
              >
                Start →
              </button>
            </div>

            <div className="w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-3xl" />
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div className="flex flex-col md:flex-row items-center justify-center flex-1 px-10 py-12 gap-12">

            {/* LEFT */}
            <div className="relative w-[300px] h-[300px]">
              <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full" />
              <img
                src="https://illustrations.popsy.co/gray/programming.svg"
                className="relative w-full h-full"
              />
            </div>

            {/* RIGHT */}
            <div className="w-full max-w-2xl space-y-6">

              <h2 className="text-3xl font-bold text-cyan-400">
                About You
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <input placeholder="Full Name" className="input" />
                <input placeholder="Role" className="input" />
                <input placeholder="Location" className="input" />
                <input placeholder="Focus" className="input" />
                <input placeholder="Portfolio" className="input md:col-span-2" />

              </div>

              <textarea
                placeholder="Short Bio"
                className="w-full h-32 input"
              />

              <div className="flex justify-between">
                <button onClick={() => setStep(1)}>Back</button>
                <button
                  onClick={() => setStep(3)}
                  className="px-6 py-3 bg-cyan-500 rounded-lg"
                >
                  Next →
                </button>
              </div>

            </div>
          </div>
        )}

        {/* STEP 3 - GitHub Stats */}
        {step === 3 && (
          <div className="flex items-center justify-center flex-1 px-6">

            <div className="w-full max-w-2xl space-y-8">

              <h2 className="text-3xl font-bold text-cyan-400">
                Flex your GitHub Stats
              </h2>

              <select
                value={githubStats.theme}
                onChange={(e) =>
                  setGithubStats({ ...githubStats, theme: e.target.value })
                }
                className="w-full input"
              >
                <option value="dark">Dark</option>
                <option value="radical">Radical</option>
                <option value="tokyonight">Tokyo Night</option>
              </select>

              <Toggle
                label="Show Border"
                value={githubStats.border}
                onChange={() =>
                  setGithubStats({
                    ...githubStats,
                    border: !githubStats.border,
                  })
                }
              />

              <Toggle
                label="Lifetime Commits"
                value={githubStats.commits}
                onChange={() =>
                  setGithubStats({
                    ...githubStats,
                    commits: !githubStats.commits,
                  })
                }
              />

              <Toggle
                label="Private Commits"
                value={githubStats.privateCommits}
                onChange={() =>
                  setGithubStats({
                    ...githubStats,
                    privateCommits: !githubStats.privateCommits,
                  })
                }
              />

              <div className="flex justify-between">
                <button onClick={() => setStep(2)}>Back</button>
                <button
                  onClick={() => setStep(4)}
                  className="px-6 py-3 bg-cyan-500 rounded-lg"
                >
                  Next →
                </button>
              </div>

            </div>
          </div>
        )}

        {/* STEP 4 */}
        {step === 4 && (
          <div className="flex flex-col items-center justify-center flex-1 px-6 space-y-6">

            <h2 className="text-3xl text-cyan-400">Social Links</h2>

            <div className="grid grid-cols-2 gap-4 w-full max-w-4xl">
              {[
                "Bluesky",
                "Discord",
                "Instagram",
                "Medium",
                "LinkedIn",
                "YouTube",
                "X",
                "Email",
              ].map((item) => (
                <input key={item} placeholder={item} className="input" />
              ))}
            </div>

            <div className="flex gap-4">
              <button onClick={() => setStep(3)}>Back</button>
              <button onClick={() => setStep(5)}>Next</button>
            </div>

          </div>
        )}

        {/* STEP 5 */}
        {step === 5 && (
          <div className="flex flex-col items-center justify-center flex-1">
            <h2 className="text-3xl text-cyan-400">Tech Stack</h2>

            <div className="flex gap-4 mt-6">
              <button onClick={() => setStep(4)}>Back</button>
              <button onClick={() => setStep(6)}>Next</button>
            </div>
          </div>
        )}

        {/* STEP 6 */}
        {step === 6 && (
          <div className="flex flex-col items-center justify-center flex-1 space-y-6">
            <h2 className="text-3xl text-green-400">🎉 Ready!</h2>

            <button className="px-6 py-3 bg-cyan-500 rounded-lg">
              Copy Markdown
            </button>

            <button onClick={() => setStep(1)}>Start Again</button>
          </div>
        )}

      </div>
{/* 📊 FOOTER STEP COUNTER */}
<div className="w-full py-4 px-6 border-t border-white/10 backdrop-blur-md flex justify-between items-center text-sm text-gray-400">

  <div>
    © {new Date().getFullYear()} GitHub Builder
  </div>

  <div>
    Step {step} / 6
  </div>

</div>
      {/* 🔥 GLOBAL INPUT STYLE */}
      <style jsx>{`
        .input {
          padding: 12px;
          background: rgba(0, 0, 0, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          outline: none;
        }
      `}</style>
    </div>
  );
}