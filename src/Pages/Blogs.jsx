import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
  BrowserRouter,
} from "react-router-dom";
import blogimg from "../img/game4.png";

function Blogs() {
  const latestblog = [
    {
      date: "18 January 2021",
      blogtitle: "IF YOU HAVE SEEN APPLE'S RECENT JABS.",
      blogimg: blogimg,
    },
    {
      date: "18 January 2021",
      blogtitle: "IF YOU HAVE SEEN APPLE'S RECENT JABS.",
      blogimg: blogimg,
    },
    {
      date: "18 January 2021",
      blogtitle: "IF YOU HAVE SEEN APPLE'S RECENT JABS.",
      blogimg: blogimg,
    },
    {
      date: "18 January 2021",
      blogtitle: "IF YOU HAVE SEEN APPLE'S RECENT JABS.",
      blogimg: blogimg,
    },
    {
      date: "18 January 2021",
      blogtitle: "IF YOU HAVE SEEN APPLE'S RECENT JABS.",
      blogimg: blogimg,
    },
    {
      date: "18 January 2021",
      blogtitle: "IF YOU HAVE SEEN APPLE'S RECENT JABS.",
      blogimg: blogimg,
    },
    {
      date: "18 January 2021",
      blogtitle: "IF YOU HAVE SEEN APPLE'S RECENT JABS.",
      blogimg: blogimg,
    },
    {
      date: "18 January 2021",
      blogtitle: "IF YOU HAVE SEEN APPLE'S RECENT JABS.",
      blogimg: blogimg,
    },
    {
      date: "18 January 2021",
      blogtitle: "IF YOU HAVE SEEN APPLE'S RECENT JABS.",
      blogimg: blogimg,
    },
  ];
  return (
    <div>
       <section className="bg-hero blog-hero position-relative">
            <div className="mycontainer">
                <div className="row justify-content-center py-5">
                    <div className="col-12 col-md-7 col-lg-8">
                        <div className="row justify-content-center justify-content-md-start">
                            <div className="col-12">
                                <h1 className="display-3 fw-md text-capitalize text-center text-md-start text-white">Blogs
                                </h1>
                            </div>
                          
                        </div>
                    </div>
                    <div className="col-12 col-md-5 col-lg-4 ">
                      
                    </div>
                </div>
            </div>
        </section>
        <section className="darkblue">
        <div className="mycontainer py-5">
            <div className=" py-3">
                <h4 className="display-3 fw-md text-white text-center">LATEST BLOG</h4>
            </div>
            <div className="row justify-content-between">
              {latestblog.map((lblog, index) => (
                <div className="col-md-6 col-xl-4 px-3 pt-2" key={index}>
                    <div className="row justify-content-center navy align-items-center p-3 rounded-5">
                        <div className="col-12 col-sm-4 p-0 mb-3 mb-sm-0 d-flex ">
                            <img src={lblog.blogimg} alt=".." className="w-100 rounded-4" />
                        </div>
                        <div className="col-sm-8">
                            <p className="text-secondary mb-1 mb-sm-3">{lblog.date} </p>
                            <h5 className="text-white">{lblog.blogtitle}</h5>
                           <Link className="nav-link text-op active-color text-primary text-decoration-none fs-5" to="/blogdetails" >Review</Link>
                        </div>
                    </div>
                </div>
              ))}
            </div>
        </div>
    </section>
    </div>
  )
}

export default Blogs