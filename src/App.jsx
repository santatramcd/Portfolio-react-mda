import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Link, Outlet } from "react-router-dom";
import Navbar from "./display/Navbar";
import Footer from "./display/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Navbar/>
        <div>
          <div>
            <Outlet />
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default App;
