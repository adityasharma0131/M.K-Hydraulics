import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import toast, { Toaster } from "react-hot-toast";

const AddCategory = () => {
  const navigate = useNavigate();
  const [categoryName, setCategoryName] = useState("");

  const handleChange = (e) => {
    setCategoryName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!categoryName) {
      return toast.error("Category name is required");
    }

    try {
      const response = await fetch("https://mkhydraulics.co.in/add-category", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: categoryName }),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success(result.message);
        navigate("/product-operation");
      } else {
        toast.error(result.message);
      }
    } catch (err) {
      toast.error("Server error: " + err.message);
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
            Add Category
          </h1>
        </div>
      </div>

      <div className="tables-area">
        <div className="recent-queries">
          <div className="operation-header">
            <h1 className="heading">Add new Category</h1>
          </div>
          <form onSubmit={handleSubmit}>
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
                      name="category-name"
                      className="dash-input"
                      placeholder="Enter category name"
                      value={categoryName}
                      onChange={handleChange}
                    />{" "}
                  </td>
                  <td>
                    <button type="submit" className="add">
                      Add +
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddCategory;
