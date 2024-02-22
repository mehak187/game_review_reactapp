import React from 'react'
import { Link } from 'react-router-dom';

import Review from '../Components/Review';
// ------imgs-------
import game1 from "../img/game4 7.png";
import game2 from "../img/game4 8.png";
import feed1 from "../img/Rectangle 20810.png";
import feed2 from "../img/Rectangle 20811.png";
import rvimg from "../img/20816.png";
import cimg from "../img/Ellipse 1556.png";


function Home() {
  return (
    <div>
         <section className="bg-hero">
            <div className="mycontainer">
                <div className="row justify-content-center py-5">
                    <div className="col-lg-10">
                        <h1 className="display-5 fw-md text-capitalize text-center text-white">Ultimate games reviews
                            <span>platform.</span>
                        </h1>
                    </div>
                    <div className="col-lg-5">
                        <div
                            className="d-flex align-items-center justify-content-between border-s rounded-4 mt-3 px-2 py-2 bg-transparent">
                            <input type="text" placeholder="Search here" className="w-100 text-white bg-transparent border-0 px-2"></input>
                            <button type="submit" className="border-0 sky px-5 rounded-3 py-2">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="darkblue ">
            <div className="mycontainer catg py-5">
                <div className="row justify-content-between">
                    <div className="col-12 col-sm-5 my-3 col-lg-3 p-md-0">
                        <div className="blue d-flex flex-column h-100">
                            <div className="sky py-3 px-2 d-flex align-items-center">
                                <i className="mx-2 fs-4 fa-solid fa-users"></i>
                                <p className="mb-0 fw-bold">Friends</p>
                            </div>
                            <div className="mt-3 px-2">
                                <p className="mb-0 text-white mx-2">Refer a Friend</p>
                                <div className="d-flex align-items-center justify-content-between skyborder px-3 py-2 blue rounded-3">
                                    <input type="text" placeholder="Email" className="w-100 mx-2 text-white blue border-0" />
                                    <i className="fa-solid fa-paper-plane text-white"></i>
                                </div>
                            </div>
                            <div className="my-4 px-2">
                                <div className="borderbtm">
                                    <div className="d-flex align-items-center mx-2 my-2">
                                        <i className="fa-solid fs-5 fa-user text-white mx-2"></i>
                                        <p className="mb-0 text-white mx-2">Alex Martin</p>
                                    </div>
                                </div>
                                <div className="borderbtm">
                                    <div className="d-flex align-items-center mx-2 my-2">
                                        <i className="fa-solid fs-5 fa-user text-white mx-2"></i>
                                        <p className="mb-0 text-white mx-2">Alex Martin</p>
                                    </div>
                                </div>
                                <div className="borderbtm">
                                    <div className="d-flex align-items-center mx-2 my-2">
                                        <i className="fa-solid fs-5 fa-user text-white mx-2"></i>
                                        <p className="mb-0 text-white mx-2">Alex Martin</p>
                                    </div>
                                </div>
                                <div className="borderbtm">
                                    <div className="d-flex align-items-center mx-2 my-2">
                                        <i className="fa-solid fs-5 fa-user text-white mx-2"></i>
                                        <p className="mb-0 text-white mx-2">Alex Martin</p>
                                    </div>
                                </div>
                                <div className="borderbtm">
                                    <div className="d-flex align-items-center mx-2 my-2">
                                        <i className="fa-solid fs-5 fa-user text-white mx-2"></i>
                                        <p className="mb-0 text-white mx-2">Alex Martin</p>
                                    </div>
                                </div>
                                <div className="borderbtm">
                                    <div className="d-flex align-items-center mx-2 my-2">
                                        <i className="fa-solid fs-5 fa-user text-white mx-2"></i>
                                        <p className="mb-0 text-white mx-2">Alex Martin</p>
                                    </div>
                                </div>
                                <div className="borderbtm">
                                    <div className="d-flex align-items-center mx-2 my-2">
                                        <i className="fa-solid fs-5 fa-user text-white mx-2"></i>
                                        <p className="mb-0 text-white mx-2">Alex Martin</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-7 my-3 col-lg-5">
                        <div className="h-100">
                            <div className="blue p-3">
                                <h4 className="mb-0 text-white mx-2">Currently playing</h4>
                                <p className="text-secondary mx-2">What are you Playing Currently?</p>
                                <div className="d-flex align-items-center justify-content-between skyborder rounded-3 px-1 py-1 blue">
                                    <input type="text" placeholder="Search here"
                                        className="w-100 mx-2 text-white blue border-0" />
                                    <button type="submit" className="border-0 sky px-4 rounded-3 py-2">Search</button>
                                </div>
                            </div>
                            <div className="blue p-3 mt-3 recommend">
                                <h4 className="text-white">Recommendations</h4>
                                <div className="row mt-3">
                                    <div className="col-6">
                                        <div className="darkblue d-flex flex-column h-100 p-2">
                                            <img src={game1} alt="NFS" className="img-fluid object-cover h-100 w-100" />
                                            <p className="mb-0 mt-2 text-white text-center fw-bold">Need For Speed</p>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="darkblue d-flex flex-column h-100 p-2">
                                            <img src={game2} alt="NFS" className="img-fluid object-cover h-100 w-100" />
                                            <p className="mb-0 mt-2 text-white text-center fw-bold">Grand Theft Auto</p>
                                        </div>
                                    </div>
                                </div>
                                <a href="#" className="skyclr text-center d-block mt-3 text-center">See more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 p-md-0 my-3">
                        <div className="blue">
                            <div className="lightblue py-3 px-2 ">
                                <h4 className="mb-0 text-white mx-2">Feeds & News</h4>
                            </div>
                            <div className="p-3">
                                <div className="darkblue p-3">
                                    <p className="fw-bold text-white mb-0">Feeds Heading</p>
                                    <p className="text-secondary mb-0">
                                        In publishing and graphic design, Lorem ipsum is a placeholder text commonly
                                        used to demonstrate the visual form of a document or a typeface without relying
                                        on meaningful content.
                                    </p>
                                    <div className="d-flex flex-wrap align-items-center mt-3">
                                        <div className="d-flex align-items-center my-2 me-3">
                                            <i className="fa-regular fs-5 fa-thumbs-up text-white"></i>
                                            <p className="mb-0 mx-2 text-secondary">32 Likes</p>
                                        </div>
                                        <div className="d-flex align-items-center my-2 ">
                                            <i className="fa-regular fs-5 fa-comment text-white"></i>
                                            <p className="mb-0 mx-2 text-secondary">15 comments</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="darkblue p-3 mt-3">
                                    <p className="fw-bold text-white  mb-0">Feeds Heading</p>
                                    <div className="row mt-2 feeds">
                                        <div className="col-6">
                                            <img src={feed1} alt="Rectangle" className="img-fluid" />
                                        </div>
                                        <div className="col-6">
                                            <img src={feed2} alt="Rectangle" className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className="d-flex flex-wrap align-items-center mt-3">
                                        <div className="d-flex align-items-center my-2 me-3">
                                            <i className="fa-regular fs-5 fa-thumbs-up text-white"></i>
                                            <p className="mb-0 mx-2 text-secondary">32 Likes</p>
                                        </div>
                                        <div className="d-flex align-items-center my-2 ">
                                            <i className="fa-regular fs-5 fa-comment text-white"></i>
                                            <p className="mb-0 mx-2 text-secondary">15 comments</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mycontainer catg py-5">
                <h2 className="text-white text-center fs-1">Popular Reviews</h2>
                <div className="row">
                     <Review data={{name:"Alex Martin",star:"4.30",rimg:rvimg,cimg:cimg,des:"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."}}/>
                     <Review data={{name:"Alex Martin",star:"4.00",rimg:rvimg,cimg:cimg,des:"Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."}}/>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Home