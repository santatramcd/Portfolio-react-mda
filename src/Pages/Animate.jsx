import React, { useEffect } from "react";
import gsap from "gsap"; // Assurez-vous d'importer gsap

export default function Animate() {
  useEffect(() => {
    function startLoader() {
      let bars = document.querySelectorAll(".bars");

      if (bars.length === 0) {
        console.error("Aucun élément .bars trouvé !");
        return;
      }

      gsap.fromTo(
        ".bars",
        { height: "100vh" }, 
        {
          duration: 1.5,
          height: 0, 
          stagger:{ amount: 1 }, 
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
      <div className="bars"></div>
      <div className="bars"></div>
      <div className="bars"></div>
      <div className="bars"></div>
      <div className="bars"></div>
      <div className="bars"></div>
    </div>
  );
}
