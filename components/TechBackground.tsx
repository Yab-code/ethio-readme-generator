"use client";

import { useEffect } from "react";
import { tsParticles } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export default function TechBackground() {
  useEffect(() => {
    loadSlim(tsParticles).then(() => {
      tsParticles.load({
        id: "tsparticles",
        options: {
          fullScreen: {
            enable: true,
            zIndex: -1,
          },

          background: {
            color: "#020617", // darker for contrast
          },

          particles: {
            number: {
              value: 160, // 🔥 MORE particles
              density: { enable: true, area: 800 },
            },

            color: {
              value: ["#22d3ee", "#06b6d4", "#67e8f9"], // brighter cyan tones
            },

            links: {
              enable: true,
              distance: 130,
              color: "#22d3ee",
              opacity: 0.7, // 🔥 stronger lines
              width: 1.2,
            },

            move: {
              enable: true,
              speed: 1.8, // 🔥 faster movement
              outModes: {
                default: "bounce",
              },
            },

            size: {
              value: { min: 1, max: 3 },
            },

            opacity: {
              value: 0.8,
            },
          },

          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "grab",
              },
              onClick: {
                enable: true,
                mode: "push",
              },
            },
            modes: {
              grab: {
                distance: 160,
                links: {
                  opacity: 1,
                },
              },
              push: {
                quantity: 6,
              },
            },
          },

          detectRetina: true,
        },
      });
    });
  }, []);

  return <div id="tsparticles" className="fixed inset-0 -z-10" />;
}