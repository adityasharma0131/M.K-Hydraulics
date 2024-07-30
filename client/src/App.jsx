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
import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/Sidebar";

// Wrapper component to include Header and Footer
const ClientWrapper = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);
const AdminWrapper = ({ children }) => (
  <>
    <Sidebar />
    {children}
  </>
);

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop /> {/* Add ScrollToTop here */}
        <Routes>
          <Route
            exact
            path="/"
            element={
              <ClientWrapper>
                <Home />
              </ClientWrapper>
            }
          />
          <Route
            exact
            path="/products"
            element={
              <ClientWrapper>
                <Products />
              </ClientWrapper>
            }
          />
          <Route
            exact
            path="/gallery"
            element={
              <ClientWrapper>
                <Gallery />
              </ClientWrapper>
            }
          />
          <Route
            exact
            path="/about-us"
            element={
              <ClientWrapper>
                <Aboutus />
              </ClientWrapper>
            }
          />
          <Route
            exact
            path="/contact-us"
            element={
              <ClientWrapper>
                <Contactus />
              </ClientWrapper>
            }
          />
          <Route
            exact
            path="/products/id:"
            element={
              <ClientWrapper>
                <Contactus />
              </ClientWrapper>
            }
          />
          <Route exact path="/admin-login" element={<AdminLogin />} />
          <Route
            exact
            path="/dashboard"
            element={
              <AdminWrapper>
                <Dashboard />
              </AdminWrapper>
            }
          />
          <Route exact path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
