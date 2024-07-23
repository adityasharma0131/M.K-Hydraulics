import React, { useState } from "react";
import HeroPage from "../components/HeroPage";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const Aboutus = () => {
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
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magnam in dolores culpa, assumenda, dolorem minus nam blanditiis qui voluptas enim nemo quam? Temporibus non quis, optio aspernatur magnam ullam."
            />
            <Section
              number="02"
              title="Vision"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magnam in dolores culpa, assumenda, dolorem minus nam blanditiis qui voluptas enim nemo quam? Temporibus non quis, optio aspernatur magnam ullam."
            />
            <Section
              number="03"
              title="Mission"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magnam in dolores culpa, assumenda, dolorem minus nam blanditiis qui voluptas enim nemo quam? Temporibus non quis, optio aspernatur magnam ullam."
            />
          </div>

          <div className="about-page">
            <p>Hellooo there</p>
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
