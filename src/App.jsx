import "./App.css";
import { Link, Outlet } from "react-router-dom";
import Navbar from "./display/Navbar";
import Footer from "./display/Footer";

function App() {
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
