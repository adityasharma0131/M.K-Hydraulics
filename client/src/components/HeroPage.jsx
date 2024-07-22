import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const HeroPage = ({ heading }) => {
  return (
    <div className="hero-page">
      <h1 className="page-header">{heading}</h1>
      <hr />
      <p className="breadcrumb">
        <Link to="/" className="links1">
          Home
        </Link>
        <IoIosArrowForward className="IoIosArrowForward" />
        <Link to="/products" className="links2">
          {heading}
        </Link>
      </p>
    </div>
  );
};

export default HeroPage;
