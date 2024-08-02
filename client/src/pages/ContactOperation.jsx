import React from "react";
import { MdEditNote } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";

const ContactOperation = () => {
  const adminUsers = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      organization: "Organization Name",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dicta error ducimus deleniti modi sunt hic nostrum voluptatum consectetur, dolor ea facere. Architecto laborum corporis delectus unde exercitationem modi quo!",
    },
    {
      id: 2,
      name: "John Doe",
      email: "john.doe@example.com",
      organization: "Organization Name",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dicta error ducimus deleniti modi sunt hic nostrum voluptatum consectetur, dolor ea facere. Architecto laborum corporis delectus unde exercitationem modi quo!",
    },
    {
      id: 3,
      name: "John Doe",
      email: "john.doe@example.com",
      organization: "Organization Name",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dicta error ducimus deleniti modi sunt hic nostrum voluptatum consectetur, dolor ea facere. Architecto laborum corporis delectus unde exercitationem modi quo!",
    },
  ];
  return (
    <>
      <div className="dashboard-name">
        <h1>Contact us Page</h1>
      </div>
      <div className="admin-users">
        <h1 className="heading">Queries</h1>
        <table className="modern-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Organization</th>
              <th>Message</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            {adminUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.organization}</td>
                <td>{user.message}</td>
                <td className="action-icons">
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

export default ContactOperation;
