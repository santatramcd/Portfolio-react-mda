import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
// import { tsParticles } from "tsparticles-engine";
// import { loadFull } from "tsparticles";

import Left from "../../assets/eclipse-blue.webp";
import Right from "../../assets/eclipse-red.webp";
// import Gsap from "./gsap";
import Home from "./news-an";

export default function About() {
  const [rotatedText, setRotatedText] = useState("");
  const { t } = useTranslation();

  useEffect(() => {
    const text = "Integrateur web❤️Creative UX / UI Designer";
    const transformedText = text
      .split("")
      .map(
        (char, i) =>
          `<span style="transform:rotate(${i * 8.3}deg)">${char}</span>`
      )
      .join("");
    setRotatedText(transformedText);
  }, []);

  useEffect(() => {
    const initParticles = async () => {
      await loadFull(tsParticles);
      tsParticles.load("tsparticles", {
        fullScreen: { enable: false },
        particles: {
          number: { value: 40 },
          color: { value: "#0041cc" },
          shape: { type: "circle" },
          opacity: { value: 0.3 },
          size: { value: 3 },
          move: {
            enable: true,
            speed: 1,
            outModes: { default: "out" },
          },
          links: {
            enable: true,
            distance: 150,
            color: "#0041cc",
            opacity: 0.2,
            width: 1,
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
          },
        },
      });
    };

    initParticles();
  }, []);

  return (
    <div>
      <header className="masthead" id="page-top">
        <div id="tsparticles"></div>
        <div className="container">
          <div className="row row-bann animated animatedFadeInUp fadeInUp">
            <div className="col-lg-6 div-col-gsap">  
              <Home />
            </div>
            <div className="col-lg-6">
              <div className="div-cont-bann">
                <div className="circle">
                  <div
                    className="text"
                    dangerouslySetInnerHTML={{ __html: rotatedText }}
                  />
                  <div className="div-banners">
                    <img
                      src="https://res.cloudinary.com/de03l56z6/image/upload/v1768558614/WhatsApp_Image_2026-01-16_at_1.15.23_PM_dfaq0k.jpg"
                      alt="image"
                      className="im-banners"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="bg-linear">
        <div className="blue">
          <img src={Right} alt="image" />
        </div>
        <div className="red">
          <img src={Left} alt="image" />
        </div>
      </div>
    </div>
  );
}
