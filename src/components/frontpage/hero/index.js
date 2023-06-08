import React from "react";
import HeroImg from "../../../media/saaander.jpg";
import "./style.modules.css";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { HashLink as Link } from "react-router-hash-link";

const HeroDiv = () => {
  return (
    <div className='heroDiv'>
      <img src={HeroImg} alt='profile pic of sander' className='heroPic' />
      <div className='heroTextDiv'>
        <h1 className='heroText'>
          Hi, My name is Sander. I am a frontend developer
        </h1>
        <Link className='Linkclass' to='#aboutMe' smooth>
          <MdKeyboardDoubleArrowDown className='arrowToAbout' />
        </Link>
      </div>
    </div>
  );
};

export default HeroDiv;
