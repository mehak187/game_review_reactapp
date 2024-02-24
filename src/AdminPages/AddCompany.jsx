import React from "react";
import user from "../img/user.png";
import {
  Outlet,
  Link,
  NavLink,
  useLocation,
  useNavigate,
} from "react-router-dom";

function AddCompany() {
  return (
    <div>
      <div class="right-mid mx-1 mx-sm-3  p-2">
        <div class="row d-flex justify-content-between align-items-center">
          <div class="col-12 col-sm-7 p-0">
            <h2 class="mb-0 mx-2">Add Company</h2>
            <p class="mb-0 mx-2">
              Welcome to your Dashboard. The Dashboard is a great place to
              monitor all the activity within the Hub giving you full control
              and oversight.
            </p>
          </div>
        </div>
      </div>
      <div class="right-bottom mx-1 mx-sm-3 ">
        <div class="bottom-inner">
          <form action="managecompanies.html">
            <div class="change-profile">
              <img
                src={user}
                alt=""
                class="w-100 rounded-circle"
                id="user_photo_staff"
              />
              <div>
                <input
                  type="file"
                  name="image"
                  id="photo"
                  class="d-none  @error('image') is-invalid @enderror"
                  autocomplete="image"
                  autofocus
                />
                <label
                  for="photo"
                  class="camera text-center d-flex align-items-center  justify-content-center"
                >
                  <i class="fa-solid fa-camera text-white "></i>
                </label>
              </div>
            </div>
            <div class="row">
              <div class="col-12 py-1">
                <input
                  type="text"
                  placeholder="Company name"
                  class="form-control"
                />
              </div>
              <div class="col-12   py-1">
                <textarea
                  name="details"
                  id=""
                  cols="30"
                  placeholder="Description"
                  rows="8"
                  class="form-control"
                ></textarea>
              </div>
              <div class="col-12  mb-2 py-1">
                <button
                  type="submit"
                  class="gradient text-decoration-none px-5 border-0 py-2 text-white rounded-3"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddCompany;
