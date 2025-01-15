import React from "react";
import { Link } from "react-router-dom";
import about1 from "../../assets/about/1.jpg";
import about2 from "../../assets/about/2.jpg";
import about3 from "../../assets/about/3.jpg";
import about4 from "../../assets/about/4.jpg";

export default function About() {
  return (
    <div>
      <section className="page-section" id="about">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">About</h2>
            <h3 className="section-subheading text-muted">
              Découvrez notre vision, notre expertise et l'engagement de notre
              équipe à fournir des solutions innovantes et adaptées aux besoins
              de nos clients.
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
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>2023 - à présent</h4>
                  <h4 className="subheading">Maki Services Sarlu</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    Passionné par le développement front-end, je conçois des
                    interfaces utilisateur modernes et intuitives. Mon expertise
                    couvre les technologies les plus récentes pour offrir des
                    expériences interactives et engageantes, tout en assurant
                    performance et accessibilité.
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
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>March 2024</h4>
                  <h4 className="subheading">Mada Digital agency</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    En tant que développeur front-end, je m'engage à créer des
                    interfaces élégantes et fonctionnelles. Mon objectif est de
                    transformer des concepts en solutions numériques pratiques
                    et accessibles, tout en optimisant l'expérience utilisateur
                    à chaque étape du processus de développement.
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
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>December 2022</h4>
                  <h4 className="subheading">Freelance</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    En tant que freelance, je me spécialise dans la création de
                    sites web personnalisés et performants. Mon objectif est de
                    travailler en étroite collaboration avec mes clients pour
                    transformer leurs idées en solutions digitales sur mesure,
                    tout en assurant une expérience utilisateur fluide et
                    optimale.
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
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>2021 - 2024</h4>
                  <h4 className="subheading">Université privée hay</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    Au cours de ma formation en Licence 3 Informatique à
                    l'Université privée Hay, j'ai acquis des compétences
                    approfondies dans le développement logiciel, la gestion de
                    bases de données, ainsi que dans les systèmes et réseaux.
                    J'ai également eu l'opportunité de participer à plusieurs
                    projets pratiques, renforçant ainsi mes connaissances en
                    programmation, développement web, et en architecture des
                    systèmes informatiques.
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
