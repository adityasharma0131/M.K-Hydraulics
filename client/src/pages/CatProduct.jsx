import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import HeroPage from "../components/HeroPage";
import axios from 'axios';

const CatProduct = () => {
  const { categoryName } = useParams(); // Get category name from URL
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Fetch products based on category name
        const response = await axios.get("http://localhost:3000/products", {
          params: { category: categoryName } // Send category name as query parameter
        });
        setProducts(response.data);
      } catch (err) {
        setError(err);
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryName]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <HeroPage heading="Products" />

      <div className="our-products">
        <div className="productbgbox">
          <h1 className="heading1">Our Products</h1>
        </div>

        <div className="productbox">
          <h1 className="heading1">Category: {categoryName}</h1>
          <hr />
          <div className="productcard">
            {products.length > 0 ? (
              products.map((product) => (
                <div className="card" key={product._id}>
                  <img
                    className="productimg"
                    src={`http://localhost:3000/${product.image}`}
                    alt={product.name}
                  />
                  <div className="arrowlink">
                    <Link to={`/products/${product._id}`}>
                      <GoArrowUpRight className="GoArrowUpRight" />
                    </Link>
                  </div>
                  <div className="info">
                    <h3 className="productname">{product.name}</h3>
                    <p className="productdesc">{product.smallDesc}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>No products available for this category.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CatProduct;
