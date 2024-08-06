import React, { useEffect, useState } from "react";
import { MdEditNote } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const UserOperation = () => {
  const [adminUsers, setAdminUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    // Fetch logged-in user
    setLoggedInUser(localStorage.getItem("loggedInUser"));

    // Fetch admin users
    fetch("http://localhost:3000/admin-users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setAdminUsers(data))
      .catch((error) => console.error("Error fetching admin users:", error));
  }, []);

  return (
    <>
      <div className="dashboard-name">
        <h1>Users Page</h1>
      </div>
      <div className="admin-users">
        <div className="operation-header">
          <h1 className="heading">Admin Users</h1>
          <Link to="/user-operation/add-users">
            <button className="add">Add Users +</button>
          </Link>
        </div>
        <table className="modern-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            {adminUsers.length > 0 ? (
              adminUsers.map((user) => (
                <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link
                      to={`/user-operation/edit-user/${user._id}`}
                      className="edit-link"
                    >
                      <MdEditNote className="edit-icon" />
                    </Link>
                    <AiFillDelete className="delete-icon" />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">No admin users available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserOperation;
