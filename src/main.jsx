import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Header from "./MainComponets/Header";
import Navbar from "./MainComponets/Navbar";
import Contact from "./MainComponets/Contact";
import About from "./MainComponets/About";
import Blog from "./MainComponets/Blog";
import Home from "./MainComponets/Home";
import Footer from "./MainComponets/Footer";
import Donate from "./MainComponets/Donate";
import Testimonials from "./MainComponets/Testimonials";
import Causes from "./MainComponets/Causes";
import Volunteer from "./MainComponets/Volunteer";
import Gallery from "./MainComponets/Gallery";
import Privacy from "./MainComponets/Privacy";
import Register from "./MainComponets/Register";
import Login from "./MainComponets/Login";
import ForgetPassword from "./MainComponets/ForgetPassword";
import Admin from "./DashboardComponets/Admin";
import User from "./DashboardComponets/User";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      {/* Header + Navbar always visible */}
      <Header />
      <Navbar />

      {/* Routes for pages */}
      <Routes>
         <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
            <Route path="/causes" element={<Causes />} />
           <Route path="/testimonials" element={<Testimonials />} />
           <Route path="/volunteer" element={<Volunteer/>} />
           <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
            <Route path="/donate" element={<Donate/>} />
              <Route path="/signup" element={<Register/>} />
               <Route path="/login" element={<Login/>} />
                <Route path="/forgot-password" element={<ForgetPassword/>} />
                    <Route path="/admin" element={<Admin/>} />
                         <Route path="/user" element={<User/>} />

            

            <Route path="/privacy" element={<Privacy/>} />
       
        {/* Add more routes here as needed */}
      </Routes>
      <Footer/>
    </BrowserRouter>
  </StrictMode>
);
