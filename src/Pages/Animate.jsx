import React, { useEffect } from "react";

export default function Animate() {
  useEffect(() => {
    const preloader = document.querySelector("#preloader");
    if (preloader) {
      setTimeout(() => {
        preloader.classList.add("loaded");
      }, 1000);
      setTimeout(() => {
        preloader.remove();
      }, 2000);
    }
  }, []);

  return (
    <div>
      <div id="preloader">
        <div className="line"></div>
      </div>
    </div>
  );
}
