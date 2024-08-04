import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const AddProducts = () => {
  return (
    <>
      <div className="dashboard-name">
        <div className="dash-opr-head">
          <h1>
            <Link className="dash-head" to="/product-operation">
              Products Page
            </Link>
            <IoIosArrowForward />
            Add Product
          </h1>
        </div>
      </div>

      <div className="form-area">
        <div className="form-section">
          <div className="form-header">
            <h1 className="heading">Add New Product</h1>
          </div>
          <ul className="form-list">
            <li className="form-item">
              <label className="form-label">Name</label>
              <input
                type="text"
                name="product-name"
                className="form-input"
                placeholder="Enter product name"
              />
            </li>
            <li className="form-item">
              <label className="form-label">Category</label>
              <input
                type="text"
                name="product-category"
                className="form-input"
                placeholder="Enter product category"
              />
            </li>
            <li className="form-item">
              <label className="form-label">Image</label>
              <input type="file" name="product-img" className="form-input" />
            </li>
            <li className="form-item">
              <label className="form-label">Small Description</label>
              <textarea
                name="product-sdesc"
                className="form-textarea"
                placeholder="Enter product's small description"
              ></textarea>
            </li>
            <li className="form-item">
              <label className="form-label">Full Description</label>
              <textarea
                name="product-fdesc"
                className="form-textarea"
                placeholder="Enter product's full description"
              ></textarea>
            </li>
            <li className="form-item">
              <label className="form-label">Features</label>
              <textarea
                name="product-features"
                className="form-textarea"
                placeholder="Enter product's features"
              ></textarea>
            </li>
            <li className="form-item">
              <label className="form-label">Applications</label>
              <textarea
                name="product-applications"
                className="form-textarea"
                placeholder="Enter product's applications"
              ></textarea>
            </li>
            <li className="form-item">
              <label className="form-label">Advantages</label>
              <textarea
                name="product-advantages"
                className="form-textarea"
                placeholder="Enter product's advantages"
              ></textarea>
            </li>
            <li className="form-item">
              <label className="form-label">Additional Description</label>
              <textarea
                name="product-adddesc"
                className="form-textarea"
                placeholder="Enter additional description"
              ></textarea>
            </li>
            <li className="form-item">
              <button className="add">Add +</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AddProducts;
