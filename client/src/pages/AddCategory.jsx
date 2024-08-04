import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const AddCategory = () => {
  return (
    <>
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
                  />{" "}
                </td>
                <td>
                  <button className="add">Add +</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AddCategory;
