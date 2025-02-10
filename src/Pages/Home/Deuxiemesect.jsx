import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';


export default function About() {
  const { t } = useTranslation();

  return (
    <div>
      <section className="page-section" id="services" data-aos="fade-up">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">{t('service')}</h2>
            <h3 className="section-subheading text-muted">
            {t('decouvre')}
            </h3>
          </div>
          <div className="row text-center">
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <span className="iconne-span-cercle">
                  {/* <i className="bi bi-cart-check-fill fa-stack-1x fa-inverse"></i> */}
                <img width="66" height="66" src="https://img.icons8.com/external-others-bomsymbols-/91/external-code-flat-02-digital-design-others-bomsymbols-.png" className="icn-e-com" alt="external-code-flat-02-digital-design-others-bomsymbols-"/>
                </span>
              </span>
              <h4 className="mt-3">{t('opti')}</h4>
              <p className="text-muted">
              {t('ameliore')}
              </p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <span className="iconne-span-cercle">
                  {/* <i className="bi bi-laptop fa-stack-1x fa-inverse"></i> */}
                  <img
                    width="64"
                    height="64"
                    src="https://img.icons8.com/officel/80/media-queries.png"
                    alt="media-queries"
                    className="icn-resp"
                  />
                </span>
              </span>
              <h4 className="my-3">Responsive Design</h4>
              <p className="text-muted">
              {t('profite')}
              </p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <span className="iconne-span-cercle">
                  {/* <i className="bi bi-lock-fill fa-stack-1x fa-inverse"></i> */}
                  <img
                    width="64"
                    height="64"
                    src="https://img.icons8.com/officel/80/web-shield.png"
                    alt="web-shield"
                    className="icn-resp"
                  />
                </span>
              </span>
              <h4 className="my-3">{t('securiteweb')}</h4>
              <p className="text-muted">
              {t('protegesite')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
