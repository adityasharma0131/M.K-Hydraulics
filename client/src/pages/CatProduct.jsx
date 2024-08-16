import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import HeroPage from "../components/HeroPage";


// Function to strip HTML tags from a string
const stripHtmlTags = (html) => {
  return html.replace(/<\/?[^>]+(>|$)/g, ""); // Regular expression to remove HTML tags
};

const CatProduct = () => {
  const { categoryId } = useParams(); // Get category ID from URL
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategoryAndProducts = async () => {
      try {
        // Fetch category details
        const categoryResponse = await fetch(
          `/api/categories/${categoryId}`
        );
        const categoryData = await categoryResponse.json();
        setCategory(categoryData);

        // Fetch products based on category ID
        const queryParams = new URLSearchParams({ categoryId }).toString();
        const productsResponse = await fetch(
          `/api/products?${queryParams}`);
          const productsData = await productsResponse.json();
        setProducts(productsData);
      } catch (err) {
        setError(err);
        console.error("Error fetching category or products:", err);
      } finally {
        setLoading(false);
      }
    };

    if (categoryId) {
      // Ensure categoryId is not undefined
      fetchCategoryAndProducts();
    }
  }, [categoryId]);

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
          <h1 className="heading1">
            {category ? category.name : "Loading..."}
          </h1>
          <hr />
          <div className="productcard">
            {products?.length > 0 ? (
              products.map((product) => {
                // Get the first image from the images array
                var firstImage =
                  product.images && product.images?.length > 0
                    ? product.images[0]
                    : null;
                if(firstImage){
                  firstImage= `${import.meta.env.VITE_MODE=="prod"? import.meta.env.VITE_PROD_BACKEND:import.meta.env.VITE_DEV_BACKEND}/${firstImage}`;
                }
                return (
                  <div className="card" key={product._id}>
                    <img
                      className="productimg"
                      src={firstImage ? `${firstImage}` : undefined} // Display only the first image
                      alt={product.name}
                    />
                    <div className="arrowlink">
                      <Link to={`/product/${product._id}`}>
                        <GoArrowUpRight className="GoArrowUpRight" />
                      </Link>
                    </div>
                    <div className="info">
                      <h3 className="productname">{product.name}</h3>
                      <p className="productdesc">
                        {stripHtmlTags(product.smallDesc)}
                      </p>{" "}
                      {/* Remove HTML tags */}
                    </div>
                  </div>
                );
              })
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
