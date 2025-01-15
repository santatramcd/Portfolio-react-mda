import React from "react";
import { Link } from "react-router-dom";
import logos1 from '../../assets/logos/facebook.svg';
import logos2 from '../../assets/logos/google.svg';
import logos3 from '../../assets/logos/ibm.svg';
import logos4 from '../../assets/logos/microsoft.svg';

export default function About() {
  return (
    <div>
        <div className="py-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-3 col-sm-6 my-3">
                        <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src={logos1} alt="..." aria-label="Microsoft Logo" /></a>
                    </div>
                    <div className="col-md-3 col-sm-6 my-3">
                        <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src={logos2} alt="..." aria-label="Google Logo" /></a>
                    </div>
                    <div className="col-md-3 col-sm-6 my-3">
                        <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src={logos3} alt="..." aria-label="Facebook Logo" /></a>
                    </div>
                    <div className="col-md-3 col-sm-6 my-3">
                        <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src={logos4} alt="..." aria-label="IBM Logo" /></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
