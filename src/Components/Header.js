import React from "react";
import img from "./QOTES.png";

const Header = () => {
  return (
    <div>
      <div className="row p-2">
        <div className="col-6">
          <h2 className="h4 text-start p-3">
            VARUN <span className="text-danger">Blogs</span>
          </h2>
        </div>
        <div className="col-6">
          <h2 className="h5 text-end p-3">
            MAKE <span className="text-danger">EDUCATION SIMPLE</span>{" "}
          </h2>
        </div>
      </div>
      <div className="row">
        <img src={img} alt="QQoutes" />
      </div>
    </div>
  );
};

export default Header;
