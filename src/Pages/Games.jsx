import React from "react";
import topgame from "../img/game47.png";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
  BrowserRouter,
} from "react-router-dom";
function Games() {
  const gcategory = [
    {
      categoryname: "Category Name",
    },
    {
      categoryname: "Category Name",
    },
    {
      categoryname: "Category Name",
    },
    {
      categoryname: "Category Name",
    },
    {
      categoryname: "Category Name",
    },
  ];
  const gamecategory = [
    {
        date: "18 January 2021",
        title: "IF YOU HAVE SEEN APPLE'S RECENT JABS.",
        gamecimg: topgame,
        des: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document"
    },
    {
        date: "20 February 2021",
        title: "IF YOU HAVE SEEN APPLE'S RECENT JABS.",
        gamecimg: topgame,
        des: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document"
    },
    {
        date: "20 March 2021",
        title: "IF YOU HAVE SEEN APPLE'S RECENT JABS.",
        gamecimg: topgame,
        des: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document"
    },
    {
        date: "25 January 2021",
        title: "IF YOU HAVE SEEN APPLE'S RECENT JABS.",
        gamecimg: topgame,
        des: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document"
    },
    {
        date: "27 January 2021",
        title: "IF YOU HAVE SEEN APPLE'S RECENT JABS.",
        gamecimg: topgame,
        des: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document"
    },
  ];
  return (
    <div>
      <section className="bg-hero game-hero position-relative">
        <div className="mycontainer">
          <div className="row justify-content-center py-5">
            <div className="col-12 col-md-7 col-lg-8">
              <div className="row justify-content-center justify-content-md-start">
                <div className="col-12">
                  <h1 className="display-3 fw-md text-capitalize text-center text-md-start text-white">
                    Browse Our Category
                  </h1>
                </div>
                <div className="col-md-9">
                  <div className="d-flex align-items-center justify-content-between rounded-pill mt-3  bg-white">
                    <input
                      type="text"
                      placeholder="Search here"
                      className="w-100 text-white bg-transparent border-0 pe-2 ps-4"
                    />
                    <button
                      type="submit"
                      className="border-0 sky px-3 rounded-3 py-2"
                    >
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-5 col-lg-4 "></div>
          </div>
        </div>
      </section>
      <section className="darkblue">
        <div className="mycontainer py-5">
          <div className="row justify-content-between">
            <div className="col-sm-5 col-md-4 col-lg-3">
              <div className="milky p-3 rounded-5 my-0 h-100">
                <div className="navy justify-content-between d-flex align-items-center p-3 rounded-4 ">
                  <h4 className=" text-center fs-5 fw-normal text-white mb-0">
                    Categories
                  </h4>
                  <i className="fa-solid fa-caret-down text-white d-sm-none open-catg"></i>
                </div>
                <div className="lists lists-open">
                  <ul className="mb-0 ps-0 mx-4">
                    {gcategory.map((category, index) => (
                      <li key={index}>
                        <a href="#" className="">
                          {category.categoryname}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-7 mt-4 mt-sm-0 col-md-8 col-lg-9 px-4 px-sm-3">
            {gamecategory.map((gamec, index) => (
                <div className="row navy align-items-center justify-content-center p-3 mt-3 rounded-5" key={index}>
                    <div className="col-lg-3 p-0 d-flex justify-content-center mb-3 mb-lg-0">
                        <img src={gamec.gamecimg} alt=".." className="img-fluid rounded-4" />
                    </div>
                    <div className="col-lg-9">
                        <p className="text-secondary mb-0">{gamec.date} </p>
                        <h4 className="text-white mb-0 mt-2">{gamec.title}</h4>
                        <p className="text-secondary mb-0">{gamec.des}</p>
                        <div className="d-flex align-items-center justify-content-between">
                            <Link className="text-blue text-decoration-none fs-5 mb-0" to="/reviewgame" >Review</Link>
                        </div>
                    </div>
                </div>
           ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Games;
