import React from "react";

export default function Footer() {
  return (
    <div className="container">
     <footer className="footer py-4">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 text-lg-start">Copyright &copy; Santatra Michado 2025</div>
                    <div className="col-lg-4 my-3 my-lg-0">
                        <a className="btn btn-dark btn-social mx-2" href="https://github.com/santatramcd" aria-label="Twitter"><i className="bi bi-github"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="https://www.facebook.com/profile.php?id=100010304222710" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
                    </div>
                    <div className="col-lg-4 text-lg-end">
                        <a className="nav-link text-decoration-none number-phone" href="#!">+261 32 46 658 49</a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  );
}
