import React from "react";
import { Link } from "react-router-dom";
import resume from "../../../media/SanderCV.pdf";
import "./style.modules.css";

const Header = () => {
  const openResume = () => {
    window.open(resume, "_blank");
  };
  return (
    <div className='Header'>
      <h1 className='h1'>Sanhamm</h1>
      <ul className='menu'>
        <Link to={"/"}>Home</Link>
        <Link onClick={openResume}>CV</Link>
        <a href='mailto:utviklersander@gmail.com'>Contact</a>
      </ul>
    </div>
  );
};

export default Header;
