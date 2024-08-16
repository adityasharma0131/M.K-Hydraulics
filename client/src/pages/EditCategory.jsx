import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

import toast, { Toaster } from 'react-hot-toast';

const EditCategory = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [categoryName, setCategoryName] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await fetch(
          `/api/categories/${id}`
        );
        const { name } = await response.json();
        setCategoryName(name);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching category:", error);
        setError(error);
        setLoading(false);
      }
    };

    fetchCategory();
  }, [id]);

  const handleInputChange = (e) => {
    setCategoryName(e.target.value);
  };

  const handleEditCategory = async () => {
    try {
      const response = await fetch(
        `/api/categories/${id}`,
        {
          method: "PUT", 
          headers: {
            "Content-Type": "application/json", 
          },
          body: JSON.stringify({ name: categoryName }), 
        }
      );
      const success = await response.json();
      console.log("success",success.success);
      if (success) {
        toast.success("Category updated successfully!");
        navigate("/product-operation");
      } else {
        toast.error("Failed to update category.");
      }
    } catch (error) {
      console.error("Error updating category:", error);
      toast.error("An error occurred while updating the category.");
    }
  };

  return (
    <>
      <Toaster />
      <div className="dashboard-name">
        <div className="dash-opr-head">
          <h1>
            <Link className="dash-head" to="/product-operation">
              Products Page
            </Link>
            <IoIosArrowForward />
            Edit Category
          </h1>
        </div>
      </div>

      <div>
        {loading ? (
          <p>Loading category...</p>
        ) : error ? (
          <p>Error loading category: {error.message}</p>
        ) : (
          <div className="tables-area">
            <div className="recent-queries">
              <div className="operation-header">
                <h1 className="heading">Edit Categories</h1>
              </div>
              <table className="modern-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Operation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input
                        type="text"
                        className="dash-input"
                        value={categoryName}
                        onChange={handleInputChange}
                        placeholder="Enter category name"
                      />
                    </td>
                    <td>
                      <button className="add" onClick={handleEditCategory}>
                        Edit Category
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default EditCategory;
