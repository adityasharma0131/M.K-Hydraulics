import React from "react";
import HeroPage from "../components/HeroPage";
const Aboutus = () => {
  return (
    <>
      <HeroPage heading="About Us" />
      <div className="about-us">
        <div className="aboutbgbox">
          <h1 className="heading1">Welcome to M.K Hydraulics</h1>
        </div>
        <div className="about-page">
          <div className="about-sec">
            <div className="about-bgbox">
              <h1>
                <span>01 -</span>
                 Who are we
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
