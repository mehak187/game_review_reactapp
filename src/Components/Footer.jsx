import React from 'react'

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate,
    Outlet,
    BrowserRouter,
  } from "react-router-dom";
  import logo from "../img/logo.png";

function Footer() {
  return (
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
                            In publishing and graphic design, Lorem ipsum is a placeholder text commonly In publishing
                            and graphic design, Lorem ipsum is a placeholder text commonly
                        </p>
                    </div>
                    <div className="col-sm-6 my-2 my-md-0 col-md-2 col-lg-3 d-flex flex-column align-items-md-center">
                        <div>
                            <h2 className="fs-5 pb-2">
                                Pages
                            </h2>
                            <a href="/games" className="d-block my-2 text-light text-decoration-none">Categories</a>
                            <a href="/blogs" className="d-block my-2 text-light text-decoration-none">Blogs</a>
                        </div>
                    </div>
                    <div className="col-sm-6 my-2 my-md-0 col-md-4 col-lg-3 ">
                        <div>
                            <form action="">
                                <div className="bg-white rounded-3 d-flex align-items-center px-2">
                                    <input type="text" placeholder="Subscribe" className="border-0 text-primary w-100 py-2" />
                                    <i className="fas fa-paper-plane text-primary fs-5 ms-2"></i>
                                </div>
                            </form>
                            <a href="tel:923182322323"
                                className="d-flex text-white align-items-center mt-3 text-decoration-none">
                                <div className="me-3 ">
                                    <i
                                        className="fa-solid fa-phone fs-5 border border-1 border-light px-3 py-3 rounded-circle"></i>
                                </div>
                                <div className="d-flex flex-column">
                                    <span className="fs-6">+92 318 232 232 3</span>
                                    <p className="mb-0 small">Call to Expert</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer