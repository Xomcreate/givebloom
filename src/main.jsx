import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Header from "./MainComponets/Header";
import Navbar from "./MainComponets/Navbar";
import Footer from "./MainComponets/Footer";
import Home from "./MainComponets/Home";
import About from "./MainComponets/About";
import Blog from "./MainComponets/Blog";
import Causes from "./MainComponets/Causes";
import Testimonials from "./MainComponets/Testimonials";
import Volunteer from "./MainComponets/Volunteer";
import Gallery from "./MainComponets/Gallery";
import Contact from "./MainComponets/Contact";
import Donate from "./MainComponets/Donate";
import Register from "./MainComponets/Register";
import Login from "./MainComponets/Login";
import ForgetPassword from "./MainComponets/ForgetPassword";
import Admin from "./DashboardComponets/Admin";
import User from "./DashboardComponets/User";
import NotFound from "./MainComponets/NotFound";
import ProtectedRoute from "./Routes/ProtectedRoute";
import Privacy from "./MainComponets/Privacy";
import PasswordResetFlow from "./MainComponets/PasswordResetFlow";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/causes" element={<Causes />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<PasswordResetFlow/>} />
         <Route path="/privacy" element={<Privacy />} />
        

        {/* Admin-only route */}
        <Route
          path="/donatee"
          element={
            <ProtectedRoute roleRequired="admin">
              <Admin />
            </ProtectedRoute>
          }
        />

        {/* User-only route */}
        <Route
          path="/user"
          element={
            <ProtectedRoute roleRequired="user">
              <User />
            </ProtectedRoute>
          }
        />

        {/* 404 Page */}
        <Route path="*" element={<NotFound/>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  </StrictMode>
);
