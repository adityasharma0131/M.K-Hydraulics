import React from "react";
import { Link } from "react-router-dom";
import { MdEditNote } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";

const ProductOperation = () => {
  const Categories = [
    {
      name: "Category 1",
    },
    {
      name: "Category 2",
    },
    {
      name: "Category 3",
    },
  ];

  const adminUsers = [
    { id: 1, name: "John Doe", email: "john.doe@example.com" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
    { id: 3, name: "Michael Brown", email: "michael.brown@example.com" },
  ];
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
        <h1>Products Page</h1>
      </div>

      <div className="tables-area">
        <div className="recent-queries">
          <div className="operation-header">
            <h1 className="heading">Categories</h1>
            <Link to="/product-operation/add-category">
              <button className="add">Add Category +</button>
            </Link>
          </div>
          <table className="modern-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Operation</th>
              </tr>
            </thead>
            <tbody>
              {Categories.map((query, index) => (
                <tr key={index}>
                  <td>{query.name}</td>
                  <td className="action-icons">
                    <Link
                      to="/product-operation/edit-category"
                      className="edit-link"
                    >
                      <MdEditNote className="edit-icon" />
                    </Link>
                    <AiFillDelete className="delete-icon" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="product-listing">
          <div className="operation-header">
            <h1 className="heading">Products</h1>
            <Link to="/product-operation/add-products">
              <button className="add">Add Products +</button>
            </Link>
          </div>
          <table className="modern-table">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Category</th>
                <th>Image</th>
                <th>Small Description</th>
                <th>Operation</th>
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
                  <td className="action-icons">
                    <Link
                      to="/product-operation/edit-product"
                      className="edit-link"
                    >
                      <MdEditNote className="edit-icon" />
                    </Link>
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

export default ProductOperation;
