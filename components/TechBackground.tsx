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
    value: 160,
  },
  color: {
    value: ["#ffffff"],
  },
  links: {
    enable: true,
    distance: 150,
    color: "#ffffff",
    opacity: 0.4,
    width: 1,
  },
  move: {
    enable: true,
    speed: 2,
  },
  size: {
    value: { min: 1, max: 3 },
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