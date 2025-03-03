import React from "react";
import { Link } from "react-router-dom";
import Homehead from "./Home/HomeHeader";
import Deuxiemesect from "./Home/Deuxiemesect";
import Troisiemesec from "./Home/Troisiemesec";
import Quatriemesec from "./Home/quatriemesec";
import Cinqsec from "./Home/cinqsec";
import Sixsec from "./Home/Sixsec";
import Skills from "./Home/skills";
import Septsec from "./Home/Septsec";
import CookiesConsent from "./Home/CookieConsent";
export default function Home() {
  return (
    <>
      <main>
        <div>
          <Homehead />
          <Deuxiemesect />
          <Troisiemesec />
          <Quatriemesec />
          <Cinqsec />
          <Skills/>
          <Sixsec />
          <Septsec />
          <CookiesConsent/>
        </div>
      </main>

      {/* <div id="preloader">
    <div classNameName="line"></div>
  </div> */}
    </>
  );
}
