import React from "react";
import "./index.css";
import "./css/main.css";
import "./css/main2.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
  BrowserRouter,
} from "react-router-dom";
import Home from "./Pages/Home";
import Blogs from "./Pages/Blogs";
import logo from "./img/logo.png";
import profile from "./img/profile.png";



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Header/>}>
            <Route path="/" element={<Home/> } />
            <Route path="/blogs" element={<Blogs/> } />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const Header = () => (
  <section className="main vh-100">
     <div className="bg-s py-2"></div>
    <nav className="navbar navbar-expand-sm bg-darkb ">
        <div className="mycontainer py-2 d-flex flex-wrap justify-content-between">
            <a className="navbar-brand me-xl-5 pe-xl-3" href="index.html">
              <img src={logo} alt="Example" />
            </a>
            <button className="navbar-toggler text-white px-0 py-0 border-0 focus-none" type="button"
                data-bs-toggle="collapse" data-bs-target="#mynavbar">
                <i className="fa-solid fa-bars fs-3"></i>
            </button>
            <div className="collapse navbar-collapse" id="mynavbar">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item px-lg-2">
                    <Link className="nav-link text-op active-color" to="/"> Home</Link>
                    </li>
                    <li className="nav-item px-lg-2">
                        <a className="nav-link text-op" href="games.html">Games</a>
                    </li>
                    <li className="nav-item px-lg-2">
                     <Link className="nav-link text-op active-color" to="/blogs"> Blogs</Link>
                    </li>
                    <li className="nav-item px-lg-2">
                        <a className="nav-link text-op" href="contact.html">Contact Us</a>
                    </li>
                </ul>
                <div className="d-flex align-items-center mt-3 mt-sm-0">
                    <button className="bg-transparent px-3 py-2 rounded-3 border-s text-s me-3 login-btn">Login here</button>
                    <a href="profile.html">
                      <img src={profile} className="profile" alt="Example" />
                    </a>
                </div>
            </div>
          </div>
    </nav>
  <Outlet />
  </section>
);
export default App;
