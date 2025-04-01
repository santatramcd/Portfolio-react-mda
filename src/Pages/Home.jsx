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
import Chatbox from "./Home/chatbox";
// import Gsap from "./Home/gsap"
export default function Home() {
  return (
    <>
      <main>
        <div>
          <Homehead />
          {/* <Gsap/> */}
          <Deuxiemesect />
          <Troisiemesec />
          <Quatriemesec />
          {/* <Cinqsec /> */}
          <Skills />
          <Sixsec />
          <Septsec />
          <Chatbox/>
        </div>
      </main>
    </>
  );
}
