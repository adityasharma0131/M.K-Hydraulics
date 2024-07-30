import React from "react";
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
                  <Link className="footer-desc">Home</Link>
                </li>
                <li>
                  <IoIosArrowForward />
                  <Link href="#" className="footer-desc">
                    Products
                  </Link>
                </li>
                <li>
                  <IoIosArrowForward />
                  <Link className="footer-desc">Gallery</Link>
                </li>
                <li>
                  <IoIosArrowForward />
                  <Link className="footer-desc">About us</Link>
                </li>
                <li>
                  <IoIosArrowForward />
                  <Link className="footer-desc">Contact us</Link>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h4 className="footer-head">Categories</h4>
              <hr />
              <ul>
                <li>
                  <IoIosArrowForward />
                  <Link className="footer-desc">Products</Link>
                </li>
                <li>
                  <IoIosArrowForward />
                  <Link href="#" className="footer-desc">
                    Products
                  </Link>
                </li>
                <li>
                  <IoIosArrowForward />
                  <Link className="footer-desc">Products</Link>
                </li>
                <li>
                  <IoIosArrowForward />
                  <Link className="footer-desc">Products</Link>
                </li>
                <li>
                  <IoIosArrowForward />
                  <Link className="footer-desc">Products</Link>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h4 className="footer-head">Categories</h4>
              <hr />
              <ul>
                <li>
                  <IoIosArrowForward />
                  <Link className="footer-desc">Products</Link>
                </li>
                <li>
                  <IoIosArrowForward />
                  <Link href="#" className="footer-desc">
                    Products
                  </Link>
                </li>
                <li>
                  <IoIosArrowForward />
                  <Link className="footer-desc">Products</Link>
                </li>
                <li>
                  <IoIosArrowForward />
                  <Link className="footer-desc">Products</Link>
                </li>
                <li>
                  <IoIosArrowForward />
                  <Link className="footer-desc">Products</Link>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h4 className="footer-head">Categories</h4>
              <hr />
              <ul>
                <li>
                  <IoIosArrowForward />
                  <Link className="footer-desc">Products</Link>
                </li>
                <li>
                  <IoIosArrowForward />
                  <Link href="#" className="footer-desc">
                    Products
                  </Link>
                </li>
                <li>
                  <IoIosArrowForward />
                  <Link className="footer-desc">Products</Link>
                </li>
                <li>
                  <IoIosArrowForward />
                  <Link className="footer-desc">Products</Link>
                </li>
                <li>
                  <IoIosArrowForward />
                  <Link className="footer-desc">Products</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* footer-side */}

          <div className="footer-soc">
            <div className="footer-sec">
              <h4 className="footer-head">Quick Links</h4>
              <hr />
              <ul>
                <li>
                  <TbPhoneCall />
                  <Link className="footer-desc">
                    +91 8530532698 | +91 9272927739
                  </Link>
                </li>
                <li>
                  <FaFacebook />
                  <Link className="footer-desc">contact@example.com</Link>
                </li>
                <li>
                  <FaLocationDot />
                  <Link className="footer-desc">
                    Lorem ipsum dolor sit amet conse
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-sec">
              <h4 className="footer-head">Socials</h4>
              <ul className="sociallll">
                <li>
                  <FaInstagram />
                </li>
                <li>
                  <IoIosMail />
                </li>
                <li>
                  <FaLinkedin />
                </li>
                <li>
                  <FaWhatsapp />
                </li>
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
