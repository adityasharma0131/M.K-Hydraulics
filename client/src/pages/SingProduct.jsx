import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import HeroPage from "../components/HeroPage"; // Ensure this import is correct

const SingleProduct = () => {
  const stripHtmlTags = (html) => {
    if (!html) return "";
    return html.replace(/<\/?[^>]+(>|$)/g, ""); // Regular expression to remove HTML tags
  };

  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true); // Added loading state
  const [error, setError] = useState(null); // Added error state

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://mkhydraulics.co.in/single-product/${id}`
        );
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to fetch product.");
        }
        const result = await response.json();
        setProduct(result);
      } catch (error) {
        setError(error.message);
        toast.error("Error fetching product: " + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div>Loading...</div>; // Display loading state
  if (error) return <div>Error: {error}</div>; // Display error message

  if (!product) return <div>No product found.</div>; // Handle case where no product is returned

  return (
    <>
      <HeroPage heading={product.name} />
      <div className="singlebox">
        <h1 className="headingp">{product.name}</h1>
        <div className="product-images">
          {product.images && product.images.length > 0 ? (
            product.images.map((image, index) => (
              <img
                key={index}
                src={`https://mkhydraulics.co.in/${image}`}
                alt={`${product.name} image ${index + 1}`}
                className="Sproduct-image"
              />
            ))
          ) : (
            <p>No images available</p>
          )}
        </div>
        <h2 className="heading">Category: {product.category}</h2>
        <div className="product-details">
          <div className="product-section">
            <h3 className="heading">Product Description</h3>
            <div>{stripHtmlTags(product.fullDesc)}</div>
          </div>
          <div className="product-section">
            <h3 className="heading">Specification</h3>
            {product.specImage ? (
              <img
                src={`https://mkhydraulics.co.in/${product.specImage}`}
                alt="Specification"
                className="spec-image"
              />
            ) : (
              <p>No specification image available</p>
            )}
          </div>
          <div className="product-section">
            <h3 className="heading">Features</h3>
            <div>{stripHtmlTags(product.features)}</div>
          </div>
          <div className="product-section">
            <h3 className="heading">Applications</h3>
            <div>{stripHtmlTags(product.applications)}</div>
          </div>
          <div className="product-section">
            <h3 className="heading">Advantages</h3>
            <div>{stripHtmlTags(product.advantages)}</div>
          </div>
          <div className="product-section">
            <h3 className="heading">Description</h3>
            <div>{stripHtmlTags(product.additionalDesc)}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
