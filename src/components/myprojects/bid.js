import React, { useState } from "react";
import img from "../../media/skjermbilde-bid.png";

const BidPage = () => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleShowFullText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div className='projectDiv'>
      <img className='projectImg' src={img} alt='im' />
      <h1 className='projectHead'>BiD</h1>
      <p className='projectPar'>
        Welcome to BiD, your ultimate online auction platform. Built with HTML,
        Tailwind CSS, and vanilla JavaScript, BiD offers a seamless and
        user-friendly experience. This dynamic website allows users to not only
        add their own products for auction but also participate in bidding on
        products listed by others.
        <br />
        <br />
        With a clean and intuitive interface, BiD makes it easy for users to
        navigate through the site and explore the available products up for
        auction. Using HTML, the website structure is well-organized, ensuring a
        smooth browsing experience for users.
        <br />
        <br />
        <br />
        <br />
        {showFullText ? (
          <>
            Tailwind CSS brings a modern and responsive design to BiD, making it
            visually appealing and accessible across various devices. The
            framework's utility-first approach allows for easy customization and
            ensures that the website is visually consistent and aesthetically
            pleasing..
            <br />
            <br />
            Leveraging the power of vanilla JavaScript, BiD incorporates
            interactive features that enhance the bidding experience. Users can
            place bids on their desired products, receive real-time updates on
            ongoing auctions, and stay informed about the latest bid amounts..
            <br />
            <br />
            Whether you're a seller looking to showcase your products or a
            bidder searching for exciting deals, BiD provides a platform that
            caters to both needs. Experience the thrill of bidding and the
            satisfaction of winning on BiD, where HTML, Tailwind CSS, and
            vanilla JavaScript come together to create an engaging and immersive
            auction experience..
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
          <a
            href='https://github.com/Sanhamm/SemesterOppgave2022'
            target='_blank'
          >
            Github
          </a>
        </button>
        <button className='projectBtn'>
          <a
            href='https://tourmaline-cupcake-297a95.netlify.app/'
            target='_blank'
          >
            Website
          </a>
        </button>
      </div>
    </div>
  );
};

export default BidPage;
