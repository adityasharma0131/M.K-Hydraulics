import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/WhatsApp_Image_2024-07-10_at_8.22.02_PM-removebg-preview 3.png";
import p1 from "../assets/image 1.png";
import p2 from "../assets/image 5.png";
import { GoArrowUpRight } from "react-icons/go";

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
  ];

  return (
    <>
      <div className="homepage">
        <img className="hero-logo" src={logo} alt="M.K Hydraulics Logo" />
      </div>

      <div className="weare">
        <div className="bgbox">
          <h1 className="heading1">We Are,</h1>
          <h1 className="heading2">M.K Hydraulics</h1>
          <p className="para">
            M.K Hydraulics is a leading manufacturer renowned for its expertise in delivering high-quality hydraulic solutions. With a diverse product portfolio that includes hydraulic power packs, hydraulic cylinders, pharma machines, marine hydraulic power pack units, and lubrication systems, we cater to a broad range of industrial applications. Our specialized offerings extend to steel mill hydraulic units and hydraulic bag lifting devices for centrifuges, reflecting our commitment to innovation and meeting the unique demands of each sector.
            <br />
            <br />
            Quality is at the heart of everything we do at M.K Hydraulics. Our team of seasoned professionals ensures that every product is meticulously engineered to meet the highest standards of performance, reliability, and durability. We utilize cutting-edge technology and adhere to industry best practices to design and manufacture solutions that not only enhance operational efficiency but also stand the test of time. Our rigorous quality control processes ensure that every product leaving our facility is of the utmost quality, providing our customers with the confidence and peace of mind they deserve.
          </p>
        </div>

        <div className="productbox">
          <h1 className="heading1">Our Products</h1>
          <hr />
          <div className="productcard">
            {[p1, p1, p1].map((product, index) => (
              <div className="card" key={index}>
                <img className="productimg" src={product} alt={`Product ${index + 1}`} />
                <div className="arrowlink">
                  <Link to={`/products/id:${index + 1}`}>
                    <GoArrowUpRight className="GoArrowUpRight" />
                  </Link>
                </div>
                <div className="info">
                  <h3 className="productname">Hydraulic Power Pack</h3>
                  <p className="productdesc">
                    Our hydraulic power packs are designed for optimal performance, offering reliability and efficiency in various industrial applications.
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
          <h1 className="heading1">Our Clients</h1>
          <hr />
          <div className="slider">
            <div className="logos">
              <div className="logos-slide">
                {clientImages.concat(clientImages).map((image, index) => (
                  <img key={index} src={image} alt={`Client ${index + 1}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
