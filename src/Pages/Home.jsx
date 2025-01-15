import React from "react";
import { Link } from "react-router-dom";
import Homehead from "./Home/HomeHeader";
import Deuxiemesect from "./Home/Deuxiemesect";
import Troisiemesec from "./Home/Troisiemesec";
import Quatriemesec from "./Home/quatriemesec";
import Cinqsec from "./Home/cinqsec";
import Sixsec from "./Home/Sixsec";
import Septsec from "./Home/Septsec";
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
          <Sixsec />
          <Septsec />
        </div>
      </main>

      {/* <div id="preloader">
    <div classNameName="line"></div>
  </div> */}
    </>
  );
}
