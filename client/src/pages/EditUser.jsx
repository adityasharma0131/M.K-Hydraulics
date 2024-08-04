import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
const EditUser = () => {
  return (
    <>
      <div className="dashboard-name">
        <div className="dash-opr-head">
          <h1>
            <Link className="dash-head" to="/user-operation">
              Users Page
            </Link>
            <IoIosArrowForward />
            Edit User
          </h1>
        </div>
      </div>

      <div className="tables-area">
        <div className="recent-queries">
          <div className="operation-header">
            <h1 className="heading">Edit User</h1>
          </div>
          <table className="modern-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>

                <th>Operation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input
                    type="text"
                    name="user-name"
                    className="dash-input"
                    placeholder="Enter user name"
                  />{" "}
                </td>
                <td>
                  <input
                    type="email"
                    name="user-email"
                    className="dash-input"
                    placeholder="Enter user email"
                  />{" "}
                </td>
                <td>
                  <input
                    type="password"
                    name="category-psswd"
                    className="dash-input"
                    placeholder="*********"
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

export default EditUser;
