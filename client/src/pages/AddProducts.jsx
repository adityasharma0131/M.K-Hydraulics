import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill styles
import toast, { Toaster } from "react-hot-toast"; // Import toast and Toaster
import { useNavigate } from "react-router-dom";

const AddProducts = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: "",
    category: "",
    categoryId: "",
    image: null,
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
    // Fetch categories from backend when component mounts
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:3000/categories"); // Replace with your API endpoint
        const data = await response.json();
        setCategories(data); // Assuming the data is an array of category objects with 'name' and '_id' fields
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
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setProduct((prev) => ({ ...prev, image: e.target.files[0] }));
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
      // Append each field to formData
      Object.keys(product).forEach((key) => {
        if (product[key] !== null) {
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

      // Reset form after successful submission
      setProduct({
        name: "",
        category: "",
        categoryId: "",
        image: null,
        smallDesc: "",
        fullDesc: "",
        features: "",
        applications: "",
        advantages: "",
        additionalDesc: "",
      });

      // Show success message
      toast.success("Product added successfully!");
      navigate('/product-operation')
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
                  onChange={(e) => {
                    const selectedCategory = categories.find(cat => cat.name === e.target.value);
                    setProduct(prev => ({
                      ...prev,
                      category: e.target.value,
                      categoryId: selectedCategory ? selectedCategory._id : ""
                    }));
                  }}
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
              <li className="form-item">
                <label className="form-label">Image</label>
                <input
                  type="file"
                  name="image"
                  onChange={handleFileChange}
                  className="form-input"
                />
              </li>
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
            <div>
              <strong>Image:</strong>{" "}
              {product.image ? product.image.name : "No image selected"}
            </div>
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
      <Toaster /> {/* Add Toaster to render notifications */}
    </>
  );
};

export default AddProducts;
