import React, { useEffect } from "react";
import gsap from "gsap"; // Assurez-vous d'importer gsap

export default function Animate() {
  useEffect(() => {
    function startLoader() {
      let bars = document.querySelectorAll(".bar");

      if (bars.length === 0) {
        console.error("Aucun élément .bar trouvé !");
        return;
      }

      gsap.fromTo(
        ".bar",
        { height: "100vh" }, 
        {
          duration: 1.5,
          height: 0, 
          stagger:{ amount: 2 }, 
          ease: "power4.out",
          onComplete: () => {
            gsap.to(".overlays", {
              opacity: 0,
              duration: 1, 
              onComplete: () => {
                document.querySelector(".overlays").style.display = "none";
              },
            });
          },
        }
      );
    }

    setTimeout(startLoader); 
  }, []);

  return (
    <div className="overlays">
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  );
}
