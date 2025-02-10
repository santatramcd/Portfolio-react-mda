import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import about1 from "../../assets/about/1.jpg";
import about2 from "../../assets/about/2.jpg";
import about3 from "../../assets/about/3.jpg";
import about4 from "../../assets/about/4.jpg";
import { useTranslation } from 'react-i18next';


export default function About() {
  useEffect(() => {
    AOS.init({
      offset: 400,
      duration: 1000,
    });
  }, []);
  const { t } = useTranslation();
  return (
    <div>
      <section className="page-section" id="about">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">About</h2>
            <h3 className="section-subheading text-muted">
            {t('vision')}
            </h3>
          </div>
          <ul className="timeline">
            <li>
              <div className="timeline-image">
                <img
                  className="rounded-circle img-fluid"
                  src={about1}
                  alt="..."
                />
              </div>
              <div className="timeline-panel" data-aos="fade-right">
                <div className="timeline-heading">
                  <h4>2023 - à présent</h4>
                  <h4 className="subheading">Maki Services Sarlu</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                  {t('passionné')}
                  </p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <img
                  className="rounded-circle img-fluid"
                  src={about2}
                  alt="..."
                />
              </div>
              <div className="timeline-panel" data-aos="fade-left">
                <div className="timeline-heading">
                  <h4>May 2024</h4>
                  <h4 className="subheading">Mada Digital agency</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                  {t('devfront')}
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-image">
                <img
                  className="rounded-circle img-fluid"
                  src={about3}
                  alt="..."
                />
              </div>
              <div className="timeline-panel" data-aos="fade-right">
                <div className="timeline-heading">
                  <h4>Mars 2024</h4>
                  <h4 className="subheading">Freelance - Artiist.fr</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                  {t('freelance')}
                  </p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <img
                  className="rounded-circle img-fluid"
                  src={about4}
                  alt="..."
                />
              </div>
              <div className="timeline-panel" data-aos="fade-left">
                <div className="timeline-heading">
                  <h4>2021 - 2024</h4>
                  <h4 className="subheading">Université privée hay</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                  {t('formation')}
                  </p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <h4>
                  Be Part
                  <br />
                  Of Our
                  <br />
                  Story!
                </h4>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
