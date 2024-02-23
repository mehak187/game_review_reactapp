import React from "react";

function Contact() {
  return (
    <div>
       <section className="bg-dark2 py-4">
        <div className="mycontainer ">
            <div className="row justify-content-center align-items-center bg-hero contact-border px-3 px-sm-4 px-md-5 ps-lg-5 pe-lg-0 mx-1 mx-md-4 ">
                <div className="col-12 col-lg-7 col-xl-8 py-5 py-xl-4">
                    <div className="row justify-content-center justify-content-md-start">
                        <div className="col-12">
                            <h1 className="display-3 fw-md text-capitalize text-center text-md-start text-white">Contact Us
                            </h1>
                            <p className="text-white mt-2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex omnis magni deserunt aliquid recusandae eos harum excepturi beatae rerum, sapiente atque iusto itaque repellat doloribus et, quasi eveniet iste ut?
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi beatae rerum, sapiente atque iusto itaque repellat doloribus et, quasi eveniet iste ut?
                            </p>
                        </div>
                       
                    </div>
                </div>
                <div className="col-12 col-md-8 col-lg-5 col-xl-4 px-2 px-lg-0 pb-4 pb-sm-5 pb-lg-0">
                   <img src="img/contact.png" alt="" className="w-100 contact-img" />
                </div>
            </div>
        </div>
        <div className="mycontainer my-5">
            <div className="row justify-content-center align-items-center py-5 bg-hero contactform-border px-1 px-sm-3  px-lg-5 mx-1 mx-md-4 ">
               <h2 className="fs-1 text-white text-uppercase text-center">
                Lets talk us
               </h2>
               <div className="row mt-4">
                <div className="col-md-6">
                    <form action="">
                        <div className="row">
                            <div className="col-sm-6 my-3">
                                <input type="text" className="bg-white rounded-3 px-3 py-2 border-0 w-100 focus-none " placeholder="Name" name="name" />
                            </div>
                            <div className="col-sm-6 my-3">
                                <input type="Email" className="bg-white rounded-3 px-3 py-2 border-0 w-100 focus-none " placeholder="Email" name="email" />
                            </div>
                            <div className="col-12 my-3">
                                <input type="text" className="bg-white rounded-3 px-3 py-2 border-0 w-100 focus-none " placeholder="Subject" name="subject" />
                            </div>
                            <div className="col-12 my-3">
                                <textarea name="" id="" rows="6" className="bg-white rounded-3 px-3 py-2 border-0 w-100 focus-none " placeholder="Description"></textarea>
                            </div>
                            <div className="col-12">
                            <button type="submit" className="bg-primary text-white rounded-3 py-2 px-3 w-100 border-0 focus-none">Contact Us</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-md-6 col-lg-5 offset-lg-1 mt-4 mt-md-0">
                   <h2 className="fs-1 text-white">
                    Drop a message
                   </h2>
                   <p className="text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium exercitationem, alias temporibus explicabo officiis neque atque debitis iure quasi ex nesciunt minima rerum aliquid est dignissimos voluptatem nemo laborum illum!</p>
                   <div className="d-flex  my-2">
                    <i className="fas fa-map-marker-alt text-white me-2 mt-1"></i>
                    <div>
                        <h6 className="fs-5 text-white">Office</h6>
                        <p className="mb-0 text-white">Location of the office here</p>
                    </div>
                   </div>
                   <div className="d-flex  my-2">
                    <i className="fa-solid fa-phone text-white me-2 mt-1"></i>
                    <div>
                        <h6 className="fs-5 text-white">Call Center</h6>
                        <p className="mb-0 text-white">+300 8945687</p>
                        <p className="mb-0 text-white mt-1">+300 8945687</p>
                    </div>
                   </div>
                   <div className="d-flex  my-2">
                    <i className="fa-solid fa-envelope text-white me-2 mt-1"></i>
                    <div>
                        <h6 className="fs-5 text-white">Email</h6>
                        <p className="mb-0 text-white">username@gmail.com</p>
                        <p className="mb-0 text-white mt-1">username@gmail.com</p>
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

export default Contact;
