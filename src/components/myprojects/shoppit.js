import React, { useState } from "react";
import img from "../../media/shoppitskjermbilde.png";
import "./style.modules.css";

const ShoppitPage = () => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleShowFullText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div className='projectDiv'>
      <img className='projectImg' src={img} alt='im' />
      <h1 className='projectHead'>Shoppit</h1>
      <p className='projectPar'>
        Welcome to Shoppit - your ultimate destination for a unique shopping
        experience. Powered by the capabilities of React, Ant Design, and Styled
        Components, Shoppit seamlessly combines functionality and aesthetic
        appeal. This exciting project provides access to a comprehensive API
        featuring a diverse range of equipment available at varying prices.
        Whether you're looking for something specific or want to explore the
        extensive selection, you can easily add desired products to your cart
        and smoothly proceed to checkout.
        <br />
        <br />
        Shoppit aims to create a user-friendly and visually appealing platform,
        with React serving as the cornerstone to achieve this. By leveraging
        React's component-based structure, Shoppit has achieved a modular
        design, enabling easy maintenance and scalability. This allows users to
        navigate effortlessly through the vast array of products and add
        favorites to their shopping carts.
        <br />
        <br />
        {showFullText ? (
          <>
            Ant Design has played a significant role in providing Shoppit with a
            professional and sleek visual appeal. With its extensive range of
            pre-designed components, Ant Design ensures that every detail is
            thoughtfully crafted. From navigation menus to product pages, each
            element on the Shoppit website is meticulously designed to create
            exceptional user experiences. Ant Design also offers rapid
            development and outstanding functionality.
            <br />
            <br />
            Styled Components has enabled Shoppit to customize its appearance to
            the fullest. By integrating styles directly into the components,
            Styled Components has provided Shoppit with a unique and
            well-considered visual identity. The combination of Ant Design and
            Styled Components has resulted in an aesthetically appealing
            interface that captures users' attention and provides an intuitive
            and luxurious shopping experience.
            <br />
            <br />
            So, set sail for Shoppit, where React, Ant Design, and Styled
            Components converge to create an elegant and user-friendly platform.
            Explore the wide range of equipment, add favorites to your shopping
            cart, and experience a seamless checkout process. Shoppit awaits
            you, ready to transform your shopping experience into something
            extraordinary.
            <br />
            <br />
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
          <a href='https://github.com/Sanhamm/ca-react' target='_blank'>
            Github{" "}
          </a>
        </button>
        <button className='projectBtn'>
          <a href='https://shoppitas.netlify.app/' target='_blank'>
            Website
          </a>
        </button>
      </div>
    </div>
  );
};

export default ShoppitPage;
