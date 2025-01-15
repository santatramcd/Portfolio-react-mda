import React from "react";
import { Link } from "react-router-dom";
import Profil from "../assets/gallery/profile-img.jpg";
export default function About() {
  return (
    <div className="container py-3">
      <h1>about page</h1>
      <a href="#" className="cta-btn">
        <Link to="/contact">Contact</Link>
      </a>
        <a href="#">
          <Link to="/">Home</Link>
        </a>
    </div>
  );
}
