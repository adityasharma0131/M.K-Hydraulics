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
import AddCategory from "./pages/AddCategory";
import AddProducts from "./pages/AddProducts";
import AddGallery from "./pages/AddGallery";
import AddUsers from "./pages/AddUsers";
import EditSocials from "./pages/EditSocials";
import EditCategory from "./pages/EditCategory";
import EditProduct from "./pages/EditProduct";
import EditUser from "./pages/EditUser";
import AuthGuard from "./components/AuthGuard";
import { Toaster } from "react-hot-toast";

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
            <AuthGuard>
              <AdminWrapper>
                <Dashboard />
              </AdminWrapper>
            </AuthGuard>
          }
        />
        <Route
          path="/product-operation"
          element={
            <AuthGuard>
              <AdminWrapper>
                <ProductOperation />
              </AdminWrapper>
            </AuthGuard>
          }
        />
        <Route
          path="/gallery-operation"
          element={
            <AuthGuard>
              <AdminWrapper>
                <GalleryOperation />
              </AdminWrapper>
            </AuthGuard>
          }
        />
        <Route
          path="/user-operation"
          element={
            <AuthGuard>
              <AdminWrapper>
                <UserOperation />
              </AdminWrapper>
            </AuthGuard>
          }
        />
        <Route
          path="/contact-operation"
          element={
            <AuthGuard>
              <AdminWrapper>
                <ContactOperation />
              </AdminWrapper>
            </AuthGuard>
          }
        />
        <Route
          path="/social-operation"
          element={
            <AuthGuard>
              <AdminWrapper>
                <SocialOperation />
              </AdminWrapper>
            </AuthGuard>
          }
        />
        <Route
          path="/product-operation/add-category"
          element={
            <AuthGuard>
              <AdminWrapper>
                <AddCategory />
              </AdminWrapper>
            </AuthGuard>
          }
        />
        <Route
          path="/product-operation/add-products"
          element={
            <AuthGuard>
              <AdminWrapper>
                <AddProducts />
              </AdminWrapper>
            </AuthGuard>
          }
        />
        <Route
          path="/gallery-operation/add-gallery"
          element={
            <AuthGuard>
              <AdminWrapper>
                <AddGallery />
              </AdminWrapper>
            </AuthGuard>
          }
        />
        <Route
          path="/user-operation/add-users"
          element={
            <AuthGuard>
              <AdminWrapper>
                <AddUsers />
              </AdminWrapper>
            </AuthGuard>
          }
        />
        <Route
          path="/product-operation/edit-category"
          element={
            <AuthGuard>
              <AdminWrapper>
                <EditCategory />
              </AdminWrapper>
            </AuthGuard>
          }
        />
        <Route
          path="/product-operation/edit-product"
          element={
            <AuthGuard>
              <AdminWrapper>
                <EditProduct />
              </AdminWrapper>
            </AuthGuard>
          }
        />
        <Route
          path="/user-operation/edit-user"
          element={
            <AuthGuard>
              <AdminWrapper>
                <EditUser />
              </AdminWrapper>
            </AuthGuard>
          }
        />
        <Route
          path="/social-operation/edit-socials"
          element={
            <AuthGuard>
              <AdminWrapper>
                <EditSocials />
              </AdminWrapper>
            </AuthGuard>
          }
        />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
};

export default App;
