import React from "react";
import "./index.css";
import "./css/main.css";
import "./css/main2.css";

import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Layout from "./Pages/Layout";
import Games from "./Pages/Games";
import Contact from "./Pages/Contact";
import BlogDetails from "./Pages/BlogDetails";
import ReviewGame from "./Pages/ReviewGame";
import Profile from "./Pages/Profile";
import Home from "./Pages/Home";
import Blogs from "./Pages/Blogs";

// import AdminLayout from "./AdminPages/AdminLayout";
import ManageBlogs from "./AdminPages/ManageBlogs";
import AddBlogs from "./AdminPages/AddBlogs";
import AddCompany from "./AdminPages/AddCompany";
import AddGames from "./AdminPages/AddGames";
import Dashboard from "./AdminPages/Dashboard";
import ManageFooter from "./AdminPages/ManageFooter";
import ManageGames from "./AdminPages/ManageGames";
import ManageReviews from "./AdminPages/ManageReviews";
import ManageCompanies from "./AdminPages/ManageCompanies";
import DashboardLayout from "./AdminPages/DashboardLayout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/games" element={<Games />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blogdetails" element={<BlogDetails />} />
            <Route path="/reviewgame" element={<ReviewGame />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route element={<DashboardLayout />}>
            <Route path="/addblogs" element={<AddBlogs />} />
            <Route path="/addcompany" element={<AddCompany />} />
            <Route path="/addgames" element={<AddGames />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/manageblogs" element={<ManageBlogs />} />
            <Route path="/managefooter" element={<ManageFooter />} />
            <Route path="/managegames" element={<ManageGames />} />
            <Route path="/managereviews" element={<ManageReviews />} />
            <Route path="/managecompanies" element={<ManageCompanies />} />
          </Route>
        </Routes>
      </BrowserRouter>
      
    </div>
    
  );
}
export default App;
