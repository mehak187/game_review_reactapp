import React from "react";

function Review({data}) {
  return (
    <div className="col-lg-6 mt-3">
      <div className="d-flex flex-column flex-sm-row align-items-sm-center justify-content-between skyborder">
        <img src={data.rimg} alt="game" className="rvimg h-100 mt-3 px-3 mt-sm-0" />
        <div className="p-3">
          <div className="d-flex justify-content-between align-items-end flex-wrap">
            <div className="d-flex align-items-center">
              <img src={data.cimg} className="rounded-5 h-100 rev-icon" alt="user" />
              <div className="mx-3">
                <p className="text-white mb-0 fw-bold">{data.name}</p>
                <div>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
            </div>
            <p className="mb-0 fs-5 my-2 text-white">{data.star}/5.00</p>
          </div>
          <div className="mt-2">
            <p className="text-col-lg-6 mt-3 text-secondary mb-0 small">
              {data.des}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
