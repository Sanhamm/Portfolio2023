import React from "react";
import "./style.modules.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className='aboutDiv' id='aboutMe'>
      <h1 className='aboutHeading'>Get to know me</h1>
      <p className='aboutPar'>
        Hey there! My name is Sander, and I'm a 25-year-old frontend developer
        who's just graduated from school and eagerly looking for work
        opportunities in the exciting world of web development. I must say, I've
        fallen head over heels for coding ever since I transitioned from being
        an electrician to pursuing a career in development.
      </p>
      <Link to={"/Aboutme"}>
        <button className='aboutBtn'>Read more</button>
      </Link>
    </div>
  );
};

export default About;
