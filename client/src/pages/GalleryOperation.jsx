import React from "react";
import { MdEditNote } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const GalleryOperation = () => {
  const gallery = [
    {
      id: 1,
      image: "https://picsum.photos/seed/picsum/500/500",
      filename: "Category 1",
    },
  ];

  return (
    <>
      <div className="dashboard-name">
        <h1>Gallery Page</h1>
      </div>

      <div className="tables-area">
        <div className="product-listing">
          <div className="operation-header">
            <h1 className="heading">Products</h1>
            <Link to="/gallery-operation/add-gallery">
              <button className="add">Add Image +</button>
            </Link>
          </div>
          <table className="modern-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>File Name</th>
                <th>Operation</th>
              </tr>
            </thead>
            <tbody>
              {gallery.map((product) => (
                <tr key={product.id}>
                  <td>
                    <img
                      src={product.image}
                      alt={`Image of ${product.filename}`}
                      className="product-image"
                    />
                  </td>
                  <td>{product.filename}</td>
                  <td className="action-icons">
                    <AiFillDelete className="delete-icon" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default GalleryOperation;
