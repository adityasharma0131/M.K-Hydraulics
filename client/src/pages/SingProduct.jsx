import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

const SingleProduct = () => {
  const stripHtmlTags = (html) => {
    return html.replace(/<\/?[^>]+(>|$)/g, ""); // Regular expression to remove HTML tags
  };

  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/single-product/${id}`
        );
        const result = await response.json();
        if (response.ok) {
          setProduct(result);
        } else {
          toast.error(result.message);
        }
      } catch (error) {
        toast.error("Error fetching product: " + error.message);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="single-product">
      <h1>{product.name}</h1>
      <div className="product-images">
        {product.images && product.images.length > 0 ? (
          product.images.map((image, index) => (
            <img
              key={index}
              src={`http://localhost:3000/${image}`}
              alt={`${product.name} image ${index + 1}`}
              style={{ maxWidth: "500px", maxHeight: "500px", margin: "10px" }} // Adjust size and spacing as needed
            />
          ))
        ) : (
          <p>No images available</p>
        )}
      </div>
      <h2>Category: {product.category}</h2>
      <div className="product-details">
        <div className="product-section">
          <h3>Full Description</h3>
          <div>{stripHtmlTags(product.fullDesc)}</div>
        </div>
        <div className="product-section">
          <h3>Features</h3>
          <div>{stripHtmlTags(product.features)}</div>
        </div>
        <div className="product-section">
          <h3>Applications</h3>
          <div>{stripHtmlTags(product.applications)}</div>
        </div>
        <div className="product-section">
          <h3>Advantages</h3>
          <div>{stripHtmlTags(product.advantages)}</div>
        </div>
        <div className="product-section">
          <h3>Additional Description</h3>
          <div>{stripHtmlTags(product.additionalDesc)}</div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
