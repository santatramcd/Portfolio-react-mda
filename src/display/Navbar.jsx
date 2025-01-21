import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Mda from "../assets/MDA.png";

export default function Navbar() {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
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

    // Add event listeners
    window.addEventListener("scroll", navbarShrink);
    navbarShrink();

    return () => {
      // Clean up event listeners on unmount
      window.removeEventListener("scroll", navbarShrink);
    };
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div className="container">
          <a className="navbar-brand" href="#page-top">
            <img src={Mda} alt="Logo Mada Digital Agency" />
          </a>
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
           {isMenuVisible ? <i class="bi bi-x"></i> : <i className="bi bi-list"></i>}
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
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
