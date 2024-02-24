import React from 'react'
import {
    Outlet,
    Link,
    NavLink,
    useLocation,
    useNavigate,
  } from "react-router-dom";
  
function Dashboard() {
  return (
    <div>
        <div class="right-mid mx-1 mx-sm-3 p-2">
                    <div class="row d-flex justify-content-between align-items-center">
                        <div class="col-12 col-sm-7 p-0">
                            <h2 class="mb-0 mx-2">Dashboard</h2>
                            <p class="mb-0 mx-2">Welcome to your Dashboard. The Dashboard is a great place to monitor
                                all the activity within the Hub giving you full control and oversight.</p>
                        </div>
                    </div>
                </div>
                <div class="right-bottom mx-1 mx-sm-3">
                    <div class="bottom-inner">
                        <div class="row mx-2 mx-md-0 d-flex justify-content-between ">
                            <div class="col-12 my-4 col-sm-6 col-lg-4">
                                <div class="sdw p-3 rounded-4">
                                    <p>Games</p>
                                    <h2 class="display-3 mb-0">2</h2>
                                </div>
                            </div>
                            <div class="col-12 my-4 col-sm-6 col-lg-4">
                                <div class="sdw p-3 rounded-4">
                                    <p>Reviews</p>
                                    <h2 class="display-3 mb-0">200</h2>
                                </div>
                            </div>
                            <div class="col-12 my-4 col-sm-6 col-lg-4">
                                <div class="sdw p-3 rounded-4">
                                    <p>Blogs</p>
                                    <h2 class="display-3 mb-0">200</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default Dashboard