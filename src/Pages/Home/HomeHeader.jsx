import React, { useEffect, useState } from "react";
import banniere from "../../assets/bannière.jpg";
import { useTranslation } from "react-i18next";

import Left from "../../assets/eclipse-blue.webp";
import Right from "../../assets/eclipse-red.webp";

export default function About() {
  const [rotatedText, setRotatedText] = useState("");

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
  const { t } = useTranslation();

  return (
    <div>
      <header className="masthead " id="page-top">
        <div className="container">
          <div className="row row-bann animated animatedFadeInUp fadeInUp">
            <div className="col-lg-6">
              <div className="masthead-subheading">
                {t("Iam")} Santatra Michado
              </div>
              <div className="masthead-heading text-uppercase">
                {t("dev")} <span className="name-sm"> Front-End</span>
              </div>
              <a
                className="btn btn-primary btn-xl text-uppercase animated animatedFadeInUp fadeInUp"
                href="/cv-santatra.pdf"
                download="Santatra-Michado-CV.pdf"
              >
                {t("down")}
              </a>
            </div>
            <div className="col-lg-6">
              <div className="div-cont-bann">
                <div className="circle">
                  <div
                    className="text"
                    dangerouslySetInnerHTML={{ __html: rotatedText }}
                  />
                  <div className="div-banners">
                    <img src={banniere} alt="image" className="im-banners" />
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
