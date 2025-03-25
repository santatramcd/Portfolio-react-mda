import React, { useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "+=400px top",
        scrub: 2,
        pin: true,
      },
    });

    document
      .querySelectorAll(".hero-section .hero-content .title span")
      .forEach((span, index) => {
        heroTl.to(
          span,
          {
            y: -1500,
            duration: 4,
            ease: "power1.out",
          },
          index * 0.1
        );
      });

    gsap.to(".hero-section", {
      y: -1200,
      duration: 4,
      opacity: 0,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "+=800px top",
        scrub: 2,
        pin: true,
      },
    });
  }, []);

  return (
    <main id="site-main">
      <section className="hero-section">
        <div>
          <div className="hero-content">
            <div className="title">
              <div className="firstname">
                <span className="name">H</span>
                <span className="name">i</span>
                <span className="name">,</span>
              </div>
              <div className="lastname">
                <span className="name">I</span>
                <span className="name">'</span>
                <span className="name">m</span>
              </div>
            </div>
          </div>
          <div className="hero-content">
            <div className="title">
              <div className="firstname">
                <span className="name">S</span>
                <span className="name">a</span>
                <span className="name">n</span>
                <span className="name">t</span>
                <span className="name">a</span>
                <span className="name">t</span>
                <span className="name">r</span>
                <span className="name">a</span>
              </div>
            </div>
          </div>
          <p className="post">
            web <span className="name-sm">developer</span>{" "}
          </p>
          <a
            className="btn btn-primary btn-xl text-uppercase animated animatedFadeInUp fadeInUp"
            href="/cv-santatra.pdf"
            download="Santatra-Michado-CV.pdf"
          >
            {t("down")}
          </a>
        </div>
      </section>
    </main>
  );
};

export default HeroSection;
