import React from 'react'
import {
    Outlet,
    Link,
    NavLink,
    useLocation,
    useNavigate,
  } from "react-router-dom";
  
function ManageFooter() {
  return (
    <div>
         <div class="right-mid mx-1 mx-sm-3 p-2">
                        <div class="row d-flex justify-content-between align-items-center">
                            <div class="col-12 col-sm-7 p-0">
                                <h2 class="mb-0 mx-2">Footer</h2>
                                <p class="mb-0 mx-2">Welcome to your Dashboard. The Dashboard is a great place to monitor
                                    all the activity within the Hub giving you full control and oversight.</p>
                            </div>
                        </div>
                    </div>
                    <div class="right-bottom1 mx-1 mx-sm-3">
                        <div class="bottom-inner">
                            <form action="managefooter.html">
                                <div class="row">
                                    <div class="col-12 py-1">
                                        <input type="text" placeholder="phone" class="form-control" />
                                    </div>
                                    <div class="col-12 py-1">
                                        <textarea name="details" id="" cols="30" placeholder="Description" rows="8"
                                            class="form-control"></textarea>
                                    </div>
                                    <div class="col-12  mb-2 py-1">
                                        <button type="submit"
                                            class="gradient text-decoration-none px-5 border-0 py-2 text-white rounded-3">Save</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
    </div>
  )
}

export default ManageFooter