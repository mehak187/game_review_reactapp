import React from "react";

function TopGames({data}) {
  return (
    <div className="col-sm-6 col-lg-4 my-2">
      <div className="card my-0 navy rounded-5 px-3 pt-3 h-100">
        <img
          src={data.gameimg}
          className="card-img-top rounded-5"
          alt="..."
        />
        <div className="py-3 px-0">
          <h5 className="card-title text-white">{data.gamename}</h5>
          <p className="card-text text-secondary mb-0">
          {data.des}
          </p>
          <div className="my-3 d-flex align-items-center justify-content-between flex-wrap">
            <div>
              <i className="fa-solid fs-4 fa-star"></i>
              <i className="fa-solid fs-4 fa-star"></i>
              <i className="fa-solid fs-4 fa-star"></i>
              <i className="fa-solid fs-4 fa-star"></i>
              <i className="fa-solid fs-4 fa-star"></i>
            </div>
            <div>
              <p className="text-secondary mb-0 fw-bold">{data.star} / 5.00</p>
            </div>
          </div>
          <button className="w-100 border-0 sky py-3 rounded-5">
            Rate & Review
          </button>
        </div>
      </div>
    </div>
  );
}

export default TopGames;
