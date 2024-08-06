import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Dashboard = () => {
  const progressData = [
    { value: 66, title: "Product Range Expansion" },
    { value: 75, title: "Customer Satisfaction" },
    { value: 80, title: "Innovation in Design" },
    { value: 90, title: "Environmental Compliance" },
    { value: 100, title: "Quality Assurance" },
  ];

  const [recentQueries, setRecentQueries] = useState([]);
  const [adminUsers, setAdminUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState("");

  useEffect(() => {
    // Fetch logged-in user
    setLoggedInUser(localStorage.getItem("loggedInUser"));

    // Fetch recent queries
    fetch("http://localhost:3000/recent-queries")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setRecentQueries(data))
      .catch((error) => console.error("Error fetching recent queries:", error));

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

  const productList = [
    {
      id: 1,
      name: "Product A",
      category: "Category 1",
      image: "https://picsum.photos/seed/picsum/500/500",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In est cupiditate nemo quisquam minus quas perferendis, quos aliquam similique molestiae rem voluptatibus et debitis facere esse.",
    },
    {
      id: 2,
      name: "Product B",
      category: "Category 2",
      image: "https://picsum.photos/seed/picsum/500/500",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In est cupiditate nemo quisquam minus quas perferendis, quos aliquam similique molestiae rem voluptatibus et debitis facere esse.",
    },
    {
      id: 3,
      name: "Product C",
      category: "Category 3",
      image: "https://picsum.photos/seed/picsum/500/500",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In est cupiditate nemo quisquam minus quas perferendis, quos aliquam similique molestiae rem voluptatibus et debitis facere esse.",
    },
  ];

  return (
    <>
      <div className="dashboard-name">
        <h1>Welcome {loggedInUser}</h1>
      </div>
      <div className="dashboard-number">
        <div className="progressive-bar">
          {progressData.map((item, index) => (
            <div className="progress-container" key={index}>
              <CircularProgressbar
                value={item.value}
                text={`${item.value}%`}
                styles={buildStyles({
                  pathColor: "#0085ff",
                  textColor: "#0085ff",
                })}
              />
              <p className="progress-title">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="tables-area">
        <div className="recent-queries">
          <h1 className="heading">Recent Queries</h1>
          <table className="modern-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Organization's Name</th>
              </tr>
            </thead>
            <tbody>
              {recentQueries.length > 0 ? (
                recentQueries.map((query, index) => (
                  <tr key={index}>
                    <td>{query.name}</td>
                    <td>{query.email}</td>
                    <td>{query.organization}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3">No recent queries available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="admin-users">
          <h1 className="heading">Admin Users</h1>
          <table className="modern-table">
            <thead>
              <tr>
                <th>User ID</th>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {adminUsers.length > 0 ? (
                adminUsers.map((user) => (
                  <tr key={user._id}>
                    <td>{user._id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
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
        <div className="product-listing">
          <h1 className="heading">Recent Products</h1>
          <table className="modern-table">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Category</th>
                <th>Image</th>
                <th>Small Description</th>
              </tr>
            </thead>
            <tbody>
              {productList.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-image"
                    />
                  </td>
                  <td>{product.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
