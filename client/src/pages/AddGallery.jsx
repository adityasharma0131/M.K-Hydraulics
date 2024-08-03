import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const AddGallery = () => {
  return (
    <>
      <div className="dashboard-name">
        <div className="dash-opr-head">
          <h1>
            <Link className="dash-head" to="/gallery-operation">
              Gallery Page
            </Link>
            <IoIosArrowForward />
            Add Image
          </h1>
        </div>
      </div>
    </>
  );
};

export default AddGallery;
