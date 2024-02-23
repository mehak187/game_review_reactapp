import React from 'react'
import user from "../img/user.png";
import video1 from "../img/video1.mp4";
import TopGames from '../Components/TopGames';

import topgame from "../img/game47.png";

function BlogDetails() {
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
       <section className="bg-hero blog-hero position-relative">
            <div className="mycontainer">
                <div className="row justify-content-center py-5">
                    <div className="col-12 col-md-7 col-lg-8">
                        <div className="row justify-content-center justify-content-md-start">
                            <div className="col-lg-8">
                                <h1 className="display-3 fw-md text-capitalize text-center text-md-start text-white">Blog Detail
                                </h1>
                                <p className="text-white text-center text-md-start">"Sed ut perspiciatis unde omnis iste natus
                                    error sit voluptatem
                                    accusantium doloremque laudantium, totam rem aperiam, eaque </p>
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
                <div className="row">
                    <div className="col-sm-6 col-lg-4 gme">
                        <div className="d-flex flex-column text-center align-items-center">
                                <img src={user} alt="user" className="user" />
                                <h4 className="text-white my-3">Silue aline</h4>
                                <p className="text-white">
                                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                    laudantium, totam rem aperiam, eaque
                                </p>
                                <div>
                                    <a href="#"><i className="fa-brands text-white fs-4 brd fa-twitter"></i></a>
                                    <a href="#"><i className="fa-brands text-white fs-4 brd fa-facebook-f"></i></a>
                                    <a href="#"><i className="fa-brands text-white fs-4 brd fa-instagram"></i></a>
                                    <a href="#"><i className="fa-brands text-white fs-4 brd fa-linkedin-in"></i></a>
                                </div>
                        </div>
                    </div>
                    <div className="col-lg-8 mt-4 mt-lg-0">
                        <div className="py-3">
                            <h4 className="text-white fs-1">Game Detail</h4>
                            <p className="text-white">
                                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam, eaque <br />
                                ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                Nemo enim ipsam voluptatem quia <br />
                                voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
                                ratione voluptatem sequi nesciunt. Neque.<br />
                                porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
                                quia non numquam eius modi tempora <br />
                            </p>
                            <div>
                                <video src={video1} controls className="w-100"></video>
                            </div>
                        </div>
                        <div className="py-3">
                            <h4 className="text-white display-5 fw-md">Game Detail</h4>
                            <p className="text-white">
                                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam, eaque <br />
                                ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                Nemo enim ipsam voluptatem quia <br/>
                                voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
                                ratione voluptatem sequi nesciunt. Neque.<br />
                                porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
                                quia non numquam eius modi tempora <br />
                                incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam,
                                quis nostrum exercitationem ullam <br />
                                corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
                                iure reprehenderit qui in ea voluptate <br />
                                velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas
                                nulla pariatur?"<br />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mycontainer py-5">
                <h2 className="text-white fs-1">Top Games</h2>
                <p className="text-white">Browse our created list of games.</p>
                <div className="row">
                    {topGamesData.map((game, index) => (
                        <TopGames key={index} data={game} />
                    ))}
                </div>
            </div>
        </section>
    </div>
  )
}

export default BlogDetails