import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const EditSocials = () => {
  const { id } = useParams(); // Get the social media account ID from URL params
  const [social, setSocial] = useState({ name: "", link: "" });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSocial = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/socials/${id}`);
        setSocial(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching social media account:", error);
        setLoading(false);
      }
    };

    fetchSocial();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSocial((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/socials/${id}`, social);
      toast.success("Social media account updated successfully!");
      navigate("/social-operation");
    } catch (error) {
      console.error("Error updating social media account:", error);
      toast.error("Error updating social media account.");
    }
  };

  if (loading) return <p>Loading...</p>;

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
          <form onSubmit={handleSubmit}>
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
                  <td>
                    <input
                      type="text"
                      name="name"
                      value={social.name}
                      onChange={handleChange}
                      className="dash-input"
                      placeholder="Enter Name"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="link"
                      value={social.link}
                      onChange={handleChange}
                      className="dash-input"
                      placeholder="Enter link"
                    />
                  </td>
                  <td>
                    <button type="submit" className="add">
                      Edit +
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>

      {/* Add ToastContainer here */}
      <Toaster />
    </>
  );
};

export default EditSocials;
