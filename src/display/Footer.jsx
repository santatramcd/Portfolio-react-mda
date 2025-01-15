import React from "react";

export default function Footer() {
  return (
    <div classNameName="container">
     <footer className="footer py-4">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 text-lg-start">Copyright &copy; Santatra Michado 2025</div>
                    <div className="col-lg-4 my-3 my-lg-0">
                        <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Twitter"><i className="bi bi-twitter"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
                    </div>
                    <div className="col-lg-4 text-lg-end">
                        <a className="link-dark text-decoration-none me-3" href="#!">Santatra-michado.com</a>
                        <a className="link-dark text-decoration-none" href="#!">Info@santatra-michado.com</a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  );
}
