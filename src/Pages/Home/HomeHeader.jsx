import React from "react";

export default function About() {
  return (
    <div>
      <header className="masthead" id="page-top">
        <div className="container">
          <div className="masthead-subheading">Je Suis Santatra Michado</div>
          <div className="masthead-heading text-uppercase">
            Développeur Web
          </div>
          {/* Remplacez "cv-santatra.pdf" par le nom de votre fichier */}
          <a
            className="btn btn-primary btn-xl text-uppercase"
            href="/cv-santatra.pdf"
            download="Santatra-Michado-CV.pdf"
          >
            Télécharger CV
          </a>
        </div>
      </header>
    </div>
  );
}
