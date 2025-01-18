"use client";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, MoveDirection, OutMode } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const Background = () => {
  const [init, setInit] = useState(false);

  // Initialize the tsParticles engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // Load only slim features for better performance
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log("Particles Loaded:", container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#1a1a2e", // Dark indigo background
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push", // Adds particles on click
          },
        },
        modes: {
          push: {
            quantity: 5,
          },
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: ["#f72585", "#4361ee", "#4cc9f0"], // Vibrant gradient colors
        },
        links: {
          color: "#4cc9f0",
          distance: 120,
          enable: true,
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2,
          direction: MoveDirection.none,
          outModes: {
            default: OutMode.out,
          },
          random: false,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 700,
          },
          value: 60,
        },
        opacity: {
          value: 0.7,
        },
        shape: {
          type: "polygon", // Shape of particles
        },
        size: {
          value: { min: 2, max: 6 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (!init) {
    return null; // Render nothing until the particles engine is initialized
  }

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={options}
      className="absolute h-[100vh] w-full -z-10"
    />
  );
};

export default Background;
