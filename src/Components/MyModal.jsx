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

      <Modal centered show={show} onHide={handleClose}>
      
      <div class="mycontainer d-flex align-items-center justify-content-center vh-99">
            <div class="col-lg-10 d-flex bg-pink custom-model-inner position-relative">
                <div class="row box justify-content-center ">
                    <div class="d-none d-md-block col-md-6 me-0 pe-0 ps-0 login-img">
                       <div class="bg-white h-100">
                        <img src={profile} alt="login" class="object-cover  px-4 py-4 h-100 w-100" />
                       </div>
                    </div>

                    <div class="col-11 col-sm-9 col-md-6 login-right ">
                        <div class="row justify-content-center">
                            <div class="col-md-10 px-4 col-lg-10 pe-md-4 px-md-0 py-4">
                            <Modal.Header className='py-0 my-0 border-0 text-black' closeButton>
                            </Modal.Header>
                                <p class="fs-5 mb-0 mt-4 fw-md text-center">
                                    Welcome to the review games
                                </p>
                                <p class="mb-0 text-center">
                                    Please enter your login details below or if you are first time here you can Register
                                    It's Free!
                                </p>
                                <form action="">
                                    <div
                                        class="px-2 py-3 rounded-4 d-flex align-items-center mt-3 px-4 bg-white shadow">
                                        <i class="far fa-envelope me-2"></i>
                                        <input class="border-0 w-100 focus-none" type="email" placeholder="Email" />
                                    </div>
                                    <div
                                        class="px-2 py-3 rounded-4 d-flex align-items-center mt-3 px-4 bg-white shadow">
                                        <i class="fas fa-lock me-2"></i>
                                        <input class="border-0 w-100 focus-none" type="email" placeholder="Password" />
                                    </div>
                                    <a href="#" class="d-flex justify-content-end mt-3 text-black">Forgot password</a>
                                    <div class="mt-4 d-flex justify-content-center justify-content-between">
                                        <div class="d-flex align-items-center">
                                            <input type="checkbox" name="" id="remember" class="me-1 me-sm-2 " />
                                            <label for="remember">Remember Me</label>
                                        </div>
                                        <button
                                            class="text-white border-0 rounded-pill bg-black px-4 px-md-4 px-lg-5 py-2">
                                            Sign in
                                        </button>
                                    </div>
                                    <div class="mt-4">
                                        <p class="mb-0 text-center fw-bold mb-2">
                                            Or Login using:
                                        </p>
                                        <div class="d-flex justify-content-center">
                                            <a href="#" class="mx-2">
                                                <img src={social1} alt="" />
                                            </a>
                                            <a href="#" class="mx-2">
                                                <img src={social2} alt="" />
                                            </a>
                                            <a href="#" class="mx-2">
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
