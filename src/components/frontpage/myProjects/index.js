import React from "react";
import holidaze from "../../../media/skjermbilde holidaze.png";
import shoppit from "../../../media/shoppitskjermbilde.png";
import bid from "../../../media/skjermbilde-bid.png";
import "./style.modules.css";
import { Link } from "react-router-dom";
const MyProjects = () => {
  return (
    <div id='myProjects' className='myProjects'>
      <div className='projectName'>
        <img className='projectImg' src={holidaze} alt='holidaze ' />
        <h2 className='projectHeading'>Holidaze</h2>
        <p className='projectPar'>
          Introducing a truly opulent online destination, meticulously designed
          to deliver an unparalleled luxury experience. Leveraging the power of
          cutting-edge technologies such as React, Ant Design, and Styled
          Components, this page radiates elegance with its sophisticated dark
          and gold color palette, creating a captivating visual aura.
        </p>
        <div className='btndiv'>
          <button className='projectBtn'>
            <Link to={"/holidaze"}>Read more</Link>
          </button>
        </div>
      </div>
      <div className='projectName'>
        <img className='projectImg' src={shoppit} alt=' shoppit' />
        <h2 className='projectHeading'>Shoppit</h2>
        <p className='projectPar'>
          Welcome to Shoppit - your ultimate destination for a unique shopping
          experience. Powered by the capabilities of React, Ant Design, and
          Styled Components, Shoppit seamlessly combines functionality and
          aesthetic appeal. This exciting project provides access to a
          comprehensive API featuring a diverse range of equipment available at
          varying prices. Whether you're looking for something specific or want
          to explore the extensive selection, you can easily add desired
          products to your cart and smoothly proceed to checkout.
        </p>
        <div className='btndiv'>
          <button className='projectBtn'>
            <Link to={"/shoppit"}>Read more</Link>
          </button>
        </div>
      </div>
      <div className='projectName'>
        <img className='projectImg' src={bid} alt='bid' />
        <h2 className='projectHeading'>BiD</h2>
        <p className='projectPar'>
          Welcome to BiD, your ultimate online auction platform. Built with
          HTML, Tailwind CSS, and vanilla JavaScript, BiD offers a seamless and
          user-friendly experience. This dynamic website allows users to not
          only add their own products for auction but also participate in
          bidding on products listed by others.
        </p>
        <div className='btndiv'>
          <button className='projectBtn'>
            <Link to={"/bid"}>Read more</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
