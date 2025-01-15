import React from "react";
import { Link } from "react-router-dom";
import team1 from "../../assets/team/1.jpg";
import team2 from "../../assets/team/2.jpg";
import team3 from "../../assets/team/3.jpg";

export default function About() {
  return (
    <div>
      <section className="page-section bg-light" id="team">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">
              Notre Équipe Exceptionnelle
            </h2>
            <h3 className="section-subheading text-muted">
              Nous sommes une équipe de professionnels passionnés, dédiée à
              fournir des solutions innovantes et de haute qualité pour répondre
              aux besoins de nos clients.
            </h3>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src={team1} alt="..." />
                <h4>Parveen Anand</h4>
                <p className="text-muted">Lead Designer</p>
                <a
                  className="btn btn-dark btn-social mx-2"
                  href="#!"
                  aria-label="Parveen Anand Twitter Profile"
                >
                  <i className="bi bi-twitter"></i>
                </a>
                <a
                  className="btn btn-dark btn-social mx-2"
                  href="#!"
                  aria-label="Parveen Anand Facebook Profile"
                >
                  <i className="bi bi-facebook"></i>
                </a>
                <a
                  className="btn btn-dark btn-social mx-2"
                  href="#!"
                  aria-label="Parveen Anand LinkedIn Profile"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src={team2} alt="..." />
                <h4>Diana Petersen</h4>
                <p className="text-muted">Lead Marketer</p>
                <a
                  className="btn btn-dark btn-social mx-2"
                  href="#!"
                  aria-label="Diana Petersen Twitter Profile"
                >
                  <i className="bi bi-twitter"></i>
                </a>
                <a
                  className="btn btn-dark btn-social mx-2"
                  href="#!"
                  aria-label="Diana Petersen Facebook Profile"
                >
                  <i className="bi bi-facebook"></i>
                </a>
                <a
                  className="btn btn-dark btn-social mx-2"
                  href="#!"
                  aria-label="Diana Petersen LinkedIn Profile"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src={team3} alt="..." />
                <h4>Larry Parker</h4>
                <p className="text-muted">Lead Developer</p>
                <a
                  className="btn btn-dark btn-social mx-2"
                  href="#!"
                  aria-label="Larry Parker Twitter Profile"
                >
                  <i className="bi bi-twitter"></i>
                </a>
                <a
                  className="btn btn-dark btn-social mx-2"
                  href="#!"
                  aria-label="Larry Parker Facebook Profile"
                >
                  <i className="bi bi-facebook"></i>
                </a>
                <a
                  className="btn btn-dark btn-social mx-2"
                  href="#!"
                  aria-label="Larry Parker LinkedIn Profile"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <p className="large text-muted">
                Notre équipe se distingue par son expertise et son engagement
                envers l'excellence. Chacun de ses membres apporte une
                contribution unique, collaborant efficacement pour atteindre les
                objectifs communs et offrir des solutions de qualité supérieure.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
