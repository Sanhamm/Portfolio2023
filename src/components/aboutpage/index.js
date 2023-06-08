import React, { useState } from "react";
import "./style.modules.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const AboutPage = () => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleShowFullText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div className='aboutDiv'>
      <h1 className='AboutHead'>A little about me</h1>
      <p className='AboutPar'>
        Hey there! My name is Sander, and I'm a 25-year-old frontend developer
        who's just graduated from school and eagerly looking for work
        opportunities in the exciting world of web development. I must say, I've
        fallen head over heels for coding ever since I transitioned from being
        an electrician to pursuing a career in development.
        <br />
        <br /> When I'm not diving into lines of code, you can find me engaging
        in a variety of activities. One of my greatest passions is playing
        football. There's something magical about the teamwork, strategy, and
        exhilaration that comes with each match. I've been part of a local team
        for several years, and the bond with my teammates is something I
        cherish.
        <br />
        <br /> Apart from football, I'm also quite the fitness enthusiast. I
        love hitting the gym and working up a sweat. The feeling of progress and
        improvement keeps me motivated, and it's a great way to balance out the
        sedentary nature of coding. I believe that maintaining a healthy body
        goes hand in hand with nurturing a sharp mind.
        <br />
        {showFullText ? (
          <>
            <br /> In addition to football and hitting the gym, I'm also an avid
            fan of padel tennis. It's a sport that combines elements of tennis
            and squash, and it never fails to get my adrenaline pumping. The
            fast-paced nature and strategic gameplay make every match an
            exhilarating experience.
            <br />
            <br /> When I want to reconnect with nature and escape the bustling
            city life, you'll find me hiking in the mountains. There's something
            serene and awe-inspiring about being surrounded by majestic peaks
            and untouched landscapes. It's my way of finding tranquility and
            appreciating the beauty of the natural world.
            <br />
            <br /> Of course, like many others, I do enjoy some downtime gaming
            as well. Whether it's exploring vast virtual worlds or engaging in
            competitive multiplayer battles, gaming allows me to unwind, have
            fun, and sometimes even connect with friends from all over the
            globe.
            <br />
            <br /> All in all, I'm a passionate, driven, and adventurous
            individual who is eager to grow both personally and professionally.
            I believe that my background as an electrician gives me a unique
            perspective and problem-solving skills that I can bring to the world
            of frontend development. I'm excited about the opportunities that
            lie ahead and the chance to create impactful and user-friendly
            experiences on the web.
            <br />
            <br /> If you'd like to connect, collaborate, or just have a chat,
            feel free to reach out. I'm always open to new experiences,
            challenges, and friendships. Cheers!
          </>
        ) : null}
      </p>
      <div className='showMoreDiv'>
        {showFullText ? (
          <p className='ShowMoreBtn' onClick={toggleShowFullText}>
            Show less..
          </p>
        ) : (
          <p className='ShowMoreBtn' onClick={toggleShowFullText}>
            Show More..
          </p>
        )}
      </div>
      <div className='BtnDiv'>
        <button className='Btns'>
          <a
            className='aStyle'
            href='https://www.linkedin.com/in/sander-hammersland-04285b203/'
            target='_blank'
          >
            Linkedin <FaLinkedin />
          </a>
        </button>
        <button className='Btns'>
          <a
            className='aStyle'
            target='_blank'
            href='https://github.com/Sanhamm'
          >
            Github <FaGithub />
          </a>
        </button>
      </div>
    </div>
  );
};

export default AboutPage;
