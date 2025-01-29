import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init({
      offset: 400,
      duration: 1000,
    });
  }, []);
  return (
    <div>
      <div>
        <section className="page-section" id="Skills" data-aos="fade-up">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">Skills</h2>
              <h3 className="section-subheading text-muted">
                Découvrez nos compétences et expertises développées pour
                concrétiser vos projets numériques.
              </h3>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div>
                  <div className="container" id="skills">
                    <div className="technical-bars">
                      <div className="bar">
                        <div className="info">
                          <span>HTML</span>
                        </div>
                        <div className="progress-line html">
                          <span data-aos="fade-right"></span>
                          <div className="percentage">90%</div>
                        </div>
                      </div>
                      <div className="bar">
                        <div className="info">
                          <span>CSS</span>
                        </div>
                        <div className="progress-line css">
                          <span data-aos="fade-right"></span>
                          <div className="percentage">80%</div>
                        </div>
                      </div>
                      <div className="bar">
                        <div className="info">
                          <span>JavaScript</span>
                        </div>
                        <div className="progress-line js">
                          <span data-aos="fade-right"></span>
                          <div className="percentage">75%</div>
                        </div>
                      </div>
                      <div className="bar">
                        <div className="info">
                          <span>Bootstrap 5</span>
                        </div>
                        <div className="progress-line bootstrap">
                          <span data-aos="fade-right"></span>
                          <div className="percentage">85%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div>
                  <div className="container">
                    <div className="technical-bars">
                      <div className="bar">
                        <div className="info">
                          <span>Vue js</span>
                        </div>
                        <div className="progress-line html">
                          <span data-aos="fade-right"></span>
                          <div className="percentage">90%</div>
                        </div>
                      </div>
                      <div className="bar">
                        <div className="info">
                          <span>Wordpress</span>
                        </div>
                        <div className="progress-line css">
                          <span data-aos="fade-right"></span>
                          <div className="percentage">80%</div>
                        </div>
                      </div>
                      <div className="bar">
                        <div className="info">
                          <span>Php</span>
                        </div>
                        <div className="progress-line js">
                          <span data-aos="fade-right"></span>
                          <div className="percentage">75%</div>
                        </div>
                      </div>
                      <div className="bar">
                        <div className="info">
                          <span>React Js</span>
                        </div>
                        <div className="progress-line bootstrap">
                          <span data-aos="fade-right"></span>
                          <div className="percentage">85%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
