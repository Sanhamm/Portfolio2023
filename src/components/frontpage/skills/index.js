import { FaReact, FaCss3Alt, FaBootstrap, FaSass } from "react-icons/fa";
import {
  SiJest,
  SiCypress,
  SiVite,
  SiJavascript,
  SiFigma,
  SiWebpack,
} from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { BsWordpress } from "react-icons/bs";
import React from "react";
import "./style.modules.css";
const Skills = () => {
  return (
    <div>
      <h1 className='skillsHeading'>My skills so far</h1>
      <ul className='skillsList'>
        <li>
          <FaReact title='React' />
        </li>
        <li>
          <AiFillHtml5 title='Html' />
        </li>
        <li>
          <FaCss3Alt title='Css' />
        </li>
        <li>
          <FaBootstrap title='Boostrap' />
        </li>
        <li>
          <SiJavascript title='Javascript' />
        </li>
        <li>
          <SiJest title='Jest' />
        </li>
        <li>
          <SiCypress title='Cypress' />
        </li>
        <li>
          <BsWordpress title='Wordpress' />
        </li>
        <li>
          <SiVite title='Vite' />
        </li>
        <li>
          <SiFigma title='Figma' />
        </li>
        <li>
          <FaSass title='Sass' />
        </li>
        <li>
          <SiWebpack title='Webpack' />
        </li>
      </ul>
    </div>
  );
};

export default Skills;
