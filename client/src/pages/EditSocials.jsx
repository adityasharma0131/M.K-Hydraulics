import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
const EditSocials = () => {
  return (
    <>
      <div className="dashboard-name">
        <div className="dash-opr-head">
          <h1>
            <Link className="dash-head" to="/social-operation">
              Socials Page
            </Link>
            <IoIosArrowForward />
            Edit Social
          </h1>
        </div>
      </div>

      <div className="tables-area">
        <div className="recent-queries">
          <div className="operation-header">
            <h1 className="heading">Edit Social</h1>
          </div>
          <table className="modern-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Link</th>
                <th>Operation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Social Name</td>
                <td>
                  <input
                    type="email"
                    name="user-email"
                    className="dash-input"
                    placeholder="Enter link"
                  />{" "}
                </td>
                <td>
                  <button className="add">Edit +</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default EditSocials;
