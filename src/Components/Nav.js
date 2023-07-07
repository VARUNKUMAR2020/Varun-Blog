import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="row text-center my-5 sticky-top ">
      <div className="col-2  mt-3  ">
        <NavLink to="/">Home</NavLink>  
      </div>
      <div className="col-2  mt-3">
        <NavLink to="/HTML">HTML</NavLink>
      </div>
      <div className="col-2  mt-3">
        <NavLink to="/CSS">CSS</NavLink>
      </div>
      <div className="col-2  mt-3">
        <NavLink to="/BOOTSTRAP">BOOTSTRAP</NavLink>
      </div>
      <div className="col-2  mt-3">
        <NavLink to="/JAVASCRIPT">JavaScript</NavLink>
      </div>
      <div className="col-2  mt-3">
        <NavLink to="/REACT">REACT</NavLink>
      </div>
      <hr className="mt-4"/>
    </div>
  );
};

export default Nav;
