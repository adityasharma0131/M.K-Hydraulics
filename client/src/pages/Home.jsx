import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Black_and_Blue_Airplane_Travel_Logo-removebg-preview.png";
import backgroundImage from "../assets/image 25.png";
import p1 from "../assets/image 1.png";
import p2 from "../assets/image 5.png";
import { GoArrowUpRight } from "react-icons/go";
import { IoIosMail } from "react-icons/io";
import bg1 from "../assets/image 25.png";
import bg2 from "../assets/pikaso_enhance__vivid_2K_Standard_r_c_ (14) 1.png";
import bg3 from "../assets/pikaso_enhance__vivid_2K_Standard_r_c_ (15) 1.png";
import bg4 from "../assets/pikaso_enhance__vivid_2K_Standard_r_c_ (16) 1.png";
import { TbPhoneCall } from "react-icons/tb";

// Importing client images
import client1 from "../assets/image 10.png";
import client2 from "../assets/image 23.png";
import client3 from "../assets/image 24.png";
import client5 from "../assets/image 7.png";
import client6 from "../assets/image 8.png";
import client7 from "../assets/image 9.png";
import client8 from "../assets/WhatsApp Image 2024-07-14 at 1.19.36 PM (1).png";
import client9 from "../assets/WhatsApp Image 2024-07-14 at 1.19.36 PM (2).png";
import client10 from "../assets/WhatsApp Image 2024-07-14 at 1.19.36 PM.png";
import client11 from "../assets/WhatsApp Image 2024-07-14 at 1.19.37 PM (1).png";
import client12 from "../assets/WhatsApp Image 2024-07-14 at 1.19.37 PM (2).png";
import client13 from "../assets/WhatsApp Image 2024-07-14 at 1.19.37 PM.png";
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
  const clientImages = [
    client1,
    client2,
    client3,
    client5,
    client6,
    client7,
    client8,
    client9,
    client10,
    client11,
    client12,
    client13,
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
            M.K Hydraulics is a leading manufacturer renowned for its expertise
            in delivering high-quality hydraulic solutions. With a diverse
            product portfolio that includes hydraulic power packs, hydraulic
            cylinders, pharma machines, marine hydraulic power pack units, and
            lubrication systems, we cater to a broad range of industrial
            applications. Our specialized offerings extend to steel mill
            hydraulic units and hydraulic bag lifting devices for centrifuges,
            reflecting our commitment to innovation and meeting the unique
            demands of each sector.
            <br />
            <br />
            Quality is at the heart of everything we do at M.K Hydraulics. Our
            team of seasoned professionals ensures that every product is
            meticulously engineered to meet the highest standards of
            performance, reliability, and durability. We utilize cutting-edge
            technology and adhere to industry best practices to design and
            manufacture solutions that not only enhance operational efficiency
            but also stand the test of time. Our rigorous quality control
            processes ensure that every product leaving our facility is of the
            utmost quality, providing our customers with the confidence and
            peace of mind they deserve.
          </p>
        </div>

        <div className="productbox">
          <h1 className="heading1">Our Products</h1>
          <hr />
          <div className="productcard">
            {[p1, p1, p1].map((product, index) => (
              <div className="card" key={index}>
                <img
                  className="productimg"
                  src={product}
                  alt={`Product ${index + 1}`}
                />
                <div className="arrowlink">
                  <Link to={`/products/id:${index + 1}`}>
                    <GoArrowUpRight className="GoArrowUpRight" />
                  </Link>
                </div>
                <div className="info">
                  <h3 className="productname">Hydraulic Power Pack</h3>
                  <p className="productdesc">
                    Our hydraulic power packs are designed for optimal
                    performance, offering reliability and efficiency in various
                    industrial applications.
                  </p>
                </div>
              </div>
            ))}
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
