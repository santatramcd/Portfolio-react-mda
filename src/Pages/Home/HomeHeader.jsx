import React, { useEffect, useState } from "react";
import banniere from "../../assets/bannière.jpg";
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
  return (
    <div>
      <header className="masthead " id="page-top">
        <div className="container">
          <div className="row row-bann animated animatedFadeInUp fadeInUp">
            <div className="col-lg-6" >
              <div className="masthead-subheading">
                Je Suis Santatra Michado
              </div>
              <div className="masthead-heading text-uppercase">
                Développeur <span className="name-sm"> Front-End</span>
              </div>
              <a
                className="btn btn-primary btn-xl text-uppercase animated animatedFadeInUp fadeInUp"
                href="/cv-santatra.pdf"
                download="Santatra-Michado-CV.pdf"
              >
                Télécharger CV
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
                    <img
                      src={banniere}
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
    </div>
  );
}
