import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdEditNote } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast'; // Import toast and Toaster

const ProductOperation = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCategories();
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

  const productList = [
    {
      id: 1,
      name: "Product A",
      category: "Category 1",
      image: "https://picsum.photos/seed/picsum/500/500",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In est cupiditate nemo quisquam minus quas perferendis, quos aliquam similique molestiae rem voluptatibus et debitis facere esse.",
    },
    {
      id: 2,
      name: "Product B",
      category: "Category 2",
      image: "https://picsum.photos/seed/picsum/500/500",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In est cupiditate nemo quisquam minus quas perferendis, quos aliquam similique molestiae rem voluptatibus et debitis facere esse.",
    },
    {
      id: 3,
      name: "Product C",
      category: "Category 3",
      image: "https://picsum.photos/seed/picsum/500/500",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In est cupiditate nemo quisquam minus quas perferendis, quos aliquam similique molestiae rem voluptatibus et debitis facere esse.",
    },
  ];

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
              {productList.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-image"
                    />
                  </td>
                  <td>{product.description}</td>
                  <td className="action-icons">
                    <Link
                      to={`/product-operation/edit-product/${product.id}`}
                      className="edit-link"
                    >
                      <MdEditNote className="edit-icon" />
                    </Link>
                    <AiFillDelete className="delete-icon" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Toaster /> {/* Add Toaster component to display notifications */}
    </>
  );
};

export default ProductOperation;
