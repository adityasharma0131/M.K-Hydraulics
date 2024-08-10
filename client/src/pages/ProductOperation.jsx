import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdEditNote } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast"; // Import toast and Toaster

const ProductOperation = () => {
  const stripHtmlTags = (html) => {
    return html.replace(/<\/?[^>]+(>|$)/g, ""); // Regular expression to remove HTML tags
  };

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]); // Add state for products
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCategories();
    fetchProducts(); // Fetch products on component mount
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:3000/categories");
      setCategories(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching categories:", error);
      setError(error);
      setLoading(false);
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/products");
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setError(error);
      setLoading(false);
    }
  };

  const handleDeleteCategory = async (categoryId) => {
    try {
      await axios.delete(`http://localhost:3000/categories/${categoryId}`);
      setCategories(
        categories.filter((category) => category._id !== categoryId)
      );
      toast.success("Category deleted successfully!"); // Show success notification
    } catch (error) {
      console.error("Error deleting category:", error);
      setError(error);
      toast.error("Error deleting category: " + error.message); // Show error notification
    }
  };

  const handleDeleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:3000/products/${productId}`);
      setProducts(products.filter((product) => product._id !== productId));
      toast.success("Product deleted successfully!"); // Show success notification
    } catch (error) {
      console.error("Error deleting product:", error);
      setError(error);
      toast.error("Error deleting product: " + error.message); // Show error notification
    }
  };

  return (
    <>
      <div className="dashboard-name">
        <h1>Products Page</h1>
      </div>
      <div className="tables-area">
        <div className="recent-queries">
          <div className="operation-header">
            <h1 className="heading">Categories</h1>
            <Link to="/product-operation/add-category">
              <button className="add">Add Category +</button>
            </Link>
          </div>
          {loading ? (
            <p>Loading categories...</p>
          ) : error ? (
            <p>Error loading categories: {error.message}</p>
          ) : (
            <table className="modern-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Operation</th>
                </tr>
              </thead>
              <tbody>
                {categories.length > 0 ? (
                  categories.map((category) => (
                    <tr key={category._id}>
                      <td>{category.name}</td>
                      <td className="action-icons">
                        <Link
                          to={`/product-operation/edit-category/${category._id}`}
                          className="edit-link"
                        >
                          <MdEditNote className="edit-icon" />
                        </Link>
                        <AiFillDelete
                          className="delete-icon"
                          onClick={() => handleDeleteCategory(category._id)}
                          style={{ cursor: "pointer" }}
                        />
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="2">No categories available</td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>

        <div className="product-listing">
          <div className="operation-header">
            <h1 className="heading">Products</h1>
            <Link to="/product-operation/add-products">
              <button className="add">Add Products +</button>
            </Link>
          </div>
          <table className="modern-table">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Category</th>
                <th>Image</th>
                <th>Small Description</th>
                <th>Operation</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 ? (
                products.map((product) => {
                  // Get the first image from the images array
                  const firstImage =
                    product.images && product.images.length > 0
                      ? product.images[0]
                      : null;

                  return (
                    <tr key={product._id}>
                      <td>{product.name}</td>
                      <td>{product.category}</td>
                      <td>
                        {firstImage ? (
                          <img
                            src={`http://localhost:3000/${firstImage}`}
                            alt={`Image of ${product.name}`}
                            className="product-image"
                            style={{ maxWidth: "150px", maxHeight: "150px" }} // Adjust size as needed
                          />
                        ) : (
                          <p>No image available</p>
                        )}
                      </td>
                      <td>{stripHtmlTags(product.smallDesc)}</td>
                      <td className="action-icons">
                        <Link
                          to={`/product-operation/edit-product/${product._id}`}
                          className="edit-link"
                        >
                          <MdEditNote className="edit-icon" />
                        </Link>
                        <AiFillDelete
                          className="delete-icon"
                          onClick={() => handleDeleteProduct(product._id)}
                          style={{ cursor: "pointer" }}
                        />
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="5">No products available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <Toaster /> {/* Add Toaster component to display notifications */}
    </>
  );
};

export default ProductOperation;
