import React, { useState } from "react";
import HeroPage from "../components/HeroPage";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Aboutus = () => {
  const progressData = [
    { value: 66, title: "Title 1" },
    { value: 75, title: "Title 2" },
    { value: 80, title: "Title 3" },
    { value: 90, title: "Title 4" },
    { value: 100, title: "Title 5" },
  ];

  return (
    <>
      <HeroPage heading="About Us" />
      <div className="about-us">
        <div className="aboutbgbox">
          <h1 className="heading1">Welcome to M.K Hydraulics</h1>
        </div>
        <div className="about-content">
          <div className="about-page">
            <Section
              number="01"
              title="Who are we"
              content="M.K Hydraulics, established in 2006, is a leading manufacturer of specialized hydraulic systems. With over 18 years of experience, our founder K. Mushtaq has guided the company in delivering high-quality products including hydraulic power packs, cylinders, and customized solutions for various industries like pharmaceuticals, marine, and steel mills."
            />
            <Section
              number="02"
              title="Vision"
              content="Our vision is to be a global leader in hydraulic solutions, providing innovative and reliable products that meet the evolving needs of our clients. We strive to set industry standards in quality, customer satisfaction, and environmental responsibility."
            />
            <Section
              number="03"
              title="Mission"
              content="M.K Hydraulics is committed to engineering excellence and customer service. Our mission is to deliver advanced hydraulic systems that enhance operational efficiency and safety, while fostering sustainable practices. We aim to build lasting partnerships with our clients through quality products and dedicated support."
            />
          </div>

          <div className="about-page progress-section">
            {progressData.map((item, index) => (
              <div className="progress-container" key={index}>
                <CircularProgressbar
                  value={item.value}
                  text={`${item.value}%`}
                  styles={buildStyles({
                    pathColor: "#0085ff",
                    textColor: "#0085ff",
                  })}
                />
                <p className="progress-title">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const Section = ({ number, title, content }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="about-sec">
      <div
        className="about-bgbox"
        onClick={toggleSection}
        style={{ cursor: "pointer" }}
        role="button"
        aria-expanded={isOpen}
      >
        <h1>
          <span>{number} -</span>
          {title} {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </h1>
      </div>
      {isOpen && (
        <div className="about-bgbox-content">
          <p className="about-content">{content}</p>
        </div>
      )}
    </div>
  );
};

export default Aboutus;
