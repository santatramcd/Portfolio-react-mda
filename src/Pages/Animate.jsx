import React, { useEffect } from "react";
import gsap from "gsap";

export default function Animate() {
  useEffect(() => {
    const bars = document.querySelectorAll(".bars");
    if (!bars.length) return;

    const tl = gsap.timeline();

    // Entrée des barres (du haut vers l'écran)
    tl.fromTo(
      ".bars",
      { yPercent: -100 },
      {
        yPercent: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "expo.out",
      }
    )

    // Sortie vers le bas
    .to(".bars", {
      yPercent: 100,
      duration: 0.6,
      stagger: 0.08,
      ease: "expo.in",
    })

    // Fade overlay (léger overlap)
    .to(
      ".overlays",
      {
        opacity: 0,
        duration: 0.4,
        onComplete: () => {
          const overlay = document.querySelector(".overlays");
          if (overlay) overlay.style.display = "none";
        },
      },
      "-=0.2"
    );
  }, []);

  return (
    <div className="overlays">
      <div className="bars"></div>
      <div className="bars"></div>
      <div className="bars"></div>
      <div className="bars"></div>
    </div>
  );
}
