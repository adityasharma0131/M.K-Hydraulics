import React from "react";
import { MdEditNote } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
const UserOperation = () => {
  const adminUsers = [
    { id: 1, name: "John Doe", email: "john.doe@example.com" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
    { id: 3, name: "Michael Brown", email: "michael.brown@example.com" },
  ];
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
            {adminUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td className="action-icons">
                  <Link to="/user-operation/edit-user" className="edit-link">
                    <MdEditNote className="edit-icon" />
                  </Link>
                  <AiFillDelete className="delete-icon" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserOperation;
