import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const AdminLogin = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleError = (message) => {
    toast.error(message);
  };

  const handleSuccess = (message) => {
    toast.success(message);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;
    if (!email || !password) {
      return handleError("Email and password are required");
    }
    try {
      const url = `http://localhost:3000/auth/login`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginInfo),
      });
      const result = await response.json();
      console.log(result); // Debugging line
      const { success, message, token, user, error } = result;
      if (success) {
        handleSuccess(message);
        localStorage.setItem("token", token);
        localStorage.setItem("loggedInUser", user.name);
        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      } else if (error) {
        const details = error?.details[0].message;
        handleError(details || message);
      } else if (!success) {
        handleError(message);
      }
    } catch (err) {
      handleError(err.message);
    }
  };

  return (
    <>
      <Toaster />
      <div className="login-page">
        <div className="login-bg-box">
          <h1 className="heading1">Login</h1>
          <hr />
          <div className="form-box">
            <form onSubmit={handleLogin}>
              <label htmlFor="email" className="form-box-label">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your Email Address"
                className="form-box-input"
                value={loginInfo.email}
                onChange={handleChange}
                required
              />
              <label htmlFor="password" className="form-box-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="***************"
                className="form-box-input"
                value={loginInfo.password}
                onChange={handleChange}
                required
              />
              <button type="submit" className="form-box-button">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
