"use client";
import React, { useEffect } from "react";

const FireWorks: React.FC = () => {
  useEffect(() => {
    const createFirework = () => {
      const firework = document.createElement("div");
      firework.className = "firework";

      const particles = 20;
      const colors = ["#FFC300", "#FF5733", "#C70039", "#900C3F", "#581845"]; // Array of colors for fireworks

      for (let i = 0; i < particles; i++) {
        const particle = document.createElement("div");
        particle.className = "particle";
        particle.style.backgroundColor =
          colors[Math.floor(Math.random() * colors.length)];

        const particleSize = Math.floor(Math.random() * 10) + 3; // Random size between 3 and 12 pixels
        particle.style.width = `${particleSize}px`;
        particle.style.height = `${particleSize}px`;

        const angle = Math.random() * Math.PI * 2; // Random angle in radians
        const distance = Math.random() * 100 + 50; // Random distance between 50 and 150 pixels
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        particle.style.transform = `translate(${x}px, ${y}px)`;

        firework.appendChild(particle);
      }

      document.body.appendChild(firework);

      const x = Math.floor(Math.random() * window.innerWidth);
      const y = Math.floor(Math.random() * window.innerHeight);
      firework.style.left = `${x}px`;
      firework.style.top = `${y}px`;

      setTimeout(() => {
        firework.remove();
      }, 3000);
    };

    const animateFireworks = () => {
      createFirework();
      setTimeout(animateFireworks, Math.random() * 2000 + 500);
    };

    animateFireworks();
  }, []);

  return <div className="fireworks-container" />;
};

export default FireWorks;
