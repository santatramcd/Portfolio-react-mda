import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <header className="masthead">
        <div className="container">
          <div className="masthead-subheading">Je Suis Santatra Michado</div>
          <div className="masthead-heading text-uppercase">
          Développeur Web
          </div>
          <a className="btn btn-primary btn-xl text-uppercase" href="#services">
          En savoir plus
          </a>
        </div>
      </header>
    </div>
  );
}
