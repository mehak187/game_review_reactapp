import React from "react";
import gameadmin from "../img/game4 8.png";
import {
  Outlet,
  Link,
  NavLink,
  useLocation,
  useNavigate,
} from "react-router-dom";

function ManageCompanies() {
  return (
    <div>
      <div class="right-mid mx-1 mx-sm-3 p-2">
        <div class="row d-flex justify-content-between align-items-center">
          <div class="col-12 col-sm-7 p-0">
            <h2 class="mb-0 mx-2">Companies</h2>
            <p class="mb-0 mx-2">
              Welcome to your Dashboard. The Dashboard is a great place to
              monitor all the activity within the Hub giving you full control
              and oversight.
            </p>
          </div>
          <div class="col-12 col-sm-5 d-flex justify-content-center justify-content-sm-end p-0">
          <Link
              to="/addcompany" className='gradient text-decoration-none px-4 mt-3 mt-sm-0 py-2 text-white rounded-3'>
              {" "}
              Add Company
            </Link>
          </div>
        </div>
      </div>
      <div class="right-bottom1 mx-1 mx-sm-3">
        <div class="bottom-inner">
          <div class="table-responsive tbl1">
            <table class="table tbl table-row">
              <thead class="text-center">
                <tr>
                  <th scope="col">Image</th>
                  <th scope="col">Title</th>
                  <th scope="col">Discription</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody class="text-center">
                <tr class="">
                  <td>
                    <img src={gameadmin} class="gameimg" alt="gameimg" />
                  </td>
                  <td>title here</td>
                  <td>+Discription</td>
                  <td>
                    <div class="d-flex justify-content-center align-items-center">
                      <Link to="#" class="text-decoration-none mx-2">
                        <i class="fa-solid text-success fa-pen-to-square"></i>
                      </Link>
                      <Link to="#" class="text-decoration-none  mx-2">
                        <i class="fa-solid text-danger fa-trash"></i>
                      </Link>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageCompanies;
