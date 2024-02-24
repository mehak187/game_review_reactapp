import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Signup from '../Components/Signup';


import profile from "../img/login.png";
import social1 from "../img/social.png";
import social2 from "../img/social2.png";
import social3 from "../img/social3.png";


function MyModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="bg-transparent px-3 py-2 rounded-3 border-s text-s me-3 login-btn"  variant="primary" onClick={handleShow}>
        Login here
      </Button>

      <Modal className='logmodal' centered show={show} onHide={handleClose}>
      
      <div className="mycontainer d-flex align-items-center justify-content-center vh-99">
            <div className="col-lg-10 d-flex bg-pink custom-model-inner position-relative">
                <div className="row box justify-content-center ">
                    <div className="d-none d-md-block col-md-6 me-0 pe-0 ps-0 login-img">
                       <div className="bg-white h-100">
                        <img src={profile} alt="login" className="object-cover  px-4 py-4 h-100 w-100" />
                       </div>
                    </div>

                    <div className="col-11 col-sm-9 col-md-6 login-right ">
                        <div className="row justify-content-center">
                            <div className="col-md-10 px-4 col-lg-10 pe-md-4 px-md-0 py-4">
                            <Modal.Header className='py-0 my-0 border-0 text-black' closeButton>
                            </Modal.Header>
                                <p className="fs-5 mb-0 mt-4 fw-md text-center">
                                    Welcome to the review games
                                </p>
                                <p className="mb-0 text-center">
                                    Please enter your login details below or if you are first time here you can Register
                                    It's Free!
                                </p>
                                <form action="">
                                    <div
                                        className="px-2 py-3 rounded-4 d-flex align-items-center mt-3 px-4 bg-white shadow">
                                        <i className="far fa-envelope me-2"></i>
                                        <input className="border-0 w-100 focus-none" type="email" placeholder="Email" />
                                    </div>
                                    <div
                                        className="px-2 py-3 rounded-4 d-flex align-items-center mt-3 px-4 bg-white shadow">
                                        <i className="fas fa-lock me-2"></i>
                                        <input className="border-0 w-100 focus-none" type="email" placeholder="Password" />
                                    </div>
                                    <a href="#" className="d-flex justify-content-end mt-3 text-black">Forgot password</a>
                                    <div className="mt-4 d-flex justify-content-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                            <input type="checkbox" name="" id="remember" className="me-1 me-sm-2 " />
                                            <label for="remember">Remember Me</label>
                                        </div>
                                        <button
                                            className="text-white border-0 rounded-pill bg-black px-4 px-md-4 px-lg-5 py-2">
                                            Sign in
                                        </button>
                                    </div>
                                    <div className="mt-4">
                                        <p className="mb-0 text-center fw-bold mb-2">
                                            Or Login using:
                                        </p>
                                        <div className="d-flex justify-content-center">
                                            <a href="#" className="mx-2">
                                                <img src={social1} alt="" />
                                            </a>
                                            <a href="#" className="mx-2">
                                                <img src={social2} alt="" />
                                            </a>
                                            <a href="#" className="mx-2">
                                                <img src={social3} alt="" />
                                            </a>
                                        </div>
                                        
                                        <Signup />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </Modal>
    </>
  );
}

export default MyModal;
