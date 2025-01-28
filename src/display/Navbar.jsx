import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Mda from "../assets/logos/mda.png";

export default function Navbar() {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false); // État pour le mode sombre

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode", !isDarkMode); // Ajoute ou enlève la classe dark-mode
  };

  const changeColor = (color) => {
    document.documentElement.style.setProperty("--bs-warning", color); // Change la couleur de la variable CSS
    document.documentElement.style.setProperty("--bs-primary", color); // Change la couleur de la variable CSS si nécessaire
  };

  useEffect(() => {
    const navbarShrink = () => {
      const navbarCollapsible = document.querySelector("#mainNav");
      if (!navbarCollapsible) return;

      if (window.scrollY === 0) {
        navbarCollapsible.classList.remove("navbar-shrink");
      } else {
        navbarCollapsible.classList.add("navbar-shrink");
      }
    };

    window.addEventListener("scroll", navbarShrink);
    navbarShrink();

    return () => {
      window.removeEventListener("scroll", navbarShrink);
    };
  }, []);

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand" href="#page-top">
            <img src={Mda} alt="Logo Mada Digital Agency" />
          </a>
          <li className="list-mob-bg">
            <div className="dropdown">
              <a
                className="btn-secondary dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="span-card">
                  <span className="bg-btn"></span>
                </span>
              </a>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => changeColor("#f43731")}
                  >
                    <span className="bg-f43731"></span>
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => changeColor("#0048d5")}
                  >
                    <span className="bg-0048d5"></span>
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => changeColor("#ffc800")}
                  >
                    <span className="bg-ffc800"></span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="list-mob-moon">
            <button className="btn-dark-moon" onClick={toggleDarkMode}>
              {isDarkMode ? (
                <i className="bi bi-brightness-low"></i>
              ) : (
                <i className="bi bi-moon-stars"></i>
              )}
            </button>
          </li>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded={isMenuVisible}
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            {isMenuVisible ? (
              <i className="bi bi-x"></i>
            ) : (
              <i className="bi bi-list"></i>
            )}
          </button>
          <div
            className={`collapse navbar-collapse ${
              isMenuVisible ? "show" : ""
            }`}
            id="navbarResponsive"
          >
            <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
              {[
                { href: "#services", label: "Services" },
                { href: "#portfolio", label: "Portfolio" },
                { href: "#about", label: "About" },
                { href: "#team", label: "Team" },
                { href: "#contact", label: "Contact" },
              ].map((item, index) => (
                <li className="nav-item" key={index}>
                  <a className="nav-link" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="list-pc-moon">
                <button className="btn-dark-moon" onClick={toggleDarkMode}>
                  {isDarkMode ? (
                    <i className="bi bi-brightness-low"></i>
                  ) : (
                    <i className="bi bi-moon-stars"></i>
                  )}
                </button>
              </li>
              <li className="list-pc-bg">
                <div className="dropdown">
                  <a
                    className="btn-secondary dropdown-toggle"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span className="span-card">
                      <span className="bg-btn"></span>
                    </span>
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuLink"
                  >
                    <li>
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={() => changeColor("#f43731")}
                      >
                        <span className="bg-f43731"></span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={() => changeColor("#0048d5")}
                      >
                        <span className="bg-0048d5"></span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={() => changeColor("#ffc800")}
                      >
                        <span className="bg-ffc800"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
