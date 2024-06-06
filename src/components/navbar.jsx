import React from "react";
import { IoSearch } from "react-icons/io5";
import { FaFilter } from "react-icons/fa6";
import { FaToggleOn } from "react-icons/fa";
import { FaToggleOff } from "react-icons/fa6";

const Navbar = ({ bgColor, color, toggleButton,toggle}) => {
  const bgcolor = color == "black" ? "#cbc5c5" : "black"
  return (
    <>
      <div className="nav_bar"
      style={{
        backgroundColor:`${bgcolor}`
      }}>
        <div className="logo">
          ToggleFrontend
          <div onClick={toggleButton}>
          {toggle ? (
            <FaToggleOn />

          ):(
            <FaToggleOff/>
          )
        
      }
          
             {" "}
          </div>
        </div>
        <div className="search">
          <div className="left">
            <IoSearch /> Search here..
          </div>
          <div className="right">
            <FaFilter /> Filters
          </div>
        </div>
        <div className="seller">Become a seller</div>
      </div>
    </>
  );
};

export default Navbar;
