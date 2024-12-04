import React, { useState, useEffect } from 'react';
import './home.css';  
import SecondHomePage from './SecondHomePage';


function FirstHome() {
  const [isActive, setIsActive] = useState(false); 
  const messages = [
    "SIGN UP & GET 15% OFF",
    "FREE DELIVERY",
    "EASY RETURNS"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade-out animation

      // After the fade-out duration (1 second), update the text
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
        setFade(true); // Start fade-in animation
      }, 1000);
    }, 4000); // Change text every 4 seconds

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  const openTopHandle = () => {
    setIsActive(true); // Show the top section when clicked
  };

  const closeTopHandle = () => {
    setIsActive(false); // Hide the top section when closed
  };

  return (
    <div>
      <div className="dynamic-text" onClick={openTopHandle}>
        <span
          className={`changing-text ${fade ? 'fade-in' : 'fade-out'}`}
        >
          {messages[currentIndex]}
        </span>
      </div>

      {isActive && (
        <div className={`first-top-toggle ${isActive ? 'active' : ''}`}>
          <button className="close-top" onClick={closeTopHandle}>
            Close
          </button>
          <div className="flex-toggle-top">
            <div className="top-col">
              <ul className="top-ul">
                <li className="li-top top-li-bold">SIGN UP & GET 15% OFF</li>
                <p className="li-top-para">
                  Members get more! Like a 15% discount voucher, early access to the sale, and access to limited edition products. Sign up now!
                </p>
                <li className="li-top top-anchor"><a href="#">Learn More</a></li>
              </ul>
            </div>

            <div className="top-col">
              <ul className="top-ul">
                <li className="li-top top-li-bold">FREE DELIVERY, RETURN & EXCHANGE</li>
                <p className="li-top-para">
                  Spend over Rs1000/- and your delivery is FREE! For all orders, Return & Exchange is offered for free.
                  Delivery times for Delhi, Gurgaon: 1-2 Days, Metro Cities: 2-3 Days, Others: 3-5 Days.
                </p>
                <li className="li-top top-anchor"><a href="#">READ MORE ON RETURN</a></li>
                <li className="li-top top-anchor"><a href="#">READ MORE ON EXCHANGE</a></li>
              </ul>
            </div>

            <div className="top-col">
              <ul className="top-ul">
                <li className="li-top top-li-bold">EXTRA 5% OFF ON PREPAID ORDERS</li>
                <p className="li-top-para">
                  Save 5% Extra on prepaid payments for all orders under Rs 5000/-. Easy Payments from UPI, Credit Card, and Net-banking.
                </p>
              </ul>
            </div>
          </div>
        </div>
      )}

      <SecondHomePage />
    </div>
  );
}

export default FirstHome;