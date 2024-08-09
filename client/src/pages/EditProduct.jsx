import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const EditProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();
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
  const [loading, setLoading] = useState(true);
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

    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:3000/products/${id}`);
        if (!response.ok) throw new Error("Product not found.");
        const data = await response.json();
        setProduct({
          ...data,
          categoryId: data.categoryId || "",
        });
      } catch (err) {
        console.error("Error fetching product:", err);
        setError("Failed to fetch product.");
        toast.error("Failed to fetch product.");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
    fetchProduct();
  }, [id]);

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
      Object.keys(product).forEach((key) => {
        if (product[key] !== null && product[key] !== "") {
          formData.append(key, product[key]);
        }
      });

      const response = await fetch(`http://localhost:3000/products/${id}`, {
        method: "PUT",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Network response was not ok.");
      }

      toast.success("Product updated successfully!");
      navigate("/product-operation");
    } catch (err) {
      console.error("Error updating product:", err);
      setError("Failed to update product. Please try again.");
      toast.error("Failed to update product. Please try again.");
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
            Edit Product
          </h1>
        </div>
      </div>

      <div className="form-area">
        <div className="form-section">
          <div className="form-header">
            <h1 className="heading">Edit Product</h1>
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
                  {loading ? "Updating..." : "Update +"}
                </button>
              </li>
            </ul>
          </form>
          {error && <p className="form-error">{error}</p>}
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default EditProduct;
