import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Gallery from "./pages/Gallery";
import Aboutus from "./pages/Aboutus";
import Contactus from "./pages/Contactus";
import AdminLogin from "./pages/AdminLogin";
import Dashboard from "./pages/Dashboard";
import ProductOperation from "./pages/ProductOperation";
import GalleryOperation from "./pages/GalleryOperation";
import UserOperation from "./pages/UserOperation";
import ContactOperation from "./pages/ContactOperation";
import SocialOperation from "./pages/SocialOperation";
import Error from "./pages/Error";

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
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <ClientWrapper>
              <Home />
            </ClientWrapper>
          }
        />
        <Route
          path="/products"
          element={
            <ClientWrapper>
              <Products />
            </ClientWrapper>
          }
        />
        <Route
          path="/gallery"
          element={
            <ClientWrapper>
              <Gallery />
            </ClientWrapper>
          }
        />
        <Route
          path="/about-us"
          element={
            <ClientWrapper>
              <Aboutus />
            </ClientWrapper>
          }
        />
        <Route
          path="/contact-us"
          element={
            <ClientWrapper>
              <Contactus />
            </ClientWrapper>
          }
        />
        <Route
          path="/products/:id"
          element={
            <ClientWrapper>
              <Products />
            </ClientWrapper>
          }
        />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route
          path="/dashboard"
          element={
            <AdminWrapper>
              <Dashboard />
            </AdminWrapper>
          }
        />
        <Route
          path="/product-operation"
          element={
            <AdminWrapper>
              <ProductOperation />
            </AdminWrapper>
          }
        />
        <Route
          path="/gallery-operation"
          element={
            <AdminWrapper>
              <GalleryOperation />
            </AdminWrapper>
          }
        />
        <Route
          path="/user-operation"
          element={
            <AdminWrapper>
              <UserOperation />
            </AdminWrapper>
          }
        />
        <Route
          path="/contact-operation"
          element={
            <AdminWrapper>
              <ContactOperation />
            </AdminWrapper>
          }
        />
        <Route
          path="/social-operation"
          element={
            <AdminWrapper>
              <SocialOperation />
            </AdminWrapper>
          }
        />
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
