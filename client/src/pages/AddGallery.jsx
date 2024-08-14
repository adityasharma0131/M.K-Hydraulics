import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddGallery = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      return toast.error("Please select an image file");
    }

    const formData = new FormData();
    formData.append("image-file", file);

    try {
      const response = await fetch("https://mkhydraulics.co.in/upload-image", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        toast.success(result.message);
        navigate("/gallery-operation");
        setFile(null);
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
            <Link className="dash-head" to="/gallery-operation">
              Gallery Page
            </Link>
            <IoIosArrowForward />
            Add Image
          </h1>
        </div>
      </div>

      <div className="tables-area">
        <div className="recent-queries">
          <div className="operation-header">
            <h1 className="heading">Add new Image</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <table className="modern-table">
              <thead>
                <tr>
                  <th>File</th>
                  <th>Operation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input
                      type="file"
                      name="image-file"
                      className="dash-input"
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

export default AddGallery;
