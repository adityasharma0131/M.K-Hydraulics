import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const AddGallery = () => {
  return (
    <>
      <div className="dashboard-name">
        <div className="dash-opr-head">
          <h1>
            <Link className="dash-head" to="/gallery-operation">
              Gallery Page
            </Link>
            <IoIosArrowForward />
            Add Image
          </h1>
        </div>
      </div>

      <div className="tables-area">
        <div className="recent-queries">
          <div className="operation-header">
            <h1 className="heading">Image</h1>
          </div>
          <table className="modern-table">
            <thead>
              <tr>
                <th>File</th>

                <th>Operation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input
                    type="file"
                    name="image-file"
                    className="dash-input"
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

export default AddGallery;
