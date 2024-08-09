import React, { useState, useEffect } from "react";
import HeroPage from "../components/HeroPage";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import toast, { Toaster } from "react-hot-toast";

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });
  const [socialLinks, setSocialLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSocialLinks = async () => {
      try {
        const response = await fetch("http://localhost:3000/social-links");
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setSocialLinks(data);
      } catch (err) {
        setError(err);
        console.error("Error fetching social links:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSocialLinks();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/contact-submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success(result.message);
        setFormData({
          name: "",
          email: "",
          organization: "",
          message: "",
        });
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("Server error: " + error.message);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <Toaster />
      <HeroPage heading="Contact Us" />
      <div className="contact-us">
        <div className="contact-sec">
          <div className="contactbx1">
            <h2>We're here to help you</h2>
            <p>
              Shoot us a message if you have any questions, we’re here to help!
            </p>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">
                  <h3>Your Name</h3>
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">
                  <h3>Your Email</h3>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="organization">
                  <h3>Your Organization's Name</h3>
                </label>
                <input
                  type="text"
                  placeholder="Enter your organization's name"
                  name="organization"
                  id="organization"
                  value={formData.organization}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">
                  <h3>Your Message</h3>
                </label>
                <textarea
                  name="message"
                  placeholder="Write your message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="contact-button">
                Send
              </button>
            </form>
          </div>
          <div className="contactbx2">
            <h2>Get in touch</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
              eligendi dolores fugiat similique blanditiis numquam dignissimos
              ad saepe consectetur veritatis repellendus at.
            </p>
            <hr />
            <div className="address">
              <h3>Address</h3>
              <div className="FaLocationDot">
                <FaLocationDot />
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Aspernatur.
                </p>
              </div>
            </div>
            <hr />
            <div className="phnoemail">
              <div className="phno">
                <h3>Contact</h3>
                <div className="FaPhone">
                  <FaPhone />
                  <p>+91 8530532698 | +91 9272927739</p>
                </div>
              </div>
              <div className="emailid">
                <div className="IoIosMail">
                  <IoIosMail />
                  <p>contact@example.com</p>
                </div>
              </div>
            </div>
            <hr />
            <div className="socials">
              <div className="social-media">
                {socialLinks.map((link) => (
                  <a
                    key={link._id}
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                  >
                    {link.name === "Instagram" && <FaInstagram />}
                    {link.name === "Facebook" && <FaFacebook />}
                    {link.name === "LinkedIn" && <FaLinkedin />}
                    {link.name === "WhatsApp" && <FaWhatsapp />}
                  </a>
                ))}
              </div>
            </div>
            <hr />
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactus;
