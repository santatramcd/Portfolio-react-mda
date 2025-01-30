import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <section className="page-section" id="services" data-aos="fade-up">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Nos Services</h2>
            <h3 className="section-subheading text-muted">
              Découvrez nos solutions conçues pour répondre à vos besoins
              numériques.
            </h3>
          </div>
          <div className="row text-center">
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <span className="iconne-span-cercle">
                  {/* <i className="bi bi-cart-check-fill fa-stack-1x fa-inverse"></i> */}
                  <img width="64" height="64" src="https://img.icons8.com/dusk/64/e-commerce.png" alt="e-commerce" className="icn-e-com"/>
                </span>
              </span>
              <h4 className="my-3">E-Commerce</h4>
              <p className="text-muted">
                Développez votre boutique en ligne avec des fonctionnalités
                modernes pour offrir une expérience d'achat fluide et agréable à
                vos clients.
              </p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <span className="iconne-span-cercle">
                  {/* <i className="bi bi-laptop fa-stack-1x fa-inverse"></i> */}
                  <img width="64" height="64" src="https://img.icons8.com/officel/80/media-queries.png" alt="media-queries" className="icn-resp"/>
                </span>
              </span>
              <h4 className="my-3">Responsive Design</h4>
              <p className="text-muted">
                Profitez d'un design optimisé pour tous les appareils,
                garantissant une navigation fluide sur mobile, tablette et
                ordinateur.
              </p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <span className="iconne-span-cercle">
                  {/* <i className="bi bi-lock-fill fa-stack-1x fa-inverse"></i> */}
                  <img width="64" height="64" src="https://img.icons8.com/officel/80/web-shield.png" alt="web-shield" className="icn-resp"/>
                </span>
              </span>
              <h4 className="my-3">Sécurité Web</h4>
              <p className="text-muted">
                Protégez votre site web et les données de vos utilisateurs grâce
                à nos solutions avancées de sécurité en ligne.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
