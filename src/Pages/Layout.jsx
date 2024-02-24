import React from "react";
import {
  Outlet,
  Link,
  NavLink,
  useLocation,
  useNavigate,
} from "react-router-dom";
import logo from "../img/logo.png";
import Profile from "../Pages/Profile";
import MyModal from "../Components/MyModal";
import profile from "../img/profile.png";

function Layout() {
  return (
    <div>
      <section className="main ">
        <div className="bg-s py-2"></div>
        <nav className="navbar navbar-expand-sm bg-darkb ">
          <div className="mycontainer py-2 d-flex flex-wrap justify-content-between">
            <Link className="navbar-brand me-xl-5 pe-xl-3" to="/">
              <img src={logo} alt="Example" />
            </Link>
            <button
              className="navbar-toggler text-white px-0 py-0 border-0 focus-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mynavbar"
            >
              <i className="fa-solid fa-bars fs-3"></i>
            </button>
            <div className="collapse navbar-collapse" id="mynavbar">
              <ul className="navbar-nav me-auto">
                <li className="nav-item px-lg-2">
                  <NavLink className="nav-link text-op " to="/">
                    {" "}
                    Home
                  </NavLink>
                </li>
                <li className="nav-item px-lg-2">
                  <NavLink className="nav-link text-op" to="/games">
                    {" "}
                    Games
                  </NavLink>
                </li>
                <li className="nav-item px-lg-2">
                  <NavLink className="nav-link text-op" to="/blogs">
                    {" "}
                    Blogs
                  </NavLink>
                </li>
                <li className="nav-item px-lg-2">
                  <NavLink className="nav-link text-op" to="/contact">
                    Contact Us
                  </NavLink>
                </li>
              </ul>
              <div className="d-flex align-items-center mt-3 mt-sm-0">
                <MyModal />
                <NavLink className="nav-link text-op" to="/profile">
                  <img src={profile} className="profile" alt="Example" />
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
        <Outlet />
        <div className="bg-black text-white">
          <div className="mycontainer">
            <div className="py-5">
              <div className="d-flex justify-content-end pb-5 border-bottom border-1">
                <button className="bg-primary border-0 rounded-3 py-2 px-4 fs-6 text-white">
                  Sign Up
                </button>
              </div>
              <div className="row pt-5">
                <div className="col-sm-6 my-2 my-md-0 col-md-3 col-lg-3">
                  <div>
                    <img src={logo} alt="" />
                  </div>
                </div>
                <div className="col-sm-6 my-2 my-md-0 col-md-3 col-lg-3 d-flex flex-column align-items-md-center">
                  <p className="mb-0 text-light small">
                    In publishing and graphic design, Lorem ipsum is a
                    placeholder text commonly In publishing and graphic design,
                    Lorem ipsum is a placeholder text commonly
                  </p>
                </div>
                <div className="col-sm-6 my-2 my-md-0 col-md-2 col-lg-3 d-flex flex-column align-items-md-center">
                  <div>
                    <h2 className="fs-5 pb-2">Pages</h2>
                    <Link
                      className="d-block my-2 text-light text-decoration-none"
                      to="/games"
                    >
                      {" "}
                      Categories
                    </Link>

                    <Link
                      className="d-block my-2 text-light text-decoration-none"
                      to="/blogs"
                    >
                      {" "}
                      Blogs
                    </Link>
                  </div>
                </div>
                <div className="col-sm-6 my-2 my-md-0 col-md-4 col-lg-3 ">
                  <div>
                    <form action="">
                      <div className="bg-white rounded-3 d-flex align-items-center px-2">
                        <input
                          type="text"
                          placeholder="Subscribe"
                          className="border-0 text-primary w-100 py-2"
                        />
                        <i className="fas fa-paper-plane text-primary fs-5 ms-2"></i>
                      </div>
                    </form>
                    <Link
                      to="tel:923182322323"
                      className="d-flex text-white align-items-center mt-3 text-decoration-none"
                    >
                      <div className="me-3 ">
                        <i className="fa-solid fa-phone fs-5 border border-1 border-light px-3 py-3 rounded-circle"></i>
                      </div>
                      <div className="d-flex flex-column">
                        <span className="fs-6">+92 318 232 232 3</span>
                        <p className="mb-0 small">Call to Expert</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Layout;
