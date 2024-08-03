import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
const EditSocials = () => {
  return (
    <>
      <div className="dashboard-name">
        <div className="dash-opr-head">
          <h1>
            <Link className="dash-head" to="/social-operation">
              Socials Page
            </Link>
            <IoIosArrowForward />
            Edit Social
          </h1>
        </div>
      </div>
    </>
  );
};

export default EditSocials;
