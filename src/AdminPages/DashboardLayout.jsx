import React, { useState } from 'react';
import {
  Outlet,
  Link,
  NavLink,
  useLocation,
  useNavigate,
} from "react-router-dom";

import gameadmin from "../img/game4 8.png";

import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';

function DashboardLayout() {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (openState) => (event) => {
      if (
        event.type === 'keydown' &&
        (event.key === 'Tab' || event.key === 'Shift')
      ) {
        return;
      }
      setOpen(openState);
    };
  return (
    <div>
    <section>
    <div className="panel d-flex">
        <Drawer open={open} onClose={toggleDrawer(false)}>
        <div className="panel-left">
            <div className="logo position-relative">
                {/* <i className="fas fa-close fs-4 text-white d-md-none position-absolute close-side"></i> */}
                <Link to="/dashboard">
                  {" "}
                  <p>Logo here</p>
                </Link>
            </div>
            <div className="list">
                <ul>
                    <li>
                    <NavLink className=" " to="/dashboard">
                        {" "}
                        Dashboard
                    </NavLink>
                    </li>
                    <li>
                    <NavLink className=" " to="/managecompanies">
                        {" "}
                        Companies
                    </NavLink>
                    </li>
                    <li>
                    <NavLink className=" " to="/managegames">
                        {" "}
                        Games
                    </NavLink>
                    </li>
                    <li>
                    <NavLink className=" " to="/managereviews">
                        {" "}
                        Reviews
                    </NavLink>
                    </li>
                    <li>
                    <NavLink className=" " to="/manageblogs">
                        {" "}
                        Blogs
                    </NavLink>
                    </li>
                    <li>
                    <NavLink className=" " to="/managefooter">
                        {" "}
                        Footer
                    </NavLink>
                    </li>
                </ul>
            </div>
            <div className="text-center mt-auto py-4">
                <Link className="lgout text-decoration-none fw-bold" to="/">
                logout
                </Link>
            </div>
        </div>
        </Drawer>
        <div className="panel-right">
            <div className="right-top">
    <Button onClick={toggleDrawer(true)}><i className="fa-solid fa-bars toggler text-black"></i></Button>
            </div>
            <div className="mycontainer">
                <Outlet />
            </div>
        </div>
    </div>
</section>
</div>
  )
}

export default DashboardLayout