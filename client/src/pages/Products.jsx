import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="productpage">
      <h1 className="page-header">Products</h1>
      <hr />
      <p className="breadcrumb">
        <Link to="/" className="links1">
          Home
        </Link>
        <IoIosArrowForward className="IoIosArrowForward" />
        <Link to="/products" className="links2">
          Products
        </Link>
      </p>
    </div>
  );
};

export default Products;
