import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import toast from "react-hot-toast";

const ContactOperation = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch contact data from the backend
    fetch("/api/contact-queries") // Adjust the URL if necessary
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setContacts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
        toast.error("Error fetching contacts");
      });
  }, []);

  const handleDelete = (contactId) => {
    fetch(`/api/contact-queries/${contactId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        // Remove the deleted contact from the state
        setContacts(contacts.filter((contact) => contact._id !== contactId));
        toast.success("Contact deleted successfully!");
      })
      .catch((error) => {
        toast.error("Error deleting contact");
        console.error("Error deleting contact:", error);
      });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading contacts: {error.message}</p>;

  return (
    <>
      <div className="dashboard-name">
        <h1>Contact Us Page</h1>
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
            {contacts?.length > 0 ? (
              contacts.map((contact) => (
                <tr key={contact._id}>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.organization}</td>
                  <td>{contact.message}</td>
                  <td className="action-icons">
                    <AiFillDelete
                      className="delete-icon"
                      onClick={() => handleDelete(contact._id)}
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No contacts available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ContactOperation;
