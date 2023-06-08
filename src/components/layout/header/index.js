import React, { useState } from "react";
import { Link } from "react-router-dom";
import resume from "../../../media/SanderCV.pdf";
import "./style.modules.css";
import { BsMenuButton } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const openResume = () => {
    window.open(resume, "_blank");
  };
  return (
    <>
      <div className='Header'>
        <h1 className='h1'>Sanhamm</h1>
        <ul className='menu'>
          <Link to={"/"}>Home</Link>
          <Link to={"/aboutme"}>About</Link>
          <Link onClick={openResume}>CV</Link>
          <a href='mailto:utviklersander@gmail.com'>Contact</a>
        </ul>
        <AiOutlineMenu className='burger' onClick={toggleMenu} />
      </div>
      {menuOpen === true ? (
        <ul className='hamburgerMenu'>
          <Link to={"/"} onClick={toggleMenu}>
            Home
          </Link>
          <Link to={"/aboutme"} onClick={toggleMenu}>
            About
          </Link>
          <Link onClick={openResume}>CV</Link>
          <a href='mailto:utviklersander@gmail.com'>Contact</a>
        </ul>
      ) : null}
    </>
  );
};

export default Header;
