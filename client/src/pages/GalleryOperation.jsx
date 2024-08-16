import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import toast, { Toaster } from "react-hot-toast"; // Import toast and Toaster

const GalleryOperation = () => {
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await fetch("/api/gallery");
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

  const handleDelete = async (imageId) => {
    try {
      const response = await fetch(`/gallery/${imageId}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      // Remove the deleted image from the state
      setGallery((prevGallery) =>
        prevGallery.filter((item) => item._id !== imageId)
      );
      toast.success("Image deleted successfully!"); // Show success notification
    } catch (error) {
      console.error("Error deleting image:", error);
      setError(error);
      toast.error("Error deleting image: " + error.message); // Show error notification
    }
  };

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
                {gallery?.length > 0 ? (
                  gallery.map((item) => (
                    <tr key={item._id}>
                      <td>
                        <img
                          src={`/uploads/${item.filename}`}
                          alt={`Image of ${item.filename}`}
                          className="product-image"
                          style={{ maxWidth: "150px", maxHeight: "150px" }} // Adjust size as needed
                        />
                      </td>
                      <td>{item.filename}</td>
                      <td className="action-icons">
                        <AiFillDelete
                          className="delete-icon"
                          onClick={() => handleDelete(item._id)}
                          style={{ cursor: "pointer" }}
                        />
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
      <Toaster /> {/* Add Toaster component to display notifications */}
    </>
  );
};

export default GalleryOperation;
