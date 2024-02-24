import React from 'react'
import topgame from "../img/game47.png";
import people from "../img/51971.png";
import user from "../img/user.png";
import sidebiew from "../img/side-view-smiley-woman-playing-videogame 2.png";
import TopGames from '../Components/TopGames';
import rvimg from "../img/20816.png";
import cimg from "../img/Ellipse 1556.png";
import AddReview from '../Components/AddReview';

function ReviewGame() {
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
  return (
    <div>
        <section className="bg-hero  position-relative">
            <div className="mycontainer">
                <div className="row justify-content-center py-5">
                    <div className="col-12 col-md-7 col-lg-8">
                        <div className="row justify-content-center justify-content-md-start">
                            <div className="col-12">
                                <h1 className="display-3 fw-md text-capitalize text-center text-md-start text-white">Game Name Here
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
                <div className="row justify-content-center justify-content-md-between">
                    <div className="col-sm-9 col-md-5 mb-4 mb-md-0 col-lg-4 gme">
                        <img src={topgame} alt="rectangle" className="rounded-5 w-100" />
                    </div>
                    <div className="col-md-7 col-lg-8">
                        <h4 className="text-white">The Seven Husbands of Evelyn Hugo</h4>
                        <p className="text-white">Yulin Kuang</p>
                        <div className="my-3 d-flex flex-wrap align-items-center">
                            <div className="me-3">
                                <i className="fa-solid fs-5 fa-star"></i>
                                <i className="fa-solid fs-5 fa-star"></i>
                                <i className="fa-solid fs-5 fa-star"></i>
                                <i className="fa-solid fs-5 fa-star"></i>
                                <i className="fa-solid fs-5 fa-star"></i>
                            </div>
                            <div className="d-flex flex-wrap align-items-center">
                                <p className="text-secondary fs-3 me-4 mb-0 fw-bold">5.00 / 5.00</p>
                                <p className="text-secondary mb-0">168 ratings , 85 reviews</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-white">
                                <b>A jilted beauty and a regretful duke discover that second chances can be divine in this
                                    diverse Regency romance for fans of Bridgerton</b> <br /><br />
                                <b>Second chances are even sweeter. . . . </b><br /><br />
                                Aphrodite Du Bell has always resented her name. While the members of the ton, and even the
                                queen herself, praise her warm brown skin, perfect curls, and exquisite features, Aphrodite
                                can't help but think that living up to the literal goddess of beauty is asking a bit much.
                                Her renowned loveliness certainly didn't stop the love of her life from jilting her and
                                marrying another woman four years ago. <br /><br />
                                When Aphrodite's formidable mother summons her back to London to aid in her sister's debut,
                                she has no choice but to acquiesce. But Aphrodite is determined to ignore one man in
                                particular: Evander Eagleman, the Duke of Everely, the man who devastated her all those
                                years ago. Yet why does her guileless heart still flutter at the sight of him? <br /><br />
                                Evander Eagleman lost his chance for true love, but now that he is an unattached widower, he
                                is determined to win back Aphrodite's trust--and her hand in marriage. But just as the
                                couple make strides to mend old wounds, Evander's true reason for rejecting Aphrodite
                                threatens their coveted future . . . and even their lives.
                            </p>
                        </div>
                        <div className="d-flex flex-wrap align-items-center justify-content-between bordertb py-2">
                            <div className="d-flex align-items-center py-2">
                                <img src={people} alt="" />
                                <p className="text-white mx-2 mb-0">160 people are currently reading</p>
                            </div>
                            <div className="d-flex align-items-center py-2">
                                <img src={people} alt="" />
                                <p className="text-white mx-2 mb-0">14.4k people want to see the game</p>
                            </div>
                        </div>
                        <div className="borderbtm py-3">
                            <h4 className="text-white">About the company</h4>
                            <div className="d-flex align-items-center">
                                <img src={user} alt="" className="img-fluid user1" />
                                <div className="mx-1 mx-sm-3">
                                    <h5 className="text-white mx-2 mb-0">j.j.Alube</h5>
                                    <p className="text-white mx-2 mb-0 mt-1">33 books . 5,451 followers</p>
                                </div>
                            </div>
                            <div className="my-3">
                                <p className="text-white">
                                    I’m a twenty-year-old something born in Montreal, Canada but currently living in
                                    Virginia for school. I would tell you want my major is however after two years I still
                                    have no idea what I’m doing. <br /> <br />
                                    So I’m a writer (duh that’s how you found me), movie enthusiast, and self-proclaimed
                                    chef. I love music even though I can’t sing or dance to save my life. (That doesn’t
                                    necessarily stop me but you’ve been warned.) <br /><br />
                                    I started Ruthless People the summer of 2013 in hopes of giving myself a new type of
                                    love and crime drama. I never knew so many people thought like me! I feel truly blessed
                                    to have fans like you all! Writing is my true love and having you all enjoy my words is
                                    a dream come true.</p>
                            </div>
                        </div>
                        <div className="borderbtm py-3">
                            <h4 className="text-white mb-3">Players also enjoyed</h4>
                            <div className="row">
                                <div className="col-sm-6 col-lg-4 col-xl-3">
                                    <div className="card darkblue border-0 h-100">
                                        <img src={sidebiew}
                                            className="card-img-top rounded-5" alt="..." />
                                        <div className="card-body px-0">
                                            <h5 className="card-title text-white">GTA</h5>
                                            <p className="card-text text-white mb-0">Yulin Kuang</p>
                                            <div className="my-3 d-flex align-items-center ">
                                                <i className="fa-solid fs-5 fa-star me-2"></i>
                                                <p className="text-white mb-0 fw-bold">5.00 / 5.00</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-4 col-xl-3">
                                    <div className="card darkblue border-0 h-100">
                                        <img src={sidebiew}
                                            className="card-img-top rounded-5" alt="..." />
                                        <div className="card-body px-0">
                                            <h5 className="card-title text-white">GTA</h5>
                                            <p className="card-text text-white mb-0">Yulin Kuang</p>
                                            <div className="my-3 d-flex align-items-center ">
                                                <i className="fa-solid fs-5 fa-star me-2"></i>
                                                <p className="text-white mb-0 fw-bold">5.00 / 5.00</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-4 col-xl-3">
                                    <div className="card darkblue border-0 h-100">
                                        <img src={sidebiew}
                                            className="card-img-top rounded-5" alt="..." />
                                        <div className="card-body px-0">
                                            <h5 className="card-title text-white">GTA</h5>
                                            <p className="card-text text-white mb-0">Yulin Kuang</p>
                                            <div className="my-3 d-flex align-items-center ">
                                                <i className="fa-solid fs-5 fa-star me-2"></i>
                                                <p className="text-white mb-0 fw-bold">5.00 / 5.00</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-4 col-xl-3">
                                    <div className="card darkblue border-0 h-100">
                                        <img src={sidebiew}
                                            className="card-img-top rounded-5" alt="..." />
                                        <div className="card-body px-0">
                                            <h5 className="card-title text-white">GTA</h5>
                                            <p className="card-text text-white mb-0">Yulin Kuang</p>
                                            <div className="my-3 d-flex align-items-center ">
                                                <i className="fa-solid fs-5 fa-star me-2"></i>
                                                <p className="text-white mb-0 fw-bold">5.00 / 5.00</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a href="#" className="text-white text-decoration-none">All similar games </a>
                        </div>
                        <div className="borderbtm py-3">
                            <h4 className="text-white mb-4">Ratings & Reviews</h4>
                            <div>
                                <div className="d-flex flex-column align-items-center">
                                    <i className="fa-regular bg-white p-4 rounded-circle mb-0 fs-1 fa-user"></i>
                                    <h4 className="text-white my-3"> What do you think ?</h4>
                                    <div className="my-3 d-flex align-items-center">
                                        <i className="fa-solid fs-5 mx-2 fa-star"></i>
                                        <i className="fa-solid fs-5 mx-2 fa-star"></i>
                                        <i className="fa-solid fs-5 mx-2 fa-star"></i>
                                        <i className="fa-solid fs-5 mx-2 fa-star"></i>
                                        <i className="fa-solid fs-5 mx-2 fa-star"></i>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <h4 className="text-white my-3 ">Rate this game</h4>
                                        <AddReview />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="py-3">
                            <h4 className="text-white">Community Reviews</h4>
                            <div className="my-3 d-flex flex-wrap align-items-center">
                                <div>
                                    <i className="fa-solid fs-5 fa-star"></i>
                                    <i className="fa-solid fs-5 fa-star"></i>
                                    <i className="fa-solid fs-5 fa-star"></i>
                                    <i className="fa-solid fs-5 fa-star"></i>
                                    <i className="fa-solid fs-5 fa-star"></i>
                                </div>
                                <div className="d-flex flex-wrap align-items-center">
                                    <p className="text-white fs-3 mx-3 mb-0 fw-bold">5.00 / 5.00</p>
                                    <p className="text-secondary mx-2 mb-0">168 ratings , 85 reviews</p>
                                </div>
                            </div>
                            <div>
                                <div className="row align-items-center mt-3 justify-content-between">
                                    <p className="col-3 col-sm-2 col-md-3 col-lg-2 text-center text-sm-start text-white fs-6 mb-0 fw-bold">5 stars</p>
                                    <div className="progress col-4 col-sm-6 col-md-5 col-lg-6 px-0 my-2 my-sm-0">
                                        <div className="progress-bar bg-warning w-100" role="progressbar" aria-valuenow="100"
                                            aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <p className="text-secondary mb-0 ps-md-4 col-sm-4 col-5">1,689,633 ratings(58%)</p>
                                </div>
                                <div className="row align-items-center mt-3 justify-content-between">
                                    <p className="col-3 col-sm-2 col-md-3 col-lg-2 text-center text-sm-start text-white fs-6 mb-0 fw-bold">4 stars</p>
                                    <div className="progress col-4 col-sm-6 col-md-5 col-lg-6 px-0 my-2 my-sm-0">
                                        <div className="progress-bar bg-warning w-75" role="progressbar" aria-valuenow="75"
                                            aria-valuemin="0" aria-valuemax="75"></div>
                                    </div>
                                    <p className="text-secondary mb-0 ps-md-4 col-sm-4 col-5">1,689,633 ratings(58%)</p>
                                </div>
                                <div className="row align-items-center mt-3 justify-content-between">
                                    <p className="col-3 col-sm-2 col-md-3 col-lg-2 text-center text-sm-start text-white fs-6 mb-0 fw-bold">3 stars</p>
                                    <div className="progress col-4 col-sm-6 col-md-5 col-lg-6 px-0 my-2 my-sm-0">
                                        <div className="progress-bar bg-warning w-50" role="progressbar" aria-valuenow="50"
                                            aria-valuemin="0" aria-valuemax="50"></div>
                                    </div>
                                    <p className="text-secondary mb-0 ps-md-4 col-sm-4 col-5">1,689,633 ratings(58%)</p>
                                </div>
                                <div className="row align-items-center mt-3 justify-content-between">
                                    <p className="col-3 col-sm-2 col-md-3 col-lg-2 text-center text-sm-start text-white fs-6 mb-0 fw-bold">2 stars</p>
                                    <div className="progress col-4 col-sm-6 col-md-5 col-lg-6 px-0 my-2 my-sm-0">
                                        <div className="progress-bar bg-warning w-25" role="progressbar" aria-valuenow="25"
                                            aria-valuemin="0" aria-valuemax="25"></div>
                                    </div>
                                    <p className="text-secondary mb-0 ps-md-4 col-sm-4 col-5">1,689,633 ratings(58%)</p>
                                </div>
                            </div>
                            <div>
                                <div className="row">
                                    {reviewsData.map((review, index) => (
                                        <div className="col-12 mt-3 borderbtm" key={index}>
                                            <div className="p-3">
                                                <div className="d-flex align-items-center justify-content-between flex-wrap">
                                                    <div className="d-flex align-items-center my-2">
                                                        <img src={review.cimg} alt="user" />
                                                        <div className="mx-3">
                                                            <p className="text-white mb-0 fw-bold">{review.name}</p>
                                                            <div>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                                <i className="fa-solid fa-star"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="text-white">{review.date}</p>
                                                </div>
                                                <div>
                                                    <p className="text-white mb-0">
                                                    {review.des}
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="text-center mt-3">
                                    <a href="#" className="text-decoration-none text-secondary">Load more </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className='bg-dark2'>
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

export default ReviewGame