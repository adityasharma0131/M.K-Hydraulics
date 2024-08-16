import React, { useState, useEffect } from "react";
import logo from "../assets/footer-logo.png";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { TbPhoneCall } from "react-icons/tb";

const Footer = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState({});
  const [socialLinks, setSocialLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch categories
        const categoriesResponse = await fetch(
          "/api/categories"
        );


        
        if (!categoriesResponse.ok)
          throw new Error("Network response was not ok");

        console.log(categoriesResponse.body);
        const categoriesData = await categoriesResponse.json();
        setCategories(categoriesData);

        // Fetch products
        const productsResponse = await fetch(
          "/api/products"
        );
        if (!productsResponse.ok)
          throw new Error("Network response was not ok");
        const productsData = await productsResponse.json();

        // Organize products by category
        const productsByCategory = productsData.reduce((acc, product) => {
          const { categoryId, _id, name } = product;
          if (!acc[categoryId]) acc[categoryId] = [];
          acc[categoryId].push({ id: _id, name }); // Store id and name
          return acc;
        }, {});

        setProducts(productsByCategory);

        // Fetch social media links
        const socialResponse = await fetch(
          "/api/social-links"
        );
        console.log(socialResponse);  
        if (!socialResponse.ok) throw new Error("Network response was not ok");
        const socialData = await socialResponse.json();
        setSocialLinks(socialData);
      } catch (err) {
        setError(err);
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <div className="footer">
        <div className="footerbox">
          <img className="footer-logo" src={logo} alt="M.K Hydraulics Logo" />

          <div className="footer-content">
            <div className="footer-section">
              <h4 className="footer-head">Quick Links</h4>
              <hr />
              <ul>
                <li>
                  <IoIosArrowForward />
                  <Link to="/" className="footer-desc">
                    Home
                  </Link>
                </li>
                <li>
                  <IoIosArrowForward />
                  <Link to="/products" className="footer-desc">
                    Products
                  </Link>
                </li>
                <li>
                  <IoIosArrowForward />
                  <Link to="/gallery" className="footer-desc">
                    Gallery
                  </Link>
                </li>
                <li>
                  <IoIosArrowForward />
                  <Link to="/about-us" className="footer-desc">
                    About us
                  </Link>
                </li>
                <li>
                  <IoIosArrowForward />
                  <Link to="/contact-us" className="footer-desc">
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
            {categories.map((category) => (
              <div key={category._id} className="footer-section">
                <h4 className="footer-head">{category.name}</h4>
                <hr />
                <ul>
                  {(products[category._id] || []).map((product, index) => (
                    <li key={index}>
                      <IoIosArrowForward />
                      <Link
                        to={`/product/${product.id}`}
                        className="footer-desc"
                      >
                        {product.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Footer-side */}
          <div className="footer-soc">
            <div className="footer-sec">
              <h4 className="footer-head">Contact</h4>
              <hr />
              <ul>
                <li>
                  <TbPhoneCall />
                  <Link className="footer-desc">
                    +91 89760 04552 | 85916 55720
                  </Link>
                </li>
                <li>
                  <IoIosMail />
                  <Link className="footer-desc">
                    Mkhydraulicssales@gmail.com <br /> Mkhydraulics@gmail.com
                  </Link>
                </li>
                <li>
                  <FaLocationDot />
                  <Link className="footer-desc">Google location</Link>
                </li>
              </ul>
            </div>
            <div className="footer-sec">
              <h4 className="footer-head">Socials</h4>
              <ul className="sociallll">
                {socialLinks.map((social) => (
                  <li key={social._id}>
                    <a
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.name === "Instagram" && <FaInstagram />}
                      {social.name === "Facebook" && <FaFacebook />}
                      {social.name === "LinkedIn" && <FaLinkedin />}
                      {social.name === "WhatsApp" && <FaWhatsapp />}
                      {/* Add more icons based on your social media types */}
                    </a>
                  </li>
                ))}
              </ul>
              <ul>
                <li>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.9903823680174!2d72.88823237423584!3d19.108077850966627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c809aaaaaaab%3A0xd4e03f3e45ca9c8e!2sM.%20K.%20Hydraulics!5e0!3m2!1sen!2sin!4v1721629938948!5m2!1sen!2sin"
                    width="100%"
                    height="200"
                    style={{ border: 0, borderRadius: "10px" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="M.K Hydraulics Location"
                  ></iframe>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="botttom">
        <h3>Designed & Developed By Aditya Suresh Sharma</h3>
      </div>
    </>
  );
};

export default Footer;
