import React from 'react'
import harry from "../img/user.png";
import gam1 from "../img/game4 7.png";
import gam2 from "../img/game4 8.png";
import rvimg from "../img/20816.png";
import cimg from "../img/Ellipse 1556.png";
import topgame from "../img/game47.png";
import Review from '../Components/Review';
import TopGames from '../Components/TopGames';


function Profile() {
    const reviewsData = [
        {
          name: "Alex Martin",
          star: "4.40",
          rimg: rvimg,
          cimg: cimg,
          des: "Commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
        },
        {
          name: "John Smith",
          star: "4.30",
          rimg: rvimg,
          cimg: cimg,
          des: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
        },
        {
          name: "Jennifer",
          star: "4.00",
          rimg: rvimg,
          cimg: cimg,
          des: "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
        },
        {
            name: "Alex Smith",
            star: "4.00",
            rimg: rvimg,
            cimg: cimg,
            des: "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
          }
      ];

      const topGamesData = [
        {
          gamename: "Alex Martin",
          star: "4.40",
          gameimg: topgame,
          des: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document"
        },
        {
          gamename: "John Smith",
          star: "4.60",
          gameimg: topgame,
          des: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document"
        },
        {
          gamename: "Alex Martin",
          star: "4.40",
          gameimg: topgame,
          des: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document"
        }
      ];
  return (
    <div>
       <section className="bg-hero  position-relative">
            <div className="mycontainer">
                <div className="row justify-content-center py-5">
                    <div className="col-12 col-md-7 col-lg-8">
                        <div className="row justify-content-center justify-content-md-start">
                            <div className="col-12">
                                <h1 className="display-3 fw-md text-capitalize text-center text-md-start text-white">User
                                    Profile
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
            <div className="row justify-content-between">
                <div className="col-lg-6">
                    <div className="h-100">
                        <div className="blue p-3">
                            <div className="d-flex flex-sm-row flex-column align-items-center ">
                                <img src={harry} alt="user" className="user mb-3 mb-sm-0" />
                                <div className="w-100 px-3">
                                    <div className="d-flex align-items-center  justify-content-between">
                                        <div>
                                            <h3 className="mb-0 text-white">Harry Potter</h3>
                                            <p className="mb-0 text-white">Ireland</p>
                                        </div>
                                        <i className="fa-regular text-white fa-pen-to-square"></i>
                                    </div>
                                    <p className="text-white mb-0 mt-0 mb-2">Joined in july 2020, last active this month</p>
                                    <p className="mb-0 mt-3 text-white">19 ratings (3.58 avg)</p>
                                </div>
                            </div>
                        </div>
                        <div className="blue p-3 mt-3 ">
                            <h4 className="text-white">Herry's Games</h4>
                            <div className="row mt-3 justify-content-start">
                                <div className="col-12 col-sm-5 col-md-4 col-lg-6 col-xl-5">
                                    <div className="darkblue h-100 d-flex flex-column align-items-center p-2">
                                        <img src={gam1} alt="NFS" className="img-fluid" />
                                        <p className="mb-0 mt-2 text-white text-center fw-bold">Need For Speed</p>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-5 col-md-4 col-lg-6 col-xl-5">
                                    <div className="darkblue h-100 d-flex flex-column align-items-center p-2">
                                        <img src={gam2} alt="NFS" className="img-fluid" />
                                        <p className="mb-0 mt-2 text-white text-center fw-bold">Grand Theft Auto</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 mt-4 mt-lg-0">
                    <div className="blue">
                        <div className="lightblue py-3 px-2 ">
                            <h4 className="mb-0 text-white mx-2">Feeds & News</h4>
                        </div>
                        <div className="p-3">
                            <div className="darkblue p-3 mt-2">
                                <div className="row align-items-center justify-content-between w-100">
                                    <div className="col-sm-4 col-md-3 d-flex justify-content-center mb-3 mb-sm-0">
                                        <img src={gam2} alt="game" className="img-fluid" />
                                    </div>
                                    <div className="col-sm-8 col-md-9 ">
                                        <p className="fw-bold text-white mb-0">Your 2023 Year in Games</p>
                                        <p className="text-white mb-0 ">
                                            Take a look at Your Year in Games. The
                                            good, the bad, the long, the
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="darkblue p-3 mt-2">
                                <div className="row align-items-center justify-content-between w-100">
                                    <div className="col-sm-4 col-md-3 d-flex justify-content-center mb-3 mb-sm-0">
                                        <img src={gam2} alt="game" className="img-fluid" />
                                    </div>
                                    <div className="col-sm-8 col-md-9 ">
                                        <p className="fw-bold text-white mb-0">Your 2023 Year in Games</p>
                                        <p className="text-white mb-0 ">
                                            Take a look at Your Year in Games. The
                                            good, the bad, the long, the
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="darkblue p-3 mt-2">
                                <div className="row align-items-center justify-content-between w-100">
                                    <div className="col-sm-4 col-md-3 d-flex justify-content-center mb-3 mb-sm-0">
                                        <img src={gam2} alt="game" className="img-fluid" />
                                    </div>
                                    <div className="col-sm-8 col-md-9 ">
                                        <p className="fw-bold text-white mb-0">Your 2023 Year in Games</p>
                                        <p className="text-white mb-0 ">
                                            Take a look at Your Year in Games. The
                                            good, the bad, the long, the
                                        </p>
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
                    {reviewsData.map((review, index) => (
                        <Review key={index} data={review} />
                    ))}
                </div>
            </div>
    </section>
    </div>
  )
}

export default Profile