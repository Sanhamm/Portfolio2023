import React, { useState, useEffect } from "react";
import HeroDiv from "./hero";
import Skills from "./skills";
import About from "./about";
import "../../main.css";
import { MdKeyboardDoubleArrowDown, MdArrowCircleUp } from "react-icons/md";
import MyProjects from "./myProjects";
import { HashLink as Link } from "react-router-hash-link";

const FrontPage = () => {
  const [showArrow, setShowArrow] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowArrow(true);
    } else {
      setShowArrow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className='mainDiv'>
      <HeroDiv />
      <About />
      <Skills />
      <div>
        <h1 className='heading'>See what my skills made</h1>
        <Link to='#myProjects' smooth className='arrowDown'>
          <MdKeyboardDoubleArrowDown />
        </Link>
      </div>
      <MyProjects />
      {showArrow && (
        <div className='backToTop' onClick={scrollToTop} smooth>
          <MdArrowCircleUp className='arrowToTop' />
        </div>
      )}
    </div>
  );
};

export default FrontPage;
