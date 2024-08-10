import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddProducts = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: "",
    category: "",
    categoryId: "",
    images: [], // Updated to handle multiple images
    smallDesc: "",
    fullDesc: "",
    features: "",
    applications: "",
    advantages: "",
    additionalDesc: "",
  });

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:3000/categories");
        if (!response.ok) throw new Error("Failed to fetch categories.");
        const data = await response.json();
        setCategories(data);
      } catch (err) {
        console.error("Error fetching categories:", err);
        setError("Failed to fetch categories.");
        toast.error("Failed to fetch categories.");
      }
    };

    fetchCategories();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "category") {
      const selectedCategory = categories.find((cat) => cat.name === value);
      setProduct((prev) => ({
        ...prev,
        category: value,
        categoryId: selectedCategory ? selectedCategory._id : "",
      }));
    } else {
      setProduct((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e) => {
    const { files } = e.target;
    if (files.length > 0) {
      setProduct((prev) => ({
        ...prev,
        images: [...prev.images, ...Array.from(files)], // Handle multiple files
      }));
    }
  };

  const handleQuillChange = (name) => (value) => {
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const formData = new FormData();
      Object.keys(product).forEach((key) => {
        if (Array.isArray(product[key])) {
          product[key].forEach((file) => {
            formData.append("images", file); // Append each file in images array
          });
        } else if (product[key] !== "") {
          formData.append(key, product[key]);
        }
      });

      const response = await fetch("http://localhost:3000/products", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }

      setProduct({
        name: "",
        category: "",
        categoryId: "",
        images: [],
        smallDesc: "",
        fullDesc: "",
        features: "",
        applications: "",
        advantages: "",
        additionalDesc: "",
      });

      toast.success("Product added successfully!");
      navigate("/product-operation");
    } catch (err) {
      console.error("Error adding product:", err);
      setError("Failed to add product. Please try again.");
      toast.error("Failed to add product. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="dashboard-name">
        <div className="dash-opr-head">
          <h1>
            <Link className="dash-head" to="/product-operation">
              Products Page
            </Link>
            <IoIosArrowForward />
            Add Product
          </h1>
        </div>
      </div>
      <div className="form-area">
        <div className="form-section">
          <div className="form-header">
            <h1 className="heading">Add New Product</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <ul className="form-list">
              <li className="form-item">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  name="name"
                  value={product.name}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Enter product name"
                  required
                />
              </li>
              <li className="form-item">
                <label className="form-label">Category</label>
                <select
                  name="category"
                  value={product.category}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                >
                  <option value="">Select a category</option>
                  {categories.map((cat) => (
                    <option key={cat._id} value={cat.name}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </li>
              {Array.from({ length: 3 }, (_, i) => (
                <li className="form-item" key={`image${i + 1}`}>
                  <label className="form-label">Image {i + 1}</label>
                  <input
                    type="file"
                    name={`image${i + 1}`}
                    onChange={handleFileChange}
                    className="form-input"
                    multiple
                  />
                </li>
              ))}
              <li className="form-item">
                <label className="form-label">Small Description</label>
                <ReactQuill
                  value={product.smallDesc}
                  onChange={handleQuillChange("smallDesc")}
                  className="form-quill"
                />
              </li>
              <li className="form-item">
                <label className="form-label">Full Description</label>
                <ReactQuill
                  value={product.fullDesc}
                  onChange={handleQuillChange("fullDesc")}
                  className="form-quill"
                />
              </li>
              <li className="form-item">
                <label className="form-label">Features</label>
                <ReactQuill
                  value={product.features}
                  onChange={handleQuillChange("features")}
                  className="form-quill"
                />
              </li>
              <li className="form-item">
                <label className="form-label">Applications</label>
                <ReactQuill
                  value={product.applications}
                  onChange={handleQuillChange("applications")}
                  className="form-quill"
                />
              </li>
              <li className="form-item">
                <label className="form-label">Advantages</label>
                <ReactQuill
                  value={product.advantages}
                  onChange={handleQuillChange("advantages")}
                  className="form-quill"
                />
              </li>
              <li className="form-item">
                <label className="form-label">Additional Description</label>
                <ReactQuill
                  value={product.additionalDesc}
                  onChange={handleQuillChange("additionalDesc")}
                  className="form-quill"
                />
              </li>
              <li className="form-item">
                <button type="submit" className="add" disabled={loading}>
                  {loading ? "Adding..." : "Add +"}
                </button>
              </li>
            </ul>
          </form>
          {error && <p className="form-error">{error}</p>}
          <div className="generated-answers">
            <h2>Generated Answers:</h2>
            <div>
              <strong>Name:</strong> {product.name}
            </div>
            <div>
              <strong>Category:</strong>{" "}
              {categories.find((cat) => cat._id === product.categoryId)?.name ||
                "N/A"}
            </div>
            {product.images.map((image, index) => (
              <div key={index}>
                <strong>Image {index + 1}:</strong>{" "}
                {image ? image.name : "No image selected"}
              </div>
            ))}
            <div>
              <strong>Small Description:</strong>{" "}
              <div
                className="generated-content"
                dangerouslySetInnerHTML={{ __html: product.smallDesc }}
              />
            </div>
            <div>
              <strong>Full Description:</strong>{" "}
              <div
                className="generated-content"
                dangerouslySetInnerHTML={{ __html: product.fullDesc }}
              />
            </div>
            <div>
              <strong>Features:</strong>{" "}
              <div
                className="generated-content"
                dangerouslySetInnerHTML={{ __html: product.features }}
              />
            </div>
            <div>
              <strong>Applications:</strong>{" "}
              <div
                className="generated-content"
                dangerouslySetInnerHTML={{ __html: product.applications }}
              />
            </div>
            <div>
              <strong>Advantages:</strong>{" "}
              <div
                className="generated-content"
                dangerouslySetInnerHTML={{ __html: product.advantages }}
              />
            </div>
            <div>
              <strong>Additional Description:</strong>{" "}
              <div
                className="generated-content"
                dangerouslySetInnerHTML={{ __html: product.additionalDesc }}
              />
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default AddProducts;
