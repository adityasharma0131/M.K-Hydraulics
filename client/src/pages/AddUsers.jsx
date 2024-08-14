import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddUsers = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = userInfo;

    if (!name || !email || !password) {
      return toast.error("All fields are required");
    }

    try {
      const response = await fetch("https://mkhydraulics.co.in/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success(result.message);
        navigate("/user-operation");
        setUserInfo({
          name: "",
          email: "",
          password: "",
        });
      } else {
        toast.error(result.message);
      }
    } catch (err) {
      toast.error("Server error: " + err.message);
    }
  };

  return (
    <>
      <Toaster />
      <div className="dashboard-name">
        <div className="dash-opr-head">
          <h1>
            <Link className="dash-head" to="/user-operation">
              Users Page
            </Link>
            <IoIosArrowForward />
            Add Users
          </h1>
        </div>
      </div>

      <div className="tables-area">
        <div className="recent-queries">
          <div className="operation-header">
            <h1 className="heading">Add new User</h1>
          </div>
          <form onSubmit={handleSubmit}>
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
                      name="name"
                      className="dash-input"
                      placeholder="Enter user name"
                      value={userInfo.name}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="email"
                      name="email"
                      className="dash-input"
                      placeholder="Enter user email"
                      value={userInfo.email}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="password"
                      name="password"
                      className="dash-input"
                      placeholder="*********"
                      value={userInfo.password}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <button type="submit" className="add">
                      Add +
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddUsers;
