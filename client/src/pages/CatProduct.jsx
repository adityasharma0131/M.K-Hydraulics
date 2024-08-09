import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
import p1 from "../assets/image 1.png";
import HeroPage from "../components/HeroPage";
const CatProduct = () => {
  const products = [
    {
      name: "Hydraulic Power Pack",
      description:
        "Our hydraulic power packs are designed for optimal performance, offering reliability and efficiency in various industrial applications.",
      image: p1,
    },
  ];

  return (
    <>
      <HeroPage heading="Products" />

      <div className="our-products">
        <div className="productbgbox">
          <h1 className="heading1">Our Products</h1>
        </div>

        <div className="productbox">
          <h1 className="heading1">Category 1</h1>
          <hr />
          <div className="productcard">
            {products.map((product, index) => (
              <div className="card" key={index}>
                <img
                  className="productimg"
                  src={product.image}
                  alt={`Product ${index + 1}`}
                />
                <div className="arrowlink">
                  <Link to={`/products/id:${index + 1}`}>
                    <GoArrowUpRight className="GoArrowUpRight" />
                  </Link>
                </div>
                <div className="info">
                  <h3 className="productname">{product.name}</h3>
                  <p className="productdesc">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CatProduct;
