import React from "react";
import HeroPage from "../components/HeroPage";

const Contactus = () => {
  return (
    <>
      <HeroPage heading="Contact Us" />
      <div className="contact-us">
        <div className="contact-sec">
          <div className="contactbx1">
            <h2>We're here to help you</h2>
            <p>
              Shoot us a message if you have any questions, we’re here to help!
            </p>
            <div>
              <div>
                <label htmlFor="name">
                  <h3>Your Name</h3>
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  id="name"
                />
              </div>
              <div>
                <label htmlFor="email">
                  <h3>Your Email</h3>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  id="email"
                />
              </div>
            </div>
            <div>
              <label htmlFor="organization">
                <h3>Your Organization's Name</h3>
              </label>
              <input
                type="text"
                placeholder="Enter your organization's name"
                name="organization"
                id="organization"
              />
            </div>
            <div>
              <label htmlFor="message">
                <h3>Your Message</h3>
              </label>
              <textarea
                name="message"
                placeholder="Write your message"
                id="message"
              ></textarea>
            </div>
            <button className="contact-button">Send</button>
          </div>
          <div className="contactbx2">
            <h2>Get in touch</h2>
            <p>
              Shoot us a message if you have any questions, we’re here to help!
              Shoot us a message if you have any questions, we’re here to help!
              Shoot us a message if you have any questions, we’re here to help!
              Shoot us a message if you have any questions, we’re here to help!
            </p>
            <hr />
            <div className="address">
              <h2>Address</h2>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Aspernatur.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactus;
