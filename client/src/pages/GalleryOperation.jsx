import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";

const GalleryOperation = () => {
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await fetch("http://localhost:3000/gallery");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setGallery(data);
      } catch (error) {
        console.error("Error fetching gallery images:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  return (
    <>
      <div className="dashboard-name">
        <h1>Gallery Page</h1>
      </div>

      <div className="tables-area">
        <div className="product-listing">
          <div className="operation-header">
            <h1 className="heading">Gallery</h1>
            <Link to="/gallery-operation/add-gallery">
              <button className="add">Add Image +</button>
            </Link>
          </div>
          {loading ? (
            <p>Loading gallery images...</p>
          ) : error ? (
            <p>Error loading gallery images: {error.message}</p>
          ) : (
            <table className="modern-table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>File Name</th>
                  <th>Operation</th>
                </tr>
              </thead>
              <tbody>
                {gallery.length > 0 ? (
                  gallery.map((item) => (
                    <tr key={item._id}>
                      <td>
                        <img
                          src={`http://localhost:3000/uploads/${item.filename}`}
                          alt={`Image of ${item.filename}`}
                          className="product-image"
                          style={{ maxWidth: "150px", maxHeight: "150px" }} // Adjust size as needed
                        />
                      </td>
                      <td>{item.filename}</td>
                      <td className="action-icons">
                        <AiFillDelete className="delete-icon" />
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3">No gallery images available</td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default GalleryOperation;