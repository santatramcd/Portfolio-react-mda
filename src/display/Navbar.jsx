import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Mda from "../assets/logos/mda.png";
import "../i18n";
import { useTranslation } from "react-i18next";
import Sun from "../assets/logos/sun-with-face.png";
import Moon from "../assets/logos/moon.png";
import Fr from "../assets/logos/france-circular.png";
import En from "../assets/logos/great-britain-circular.png";

export default function Navbar() {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      document.body.classList.toggle("dark-mode", newMode);
      document.body.classList.toggle("light-mode", !newMode); // Ajoute ou enlève la classe light-mode
      return newMode;
    });
  };

  const changeColor = (color) => {
    document.documentElement.style.setProperty("--bs-warning", color);
    document.documentElement.style.setProperty("--bs-primary", color);
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

  const { t, i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState("fr"); // Langue par défaut

  const changeLanguage = () => {
    const newLang = currentLang === "fr" ? "en" : "fr";
    i18n.changeLanguage(newLang);
    setCurrentLang(newLang);
  };
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
                    onClick={() => changeColor("#ff0000")}
                  >
                    <span className="bg-ff0000"></span>
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    onClick={() => changeColor("#10bbf1")}
                  >
                    <span className="bg-10bbf1"></span>
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
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
                <img
                  width="40"
                  height="40"
                  src={Sun}
                  alt="sun-with-face"
                />
              ) : (
                <img
                  width="32"
                  height="32"
                  src={Moon}
                  alt="external-moon-bedroom-nawicon-outline-color-nawicon"
                />
              )}
            </button>
          </li>
          <li className="list-mob-i18">
            <a onClick={changeLanguage} className="cursor-pointer">
              <img
                width="30"
                height="30"
                src={
                  currentLang === "fr"
                    ? Fr
                    : En
                }
                alt={
                  currentLang === "fr"
                    ? "great-britain-circular"
                    : "france-circular"
                }
              />
            </a>
          </li>
          <button
            className="navbar-toggler"
            type="button"
            aria-controls="navbarResponsive"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            <div
              id="menu"
              className={`hamburger-menu ${isOpen ? "active" : ""}`}
            >
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </button>
          <div
            className={`navbar-collapse ${isOpen ? "open" : "closed"}`}
            id="navbarResponsive"
          >
            <a href="#page-top">
              <img className="santatra-tel" src={Mda} alt="mada digital" />
            </a>
            <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
              {[
                { href: "#services", label: "Services", icon: "bi bi-gear" },
                {
                  href: "#portfolio",
                  label: "Portfolio",
                  icon: "bi bi-briefcase",
                },
                { href: "#about", label: "About", icon: "bi bi-person" },
                { href: "#team", label: "Team", icon: "bi bi-people" },
                {
                  href: "#Skills",
                  label: "Skills",
                  icon: "bi bi-graph-up-arrow",
                },
                { href: "#contact", label: "Contact", icon: "bi bi-telephone" },
              ].map((item, index) => (
                <li className="nav-item" key={index}>
                  <a className="nav-link" href={item.href}>
                    <i className={item.icon}></i>
                    {item.label}
                  </a>
                </li>
              ))}
              <ul className="div-ov-icn">
                <li>
                  <a href="https://www.facebook.com/profile.php?id=100010304222710">
                    <i class="bi bi-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/santatramcd">
                    <i class="bi bi-github"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/andrianjaka-santatra-michado-a119952b7/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                    <i class="bi bi-linkedin"></i>
                  </a>
                </li>
              </ul>
              <li className="list-pc-moon">
                <button className="btn-dark-moon" onClick={toggleDarkMode}>
                  {isDarkMode ? (
                    <img
                      width="40"
                      height="40"
                      src={Sun}
                      alt="sun-with-face"
                    />
                  ) : (
                    <img
                      width="32"
                      height="32"
                      src={Moon}
                      alt="external-moon-bedroom-nawicon-outline-color-nawicon"
                    />
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
                        onClick={() => changeColor("#ff0000")}
                      >
                        <span className="bg-ff0000"></span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        onClick={() => changeColor("#10bbf1")}
                      >
                        <span className="bg-10bbf1"></span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        onClick={() => changeColor("#ffc800")}
                      >
                        <span className="bg-ffc800"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="list-pc-bg ms-3">
                <a onClick={changeLanguage} className="cursor-pointer">
                  <img
                    width="30"
                    height="30"
                    src={
                      currentLang === "fr"
                        ? Fr
                        : En
                    }
                    alt={
                      currentLang === "fr"
                        ? "great-britain-circular"
                        : "france-circular"
                    }
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div id="opacity" className={`overlay ${isOpen ? "show" : ""}`}></div>
    </div>
  );
}
