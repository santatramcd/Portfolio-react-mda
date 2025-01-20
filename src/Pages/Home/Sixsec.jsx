import React from "react";
import { Link } from "react-router-dom";
// import logos1 from '../../assets/logos/facebook.svg';
// import logos2 from '../../assets/logos/google.svg';
// import logos3 from '../../assets/logos/ibm.svg';
// import logos4 from '../../assets/logos/microsoft.svg';

import logos1 from '../../assets/logos/createak-logo.png';
import logos2 from '../../assets/logos/mda.png';
import logos3 from '../../assets/logos/rr.webp';
import logos4 from '../../assets/logos/logo.png';
export default function About() {
  return (
    <div>
        <div className="py-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-3 col-sm-6 my-3 card-logos">
                        <a href="https://createak.mu/"><img className="img-fluid img-brand d-block mx-auto" src={logos1} alt="..." aria-label="createak Logo" /></a>
                    </div>
                    <div className="col-md-3 col-sm-6 my-3 card-logos">
                        <a href="https://mada-digital-agency.vercel.app/"><img className="img-fluid img-brand d-block mx-auto" src={logos2} alt="..." aria-label="mda Logo" /></a>
                    </div>
                    <div className="col-md-3 col-sm-6 my-3 card-logos">
                        <a href="https://robinruth-thailand.com/"><img className="img-fluid img-brand d-block mx-auto" src={logos3} alt="..." aria-label="robin ruth Logo" /></a>
                    </div>
                    <div className="col-md-3 col-sm-6 my-3 card-logos">
                        <a href="https://maki-car-rental-mada.netlify.app/"><img className="img-fluid img-brand d-block mx-auto" src={logos4} alt="..." aria-label="maki Logo" /></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
