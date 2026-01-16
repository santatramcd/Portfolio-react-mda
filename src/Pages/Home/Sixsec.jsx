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
                    <div className="col-md-2 col-sm-6 my-3 card-logos">
                        <a href="https://createak.mu/"><img className="img-fluid img-brand d-block mx-auto" src={logos1} alt="..." aria-label="createak Logo" /></a>
                    </div>
                    <div className="col-md-2 col-sm-6 my-3 card-logos">
                        <a href="https://mada-digital-agency.vercel.app/"><img className="img-fluid img-brand d-block mx-auto" src={logos2} alt="..." aria-label="mda Logo" /></a>
                    </div>
                    <div className="col-md-2 col-sm-6 my-3 card-logos">
                        <a href="https://robinruth-thailand.com/"><img className="img-fluid img-brand d-block mx-auto" src={logos3} alt="..." aria-label="robin ruth Logo" /></a>
                    </div>
                    <div className="col-md-2 col-sm-6 my-3 card-logos">
                        <a href="https://maki-car-rental-mada.netlify.app/"><img className="img-fluid img-brand d-block mx-auto" src={logos4} alt="..." aria-label="maki Logo" /></a>
                    </div>
                    <div className="col-md-2 col-sm-6 my-3 card-logos">
                        <a href="https://olyra-digital.com"><img className="img-fluid img-brand d-block mx-auto" src="https://olyra-digital.com/wp-content/uploads/2023/11/Logo-Hotizontale-t@3x-scaled.png" alt="..." aria-label="olyra Logo" /></a>
                    </div>
                    <div className="col-md-2 col-sm-6 my-3 card-logos">
                        <a href="https://tsb-energie.fr"><img className="img-fluid img-brand d-block mx-auto tsb-logo" src="https://tsb-energie.fr/wp-content/uploads/2025/10/cropped-Pico-TSBt1@3x-scaled-1.png" alt="..." aria-label="tsb Logo" /></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
