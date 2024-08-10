import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import logo from "../assets/Black_and_Blue_Airplane_Travel_Logo-removebg-preview.png";
import backgroundImage from "../assets/image 25.png";
import { GoArrowUpRight } from "react-icons/go";
import { IoIosMail } from "react-icons/io";
import { TbPhoneCall } from "react-icons/tb";

// Importing client images
import client1 from "../assets/image 10.png";
import client5 from "../assets/image 7.png";
import client6 from "../assets/image 8.png";
import client14 from "../assets/WhatsApp Image 2024-07-29 at 9.09.31 AM.jpeg";
import client15 from "../assets/WhatsApp Image 2024-07-29 at 9.09.34 AM.jpeg";
import client16 from "../assets/WhatsApp Image 2024-07-29 at 9.09.35 AM (1).jpeg";
import client17 from "../assets/WhatsApp Image 2024-07-29 at 9.09.35 AM (2).jpeg";
import client18 from "../assets/WhatsApp Image 2024-07-29 at 9.09.35 AM (3).jpeg";
import client19 from "../assets/WhatsApp Image 2024-07-29 at 9.09.35 AM.jpeg";
import client20 from "../assets/WhatsApp Image 2024-07-29 at 9.09.36 AM (3).jpeg";
import client21 from "../assets/WhatsApp Image 2024-07-29 at 9.09.36 AM.jpeg";
import client22 from "../assets/WhatsApp Image 2024-07-29 at 9.09.37 AM (2).jpeg";
import client23 from "../assets/WhatsApp Image 2024-07-29 at 9.09.37 AM (3).jpeg";
import client24 from "../assets/WhatsApp Image 2024-07-29 at 9.09.37 AM.jpeg";
import client25 from "../assets/WhatsApp Image 2024-07-29 at 9.09.38 AM.jpeg";

const Home = () => {
  const stripHtmlTags = (html) => {
    return html.replace(/<\/?[^>]+(>|$)/g, ""); // Regular expression to remove HTML tags
  };
  const clientImages = [
    client1,

    client5,
    client6,
    client14,
    client15,
    client16,
    client17,
    client18,
    client19,
    client20,
    client21,
    client22,
    client23,
    client24,
    client25,
  ];

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Fetch 3 products from the backend
        const response = await axios.get("http://localhost:3000/products-home");
        setProducts(response.data);
      } catch (err) {
        setError(err);
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <div className="homepage">
        <img className="hero-logo" src={logo} alt="M.K Hydraulics Logo" />
        <img className="homepage-img" src={backgroundImage} alt="Background" />
      </div>

      <div className="weare">
        <div className="bgbox">
          <h1 className="heading1">We Are,</h1>
          <h1 className="heading2">M.K Hydraulics</h1>
          <p className="para">
            We Are, M.K Hydraulics Established in 2006, M.K Hydraulics is a
            leading manufacturer renowned for its expertise in delivering
            high-quality hydraulic solutions. With a diverse product portfolio
            that includes hydraulic power packs, hydraulic cylinders, pharma
            machines, marine hydraulic power pack units, and lubrication
            systems, we cater to a broad range of industrial applications. Our
            specialized offerings extend to steel mill hydraulic units and
            hydraulic bag lifting devices for centrifuges, reflecting our
            commitment to innovation and meeting the unique demands of each
            sector.
            <br />
            <br />
            With over 18 years of experience, quality is at the heart of
            everything we do at M.K Hydraulics. Our team of seasoned
            professionals ensures that every product is crafted with precision
            and care, maintaining the highest standards of performance and
            reliability. We believe in building lasting relationships with our
            clients by providing exceptional service and support, and
            continually striving to exceed expectations in all our endeavors.
          </p>
        </div>

        <div className="productbox">
          <h1 className="heading1">Our Products</h1>
          <hr />
          <div className="productcard">
            {products.length > 0 ? (
              products.map((product) => (
                <div className="card" key={product._id}>
                  <img
                    className="productimg"
                    src={`http://localhost:3000/${product.image}`} // Adjust URL as needed
                    alt={product.name}
                  />
                  <div className="arrowlink">
                    <Link to={`/product/${product._id}`}>
                      <GoArrowUpRight className="GoArrowUpRight" />
                    </Link>
                  </div>
                  <div className="info">
                    <h3 className="productname">{product.name}</h3>
                    <p className="productdesc">
                      {stripHtmlTags(product.smallDesc)}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p>No products available.</p>
            )}
          </div>
          <div className="showmore">
            <Link to="/products">
              <button className="button-80" role="button">
                Show more...
              </button>
            </Link>
          </div>
        </div>

        <div className="clients">
          <h1 className="heading1">Our Brand</h1>
          <hr />
          <div className="slider">
            <div className="logos">
              <div className="logos-slide">
                {clientImages.concat(clientImages).map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    className="item"
                    alt={`Client ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="contactbox">
          <div className="contact-item">
            <div className="icon">
              <TbPhoneCall />
            </div>
            <h2 className="contacthead">Call Us</h2>
            <h3 className="contactdesc">+91 8530532698 | +91 9272927739</h3>
          </div>
          <div className="contact-item">
            <div className="icon">
              <IoIosMail />
            </div>
            <h2 className="contacthead">Email Us</h2>
            <h3 className="contactdesc">contact@example.com</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
