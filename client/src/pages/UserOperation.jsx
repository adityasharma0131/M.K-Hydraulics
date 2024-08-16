import React, { useEffect, useState } from "react";
import { MdEditNote } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast"; // Import toast and Toaster

const UserOperation = () => {
  const [adminUsers, setAdminUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    // Fetch logged-in user
    setLoggedInUser(localStorage.getItem("loggedInUser"));

    // Fetch admin users
    fetch("/api/admin-users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setAdminUsers(data))
      .catch((error) => console.error("Error fetching admin users:", error));
  }, []);

  const handleDelete = (userId) => {
    fetch(`/admin-users/${userId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        setAdminUsers(adminUsers.filter((user) => user._id !== userId));
        toast.success("User deleted successfully!"); // Show success notification
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
        toast.error("Error deleting user: " + error.message); // Show error notification
      });
  };

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
            {adminUsers?.length > 0 ? (
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
                    <AiFillDelete
                      className="delete-icon"
                      onClick={() => handleDelete(user._id)}
                      style={{ cursor: "pointer" }}
                    />
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
      <Toaster /> {/* Add Toaster component to display notifications */}
    </>
  );
};

export default UserOperation;
