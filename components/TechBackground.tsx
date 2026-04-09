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
            color: "#020617",
          },
          particles: {
            number: {
              value: 90,
            },
            color: {
              value: ["#67e8f9", "#93c5fd", "#ffffff"],
            },
            opacity: {
              value: { min: 0.18, max: 0.55 },
            },
            links: {
              enable: true,
              distance: 140,
              color: "#67e8f9",
              opacity: 0.14,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1.1,
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
                distance: 180,
                links: {
                  opacity: 0.34,
                },
              },
              push: {
                quantity: 4,
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
