import React, { useState } from "react";
import img from "../../media/skjermbilde holidaze.png";
import "./style.modules.css";

const HolidazePage = () => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleShowFullText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div className='projectDiv'>
      <img className='projectImg' src={img} alt='im' />
      <h1 className='projectHead'>Holidaze</h1>
      <p className='projectPar'>
        Crafting an Exquisite Digital Experience with React, Ant Design, and
        Styled Components
        <br />
        <br />
        Introducing a truly opulent online destination, meticulously designed to
        deliver an unparalleled luxury experience. Leveraging the power of
        cutting-edge technologies such as React, Ant Design, and Styled
        Components, this page radiates elegance with its sophisticated dark and
        gold color palette, creating a captivating visual aura.
        <br />
        <br />
        The seamless integration of React, a robust JavaScript library, ensures
        a smooth and dynamic user interface that surpasses expectations. With
        its component-based architecture, React empowers the page to be highly
        modular, allowing for easy maintenance and scalability. This enables
        effortless navigation and interaction, elevating the overall user
        experience to new heights.
        <br />
        <br />
        {showFullText ? (
          <>
            {" "}
            Taking advantage of Ant Design, a comprehensive UI library, every
            detail of the page has been meticulously refined to exude luxury.
            From the tastefully crafted navigation elements to the meticulously
            designed forms and buttons, Ant Design brings a touch of
            sophistication to every corner. Its extensive collection of
            pre-designed components enables rapid development, enabling the
            creation of a visually stunning and highly functional website.
            <br />
            <br />
            Styled Components, a powerful CSS-in-JS library, takes customization
            to the next level. By encapsulating styles within the React
            components themselves, Styled Components allows for easy management
            and reusability of styles. The dark and gold color scheme,
            meticulously chosen to evoke an atmosphere of opulence, is
            seamlessly integrated into the components, creating a cohesive and
            visually striking aesthetic.
            <br />
            <br />
            The result is a digital masterpiece that epitomizes luxury. Every
            element has been thoughtfully designed and meticulously implemented
            to deliver an exceptional user experience. The fusion of React, Ant
            Design, and Styled Components has brought this vision to life,
            making it easy and clean, while radiating the unmistakable allure of
            luxury.
            <br />
            <br />
            Immerse yourself in the world of unparalleled refinement and
            sophistication. Explore this remarkable creation and witness
            firsthand how the harmonious blend of technology and design can
            transform an online platform into an oasis of luxury.
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
      <div className='projectBtnDiv'>
        <button className='projectBtn'>
          <a
            href='https://github.com/Sanhamm/Holidaze-exam2023'
            target='_blank'
          >
            Github{" "}
          </a>
        </button>
        <button className='projectBtn'>
          <a href='https://serene-pasca-351db5.netlify.app/' target='_blank'>
            Website
          </a>
        </button>
      </div>
    </div>
  );
};

export default HolidazePage;
