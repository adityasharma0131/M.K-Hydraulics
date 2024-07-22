import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Gallery from "./pages/Gallery";
import Aboutus from "./pages/Aboutus";
import Contactus from "./pages/Contactus";
import AdminLogin from "./pages/AdminLogin";
import Error from "./pages/Error";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop"; // Import the ScrollToTop component

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop /> {/* Add ScrollToTop here */}
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/gallery" element={<Gallery />} />
          <Route exact path="/about-us" element={<Aboutus />} />
          <Route exact path="/contact-us" element={<Contactus />} />
          <Route exact path="/products/id:" element={<Contactus />} />
          <Route exact path="/admin-login" element={<AdminLogin />} />
          <Route exact path="/*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
